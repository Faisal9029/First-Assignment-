export default function Programming() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 p-4">
      {/* Page Title */}
      <h1 className="text-6xl font-bold text-gray-800 mb-4">Welcome to My Programming Page</h1>

      {/* Description */}
      <p className="text-lg text-gray-600 mb-8 text-center">
        Discover a variety of programming languages, tutorials, and resources to enhance your skills.
      </p>

      {/* Programming Languages List */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        <div className="bg-white shadow-md rounded-lg p-6 text-center">
          <h2 className="text-2xl font-semibold text-gray-800">JavaScript</h2>
          <p className="text-gray-600">Learn the fundamentals of JavaScript.</p>
        </div>
        <div className="bg-white shadow-md rounded-lg p-6 text-center">
          <h2 className="text-2xl font-semibold text-gray-800">Python</h2>
          <p className="text-gray-600">Explore Python for data science and web development.</p>
        </div>
        <div className="bg-white shadow-md rounded-lg p-6 text-center">
          <h2 className="text-2xl font-semibold text-gray-800">Java</h2>
          <p className="text-gray-600">Dive into Java for enterprise applications.</p>
        </div>
        <div className="bg-white shadow-md rounded-lg p-6 text-center">
          <h2 className="text-2xl font-semibold text-gray-800">C++</h2>
          <p className="text-gray-600">Understand the basics of C++ programming.</p>
        </div>
        <div className="bg-white shadow-md rounded-lg p-6 text-center">
          <h2 className="text-2xl font-semibold text-gray-800">Ruby</h2>
          <p className="text-gray-600">Learn Ruby for web development with Rails.</p>
        </div>
        <div className="bg-white shadow-md rounded-lg p-6 text-center">
          <h2 className="text-2xl font-semibold text-gray-800">Go</h2>
          <p className="text-gray-600">Explore Go for concurrent programming.</p>
        </div>
      </div>
    </div>
  );
}
