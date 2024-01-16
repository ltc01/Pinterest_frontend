import TextContent from './TextContent.jsx';

export const Save = () => {
    return (
        <div id="save" className='h-[40rem] bg-[#c3efef] w-full flex'>
            <TextContent head="Save ideas you like"
                desc="Collect your favorites so you can get back to them later."
                textColor="text-teal-800"
                btnText="text-[#c3efef]"
                btnBg='bg-teal-800'
            />
            <div className="w-1/2  h-full py-8">
                <div className='w-11/12 h-full relative mx-auto'>
                    <div className="absolute top-1 right-2">
                        <img src='https://images.unsplash.com/photo-1615874694520-474822394e73?q=80&w=1480&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' alt={`image1`} className=' w-[13rem] rounded-[2.5rem] h-[14rem] object-cover' />
                        <h1 className="text-white font-bold absolute bottom-10 text-3xl left-3">My Scandinavian bedrooom</h1>
                    </div>

                    <div className="absolute top-60 right-20">
                        <img src='https://images.unsplash.com/photo-1615873968403-89e068629265?q=80&w=1632&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' alt={`image1`} className=' w-[9rem] rounded-[2rem] h-[8rem] object-cover' />
                        <h1 className="text-white font-bold absolute bottom-4 text-xl left-4">The deck of my dreams</h1>
                    </div>

                    <div className="absolute top-[24rem] right-16 w-[10rem] h-[12rem] bg-[url('https://images.unsplash.com/photo-1617806265182-7b3f847f0b75?q=80&w=1480&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')] bg-center bg-cover bg-no-repeat rounded-[3rem] ">
                    <div className="relative w-full rounded-[3rem] h-full bg-black/30">
                            <div className='absolute top-6 left-4'>
                                <h1 className="text-white font-bold text-3xl">Our bathroom</h1>
                            </div>
                        </div>
                    </div>

                    <div className=" absolute top-[23rem] w-[12rem] h-[12rem] left-40 bg-[url('https://images.unsplash.com/photo-1615876234886-fd9a39fda97f?q=80&w=1632&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')] bg-center bg-cover bg-no-repeat rounded-[3rem] ">
                        <div className="relative w-full rounded-[3rem] h-full bg-black/30">
                            <div className='absolute top-6 left-4'>
                                <h1 className="text-white font-bold text-3xl">Serve my drinks in style</h1>
                            </div>
                        </div>
                    </div>
                    <div className="absolute w-[22rem] h-[20rem] bg-[url('https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?q=80&w=1632&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')] bg-center bg-cover bg-no-repeat rounded-[3rem] ">
                    <div className=" w-full rounded-[3rem] h-full bg-black/60">
                            <div className='relative top-16'>
                                <h1 className="text-white font-bold text-6xl text-center">Fern future home vibes</h1>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
