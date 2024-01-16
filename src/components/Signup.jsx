import { FcGoogle } from "react-icons/fc";
import { CiFacebook } from "react-icons/ci";
import { FaEye, FaEyeSlash, FaPinterest } from "react-icons/fa";
import { MdError } from "react-icons/md";
import { useState } from "react";
import PropTypes from 'prop-types';

export const Signup = ({ b }) => {
  const [type, setType] = useState("password");
  const [icon, setIcon] = useState(FaEyeSlash);
  const handleToggle = () => {
    setIcon(type === 'password' ? FaEye : FaEyeSlash);
    setType(type === 'password' ? 'text' : 'password');
  };

  return (

    <div className={`text-center w-[25rem] py-4 bg-white mx-auto mt-7 ${b && "z-50 shadow-xl"} rounded-2xl`}>
      {/* Headings section */}
      <div>
        <FaPinterest className='text-[#e60023] text-3xl mx-auto' />
        <h1 className="text-3xl font-semibold  mb-1">Welcome to Pinterest</h1>
        <p>Find new ideas to try</p>
      </div>
      <div className="text-left px-20 mt-2">
        {/* Login form */}
        <form action="" method="post">
          {/* EMail Field */}
          <div>
            <label htmlFor="email" className="text-xs">
              Email
            </label>
            <input
              type="email"
              name="email"
              id="email"
              className="w-full rounded-2xl border border-zinc-500 p-3 text-sm focus:outline-none focus:border-blue-400 focus:ring-1 focus:ring-blue-200"
              placeholder="Email"
              autoFocus={b}
            />
          </div>
          {/* Password field */}
          <div>
            <label htmlFor="pass" className="text-xs">
              Password
            </label>
            <div className="flex">
              <input
                type={type}
                name="pass"
                id="pass"
                className="w-full border border-zinc-500 text-sm p-3 rounded-2xl focus:ring-1 focus:outline-none focus:border-blue-400 focus:ring-blue-200"
                placeholder="Create a password"
              />
              <span className="-ml-8 mt-3 cursor-pointer" onClick={handleToggle}>
                {icon}
              </span>
            </div>
          </div>
          {/* Birthday Field */}
          <div>
            <label htmlFor="birthDate" className="text-xs">Birthdate</label>
            <div className="group inline relative">
              <MdError className="inline text-base text-slate-600 ml-1 mb-1 hover:cursor-pointer" />
              <div className="w-44 bg-black text-white absolute -top-12 p-2 rounded-md text-[0.65rem] tracking-tight leading-3 text-start hidden group-hover:inline-flex group-hover:z-50">
                <p>To help keep Pinterest safe, we now require your birthdate. Your birthdate also helps us provide more personalized recommendations and relevant ads. We don&apos;t share this information and it won&apos;t be visible on your profile.</p>
              </div>
            </div>
            <input
              type="date"
              name="birthDate"
              id="birthDate"
              className="w-full rounded-2xl border border-zinc-500 p-3 text-sm focus:outline-none focus:border-blue-400 focus:ring-1 focus:ring-blue-200"
              placeholder="dd-----yyyy"
            />
          </div>
          <button
            type="submit"
            className="block bg-red-600 text-white w-full rounded-3xl p-2 mt-3 text-sm font-bold ">
            Continue
          </button>
        </form>
        {/* Other Singing Options */}
        <div>  
          <h2 className="font-bold m-1 text-xs text-center">OR</h2>
          <button className="block bg-blue-600 text-white w-full rounded-3xl p-2 font-bold text-xs ">
            <CiFacebook className="inline text-2xl" /> Continue with Facebook
          </button>
          <button className="block w-full rounded-3xl p-2 font-bold border-2 border-zinc-400 my-2 text-xs">
            Continue as User <FcGoogle className="inline" />
          </button>
        </div>
        {/* Terms & Conditions */}
        <div className="mx-auto text-[0.65rem] text-center">
          <p>By continuing, you agree to Pinterest&apos;s <br />
            <a href="" className="font-bold hover:underline">Terms of Service </a>
            and acknowledge you&apos;ve read our <a href="" className="font-bold hover:underline">Privacy Policy. </a><a href="" className="font-bold hover:underline">Notice at collection.</a><br />
            Not on Pinterest yet?<a href="" className="font-bold hover:underline"> Sign up</a><br />
            Already a  member?<a href="#login" className="font-bold hover:underline">Log in </a>
          </p>
        </div>
      </div>
    </div>


  );
};

Signup.propTypes = {
  b: PropTypes.bool,
}

