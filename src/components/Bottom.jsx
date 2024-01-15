import { Footer } from "./Footer"
import { Signup } from "./Signup"
import { FaAngleUp } from "react-icons/fa"

export const Bottom = () => {
    

    return ( 
            <div className="h-[37.2rem] w-full bg-[url('../src/assets/images/4.jpg')] bg-center bg-cover bg-no-repeat">
                <div className="w-full h-full relative bg-black/50">
                    <div className="absolute w-full mt-[4rem]">
                        <a href="" >
                            <FaAngleUp className="text-white mx-auto bg-[#e69029] h-12 w-12 p-2 rounded-full"/>
                        </a>
                    </div>
                    <div className="flex w-full h-full">
                        <div className="w-1/2 h-full flex justify-center items-center">
                            <h1 className=" text-7xl leading-tight font-semibold text-white w-3/6">Sign up to get your ideas</h1>
                        </div>
                        <div className="w-fit h-full mx-auto bg-white ">
                            <Signup />
                        </div>
                    </div>

                </div>
                <Footer />
            </div>    
    )
}

