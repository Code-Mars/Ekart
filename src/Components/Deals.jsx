import { useEffect, useState } from "react";
import Item from "./Item";
import {getTrendingItems } from "../Services/ItemService";

const Deals =()=>{
    const [items, setItems]=useState([]);
    useEffect(()=>{
        getTrendingItems().then(res=>setItems(res)).catch(error=>console.log(error));
    }, [])
    return <div className="p-5 w-full">
        <div className="text-xl md:text-2xl lg:text-3xl mb-5 font-semibold">Best Deals</div>
        <div className="flex gap-4 pb-5 overflow-x-scroll scrollbar" id="style-3">
            {
                items.map((e, index)=><Item key={index} id={e.id} title={e.title} price={e.price} desc={e.desc} rating={e.rating}/>)
            }
        </div>
    </div>
}
export default Deals;