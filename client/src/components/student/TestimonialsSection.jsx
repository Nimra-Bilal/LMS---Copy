// import React from 'react'
// import { assets, dummyTestimonial } from '../../assets/assets'

// const TestimonialsSection = () => {
//   return (
//     <div className='pb-14 px-8 md:px-0 bg-gradient-to-b from-blue-300/70'>
//       <h2 className='text-3xl font-medium text-gray-800'>Testimonials</h2>
//       <p className='text-base text-gray-500 mt-3'>Hear from our learners as they share their jorneys of transformation, success, and how our <br /> platform has made a difference in their lives.</p>
//       <div className='grid grid-cols-[repeat(auto-fit,_minmax(200px,_1fr))] mt-14 gap-8'>
//         {dummyTestimonial.map((testimonial , index)=>(
//           <div key={index} className='text-sm text-left border border-gray-500/30 rounded-lg bg-white pb-6 shadow-[0px_4px_15px_0px] overflow-hidden shadow-black/5'>
//             <div className='flex items-center gap-4 px-5 py-4 bg-gray-500/10'>
//               <img className='h-12 w-12 rounded-full' src={testimonial.image} alt={testimonial.name} />
//               <div>
//                 <h1 className='text-lg font-medium text-gray-800'>{testimonial.name}</h1>
//                 <p className='text-gray-800/80'>{testimonial.role}</p>

//               </div>
             
//             </div>
//             <div className='p-5 pb-7'>
//                 <div className='flex gap-0.5'>
//                        {[...Array(5)].map((_,i)=>(<img key={i} 
//                      src={i < Math.floor(testimonial.rating) ? assets.star : assets.star_blank} 
//                      alt="star" 
//                      className='h-5' />
                
//                                 ))}
//                 </div>
//                 <p className='text-gray-500 mt-5'>
//                   {testimonial.feedback}
//                 </p>
//               </div>
//               <a href="#" className='text-blue-500 underline px-5  '>Read more</a>
//           </div>
//         ))}
//       </div>

//       </div>
//   )
// }

// export default TestimonialsSection

import React, { useState } from 'react'
import { assets, dummyTestimonial } from '../../assets/assets'

const TestimonialsSection = () => {
  const [expandedIndex, setExpandedIndex] = useState(null)

  const toggleReadMore = (index) => {
    setExpandedIndex(expandedIndex === index ? null : index)
  }

  return (
    <div className='pb-14 px-8 md:px-0 bg-gradient-to-b from-blue-300/70'>
      <h2 className='text-3xl font-medium text-gray-800'>Testimonials</h2>
      <p className='text-base text-gray-500 mt-3'>
        Hear from our learners as they share their journeys of transformation, success, and how our <br />
        platform has made a difference in their lives.
      </p>

      <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 mt-14 gap-8'>
        {dummyTestimonial.map((testimonial, index) => (
          <div
            key={index}
            className='flex flex-col justify-between text-sm text-left border border-gray-500/30 rounded-lg bg-white shadow-[0px_4px_15px_0px] overflow-hidden shadow-black/5 h-full min-h-[200px] transition-all duration-300 ease-in-out'
          >
            <div>
              <div className='flex items-center gap-4 px-5 py-4 bg-gray-500/10'>
                <img className='h-12 w-12 rounded-full' src={testimonial.image} alt={testimonial.name} />
                <div>
                  <h1 className='text-lg font-medium text-gray-800'>{testimonial.name}</h1>
                  <p className='text-gray-800/80'>{testimonial.role}</p>
                </div>
              </div>

              <div className='p-5 pb-4'>
                <div className='flex gap-0.5'>
                  {[...Array(5)].map((_, i) => (
                    <img
                      key={i}
                      src={i < Math.floor(testimonial.rating) ? assets.star : assets.star_blank}
                      alt="star"
                      className='h-5'
                    />
                  ))}
                </div>

                <p className='text-gray-500 mt-5 transition-all duration-300 ease-in-out'>
                  {expandedIndex === index
                    ? testimonial.feedback
                    : testimonial.feedback.slice(0, 50) + (testimonial.feedback.length > 100 ? "..." : "")}
                </p>
              </div>
            </div>

            {testimonial.feedback.length > 100 && (
              <button
                onClick={() => toggleReadMore(index)}
                className='text-blue-500 underline px-5 pb-4 text-left'
              >
                {expandedIndex === index ? 'Show less' : 'Read more'}
              </button>
            )}
          </div>
        ))}
      </div>
    </div>
  )
}

export default TestimonialsSection
