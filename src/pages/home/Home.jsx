import React from 'react'
import Social from './Social'
import profile from '../../assets/profile.jpg'
import Data from './Data'

const Home = () => {
  return (
    <section className='pt-8 pb-8 bg-white dark:bg-slate-800'>
      
      {/* CHANGE: added px-4 for mobile padding */}
      <div className='grid gap-6 gap-y-16 lg:gap-y-28 max-w-310 mx-auto px-4'>
        
        {/* CHANGE: responsive columns */}
        {/* mobile + tablet: 2 columns */}
        {/* desktop: original 3-column layout */}
        <div className="grid grid-cols-2 lg:grid-cols-[116px_1fr_1fr] gap-6 gap-x-8 pt-22 items-center">

          <Social />

          {/* CHANGE: responsive image size */}
          <div
            className="w-40 h-40 sm:w-56 sm:h-56 lg:w-72 lg:h-72 bg-center bg-cover shadow-inner justify-self-center order-1"
            style={{
              backgroundImage: `url(${profile})`,
              boxShadow: "inset 0 0 0 5px rgba(255, 255, 255, 0.5)",
              borderRadius: "60% 40% 30% 70% / 60% 30% 70% 40%",
            }}
          ></div>

          {/* CHANGE: make Data take full row on mobile/tablet */}
          <div className="col-span-2 lg:col-span-1">
            <Data />
          </div>

        </div>
      </div>
    </section>
  )
}

export default Home