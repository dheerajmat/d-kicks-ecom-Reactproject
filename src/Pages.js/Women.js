import React, { useContext } from 'react';
import { shoesData } from '../assets/data';
import { Link } from 'react-router-dom';
import { CartContext } from '../CartContext';
import { ToastContainer, toast } from 'react-toastify';

function Women() {
  const { addToCart } = useContext(CartContext);

  const handleAddToCart = (shoe) => {
    addToCart(shoe);
    toast.success('Added to cart successfully!', {
      position: 'top-center' // Fallback position
    });
    
  };

  const WomenShoes = shoesData.filter((shoe) => shoe.category === "Women's s");
  return (
  <>
  <div className='flex flex-col flex-wrap text-center pt-[70px]'>
      <p data-qa="subtitle" className="   text-color-black text-2xl text-opacity-100 font-semibold max-sm:text-[5px]">D-kicks <span className='text-green-600'>Force one</span>  </p>
      <h1 className="text-transparent bg-clip-text bg-gradient-to-r  from-orange-600 to-green-300 text-[65px] max-sm:text-[35px] font-bold text-orange-500 fill-orange-500">D-KICKS EASYON AND GO </h1>
    <p  className=" text-color-black text-xl text-opacity-100 font-semibold max-sm:text-[5px]">Take cushion for a run new colors in the Invincible</p>
      </div>
  <h1 className='text-[40px] text-center pt-9 font-bold '> <span className='text-pink-500'>Womens</span> Footwares</h1>
  <div className="mx-auto grid w-full max-w-9xl items-center space-y-4 px-8 lg:px-[80px] md:px-[20px] py-10 md:grid-cols-2 md:gap-5 md:space-y-0 lg:grid-cols-3 text-center bg-gray-100;">
  {/* <div className="mx-auto grid w-full max-w-7xl items-center space-y-4 px-2 py-10 md:grid-cols-2 md:gap-6 md:space-y-0 lg:grid-cols-3"></div> */}
  {WomenShoes.map((shoe) => (
    
      <div className="rounded-md border">
      <div className="relative h-[350px] sm:h-[450px]">
      <Link to={`/product/${shoe.id}`} key={shoe.id}>
  <img
    src={shoe.images[0]}
    alt=""
    className="absolute inset-0 h-full w-full object-cover opacity-100 hover:opacity-0"
  />

  <img
  
    src={shoe.images[1]}
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
            <span className="mb-2 mr-2 inline-block rounded-full bg-gray-100 px-3 py-1 text-[5] font-semibold text-gray-900  hover:bg-blue-400">
              #Nike
            </span>
            <span className="mb-2 mr-2 inline-block rounded-full bg-gray-100 px-3 py-1 text-[5] font-semibold text-gray-900  hover:bg-blue-400">
              #Airmax
            </span>
          </div>
          <div className="mt-3 flex items-center space-x-2">
            <span className="block text-sm font-semibold">Colors : </span>
            <span className="block h-4 w-4 rounded-full border-2 border-gray-300 bg-red-400"></span>
            <span className="block h-4 w-4 rounded-full border-2 border-gray-300 bg-purple-400"></span>
            <span className="block h-4 w-4 rounded-full border-2 border-gray-300 bg-orange-400"></span>
          </div>
          <div className="mt-3 flex items-center space-x-2 text-l font-semibold">
          Price: {shoe.price}
          </div>
          <div className="mt-5 flex items-center space-x-2">
            <span className="block text-sm font-semibold">Size : </span>
            <span className="block cursor-pointer rounded-md border border-gray-300 p-1 px-2 text-xs font-medium hover:border-blue-500">
            {shoe.sizes[0]} UK
            </span>
            <span className="block cursor-pointer rounded-md border border-gray-300 p-1 px-2 text-xs font-medium  hover:border-blue-500">
            {shoe.sizes[1]} UK
            </span>
            <span className="block cursor-pointer rounded-md border border-gray-300 p-1 px-2 text-xs font-medium  hover:border-blue-500">
            {shoe.sizes[2]} UK
            </span>
            <span className="block cursor-pointer rounded-md border border-gray-300 p-1 px-2 text-xs font-medium hover:border-blue-500">
            {shoe.sizes[3]} UK
            </span>
            
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
)
}

export default Women