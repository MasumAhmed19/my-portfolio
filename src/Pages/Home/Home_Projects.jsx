import { useMotionValue, motion, useSpring, useTransform } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import { FiArrowRight } from "react-icons/fi";
import { isMobile } from "react-device-detect";
import SpringModal from "../../Components/Modals/SpringModal";
import useDeviceType from "../../hooks/useDeviceType";

const LinkProject = ({ heading, imgSrc, subheading, href, tags, onClick }) => {
  const isMobile = useDeviceType();

  const ref = useRef(null);

  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const mouseXSpring = useSpring(x);
  const mouseYSpring = useSpring(y);

  const top = useTransform(mouseYSpring, [-0.5, 0.5], ["40%", "60%"]);
  const left = useTransform(mouseXSpring, [-0.5, 0.5], ["60%", "70%"]);

  const handleMouseMove = (e) => {
    if (!ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    const xPct = (e.clientX - rect.left) / rect.width - 0.5;
    const yPct = (e.clientY - rect.top) / rect.height - 0.5;
    x.set(xPct);
    y.set(yPct);
  };

  return (
    <motion.a
      href={href}
      ref={ref}
      onMouseMove={handleMouseMove}
      onClick={onClick}
      initial="initial"
      whileHover="whileHover"
      className="group relative flex items-center justify-between border-b-2 border-neutral-700 py-4 transition-colors duration-500 hover:border-secondary-dark md:py-8 cursor-pointer"
    >
      <div>
        <motion.span
          variants={{ initial: { x: 0 }, whileHover: { x: -16 } }}
          transition={{
            type: "spring",
            staggerChildren: 0.075,
            delayChildren: 0.25,
          }}
          className="relative z-10 block text-4xl font-fraunces text-gray-600 transition-colors duration-500 group-hover:text-secondary-dark"
        >
          {heading.split("").map((l, i) => (
            <motion.span
              key={i}
              variants={{ initial: { x: 0 }, whileHover: { x: 16 } }}
              transition={{ type: "spring" }}
              className="inline-block"
            >
              {l}
            </motion.span>
          ))}
        </motion.span>
        <span className="relative z-10 mt-2 block text-gray-500 text-sm transition-colors duration-500 group-hover:text-gray-700">
          {subheading}
          <ul className="flex flex-wrap py-2 gap-2">
            {tags.map((el, idx) => (
              <li
                key={idx}
                className="inline-block text-xs bg-purple-100 text-secondary-dark font-mono px-2 mb-2 rounded"
              >
                {el}
              </li>
            ))}
          </ul>
        </span>
        {
            isMobile && 
            <button className="text-xs flex gap-1 bg-secondary-dark text-white px-2 mb-2 rounded cursor-pointer">
              Tap for details{" "}
            </button>

        }
      </div>

      {!isMobile && (
        <>
          <motion.img
            style={{ top, left, translateX: "-50%", translateY: "-50%" }}
            variants={{
              initial: { scale: 0, rotate: "-12.5deg" },
              whileHover: { scale: 1, rotate: "12.5deg" },
            }}
            transition={{ type: "spring" }}
            src={imgSrc}
            className="absolute z-20 h-24 w-32 rounded-lg object-cover md:h-48 md:w-72"
            alt={`Image representing ${heading}`}
          />

          <motion.div
            variants={{
              initial: { x: "25%", opacity: 0 },
              whileHover: { x: "0%", opacity: 1 },
            }}
            transition={{ type: "spring" }}
            className="relative z-10 p-4"
          >
            <div className="text-xs flex items-center justify-center gap-1">
              Detail{" "}
              <FiArrowRight className=" -rotate-45 text-secondary-dark" />
            </div>
          </motion.div>
        </>
      )}
    </motion.a>
  );
};

const Home_Projects = () => {
  const [modalData, setModalData] = useState(null);

  const projects = [
    {
      heading: "TeamLoom",
      subheading:
        "TeamLoom is an employee management system designed to monitor employee workload, manage salary records, and contracts.",
      imgSrc: "https://i.ibb.co.com/FqnTd8N4/Team-Loom-hero.png",
      tags: ["ReactJS", "NodeJS", "MongoDB", "JWT", "Firebase", "Stripe"],
      liveLink: "https://teamloom-a1022.web.app/",
      githubRepo: "https://github.com/MasumAhmed19/TeamLoom-clientside",
    },
    {
      heading: "Career Counselling",
      subheading:
        "This project is a Career Counseling Website developed as part of an assignment. It provides users with personalized career advice and resources.",
      imgSrc: "https://i.ibb.co.com/6JPDCk9q/career-counselling.png",
      tags: ["ReactJS", "Firebase", "Routing", "Tailwind"],
      liveLink: "https://career-counseling-mas.netlify.app/",
      githubRepo: "https://github.com/MasumAhmed19/careercounselling",
    },
    {
      heading: "Suggestify",
      subheading:
        "Suggestify is a dynamic product recommendation platform that helps users discover better alternatives for their favorite products.",
      imgSrc: "https://i.ibb.co.com/ffdNDQ2/suggestify-hero.png",
      tags: ["ReactJS", "NodeJS", "MongoDB", "JWT", "Firebase"],
      liveLink: "https://suggestify-28d19.web.app/",
      githubRepo: "https://github.com/MasumAhmed19/Suggestify_Client",
    },
    {
      heading: "EquiSports",
      subheading:
        "EquiSports is a responsive sports equipment e-commerce platform where customers can explore, review, and manage various sports accessories.",
      imgSrc: "https://i.ibb.co.com/8nkc5QXx/Equi-Sports.png",
      tags: ["ReactJS", "NodeJS", "MongoDB", "Firebase", "Sorting"],
      liveLink: "https://equisports-mas.netlify.app/",
      githubRepo: "https://github.com/MasumAhmed19/EquipSports-clientside",
    },
  ];

  return (
    <section className="p-4 md:p-8">
      <div className="mx-auto max-w-4xl">
        {projects.map((project, index) => (
          <LinkProject
            key={index}
            {...project}
            onClick={() => setModalData(project)}
          />
        ))}
      </div>

      {modalData && (
        <SpringModal
          isOpen={!!modalData}
          setIsOpen={() => setModalData(null)}
          modalData={modalData}
        />
      )}
    </section>
  );
};

export default Home_Projects;
