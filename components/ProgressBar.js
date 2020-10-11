
function Progressbar({ label, number, norm}) {
    
    const widthPercentage = `${number}%`

    
    return (
        <div className="inline-flex w-full h-8 mb-4">
            <div className="flex w-32 justify-center items-center text-xs text-center  h-full px-2 py-1 uppercase text-white bg-purple-900">{label}</div>
            <span className="shadow w-full  bg-gray-200 ">
                <div className="bg-purple-500 h-full text-xs leading-none py-3 text-center text-white" style={{width: widthPercentage}}>{widthPercentage}</div>
            </span>
        </div>
    )
}

export default Progressbar