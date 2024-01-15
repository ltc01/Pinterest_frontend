export default function TextContent(props){
    const {head, desc, color, btn} = props
    return (
        <div className="w-1/2 h-full flex justify-center items-center">
                <div className={`text-center w-4/5`}>
                    <h1 className={`font-bold text-${color} text-[3.6rem]`}>{head}</h1>
                    <p className={`text-xl leading-7 text-${color} py-3 w-2/3 mx-auto `}>{desc}</p>
                    <button className={`bg-${color} text-[${btn}] font-bold py-3 px-4 text-sm rounded-full m-1`}>Explore</button>
                </div>
            </div>
    )
}