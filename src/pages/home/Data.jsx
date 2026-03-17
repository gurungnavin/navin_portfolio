import React from "react";
import Lottie from "lottie-react";
import welcomeAnimation from "../../assets/Welcome Animation.json";

const Data = () => {
  return (
    <div className="max-w-2xl px-4 sm:px-6 lg:px-0">
      {/* Name + Lottie */}
      <h1 className="flex sm:flex-row sm:items-center text-[1.5rem] sm:text-[2rem] md:text-[2.25rem] font-bold mb-2 gap-4">
        Gurung Navin
        <div className="w-22 h-12 sm:w-36 sm:h-16 md:w-40 md:h-20">
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
      <p className="max-w-md text-base sm:text-lg font-semibold mb-6 leading-relaxed">
        現在、フロントエンドエンジニアとして
        <span className="bg-yellow-200 dark:border-white dark:border dark:bg-slate-800 px-1 text-md font-black m-1 rounded">
          {new Date().getFullYear() - 2022}
        </span>
        年以上の開発経験を積み、日々技術の向上に努めています。
        また、
        <span className="bg-yellow-200 dark:bg-slate-800 dark:border-white dark:border px-1 text-md m-1 rounded">
          {new Date().getFullYear() - 2024}
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
  );
};

export default Data;