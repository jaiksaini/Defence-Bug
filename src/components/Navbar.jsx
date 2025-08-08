import React from "react";
import logo from "../assets/logo.png";

const Navbar = () => {
  return (
    <div className="bg-slate-900 shadow-md h-16 flex items-center justify-between px-15 p-5">
      <div className="text-white text-lg font-semibold flex items-center gap-2 ">
        <p>
          {" "}
          <img className="h-8" src={logo} alt="" />
        </p>
        Defence Bug
      </div>
      <div className="flex gap-5 text-lg ">
        <a href="#home" className="text-white hover:text-gray-300">
          Home
        </a>
        <a href="#About" className="text-white hover:text-gray-300">
          About
        </a>
        <a href="#Solutions" className="text-white hover:text-gray-300">
          Solutions
        </a>
        <a href="#Support" className="text-white hover:text-gray-300">
          Support
        </a>
      </div>
      <div className="flex gap-4">
        <button className="text-white">Login</button>
        <button className="text-white bg-sky-950 px-3 py-2 rounded-xl border-1 border-sky-800">
          Singin
        </button>
      </div>
    </div>
  );
};

export default Navbar;
