import React, { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="bg-teal-900 text-white p-1 mt-20">
      <div className="container mx-auto flex justify-between items-center">
        <div className="text-2xl font-bold w-40">
          <img src="https://traderoom.1onestrong.com/wp-content/uploads/2024/08/Logo-01-1.png"></img>
        </div>
        <div className="md:hidden">
          <button onClick={toggleMenu} className="text-white">
            {isOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
          </button>
        </div>

        <div className="hidden md:flex justify-between items-center w-full">
          <ul className="flex space-x-6 ml-72">
            <li>
              <a href="#home" className="hover:text-green-400">
                Home
              </a>
            </li>
            <li>
              <a href="#membership" className="hover:text-green-400">
                Membership
              </a>
            </li>
            <li>
              <a href="#products" className="hover:text-green-400">
                Products
              </a>
            </li>
            <li>
              <a href="#services" className="hover:text-green-400">
                Services
              </a>
            </li>
            <li>
              <a href="#blog" className="hover:text-green-400">
                Blog
              </a>
            </li>
            <li>
              <a href="#contact" className="hover:text-green-400">
                Contact
              </a>
            </li>
          </ul>
          <button className="bg-green-500 text-gray-900 px-4 py-2 rounded hover:bg-green-600">
            Contact us
          </button>
        </div>
      </div>

      <ul
        className={`md:hidden flex flex-col items-center bg-teal-900 w-full absolute left-0 transition-all duration-300 ease-in ${
          isOpen ? "top-16" : "-top-96"
        }`}
      >
        <li className="py-2 w-full text-center">
          <a href="#home" className="block hover:text-green-400">
            Home
          </a>
        </li>
        <li className="py-2 w-full text-center">
          <a href="#membership" className="block hover:text-green-400">
            Membership
          </a>
        </li>
        <li className="py-2 w-full text-center">
          <a href="#products" className="block hover:text-green-400">
            Products
          </a>
        </li>
        <li className="py-2 w-full text-center">
          <a href="#services" className="block hover:text-green-400">
            Services
          </a>
        </li>
        <li className="py-2 w-full text-center">
          <a href="#blog" className="block hover:text-green-400">
            Blog
          </a>
        </li>
        <li className="py-2 w-full text-center">
          <a href="#contact" className="block hover:text-green-400">
            Contact
          </a>
        </li>
        <li className="py-2 w-full text-center">
          <button className="bg-green-500 text-gray-900 px-4 py-2 rounded hover:bg-green-600 mx-auto">
            Contact us
          </button>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
