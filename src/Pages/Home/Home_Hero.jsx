import SocialLink from "../../Components/others/SocialLink";
import { FaXTwitter } from "react-icons/fa6";
import { AiOutlineLinkedin } from "react-icons/ai";
import { SiCodeforces } from "react-icons/si";
import { IoLogoGithub } from "react-icons/io";

const Home_Hero = () => {
  return (
    <section className="relative md:min-h-[110vh] overflow-hidden flex justify-start items-center py-[10vh] p-5 -mt-[15vh] md:-mt-[20vh] bg-[#FBFBFB] before:absolute before:top-0 before:left-0 before:w-full before:h-full before:bg-[url('https://www.transparenttextures.com/patterns/asfalt-light.png')] before:opacity-10 before:pointer-events-none">
      {/* gradient blob */}
      <div className="absolute top-10 left-0 transform -translate-x-1/2 -translate-y-1/2 w-full h-full pointer-events-none flex justify-center">
        <div className="z-[2] w-[90vw] max-w-[65rem] h-[70vh] bg-gradient-to-r from-[#D569A2] to-[#8F03FF] filter blur-[5rem] rounded-full animate-rotate2"></div>
      </div>

      {/* hero content */}
      <div className="max-w-4xl mx-auto w-full z-10 py-[100px]">
        <div className="flex flex-col gap-5">
          <h2 className="text-left font-fraunces text-3xl md:text-5xl leading-10 md:leading-15 font-thin">
            <div className="flex items-center justify-start gap-2">
              <span className="whitespace-nowrap">Hi, I'm</span>
              <div
                className="tooltip"
                data-tip="hello"
              >
                <div className="tooltip-content">
                  <div className="animate-bounce text-orange-400 -rotate-10 text-2xl font-black">
                    Hiiiiii
                  </div>
                </div>
                <img
                src="https://i.ibb.co.com/KjN8t2q7/bw.jpg"
                className="w-10 md:w-16 rounded-full border-border"
              />
              </div>
              
              <span className="whitespace-nowrap">Masum Ahmed, </span>
            </div>
            Junior <span className="grad-text">MERN</span> Stack Developer{" "}
            <br /> & Passionate about Problem Solving
          </h2>

          {/* Social Links */}
          <div className="flex gap-3 flex-wrap items-center justify-start">
            <SocialLink
              icon={<FaXTwitter />}
              name="Twitter"
              to="https://x.com/Masum_Ahmedd"
            />
            <SocialLink
              icon={<AiOutlineLinkedin />}
              name="LinkedIn"
              to="https://www.linkedin.com/in/masum-ahmed-61b3b8294/"
            />
            <SocialLink
              icon={<IoLogoGithub />}
              name="Github"
              to="https://github.com/MasumAhmed19"
            />
            <SocialLink
              icon={<SiCodeforces />}
              name="Codeforces"
              to="https://codeforces.com/profile/deep_err0r"
            />
          </div>

          {/* Bio */}
          <div>
            <p className="text-gray-500 text-md">
              I specialize in backend technology and love crafting seamless web
              experiences. Passionate about building scalable applications, I
              blend logic with creativity to develop dynamic and user-friendly
              solutions. Beyond coding, I thrive on problem-solving.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Home_Hero;

// const Home_Hero = () => {
//   return (
//     <section className="relative min-h-screen overflow-hidden flex justify-start items-center py-[10vh] p-5 -mt-[15vh] md:-mt-[20vh]">
//       <div className="absolute top-10 left-0 transform -translate-x-1/2 -translate-y-1/2 w-full h-full pointer-events-none flex justify-center">
//         <div className="z-[2] w-[90vw] max-w-[65rem] h-[70vh] bg-gradient-to-r from-[#D569A2] to-[#8F03FF] filter blur-[5rem] rounded-full animate-rotate2"></div>
//       </div>

//       <div className="max-w-4xl mx-auto w-full z-10">
//         <div className="flex flex-col gap-5">
//           <h2 className="text-left font-fraunces text-3xl md:text-5xl leading-15 font-thin">
//             <div className="flex items-center justify-start gap-2">
//               <span>Hi, I'm</span>
//               <img
//                 src="https://i.ibb.co.com/KjN8t2q7/bw.jpg"
//                 className="w-12 md:w-14 rounded-full border-border"
//               ></img>
//               <span>Masum Ahmed, </span>
//             </div>
//             Junior MERN Stack Developer <br/>& Passionate about Problem Solving
//           </h2>

//           {/* Social Links */}
//           <div className="flex gap-3 flex-wrap items-center justify-start">
//             <SocialLink icon={<FaXTwitter />} name="Twitter" to="https://x.com/Masum_Ahmedd" />
//             <SocialLink icon={<AiOutlineLinkedin />} name="LinkedIn" to="https://www.linkedin.com/in/masum-ahmed-61b3b8294/" />
//             <SocialLink icon={<IoLogoGithub />} name="Github" to="https://github.com/MasumAhmed19" />
//             <SocialLink icon={<SiCodeforces />} name="Codeforces" to="https://codeforces.com/profile/deep_err0r" />
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default Home_Hero;

// import SocialLink from "../../Components/others/SocialLink";
// import { FaXTwitter } from "react-icons/fa6";
// import { CiLinkedin } from "react-icons/ci";
// import { SiCodeforces } from "react-icons/si";
// import { IoLogoGithub } from "react-icons/io";

// const Home_Hero = () => {
//   return (
//     <section className="relative min-h-screen flex justify-start items-center py-[10vh] p-5 -mt-[15vh] md:-mt-[10vh] ">
//       {/* <div className="absolute  min-h-screen g10">

//         </div> */}
//       <div className="absolute flex top-[47%] -left-[25%] transform -translate-x-1/2 -translate-y-1/2">
//         <div className="z-[2] absolute w-[65rem] h-[50rem] bg-gradient-to-r from-[#D569A2] to-[#8F03FF] filter blur-[5rem] rounded-full transform -translate-x-[29vw] -translate-y-[35rem] animate-rotate2"></div>
//       </div>

//       <div className="max-w-4xl mx-auto w-full">
//         <div className="flex flex-col gap-5">
//           <h2 className="text-left font-fraunces text-5xl leading-15 font-thin">
//             <div className="flex items-center justify-start gap-2">
//               <span>Hi, I'm</span>
//               <img
//                 src="https://i.ibb.co.com/KjN8t2q7/bw.jpg"
//                 className="w-14 rounded-full border-border"
//               ></img>
//               <span>Masum Ahmed, </span>
//             </div>
//             Junior MERN Stack Developer & Passionate about Web Development &
//             Problem Solving{" "}
//           </h2>

//           {/* Social Links */}
//           <div className="flex gap-3 flex-wrap items-center justify-start">
//             <SocialLink
//               icon={<FaXTwitter />}
//               name="Twitter"
//               to="/"
//             />
//             <SocialLink
//               icon={<CiLinkedin />}
//               name="LinkedIn"
//               to="/"
//             />
//             <SocialLink
//               icon={<IoLogoGithub />}
//               name="Github"
//               to="/"
//             />
//             <SocialLink
//               icon={<SiCodeforces />}
//               name="Codeforces"
//               to="/"
//             />
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default Home_Hero;
