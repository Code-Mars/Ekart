import { StarIcon} from "@heroicons/react/24/outline";
import { StarIcon as StarIconSolid } from "@heroicons/react/20/solid";
import { useDispatch } from "react-redux";
import { cancelOrder } from "../Slices/OrderSlice";
const OrderItem=({id,title, price, rating, desc, date,quantity, status})=>{
    const dispatch = useDispatch();
    const futureDate = new Date(date);
    futureDate.setDate(futureDate.getDate() + (status=="CANCELLED"?0:5));
    if(status!="CANCELLED")status=futureDate.getTime() <= new Date().getTime()?"DELIVERED":status;
    const handleCancel=()=>{
        dispatch(cancelOrder({id:id}));
    }
    const options = { weekday: 'short', month: 'short', day: 'numeric' };
    const formattedDate = futureDate.toLocaleDateString('en-US', options);
    return <div className=" flex items-center">
    <div className="w-full flex p-2 gap-2 items-center flex-wrap justify-between">
        <div className="flex gap-3 items-center">
            <img className="w-36 rounded-md bg-gray-100 " src={`../../Ekart/Images/${title}.png`} />
            <div className="flex flex-col gap-2 ">
                <span className="font-semibold text-xl ">{title}</span>
                <span className="xsm-mx:text-[8px]/[10px] text-xs text-gray-500 font-semibold">{desc}</span>
                <div className="flex" >{
                    [...Array(5)].map((e, i) => {
                        if (i < rating) return <StarIconSolid key={i} className=" xsm-mx:h-3  xsm-mx:w-3 h-4 text-green-500 w-4" />
                        else return <StarIcon key={i} className=" xsm-mx:h-3  xsm-mx:w-3 h-4 text-green-500 w-4" />
                    })
                }
                </div>
                <span className={`text-sm xs-mx:text-xs ${status==="DELIVERED"?"text-green-600":status==="CANCELLED"?"text-red-600":"text-gray-700"}  font-semibold`}>{status==="DELIVERED"?"Delivered on":status==="CANCELLED"?"Cancelled on":"Delivery by"} {formattedDate}</span>
            </div>
        </div>
        <div className="flex xs-mx:w-full h-full  xs:flex-col items-center justify-between xs-mx:gap-2 gap-3">
        <span className="text-lg sm-mx:text-base xs-mx:text-sm px-1.5 py-1.5 bg-gray-100  rounded-xl w-fit font-semibold"><span className="xs:hidden">Price: </span>${price}.00</span>
            <div className="flex rounded-xl text-sm font-semibold items-center px-1.5 py-1.5 bg-gray-100 w-fit"> Quantity: {quantity} </div>
            {status==="ORDERED" && <button onClick={()=>handleCancel()} className="w-fit  border border-red-500 text-red-500 text-sm hover:bg-red-500 hover:text-white py-1.5 px-4 rounded-full transition duration-300 ease-in-out focus:outline-none" >Cancel</button>}
        </div>

    </div>
</div>
}
export default OrderItem;