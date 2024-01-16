export default function TextContent(props){
    
    return (
        <div className="w-1/2 h-full flex justify-center items-center">
                <div className={`text-center w-4/5`}>
                    <h1 className={`font-bold ${props.textColor} text-[3.6rem]`}>{props.head}</h1>
                    <p className={`text-xl leading-7 ${props.textColor} py-3 w-2/3 mx-auto `}>{props.desc}</p>
                    <button className={`${props.btnBg} ${props.btnText} font-bold py-3 px-4 text-sm rounded-full m-1`}>Explore</button>
                </div>
            </div>
    )
}