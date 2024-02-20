import PropTypes from "prop-types";
import { FaPinterest } from "react-icons/fa";
import { Signup } from "./Signup.jsx";
import { Login } from "./Login.jsx";
import { useState } from "react";
import { CiMenuFries } from "react-icons/ci";
import { IoClose } from "react-icons/io5";
import { Link } from "react-router-dom";

export const Nav = () => {
  const leftItems = ["Today", "Watch", "Explore"];
  const rightItems = ["About", "Business", "Blog"];
  const [showLogin, setshowLogin] = useState(false);
  const [showSignup, setshowSignup] = useState(false);
  const [isMenuopen, setIsMenuopen] = useState(false);
  const [showNav, setShowNav] = useState(false);
  const logIn = () => setshowLogin((login) => !login);
  const signUp = () => setshowSignup((signup) => !signup);

  return (
    <header id="top" className="h-[15vh] bg-white relative">
      {/* Navigation bar  */}
      <nav className="fixed top-0 z-40 bg-white w-full h-fit">
        {/* Login & Signup toogle */}
        {showLogin && (
          <div
            className=" w-full h-screen fixed bg-black/40 z-40"
          >
            <Login b={showLogin} />
          </div>
        )}
        {showSignup && (
          <div
            className=" w-full h-screen bg-black/40 z-40 fixed"
          >
            <Signup b={showSignup} />
          </div>
        )}

        {/* Navigation items */}
        <div className="flex justify-between p-5 max-sm:px-0">
          <div className="flex justify-center items-center">
            {/* Brand Logo  */}
            <div className="visible pr-4">
              <Link to={"/"} className="flex pl-5">
                <FaPinterest className="text-[#e60023] text-3xl" />
                <h1 className="text-[#e60023] font-semibold text-xl font-sans tracking-tighter ml-1">
                  Pinterest
                </h1>
              </Link>
            </div>

            {/* Left-nav items */}
            <div className="lg:flex hidden text-md font-semibold items-end  ">
              {leftItems.map((b, i) => (
                <Link
                  to={`/${b.toLowerCase()}/`}
                  key={i}
                  className="hover:bg-slate-200 rounded-lg p-2 px-4 "
                >
                  {b}
                </Link>
              ))}
            </div>
          </div>

          {/* Right-nav items */}
          <div className="lg:flex justify-center hidden items-center">
            <div className="flex pr-4 text-md font-semibold ">
              {rightItems.map((b, i) => (
                <Link
                  to={`/${b.toLowerCase()}`}
                  key={i}
                  className="hover:underline px-4 p-2"
                >
                  {b}
                </Link>
              ))}
            </div>

            {/* Login & Signup Buttons */}
            <div className="lg:flex hidden text-md font-semibold">
              <button
                className={`bg-[#e60023] text-white px-3 mr-3 rounded-full hover:bg-red-700 ${
                  showLogin ? "z-50" : ""
                }`}
                onClick={logIn}
              >
                Log in
              </button>

              <button
                className={`bg-slate-100 px-3 py-2 rounded-full hover:bg-slate-200 ${
                  showSignup ? "z-50" : ""
                }`}
                onClick={signUp}
              >
                Sign up
              </button>
            </div>
          </div>

          {/* mobile device menu */}
          <div className="lg:hidden block">
            <button onClick={() => setShowNav(!showNav)}>
              {showNav ? (
                <IoClose className="text-3xl mr-6 mt-3" />
              ) : (
                <CiMenuFries className="text-3xl mr-6 mt-3" />
              )}
            </button>
            {showNav && (
              <div className="absolute bg-black/90 text-white right-6 w-1/2 md:w-1/3 rounded-3xl p-8 font-medium">
                <ul>
                  {leftItems.map((b, i) => (
                    <li
                      onClick={() => setShowNav(!showNav)}
                      key={i}
                      className="hover:bg-slate-300 hover:text-black rounded-lg p-3"
                    >
                      <Link to={`/${b.toLowerCase()}`}>{b}</Link>
                    </li>
                  ))}
                  <hr className="border-gray-400 my-3" />
                  {rightItems.map((b, i) => (
                    <li
                      onClick={() => setShowNav(!showNav)}
                      key={i}
                      className="hover:bg-slate-300 hover:text-black rounded-lg p-3"
                    >
                      <Link to={`/${b.toLowerCase()}`}>{b}</Link>
                    </li>
                  ))}
                </ul>
                <hr className="border-gray-400 my-4" />
                <button
                  className={`bg-[#e60023] text-white w-full py-2 block my-6 rounded-full hover:bg-red-700 ${
                    showLogin ? "z-50" : ""
                  }`}
                  onClick={logIn}
                >
                  Log in
                </button>
                <button
                  className={`bg-slate-100 text-black w-full px-10 py-2 rounded-full hover:bg-slate-200 ${
                    showSignup ? "z-50" : ""
                  }`}
                  onClick={signUp}
                >
                  Sign up
                </button>
              </div>
            )}
          </div>
        </div>
      </nav>
    </header>
  );
};
Nav.propTypes = {
  setLogin: PropTypes.array,
  a: PropTypes.array,
};
