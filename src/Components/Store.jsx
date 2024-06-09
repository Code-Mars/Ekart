import { TagIcon } from "@heroicons/react/24/solid";

const Store = ({name}) => {
    return <div className="flex flex-col gap-1 mb-2 md-mx:w-[48%]">
        <div className="relative mb-4 rounded-xl w-fit">
            <div className=" overflow-hidden rounded-xl">
                <img className="hover:scale-[1.2] hover:rotate-3 transform transition-transform duration-[400ms] " src={`../../Ekart/Images/${name}bg.png`} />
            </div>
            <img className="absolute border-2 rounded-full -bottom-6 left-5 w-14" src={`../../Ekart/Images/${name}.png`}  />
        </div>
        <div className="xs-mx:text-sm  sm-mx:text-base sm:text-lg font-bold text-gray-800">{name}</div>
        <div className="xsm-mx:text-[8px]/[10px] flex items-center gap-1 text-pink-700 text-xs"><TagIcon className=" xsm-mx:h-3 xsm-mx:w-3 h-4 w-4 rotate-90" /> Delivery with in 24 hours</div>
    </div>
}
export default Store;