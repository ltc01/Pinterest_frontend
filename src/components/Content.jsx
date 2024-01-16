import { FaAngleDown } from "react-icons/fa";
import 'animate.css';


export const Content = () => {

    const img = ["https://images.unsplash.com/photo-1555939594-58d7cb561ad1?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    "https://images.unsplash.com/photo-1540189549336-e6e99c3679fe?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", 
     "https://images.unsplash.com/photo-1540189549336-e6e99c3679fe?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", 
     "https://images.unsplash.com/photo-1603486037214-4fec4016a9bf?q=80&w=1527&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", 
     "https://images.unsplash.com/photo-1486589089611-394385ff1a68?q=80&w=1412&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"];
    const text = ["DIY idea", "chai time snacks idea", "home decor idea", "outfit idea"];
    const color = ["red", "blue", "orange", "green"];

    return (
        <div className="w-full h-fit">
            <div className="h-[100vh] mt-10 overflow-hidden ">
                <h1 className="text-6xl text-center font-semibold">Get your next</h1>
                <div className="flex justify-center  gap-4 mt-4">
                    {[0, 40, 60, 96, 60, 40, 0].map((marginTop, index) => (
                        <div className={`flex w-64 gap-4  flex-col mt-${marginTop}`} key={index}>
                            {img.map((i, index) => (
                                <div className={`w-56 h-80  overflow-hidden rounded-2xl  `} key={index}>
                                    <img src={i} alt={`images`} className={`w-full h-full object-cover`} />
                                </div>
                            ))}
                        </div>
                    ))}
                    {/* <div className={`flex w-64 gap-4  flex-col`}>
                        {img.map((i, index) => (
                            <div className={`w-56 h-80  overflow-hidden rounded-2xl  `} key={index}>
                                <img src={`../assets/images/${i}`} alt={`${i}img`} className={`w-full h-full object-cover`} />
                            </div>
                        ))}
                    </div>
                    <div className={`flex gap-4 flex-col mt-40`}>
                        {img.map((i, index) => (
                            <div className={`w-56 h-80 overflow-hidden rounded-2xl  `} key={index}>
                                <img src={`../src/assets/images/${i}`} alt={`${i}img`} className={`w-full h-full object-cover`} />
                            </div>
                        ))}
                    </div>
                    <div className={`flex gap-4 flex-col mt-60`}>
                        {img.map((i, index) => (
                            <div className={`w-56 h-80 overflow-hidden rounded-2xl  `} key={index}>
                                <img src={`../src/assets/images/${i}`} alt={`${i}img`} className={`w-full h-full object-cover`} />
                            </div>
                        ))}
                    </div>
                    <div className='flex gap-4 flex-col mt-96'>
                        {img.map((i, index) => (
                            <div className={`w-56 h-80 overflow-hidden rounded-2xl  `} key={index}>
                                <img src={`../src/assets/images/${i}`} alt={`${i}img`} className={`w-full h-full object-cover`} />
                            </div>
                        ))}
                    </div>
                    <div className='flex gap-4 flex-col mt-60' >
                        {img.map((i, index) => (
                            <div className={`w-56 h-80 overflow-hidden rounded-2xl  `} key={index}>
                                <img src={`../src/assets/images/${i}`} alt={`${i}img`} className={`w-full h-full object-cover`} />
                            </div>
                        ))}
                    </div>
                    <div className={`flex gap-4 flex-col mt-40`}>
                        {img.map((i, index) => (
                            <div className={` w-56 h-80 overflow-hidden rounded-2xl  `} key={index}>
                                <img src={`../src/assets/images/${i}`} alt={`${i}img`} className={`w-full h-full object-cover`} />
                            </div>
                        ))}
                    </div>
                    <div className={`flex gap-4 flex-col`}>
                        {img.map((i, index) => (
                            <div className={`w-56 h-80 overflow-hidden rounded-2xl  `} key={index}>
                                <img src={`../src/assets/images/${i}`} alt={`${i}img`} className={`w-full h-full object-cover`} />
                            </div>
                        ))}
                    </div> */}
                </div>

            </div>
            <div className=" text-center sticky bottom-0 mt-[-20%]">
                <FaAngleDown className="text-white mx-auto bg-[#0076d3] rounded-full h-12 p-2 w-fit" />
                <div className="font-semibold bg-[#fffd93] py-6 mt-4 w-full text-md">
                    <a href="#search">Here&apos;s how it works <FaAngleDown className="inline" /></a>
                </div>
            </div>
        </div>

    )
}
