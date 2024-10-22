import Image from 'next/image';

export default function Contact() {
    return (
        <div className="flex flex-col items-center justify-center h-screen bg-gray-100 p-4">
            {/* Logo with round border and increased size */}
            <Image 
                src="/pic.jpg" 
                alt="Logo" 
                className="rounded-full border-4 border-blue-500 mb-4" 
                width={240} // Actual width in pixels
                height={240} // Actual height in pixels
            />
            <h1 className="text-4xl font-bold text-gray-800 mb-4">This is My Contact Page</h1>
            <p className="text-lg text-gray-600 mb-6">Feel free to reach out for any inquiries or collaborations!</p>
            <div className="bg-white shadow-md rounded p-6">
                <h2 className="text-2xl font-semibold text-gray-800 mb-2">Contact Information</h2>
                <p className="text-lg text-gray-700">
                    Email: <a href="mailto:faisalsharif39@yahoo.com" className="text-blue-500 hover:underline">faisalsharif39@yahoo.com</a>
                </p>
                <p className="text-lg text-gray-700">Phone: <span className="text-gray-600">03442587864</span></p>
                <p className="text-lg text-gray-700">Location: <span className="text-gray-600">Karachi, Pakistan</span></p>
                <p className="text-lg text-gray-700">LinkedIn: 
                    <a href="https://www.linkedin.com/in/faisal-sharif-/" target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:underline"> My LinkedIn Profile</a>
                </p>
                <p className="text-lg text-gray-700 mb-2">GitHub: 
                <a href="https://github.com/Faisal9029" target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:underline"> My GitHub Profile</a>
                </p>
            </div>
        </div>
    );
}
