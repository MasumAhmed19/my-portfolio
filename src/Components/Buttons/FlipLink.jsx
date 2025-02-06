import { motion } from "framer-motion";
import { Link } from "react-router-dom"; 

const DURATION = 0.15;
const STAGGER = 0.025;

const FlipLink = ({ label='contact', txtSz = "text-base", to = "#", txtwt='font-normal', txtColor='text-black' }) => {
  return (
    <Link to={to} className="group">
      <motion.div
        initial="initial"
        whileHover="hovered"
        className={`relative block overflow-hidden group-hover:bg-primary group-hover:text-white whitespace-nowrap uppercase ${txtSz} ${txtwt} ${txtColor}`}
        style={{ lineHeight: 0.75 }}
      >
        <div>
          {label.split("").map((l, i) => (
            <motion.span
              key={i}
              variants={{
                initial: { y: 0 },
                hovered: { y: "-100%" },
              }}
              transition={{
                duration: DURATION,
                ease: "easeInOut",
                delay: STAGGER * i,
              }}
              className="inline-block"
            >
              {l}
            </motion.span>
          ))}
        </div>
        <div className="absolute inset-0  group-hover:bg-primary hover:text-white">
          {label.split("").map((l, i) => (
            <motion.span
              key={i}
              variants={{
                initial: { y: "100%" },
                hovered: { y: 0 },
              }}
              transition={{
                duration: DURATION,
                ease: "easeInOut",
                delay: STAGGER * i,
              }}
              className="inline-block"
            >
              {l}
            </motion.span>
          ))}
        </div>
      </motion.div>
    </Link>
  );
};

export default FlipLink;
