const DiscountCard = ({price, pic, desc}) => {
    return <div className="sm-mx:w-[42%] md-mx:w-[40%] w-[24%] m-2 bg-[#F2E4D9] flex flex-col rounded-xl overflow-hidden">
        <div className=" md-mx:p-4 md:p-3 lg:p-6 flex flex-col gap-1">
            <div className="xs-mx:text-xl text-2xl font-bold text-gray-800">Save</div>
            <div className="xs-mx:text-2xl text-4xl font-bold sm:mb-3 text-[#CB9917]">$<span className="align-sub xs-mx:text-3xl text-5xl">{price}</span></div>
            <div className=" lg-mx:text-sm sm-mx:text-xs">Explore Our {desc}</div>
        </div>
        <div className="overflow-hidden cursor-pointer">
        <img className="hover:scale-[1.2] transform transition-transform duration-[400ms]" src={`../../Ekart/Images/${pic}.png`} />
        </div>
    </div>
}
export default DiscountCard;