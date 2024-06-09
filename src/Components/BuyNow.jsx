import React, { useEffect, useState } from "react";
import CartItem from "./CartItem";

import { useSelector } from "react-redux";
import DeliveryInfo from "./DeliveryInfo";
import OrderSummary from "./OrderSummary";
import { useNavigate } from "react-router-dom";
const BuyNow = () => {
    const user=useSelector(state=>state.user);
    const cart=useSelector(state=>state.cart);
    const navigate=useNavigate();
    useEffect(() => {
        window.scrollTo(0, 0);
        if(!user)navigate("/cart");
        if(!cart.length)navigate("/");
    }, []);
    
    const items = useSelector(state => state.cart);
    const totalPrice = items.reduce((total, item) => total + item.price * item.quantity, 0);
    const [valid, setValid]=useState(false);
    const [run, setRun]=useState(false);
    const handleRun=(run)=>{
        setRun(run);
    }
    
    return <div className="flex mt-20 flex-between flex-wrap">
        <div className="md-mx:w-[95%] mx-auto w-[62%]">
            <div className="p-3 m-2 border-[1px] border-gray-300 rounded-lg  flex flex-col gap-3">
                <div className="text-2xl font-semibold">Review Items</div>
                <hr />
                {
                    items.map((item, index) => {
                        return <React.Fragment key={index}><CartItem id={item.id} title={item.title} desc={item.desc} price={item.price} rating={item.rating} quantity={item.quantity} />{ index<items.length-1 && <hr />}</React.Fragment>
                    })
                }

            </div>
            <DeliveryInfo validate={setValid} run={run} handleRun={handleRun}/>
        </div>
        <OrderSummary totalPrice={totalPrice} valid={valid} handleRun={handleRun}/>
    </div>
}
export default BuyNow;