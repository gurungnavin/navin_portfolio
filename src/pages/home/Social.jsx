import React from 'react';
import { FaInstagram, FaLinkedin, FaGithub } from 'react-icons/fa';

const Social = () => {
  return (
    <div className="grid grid-cols-[max-content] gap-y-4">
      <a
        href="https://www.instagram.com/navingrg553/"
        target="_blank"
        rel="noreferrer"
       className="text-[1.6rem] transition-transform duration-300 ease-in-out hover:scale-[1.25] text-gray-800 dark:text-white hover:text-gray-900 dark:hover:text-white"
      >
        <FaInstagram />
      </a>

      <a
        href="https://www.linkedin.com/in/navin-gurung-9021611b3/"
        target="_blank"
        rel="noreferrer"
        className="text-[1.6rem] transition-transform duration-300 ease-in-out hover:scale-[1.25] text-gray-800 dark:text-white hover:text-gray-900 dark:hover:text-white"
      >
        <FaLinkedin />
      </a>

      <a
        href="https://github.com/gurungnavin"
        target="_blank"
        rel="noreferrer"
        className="text-[1.6rem] transition-transform duration-300 ease-in-out hover:scale-[1.25] text-gray-800 dark:text-white hover:text-gray-900 dark:hover:text-white"
      >
        <FaGithub />
      </a>
    </div>
  );
};

export default Social;