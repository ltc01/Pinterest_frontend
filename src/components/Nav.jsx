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

export const Nav = () => {
  const leftItems = ["Today", "Watch", "Explore"];
  const rightItems = ["About", "Business", "Blog"];

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
                    Pinterest
                  </h1>
                </a>
              </div>
              <div className="flex gap-4 text-sm font-semibold items-center ">
                {leftItems.map((b, i) => (
                  <a href="" key={i} className="hover:bg-slate-200 rounded-lg p-2 ">{b}</a>
                ))}
              </div>
            </div>

            {/* Right-nav items */}
            <div className="flex justify-center items-center gap-5">
              <div className="flex gap-3 text-sm font-semibold ">
                {rightItems.map((b, i) => (
                  <a href="" key={i} className="hover:underline p-2"> {b}</a>
                ))}
              </div>
              
              {/* Login & Signup Buttons */}
              <div className="flex gap-2 text-sm font-semibold">
                <button className={`bg-[#e60023] text-white px-3 rounded-full hover:bg-red-700 ${showLogin ? "z-50" : "" }`}
                  onClick={logIn}>Log in</button>

                <button className={`bg-slate-100 px-3 py-2 rounded-full hover:bg-slate-200 ${showSignup ? "z-50" : "" }`} onClick={signUp}>
                  Sign up
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
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

