<<<<<<< HEAD
import PropTypes from "prop-types";
import { FaPinterest } from "react-icons/fa";
import { Signup } from "./Signup.jsx";
import { Login } from "./Login.jsx";
import { useState } from "react";
=======
import PropTypes from 'prop-types';
import { FaPinterest } from 'react-icons/fa';
import { Content } from './Content';
import { Search } from './Search';
import { Save } from './Save.jsx';
import { Shop } from './Shop.jsx';
import { Bottom } from './Bottom.jsx';
import { Signup } from './Signup.jsx';
import { Login } from './Login.jsx';
import { useState } from 'react';
>>>>>>> origin/main

export const Nav = () => {
  const leftItems = ["Today", "Watch", "Explore"];
  const rightItems = ["About", "Business", "Blog"];
<<<<<<< HEAD
  const [showLogin, setshowLogin] = useState(false);
  const [showSignup, setshowSignup] = useState(false);
  const logIn = () => {
    setshowLogin(!showLogin);
    
  };
  const signUp = () => {
    setshowSignup(!showSignup);
  };

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
          <div className="flex justify-between p-5">
            <div className="flex justify-center items-center gap-4">
              {/* Brand Logo  */}
              <div className="">
                <a href="" className="flex pl-5">
                  <FaPinterest className="text-[#e60023] text-3xl" />
                  <h1 className="text-[#e60023] font-semibold text-xl font-sans tracking-tighter ml-1">
=======

  const [showLogin, setshowLogin] = useState(false);
  const [showSignup, setshowSignup] = useState(false);

  const logIn = () => {
    if (showLogin == false) {
      setshowLogin(true);
      setshowSignup(false);
    } else {
      setshowLogin(false);
    }
  }
  const signUp = () => {
    if (showSignup == false) {
      setshowSignup(true);
      setshowLogin(false);
    } else {
      setshowSignup(false);
    }
  }

  return (
    <>
      <div id="top">
        {/* Navigation bar  */}
        <div className="fixed z-50 bg-white top-0 left-0 right-0 w-full h-fit" >

          {/* Login & Signup toogle */}
          {showLogin && <div className=' w-full  h-screen bg-black/40 z-40  fixed' ><Login b={showLogin} /></div>}
          {showSignup && <div className=' w-full h-screen bg-black/40 z-40  fixed' ><Signup b={showSignup} /></div>}

          {/* Navigation items */}
          <div className="flex justify-between pr-4 h-[5rem] ">
            
            {/* Left-nav items */}
            <div className="flex justify-center items-center gap-4">
              <div className=''>
                <a href="" className="flex">
                  <FaPinterest className='text-[#e60023] text-3xl' />
                  <h1 className="text-[#e60023] font-semibold text-lg font-sans tracking-tighter ml-1">
>>>>>>> origin/main
                    Pinterest
                  </h1>
                </a>
              </div>
<<<<<<< HEAD

              {/* Left-nav items */}
              <div className="flex gap-4 text-md font-semibold items-end  ">
                {leftItems.map((b, i) => (
                  <a
                    href=""
                    key={i}
                    className="hover:bg-slate-200 rounded-lg p-2 "
                  >
                    {b}
                  </a>
=======
              <div className="flex gap-4 text-sm font-semibold items-center ">
                {leftItems.map((b, i) => (
                  <a href="" key={i} className="hover:bg-slate-200 rounded-lg p-2 ">{b}</a>
>>>>>>> origin/main
                ))}
              </div>
            </div>

            {/* Right-nav items */}
            <div className="flex justify-center items-center gap-5">
<<<<<<< HEAD
              <div className="flex gap-3 text-md font-semibold ">
                {rightItems.map((b, i) => (
                  <a href="" key={i} className="hover:underline p-2">
                    {" "}
                    {b}
                  </a>
=======
              <div className="flex gap-3 text-sm font-semibold ">
                {rightItems.map((b, i) => (
                  <a href="" key={i} className="hover:underline p-2"> {b}</a>
>>>>>>> origin/main
                ))}
              </div>
              
              {/* Login & Signup Buttons */}
<<<<<<< HEAD
              <div className="flex gap-2 text-md font-semibold">
                <button
                  className={`bg-[#e60023] text-white px-3 rounded-full hover:bg-red-700 ${showLogin ? "z-50" : ""
                    }`}
                  onClick={logIn}
                >
                  Log in
                </button>

                <button
                  className={`bg-slate-100 px-3 py-2 rounded-full hover:bg-slate-200 ${showSignup ? "z-50" : ""
                    }`}
                  onClick={signUp}
                >
=======
              <div className="flex gap-2 text-sm font-semibold">
                <button className={`bg-[#e60023] text-white px-3 rounded-full hover:bg-red-700 ${showLogin ? "z-50" : "" }`}
                  onClick={logIn}>Log in</button>

                <button className={`bg-slate-100 px-3 py-2 rounded-full hover:bg-slate-200 ${showSignup ? "z-50" : "" }`} onClick={signUp}>
>>>>>>> origin/main
                  Sign up
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
<<<<<<< HEAD
  );
};
Nav.propTypes = {
  setLogin: PropTypes.array,
  a: PropTypes.array,
};
=======
      <Content />
      <Search />
      <Save />
      <Shop />
      <Bottom />
    </>
  );
}
Nav.propTypes = {
  setLogin: PropTypes.array,
  a: PropTypes.array,
}

>>>>>>> origin/main
