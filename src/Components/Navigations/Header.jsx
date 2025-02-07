import useLenis from "../../hooks/useLenis";

const Header = () => {
  // for smooth scroll
  useLenis();

  return (
    <div className="sticky top-0 mx-3 z-[1000]">
      <div className="relative">
        <div className="max-w-4xl mx-auto py-3">
          <div className="navbar backdrop-blur-xl bg-[#EEC9EA70] rounded-xl px-5">
            <div className="navbar-start">
              <div className="dropdown">
                <div
                  tabIndex={0}
                  role="button"
                  className="lg:hidden mr-3"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M4 6h16M4 12h8m-8 6h16"
                    />
                  </svg>
                </div>
                <ul
                  tabIndex={0}
                  className="flex flex-col bg-[#F6E5F4] flex-wrap gap-4 menu-sm dropdown-content menu-horizontal rounded-box z-1 mt-3 w-52 p-2 shadow font-fraunces "
                >
                  
                    <li className="group bg-transparent text-lg">
                      <a href="#hero-section" >home</a>
                    </li>
                    <li>
                      <a href="#project-section">project</a>
                    </li>
                    <li>
                      <a href="#about-section">about</a>
                    </li>
                    <li>
                      <a href="#contact-section">contact</a>
                    </li>
                  
                </ul>
              </div>
              <a
                href="/"
                className="font-fraunces text-lg text-gray-800 font-semibold"
              >
                mas-um
              </a>
            </div>
            <div className="navbar-center hidden lg:flex">
              <ul className="flex flex-wrap w-fit gap-4 menu-horizontal px-1 font-fraunces textarea-lg">
                <li className="group bg-transparent">
                  <a href="#hero-section">home</a>
                </li>
                <li>
                  <a href="#project-section">project</a>
                </li>
                <li>
                  <a href="#about-section">about</a>
                </li>
                <li>
                  <a href="#contact-section">contact</a>
                </li>
              </ul>
            </div>
            <div className="navbar-end">
              <button className="font-fraunces bg-secondary-dark text-white px-1 rounded-sm cursor-pointer">download resume</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
