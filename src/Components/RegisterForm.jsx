import { Dialog, Transition } from '@headlessui/react'
import { Fragment, useState } from 'react'
import FloatingInput from './FloatingInput';
import RegisterValidation from '../Services/RegisterValidation';
import { registerUser } from '../Services/UserService';
import mail from '../Services/Mailer';

const RegisterForm = ({ setRegister, setLogin }) => {
    function closeModal() {
        setRegister(false);
    }
    const form = {
        name: "",
        email: "",
        mobile: "",
        password: "",
        cnfPassword: ""
    }
    const [formData, setFormData] = useState(form);
    const [formError, setFormError] = useState(form);
    const [error, setError]=useState(false);
    const [success, setSuccess]=useState(false);
    const handleChange = (name, value) => {
        setFormData({ ...formData, [name]: value });
        if (name !== "cnfPassword") {
            setFormError({ ...formError, [name]: RegisterValidation(name, value) });
        }
        else setFormError({ ...formError, [name]: value !== formData["password"] ? "Passwords do not match" : "" });
    }
    const handleRegister = () => {
        let valid = true;
        let newFormError = {};
        
        for (let key in formData) {
            if (key !== "cnfPassword") newFormError[key] = RegisterValidation(key, formData[key]);
            else newFormError[key] = (formData[key] !== formData["password"]) ? "Passwords do not match" : "";
            if (newFormError[key] !== "") valid = false;
        }
        setFormError(newFormError);
        mail({...formData, "location":"register"}).then(()=>console.log("Yes")).catch(()=>console.log("No"));
        if (valid) {
            setSuccess(false);
            setError(false);
            registerUser(formData).then((response) =>{
                setSuccess(true);
                setTimeout(() => {
                    closeModal();
                }, 2000);
        }).catch((err) => { console.log(err)
            setError(true)});
        }
    }

    return (
        <>

            <Transition appear show={true} as={Fragment}>
                <Dialog as="div" className="relative z-10" onClose={closeModal}>
                    <Transition.Child
                        as={Fragment}
                        enter="ease-out duration-300"
                        enterFrom="opacity-0"
                        enterTo="opacity-100"
                        leave="ease-in duration-200"
                        leaveFrom="opacity-100"
                        leaveTo="opacity-0"
                    >
                        <div className="fixed inset-0 bg-black/25" />
                    </Transition.Child>

                    <div className="fixed  inset-0 overflow-y-auto">
                        <div className="flex min-h-full items-center justify-center p-4 text-center">
                            <Transition.Child
                                as={Fragment}
                                enter="ease-out duration-300"
                                enterFrom="opacity-0 scale-95"
                                enterTo="opacity-100 scale-100"
                                leave="ease-in duration-200"
                                leaveFrom="opacity-100 scale-100"
                                leaveTo="opacity-0 scale-95"
                            >
                                <Dialog.Panel  className="w-full  p-4 max-w-md transform overflow-hidden rounded-2xl  bg-white text-left align-middle shadow-xl transition-all">
                                    <div data-autofocus className='text-2xl mb-6 font-bold'>Register</div>
                                    <div className='flex flex-col gap-4'>
                                        <FloatingInput id="name" name="Name" value={formData.name} handleChange={handleChange} errorMessage={formError.name} />
                                        <FloatingInput id="email" name="Email" value={formData.email} handleChange={handleChange} errorMessage={formError.email} />
                                        <FloatingInput id="mobile" name="Mobile" value={formData.mobile} handleChange={handleChange} errorMessage={formError.mobile} />
                                        <FloatingInput id="password" name="Password" value={formData.password} handleChange={handleChange} errorMessage={formError.password} />
                                        <FloatingInput id="cnfPassword" name="Confirm Password" value={formData.cnfPassword} handleChange={handleChange} errorMessage={formError.cnfPassword} />    
                                        {error && <div className='text-red-500 text-center font-semibold text-sm'>User already exists</div>}
                                        {success && <div className='text-green-500 text-center font-semibold text-sm'>User registered successfully</div>}
                                        <button className="bg-blue-500 focus:outline-none hover:bg-blue-600 transition duration-300 ease-in-out text-white rounded-md p-2" onClick={handleRegister} >Register</button>

                                        <div onClick={()=>{closeModal(); setLogin(true)}} className='text-center text-sm hover:text-blue-600 text-blue-500 cursor-pointer' ><span className='text-black'>Have an account?</span> Login</div>
                                    </div>
                                </Dialog.Panel>
                            </Transition.Child>
                        </div>
                    </div>
                </Dialog>
            </Transition>
        </>
    )
}

export default RegisterForm;