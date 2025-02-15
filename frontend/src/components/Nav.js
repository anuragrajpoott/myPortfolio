import React from 'react'
import logo from "../assets/logo.png.jpg"

const Nav = () => {
  return (
    <div className='p-10 flex justify-between items-center'>

        <div className='flex gap-2.5 items-center'>
            <img src={logo} alt={"AR"} className='h-12 rounded-full'/>
            <span>Anurag Rajpoot</span>
        </div>

        <div>
            <ul className='flex gap-5'>
                <li>Home</li>
                <li>About</li>
                <li>Projects</li>
                <li>Contact me</li>
            </ul>
        </div>
      
    </div>
  )
}

export default Nav
