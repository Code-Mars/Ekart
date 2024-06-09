import Store from "./Store";

const StoreList=()=>{
    const stores=["Staples", "Now Delivery", "Bevmo!", "Quicklly"]
    return <div className="xs-mx:p-3 p-5 w-full">
    <div className=" text-xl md:text-2xl lg:text-3xl mb-5 font-semibold">Best Selling Stores</div>
    <div className="flex gap-2 md-mx:flex-wrap justify-evenly">
        {
            stores.map((x, i)=><Store  key={i} name={x}/>)
        }
    </div>
</div>
}
export default StoreList;