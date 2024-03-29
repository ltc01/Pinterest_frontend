export default function TextContent(props){
    
    return (
        <div className="w-full lg:w-[50%]">
                <div className='md:w-[100%] w-[80%] h-[38rem] flex justify-center mx-auto items-center flex-col text-center'>
                    <h1 className={`font-bold ${props.textColor} md:w-[32rem] text-5xl md:text-6xl`}>{props.head}</h1>
                    <p className={`text-xl leading-6 md:w-[60%] my-6 px-5 ${props.textColor}`}>{props.desc}</p>
                    <button className={`${props.btnBg} ${props.btnText} font-bold py-3 px-4 text-sm rounded-full m-1`}>Explore</button>
                </div>
            </div>
    )
}