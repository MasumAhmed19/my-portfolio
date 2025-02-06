import React from "react";

const educationData = [
  {
    id:1,
    institution: "Bangladesh University of Business & Technology (BUBT)",
    degree: "3rd Year 1st Sem, B.Sc. in CSE",
    duration: "2023 - Present",
    location: "Dhaka",
    skills: ["Algorithms", "Data Structures", "Databases"],
    CGPA: '3.83'
  },{
    id:2,
    institution: "Government Science College",
    degree: "Higher Secondary Certificate",
    duration: "2027 - 2019",
    location: "Dhaka",
    skills: ["BNCC"],
    CGPA: '5.00'
  },
//   {
//     id:3,
//     institution: "Kurmitola High School",
//     degree: "Secondary School Certificate",
//     duration: "2027 - 2019",
//     location: "Dhaka",
//     skills: ["BNCC"],
//     CGPA: '5.00'
//   },


];

const EducationSection = () => {
  return (
    <section className="w-full  text-black py-16">
      <div className="max-w-5xl mx-auto px-6 gap-10">
        <h2 className="text-2xl font-fraunces text-gray-800 mb-4">
          Education
        </h2>

        {educationData.map((edu, index) => (

          <div key={index} className="pb-6 mb-6 border-b space-y-2 border-border">
            <div className="flex justify-between items-center">
              <h3 className="text-base ">{edu.institution}</h3>
              {/* <p className="text-gray-400">{edu.duration}</p> */}
              {
                edu.id===1 ? <p className="text-secondary-dark font-mono">CGPA: {edu.CGPA}</p> : <p className="text-secondary-dark font-mono">GPA: {edu.CGPA}</p>
              }
            </div>
            <p className="text-xs text-gray-500">{edu.degree}</p>
            <p className="text-xs text-gray-500">{edu.location}</p>

            {/* Skills/Subjects */}
            <div className="flex flex-wrap gap-2 mt-3">
                {
                    edu.id===1 ? <p className="text-xs text-gray-500">Mentionable Courses:</p>:<p className="text-xs text-gray-500">Mentionable Activity:</p>
                }
              {edu.skills.map((skill, i) => (
                <span key={i} className="inline-block text-xs bg-purple-100 text-secondary-dark font-mono px-2 mb-2 rounded">
                  {skill}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default EducationSection;
