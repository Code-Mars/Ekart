const RegisterValidation=(name, value)=>{
    switch(name){
        case "name":
            if(value.length===0)return "Name is required";
            if(value.length<3)return "Name should be atleast 3 characters long";
            if(value.length>20)return "Name should be atmost 20 characters long";
            return "";
        case "mobile":
            if(value.length===0)return "Mobile Number is required";
            if(!/^\d+$/.test(value))return "Mobile Number should contain only digits";
            if(value.length!==10)return "Mobile Number should be 10 digits long";
            return "";
        case "email":
            if(value.length===0)return "Email is required";
            if(!/^[a-zA-Z0-9+_.-]+@[a-zA-Z0-9.-]+$/.test(value))return "Invalid Email address";
            return "";
        case "password":
            if(value.length===0)return "Password is required";
            if(value.length<8)return "Password should be atleast 8 characters long";
            if(!/[a-z]/.test(value))return "Password should contain atleast one lowercase letter";
            if(!/[A-Z]/.test(value))return "Password should contain atleast one uppercase letter";
            if(!/\d/.test(value))return "Password should contain atleast one digit";
            if(!/[@#$%^&*!]/.test(value))return "Password should contain atleast one special character";
            if(value.length>16)return "Password should be atmost 16 characters long";
            return "";
        default:
            return "";
    }
}
export default RegisterValidation;