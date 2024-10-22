import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="bg-gray-600 p-4">
      <div className="container mx-auto flex justify-between items-center">
        {/* Logo */}
        <div className="text-white text-2xl font-bold">Faisal</div>

        {/* Links */}
        <div className="hidden md:flex space-x-6">
          <Link href="/" className="text-white hover:text-gray-300">
            Home
          </Link>
          <Link href="/about" className="text-white hover:text-gray-300">
            About
          </Link>
          <Link href="/jobs" className="text-white hover:text-gray-300">
            Jobs
          </Link>
          <Link href="/jobs/programming" className="text-white hover:text-gray-300">
            Programming
          </Link>
          <Link href="/contact" className="text-white hover:text-gray-300">
            Contact
          </Link>
          <Link href="/services" className="text-white hover:text-gray-300">
            Services
          </Link>
        </div>
        </div>
    </nav>
  );
}
