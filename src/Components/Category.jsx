import Card from "./Card";

const Category=()=>{
    const items=[ "Books", "Laptop", "Mobile", "Headphone","Furniture", "Handbag"]
    return <div className="my-10 mx-1">
    <span className=" sm-mx:pl-2 text-xl md:text-2xl lg:text-3xl  ml-2 font-semibold">Top Categories</span>
        <div className="flex gap-2 md:gap-5 lg-mx:flex-wrap justify-evenly my-5">
            {
              items.map((x)=>
                <Card key={x} name={x}/>
              )  
            }
        </div>
    </div>
}
export default Category;