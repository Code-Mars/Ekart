import { useEffect, useState } from "react";
import Item from "./Item";
import { getCategoryWiseItems } from "../Services/ItemService";

const TodayDeals = () => {
    const [items, setItems] = useState([]);
    const [btn, setBtn] = useState(0);
    const category = ["Mobile", "Laptop", "Books", "Headphone", "Beauty", "Fitness", "Furniture", "Sneakers"];
    useEffect(() => {
        getCategoryWiseItems(category[btn]).then((res) => setItems(res)).catch(error => console.log(error));
    }, [btn]);

    return <div id="deals" className="scroll-smooth p-5 px-3 w-full">
        <div className=" text-xl md:text-2xl lg:text-3xl mb-5 font-semibold">Today's Deals</div>
        <div className="flex gap-2 my-3 flex-wrap">
            {
                category.map((e, i) => {
                    return <button key={i} className={`border focus:outline-none hover:border-blue-500 border-gray-500 text-gray-800 text-sm hover:bg-blue-500 hover:text-white ${btn === i ? "bg-blue-500 text-white border-blue-500" : ""}  py-1.5 px-4 rounded-full transition duration-300 ease-in-out xsm-mx:text-[10px]/[12px] md-mx:text-xs md-mx:py-1 md-mx:px-2`} onClick={() => setBtn(i)}  >{e}</button>
                })}
        </div>
        <div className="flex  gap-2 pb-10 flex-wrap sm-mx:justify-between">
            {
                items.map((e, i) => i < 8 && <Item key={e.id} id={e.id} title={e.title} price={e.price} desc={e.desc} rating={e.rating} />)
            }
        </div>
    </div>
}
export default TodayDeals;