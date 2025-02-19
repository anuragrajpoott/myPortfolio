import React, { useState } from 'react'
import { FaPhoneVolume } from "react-icons/fa6";



const Contact = () => {

  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    message: ""
  })

  const { fullName, email, message } = formData

  const changeHandler = (e) => {
    setFormData((prevData) => ({
      ...prevData,
      [e.target.name]: e.target.value,

    }))
  }


  const submitHandler = (e) => {
    e.preventDefault()

    console.log(formData)



  }




  const data = [
    {
      icon: <FaPhoneVolume />,
      title: "+91 7970233595"
    },
    {
      icon: <FaPhoneVolume />,
      title: "+91 7970233595"
    },
    {
      icon: <FaPhoneVolume />,
      title: "+91 7970233595"
    },
  ]


  return (
    <div className='flex flex-col items-center justify-center gap-10 p-10 bg-gray-500'>

      <div className='text-5xl'>Get in  Touch...</div>

      <div className='flex gap-20 items-center justify-evenly'>

        <div className='flex flex-col gap-10'>
          {
            data.map((e, index) => (
              <div className='flex gap-5 bg-black p-5 rounded-md items-center border-2 border-white' key={index}>
                <div>{e.icon}</div>
                <div>{e.title}</div>
              </div>
            ))
          }
        </div>

        <div className='w-1 bg-white h-40 '></div>

        <form onSubmit={submitHandler} className='flex flex-col gap-5 w-80 border-2 p-5'>

          <label>
            <p>Your Name</p>
            <input
              type='text'
              name='fullName'
              value={fullName}
              onChange={changeHandler}
              className='w-full form-style text-black'
            />
          </label>


          <label>
            <p>Email</p>
            <input
              type='text'
              name='email'
              value={email}
              onChange={changeHandler}
              className='w-full form-style text-black'
            />
          </label>

          <label>
            <p>Message</p>
            <textarea

              name='message'
              value={message}
              onChange={changeHandler}
              className='w-full form-style text-black'
            />
          </label>

          <button type='submit' className='flex items-center justify-center bg-slate-500 rounded-md'>Submit</button>
        </form>
      </div>

    </div>
  )
}

export default Contact
