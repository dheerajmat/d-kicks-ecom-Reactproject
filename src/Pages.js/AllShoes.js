import React, { useState, useContext } from 'react';
import { shoesData } from '../assets/data';
import { Link } from 'react-router-dom';
import { CartContext } from '../CartContext';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function AllShoes() {
  const { addToCart } = useContext(CartContext);
  const [filters, setFilters] = useState({
    category: '',
    color: '',
    size: '',
  });

  const handleAddToCart = (shoe) => {
    addToCart(shoe);
    toast.success('Added to cart successfully!', {
      position: 'top-center'
    });
  };

  const handleFilterChange = (e) => {
    setFilters({
      ...filters,
      [e.target.name]: e.target.value,
    });
  };

  const filteredShoes = (shoesData || []).filter((shoe) => {
    return (
      (!filters.category || shoe.category === filters.category) &&
      (!filters.size || shoe.sizes.includes(filters.size))
    );
  });

  // Log shoesData to check its structure
  console.log('shoesData:', shoesData);

  return (
    <>
      <h1 className='text-[40px] text-center pt-9 font-bold '>All Footwares</h1>
      
      {/* Filters Section */}
      <div className="flex justify-center space-x-4 my-6">
        <select name="category" value={filters.category} onChange={handleFilterChange} className="p-2 border rounded">
          <option value="">All Categories</option>
          <option value="Men's s">Men's s</option>
          <option value="Women's s">Women's s</option>
          <option value="Kids's s">Kids's s</option>
        </select>
        <select name="size" value={filters.size} onChange={handleFilterChange} className="p-2 border rounded">
          <option value="">All Sizes</option>
          <option value="7">7 UK</option>
          <option value="8">8 UK</option>
          <option value="9">9 UK</option>
          <option value="10">10 UK</option>
          <option value="11">11 UK</option>
        </select>
      </div>

      <div className="mx-auto grid w-full max-w-9xl items-center space-y-4 px-8 lg:px-[80px] md:px-[20px] py-10 md:grid-cols-2 md:gap-5 md:space-y-0 lg:grid-cols-3 text-center bg-gray-100;">
        {filteredShoes.map(shoe => (
          <div className="rounded-md border" key={shoe.id}>
            <div className="relative h-[350px] sm:h-[450px]">
              <img
                src={shoe.images[0]}
                alt=""
                className="absolute inset-0 h-full w-full object-cover opacity-100 hover:opacity-0"
              />
              <Link to={`/product/${shoe.id}`}>
                <img
                  src={shoe.images[2]}
                  alt=""
                  className="absolute inset-0 h-full w-full object-cover opacity-0 hover:opacity-100"
                />
              </Link>
            </div>
            <div className="p-4 bg-white">
              <h1 className="inline-flex items-center text-xl font-semibold"> {shoe.name} </h1>
              <p className="mt-3 text-[15px] text-gray-600">
                {shoe.description}
              </p>
              <div className="mt-4">
                <span className="mb-2 mr-2 inline-block rounded-full bg-gray-100 px-3 py-1 text-[15px] font-semibold text-gray-900 hover:bg-blue-400">
                  #Sneakers
                </span>
                <span className="mb-2 mr-2 inline-block rounded-full bg-gray-100 px-3 py-1 text-[15px] font-semibold text-gray-900  hover:bg-blue-400">
                  #Nike
                </span>
                <span className="mb-2 mr-2 inline-block rounded-full bg-gray-100 px-3 py-1 text-[15px] font-semibold text-gray-900  hover:bg-blue-400">
                  #Airmax
                </span>
              </div>
              <div className="mt-3 flex items-center space-x-2 text-l font-semibold">
                Price: {shoe.price}
              </div>
              <div className="mt-5 flex items-center space-x-2">
                <span className="block text-sm font-semibold">Size : </span>
                {shoe.sizes.map(size => (
                  <span key={size} className="block cursor-pointer rounded-md border border-gray-300 p-1 px-2 text-xs font-medium hover:border-blue-500">
                    {size} UK
                  </span>
                ))}
              </div>
              <button
                type="button"
                className="mt-4 w-full rounded-sm bg-black px-2 py-1.5 text-sm font-semibold text-white shadow-sm hover:bg-black/80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
                onClick={() => handleAddToCart(shoe)}
              >
                Add to Cart
              </button>
            </div>
          </div>
        ))}
      </div>
      <ToastContainer />
    </>
  );
}

export default AllShoes;
