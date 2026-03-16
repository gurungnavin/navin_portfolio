import React from 'react'
import Social from './Social'
import profile from '../../assets/profile.jpg'
import Data from './Data'

const Home = () => {
  return (
    <section className='pt-8 pb-8 bg-white dark:bg-slate-800'>
      <div className='grid gap-6 gap-y-28 max-w-310 mx-auto'>
        <div className="grid grid-cols-[116px_1fr_1fr] gap-6 gap-x-8 pt-22 items-center">
          <Social />
          <div
            className="w-72 h-72 bg-center bg-cover shadow-inner justify-self-center order-1"
            style={{
              backgroundImage: `url(${profile})`,
              boxShadow: "inset 0 0 0 5px rgba(255, 255, 255, 0.5)",
              borderRadius: "60% 40% 30% 70% / 60% 30% 70% 40%",
            }}
          ></div>
           <Data />
        </div>
      </div>
    </section>
  )
}

export default Home