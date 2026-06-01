import React, { useState } from "react";
import { HiMenu, HiX } from "react-icons/hi";
import logo1 from "../assets/logo1.png";

const Navbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <nav className="fixed top-0 w-full bg-slate-950/80 backdrop-blur-lg z-50">

      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">

        <img src={logo1} alt="" className="h-10 w-auto" />

        <ul className="hidden md:flex gap-8 text-gray-300">
          <li><a href="#about">About</a></li>
          <li><a href="#skills">Skills</a></li>
          <li><a href="#projects">Projects</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>

        <button
          onClick={() => setOpen(!open)}
          className="md:hidden text-white text-3xl"
        >
          {open ? <HiX /> : <HiMenu />}
        </button>

      </div>

      {open && (
        <div className="md:hidden bg-slate-900 text-center py-6 space-y-4">

          <a href="#about" className="block">About</a>
          <a href="#skills" className="block">Skills</a>
          <a href="#projects" className="block">Projects</a>
          <a href="#contact" className="block">Contact</a>

        </div>
      )}
    </nav>
  );
};

export default Navbar;