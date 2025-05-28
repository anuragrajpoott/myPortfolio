import React from "react";

const education = [
  {
    title: "INSTITUTE OF ENGINEERING AND TECHNOLOGY, DAVV, Indore",
    description: "Bachelor of Engineering in Electronics and Instrumentation",
    marks: "CGPA: 7.00 | 2022-2026",
  },
  {
    title: "DEEPAK MEMORIAL ACADEMY, Sagar, [M.P.]",
    description: "Senior Secondary (CBSE)",
    marks: "XII: 84% | 2021",
  },
];

const achievements = [
  {
    title: "PRATYAKSH - Drama Society",
    description: "Team President & Head of Events | Since Sept 2023",
    value: [
      "Directed and organized social and cultural events, including skits and Nukkad Natak, focusing on community engagement and social issues.",
      "Led a team of members to successfully manage and execute large-scale events at universities and public venues.",
    ],
  },
  {
    title: "KARWAAN - Sports Club",
    description: "Captain of Basketball Team & Head Boy | 2019 - 2024",
    value: [
      "Led the basketball team to multiple inter-school tournament wins, demonstrating leadership, teamwork, and strategic thinking.",
      "Organized and coordinated sports events, promoting teamwork and participation across various events.",
    ],
  },
];

const TimelineDot = () => (
  <>
    <div className="bg-pink-500 rounded-full h-5 w-5"></div>
    <div className="bg-pink-500 w-1 h-28"></div>
  </>
);

const About = () => {
  return (
    <section id="about" className="flex flex-col items-center px-6 py-16 max-w-7xl mx-auto">
      <h2 className="text-5xl font-bold mb-16 text-center">About Me</h2>

      <div className="flex flex-col md:flex-row gap-16 md:gap-24 w-full justify-center">
        {/* Education Section */}
        <div className="flex flex-col gap-12 md:w-1/2">
          <h3 className="text-4xl font-semibold mb-8 border-b-2 border-pink-500 inline-block pb-2">
            Education
          </h3>
          <div className="flex flex-col gap-8">
            {education.map(({ title, description, marks }, idx) => (
              <div key={idx} className="flex gap-6">
                <div className="flex flex-col items-center">
                  <TimelineDot />
                </div>
                <div className="border-2 border-pink-500 rounded-md p-6 bg-gray-900 w-full">
                  <p className="text-xl font-semibold">{title}</p>
                  <p className="text-pink-400 mt-1 mb-2">{description}</p>
                  <p className="text-gray-400">{marks}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Achievements Section */}
        <div className="flex flex-col gap-12 md:w-1/2">
          <h3 className="text-4xl font-semibold mb-8 border-b-2 border-pink-500 inline-block pb-2">
            Achievements
          </h3>
          <div className="flex flex-col gap-8">
            {achievements.map(({ title, description, value }, idx) => (
              <div key={idx} className="flex gap-6">
                <div className="flex flex-col items-center">
                  <TimelineDot />
                </div>
                <div className="border-2 border-pink-500 rounded-md p-6 bg-gray-900 w-full">
                  <p className="text-xl font-semibold">{title}</p>
                  <p className="text-pink-400 mt-1 mb-2">{description}</p>
                  <ul className="list-disc list-inside text-gray-300 space-y-1">
                    {value.map((point, i) => (
                      <li key={i}>{point}</li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
