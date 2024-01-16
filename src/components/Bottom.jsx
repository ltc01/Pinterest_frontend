import { Footer } from "./Footer"
import { Signup } from "./Signup"
import { FaAngleUp } from "react-icons/fa"
import 'animate.css';

export const Bottom = () => {
    

    return ( 
            <div id="bottom" className="h-[37.2rem] w-full bg-[url('https://images.unsplash.com/photo-1516981879613-9f5da904015f?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')] bg-center bg-cover bg-no-repeat">
                <div className="w-full h-full relative bg-black/70">
                    <div className="absolute w-full mt-[4rem]">
                        <a href="" >
                            <FaAngleUp className="text-white mx-auto animate__animated animate__tada animate__delay-2s animate_slow animate__infinite bg-[#e69029] h-12 w-12 p-2 rounded-full"/>
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

