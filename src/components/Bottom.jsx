import { Signup } from "./Signup"
import { FaAngleUp } from "react-icons/fa"
import 'animate.css';

export const Bottom = () => {
    

    return ( 
            <section id="bottom" className="w-full bg-[url('https://images.unsplash.com/photo-1516981879613-9f5da904015f?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')] bg-center bg-cover bg-no-repeat">
                <div className="w-full h-[38rem] max-sm:h-full relative bg-black/70">
                    <div className="absolute w-full max-sm:top-10 top-32">
                        <a href="" >
                            <FaAngleUp className="text-white mx-auto animate__animated animate__tada animate__delay-2s animate_slow animate__infinite bg-[#e69029] h-12 w-12 p-2 rounded-full"/>
                        </a>
                    </div>
                    <div className="flex max-sm:flex-col">
                        <div className=" flex justify-center items-center w-[40%] mx-auto max-sm:w-96 text-center max-sm:mt-24">
                            <h1 className=" text-7xl max-sm:text-4xl leading-tight font-semibold text-white">Sign up to get your ideas</h1>
                        </div>
                        <div className="mx-auto max-sm:rounded-xl max-sm:my-6 bg-white">
                            <Signup />
                        </div>
                    </div>
                </div>
            </section>    
    )
}

