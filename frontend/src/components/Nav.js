import React from 'react'
import logo from "../assets/logo.png"

const Nav = () => {
  return (
    <div className='p-10 flex justify-between items-center'>

        <div className='flex gap-2.5 items-center'>
            <img src={logo} alt={"AR"} className='h-12 rounded-full'/>
            <span>Anurag Rajpoot</span>
        </div>

        <div>
            <ul className='flex gap-5 items-center'>
                <li>Home</li>
                <li>About</li>
                <li>Skills</li>
                <li>Projects</li>
                <li>Contact me</li>
                <li><button className='bg-gray-500 p-2.5 rounded-md'>Resume</button></li>
            </ul>
        </div>
      
    </div>
  )
}

export default Nav
