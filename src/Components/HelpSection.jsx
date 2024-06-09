import HelpCard from "./HelpCard";

const HelpSection=()=>{
    const help=["Frequently Asked Questions", "Online Payment Process", "Home Delivery Options"]
    return  <div className="p-5 w-full">
    <div className="text-xl md:text-2xl lg:text-3xl mb-5 font-semibold">Help Me!</div>
    <div className="flex flex-wrap gap-2 justify-between">
        {
            help.map((item,index)=>{
                return <HelpCard key={index} title={item}/>
            })
        }
    </div>
</div>
}
export default HelpSection;