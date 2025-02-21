import React, { useState } from 'react'
import { FaPhoneVolume } from "react-icons/fa6";
import {toast} from "react-hot-toast"
import {apiConnector} from "../services/apiConnecter"



const BASE_URL = "http://localhost:4000/api/v1"

const authEndPoints = {
  CONTACT_API : BASE_URL + "/auth/contact"
}



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




  const submitHandler = async (e) => {
    e.preventDefault()


   const toastId = toast.loading("making connection")
    try {
      
  
      const response = await apiConnector("POST", authEndPoints.CONTACT_API,formData)
      console.log("Contact API RESPONSE............", response)

      console.log(response.data.success)

      if (!response.data.success) {
        throw new Error(response.data.message)
      }
      
      toast.success("connection successfull")
      

  
    } catch (error) {
      console.log("contact API ERROR............", error)
      toast.error("connection unsuccessfull")
      
    }
    toast.dismiss(toastId)

    setFormData({
      fullName: "",
    email: "",
    message: ""
    })



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
    <div id='contact' className='flex flex-col items-center justify-center gap-10 p-10'>

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

        <form  className='flex flex-col gap-5 w-80 border-2 p-5'>

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

          <button onClick={submitHandler} className='flex items-center justify-center bg-slate-500 rounded-md'>Submit</button>
        </form>
      </div>

    </div>
  )
}

export default Contact
