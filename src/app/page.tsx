import Image from 'next/image';

export default function Home() {
  return (
    <div className="relative min-h-screen bg-black text-white">
      {/* Background Image */}
      <div className="absolute inset-0">
        <Image
          src="/1.jpg" // Apne desired background image ka URL yahan daalain
          alt="Background"
          layout="fill" // Use 'layout' prop for responsive images
          objectFit="cover" // Ensures the image covers the container
          className="z-0" // Add z-index if needed for layering
        />
        <div className="absolute inset-0 bg-black opacity-50"></div>
      </div>

      {/* Content Container */}
      <div className="relative flex flex-col items-center justify-center min-h-screen p-4 z-10">
        <h1 className="text-5xl font-bold mb-4">Welcome to My Home Page</h1>
        <p className="text-lg mb-6">Enjoy a variety of content at your fingertips!</p>
        <button className="bg-red-600 text-white px-6 py-2 rounded hover:bg-red-700 transition">
          Get Started
        </button>
      </div>
    </div>
  );
}

