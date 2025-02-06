import PropTypes from "prop-types";
import { Link } from "react-router-dom";

const ButtonFlip = ({ btnText, to='/' }) => {
  return (
    <>
      <button className="group relative px-1 text-white bg-secondary-dark cursor-pointer">
        <Link to={to} className="relative inline-flex overflow-hidden font-fraunces">
          <div className="translate-y-0 transition  duration-200 group-hover:-translate-y-[150%]">
            {btnText || "Contact us"}
          </div>
          <div className="absolute translate-y-[120%] transition duration-200 group-hover:translate-y-0">
            {btnText || "Contact us"}
          </div>
        </Link>
      </button>
    </>
  );
};

ButtonFlip.propTypes = {
  children: PropTypes.string,
  btnText:PropTypes.string,
  to:PropTypes.string,
};

export default ButtonFlip;
