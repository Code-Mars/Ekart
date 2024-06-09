import { BriefcaseIcon, GiftIcon, QuestionMarkCircleIcon } from "@heroicons/react/24/outline";

const Footer = () => {
    return <div className="flex min-h-16 mb-3 px-3 flex-wrap items-center xs-mx:gap-2 justify-evenly md-mx:text-xs text-sm">
        <div className="flex items-center gap-1 hover:text-red-600 cursor-pointer transform transition-transform mb-1 duration-[400ms]"><BriefcaseIcon className="w-5 h-5 text-red-700" />Become Seller</div>
        <div className="flex items-center gap-1 hover:text-red-600 cursor-pointer transform transition-transform mb-1 duration-[400ms]"><GiftIcon className="w-5 h-5 text-red-700" />Gift Cards</div>
        <div className="flex items-center gap-1 hover:text-red-600 cursor-pointer transform transition-transform mb-1 duration-[400ms]"><QuestionMarkCircleIcon className="w-5 h-5 text-red-700" />Help Center</div>
        <div className=" hover:text-red-600 cursor-pointer transform transition-transform mb-1 duration-[400ms]">Terms of Service</div>
        <div className=" hover:text-red-600 cursor-pointer transform transition-transform mb-1 duration-[400ms]">Privacy & Policy</div>
        <div className="">All Right reserved by Ekart & <a href="https://github.com/Code-Mars" className=" text-red-500 hover:text-red-800 cursor-pointer transform transition-transform mb-1 duration-[400ms] underline">Marshal</a> | {new Date().getFullYear()}</div>
    </div>
}
export default Footer;