export default function TextContent(props){
    
    return (
        <div className="w-[50%] max-sm:w-full h-screen flex justify-center items-center">
                <div className='w-[80%] text-center mx-auto'>
                    <h1 className={`font-bold ${props.textColor} text-6xl`}>{props.head}</h1>
                    <p className={`text-xl leading-6 my-6 w-96 mx-auto px-5 ${props.textColor}`}>{props.desc}</p>
                    <button className={`${props.btnBg} ${props.btnText} font-bold py-3 px-4 text-sm rounded-full m-1`}>Explore</button>
                </div>
            </div>
    )
}