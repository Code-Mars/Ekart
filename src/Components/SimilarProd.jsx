import { StarIcon } from "@heroicons/react/24/outline";
import { StarIcon as StarIconSolid } from "@heroicons/react/20/solid";
import { Link } from "react-router-dom";
const SimilarProd=({id, title, price, rating})=>{
    
    return <Link to={`/product/${id}`}><div className="bg-gray-100 cursor-pointer hover:bg-gray-200 flex items-center p-1 py-2 sm-mx:min-h-28  rounded-xl">
    <div className="flex gap-1 sm-mx:justify-between items-center">
        <img className="w-20 sm-mx:w-[60px] rounded-md bg-white" src={`../../Ekart/Images/${title}.png`} />
        <div className="flex w-36 sm-mx:w-[90px] flex-col gap-1">
            <span className="font-semibold ">{title}</span>
            <div className="flex" >{
                [...Array(5)].map((e, i) => {
                    if (i < rating) return <StarIconSolid key={i} className=" xsm-mx:h-2  xsm-mx:w-2 h-3 text-green-500 w-3" />
                    else return <StarIcon key={i} className=" xsm-mx:h-2  xsm-mx:w-2 h-3 text-green-500 w-3" />
                })
            }
            </div>
            <span className="text-sm font-semibold">${price}.00</span>
        </div>
    </div>
</div>
</Link>
}
export default SimilarProd;