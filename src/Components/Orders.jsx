import React, { useEffect, useState } from "react";
import OrderItem from "./OrderItem";
import { getItem } from "../Services/ItemService";
import { useSelector } from "react-redux";

const Orders =()=>{
    const [orders, setOrders]=useState([]);
    const orderSlice=useSelector(state=>state.order);
    useEffect(() => {
        let items=[];
        orderSlice.forEach(element => {
                getItem(element.itemId).then(item=>{
                    items.push({...item, orderId:element.id, quantity:element.quantity, date:element.date, status:element.status});
                }).catch(error=>console.log(error));
                
            });
            setOrders(items);
      }, [orderSlice]);
    return <div>
        
        <div className="md-mx:w-[95%] mx-auto w-[62%] p-3 m-2 mt-20 border-[1px] border-gray-300 rounded-lg  flex flex-col gap-3">
            <div className="text-2xl xs-mx:text-xl font-semibold">Orders</div>
            <hr/>
            { orders.length!==0 &&
                orders.map((e, i)=><React.Fragment key={i}><OrderItem  id={e.orderId} title={e.title} desc={e.desc} price={e.price} rating={e.rating} quantity={e.quantity} date={e.date} status={e.status}/> { i<orders.length-1 && <hr  />}</React.Fragment>)
           
            }
            {
                orders.length===0 && <div className="text-center text-lg">No Orders</div>
            }
        </div>
    </div>
}
export default Orders;