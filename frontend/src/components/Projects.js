import React from 'react'
import { GoFileDirectory } from "react-icons/go";
import { FaGithub } from "react-icons/fa";
import { CiShare1 } from "react-icons/ci";
import {Link} from "react-router-dom"
import { FcNext } from "react-icons/fc";
import { FcPrevious } from 'react-icons/fc';
import mern from "../assets/mern.png"








const Projects = () => {

    const data = [
        {
            github: "https://github.com/anuragrajpoott/study-notion",
            live: "https://study-notion-nine-rho.vercel.app/",
            title: "Study-Notion",
            description: "Developed an EdTech platform using the MERN stack that provides learning, and collaboration features for students and educators.Features include user authentication, real-time notifications, and dynamic content management.",
            stack: [mern]
    
        },
        {
            github: "https://github.com/anuragrajpoott/myPortfolio",
            live: "https://study-notion-nine-rho.vercel.app/",
            title: "Portfolio",
            description: "Created a responsive and interactive personal portfolio website using the MERN stack to showcase my skills, projects, andtechnical knowledge. Integrated a contact form and dynamic content display, emphasizing a clean user interface and smooth user experience.",
            stack: [mern]
    
        },
        
      
    
    ]

    return (
        <div id='project' className='p-10 flex flex-col justify-center items-center gap-10'>

            <div className='text-5xl'>My Projects</div>


                <div className='flex items-center justify-center'>

                    <button className='text-5xl'><FcPrevious/></button>

                   <div className='flex justify-center items-center gap-5'>
                   {
                        data.map((e, index) => (
                            <div className='flex flex-col gap-5 border-2 border-white rounded-md p-5 bg-gray-500 hover:bg-purple-500 ' key={index}>
                                <div className='flex items-center justify-between'>
                                    <Link to={""}><GoFileDirectory /></Link>
                                    <Link to={e.github}><FaGithub /></Link>
                                    <Link to={e.live}><CiShare1 /></Link>
                                </div>
                                <p>{e.title}</p>
                                <p>{e.description}</p>
                                <div className='flex items-center justify-end'>
                                    {
                                        e.stack.map((e,index)=>(
                                            <img src={e} alt={""} className='h-10'/>
                                        ))
                                    }
                                </div>
                            </div>
                        ))
                    }
                   </div>

                    <button className='text-5xl'><FcNext /></button>
                </div>
        </div>
    )
}

export default Projects

