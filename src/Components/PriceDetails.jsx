import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

const PriceDetails=({totalPrice, qty})=>{
    const user=useSelector(state=>state.user);
    const navigate=useNavigate();
    const handleClick=()=>{
        if(user){
            navigate("/buy");
        }else{
            document.getElementById("login").click();
        }
    }
    return <div className="flex flex-col gap-3  font-semibold">
        <div className="text-2xl xs-mx:text-xl font-semibold">Price Details</div>
        <hr/>
        <div className=" flex justify-between">
            <span>Price ({qty} items)</span>
            <span>${totalPrice}.00</span>
        </div>
        
        <div  className=" flex justify-between">
            <span>Discount</span>
            <span className="text-green-600">-${(totalPrice*.1).toFixed()}</span>
        </div>
        
        <div  className=" flex justify-between">
            <span>Delivery Charges</span>
            <span className=" text-green-600"><span className="text-gray-500 line-through">$2</span> Free</span>
        </div>
        <hr/>
        <div  className="font-bold flex justify-between">
            <span>Total Amount</span>
            <span>${(totalPrice*.9).toFixed()}.00</span>
        </div>
        <hr/>
        <div className="text-green-600">You will save ${(totalPrice*.1).toFixed()} on this order</div>
        <hr/>
        <button disabled={qty===0} onClick={(handleClick)}  className={`w-full border text-sm border-blue-500 text-blue-500  hover:bg-blue-500 hover:text-white py-1.5 px-4 rounded-full transition duration-300 ease-in-out focus:outline-none ${qty===0?'border-gray-500 text-gray-500  hover:bg-gray-500 hover:text-white':'border-blue-500 text-blue-500  hover:bg-blue-500 hover:text-white'}`}>Order Now</button>
    </div>

}
export default PriceDetails;