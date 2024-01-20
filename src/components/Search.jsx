import { FaSearch } from 'react-icons/fa';
import TextContent from './TextContent.jsx';


export const Search = () => {
    // const img = ["1.jpg","2.jpg", "3.jpg", "4.jpg", "5.jpg", "6.jpg", "7.jpg", "8.jpg"]

    return (
        <div className='relative bg-[#fffd93] w-full max-lg:flex-col flex' id="search">
            <div className="w-[50%] max-lg:mx-auto max-sm:w-full">
                <div className='h-[38rem] max-sm:relative max-sm:bottom-8 max-sm:-left-20'>
                    <img src='https://images.unsplash.com/photo-1615557960916-5f4791effe9d?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' alt={`image1`} className='relative top-12 left-96 w-40 h-40 rounded-[40px] object-cover' />
                    <img src='https://images.unsplash.com/photo-1574484284002-952d92456975?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' alt={`image2`} className='w-36 left-[26rem] top-48 relative rounded-[40px]  object-contain' />
                    <img src='https://images.unsplash.com/photo-1608835291093-394b0c943a75?q=80&w=1472&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' alt={`image3`} className=' w-48 h-56 relative left-24 bottom-48 rounded-[40px] object-cover' />
                    <img src='https://images.unsplash.com/photo-1601579112759-761ccbaa8bde?q=80&w=1376&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' alt={`image4`} className=' h-96 relative left-52 bottom-[30rem] rounded-[40px] object-cover' />
                </div>

                <div className='relative max-sm:left-0 bottom-[26rem] left-40'>
                    <button id="searchBtn" className='py-6 px-4 text-2xl font-bold text-[#6e0f3c] rounded-full bg-white'>
                        <FaSearch className='inline mr-3 text-black' />easy chicken dinner
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
