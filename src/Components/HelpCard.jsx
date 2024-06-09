import { ArrowTopRightOnSquareIcon } from "@heroicons/react/24/outline";

const HelpCard = ({title}) => {
    return <div className=" bg-gray-100   w-[30%] rounded-xl overflow-hidden">
        <div className="xsm-mx:p-1 xs-mx:p-2 p-5 flex flex-col gap-4">
            <div className="xsm-mx:text-sm xsm-mx:font-semibold xs-mx:text-base md-mx:text-lg text-xl font-bold mt-2">{title}</div>
            <a className="xsm-mx:text-xs xs-mx:text-sm hover:underline font-semibold flex items-center xsm:gap-1 cursor-pointer text-blue-700">Click here <ArrowTopRightOnSquareIcon className="xs-mx:hidden w-4 h-4"/> </a>
        </div>
        <div className="overflow-hidden">
        <img className="hover:scale-[1.2]  transform transition-transform duration-[400ms]" src={`../../Ekart/Images/${title}.png`} />
        </div>
    </div>
}
export default HelpCard;