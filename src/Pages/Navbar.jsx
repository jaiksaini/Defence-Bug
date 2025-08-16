import React, { useState } from "react";
import logo from "../assets/logo.png";
import { Menu, X } from "lucide-react"; // for hamburger icons

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-[#2B2E35] shadow-md h-16 flex items-center justify-between px-6">
      {/* Logo */}
      <div className="flex items-center gap-2 text-white text-lg font-semibold md:ml-10">
        <img className="h-8" src={logo} alt="logo" />
        Defence Bug
      </div>

      {/* Desktop Menu */}
      <div className="hidden md:flex gap-8 text-lg flex-1 justify-center items-center mr-36">
        <a
          href="#home"
          className="text-white hover:text-gray-300 transition-colors"
        >
          Home
        </a>
        <a
          href="#About"
          className="text-white hover:text-gray-300 transition-colors"
        >
          About
        </a>
        <a
          href="#Solutions"
          className="text-white hover:text-gray-300 transition-colors"
        >
          Solutions
        </a>
        <a
          href="#Support"
          className="text-white hover:text-gray-300 transition-colors"
        >
          Support
        </a>
      </div>

      {/* Mobile Menu Button */}
      <div className="md:hidden flex items-center">
        <button onClick={() => setIsOpen(!isOpen)} className="text-white">
          {isOpen ? <X size={26} /> : <Menu size={26} />}
        </button>
      </div>

      {/* Mobile Dropdown Menu */}
      {isOpen && (
        <div className="absolute top-16 left-0 w-full bg-[#2B2E35] flex flex-col items-center gap-4 py-4 shadow-lg md:hidden">
          <a
            href="#home"
            className="text-white hover:text-gray-300 transition-colors"
            onClick={() => setIsOpen(false)}
          >
            Home
          </a>
          <a
            href="#About"
            className="text-white hover:text-gray-300 transition-colors"
            onClick={() => setIsOpen(false)}
          >
            About
          </a>
          <a
            href="#Solutions"
            className="text-white hover:text-gray-300 transition-colors"
            onClick={() => setIsOpen(false)}
          >
            Solutions
          </a>
          <a
            href="#Support"
            className="text-white hover:text-gray-300 transition-colors"
            onClick={() => setIsOpen(false)}
          >
            Support
          </a>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
