export default function Services() {
    return (
      <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 p-4">
        {/* Page Title */}
        <h1 className="text-6xl font-bold text-gray-800 mb-4">Welcome to My Services</h1>
  
        {/* Description */}
        <p className="text-lg text-gray-600 mb-8 text-center">
          I offer a variety of services to meet your needs:
        </p>
  
        {/* Services List */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          <div className="bg-white shadow-md rounded-lg p-6 text-center">
            <h2 className="text-2xl font-semibold text-gray-800 mb-2">Web Development</h2>
            <ul className="list-disc list-inside text-gray-600">
              <li>Responsive Website Design</li>
              <li>Single Page Applications (SPA)</li>
              <li>E-commerce Solutions</li>
              <li>Content Management Systems (CMS)</li>
            </ul>
          </div>
  
          <div className="bg-white shadow-md rounded-lg p-6 text-center">
            <h2 className="text-2xl font-semibold text-gray-800 mb-2">TypeScript</h2>
            <p className="text-gray-600">Strongly typed programming language.</p>
          </div>
  
          <div className="bg-white shadow-md rounded-lg p-6 text-center">
            <h2 className="text-2xl font-semibold text-gray-800 mb-2">CSS</h2>
            <ul className="list-disc list-inside text-gray-600">
              <li>Responsive Design Techniques</li>
              <li>CSS Frameworks (e.g., Tailwind CSS, Bootstrap)</li>
              <li>CSS Preprocessors (e.g., SASS, LESS)</li>
            </ul>
          </div>
  
          <div className="bg-white shadow-md rounded-lg p-6 text-center">
            <h2 className="text-2xl font-semibold text-gray-800 mb-2">HTML</h2>
            <ul className="list-disc list-inside text-gray-600">
              <li>Semantic HTML</li>
              <li>Accessibility Best Practices</li>
              <li>HTML5 Features</li>
            </ul>
          </div>
  
          <div className="bg-white shadow-md rounded-lg p-6 text-center">
            <h2 className="text-2xl font-semibold text-gray-800 mb-2">Java</h2>
            <ul className="list-disc list-inside text-gray-600">
              <li>Object-Oriented Programming (OOP)</li>
              <li>Spring Framework</li>
              <li>RESTful API Development</li>
            </ul>
          </div>
  
          <div className="bg-white shadow-md rounded-lg p-6 text-center">
            <h2 className="text-2xl font-semibold text-gray-800 mb-2">FrontEnd Development</h2>
            <p className="text-gray-600">Creating beautiful user interfaces.</p>
          </div>
        </div>
  
        {/* Contact Link */}
        <a href="/contact" className="mt-6 text-blue-500 hover:underline text-lg">
          Contact me
        </a>
      </div>
    );
  }
  