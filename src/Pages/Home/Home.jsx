import EncryptButton from "../../Components/Buttons/EncryptButton";
import SectionTitle from "../../Components/others/SectionTitle";
import Temp from "../../Components/others/Temp";
import AboutSection from "../../Components/Sections/AboutSection";
import ContactSection from "../../Components/Sections/ContactSection";
import Home_Hero from "./Home_Hero";
import Home_Projects from "./Home_Projects";
import { MdOutlineArrowRight } from "react-icons/md";


const Home = () => {
  return (
    <div>
      {/* Hero section */}
      <section id='hero-section'>
        <Home_Hero />
      </section>

      {/* Project section */}
      <section id='project-section' className="min-h-screen py-[100px] g14">
        <SectionTitle left='Recent Projects' right='My Works' />
        <Home_Projects />
      </section>

      {/* About section */}
      <section id='about-section' className="py-[10vh] p-5  bg-[#FBFBFB] before:absolute before:top-0 before:left-0 before:w-full before:h-full before:bg-[url('https://www.transparenttextures.com/patterns/asfalt-light.png')] before:opacity-10 before:pointer-events-none">
        <SectionTitle left='Who am I' right='About' />
        <AboutSection />
      </section>


      {/* COntact section */}
      <section id='contact-section' className="min-h-screen py-[100px] g14">
        <SectionTitle left="Let's Connect" right='Contact' />
        <ContactSection />

      </section>
      
    </div>
  );
};

export default Home;
