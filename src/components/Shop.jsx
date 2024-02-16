import TextContent from './TextContent';

export const Shop = () => {
  return (
    <div id="shop"  className='z-0 bg-[#ffe2eb] w-full flex-col lg:flex-row flex'>
    <div className="md:w-[50%] hidden lg:block h-[38rem] w-full">
        <div className='w-full h-full'>
            <img src='https://images.unsplash.com/photo-1541101767792-f9b2b1c4f127?q=80&w=1370&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' alt={`image1`} className=' w-full h-full object-cover max-sm:object-top'/>
        </div>
    </div>
    <TextContent 
    head="See it, make it, try it, do it"
    desc="The best part of Pinterest is discovering new things and ideas from people around the world."
    textColor="text-red-700" 
    btnText='text-[#ffe2eb]'
    btnBg="bg-red-700"
    />
</div>
  )
}
