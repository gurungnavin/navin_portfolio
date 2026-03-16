import React from "react";
import Lottie from "lottie-react";
import welcomeAnimation from "../../assets/Welcome Animation.json"
import { FaCcVisa } from "react-icons/fa";

const Data = () => {
  return (
    <div className="home__data">
      <h1 className="flex items-center text-[2.2rem] font-bold mb-1 gap-4">
        Gurung Navin
        <div className="w-34 h-16 mb-4"> {/* adjust size here */}
          <Lottie
            animationData={welcomeAnimation}
            loop={true}
            autoplay={true}
          />
        </div>
      </h1>

      <h3 className="relative pl-14 text-lg font-semibold mb-4">
        <span className="absolute left-0 top-4 w-12 h-px bg-gray-600"></span>
        フロントエンド・エンジニア
      </h3>
      <p className="max-w-xl text-base font-semibold mb-6">
        現在、フロントエンドエンジニアとして<span className="bg-yellow-200 dark:border-white dark:border dark:bg-slate-800 px-1 text-md font-black m-1 rounded">{new Date().getFullYear() - 2022}</span>年以上の開発経験を積み、日々技術の向上に努めています。
        また、<span className="bg-yellow-200 dark:bg-slate-800 dark:border-white dark:border px-1 text-md m-1 rounded">{new Date().getFullYear() - 2024}</span>年以上の事務経験もあり、チームでの業務遂行能力も備えています。
        将来的には、社会に貢献し、人々の幸せを追求するWebフロントエンドエンジニアとしてさらに成長することを目指しています。
      </p>

     <button
  type="button"
  className="inline-flex items-center bg-blue-50 border border-gray-300 hover:bg-blue-100 hover:text-blue-900 shadow-sm font-medium text-sm px-4 py-2 rounded focus:outline-none transition duration-150"
>
  <FaCcVisa className="w-6 h-6 mr-2 text-blue-700" />
  Say Hello
</button>
    </div>
  );
};

export default Data;