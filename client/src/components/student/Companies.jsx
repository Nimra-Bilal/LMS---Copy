// import React from 'react'
// import { assets } from '../../assets/assets'

// const Companies = () => {
//   return (
    
//     <div className='pt-16'>
//       <p className='text-base text-gray-500'>
//         Trusted by Learners from
//       </p>
//       <div className='flex flex-wrap items-center justify-center gap-6 md:gap-16 md:mt-10 mt-5 '>
//         <img src={assets.microsoft_logo} alt="Microsoft" className='w-20 md:w-28' />
//         <img src={assets.walmart_logo} alt="walmart" className='w-20 md:w-28' />
//         <img src={assets.accenture_logo} alt="accenture" className='w-20 md:w-28' />
//         <img src={assets.adobe_logo} alt="adobe" className='w-20 md:w-28' />
//         <img src={assets.paypal_logo} alt="paypal" className='w-20 md:w-28' />
//       </div>
//     </div>
//   )
// }

// export default Companies

import React from 'react'
import { assets } from '../../assets/assets'

const Companies = () => {
  const logos = [
    assets.microsoft_logo,
    assets.walmart_logo,
    assets.accenture_logo,
    assets.adobe_logo,
    assets.paypal_logo,
  ]

  return (
    <div className="relative overflow-hidden py-12 bg-white">
      <p className="text-base text-gray-500 text-center mb-6">
        Trusted by Learners from
      </p>

      <div className="relative overflow-hidden">
        <div className="flex whitespace-nowrap animate-marquee hover:animate-marquee-slow">
          {[...logos, ...logos].map((logo, index) => (
            <img
              key={index}
              src={logo}
              alt="Company"
              className="w-24 md:w-28 mx-8"
            />
          ))}
        </div>
      </div>

      {/* Tailwind custom classes */}
      <style>
        {`
          @keyframes marquee {
            0% { transform: translateX(0%); }
            100% { transform: translateX(-50%); }
          }

          .animate-marquee {
            animation: marquee 10s linear infinite;
          }

          .animate-marquee-slow {
            animation-duration: 40s;
          }
        `}
      </style>
    </div>
  )
}

export default Companies

