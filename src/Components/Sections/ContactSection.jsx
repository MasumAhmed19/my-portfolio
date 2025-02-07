import SocialLink from "../others/SocialLink";
import { FaXTwitter } from "react-icons/fa6";
import { AiOutlineLinkedin } from "react-icons/ai";
import { IoLogoGithub } from "react-icons/io";
import { SiCodeforces } from "react-icons/si";

const ContactSection = () => {
  return (
    <section className="py-[50px]">
      <div className="max-w-4xl mx-auto text-left">
        <p className="text-gray-500 text-sm">
          Contact me for any remote job or internship opportunities. I'd love to
          collaborate and contribute!
        </p>
      </div>

      {/* Social Links */}
      <div className="max-w-4xl mx-auto flex gap-3 flex-wrap items-center justify-start my-5">
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

      {/* Contact Form */}
      <form
        className="space-y-4 max-w-4xl mx-auto mt-8"
        onSubmit={(e) => {
          e.preventDefault();
          e.target.reset();
        }}
      >
        <div className="form-control">
          <input
            type="text"
            name="name"
            placeholder="Your Name"
            className="w-full px-4 py-2 border border-border rounded-md focus:outline-none focus:ring-2 focus:ring-secondary-light  placeholder:text-sm"
            required
          />
        </div>

        <div className="form-control">
          <input
            type="email"
            name="email"
            placeholder="Email"
            className="w-full px-4 py-2 border border-border rounded-md focus:outline-none focus:ring-2 focus:ring-secondary-light  placeholder:text-sm"
            required
          />
        </div>

        <div className="form-control">
          <textarea
            name="message"
            placeholder="Your Message"
            rows="5"
            className="w-full px-4 py-2 border border-border rounded-md focus:outline-none focus:ring-2 focus:ring-secondary-light  placeholder:text-sm"
            required
          />
        </div>

        {/* Submit Button */}
        <div className="flex items-center justify-center">
          <button
            
            className="font-fraunces bg-secondary-dark text-white px-5 py-2 rounded-sm cursor-pointer hover:bg-secondary-light transition-all"
          >
            Send Message
          </button>
        </div>
      </form>
    </section>
  );
};

export default ContactSection;
