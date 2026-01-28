

export default function NowPlayingIndicator() {
    return (
        <>
            <div className="w-[20px] h-[20px] flex gap-[10%]">
                <span className="bar w-[20%] h-[100%] bg-[#57b660] block"/>
                <span className="bar w-[20%] h-[100%] bg-[#57b660] block"/>
                <span className="bar w-[20%] h-[100%] bg-[#57b660] block"/>
                <span className="bar w-[20%] h-[100%] bg-[#57b660] block"/>
                <span className="bar w-[20%] h-[100%] bg-[#57b660] block"/>
            </div>
        </>
    )
}