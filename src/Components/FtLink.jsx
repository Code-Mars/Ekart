const FtLink = ({name, list}) => {
    return <div className="flex flex-col px-1">
        <div className="text-lg mb-4 font-semibold ">{name}</div>
        {
            list.map((e, i)=><span key={i} className="text-xs text-gray-700 hover:text-red-600 cursor-pointer hover:translate-x-3 transform transition-transform mb-1 duration-[400ms]">{e}</span>)
        }
        
    </div>
}
export default FtLink;