const PaymentCard=({name})=>{
    return <div className="p-2 flex items-center justify-center rounded-md w-14 h-8 border-[1px] border-gray-300">
        <img src={`../../Ekart/Images/${name}.png`}/>
    </div>
}
export default PaymentCard;