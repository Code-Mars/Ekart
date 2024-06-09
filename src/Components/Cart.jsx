
import React from "react";
import CartItem from "./CartItem";
import PriceDetails from "./PriceDetails";
import { useSelector } from 'react-redux';
const Cart = () => {
    const items=useSelector(state=>state.cart);
    const totalPrice = items.reduce((total, item) => total + item.price * item.quantity, 0);
    return <div className="flex p-3 justify-between md-mx:flex-wrap">

        <div className="md-mx:w-[95%] mx-auto w-[62%] p-3 m-2 border-[1px] border-gray-300 rounded-lg  flex flex-col gap-3">
            <div className="text-2xl xs-mx:text-xl font-semibold">Cart Items</div>
            <hr/>
            { items.length?
                items.map((item, index) => {
                    return  <React.Fragment key={index}><CartItem id={item.id} title={item.title} desc={item.desc} price={item.price} rating={item.rating} quantity={item.quantity} cart={true} /> { index<items.length-1 && <hr/>}</React.Fragment> }):<div  className="text-gray-600 text-lg font-semibold h-full flex items-center justify-center">Your cart is empty</div>
            }
        </div>
        <div className="md-mx:w-[95%] mx-auto w-[35%] h-fit py-3 px-5 m-2 border-[1px] border-gray-300 rounded-lg">
            <PriceDetails totalPrice={totalPrice} qty={items.length}/>
        </div>
    </div>
}
export default Cart;