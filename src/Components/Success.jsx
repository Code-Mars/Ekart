import { Dialog, Transition } from '@headlessui/react'
import { Fragment, useState } from 'react'
import {useNavigate } from 'react-router-dom'

const Success=()=> {
  let [isOpen, setIsOpen] = useState(true)
  let navigate = useNavigate();
  function closeModal() {
    setIsOpen(false)
    console.log("hello");
    navigate("/orders");
  }

  return (
    <>

      <Transition appear show={isOpen} as={Fragment}>
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
                <Dialog.Panel className="w-full max-w-md transform overflow-hidden rounded-2xl bg-white text-left align-middle shadow-xl transition-all">
                    <img src="../../Ekart/Images/tick.png"/>
                  <Dialog.Title
                    as="h3"
                    className="text-lg px-6 text-center font-medium leading-6 text-gray-900"
                  >
                    Your order has been placed.
                  </Dialog.Title>
                  <div className="mt-2">
                    <p className="text-sm text-center px-6 text-gray-500">
                      Transaction Id:121223121
                    </p>
                  </div>

                  <div className="my-4 px-6 text-center">
                    <button
                      type="button"
                      className="inline-flex justify-center rounded-md border border-transparent bg-blue-100 px-4 py-2 text-sm font-medium text-blue-900 hover:bg-blue-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2 "
                      onClick={closeModal}
                    >
                      Continue Shopping
                    </button>
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
export default Success;