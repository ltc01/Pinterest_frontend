import { Signup } from "./Signup"
import { FaAngleUp } from "react-icons/fa"

export const Bottom = () => {
    const items = ["Terms of Service", "Privacy Policy", "Help", "Iphone App", "Android App", "Users", "Collections", "Shopping", "Today", "Explore", "Watch", "Shop"]

    return ( 
        <>
            <div className="h-[37.2rem] w-full bg-[url('../src/assets/images/4.jpg')] bg-center bg-cover bg-no-repeat">
                <div className="w-full h-full relative bg-black/50">
                    <div className="absolute w-full mt-[4rem]">
                        <a href="#top" >
                            <FaAngleUp className="text-white mx-auto bg-[#e69029] h-12 w-12 p-2 rounded-full"/>
                        </a>
                    </div>
                    <div className="flex h-full">
                        <div className="w-1/2 h-full flex justify-center items-center">
                            <h1 className=" text-6xl font-semibold text-white w-3/6">Sign up to get your ideas</h1>
                        </div>
                        <div className="w-fit h-full mx-auto z-0 bg-white ">
                            <Signup />
                        </div>
                    </div>

                </div>
                <div className="relative -top-3">
                    <div className="bg-white py-2 flex justify-center gap-3 ">
                        {items.map((a, i) => (
                            <a href="" key={i} className="text-black text-[0.7rem] font-semibold tracking-tight hover:underline">{a}</a>
                        ))}
                    </div>
                </div>


            </div>
            </>     
    )
}

