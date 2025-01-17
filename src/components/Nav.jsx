import React from 'react';
import frame from './img/logo.png';

const Nav = () => {
  return (
    <nav className="fixed top-0 left-0 w-full flex items-center justify-between py-4 px-8 z-50">
      {/* Logo */}
      <div className="flex items-center text-2xl font-bold text-white ">
        <img src={frame} alt="Logo" className="mr-2 max-h-8" />uraj
      </div>

      {/* Navigation Links */}
      <div className="hidden md:flex">
        <ul className="flex space-x-6 text-gray-600">
          <li>
            <a
              href="#home"
              className=" text-white hover:text-red-500 transition-all duration-300 hover:bg-white hover:bg-opacity-10 p-2 rounded border-b-2 border-transparent hover:border-red-500"
            >
              HOME
            </a>
          </li>
          <li>
            <a
              href="#experience"
              className="text-white hover:text-red-500 transition-all duration-300 hover:bg-white hover:bg-opacity-10 p-2 rounded border-b-2 border-transparent hover:border-red-500"
            >
              experience
            </a>
          </li>
          <li>
            <a
              href="#portfolio"
              className="text-white hover:text-red-500 transition-all duration-300 hover:bg-white hover:bg-opacity-10 p-2 rounded border-b-2 border-transparent hover:border-red-500"
            >
              portfolio
            </a>
          </li>
          <li>
            <a
              href="#service"
              className= "text-white hover:text-red-500 transition-all duration-300 hover:bg-white hover:bg-opacity-10 p-2 rounded border-b-2 border-transparent hover:border-red-500"
            >
              service
            </a>
          </li>
          <li>
            <a
              href="#contact"
              className="text-white hover:text-red-500 transition-all duration-300 hover:bg-white hover:bg-opacity-10 p-2 rounded border-b-2 border-transparent hover:border-red-500"
            >
              contact
            </a>
          </li>
        </ul>
      </div>

      {/* Chat Button */}
      <div className="hidden md:block">
        <button className="bg-blue-500 text-white px-4 py-2 rounded-md shadow-md hover:bg-blue-600">
          Let's chat
        </button>
      </div>

      {/* Mobile Menu */}
      <div className="md:hidden">
        <button className="text-gray-600 focus:outline-none">
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M4 6h16M4 12h16m-7 6h7"
            ></path>
          </svg>
        </button>
      </div>
    </nav>
  );
};

export default Nav;
