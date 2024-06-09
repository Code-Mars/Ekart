import { useState } from "react";
import Success from "./Success";
import FloatingInput from "./FloatingInput";
import PaymentValidation from "../Services/PaymentValidation";
import { useDispatch, useSelector } from "react-redux";
import { buy } from "../Slices/OrderSlice";
import { removeAll } from "../Slices/CartSlice";
import { useNavigate } from "react-router-dom";
const OrderSummary = ({ totalPrice, valid, handleRun }) => {
    const form = {
        upi: "",
        cardNumber: "",
        expiry: "",
        cvv: "",
        nameOnCard: ""
    }
    const items = useSelector(state => state.cart);
    const navigate = useNavigate();
    const [formData, setFormData] = useState(form);
    const [formError, setFormError] = useState(form);
    const [errorMessage, setErrorMessage] = useState("");
    const handleChange = (name, value) => {
        setFormData({ ...formData, [name]: value });
        setFormError({ ...formError, [name]: PaymentValidation(name, value) });

    }
    const dispatch = useDispatch();
    const [show, setShow] = useState(0);
    const [display, setDisplay] = useState(false);
    const handleShow = (show) => {
        setShow(show);
        setFormData(form);
        setFormError(form);
    }
    const handleSubmit = () => {
        setErrorMessage("");
        handleRun(true);
        let paymentValid = true;
        if (show === 0) paymentValid = true;
        else if (show === 1) {
            setFormError({ ...formError, upi: PaymentValidation("upi", formData["upi"]) });
            if (formError["upi"] !== "") paymentValid = false;
        }
        else {
            let newFormError = {};
            for (let key in formData) {
                if (key !== "upi") {
                    newFormError[key] = PaymentValidation(key, formData[key]);
                    if (newFormError[key] !== "") paymentValid = false;
                }
            }
            setFormError(newFormError);
        }
        if (paymentValid && valid) {
            items.forEach(element => {
                dispatch(buy({ userId: 1, itemId: element.id, quantity: element.quantity }));
            });
            dispatch(removeAll());
            setDisplay(true);
        }
        else {
            setErrorMessage("Please enter address and payment details");
        }
    }
    return <><div className="md-mx:w-[95%] text-sm mx-auto w-[35%]">
        <div className="flex flex-col gap-4 h-fit py-3 px-5 m-2 border-[1px] border-gray-300 rounded-lg">
            <div className="text-2xl font-semibold">Order Summary</div>
            <hr />
            <div className="text-base font flex justify-between">
                <span>Amount to be Paid:</span>
                <span className="font-semibold">${(totalPrice * .9).toFixed()}.00</span>
            </div>
            <hr />
            <div className="font-semibold">Payment Method</div>
            <hr />
            <div className="flex flex-col text-sm gap-3">
                <label className="inline-flex items-center">
                    <input
                        type="radio"
                        className="form-radio text-blue-500 h-4 w-4"
                        name="paymentMethod"
                        value="cashOnDelivery"
                        defaultChecked={true}
                        onChange={() => handleShow(0)}
                    />
                    <span className="ml-2">Cash on Delivery</span>
                </label>

                <label className="inline-flex items-center">
                    <input
                        type="radio"
                        className="form-radio text-blue-500 h-4 w-4"
                        name="paymentMethod"
                        value="upi"
                        onChange={() => handleShow(1)}
                    />
                    <span className="ml-2">UPI</span>
                </label>

                <label className="inline-flex items-center ">
                    <input
                        type="radio"
                        className="form-radio text-blue-500 h-4 w-4"
                        name="paymentMethod"
                        value="creditDebitCard"
                        onChange={() => handleShow(2)}
                    />
                    <span className="ml-2">Credit or Debit Card</span>
                </label>
            </div>
            {show === 1 && <div className="animate-[wiggle_0.7s_ease-in-out_1]">
                <FloatingInput id="upi" name="UPI Id" value={formData.upi} handleChange={handleChange} errorMessage={formError.upi} /></div>
            }
            {show === 2 &&
                (<div className="gap-4 flex flex-col animate-[wiggle_0.7s_ease-in-out_1]">
                    <FloatingInput id="cardNumber" name="Card Number" value={formData.cardNumber} handleChange={handleChange} errorMessage={formError.cardNumber} />

                    <div className="flex gap-2 justify-between">
                        <FloatingInput id="expiry" name="Expiry (MM/YY)" value={formData.expiry} handleChange={handleChange} errorMessage={formError.expiry} />
                        <FloatingInput id="cvv" name="CVV" value={formData.cvv} handleChange={handleChange} errorMessage={formError.cvv} />
                    </div>
                    <FloatingInput id="nameOnCard" name="Name on Card" value={formData.nameOnCard} handleChange={handleChange} errorMessage={formError.nameOnCard} />
                </div>)
            }
            {errorMessage && <div className="text-red-500 text-sm font-semibold">{errorMessage}</div>}
            <button className="w-full border border-blue-500 text-blue-500 text-sm hover:bg-blue-500 hover:text-white py-1.5 px-4 rounded-full transition duration-300 ease-in-out focus:outline-none" onClick={() => handleSubmit()}>Place Order</button>
        </div>
    </div>

        {
            display && <Success />
        }</>
}
export default OrderSummary;