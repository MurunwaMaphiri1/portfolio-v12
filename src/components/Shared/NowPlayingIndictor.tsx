

export default function NowPlayingIndicator() {
    return (
        <>
            <div className="w-[16px] h-[16px] flex gap-[10%]">
                <span className="bar w-[20%] h-[100%] bg-[#57b660] block"/>
                <span className="bar w-[20%] h-[100%] bg-[#57b660] block"/>
                <span className="bar w-[20%] h-[100%] bg-[#57b660] block"/>
                <span className="bar w-[20%] h-[100%] bg-[#57b660] block"/>
                <span className="bar w-[20%] h-[100%] bg-[#57b660] block"/>
            </div>
        </>
    )
}