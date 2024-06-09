const PaymentValidation = (name, value) => {
    switch (name) {
        case "cardNumber":
            if (value.length === 0) return "Card Number is required";
            if (!/^\d+$/.test(value)) return "Card Number should contain only digits";
            if (value.length !== 16) return "Card Number should be 16 digits long";
            return "";
        case "upi":
            if (value.length === 0) return "UPI ID is required";
            if (!/^[a-zA-Z0-9+_.-]+@[a-zA-Z0-9.-]+$/.test(value)) return "Invalid UPI ID";
            return "";
        case "cvv":
            if (value.length === 0) return "CVV is required";
            if (!/^\d+$/.test(value)) return "CVV should contain only digits";
            if (value.length !== 3) return "CVV should be 3 digits long";
            return "";
        case "expiry":
            if (value.length === 0) return "Expiry is required";
            if (!/^(0[1-9]|1[0-2])\/(2[0-9])$/.test(value)) return "Expiry should be in the format mm/yy";
            const [inputMonth, inputYear] = value.split('/').map(Number);
            const currentDate = new Date();
            const currentMonth = currentDate.getMonth() + 1;
            const currentYear = currentDate.getFullYear() % 100;
            if (inputYear < currentYear || (inputYear === currentYear && inputMonth < currentMonth)) {
                return "Expiry should be greater than the current date";
            }

            return "";
        case "nameOnCard":
            if (value.length === 0) return "Name on Card is required";
            return "";
        default:
            return "";
    }
}
export default PaymentValidation;