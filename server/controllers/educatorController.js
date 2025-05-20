import {clerkClient} from '@clerk/express'
import Course from '../models/Course.js'
import {v2 as cloudinary} from 'cloudinary'
import User from '../models/User.js'
import { Purchase } from '../models/Purchase.js'

export const updateRoleToEducator = async (req,res)=>{
try {
    //update role to educator
    const userId = req.auth.userId
    await clerkClient.users.updateUserMetadata(userId , {
        publicMetadata:{
            role:'educator',
        }
    })
    res.json ({success :true , message: 'you can publish your course now '})
} catch (error) {
    res.status(500).json({ success: false, error: error.message });
}
}

//add new course 
export const addCourse = async(req,res)=>{
    try {
        const {courseData} = req.body ; 
        const imageFile = req.file;
        const educatorId = req.auth.userId

if(!imageFile){
    return res.json({success:false , message:'thumbnail not attached'})
}

const parsedCourseData = await JSON.parse(courseData)
parsedCourseData.educator=educatorId
const newCourse= await Course.create(parsedCourseData)
const imageUpload = await cloudinary.uploader.upload(imageFile.path)
newCourse.courseThumbnail=imageUpload.secure_url
await newCourse.save()
res.json({success:true , message:'course added' })
    } catch (error) {
        res.json({success:false , message:error.message })
    }
}
//get educator courses
export const getEducatorCourses=async(req,res)=>{
try {
  const  educator =req.auth.userId
   const courses = await Course.find({educator})
   res.json({success:true , courses})
} catch (error) {
    res.json({success:false , message:error.message })
}
}

//get educator dashboard data (total earning , enrolled students , no. of courses)
export const educatorDashboardData = async (req, res) =>{
    try {

const educator = req.auth.userId;

// Get all courses created by the educator
const courses = await Course.find({ educator });
const totalCourses = courses.length;

// Extract course IDs
const courseIds = courses.map(course => course._id); // Fixed: should be course._id, not course_id

// Calculate total earnings from completed purchases
const purchases = await Purchase.find({
    courseId: { $in: courseIds },
    status: 'completed'
});

// Calculate total earnings by summing up all purchase amounts
const totalEarnings = purchases.reduce((sum, purchase) => sum + purchase.amount, 0); // Fixed: added .amount and initial value 0

//collect unique enrolled student ids with their respective course titles
const enrolledStudentsData = [];
for (const course of courses) {
    const students = await User.find({ 
        _id: {$in:course.enrolledStudents }}
    , 'name imageUrl');
    
students.forEach(student => {
    enrolledStudentsData.push(
        {courseTitle: course.coursetitle ,student
});

}
);

} 
res.json({success:true ,dashboardData:{
    totalEarnings,enrolledStudentsData,totalCourses
}})
}
catch (error) {
    res.json({success:false , message:error.message })
    }
}

//get enrolled students data with purchase data
export const getEnrolledStudentsData = async (req, res) =>{
    try {
        const  educator =req.auth.userId
        const courses = await Course.find({educator})
        const courseIds = courses.map(course =>course._id);
        const purchases = await Purchase.find({
            courseId:{$in:courseIds},
            status: 'completed'
        }).populate('userId' , 'name imageUrl').populate('courseId', 'courseTitle');

const enrolledStudents = purchases.map(purchase=>({
student:purchase.userId,
courseTitle:purchase.courseId.courseTitle,
purchaseDate:purchase.createdAt
}));

res.json({success:true , enrolledStudents})
    } catch (error) {
        res.json({success:false , message:error.message })
    }
}