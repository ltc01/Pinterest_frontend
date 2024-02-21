import { FcGoogle } from "react-icons/fc";
import { CiFacebook } from "react-icons/ci";
import { FaEye, FaEyeSlash, FaPinterest } from "react-icons/fa";
import { useState } from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

export const Login = ({ b, setshowLogin }) => {
  const [type, setType] = useState("password");
  const [icon, setIcon] = useState(FaEyeSlash);
  const [login, setLogin] = useState(true);
  const handleToggle = () => {
    if (type == "password") {
      setIcon(FaEye);
      setType("text");
    } else {
      setIcon(FaEyeSlash);
      setType("password");
    }
  };
  const handleLogin = (e) => {
    e.preventDefault();
    setshowLogin();
    console.log(b)
  }

  return (
    <>
      {<div
        className={`text-center w-[25rem] mx-auto mt-10 py-6 shadow-2xl relative bg-white rounded-2xl ${b ? "z-50" : ""
          } `}
      >
        <FaPinterest className="text-[#e60023] text-3xl mx-auto" />
        <h1 className="text-3xl font-semibold  mb-4">Welcome to Pinterest</h1>
        <div className="text-left px-20">
          <form>
            <label htmlFor="email" className="text-xs">
              Email

              <input
                type="email"
                name="email"
                autoFocus
                required
                id="email"
                className="w-full rounded-2xl border border-zinc-500 p-3 mb-1 text-sm focus:outline-none focus:ring-1 focus:ring-blue-200 focus:border-blue-400"
                placeholder="Email"
              /></label>

            <label htmlFor="pass" className="text-xs">
              Password

              <p className="flex">
                <input
                  type={type}
                  name="pass"
                  id="pass"
                  required
                  className="w-full border border-zinc-500 text-sm p-3 mb-1 rounded-2xl focus:ring-1 focus:ring-blue-200 focus:border-blue-400 focus:outline-none"
                  placeholder="Password"
                />
                <span className="-ml-8 mt-3 cursor-pointer" onClick={handleToggle}>
                  {icon}
                </span>
              </p>
            </label>

            <a href="#" className="font-semibold text-xs">
              Forgot your password?
            </a>

            <button 
            type="submit" onClick={(e) => handleLogin(e)} 
            className="block bg-red-600 text-white w-full text-center rounded-3xl p-2 my-2 text-sm font-bold ">
                <Link
                  to="/User" className="w-full" >Log in</Link>
              </button>

          </form>
          <h2 className="font-bold m-2 text-xs text-center">OR</h2>
          <button className="block bg-blue-600 text-white w-full rounded-3xl p-2 font-bold text-xs ">
            <CiFacebook className="inline text-2xl" /> Continue with Facebook
          </button>
          <button className="block w-full rounded-3xl p-2 font-bold border-2 border-zinc-400 my-2 text-xs">
            Continue as User <FcGoogle className="inline" />
          </button>
          <div className="mx-auto text-[0.6rem] text-center">
            <p>
              By continuing, you agree to Pinterest&apos;s
              <br />
              <a href="">
                <b>Terms of Service</b>
              </a>
              and acknowledge you&apos;ve read our <br />
              <a href="">
                <b>Privacy Policy</b>
              </a>
              .
              <a href="">
                <b>Notice at collection.</b>
              </a>{" "}
              <br />
              <b>
                <a href="">Not on Pinterest yet? Sign up</a>
              </b>
              <br />
              Are you a business?<a href="">Get started here!</a>
            </p>
          </div>
        </div>
      </div>}
    </>
  );
};
Login.propTypes = {
  b: PropTypes.bool,
};
