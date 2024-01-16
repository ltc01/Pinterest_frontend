import { FaSearch } from 'react-icons/fa';
import TextContent from './TextContent.jsx';


export const Search = () => {
    // const img = ["1.jpg","2.jpg", "3.jpg", "4.jpg", "5.jpg", "6.jpg", "7.jpg", "8.jpg"]

    return (
        <div className='relative bg-[#fffd93] w-full h-[100vh] flex' id="search">
            <div className="w-1/2 relative h-full">
                <div className='w-11/12 h-full mx-auto'>
                        <div className='relative'>
                            <img src='https://images.unsplash.com/photo-1615557960916-5f4791effe9d?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' alt={`image1`} className='absolute top-6 right-20 w-40 rounded-[50px] h-fit object-contain'/>
                            <img src='https://images.unsplash.com/photo-1574484284002-952d92456975?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' alt={`image2`} className='w-36 h-fit absolute top-[22rem] right-12 rounded-[50px]  object-contain'/>
                            <img src='https://images.unsplash.com/photo-1608835291093-394b0c943a75?q=80&w=1472&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' alt={`image3`} className=' w-44 h-fit absolute top-36 left-20 rounded-[50px] object-contain'/>
                            <img src='https://images.unsplash.com/photo-1601579112759-761ccbaa8bde?q=80&w=1376&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' alt={`image4`} className='w-[17rem] h-fit absolute top-24 left-52 rounded-[50px] object-contain'/>
                        </div>
                    
                    </div>

                <div className='absolute top-60 left-48'>
                    <button id="searchBtn" className='py-7 px-4 text-2xl font-bold text-[#6e0f3c] rounded-full bg-white'>
                        <FaSearch className='inline mx-2 text-black' />easy chicken dinner
                    </button>
                </div>
            </div>
            <TextContent 
            head="Search for an idea" 
            desc="What do you want to try next? Think of something you&apos;re into--like &quot;easy chicken dinner&quot; --and see what you find." 
            textColor="text-rose-800" 
            btnText='text-[#fffd93]'
            btnBg="bg-rose-800"
            />
            
        </div>

    )
}
