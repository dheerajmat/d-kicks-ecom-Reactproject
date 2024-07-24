import React, { useContext, useRef, useState } from 'react';
import { CartContext } from '../CartContext';
import confetti from 'canvas-confetti';
import Modal from 'react-modal';
import { useNavigate } from 'react-router-dom';


Modal.setAppElement('#root');

export function CheckoutTwo() {
  const { cartItems, clearCart } = useContext(CartContext);
  const [showConfetti, setShowConfetti] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [animationComplete, setAnimationComplete] = useState(false);
  const buttonRef = useRef(null);
  const navigate = useNavigate()


  const calculateTotalPrice = () => {
    return cartItems.reduce((total, product) => {
      const price = parseFloat(product.price.replace(/[^\d.]/g, ''));
      return total + price;
    }, 0).toFixed(2);
  };

  const handlePaymentClick = () => {
    const button = buttonRef.current;
    if (button) {
      // Get button position and size
      const { top, left, width, height } = button.getBoundingClientRect();
      // Fire confetti from the button's location
      confetti({
        particleCount: 100,
        angle: 90,
        origin: {
          x: (left + width / 2) / window.innerWidth,
          y: (top + height / 2) / window.innerHeight,
        },
      });

      // Show modal and handle animation
      setShowConfetti(true);
      setShowModal(true);

      // Animation complete handler
      setTimeout(() => {
        setShowConfetti(false);
        setAnimationComplete(true);
      }, 3000); // Match the duration of the confetti animation

      // Clear session storage and cart context, then redirect
      setTimeout(() => {
        sessionStorage.clear();
        clearCart();
        navigate("/");
      }, 5000); // Give some time for the animation and modal
    }
  };
  return (
    <div className="mx-auto my-4 max-w-4xl md:my-6">

      <div className="overflow-hidden rounded-xl shadow">
        <div className="grid grid-cols-1 md:grid-cols-2">
          {/* Contact Info */}
          <div className="px-5 py-6 text-gray-900 md:px-8">
            <div className="flow-root">
              <div className="-my-6 divide-y divide-gray-200">
                <div className="py-6">
                  <form>
                    <div className="mx-auto max-w-2xl px-4 lg:max-w-none lg:px-0">
                      <div>
                        <h3
                          id="contact-info-heading"
                          className="text-lg font-semibold text-gray-900"
                        >
                          Contact information
                        </h3>

                        <div className="mt-4 w-full">
                          <label
                            className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                            htmlFor="name"
                          >
                            Full Name
                          </label>
                          <input
                            className="flex h-10 w-full rounded-md border border-black/30 bg-transparent px-3 py-2 text-sm placeholder:text-gray-600 focus:outline-none focus:ring-1 focus:ring-black/30 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50"
                            type="text"
                            placeholder="Enter your name"
                            id="name"
                          ></input>
                        </div>
                      </div>
                      <hr className="my-8" />
                      <div className="mt-10">
                        <h3 className="text-lg font-semibold text-gray-900">Payment details</h3>

                        <div className="mt-6 grid grid-cols-3 gap-x-4 gap-y-6 sm:grid-cols-4">
                          <div className="col-span-3 sm:col-span-4">
                            <label
                              htmlFor="cardNum"
                              className="block text-sm font-medium text-gray-700"
                            >
                              Card number
                            </label>
                            <div className="mt-1">
                              <input
                                className="flex h-10 w-full rounded-md border border-black/30 bg-transparent px-3 py-2 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-1 focus:ring-black/30 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50"
                                type="text"
                                placeholder="4242 4242 4242 4242"
                                id="cardNum"
                              ></input>
                            </div>
                          </div>
                          <div className="col-span-2 sm:col-span-3">
                            <label
                              htmlFor="expiration-date"
                              className="block text-sm font-medium text-gray-700"
                            >
                              Expiration date (MM/YY)
                            </label>
                            <div className="mt-1">
                              <input
                                type="date"
                                name="expiration-date"
                                id="expiration-date"
                                autoComplete="cc-exp"
                                className="block h-10 w-full rounded-md border border-black/30 bg-transparent px-3 py-2 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-1 focus:ring-black/30 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50"
                              />
                            </div>
                          </div>

                          <div>
                            <label
                              htmlFor="cvc"
                              className="block text-sm font-medium text-gray-700"
                            >
                              CVC
                            </label>
                            <div className="mt-1">
                              <input
                                type="text"
                                name="cvc"
                                id="cvc"
                                autoComplete="csc"
                                className="flex h-10 w-full rounded-md border border-black/30 bg-transparent px-3 py-2 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-1 focus:ring-black/30 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50"
                              />
                            </div>
                          </div>
                        </div>
                      </div>
                      <hr className="my-8" />
                      <div className="mt-10">
                        <h3 className="text-lg font-semibold text-gray-900">Shipping address</h3>

                        <div className="mt-6 grid grid-cols-1 gap-x-4 gap-y-6 sm:grid-cols-3">
                          <div className="sm:col-span-3">
                            <label
                              htmlFor="address"
                              className="block text-sm font-medium text-gray-700"
                            >
                              Address
                            </label>
                            <div className="mt-1">
                              <input
                                type="text"
                                id="address"
                                name="address"
                                autoComplete="street-address"
                                className="flex h-10 w-full rounded-md border border-black/30 bg-transparent px-3 py-2 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-1 focus:ring-black/30 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50"
                              />
                            </div>
                          </div>

                          <div>
                            <label
                              htmlFor="city"
                              className="block text-sm font-medium text-gray-700"
                            >
                              City
                            </label>
                            <div className="mt-1">
                              <input
                                type="text"
                                id="city"
                                name="city"
                                autoComplete="address-level2"
                                className="flex h-10 w-full rounded-md border border-black/30 bg-transparent px-3 py-2 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-1 focus:ring-black/30 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50"
                              />
                            </div>
                          </div>

                          <div>
                            <label
                              htmlFor="region"
                              className="block text-sm font-medium text-gray-700"
                            >
                              State / Province
                            </label>
                            <div className="mt-1">
                              <input
                                type="text"
                                id="region"
                                name="region"
                                autoComplete="address-level1"
                                className="flex h-10 w-full rounded-md border border-black/30 bg-transparent px-3 py-2 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-1 focus:ring-black/30 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50"
                              />
                            </div>
                          </div>

                          <div>
                            <label
                              htmlFor="postal-code"
                              className="block text-sm font-medium text-gray-700"
                            >
                              Postal code
                            </label>
                            <div className="mt-1">
                              <input
                                type="text"
                                id="postal-code"
                                name="postal-code"
                                autoComplete="postal-code"
                                className="flex h-10 w-full rounded-md border border-black/30 bg-transparent px-3 py-2 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-1 focus:ring-black/30 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50"
                              />
                            </div>
                          </div>
                        </div>
                      </div>
                      <hr className="my-8" />
                      <div className="mt-10">
                        <h3 className="text-lg font-semibold text-gray-900">Billing information</h3>

                        <div className="mt-6 flex items-center">
                          <input
                            id="same-as-shipping"
                            name="same-as-shipping"
                            type="checkbox"
                            defaultChecked
                            className="h-4 w-4 rounded border-gray-300 text-black focus:ring-black"
                          />
                          <div className="ml-2">
                            <label
                              htmlFor="same-as-shipping"
                              className="text-sm font-medium text-gray-900"
                            >
                              Same as shipping information
                            </label>
                          </div>
                        </div>
                      </div>

                      <div className="mt-10 flex justify-end border-t border-gray-200 pt-6">
                      <button
                          type="button"
                          ref={buttonRef}
                          className="rounded-md bg-black px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-black/80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
                          onClick={handlePaymentClick}
                        >
                          Make payment
                        </button>
                      </div>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
          {/* Product List */}
          <div className="bg-gray-100 px-5 py-6 md:px-8">
            <div className="flow-root">
              <ul className="-my-7 divide-y divide-gray-200">
                {cartItems.map((product) => (
                  <li
                    key={product.id}
                    className="flex items-stretch justify-between space-x-5 py-7"
                  >
                    <div className="flex flex-1 items-stretch">
                      <div className="flex-shrink-0">
                        <img
                          className="h-20 w-20 rounded-lg  border-gray-200 bg-white object-contain"
                          src={product.images[0]}
                          alt={product.imageSrc}
                        />
                      </div>
                      <div className="ml-5 flex flex-col justify-between">
                        <div className="flex-1">
                          <p className="text-sm font-bold">{product.name}</p>
                          <p className="mt-1.5 text-sm font-medium text-gray-500">
                            {product.color}
                          </p>
                        </div>
                        <p className="mt-4 text-xs font-medium ">x 1</p>
                      </div>
                    </div>
                    <div className="ml-auto flex flex-col items-end justify-between">
                      <p className="text-right text-sm font-bold text-gray-900">{product.price}</p>
                      <button
                        type="button"
                        className="-m-2 inline-flex rounded p-2 text-gray-400 transition-all duration-200 hover:text-gray-900 focus:outline-none focus:ring-2 focus:ring-gray-900 focus:ring-offset-2"
                      >
                        <span className="sr-only">Remove</span>
                        {/* Add remove functionality here if needed */}
                      </button>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
            <hr className="mt-6 border-gray-200" />
            <form action="#" className="mt-6">
              <div className="sm:flex sm:space-x-2.5 md:flex-col md:space-x-0 lg:flex-row lg:space-x-2.5">
                <div className="flex-grow">
                  <input
                    className="flex w-full rounded-md border border-gray-300 bg-white px-3 py-2 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-1 focus:ring-gray-400 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50"
                    type="text"
                    placeholder="Enter coupon code"
                  />
                </div>
                <div className="mt-4 sm:mt-0 md:mt-4 lg:mt-0">
                  <button
                    type="button"
                    className="rounded-md bg-black px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-black/80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
                  >
                    Apply Coupon
                  </button>
                </div>
              </div>
            </form>
            <ul className="mt-6 space-y-3">
              <li className="flex items-center justify-between text-gray-600">
                <p className="text-sm font-medium">Sub total</p>
                <p className="text-sm font-medium">₹{calculateTotalPrice()}</p>
              </li>
              <li className="flex items-center justify-between text-gray-900">
                <p className="text-sm font-medium ">Total</p>
                <p className="text-sm font-bold ">₹{calculateTotalPrice()}</p>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <Modal
        isOpen={showModal}
        onRequestClose={() => setShowModal(false)}
        contentLabel="Order Confirmation"
        className="fixed inset-0 flex items-center justify-center p-4 bg-black/60"
        overlayClassName="fixed inset-0 bg-black/60"
      >
        <div className="bg-white p-6 rounded-lg shadow-lg text-center">
          <h2 className="text-xl font-semibold mb-4">Order Placed!</h2>
          <p className="mb-4">Your order has been placed successfully and will be delivered shortly.</p>
          <button
            className={`px-4 py-2 rounded-md bg-black text-white font-semibold ${animationComplete ? 'opacity-100' : 'opacity-0'}`}
            onClick={() => {
              setShowModal(false);
              navigate("/"); // Redirect to homepage
            }}
          >
            Go to Homepage  
          </button>
        </div>
      </Modal>
    </div>
  );
}
