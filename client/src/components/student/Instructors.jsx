import React from 'react'

const instructors = [
  {
    name: "Sarah Khan",
    title: "Web Development",
    img: "https://randomuser.me/api/portraits/women/44.jpg",
  },
  {
    name: "Ahsan Ali",
    title: "Data Science",
    img: "https://randomuser.me/api/portraits/men/32.jpg",
  },
  {
    name: "Zoya Sheikh",
    title: "UI/UX Design",
    img: "https://randomuser.me/api/portraits/women/32.jpg",
  },
  {
    name: "Usman Raza",
    title: "Cyber Security",
    img: "https://randomuser.me/api/portraits/men/47.jpg",
  },
]

const Instructors = () => {
  return (
    <section className="py-16 px-6 bg-gradient-to-b from-blue-200 to-white text-center">
      <h2 className="text-3xl hover:text-blue-600 md:text-4xl font-bold text-gray-800 mb-12 animate-fade-in-up">
        Meet Our Instructors
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-10 max-w-6xl mx-auto">
        {instructors.map((instructor, index) => (
          <div
            key={index}
            className="flex flex-col items-center space-y-3 transform transition duration-500 hover:scale-105 animate-fade-in-up delay-[index * 100] ease-in-out"
          >
            <img
              src={instructor.img}
              alt={instructor.name}
              className="w-32 h-32 rounded-full object-cover shadow-xl border-4  hover:border-green-400 border-blue-500"
            />
            <h3 className="text-xl font-semibold text-gray-800">{instructor.name}</h3>
            <p className="text-sm text-gray-500">{instructor.title}</p>
          </div>
        ))}
      </div>

      {/* Custom CSS animation */}
      <style>
        {`
          @keyframes fadeInUp {
            0% {
              opacity: 0;
              transform: translateY(20px);
            }
            100% {
              opacity: 1;
              transform: translateY(0);
            }
          }

          .animate-fade-in-up {
            animation: fadeInUp 1s ease-out forwards;
          }
        `}
      </style>
    </section>
  )
}

export default Instructors
