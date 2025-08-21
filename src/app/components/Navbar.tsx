"use client";
import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="bg-gradient-to-r from-gray-900 via-black to-gray-800 text-white p-4 flex justify-between items-center shadow-lg rounded-b-lg">
      <h1 className="text-2xl font-extrabold tracking-wide hover:text-yellow-400 transition-colors duration-300">
        Maria Youssef
      </h1>
      <div className="space-x-6">
        <Link href="/" className="nav-link">
          Home
        </Link>
        <Link href="/about" className="nav-link">
          About Us
        </Link>
        <Link href="/contact" className="nav-link">
          Contact Us
        </Link>
      </div>
    </nav>
  );
}
