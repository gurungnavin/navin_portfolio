import React from 'react'
import profile from '../../assets/profile.jpg'
import { FaInstagram, FaLinkedin, FaGithub } from 'react-icons/fa';
import Lottie from "lottie-react";
import welcomeAnimation from "../../assets/Welcome Animation.json";

const Home = () => {
  const currentYear = new Date().getFullYear();
  const devYears = currentYear - 2022;
  const adminYears = currentYear - 2024;

  return (
    <section className="flex flex-col-reverse lg:flex-row items-center justify-center px-12 gap-8 md:gap-12 lg:gap-40 py-20 bg-(--color-bg-surface)">
      {/* Left side: Social + Data */}
      <div className="flex sm:flex-row items-center justify-center gap-6 sm:gap-8">
        {/* Social Icons */}
          <div className="grid grid-cols-[max-content] gap-y-4">
              <a
                href="https://www.instagram.com/navingrg553/"
                target="_blank"
                rel="noopener noreferrer"
               className="text-[1.6rem] transition-transform duration-300 ease-in-out hover:scale-[1.25] text-gray-800 dark:text-white hover:text-gray-900 dark:hover:text-white"
              >
                <FaInstagram />
              </a>
        
              <a
                href="https://www.linkedin.com/in/navin-gurung-9021611b3/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[1.6rem] transition-transform duration-300 ease-in-out hover:scale-[1.25] text-gray-800 dark:text-white hover:text-gray-900 dark:hover:text-white"
              >
                <FaLinkedin />
              </a>
        
              <a
                href="https://github.com/gurungnavin"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[1.6rem] transition-transform duration-300 ease-in-out hover:scale-[1.25] text-gray-800 dark:text-white hover:text-gray-900 dark:hover:text-white"
              >
                <FaGithub />
              </a>
            </div>
    {/* Content */}
    <div className="max-w-xl px-4 sm:px-6 lg:px-0">
      {/* Name + Lottie */}
      <h1 className="flex sm:flex-row sm:items-center text-[1.5rem] sm:text-[2rem] md:text-[2.25rem] font-bold mb-2 gap-4">
        Navin Gurung
        <div className="w-24 h-12 sm:w-36 sm:h-16 md:w-40 md:h-20">
          <Lottie
            animationData={welcomeAnimation}
            loop={true}
            autoplay={true}
          />
        </div>
      </h1>

      {/* Subtitle */}
      <h3 className="relative pl-12 sm:pl-14 text-lg sm:text-xl font-semibold mb-4">
        <span className="absolute left-0 top-4 w-10 sm:w-12 h-px bg-gray-600"></span>
        フロントエンド・エンジニア
      </h3>

      {/* Description */}
      <p className="max-w-xl text-base sm:text-lg font-semibold mb-6 leading-relaxed">
        現在、フロントエンドエンジニアとして
        <span className="bg-yellow-200 dark:border-white dark:border dark:bg-slate-800 px-1 text-base font-black m-1 rounded">
          {devYears}
        </span>
        年以上の開発経験を積み、日々技術の向上に努めています。
        また、
        <span className="bg-yellow-200 dark:bg-slate-800 dark:border-white dark:border px-1 text-base m-1 rounded">
          {adminYears}
        </span>
        年以上の事務経験もあり、チームでの業務遂行能力も備えています。
        将来的には、社会に貢献し、人々の幸せを追求するWebフロントエンドエンジニアとしてさらに成長することを目指しています。
      </p>

      {/* Button */}
      <button
        type="button"
        className="inline-flex items-center bg-blue-50 border border-gray-300 hover:bg-blue-100 hover:text-blue-900 shadow-sm font-medium text-red-700 text-base sm:text-lg animate-pulse px-4 py-2 rounded focus:outline-none transition duration-150"
      >
        メンテナンス中
      </button>
    </div>
      </div>

      {/* Right side: Profile Image */}
      <img
        src={profile}
        alt="Profile photo of Navin Gurung"
        className="w-40 h-40 sm:w-48 sm:h-48 md:w-56 md:h-56 lg:w-64 lg:h-64 rounded-full object-cover"
      />
    </section>
  );
};

export default Home