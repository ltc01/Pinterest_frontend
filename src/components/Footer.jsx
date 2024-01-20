
export const Footer = () => {
    const items = ["Terms of Service", "Privacy Policy", "Help", "Iphone App", "Android App", "Users", "Collections", "Shopping", "Today", "Explore", "Watch", "Shop"]

    return (
        <div className="relative bottom-0 w-full">
            <div className="bg-white py-2 flex justify-center max-sm:flex-wrap ">
                {items.map((a, i) => (
                    <a href="" key={i} className="text-black text-xs px-2 font-semibold tracking-tight hover:underline">{a}</a>
                ))}
            </div>
        </div>
    )
}
