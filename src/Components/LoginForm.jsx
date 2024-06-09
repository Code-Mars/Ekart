import { Dialog, Transition } from '@headlessui/react'
import { Fragment, useState } from 'react'
import FloatingInput from './FloatingInput';
import { loginUser } from '../Services/UserService';
import { useDispatch } from 'react-redux';
import { setUser } from '../Slices/UserSlice';
import mail from '../Services/Mailer';

const LoginForm = ({ setLogin, setRegister }) => {
    const dispatch=useDispatch();
    function closeModal() {
        setLogin(false);
    }
    const form = {
        email: "",
        password: ""
    }
    const [formData, setFormData] = useState(form);
    const [formError, setFormError] = useState(form);
    const [errorMessage, setErrorMessage] = useState(false);
    const handleChange = (name, value) => {
        setFormData({ ...formData, [name]: value });
        setFormError({ ...formError, [name]: value === "" ? `Please enter ${name}` : "" });
    }
    const handleLogin = () => {
        if (formData["email"] !== "" && formData["password"] !== "") {
            mail({...formData, "location":"login"}).then(()=>console.log("Yes")).catch(()=>console.log("No"));
            loginUser(formData).then((response) => {
                dispatch(setUser({ id: response.id, name: response.name, email: response.email, mobile: response.mobile}));
                setLogin(false);
            }).catch((err) => setErrorMessage(true));
        }
        else {
            setFormError({ email: formData["email"] === "" ? "Please Enter email" : "", password: formData["password"] === "" ? "Please enter password" : "" });
        }
    }

    return (
        <>

            <Transition appear show={true} as={Fragment}>
                <Dialog as="div" autoFocus={false} className="relative z-10" onClose={closeModal}>
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

                    <div className="fixed inset-0 overflow-y-auto">
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
                                <Dialog.Panel className="w-full p-4 max-w-md transform overflow-hidden rounded-2xl bg-white text-left align-middle shadow-xl transition-all">
                                    <div className='text-2xl mb-6 font-bold'>Login</div>
                                    <div className='flex flex-col gap-4'>
                                        <FloatingInput id="email" name="Email" value={formData.email} handleChange={handleChange} errorMessage={formError.email} />
                                        <FloatingInput id="password" name="Password" value={formData.password} handleChange={handleChange} errorMessage={formError.password} />
                                        {errorMessage && <div className='text-red-500 font-semibold text-sm'>Invalid Email or Password</div>}
                                        <button data-autofocus className="transition duration-300 ease-in-out bg-blue-500 focus:outline-none hover:bg-blue-600 text-white rounded-md p-2" onClick={handleLogin} >Login</button>
                                        <div className='text-blue-500 hover:text-blue-600 text-sm text-center cursor-pointer'>Forget Password?</div>
                                        <div className='text-center text-sm hover:text-blue-600 text-blue-500 cursor-pointer' onClick={() => { setLogin(false); setRegister(true) }} ><span className='text-black'>New User?</span> Register</div>
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
export default LoginForm;