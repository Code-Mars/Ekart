import { MinusIcon, PlusIcon, StarIcon, TrashIcon } from "@heroicons/react/24/outline";
import { StarIcon as StarIconSolid } from "@heroicons/react/20/solid";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { removeItem, updateItem } from "../Slices/CartSlice";
const CartItem = ({ id, title, price, rating, desc, quantity, cart }) => {
    const dispatch = useDispatch();
    const [count, setCount] = useState(quantity);
    const [totalPrice, setTotalPrice] = useState(price * quantity);
    const handleCount = (count) => {
        setCount(count);
        setTotalPrice(count * price);
        dispatch(updateItem({ id, title, price, rating, desc, "quantity": count }));
    }
    const futureDate = new Date();
    futureDate.setDate(futureDate.getDate() + 5);
    const options = { weekday: 'short', month: 'short', day: 'numeric' };
    const formattedDate = futureDate.toLocaleDateString('en-US', options);

    return <div className=" flex items-center">
        <div className="w-full flex xs-mx:p-1 p-2 gap-2 items-center flex-wrap justify-between">
            <div className="flex gap-2 items-center">
                <img className="w-36 rounded-md bg-gray-100" src={`../../Ekart/Images/${title}.png`} />
                <div className="flex flex-col gap-2 ">
                    <span className="font-semibold text-xl xs-mx:text-base">{title}</span>
                    <span className="xsm-mx:text-[8px]/[10px] text-xs text-gray-500 font-semibold">{desc}</span>
                    <div className="flex" >{
                        [...Array(5)].map((e, i) => {
                            if (i < rating) return <StarIconSolid key={i} className=" xsm-mx:h-3  xsm-mx:w-3 h-4 text-green-500 w-4" />
                            else return <StarIcon key={i} className=" xsm-mx:h-3  xsm-mx:w-3 h-4 text-green-500 w-4" />
                        })
                    }
                    </div>
                    <span className="text-sm xs-mx:text-xs text-gray-700 font-semibold">Delivery by {formattedDate}</span>
                </div>
            </div>
            <div className="flex xs-mx:w-full h-full  xs:flex-col items-center justify-between xs-mx:gap-2 gap-3">
                <span className="text-lg sm-mx:text-base xs-mx:text-sm px-1.5 py-1.5 bg-gray-100  rounded-xl w-fit font-semibold"><span className="xs:hidden">Price: </span>${totalPrice}.00</span>
                <div className={`flex ${cart ? 'gap-4' : 'gap-1'} rounded-xl xsm-mx:gap-2 text-gray-600 text-sm font-semibold items-center px-3 py-1.5 bg-gray-100 w-fit`}>
                    {cart ? <MinusIcon className="w-4 h-4 font-extrabold cursor-pointer text-red-500" onClick={() => { handleCount(Math.max(count - 1, 1)) }} /> : "Quantity:"}
                    <span>{count}</span>
                    {cart && <PlusIcon className="cursor-pointer w-4 h-4 text-green-600" onClick={() => { handleCount(Math.min(count + 1, 10)) }} />}
                </div>
                {cart && <TrashIcon onClick={() => dispatch(removeItem({ id }))} className="w-6 h-6 text-gray-600 hover:text-red-500 m-2 xs-mx:m-0 cursor-pointer" />}
            </div>

        </div>
    </div>
}
export default CartItem;