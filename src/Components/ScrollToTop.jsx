import { ArrowUpIcon } from "@heroicons/react/24/solid";
import { useEffect, useState } from "react";

const ScrollToTop=()=>{
    const [show, setShow]=useState(false);
    useEffect(()=>{
        const toggle=()=>{
            setShow(window.pageYOffset>400);
        }
        window.addEventListener('scroll', toggle);
    }, []);
    const scrollUp=()=>{
        window.scrollTo({
            top:0,
            behavior:'smooth'
        })
    }
    return show && <div onClick={scrollUp}  className="fixed rounded-full shadow-md shadow-slate-600  cursor-pointer z-20 bottom-8 right-5" ><ArrowUpIcon className="w-10 h-10 bg-blue-500 rounded-full transition duration-500 ease-in-out border-blue-500 p-2 text-white shadow- shadow-slate-900" /></div>

}
export default ScrollToTop;