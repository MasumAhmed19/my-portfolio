import { useState } from "react";
import { CiMenuFries } from "react-icons/ci";
import { Link } from "react-router-dom";
import EncryptButton from "../Buttons/EncryptButton";
import FlipLink from "../Buttons/FlipLink";
import ButtonFlip from "../Buttons/ButtonFlip";

const Header = () => {

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
                    {" "}
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M4 6h16M4 12h8m-8 6h16"
                    />{" "}
                  </svg>
                  
                </div>
                <ul
                  tabIndex={0}
                  className="flex flex-col flex-wrap gap-4 menu-sm dropdown-content menu-horizontal rounded-box z-1 mt-3 w-52 p-2 shadow"
                >
                  <li className="group bg-transparent">
                  <Link>home</Link>
                </li>
                <li>
                  <Link>about</Link>
                </li>
                <li>
                  <Link>project</Link>
                </li>
                <li>
                  <Link>contact</Link>
                </li>
                 
                </ul>
              </div>
              <Link Link to='/' className="font-fraunces text-base">MasumAhmed</Link>
            </div>
            <div className="navbar-center hidden lg:flex">
              <ul className="flex flex-wrap w-fit gap-4 menu-horizontal px-1 font-fraunces textarea-lg">
                <li className="group bg-transparent">
                  <Link>home</Link>
                </li>
                <li>
                  <Link>about</Link>
                </li>
                <li>
                  <Link>project</Link>
                </li>
                <li>
                  <Link>contact</Link>
                </li>

                
              </ul>
            </div>
            <div className="navbar-end">
                {/* <EncryptButton btnText="Download Resume" to='/' /> */}
                {/* <ButtonFlip btnText="Download Resume" to='/' /> */}
                <button className="font-fraunces">Download Resume</button>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
};

export default Header;
