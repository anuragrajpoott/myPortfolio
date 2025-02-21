import React from 'react'
import sectionA from "../assets/sectionA.png"
import {Typewriter} from 'react-simple-typewriter';


const Home = () => {
  return (
    <div className='flex p-10' id='home'>

        <div className='flex flex-col ml-20 gap-5 w-[100%]'>
            <p className='text-5xl'>Hey,</p>

            <p className='text-5xl'>this is Anurag...</p>

            <span className='text-5xl'>
            <Typewriter
            words={['A Web Developer']}
            loop={5}
            cursor
            cursorStyle='_'
            typeSpeed={70}
            deleteSpeed={50}
            delaySpeed={1000}
          />
            </span>

            <p>I specialize in creating seamless and responsive websites that deliver exceptional user experiences. With a passion for clean code and innovative design, I bring digital ideas to life through web technologies. Whether it's building custom websites, e-commerce solutions, or improving existing platforms, I'm dedicated to crafting the perfect web experience. Explore my portfolio to see how I can help bring your vision to the digital world!</p>

            <div className='flex gap-5'>
            <button className='bg-pink-500 rounded-md p-2.5'>Contact me</button>
            <button className='border-2 border-pink-500 rounded-md p-2.5'>Latest Works</button>
            </div>

        </div>

        <div className=''>
            <img src={sectionA} alt={""} className='w-max' />
        </div>
      
    </div>
  )
}

export default Home
