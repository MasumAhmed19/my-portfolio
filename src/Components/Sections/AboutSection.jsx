import React from "react";
import EducationSection from "./EducationSection";

const AboutSection = () => {
  return (
    <section className="w-full py-16">
      <div className="max-w-4xl mx-auto px-6 flex flex-col md:flex-row items-center gap-10">
        
        {/* Image Section */}
        <div className="w-60 h-60 md:w-80 md:h-80  overflow-hidden ">
          <img
            src="https://i.ibb.co.com/KjN8t2q7/bw.jpg"
            alt="Masum Ahmed"
            className="w-full h-full object-cover mix-blend-darken	"
          />
        </div>

        {/* About Content */}
        <div className="flex-1 text-center md:text-left">
          <h2 className="text-2xl font-fraunces text-gray-800 mb-4">
            About Me
          </h2>
          <p className="text-gray-500 text-sm">
            Hi, I'm <span className="font-semibold ">Masum Ahmed</span>, a passionate web developer with experience in the MERN stack. I love crafting responsive and dynamic web applications. I specialize in backend technology and love crafting seamless web experiences. Passionate about building scalable applications, I blend logic with creativity to develop dynamic and user-friendly solutions. Beyond coding, I thrive on problem-solving.
          </p>
        </div>

      </div>
          <EducationSection />
      
 
    </section>
  );
};

export default AboutSection;
