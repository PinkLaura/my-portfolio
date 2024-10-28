export default function GrayIconNote ({icon, title, text}) {
    return(
        <div className="bg-gray-50 rounded-xl drop-shadow-1 w-44 flex flex-col gap-4 p-4 z-30 relative">
            <div className="bg-white rounded-[8px] drop-shadow-2 w-max stroke-gray-400 hover:rotate-12 p-3">
                {icon}
            </div>
            <div className="flex flex-col gap-1">
                <h5 className="text-sm font-semibold text-paragraph" > {title} </h5>
                <p className="text-xs text-gray-500"> {text} </p>
            </div> 
        </div>
    );
}