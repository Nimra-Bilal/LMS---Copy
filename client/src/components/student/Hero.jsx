// import React from 'react'
// import { assets } from '../../assets/assets'
// import SearchBar from './SearchBar'

// const Hero = () => {
//   return (
    
//     <div className='flex flex-col items-center justify-center w-full md:pt-36 pt-20 px-7 md:px-0 space-y-7 text-center bg-gradient-to-b from-cyan-100/70'>
      
//       <h1 className='md:text-[48px] md:leading-[56px] text-[28px] leading-[34px] relative font-bold text-gray-800 max-w-3xl mx-auto'>
//         Empower your future with the courses designed to 
//         <span className='text-blue-600'> fit your choice.</span>
//         <img src={assets.sketch} alt="sketch" className='md:block hidden absolute -bottom-7 right-0'/>
//       </h1>
      
//       {/* Updated paragraph with proper text wrapping */}
//       <p className='text-gray-500 max-w-2xl mx-auto text-[15px] leading-[21px] whitespace-normal'>
//         We bring together world-class instructors, interactive content, and a supportive community to help you achieve your personal and professional goals.
//       </p>
//       <SearchBar/>
//     </div>
//   )
// }

// export default Hero
import React from 'react'
import { assets } from '../../assets/assets'
import SearchBar from './SearchBar'

const Hero = () => {
  return (
    <div className="relative w-full h-screen flex items-center justify-center text-center text-white overflow-hidden">
      
      {/* Background Image */}
      <img 
        src="https://images.unsplash.com/photo-1584697964190-a0616b49e91b?auto=format&fit=crop&w=1350&q=80"
        alt="LMS Background"
        className="absolute inset-0 w-full h-full object-cover z-0"
      />

      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black bg-opacity-60 z-0"></div>

      {/* Content */}
      <div className="z-10 px-6 md:px-0 max-w-4xl animate-fade-in-up">
        <h1 className='md:text-[48px] md:leading-[56px] text-[28px] leading-[34px] relative font-bold text-white mx-auto'>
          Empower your future with the courses designed to
          <span className='text-blue-400'> fit your choice.</span>
          <img src={assets.sketch} alt="sketch" className='md:block hidden absolute -bottom-7 right-0'/>
        </h1>

        <p className='text-gray-200 max-w-2xl mx-auto text-[15px] leading-[21px] mt-6 mb-8'>
          We bring together world-class instructors, interactive content, and a supportive community to help you achieve your personal and professional goals.
        </p>

        <SearchBar />
      </div>

      {/* Animation Style */}
      <style>
        {`
          @keyframes fade-in-up {
            0% {
              opacity: 0;
              transform: translateY(40px);
            }
            100% {
              opacity: 1;
              transform: translateY(0);
            }
          }

          .animate-fade-in-up {
            animation: fade-in-up 1.5s ease-out forwards;
          }
        `}
      </style>
    </div>
  )
}

export default Hero
