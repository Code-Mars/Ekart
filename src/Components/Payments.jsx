import PaymentCard from "./PaymentCard";
import { GravityUiShoppingCart } from "./ShoppingCartIcon";

const Payments=()=>{
    const payments=["Stripe", "Visa", "Mastercard","Amazon", "Klarna", "Paypal", "Applepay", "Gpay"];
    return <div className="w-72 flex flex-col gap-4 mb-4">
        <div className="text-2xl font-bold flex items-center gap-1"><GravityUiShoppingCart className="h-6 w-6 text-sky-600" /> Ekart</div>
        <div className="text-sm text-gray-700">Your one-stop solution for seamless online shopping experiences.</div>
        <div className="font-semibold">Accepted Payments</div>
        <div className="w-64 flex flex-wrap gap-1">
            {
                payments.map((e, i)=><PaymentCard key={i} name={e} />)
            }
        </div>
    </div>
}
export default Payments;