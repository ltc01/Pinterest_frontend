<<<<<<< HEAD
import { FaSearch } from 'react-icons/fa';
import TextContent from './TextContent.jsx';

=======

import { FaSearch } from 'react-icons/fa';
>>>>>>> origin/main

export const Search = () => {
    // const img = ["1.jpg","2.jpg", "3.jpg", "4.jpg", "5.jpg", "6.jpg", "7.jpg", "8.jpg"]

    return (
<<<<<<< HEAD
        <div className='relative bg-[#fffd93] w-full h-[100vh] flex' id="search">
=======
        <div className='z-0 bg-[#fffd93] w-full h-[40rem] flex' id="search">
>>>>>>> origin/main
            <div className="w-1/2 relative h-full">
                <div className='w-11/12 h-full mx-auto'>
                        <div className='relative'>
                            <img src={`../src/assets/images/4.jpg`} alt={`image1`} className='absolute top-6 right-20 w-40 rounded-[50px] h-fit object-contain'/>
                            <img src={`../src/assets/images/4.jpg`} alt={`image2`} className='w-36 h-fit absolute top-[22rem] right-12 rounded-[50px]  object-contain'/>
                            <img src={`../src/assets/images/4.jpg`} alt={`image3`} className=' w-44 h-fit absolute top-36 left-20 rounded-[50px] object-contain'/>
                            <img src={`../src/assets/images/4.jpg`} alt={`image4`} className='w-[17rem] h-fit absolute top-24 left-52 rounded-[50px] object-contain'/>
                        </div>
                    
                    </div>

                <div className='absolute top-60 left-48'>
                    <button id="searchBtn" className='py-7 px-4 text-2xl font-bold text-[#6e0f3c] rounded-full bg-white'>
                        <FaSearch className='inline mx-2 text-black' />easy chicken dinner
                    </button>
                </div>
            </div>
<<<<<<< HEAD
            <TextContent 
            head="Search for an idea"
            desc="What do you want to try next? Think of something you&apos;re into--like &quot;easy chicken dinner&quot; --and see what you find."
            color="rose-700"
            btn='#fffd93'
            />
            
=======
            <div className="w-1/2 h-full flex justify-center items-center">
                <div className='text-center w-4/5'>
                    <h1 className='font-bold text-[3.6rem] text-[#c31952]'>Search for an idea</h1>
                    <p className="text-xl leading-7 py-3 w-2/3 mx-auto text-[#c31952]">What do you want to try next? Think of something you&apos;re into--like &quot;easy chicken dinner&quot; --and see what you find.</p>
                    <button className='text-yellow-200 bg-[#c31952] font-bold py-3 px-4 text-sm rounded-full m-1'>Explore</button>
                </div>
            </div>
>>>>>>> origin/main
        </div>

    )
}
