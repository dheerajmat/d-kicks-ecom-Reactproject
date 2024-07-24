import React, { useContext } from 'react';
import { CartContext } from '../CartContext';
import { Link } from 'react-router-dom';

export function CartOne() {
  const { cartItems } = useContext(CartContext);

  // Function to calculate total price
  const calculateTotalPrice = () => {
    return cartItems.reduce((total, product) => {
      // Extract numerical part of the price string and convert it to a number
      const price = parseFloat(product.price.replace(/[^\d.]/g, ''));
      return total + price;
    }, 0);
  };

  return (
    <div className="mx-auto flex max-w-4xl flex-col space-y-4 p-6 px-2 sm:p-10 sm:px-2">
      <ul className="flex flex-col divide-y divide-gray-200">
        {cartItems.map((product) => (
          <li key={product.id} className="flex flex-col py-6 sm:flex-row sm:justify-between">
            <div className="flex w-full space-x-2 sm:space-x-4">
              <img
                className="h-[1000x] w-[650px] flex-shrink-0 rounded object-contain outline-none dark:border-transparent sm:h-32 sm:w-32"
                src={product.images[0]}
                alt={product.name}
              />
              <div className="flex w-full flex-col justify-between pb-4">
                <div className="flex w-full justify-between space-x-2 pb-2">
                  <div className="space-y-1">
                    <h3 className="text-lg font-semibold leading-snug sm:pr-8">{product.name}</h3>
                    <p className="text-sm">{product.color}</p>
                  </div>
                  <div className="text-right">
                    <p className="text-lg font-semibold">{product.price}</p>
                  </div>
                </div>
                <div className="flex divide-x text-sm">
                  <button type="button" className="flex items-center space-x-2 px-2 py-1 pl-0">
                    <span>Remove</span>
                  </button>
                  <button type="button" className="flex items-center space-x-2 px-2 py-1">
                    <span>Add to favorites</span>
                  </button>
                </div>
              </div>
            </div>
          </li>
        ))}
      </ul>
      <div className="space-y-1 text-right">
        <p>
          Total amount: <span className="font-semibold">{calculateTotalPrice()}₹</span>
        </p>
      </div>
      <div className="flex justify-end space-x-4">
        <Link to="/"
          type="button"
          className="rounded-md border border-black px-3 py-2 text-sm font-semibold text-black shadow-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
        >
          Back to shop
        </Link>
        <Link to="/Checkout"
          type="button"
          className="rounded-md border border-black px-3 py-2 text-sm font-semibold text-black shadow-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
        >
          Checkout
        </Link>
      </div>
    </div>
  );
}
