"use client";
import { useState } from "react";
import { HiMenu } from "react-icons/hi";
import { IoMdClose } from "react-icons/io";

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="relative border-b">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8 lg:px-12 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="text-3xl font-bold text-black">
            <h1>Hekto</h1>
          </div>

          {/* Desktop Navigation */}
          <ul className="hidden md:flex space-x-6">
            <li className="text-pink-500 cursor-pointer hover:text-pink-700">Home</li>
            <li className="cursor-pointer hover:text-gray-500">Pages</li>
            <li className="cursor-pointer hover:text-gray-500">Products</li>
            <li className="cursor-pointer hover:text-gray-500">Blog</li>
            <li className="cursor-pointer hover:text-gray-500">Shop</li>
            <li className="cursor-pointer hover:text-gray-500">Contact</li>
          </ul>

          {/* Search Input and Icon - Hidden on Mobile */}
          <div className="hidden md:flex items-center space-x-2">
            <input
              type="text"
              placeholder="Search..."
              className="border border-gray-300 px-3 py-2 rounded-md focus:outline-none focus:ring-2 focus:ring-pink-500"
            />
            <button className="bg-pink-500 p-2 rounded">
              <svg
                className="w-6 h-6 text-white"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M21 21l-4.35-4.35M10 18a8 8 0 100-16 8 8 0 000 16z"
                />
              </svg>
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={toggleMenu}
              className="text-gray-500 hover:text-gray-700 focus:outline-none"
            >
              {isMenuOpen ? (
                <IoMdClose className="h-6 w-6" />
              ) : (
                <HiMenu className="h-6 w-6" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div
            className={`md:hidden transition-all duration-300 ease-in-out transform ${
              isMenuOpen ? "opacity-100 translate-y-0" : "opacity-0 translate-y-[-20px]"
            }`}
          >
            <ul className="pt-2 pb-4 space-y-2">
              <li className="text-pink-500 cursor-pointer hover:text-pink-700 px-4 py-2">Home</li>
              <li className="cursor-pointer hover:text-gray-500 px-4 py-2">Pages</li>
              <li className="cursor-pointer hover:text-gray-500 px-4 py-2">Products</li>
              <li className="cursor-pointer hover:text-gray-500 px-4 py-2">Blog</li>
              <li className="cursor-pointer hover:text-gray-500 px-4 py-2">Shop</li>
              <li className="cursor-pointer hover:text-gray-500 px-4 py-2">Contact</li>
            </ul>
            {/* Mobile Search */}
            <div className="px-4 pb-4">
              <div className="flex items-center space-x-2">
                <input
                  type="text"
                  placeholder="Search..."
                  className="w-full border border-gray-300 px-3 py-2 rounded-md focus:outline-none focus:ring-2 focus:ring-pink-500"
                />
                <button className="bg-pink-500 p-2 rounded">
                  <svg
                    className="w-6 h-6 text-white"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M21 21l-4.35-4.35M10 18a8 8 0 100-16 8 8 0 000 16z"
                    />
                  </svg>
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
