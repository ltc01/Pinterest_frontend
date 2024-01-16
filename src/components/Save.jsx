import TextContent from './TextContent.jsx';

export const Save = () => {
    return (
        <div id="save" className='h-[40rem] bg-[#c3efef] w-full flex'>
            <TextContent head="Save ideas you like"
            desc="Collect your favorites so you can get back to them later."
            color="teal-800"
            btn="#c3efef"
            />
            {/* <div className="w-1/2 h-full flex justify-center items-center">
                <div className='text-center'>
                    <h1 className='font-bold text-[3.6rem] text-teal-800'></h1>
                    <p className="text-[1.35rem] leading-7 py-3 w-3/5 mx-auto text-teal-800">Collect your favorites so you can get back to them later.</p>
                    <button className='text-teal-100 bg-teal-800 font-bold py-3 px-5 text-sm rounded-full m-1'>Explore</button>
                </div>
            </div> */}
            <div className="w-1/2  h-full py-8">
                <div className='w-11/12 h-full relative mx-auto'>
                        <div className="absolute top-1 right-2">
                            <img src={`../src/assets/images/4.jpg`} alt={`image1`} className=' w-[13rem] rounded-[2.5rem] h-[14rem] object-cover' />
                            <h1 className="text-white font-bold absolute bottom-10 text-3xl left-3">My Scandinavian bedrooom</h1>
                        </div>

                        <div className="absolute top-60 right-20">
                            <img src={`../src/assets/images/4.jpg`} alt={`image1`} className=' w-[9rem] rounded-[2rem] h-[8rem] object-cover' />
                            <h1 className="text-white font-bold absolute bottom-4 text-xl left-4">The deck of my dreams</h1>
                        </div>

                        <div className="absolute top-[24rem] right-16">
                            <img src={`../src/assets/images/4.jpg`} alt={`image2`} className='w-[10rem] h-[12rem]  rounded-[3rem]  object-cover' />
                            <h1 className="text-white font-bold absolute bottom-10 left-3 text-3xl">Our bathroom</h1>
                        </div>

                        <div className="absolute top-[23rem] left-40">
                            <img src={`../src/assets/images/4.jpg`} alt={`image3`} className=' w-[12rem] h-[12rem]  rounded-[2.5rem] object-cover' />
                            <h1 className="text-white font-bold absolute bottom-10 text-3xl left-3">Serve my drinks in style</h1>
                        </div>

                        <div className="absolute">
                            <img src={`../src/assets/images/4.jpg`} alt={`image4`} className='w-[22rem] h-[20rem] rounded-[3rem] bg-black object-cover' />
                            <h1 className="text-white font-bold absolute bottom-24 text-6xl text-center">Fern future home vibes</h1>
                        </div>
                </div>
            </div>
        </div>
    )
}
