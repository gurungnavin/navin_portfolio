import React from 'react'
import gsap from 'gsap'
import { ScrollTrigger, SplitText  } from 'gsap/all'
import Navbar from './components/Navbar';

{/* ScrollTrigger and SplitText initialization for animation while scrolling and text splitting */}

gsap.registerPlugin(ScrollTrigger, SplitText);
{/* Once the plugins are registered, we can use them in our animations globally */}

const App = () => {
  return (
    <main>
      <Navbar />
    </main>
  )
}

export default App