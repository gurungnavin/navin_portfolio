// header/Header.jsx
import { useEffect, useState } from "react";
import { CiMenuBurger } from "react-icons/ci";
import { IoCloseOutline } from "react-icons/io5";
import { HiSun, HiMoon } from "react-icons/hi";
import { HiHome, HiUser, HiBriefcase, HiPhotograph, HiMail } from "react-icons/hi";
import { useThemeStore } from "../../store/themeStore";
import { navItems } from "./index"; // import navItems from index.js

export default function Header() {
  const iconMap = {
  home: <HiHome className="w-5 h-5 mr-2" />,
  about: <HiUser className="w-5 h-5 mr-2" />,
  services: <HiBriefcase className="w-5 h-5 mr-2" />,
  portfolio: <HiPhotograph className="w-5 h-5 mr-2" />,
  contact: <HiMail className="w-5 h-5 mr-2" />,
};

  const [menuOpen, setMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [language, setLanguage] = useState("EN");

  const { darkMode, toggleTheme } = useThemeStore();

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 10);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    document.documentElement.classList.toggle("dark", darkMode);
  }, [darkMode]);

  const closeMenu = () => setMenuOpen(false);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50
        bg-(--color-bg-surface)
        text-(--color-text-base)
        backdrop-blur
        transition-shadow duration-200
        ${isScrolled ? "shadow-lg" : ""}`}
    >
      <div className="mx-auto flex h-16 max-w-7xl items-center px-4 sm:px-6">
        {/* Logo */}
        <a href="#home" className="text-xl font-bold">
          Navin
        </a>

        {/* Spacer */}
        <div className="flex-1"></div>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-6">
          <nav className="flex items-center gap-6">
            {navItems.map((item) => (
              <a
                key={item.id}
                href={`#${item.id}`}
                className="relative font-medium
                  hover:text-black dark:hover:text-white
                  after:absolute after:left-1/2 after:-translate-x-1/2
                  after:-bottom-1 after:h-0.5 after:w-0
                  after:bg-current after:transition-[width] after:duration-300
                  hover:after:w-full"
              >
                {item.label}
              </a>
            ))}
          </nav>

          {/* Language */}
          <select
            value={language}
            onChange={(e) => setLanguage(e.target.value)}
            className="border rounded px-2 py-1 text-sm
              bg-white dark:bg-slate-800
              border-gray-300 dark:border-slate-700"
          >
            <option>EN</option>
            <option>JP</option>
            <option>NP</option>
          </select>

          {/* Theme Toggle */}
          <button onClick={toggleTheme} className="p-1 cursor-pointer">
            {darkMode ? <HiSun className="w-6 h-6" /> : <HiMoon className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Menu Button */}
        <button onClick={() => setMenuOpen(true)} className="ml-4 md:hidden">
          <CiMenuBurger className="w-6 h-6" />
        </button>
      </div>

      {/* Mobile Backdrop */}
      {menuOpen && <div className="fixed inset-0 z-40 bg-black/30 md:hidden" onClick={closeMenu} />}

      {/* Mobile Menu */}
      <div
        className={`fixed inset-0 z-50 h-screen
          bg-(--color-bg-surface)
          md:hidden
          transform transition-transform duration-300
          ${menuOpen ? "translate-y-0" : "-translate-y-full"}`}
      >
        <div className="relative h-full flex flex-col">
          <button onClick={closeMenu} className="absolute top-6 right-6">
            <IoCloseOutline className="w-7 h-7" />
          </button>

          <ul className="flex flex-col justify-center items-center flex-1 gap-6 text-lg w-48 mx-auto">
            {navItems.map((item) => (
              <li key={item.id}>
                <a
                  href={`#${item.id}`}
                  onClick={closeMenu}
                  className="flex items-center gap-2"
                >
                  {iconMap[item.id]}
                  <span className="relative w-fit
                    after:absolute after:left-1/2 after:-translate-x-1/2
                    after:-bottom-1 after:h-0.5 after:w-0
                    after:bg-current after:transition-[width] after:duration-300
                    hover:after:w-full"
                  >
                    {item.label}
                  </span>
                </a>
              </li>
            ))}
          </ul>

          <div className="flex justify-center gap-4 pb-10">
            <select
              value={language}
              onChange={(e) => setLanguage(e.target.value)}
              className="border rounded px-2 py-1 text-sm
                bg-white dark:bg-slate-800"
            >
              <option>EN</option>
              <option>JP</option>
              <option>NP</option>
            </select>

            <button onClick={toggleTheme}>
              {darkMode ? <HiSun className="w-6 h-6" /> : <HiMoon className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>
    </header>
  );
}