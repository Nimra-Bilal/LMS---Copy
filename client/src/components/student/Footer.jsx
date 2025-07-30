// import React from 'react'
// import { assets } from '../../assets/assets'

// const Footer = () => {
//   return (
//     <footer className='bg-gray-900 md:px-36 text-left w-full mt-10 '>
//       <div className='flex flex-col md:flex-row items-start px-8 md:px-0 justify-center g-10 md:gap-32 py-10 border-b border-white/30'>
//      <div className='flex flex-col md:items-start items-center w-full'>
//       <img  src={assets.logo_dark} alt="logo" /> 
//       <p className='mt-6 text-center md:text-left text-sm text-white/80 '>
//       Lorem ipsum dolor sit, amet consectetur aut
//        impedit voluptatum vero quia non similique voluptates neque archite
//      </p>
//      </div>
//      <div className='flex flex-col md:items-start items-center w-full '>
//       <h2 className='font-semibold text-white mb-5 '>Company</h2>
//       <ul className='flex md:flex-col w-full justify-between text-sm text-white/80 md:space-y-2'>
//         <li><a href="#">Home</a></li>
//         <li><a href="#">About Us</a></li>
//         <li><a href="#">Contact Us</a></li>
//         <li><a href="#">Privacy Policy</a></li>

//       </ul>
//       </div>
//      <div className='hidden md:flex flex-col items-start w-full'>
//       <h2 className='font-semibold text-white mb-5 '>Subscribe to our newsletter.</h2>
//       <p className='text-sm text-white/80'>The latest news, articles and resources, sent to your inbox weekly.</p>
//       <div className='flex items-center gap-2 pt-4'>
//       <input className='border border-gray-500/30 bg-gray-800 text-gray-500 placeholder-gray-500 outline-none w-64 h-9 rounded px-2 text-sm ' type="text" placeholder='Enter your email.' />
//       <button className='bg-blue-600 w-24 h-9 text-white rounded '>Subscribe</button>
//       </div>
//      </div>
//       </div> 
//         <p className='py-4 text-center md:text-sm text-xs text-white/60 '>Copyright 2025 @ Nimra. All Rights Reserved.</p>
//     </footer>

   
//   )
// }

// export default Footer

import React, { useState } from 'react';
import { assets } from '../../assets/assets';
import { Link } from 'react-router-dom';

const Footer = () => {
  const [email, setEmail] = useState("");

  const handleSubscribe = () => {
    if (email.trim() === "") {
      alert("Please enter an email.");
    } else {
      alert(`Thanks for subscribing with: ${email} .Now we'll keep you updated with our latest news, articles and resources.😄`);
      setEmail(""); // reset input
    }
  };

  return (
    <footer className='bg-gray-900 md:px-36 text-left w-full mt-10'>
      <div className='flex flex-col md:flex-row items-start px-8 md:px-0 justify-center g-10 md:gap-32 py-10 border-b border-white/30'>
        {/* Left: Logo + text */}
        <div className='flex flex-col md:items-start items-center w-full md:w-1/3'>
          <img src={assets.logo_dark} alt="logo" />
          <p className='mt-6 text-center md:text-left text-sm text-white/80'>
            Lorem ipsum dolor sit, amet consectetur aut impedit voluptatum vero quia non similique voluptates neque archite
          </p>
        </div>

        {/* Middle: Links */}
        <div className='flex flex-col md:items-start items-center w-full md:w-1/3'>
          <h2 className='font-semibold text-white mb-5'>Company</h2>
         <ul className='flex md:flex-col w-full justify-between text-sm text-white/80 md:space-y-2'>
  <li><Link to="/" className='hover:text-white'>Home</Link></li>
  <li><Link to="/about" className='hover:text-white'>About Us</Link></li>
  <li><Link to="/contact" className='hover:text-white'>Contact Us</Link></li>
  <li><Link to="/privacy" className='hover:text-white'>Privacy Policy</Link></li>
</ul>

        </div>

        {/* Right: Email (also visible on small screens) */}
        <div className='flex flex-col items-center md:items-start w-full md:w-1/3'>
          <h2 className='font-semibold text-white mb-5 text-center md:text-left'>Subscribe to our newsletter.</h2>
          <p className='text-sm text-white/80 text-center md:text-left'>
            The latest news, articles and resources, sent to your inbox weekly.
          </p>
          <div className='flex flex-col sm:flex-row items-center gap-2 pt-4 w-full'>
            <input
              className='border border-gray-500/30 bg-gray-800 text-gray-200 placeholder-gray-500 outline-none w-full sm:w-64 h-9 rounded px-2 text-sm'
              type="email"
              placeholder='Enter your email.'
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <button
              onClick={handleSubscribe}
              className='bg-blue-600 w-full sm:w-24 h-9 text-white rounded hover:bg-blue-700 transition'
            >
              Subscribe
            </button>
          </div>
        </div>
      </div>

      {/* Bottom Copyright */}
      <p className='py-4 text-center text-xs md:text-sm text-white/60'>
        Copyright 2025 @ NHE. All Rights Reserved.
      </p>
    </footer>
  );
};

export default Footer;
