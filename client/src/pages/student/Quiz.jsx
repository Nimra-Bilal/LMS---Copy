// import React from 'react'

// const quizData = [
//    {
//     title: 'HTML Quiz',
//     image: 'https://www.w3.org/html/logo/downloads/HTML5_Logo_512.png',
//     link: 'https://quizizz.com/admin/quiz/xyz-html-quiz',
//   },
//   {
//     title: 'CSS Quiz',
//     image: 'https://upload.wikimedia.org/wikipedia/commons/d/d5/CSS3_logo_and_wordmark.svg',
//     link: 'https://quizizz.com/admin/quiz/abc-css-quiz',
//   },
//   {
//     title: 'JavaScript Quiz',
//     image: 'https://upload.wikimedia.org/wikipedia/commons/6/6a/JavaScript-logo.png',
//     link: 'https://quizizz.com/admin/quiz/js123-javascript-quiz',
//   },
//   // Add more quizzes as needed
// ]

// const Quiz = () => {
//   return (
//     <div className="px-8 py-12 bg-gradient-to-b from-blue-200/40 min-h-screen">
//       <h1 className="text-3xl font-semibold text-gray-800 mb-8">Choose a Quiz</h1>
//       <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
//         {quizData.map((quiz, index) => (
//           <a
//             key={index}
//             href={quiz.link}
//             target="_blank"
//             rel="noopener noreferrer"
//             className="border rounded-lg shadow-lg overflow-hidden hover:bg-yellow-300 hover:scale-105 transition-transform duration-200"
//           >
//             <img src={quiz.image} alt={quiz.title} className="w-full h-28 object-contain" />
//             <div className="p-5">
//               <h2 className="text-lg font-medium text-gray-700">{quiz.title}</h2>
//               <p className="text-sm text-blue-500 underline mt-1">Take this quiz</p>
//             </div>
//           </a>
//         ))}
//       </div>
//     </div>
//   )
// }

// export default Quiz
import React from 'react'

const quizData = [
  {
    title: 'HTML Quiz',
    image: 'https://www.w3.org/html/logo/downloads/HTML5_Logo_512.png',
    link: 'https://wayground.com/admin/search/html?source=webflow-search&page=WebflowHomePage&apos=-1&contentTypes=[%22quiz%22]',
  },
  {
    title: 'CSS Quiz',
    image: 'https://upload.wikimedia.org/wikipedia/commons/d/d5/CSS3_logo_and_wordmark.svg',
    link: 'https://wayground.com/admin/search/css?source=SearchHeader&page=SearchPage&apos=-1&contentTypes=[%22quiz%22]&arid=9df80b33-7838-4223-8b57-d9aefd230211&term=css',
  },
  {
    title: 'JavaScript Quiz',
    image: 'https://upload.wikimedia.org/wikipedia/commons/6/6a/JavaScript-logo.png',
    link: 'https://wayground.com/admin/search/javascript?source=HeroSearchBar&page=FeaturedPage&arid=c8f4c810-f84f-472a-9dc1-422d83808633&apos=1&term=Javascript&contentTypes=[%22quiz%22]',
  },
  {
    title: 'React Quiz',
    image: 'https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg',
    link: 'https://wayground.com/admin/search/react?source=SearchHeader&page=SearchPage&arid=c408612e-085b-4f44-b6ba-b9e3034d4941&apos=-1&term=react&contentTypes=[%22quiz%22]',
  },
  {
    title: 'Node.js Quiz',
    image: 'https://upload.wikimedia.org/wikipedia/commons/d/d9/Node.js_logo.svg',
    link: 'https://wayground.com/admin/search/nodejs?source=SearchHeader&page=SearchPage&arid=c62051c2-2d62-4678-8408-864f39c35ce5&apos=-1&term=nodejs&contentTypes=[%22quiz%22]',
  },
  {
    title: 'MongoDB Quiz',
    image: 'https://webassets.mongodb.com/_com_assets/cms/mongodb-logo-rgb-j6w271g1xn.jpg',
    link: 'https://wayground.com/admin/search/mongodb?source=SearchHeader&page=SearchPage&arid=1061a12e-3e47-4b13-9562-53921e2dbf2c&apos=-1&term=mongodb&contentTypes=[%22quiz%22]',
  },
  {
    title: 'Bootstrap Quiz',
    image: 'https://upload.wikimedia.org/wikipedia/commons/b/b2/Bootstrap_logo.svg',
    link: 'https://wayground.com/admin/search/bootstrap?source=SearchHeader&page=SearchPage&arid=ebe5a7c6-6c5f-4df8-ba22-d9886900908b&apos=-1&term=bootstrap&contentTypes=[%22quiz%22]',
  },
  {
    title: 'Tailwind CSS Quiz',
    image: 'https://upload.wikimedia.org/wikipedia/commons/d/d5/Tailwind_CSS_Logo.svg',
    link: 'https://wayground.com/admin/search/tailwind?source=SearchHeader&page=SearchPage&arid=7003c4fd-3264-41b9-a505-84c8f2581ebe&apos=-1&term=tailwind&contentTypes=[%22quiz%22]',
  },
  {
    title: 'Git Quiz',
    image: 'https://git-scm.com/images/logos/downloads/Git-Icon-1788C.png',
    link: 'https://wayground.com/admin/search/git?source=SearchHeader&page=SearchPage&arid=b469b999-f806-4a92-8893-465c67ae517c&apos=-1&term=git&contentTypes=[%22quiz%22]',
  },
  {
    title: 'GitHub Quiz',
    image: 'https://github.githubassets.com/images/modules/logos_page/GitHub-Mark.png',
    link: 'https://wayground.com/admin/search/github?source=SearchHeader&page=SearchPage&arid=e823bad6-1c2e-4b58-913d-433b02204ab8&apos=-1&term=github&contentTypes=[%22quiz%22]',
  },
  {
    title: 'C Quiz',
    image: 'https://upload.wikimedia.org/wikipedia/commons/1/19/C_Logo.png',
    link: 'https://wayground.com/admin/search/c?source=SearchHeader&page=SearchPage&arid=3ba62521-d9dd-4c53-af1a-8d903a469d83&apos=-1&term=c&contentTypes=[%22quiz%22]',
  },
  {
    title: 'C++ Quiz',
    image: 'https://upload.wikimedia.org/wikipedia/commons/1/18/ISO_C%2B%2B_Logo.svg',
    link: 'https://wayground.com/admin/search/c%2B%2B?source=SearchHeader&page=SearchPage&arid=7754c847-774e-49be-a877-1960648a99cc&apos=-1&term=c%2B%2B&contentTypes=[%22quiz%22]',
  },
  {
    title: 'Python Quiz',
    image: 'https://upload.wikimedia.org/wikipedia/commons/c/c3/Python-logo-notext.svg',
    link: 'https://wayground.com/admin/search/python?source=SearchHeader&page=SearchPage&arid=9a9c462f-caa6-4153-8b7b-c194944c09bf&apos=-1&term=python&contentTypes=[%22quiz%22]',
  },
  {
    title: 'Java Quiz',
    image: 'https://upload.wikimedia.org/wikipedia/en/3/30/Java_programming_language_logo.svg',
    link: 'https://wayground.com/admin/search/java?source=SearchHeader&page=SearchPage&arid=25c1c2fb-58b3-4a02-98a6-6c7ae2a27e8a&apos=-1&term=java&contentTypes=[%22quiz%22]',
  },
  {
    title: 'MySQL Quiz',
    image: 'https://www.mysql.com/common/logos/logo-mysql-170x115.png',
    link: 'https://wayground.com/admin/search/mysql?source=SearchHeader&page=SearchPage&arid=bfa31a6c-7230-4f37-975e-2ab9f9df9c25&apos=-1&term=mysql&contentTypes=[%22quiz%22]',
  },
  {
    title: 'PHP Quiz',
    image: 'https://upload.wikimedia.org/wikipedia/commons/2/27/PHP-logo.svg',
    link: 'https://wayground.com/admin/search/php?source=SearchHeader&page=SearchPage&arid=f6be00af-6060-4d05-9409-422178691389&apos=-1&term=php&contentTypes=[%22quiz%22]',
  },
  {
    title: 'Linux Quiz',
    image: 'https://upload.wikimedia.org/wikipedia/commons/3/35/Tux.svg',
    link: 'https://wayground.com/admin/search/linux?source=SearchHeader&page=SearchPage&arid=0ab893c9-d6eb-4d37-ad4e-900e18cf8c47&apos=-1&term=linux&contentTypes=[%22quiz%22]',
  },
  {
    title: 'Networking Quiz',
    image: 'https://cdn-icons-png.flaticon.com/512/609/609803.png',
    link: 'https://wayground.com/admin/search/networking?source=SearchHeader&page=SearchPage&arid=f2b90a1b-dd09-4d00-8909-c06a8a79b099&apos=-1&term=networking&contentTypes=[%22quiz%22]',
  },
  {
    title: 'Cybersecurity Quiz',
    image: 'https://cdn-icons-png.flaticon.com/512/2920/2920322.png',
    link: 'https://wayground.com/admin/search/cybersecurity?source=SearchHeader&page=SearchPage&arid=6990bae2-b681-492e-8ba0-d593b133c7f4&apos=-1&term=cybersecurity&contentTypes=[%22quiz%22]',
  },
  {
    title: 'Data Structures Quiz',
    image: 'https://cdn-icons-png.flaticon.com/512/2181/2181187.png',
    link: 'https://wayground.com/admin/search/data%20structures?source=SearchHeader&page=SearchPage&arid=22f08e42-f890-43e6-b614-103d5038fc50&apos=-1&term=Data+Structures&contentTypes=[%22quiz%22]',
  },
]

const Quiz = () => {
  return (
    <div className="px-8 py-12 bg-gradient-to-b from-blue-200/40 min-h-screen">
      <h1 className="text-3xl font-semibold text-gray-800 mb-8">Choose a Quiz</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {quizData.map((quiz, index) => (
          <a
            key={index}
            href={quiz.link}
            target="_blank"
            rel="noopener noreferrer"
            className="border rounded-lg shadow-lg overflow-hidden hover:bg-yellow-300 hover:scale-105 transition-transform duration-200"
          >
            <img src={quiz.image} alt={quiz.title} className="w-full h-28 object-contain bg-white" />
            <div className="p-5">
              <h2 className="text-lg font-medium text-gray-700">{quiz.title}</h2>
              <p className="text-sm text-blue-500 underline mt-1">Take this quiz</p>
            </div>
          </a>
        ))}
      </div>
    </div>
  )
}

export default Quiz
