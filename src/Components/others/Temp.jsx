import { Link } from "react-router-dom";

const Temp = () => {
  return (
    <div className=" relative overflow-hidden">
      <div className="absolute flex top-[47%] -left-[25%] transform -translate-x-1/2 -translate-y-1/2">
        <div className="z-[2] absolute w-[65rem] h-[50rem] bg-gradient-to-r from-[#D569A2] to-[#8F03FF] filter blur-[5rem] rounded-full transform -translate-x-[29vw] -translate-y-[35rem] animate-rotate2"></div>
      </div>

      <div className="sw min-h-[100vh] relative z-10">
        {/* Hero container */}
        <div className=""></div>
        <div className="min-h-[80vh] flex flex-col items-center justify-center gap-5">
          <p className="link-highlight text-gray-200">Where Team and Tasks Align</p>
          <h2 className="f2 text-[8vh] md:text-[10vh] leading-[60px] lg:leading-[80px] text-center text-gray-200 md:w-2/3">
            Streamline Workforce Management with Precision
          </h2>
          <p className="text-gray-500 f1 text-xl md:w-2/3 text-center">
            Empower your HR team, track employee productivity, and automate payroll—all in one unified platform.
          </p>
          <Link to="/dashboard" className="btn1">
            Get Started
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Temp;
