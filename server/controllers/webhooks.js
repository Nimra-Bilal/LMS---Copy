// import { Webhook } from "svix";
// import User from "../models/User.js";
// //api contoller funct to manage clerk user with db
// export const clerkWebhooks = async (req, res) => {  
//     try {  
//         const whook = new Webhook(process.env.CLERK_WEBHOOK_SECRET);  

//         await whook.verify(JSON.stringify(req.body), {  
//             "svix-id": req.headers["svix-id"],  
//             "svix-timestamp": req.headers["svix-timestamp"],  
//             "svix-signature": req.headers["svix-signature"] 
//         });  

//         const { data, type } = req.body;
//         switch (type) {
//             case 'user.created':{
//                 const userData = {
//                     _id:data.id,
//                     email:data.email_addresses[0].email_address,
//                     name:data.first_name + " " + data.last_name,
//                     imageUrl:data.image_url,

//                 }
//                 await User.create(userData)
//                 res.json({})
//                 break;  
//            }

//            case 'user.updated':{
//             const userData = {
               
//                 email:data.email_addresses[0].email_address,
//                 name:data.first_name + " " + data.last_name,
//                 imageUrl:data.image_url,
//             }
//             await User.findByIdAndUpdate(data.id , userData)
//             res.json({})
//             break;
//         }

//         case 'user.deleted':{
//             await User.findByIdAndDelete(data.id)
//             res.json({})
//             break;
//         }
                
              
        
//             default:
//                 break;
//         }
        
//     } catch (error) {
//         // Error handling

//         res.json({success:false , message:error.message})
//     }
// }

import { Webhook } from "svix";
import User from "../models/User.js";
import dotenv from "dotenv";
dotenv.config();

export const clerkWebhooks = async (req, res) => {
  try {
    const whook = new Webhook(process.env.CLERK_WEBHOOK_SECRET);
    
    // 👇 raw buffer payload (DO NOT parse it yourself)


    const payload = req.body;
    const headers = {
      "svix-id": req.headers["svix-id"],
      "svix-timestamp": req.headers["svix-timestamp"],
      "svix-signature": req.headers["svix-signature"],
    };
    
console.log("Raw Body (Buffer):", payload.toString());
console.log("Headers:", headers);

    const evt = whook.verify(payload, headers);
    const { data, type } = evt;

    console.log("Webhook Received:", type);

    switch (type) {
      case "user.created": {
        const userData = {
          _id: data.id,
          email: data.email_addresses[0].email_address,
          name: data.first_name + " " + data.last_name,
          imageUrl: data.image_url,
        };
        await User.create(userData);
        console.log("✅ User saved to DB:", userData);
        return res.json({ success: true });
      }

      case "user.updated": {
        const userData = {
          email: data.email_addresses[0].email_address,
          name: data.first_name + " " + data.last_name,
          imageUrl: data.image_url,
        };
        await User.findByIdAndUpdate(data.id, userData);
        return res.json({ success: true });
      }

      case "user.deleted": {
        await User.findByIdAndDelete(data.id);
        return res.json({ success: true });
      }

      default:
        console.log("Unhandled event type:", type);
        return res.json({ received: true });
    }
  } catch (error) {
    console.error("❌ Webhook Error:", error.message);
    return res.status(400).json({ success: false, message: error.message });
  }
};
