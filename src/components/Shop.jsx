<<<<<<< HEAD
import TextContent from './TextContent';

=======
>>>>>>> origin/main
export const Shop = () => {
  return (
    <div id="shop" className='z-0 bg-[#ffe2eb] w-full h-[40rem] flex'>
    <div className="w-1/2 h-full">
        <div className='w-full h-full hover:border hover:border-blue-500'>
            <img src={`../src/assets/images/4.jpg`} alt={`image1`} className=' w-full h-full object-cover'/>
<<<<<<< HEAD
        </div>
    </div>
    <TextContent 
    head="See it, make it, try it, do it"
    desc="The best part of Pinterest is discovering new things and ideas from people around the world."
    color="red-500"
    btn="#ffe2eb"
    />
=======

            
        </div>
    </div>
    <div className="w-1/2 h-full flex justify-center items-center">
        <div className='text-center w-3/5'>
            <h1 className='font-bold text-[3.6rem] leading-[4rem] text-[#c32f00]'>See it, make it, try it, do it</h1>
            <p className="text-[1.4rem] leading-7 py-4 text-[#c32f00]">The best part of Pinterest is discovering new things and ideas from people around the world.</p>
            <button className='text-[#ffe2eb] bg-[#c32f00] font-bold py-3 px-4 text-sm rounded-full m-1'>Explore</button>
        </div>
    </div>
>>>>>>> origin/main
</div>
  )
}
