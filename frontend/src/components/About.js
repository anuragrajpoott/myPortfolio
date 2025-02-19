import React from 'react'

const education = [
  {
    title: "INSTITUTE OF ENGINEERING AND TECHNOLOGY, DAVV, Indore",
    description: "Bachelor of Engineering in Electronics and Instrumentation",
    marks: "CGPA: 7.00 | 2022-2026"
  },
  {
    title: "DEEPAK MMEMORIAL ACADEMY, Sagar, [M.P.]",
    description: "Senior Secondary (CBSE)",
    marks: "XII: 84% | 2021"
  },
]

const achievements = [
  {
    title: "PRATYAKSH - Drama Society",
    description: "Team President & Head of Events | Since sept 2023",
    value: ["Directed and organized social and cultural events, including skits and Nukkad Natak, focusing on community engagement and social issues.", "Led a team of members to successfully manage and execute large-scale events at universities and public venues."]
  },
  {
    title: " KARWAAN - Sports Club",
    description: "Captain of Basketball Team & Head Boy | 2019 - 2024",
    value: ["Led the basketball team to multiple inter-school tournament wins, demonstrating leadership, teamwork, and strategic thinking.", " Organized and coordinated sports events, promoting teamwork and participation across various events."]
  }
]

const About = () => {
  return (
    <div className='flex flex-col items-center'>

      <div>
        <div className='flex m-10 p-10 gap-10 items-center justify-evenly'>


          <div className='flex flex-col gap-10'>
            <div className='text-5xl'>
              Education
            </div>
            <div className='flex flex-col gap-5'>
              {
                education.map((e, index) => (
                  <div key={index} className='flex gap-5 '>
                    <div className='flex flex-col items-center'>
                      <div className='bg-white rounded-full h-5 w-5'></div>
                      <div className='bg-white w-1 h-28'></div>
                    </div>
                    <div className='flex flex-col border-2 border-white rounded-md p-5 g-2.5 w-max'>
                      <p>{e.title}</p>
                      <p>{e.description}</p>
                      <p>{e.marks}</p>
                    </div>
                  </div>
                ))
              }
            </div>
          </div>

          <div className='flex flex-col gap-10'>

            <div className='text-5xl'>
              Achievements
            </div>
            <div className='flex flex-col gap-5'>
              {
                achievements.map((e, index) => (
                  <div key={index} className='flex gap-5 '>
                    <div className='flex flex-col items-center'>
                      <div className='bg-white rounded-full h-5 w-5'></div>
                      <div className='bg-white w-1 h-28'></div>
                    </div>
                    <div className='flex flex-col border-2 border-white rounded-md p-5 g-2.5'>
                      <p>{e.title}</p>
                      <p>{e.description}</p>
                      <ul className='list-disc'>
                        {
                          e.value.map((e, index) => (
                            <li key={index}>{e}</li>
                          ))
                        }
                      </ul>
                    </div>
                  </div>
                ))
              }
            </div>
          </div>

        </div>
      </div>
    </div>
  )
}

export default About
