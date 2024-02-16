import TextContent from './TextContent.jsx';

export const Save = () => {
    return (
        <div id="save" className='bg-[#c3efef] flex-col md:flex-row w-full flex'>
            <TextContent head="Save ideas you like"
                desc="Collect your favorites so you can get back to them later."
                textColor="text-teal-800"
                btnText="text-[#c3efef]"
                btnBg='bg-teal-800'
            />
            <div className="md:w-[50%] hidden lg:block w-full py-8">
                <div className='h-[38rem] relative'>
                    <div className="absolute md:top-1 -top-40 right-2">
                        <img src='https://images.unsplash.com/photo-1615874694520-474822394e73?q=80&w=1480&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' alt={`image1`} className=' w-[13rem] rounded-[2.5rem] h-[14rem] object-cover' />
                        <h1 className="text-yellow-300 font-bold absolute top-10 text-3xl left-3">My Scandinavian bedrooom</h1>
                    </div>

                    <div className="absolute md:top-64 top-[26rem] right-10 md:right-20">
                        <img src='https://images.unsplash.com/photo-1615873968403-89e068629265?q=80&w=1632&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' alt={`image1`} className=' w-[9rem] rounded-[2rem] h-[8rem] object-cover' />
                        <h1 className="text-amber-300 font-bold absolute top-4 text-xl left-4">The deck of my dreams</h1>
                    </div>

                    <div className="absolute md:top-[24rem] top-40 right-1 md:right-16 w-[10rem] h-[12rem] bg-[url('https://images.unsplash.com/photo-1617806265182-7b3f847f0b75?q=80&w=1480&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')] bg-center bg-cover bg-no-repeat rounded-[3rem] ">
                    <div className="relative w-full rounded-[3rem] h-full bg-black/60">
                            <div className='absolute bottom-7 left-3'>
                                <h1 className="text-lime-300 font-bold text-3xl">Our bathroom</h1>
                            </div>
                        </div>
                    </div>

                    <div className=" absolute md:top-[23rem] left-3 bottom-36 md:bottom-0 w-[12rem] h-[12rem] md:left-40 bg-[url('https://images.unsplash.com/photo-1615876234886-fd9a39fda97f?q=80&w=1632&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')] bg-center bg-cover bg-no-repeat rounded-[3rem] ">
                        <div className="relative w-full rounded-[3rem] h-full bg-black/60">
                            <div className='absolute top-6 left-4'>
                                <h1 className="text-emerald-300 font-bold text-3xl">Serve my drinks in style</h1>
                            </div>
                        </div>
                    </div>
                    <div className="absolute w-[16rem] h-[16rem] md:w-[22rem] md:h-[20rem] bg-[url('https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?q=80&w=1632&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')] bg-center bg-cover bg-no-repeat rounded-[3rem] ">
                    <div className=" md:w-full  rounded-[3rem] h-full bg-black/60">
                            <div className='relative w-[80%] md:w-full md:top-16 top-12'>
                                <h1 className="text-green-300 font-bold text-3xl md:text-6xl text-center">Fern future home vibes</h1>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
