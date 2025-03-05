import React, { useState } from 'react'
import logo from "../assets/logo.png"
import myResume from "../assets/Anurag_Dangi_Software_Engineering_Resume.pdf"




const Nav = () => {

  const [active,setActive] = useState("home")



  return (
    <div className='sticky top-0'>
      <div className='p-10 flex justify-between items-center'>

        <div className='flex gap-2.5 items-center'>
          <img src={logo} alt={"AR"} className='h-12 rounded-full' />
          <span>Anurag Rajpoot</span>
        </div>

        <div>
          <ul className='flex gap-5 items-center'>
            <li onClick={()=>{setActive("home")}}><a href='#home' className={`scroll-smooth p-1 ${active === "home" ? "outline" : ""}`}>Home</a></li>
            <li onClick={()=>{setActive("about")}}><a href='#about' className={`scroll-smooth p-1 ${active === "about" ? "outline" : ""}`}>About</a></li>
            <li onClick={()=>{setActive("skill")}}><a href='#skill' className={`scroll-smooth p-1 ${active === "skill" ? "outline" : ""}`}>Skills</a></li>
            <li onClick={()=>{setActive("project")}}><a href='#project' className={`scroll-smooth p-1 ${active === "project" ? "outline" : ""}`}>Projects</a></li>
            <li onClick={()=>{setActive("contact")}}><a href='#contact' className={`scroll-smooth p-1 ${active === "contact" ? "outline" : ""}`}>contact me</a></li>
            <li><button className='bg-gray-500 p-2.5 rounded-md'><a href={myResume} target="_blank"
                    rel="noreferrer">
                    Resume
                </a></button></li>
          </ul>
        </div>

      </div>
    </div>
  )
}

export default Nav
