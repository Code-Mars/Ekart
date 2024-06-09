const AddressValidation=(name, value)=>{
    switch(name){
        case "firstName":
            if(value.length===0)return "First Name is required";
            if(value.length<3)return "First Name should be atleast 3 characters long";
            return "";
        case "lastName":
            if(value.length===0)return "Last Name is required";
            if(value.length<3)return "Last Name should be atleast 3 characters long";
            return "";
        case "address":
            if(value.length===0)return "Address is required";
            return "";
        case "city":
            if(value.length===0)return "City is required";
            return "";
        case "zipCode":
            if(value.length===0)return "Zip Code is required";
            if(!/^\d+$/.test(value))return "Zip Code should contain only digits";
            if(value.length!==6)return "Zip Code should be 6 digits long";
            return "";
        case "mobileNumber":
            if(value.length===0)return "Mobile Number is required";
            if(!/^\d+$/.test(value))return "Mobile Number should contain only digits";
            if(value.length!==10)return "Mobile Number should be 10 digits long";
            return "";
        case "email":
            if(value.length===0)return "Email is required";
            if(!/^[a-zA-Z0-9+_.-]+@[a-zA-Z0-9.-]+$/.test(value))return "Invalid Email address";
        default:
            return "";
    }
}
export default AddressValidation;