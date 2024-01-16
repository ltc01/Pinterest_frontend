import TextContent from './TextContent';

export const Shop = () => {
  return (
    <div id="shop" className='z-0 bg-[#ffe2eb] w-full h-[40rem] flex'>
    <div className="w-1/2 h-full">
        <div className='w-full h-full hover:border hover:border-blue-500'>
            <img src={`../src/assets/images/4.jpg`} alt={`image1`} className=' w-full h-full object-cover'/>
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
