import { FaAngleDown } from "react-icons/fa";
import 'animate.css';


export const Content = () => {

    const img = ["1.jpg", "2.jpg", "3.jpg", "4.jpg", "5.jpg"];
    const text = ["DIY idea", "chai time snacks idea", "home decor idea", "outfit idea"];
    const color = ["red", "blue", "orange", "green"];

    return (
        <div className="w-full h-fit">
            <div className="h-[100vh] mt-10 overflow-hidden ">
                <h1 className="text-6xl text-center font-semibold">Get your next</h1>
                <div className="flex justify-center  gap-4 mt-4">
                    <div className={`flex w-64 gap-4  flex-col`}>
                        {img.map((i, index) => (
                            <div className={`w-56 h-80  overflow-hidden rounded-2xl  `} key={index}>
                                <img src={`../src/assets/images/${i}`} alt={`${i}img`} className={`w-full h-full object-cover`} />
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
                    </div>
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
