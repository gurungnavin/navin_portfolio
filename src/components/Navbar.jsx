import React, { useState } from "react";
import { navLinks } from "../../constants";
import { HiSun, HiMoon, HiMenu, HiX } from "react-icons/hi";
import { IoIosArrowBack } from "react-icons/io";

const Navbar = () => {
  const [language, setLanguage] = useState("EN");
  const [darkMode, setDarkMode] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  const themeToggle = () => {
    setDarkMode((prev) => !prev);
  };

  console.log(menuOpen);
  return (
    <nav>
      <div className="flex justify-between">
        <a href="#home" className="flex items-center gap-2">
          <p>Navin</p>
        </a>
        <ul className="hidden lg:flex">
          {navLinks.map((link) => (
            <li key={link.id}>
              <a href={`#${link.id}`}>{link.title}</a>
            </li>
          ))}
          {/* Theme Toggle */}            
          <li>

          <button
              onClick={() => setDarkMode(!darkMode)}
              className="text-white text-2xl"
              >
              {darkMode ? <HiSun /> : <HiMoon />}
            </button>
          </li>
        </ul>
        <div className="lg:hidden flex justify-end">
            <button
              onClick={() => setDarkMode(!darkMode)}
              className="text-white text-2xl mr-3 cursor-pointer"
            >
              {darkMode ? <HiSun /> : <HiMoon />}
            </button>
          <button onClick={() => setMenuOpen(!menuOpen)} aria-label="Open menu">
            {menuOpen ? (
              <HiX className="w-6 h-6 cursor-pointer"/>
            ) : (
              <HiMenu className="w-6 h-6 cursor-pointer" />
            )}
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
