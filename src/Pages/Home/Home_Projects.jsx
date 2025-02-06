import { useMotionValue, motion, useSpring, useTransform } from "framer-motion";
import { useRef } from "react";
import { FiArrowRight } from "react-icons/fi";

const Link = ({ heading, imgSrc, subheading, href, tags }) => {
  const ref = useRef(null);

  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const mouseXSpring = useSpring(x);
  const mouseYSpring = useSpring(y);

  const top = useTransform(mouseYSpring, [0.5, -0.5], ["40%", "60%"]);
  const left = useTransform(mouseXSpring, [0.5, -0.5], ["60%", "70%"]);

  const handleMouseMove = (e) => {
    const rect = ref.current.getBoundingClientRect();

    const width = rect.width;
    const height = rect.height;

    const mouseX = e.clientX - rect.left;
    const mouseY = e.clientY - rect.top;

    const xPct = mouseX / width - 0.5;
    const yPct = mouseY / height - 0.5;

    x.set(xPct);
    y.set(yPct);
  };

  return (
    <motion.a
      href={href}
      ref={ref}
      onMouseMove={handleMouseMove}
      initial="initial"
      whileHover="whileHover"
      className="group relative flex items-center justify-between  border-b-2 border-neutral-700 py-4 transition-colors duration-500 hover:border-secondary-dark  md:py-8"
    >
      <div>
        <motion.span
          variants={{
            initial: { x: 0 },
            whileHover: { x: -16 },
          }}
          transition={{
            type: "spring",
            staggerChildren: 0.075,
            delayChildren: 0.25,
          }}
          className="relative z-10 block text-4xl font-fraunces text-gray-600  transition-colors duration-500 group-hover:text-secondary-dark "
        >
          {heading.split("").map((l, i) => (
            <motion.span
              variants={{
                initial: { x: 0 },
                whileHover: { x: 16 },
              }}
              transition={{ type: "spring" }}
              className="inline-block "
              key={i}
            >
              {l}
            </motion.span>
          ))}
        </motion.span>
        <span className="relative z-10 mt-2 block text-gray-500 text-sm transition-colors duration-500 group-hover:text-gray-700">
          {subheading}
          <div className="flex">
            {tags.map((el, idx) => (
              <li
                key={idx}
                className="inline-block text-sm bg-secondary-dark  text-white font-mono px-1  m-1"
              >
                {el}
              </li>
            ))}
          </div>
        </span>
      </div>

      <motion.img
        style={{
          top,
          left,
          translateX: "-50%",
          translateY: "-50%",
        }}
        variants={{
          initial: { scale: 0, rotate: "-12.5deg" },
          whileHover: { scale: 1, rotate: "12.5deg" },
        }}
        transition={{ type: "spring" }}
        src={imgSrc}
        className="absolute z-20 h-24 w-32 rounded-lg object-cover md:h-48 md:w-72"
        alt={`Image representing a link for ${heading}`}
      />

      <motion.div
        variants={{
          initial: {
            x: "25%",
            opacity: 0,
          },
          whileHover: {
            x: "0%",
            opacity: 1,
          },
        }}
        transition={{ type: "spring" }}
        className="relative z-10 p-4"
      >
        <FiArrowRight className="text-2xl text-secondary-dark" />
      </motion.div>
    </motion.a>
  );
};

const Home_Projects = () => {
  return (
    <section className=" p-4 md:p-8">
      <div className="mx-auto max-w-4xl">
        <Link
          heading="TeamLoom"
          subheading="TeamLoom is an employee management system designed to monitor employee workload, manage salary records, and contracts. It provides a platform for employees to update their workflow and allows HR executives to monitor and manage employee data."
          imgSrc="https://i.ibb.co.com/FqnTd8N4/Team-Loom-hero.png"
          href="#"
          tags={["ReactJS", "NodeJS", "MongoDB", "JWT", "Firebase", "Stripe"]}
        />
        <Link
          heading="Career Counselling"
          subheading="This project is a Career Counseling Website developed as part of an assignment. It provides users with personalized career advice and resources to help them make informed decisions about their professional future. The platform features user authentication, service listings, dynamic routing, and protected routes for private pages."
          imgSrc="https://i.ibb.co.com/6JPDCk9q/career-counselling.png"
          tags={["ReactJS", "Firebase", "Routing", "Tailwind"]}
          href="#"
        />

        <Link
          heading="Suggestify"
          subheading="Suggestify is a dynamic product recommendation platform that helps users discover better alternatives for their favorite products. Users can create, update, or delete product queries while exploring detailed suggestions from others. The platform enables users to add and delete recommendations for specific products and engage in discussions through a commenting system"
          imgSrc="https://i.ibb.co.com/ffdNDQ2/suggestify-hero.png"
          tags={["ReactJS", "NodeJS", "MongoDB", "JWT", "Firebase"]}
          href="#"
        />

        <Link
          heading="EquiSports"
          subheading="EquiSports is a responsive sports equipment e-commerce platform where customers can explore, review, and manage various sports accessories, gear, and apparel across multiple sports disciplines. The platform ensures a seamless shopping experience with user authentication, product management, and dynamic product displays."
          imgSrc="https://i.ibb.co.com/8nkc5QXx/Equi-Sports.png"
          tags={["ReactJS", "NodeJS", "MongoDB", "Firebase", "Sorting"]}
          href="#"
        />
      </div>
    </section>
  );
};

export default Home_Projects;
