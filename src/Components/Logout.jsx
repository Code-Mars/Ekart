import { Dialog, Transition } from '@headlessui/react'
import { Fragment} from 'react'

const Logout = ({ setLogout }) => {
    function closeModal() {
        setLogout(false);
    }
    const handleLogout = () => {
        localStorage.removeItem("user");
        localStorage.removeItem("cart");
        localStorage.removeItem("wishlist");
        window.location.reload();
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
                                <Dialog.Panel className=" p-4 max-w-xs transform overflow-hidden rounded-2xl bg-white text-left align-middle shadow-xl transition-all">
                                    <div className='text-2xl mb-6 font-bold'>Are You Sure?</div>
                                    <div className='flex  gap-4'>
                                        
                                        <button  className="transition duration-300 ease-in-out bg-red-500 focus:outline-none hover:bg-red-600 text-white rounded-md px-2 py-1" onClick={handleLogout}  >Logout</button>
                                        <button  className="transition duration-300 ease-in-out bg-blue-500 focus:outline-none hover:bg-blue-600 text-white rounded-md px-2 py-1" onClick={closeModal}  >Cancel</button>
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
export default Logout;