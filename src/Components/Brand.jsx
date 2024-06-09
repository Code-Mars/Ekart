const Brand =({name})=>{
    return <div className="cursor-pointer flex items-center gap-4 mb-2 hover:border-black border-[1px] bg-gray-100 xsm-mx:w-[80vw] xsm:w-[40vw] xs:w-[42vw] sm:w-[45vw]  md:w-[30vw] lg:w-[22vw] p-4 rounded-lg">
        <img className="xs-mx:w-12 xs:w-16 hover:scale-[1.2] transform transition-transform duration-[400ms]" src={`../../Ekart/Images/${name}.png`}/>
        <div className="flex flex-col gap-1">
            <div className=" xs-mx:text-xs  sm-mx:text-sm  text-base font-semibold text-gray-800">{name}</div>
            <div className="xs-mx:text-[8px]/[10px] text-xs text-gray-700">Delivery with in 24 hours</div>
        </div>
    </div>
}
export default Brand;