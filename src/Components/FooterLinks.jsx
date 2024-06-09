import FtLink from "./FtLink";
import Payments from "./Payments";

const FooterLinks=()=>{
    const links=[
        {name:"Department", list:["Fashion","Education Product","Frozen Food","Beverages","Organic Grocery","Office Supplies","Beauty","Books","Electronics & Gadget","Travel Accessories","Fitness","Sneakers","Toys","Furniture"]},
        {name:"About Us", list:["About Shopcart", "Careers", "News & Blog", "Help", "Press Center", "Shop By Location", "Shopcart Brands", "Affiliate & Partners", "Ideas & Guides"]},
        {name:"Services", list:["Gift Card", "Mobile App", "Shipping & Delivery", "Order Pickup", "Account Signup"]},
        {name:"Help", list:["Shopcart Help", "Returns", "Track Orders", "Contact Us", "Feedback", "Security & Fraud"]}
    ]
    return <div className="flex md:justify-evenly md-mx:justify-around flex-wrap  p-5">
        <Payments className="mb-3"/>
        {
            links.map((e, i)=><FtLink className="mb-3" key={i} name={e.name} list={e.list}/>)
        }
    </div>
}
export default FooterLinks;