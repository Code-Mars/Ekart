import { CheckIcon, HeartIcon, MinusIcon, PlusIcon, StarIcon } from "@heroicons/react/24/outline";
import { StarIcon as StarIconSolid, HeartIcon as HeartIconSolid } from "@heroicons/react/20/solid";
import { useEffect, useState } from "react";
import { useParams } from "react-router";
import SimilarProd from "./SimilarProd";
import { getCategoryWiseItems, getItem } from "../Services/ItemService";
import { addItem } from "../Slices/CartSlice";
import { useDispatch, useSelector } from "react-redux";
import { toggleItemInWishlist } from "../Slices/WishlistSlice";
import { Link, useNavigate } from "react-router-dom";
const Product = () => {
    const dispatch = useDispatch();
    const [heart, setHeart] = useState(false);
    const [product, setProduct] = useState({});
    const wishlist = useSelector(state => state.wishlist);
    const { id } = useParams();
    const [added, setAdded] = useState(false);
    const [items, setItems] = useState([]);
    const [goToCart, setGoToCart] = useState(false);
    const navigate = useNavigate();
    const  handleClick=(category)=>{
        navigate(`/search/${category}`)
    }
    const handleAdd = () => {
        setAdded(true);
        setTimeout(() => {
            setAdded(false);
            setGoToCart(true);
        }, 1000);

    }
    const handleLike=()=>{
        dispatch(toggleItemInWishlist({id:parseInt(id)}));
        setHeart(!heart);
    }
    const [flag, setFlag] = useState(false);
    useEffect(() => {
        getItem(id).then((res) =>{
            setProduct(res);
            getCategoryWiseItems(res.category).then((res) => {
                setItems(res);
                setFlag(false);
                res.forEach((e, i) => {
                    if(i<6 &&         
                           e.id==id)setFlag(true);
                           
                    });
            });
        }).catch(error => console.log(error));
        if(wishlist && wishlist.find(item=>item===parseInt(id)))setHeart(true); 
        else setHeart(false);
        window.scrollTo(0, 0);
    }, [id]);

    const [count, setCount] = useState(1)
    return <div className="my-5 md-mx:mx-2 mx-10 mt-20 flex flex-wrap sm-mx:justify-around md-mx:gap-5 gap-12">
        <div className="relative w-fit h-fit bg-gray-100 rounded-xl flex items-center justify-center">
            <img className="" src={`../../Ekart/Images/${product.title}.png`} alt="img" />
            <div onClick={handleLike} className=" cursor-pointer absolute md-mx:right-3 md-mx:top-3 md:right-5 md:top-5  transition duration-300 ease-in-out bg-white p-2 rounded-full hover:bg-red-100">
            {
                    !heart && <HeartIcon className="h-5 w-5" />}
                    {heart && <HeartIconSolid className="h-5 w-5 text-red-500"/>}
            </div>
        </div>
        <div className="flex max-w-[272px] flex-col gap-3">
            <span className="text-2xl font-bold">{product.title}</span>
            <span className="text-xs text-gray-600 font-semibold">{product.desc}</span>
            <div className="flex" >{
                [...Array(5)].map((e, i) => {
                    if (i < product.rating) return <StarIconSolid key={i} className=" xsm-mx:h-3  xsm-mx:w-3 h-4 text-green-500 w-4" />
                    else return <StarIcon key={i} className=" xsm-mx:h-3  xsm-mx:w-3 h-4 text-green-500 w-4" />
                })
            }
                <span className="xsm-mx:text-[8px]/[10px] text-xs text-gray-500 font-semibold">(121)</span>
            </div>
            <hr />
            <div className="flex flex-col">
                <span className="text-lg font-bold">${product.price}.00 or {(product.price / 6).toFixed()}.99/month</span>
                <span className=" text-xs text-gray-600 font-semibold">Suggested payment with 6 months special EMI</span>
            </div>
            <hr />
            <div className="flex gap-4 items-center">
                <div className="flex gap-4 rounded-xl text-sm font-semibold items-center px-3 py-1.5 bg-gray-100 w-fit"> <MinusIcon className="w-4 h-4 font-extrabold cursor-pointer text-red-500" onClick={() => setCount(Math.max(count - 1, 1))} /> <span>{count}</span> <PlusIcon className="cursor-pointer w-4 h-4 text-green-600" onClick={() => setCount(Math.min(count + 1, 10))} /> </div>
                <span className="text-xs  text-gray-600 font-semibold"> Only <span className="text-orange-500">12 Items</span> Left!</span>
            </div>
            <hr />
            <div className="flex gap-2">
                <button className="border focus:outline-none  font-semibold border-blue-500 text-white bg-blue-500 text-sm hover:bg-blue-800  py-2 px-4 rounded-full transition duration-300 ease-in-out xsm-mx:text-[10px]/[12px] " >Buy Now</button>

                {!added && !goToCart && <button onClick={() => { dispatch(addItem({ ...product, "quantity": count })); handleAdd() }} className="border focus:outline-none  font-semibold border-blue-500 text-blue-500 text-sm hover:bg-blue-500 hover:text-white py-2 px-4 rounded-full transition duration-300 ease-in-out xsm-mx:text-[10px]/[12px]  " >Add to Cart</button>}
                {
                    added && <button className=" flex border border-green-500  text-sm focus:outline-none   bg-green-500 text-white font-semibold py-2 px-4 rounded-full transition duration-300 ease-in-out xsm-mx:text-[10px]/[12px] " ><CheckIcon className="font-extrabold w-5 h-5" /> Added</button>
                }
                {
                    goToCart && <Link to={`/cart`}><button className="border focus:outline-none  font-semibold border-blue-500 text-white bg-blue-500 text-sm hover:bg-blue-800  py-2 px-4 rounded-full transition duration-300 ease-in-out xsm-mx:text-[10px]/[12px] " >Go to Cart</button></Link>
                }
            </div>
        </div>
        <div className="md-mx:w-full w-[512px]">
            <div>
            <span className="text-lg font-semibold">Similar Products</span> 
            <button onClick={()=>handleClick(product.category)} className="ml-2 focus:outline-none text-[10px]/[12px] text-gray-400 font-bold">See All</button>
            </div>
            <div className=" flex flex-wrap gap-1 mt-4 justify-evenly">
                {
                    
                    items.map((e, i) => i < 6 && parseInt(id)!==e.id && <SimilarProd key={i} id={e.id} title={e.title} price={e.price} rating={e.rating} /> )
                }
                {
                    flag && items.length>6 && <SimilarProd id={items[6].id} title={items[6].title} price={items[6].price} rating={items[6].rating} />
                }
            </div>
        </div>
    </div>
}
export default Product;