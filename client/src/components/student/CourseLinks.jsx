import React from 'react'
import { FaHtml5, FaCss3Alt, FaJsSquare, FaPython } from 'react-icons/fa'

const courses = [
  {
    name: "HTML",
    icon: <FaHtml5 className="text-orange-500 text-4xl" />,
    file: "/courses/html.pdf",
  },
  {
    name: "CSS",
    icon: <FaCss3Alt className="text-blue-600 text-4xl" />,
    file: "/courses/css.pdf",
  },
  {
    name: "JavaScript",
    icon: <FaJsSquare className="text-yellow-400 text-4xl" />,
    file: "/courses/javascript.pdf",
  },
  {
    name: "Python",
    icon: <FaPython className="text-green-500 text-4xl" />,
    file: "/courses/python.pdf",
  },
]

const CourseLinks = () => {
  return (
    <section className="py-16 px-6 bg-gradient-to-b from-white to-blue-200 text-center">
      <h2 className="text-3xl font-bold text-gray-800 mb-10">Download Course PDFs</h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 max-w-6xl mx-auto">
        {courses.map((course, index) => (
          <a
            key={index}
            href={course.file}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-white border border-gray-200 hover:shadow-xl transition-all rounded-xl p-6 flex flex-col items-center space-y-4 transform hover:-translate-y-1"
          >
            {course.icon}
            <span className="text-gray-700 font-semibold">{course.name} Course</span>
          </a>
        ))}
      </div>
    </section>
  )
}

export default CourseLinks
