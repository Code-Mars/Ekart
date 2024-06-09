const DebitCard = () => {
    return <div className="flex xs-mx:min-h-48 w-full sm-mx:min-h-60 min-h-80 my-2 p-4 bg-orange-100 justify-evenly items-center">
        <div className="flex gap-6 flex-col">
            <div className="xs-mx:text-2xl sm-mx:text-3xl md-mx:text-4xl text-5xl font-bold text-gray-800">Get 5% Cash Back</div>
            <div className="xs-mx:text-sm sm-mx:text-base md-mx:text-lg text-xl">on Ekart.com</div>
            <button className="border w-fit xs-mx:text-sm sm-mx:text-base md-mx:text-lg bg-blue-500 border-blue-500 text-white text-lg hover:bg-blue-700 py-3 px-6 rounded-3xl transition duration-300 ease-in-out " >Explore</button>
            </div>
            <div className="relative">
        <img className="xs-mx:hidden md-mx:w-[28vw] lg-mx:w-[35vw] absolute top-4 -right-4 -rotate-[20deg]" src="../../Ekart/Images/debitcard2.png" />
        <img className="xs-mx:hidden md-mx:w-[28vw] lg-mx:w-[35vw] -rotate-[30deg] z-10" src="../../Ekart/Images/debitcard.png" />
        </div>
    </div>
}
export default DebitCard;