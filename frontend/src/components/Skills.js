import React from 'react'
import python from "../assets/python.webp"
import { CircularProgressbar } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';



const data = [
    {
        title: "Python",
        path: python,
    },
    {
        title: "Python",
        path: python,
    },
    {
        title: "Python",
        path: python,
    },
    {
        title: "Python",
        path: python,
    },
    {
        title: "Python",
        path: python,
    },
    {
        title: "Python",
        path: python,
    },
    {
        title: "Python",
        path: python,
    },
    {
        title: "Python",
        path: python,
    },
]

const Skills = () => {

    const percentage = 85;

    return (
        <div className='bg-gray-700 flex flex-col justify-center items-center gap-20 p-10'>

            <div className='text-5xl'>My Skills</div>

            <div className='flex'>


                <div className='flex justify-center items-center'><p className='text-5xl -rotate-90' >LANGUAGES</p></div>



                <div className='grid grid-cols-4 grid-rows-2 gap-5 items-center'>
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


            <div>
                
            </div>



        </div>
    )
}

export default Skills
