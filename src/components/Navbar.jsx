import React from "react";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  

  return (
    <header className="header">
      <NavLink
        to={"/"}
        className="w-12 h-10 rounded-lg bg-white font-bold items-center justify-center flex shadow-md"
      >
        <p className="blue-gradient_text">QAH</p>
      </NavLink>
      <nav className="flex text-lg gap-7 font-medium">
        <NavLink
          to={"/about"}
          className={({isActive}) => isActive ? "text-blue-500" : "text-black"}
        >
          About
        </NavLink>
        <NavLink
          to={"/project"}
          className={({isActive}) => isActive ? "text-blue-500" : "text-black"}
        >
          Project
        </NavLink>
        <NavLink
          to={"/contact"}
          className={({isActive}) => isActive ? "text-blue-500" : "text-black"}
        >
          Contact me
        </NavLink>
      </nav>
    </header>
  );
};

export default Navbar;
