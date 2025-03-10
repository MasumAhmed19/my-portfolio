import { FaXTwitter } from "react-icons/fa6";
import SocialLink from "../others/SocialLink";
import { AiOutlineLinkedin } from "react-icons/ai";
import { IoLogoGithub } from "react-icons/io";
import { SiCodeforces } from "react-icons/si";

const Footer = () => {
  return (
    <section className=" py-[40px] bg-base-200 g12 ">
      <div className="max-w-4xl mx-auto py-3 flex flex-col items-center justify-center">
        <footer className="footer sm:footer-horizontal footer-center flex flex-col  text-base-content rounded p-10">
          <nav className="grid grid-flow-col gap-4">
            <p>
              Design is not just what it looks like and feels like. Design is
              how it works
            </p>
          </nav>

          <nav>
            <div className="flex gap-3 flex-wrap text-gray-600 items-center justify-start">
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
          </nav>

          <aside className="w-ful">
            <div className="text-gray-500 flex gap-2 items-center justify-between whitespace-nowrap">
              <p>
                Copyright © {new Date().getFullYear()} - All right reserved by Masum Ahmed
              </p>
              
            </div>
          </aside>
        </footer>
      </div>
    </section>
  );
};

export default Footer;
