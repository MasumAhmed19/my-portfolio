import { AnimatePresence, motion } from "framer-motion";
import { Link } from "react-router-dom";
import { MdArrowOutward } from "react-icons/md";


const SpringModal = ({ isOpen, setIsOpen, modalData }) => {
  if (!modalData) return null;

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={() => setIsOpen(null)}
          className="bg-slate-900/20 backdrop-blur p-8 fixed inset-0 z-50 grid place-items-center overflow-y-scroll cursor-pointer"
        >
          <motion.div
            initial={{ scale: 0, rotate: "12.5deg" }}
            animate={{ scale: 1, rotate: "0deg" }}
            exit={{ scale: 0, rotate: "0deg" }}
            onClick={(e) => e.stopPropagation()}
            className="bg-[#FBFBFB] text-black p-6 rounded-lg w-full max-w-lg shadow-xl cursor-default relative overflow-hidden"
          >
            <div className="relative z-10">
              <h3 className="text-4xl text-secondary-dark text-left mb-2 font-fraunces">
                {modalData?.heading}
              </h3>
              <ul className="flex flex-wrap py-2 gap-2">
                {modalData?.tags.map((el, idx) => (
                  <li
                    key={idx}
                    className="inline-block text-xs bg-secondary-dark text-white font-mono px-2 mb-2 rounded"
                  >
                    {el}
                  </li>
                ))}
              </ul>
              <img
                src={modalData?.imgSrc}
                className="w-full h-auto rounded-lg mb-5 border-4 border-secondary-dark"
                alt={modalData?.heading}
              />
              <p className="text-left mb-6">{modalData?.subheading}</p>
              <div className="flex flex-row gap-4">
                <Link to={modalData?.liveLink} target="_blank"  className="flex items-center text-sm bg-secondary-dark text-white px-2 mb-2 rounded">
                  Live Link <MdArrowOutward />
                </Link>
                <Link to={modalData?.githubRepo} target="_blank" className="flex items-center text-sm bg-secondary-dark text-white px-2 mb-2 rounded">
                 Github Repository <MdArrowOutward />
                </Link>
              </div>
              {/* <div className="flex gap-2">
                <button
                  onClick={() => setIsOpen(null)}
                  className="bg-transparent hover:bg-white/10 transition-colors text-white font-semibold w-full py-2 rounded"
                >
                  Close
                </button>
              </div> */}
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default SpringModal;
