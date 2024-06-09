import { useEffect, useState } from "react";
import FloatingInput from "./FloatingInput";
import AddressValidation from "../Services/AddressValidation";

const DeliveryInfo = ({ run,handleRun, validate }) => {
    useEffect(() => {
        if (run === true) {
            let valid = true;
            let newFormError={};
            Object.keys(data).forEach((val)=>{
                newFormError[val]= AddressValidation(val, data[val]);
                if(newFormError[val]!=="")valid = false;
            });
            setFormError(newFormError);
            validate(valid);
        }
        handleRun(false);
    }, [run]);
const form = {
    firstName: "",
    lastName: "",
    address: "",
    city: "",
    zipCode: "",
    mobileNumber: "",
    email: ""
}
const [data, setData] = useState(form);
const [formError, setFormError] = useState(form);
const handleChange = (name, value) => {
    setData({ ...data, [name]: value });
    setFormError({ ...formError, [name]: AddressValidation(name, value) });

}

return <div className="p-5 m-2 border-[1px] border-gray-300 text-sm rounded-lg  flex flex-col gap-4">
    <div className="text-2xl font-semibold">Delivery Information</div>
    <div className="flex gap-2 justify-between">
        <FloatingInput id="firstName" name="First Name"  value={data.firstName} handleChange={handleChange} errorMessage={formError.firstName} />
        <FloatingInput id="lastName" name="Last Name" value={data.lastName} handleChange={handleChange} errorMessage={formError.lastName} />
    </div>
    <div >
        <FloatingInput id="address" name="Address" value={data.address} handleChange={handleChange} errorMessage={formError.address} />
    </div>
    <div className="flex gap-2 justify-between">
        <FloatingInput id="city" name="City / Town" value={data.city} handleChange={handleChange} errorMessage={formError.city} />
        <FloatingInput id="zipCode" name="ZipCode"  value={data.zipCode} handleChange={handleChange} errorMessage={formError.zipCode} />
    </div>
    <div className="flex gap-2 justify-between">
        <FloatingInput id="mobileNumber" name="Mobile Number"  value={data.mobileNumber} handleChange={handleChange} errorMessage={formError.mobileNumber} />
        <FloatingInput id="email" name="Email Address"  value={data.email} handleChange={handleChange} errorMessage={formError.email} />
    </div>
</div>
}
export default DeliveryInfo;