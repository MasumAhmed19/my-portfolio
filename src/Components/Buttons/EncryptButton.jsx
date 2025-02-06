import { useRef, useState } from "react";
import { Link } from "react-router-dom"; // Import Link
import { motion } from "framer-motion";

const CHARS = "!@#$%^&*():{};|,.<>/?";
const CYCLES_PER_LETTER = 2;
const SHUFFLE_TIME = 50;

const EncryptButton = ({ btnText = "Download Resume", to = "/" }) => {
  const intervalRef = useRef(null);
  const [text, setText] = useState(btnText);

  const scramble = () => {
    let pos = 0;
    intervalRef.current = setInterval(() => {
      const scrambled = btnText
        .split("")
        .map((char, index) => {
          if (pos / CYCLES_PER_LETTER > index) return char;
          return CHARS[Math.floor(Math.random() * CHARS.length)];
        })
        .join("");

      setText(scrambled);
      pos++;

      if (pos >= btnText.length * CYCLES_PER_LETTER) stopScramble();
    }, SHUFFLE_TIME);
  };

  const stopScramble = () => {
    clearInterval(intervalRef.current);
    setText(btnText);
  };

  return (
    <Link to={to} >
      <motion.button
        whileHover={{ scale: 1.025 }}
        whileTap={{ scale: 0.975 }}
        onMouseEnter={scramble}
        onMouseLeave={stopScramble}
        className="group relative overflow-hidden rounded-sm text-sm text-white bg-secondary-dark px-4 py-2"
      >
        <div className="relative z-10 flex items-center gap-2 cursor-pointer">
          <span className="">{text}</span>
        </div>
      </motion.button>
    </Link>
  );
};

export default EncryptButton;
