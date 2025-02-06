import EncryptButton from "../../Components/Buttons/EncryptButton";
import Temp from "../../Components/others/Temp";
import Home_Hero from "./Home_Hero";
import Home_Projects from "./Home_Projects";
import { MdOutlineArrowRight } from "react-icons/md";


const Home = () => {
  return (
    <div>
      {/* Hero section */}
      <section>
        <Home_Hero />
      </section>

      {/* Project section */}
      <section className="min-h-screen py-[100px] g14">
        <div className="max-w-4xl mx-auto flex items-center justify-between text-md">
          <h2 className="font-medium text-gray-600 uppercase ">Recent Projects</h2>
          <h2 className="flex items-center justify-center grad-text uppercase">My Works</h2>
        </div>
        <Home_Projects />
      </section>
      
    </div>
  );
};

export default Home;
