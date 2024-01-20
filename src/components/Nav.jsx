import PropTypes from "prop-types";
import { FaPinterest } from "react-icons/fa";
import { Signup } from "./Signup.jsx";
import { Login } from "./Login.jsx";
import { useState } from "react";


export const Nav = () => {
  const leftItems = ["Today", "Watch", "Explore"];
  const rightItems = ["About", "Business", "Blog"];
  const [showLogin, setshowLogin] = useState(false);
  const [showSignup, setshowSignup] = useState(false);
  const logIn = () => setshowLogin((login) => !login );
  const signUp = () => setshowSignup((signup) => !signup );

  return (
      <div id="top" className="h-[15vh] bg-white relative">
        
        {/* Navigation bar  */}
        <div className="fixed top-0 z-40 bg-white w-full h-fit">
           {/* Login & Signup toogle */}
         {showLogin && (
            <div className=" w-full h-screen fixed bg-black/40 z-50">
              <Login b={showLogin} />
            </div>
          )}
          {showSignup && (
            <div className=" w-full h-screen bg-black/40 z-40  fixed">
              <Signup b={showSignup} />
            </div>
          )}
         
          {/* Navigation items */}
          <div className="flex justify-between p-5 max-sm:px-0">
            <div className="flex justify-center items-center">
              {/* Brand Logo  */}
              <div className="pr-4">
                <a href="" className="flex pl-5">
                  <FaPinterest className="text-[#e60023] text-3xl" />
                  <h1 className="text-[#e60023] font-semibold text-xl font-sans tracking-tighter ml-1">
                    Pinterest
                  </h1>
                </a>
              </div>

              {/* Left-nav items */}
              <div className="flex max-sm:hidden text-md font-semibold items-end  ">
                {leftItems.map((b, i) => (
                  <a
                    href=""
                    key={i}
                    className="hover:bg-slate-200 rounded-lg p-2 px-4 "
                  >
                    {b}
                  </a>
                ))}
              </div>
            </div>

            {/* Right-nav items */}
            <div className="flex justify-center max-sm:hidden items-center">
              <div className="flex pr-4 text-md font-semibold ">
                {rightItems.map((b, i) => (
                  <a href="" key={i} className="hover:underline px-4 p-2">{b}
                  </a>
                ))}
              </div>
              
              {/* Login & Signup Buttons */}
              <div className="flex text-md font-semibold">
                <button
                  className={`bg-[#e60023] text-white px-3 mr-3 rounded-full hover:bg-red-700 ${showLogin ? "z-50" : ""}`}
                  onClick={logIn}>
                  Log in
                </button>

                <button
                  className={`bg-slate-100 px-3 py-2 rounded-full hover:bg-slate-200 ${showSignup ? "z-50" : ""}`}
                  onClick={signUp}>
                  Sign up
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
  );
};
Nav.propTypes = {
  setLogin: PropTypes.array,
  a: PropTypes.array,
};
