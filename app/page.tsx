import Image from "next/image";
import React from 'react';



const Navbar = () => {
  return (
    <nav className="bg-white border-b border-gray-200 w-full">
      <div className="container mx-auto flex items-center justify-between p-4">
        {/* Search Bar */}
        <div className="flex-1 mx-4">
          <input
            type="text"
            placeholder="Search..."
            className="w-full p-2 border rounded-md border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>
        {/* Login Button */}
        <div>
          <a
            href="/login"
            className="flex items-center px-4 py-2 text-sm font-medium text-white bg-blue-500 rounded-md hover:bg-blue-600"
          >
            Login
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              className="w-5 h-5 ml-2"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M17 16l4-4m0 0l-4-4m4 4H7"
              />
            </svg>
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;



