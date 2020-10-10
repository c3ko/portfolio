
function Progressbar({ label, number, norm}) {
    
    const normalizedNumber = (number / norm) * 100;
    return (
        <div className="shadow w-full bg-gray-200 mb-4">
            <div class="bg-purple-500 text-xs leading-none py-2 text-center text-white" style={{width: `${normalizedNumber}%`}}>45%</div>
        </div>
    )
}

export default Progressbar