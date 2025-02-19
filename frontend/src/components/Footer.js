import React from 'react'
import { FaHeart } from "react-icons/fa";


const Footer = () => {
  return (
    <div className='flex p-10 justify-between'>

      <div className='flex gap-2.5'>
        <p>Copyright@2024 All Right Reserved</p>
        <p>|</p>
        <div className='flex items-center justify-center gap-1'><p>made with</p><FaHeart/><p> @anuragrajpoot </p></div>
      </div>

      <div className='flex gap-2.5'>
        <p>Terms</p>
        <p>Privacy</p>
        <p>Compliances</p>
      </div>
      
    </div>
  )
}

export default Footer
