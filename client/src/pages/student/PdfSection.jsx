import React from 'react'

const pdfData = [
  {
    title: 'A Tutorial for GitHub',
    image: 'https://git-scm.com/images/logos/downloads/Git-Icon-1788C.png',
    link: '/courses/A Tutorial for GitHub.pdf',
  },
  {
    title: 'Bootstrap 5',
    image: 'https://getbootstrap.com/docs/5.0/assets/brand/bootstrap-logo-shadow.png',
    link: '/courses/BootStrap-5.pdf',
  },
  {
    title: 'C Notes',
    image: 'https://upload.wikimedia.org/wikipedia/commons/1/18/C_Programming_Language.svg',
    link: '/courses/C.pdf',
  },
  {
    title: 'CSS Notes',
    image: 'https://upload.wikimedia.org/wikipedia/commons/d/d5/CSS3_logo_and_wordmark.svg',
    link: '/courses/css.pdf',
  },
  {
    title: 'Cybersecurity Factsheet',
    image: 'https://cdn-icons-png.flaticon.com/512/3135/3135715.png',
    link: '/courses/cybersecurity_sb_factsheets_all.pdf',
  },
  {
    title: 'DSA Notes',
    image: 'https://static.thenounproject.com/png/3123418-200.png',
    link: '/courses/Dsa.pdf',
  },
  {
    title: 'Git Cheat Sheet',
    image: 'https://git-scm.com/images/logos/downloads/Git-Icon-1788C.png',
    link: '/courses/git-cheat-sheet-education.pdf',
  },
  {
    title: 'HTML Notes',
    image: 'https://www.w3.org/html/logo/downloads/HTML5_Logo_512.png',
    link: '/courses/html.pdf',
  },
  {
    title: 'Java Notes 5',
    image: 'https://cdn-icons-png.flaticon.com/512/226/226777.png',
    link: '/courses/javanotes5.pdf',
  },
  {
    title: 'JavaScript Notes',
    image: 'https://upload.wikimedia.org/wikipedia/commons/6/6a/JavaScript-logo.png',
    link: '/courses/javascript.pdf',
  },
  {
    title: 'MongoDB Tutorial',
    image: 'https://webassets.mongodb.com/_com_assets/cms/mongodb-logo-rgb-j6w271g1xn.jpg',
    link: '/courses/mongodb_tutorial.pdf',
  },
  {
    title: 'Network Notes',
    image: 'https://cdn-icons-png.flaticon.com/512/3178/3178218.png',
    link: '/courses/netwrok.pdf',
  },
  {
    title: 'PHP Cookbook',
    image: 'https://upload.wikimedia.org/wikipedia/commons/2/27/PHP-logo.svg',
    link: '/courses/php_cookbook.pdf',
  },
  {
    title: 'Python Notes',
    image: 'https://upload.wikimedia.org/wikipedia/commons/c/c3/Python-logo-notext.svg',
    link: '/courses/python.pdf',
  },
  {
    title: 'SQL Manual',
    image: 'https://cdn-icons-png.flaticon.com/512/4492/4492311.png',
    link: '/courses/SQL-Manual.pdf',
  },
  {
    title: 'Node.js PDF Guide (Andrew Mead)',
    image: 'https://upload.wikimedia.org/wikipedia/commons/d/d9/Node.js_logo.svg',
    link: '/courses/PDF-Guide-Node-Andrew-Mead-v3.pdf',
  },
  {
    title: 'Tailwind + CSS',
    image: 'https://upload.wikimedia.org/wikipedia/commons/d/d5/Tailwind_CSS_Logo.svg',
    link: '/courses/taking-flight-tailwind-css.pdf',
  },
]

const PDFSection = () => {
  return (
    <div className="px-8 py-12 bg-gradient-to-b from-green-200/40 min-h-screen">
        <div className="justify-center flex items-center">
            <h1 className="text-3xl justify-center items-center font-semibold text-gray-800 mb-8">📚 Download Course PDFs</h1>
</div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {pdfData.map((pdf, index) => (
          <a
            key={index}
            href={pdf.link}
            target="_blank"
            rel="noopener noreferrer"
            className="border rounded-lg shadow-lg overflow-hidden hover:bg-green-300 hover:scale-105 transition-transform duration-200"
          >
            <img src={pdf.image} alt={pdf.title} className="w-full h-28 object-contain bg-white" />
            <div className="p-5">
              <h2 className="text-lg font-medium text-gray-700">{pdf.title}</h2>
              <p className="text-sm text-green-600 underline mt-1">Download PDF</p>
            </div>
          </a>
        ))}
      </div>
    </div>
  )
}

export default PDFSection
