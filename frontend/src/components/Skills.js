import React from 'react'
import python from "../assets/python.webp"
import cpp from "../assets/cpp.png"
import html from "../assets/html.png"
import css from "../assets/css.png"
import js from "../assets/js.png"
import react from "../assets/react.png"
import express from "../assets/express-js.png"
import mdb from "../assets/mdb.png"
import node from "../assets/node.png"
import sql from "../assets/sql.png"
import linux from "../assets/linux.png"
import pm from "../assets/postman.webp"
import doker from "../assets/docker.jpg"
import gh from "../assets/gh.png"

import { CircularProgressbar } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';



const data = [

    {
        title: "HTML",
        path: html,
    },
    {
        title: "CSS",
        path: css,
    },
    {
        title: "JavaScript",
        path: js,
    },
    {
        title: "React",
        path: react,
    },
    {
        title: "Express JS",
        path: express,
    },
    {
        title: "Node Js",
        path: node,
    },
    {
        title: "Mongo DB",
        path: mdb,
    },
    {
        title: "Python",
        path: python,
    },
    {
        title: "C++",
        path: cpp,
    },
    {
        title: "SQL",
        path: sql,
    },
]

const tools = [
    {
        title: "Postman",
        path: pm
    },
    {
        title: "Git",
        path: gh
    },
    {
        title: "Linux",
        path: linux
    },
    {
        title: "Doker",
        path: doker
    },
]

const Skills = () => {

    const percentage = 85;

    return (
        <div id='skill' className=' flex flex-col justify-center items-center gap-20 p-10'>

            <div className='text-5xl'>My Skills</div>

            <div className='flex'>


                <div className='flex justify-center items-center'><p className='text-5xl -rotate-90' >LANGUAGES</p></div>



                <div className='grid grid-cols-5 grid-rows-2 gap-5 items-center'>
                    {
                        data.map((e, index) => (
                            <div key={index} className='flex flex-col items-center justify-center gap-2.5 bg-gray-900  rounded-md p-5 hover:bg-orange-400'>
                                <img src={`${e.path}`} alt='' className='h-20' />
                                <p>{e.title}</p>
                            </div>
                        ))
                    }
                </div>
            </div>

            <div className='flex  gap-20'>

                <div><CircularProgressbar value={percentage} text={`MERN ${percentage}% `} /></div>

                <div><CircularProgressbar value={percentage} text={`DSA ${percentage}% `} /></div>

                <div className='flex justify-center items-center'><p className='text-5xl rotate-90' >STACK</p></div>
            </div>


            <div className='flex items-center gap-5'>

                <div className='flex justify-center items-center'><p className='text-5xl -rotate-90' >Tools</p></div>



                <div className='grid grid-cols-4 gap-10 items-center'>
                    {
                        tools.map((e, index) => (
                            <div key={index} className='flex flex-col items-center justify-center gap-2.5 bg-gray-900  rounded-md p-5 hover:bg-orange-400'>
                                <img src={`${e.path}`} alt='' className='h-20' />
                                <p>{e.title}</p>
                            </div>
                        ))
                    }
                </div>

            </div>



        </div>
    )
}

export default Skills
