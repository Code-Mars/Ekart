import { useParams } from "react-router";
import Item from "./Item";
import { useEffect, useState } from "react";
import { searchItems } from "../Services/ItemService";

const Search = () => {
    const [items, setItems]=useState([]);
    const { search } = useParams();
    useEffect(() => {
        searchItems(search).then(res=>setItems(res)).catch(error=>console.log(error));
        window.scrollTo(0, 0);
        
    }, [search]);
    return <div className="p-5">
        <div className="text-xl font-semibold mb-5">Search Results for {search}</div>
        <div className="flex gap-4 pb-10 flex-wrap justify-between">
            {
                items.map((e, i) => <Item key={i} id={e.id} title={e.title} price={e.price} desc={e.desc} rating={e.rating} />)
            }
            {
                items.length===0 && <div className="text-center text-lg">No Items Found</div>
            }
        </div>
    </div>
}
export default Search;