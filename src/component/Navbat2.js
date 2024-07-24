import React from 'react'
import { Link } from 'react-router-dom';
import img from "./logo-no-background.png"

function Navbat2() {
  return (
    <>
<div className="relative w-full bg-white">
  <div className="mx-auto flex max-w-8xl items-center justify-between px-8 py-5 sm:px-6 lg:px-8 border-b-2 ">
    <div className="inline-flex items-center  space-x-2">
     <Link to='/'><img className='h-[50px] w-[120px]' src={img}></img></Link> 
    </div>
    <div className="hidden lg:block">
      <ul className="inline-flex space-x-[50px] text-[20px]">
        <li>
          <Link to="/man">Man</Link>
        </li>
        <li>
        <Link to="/women">Women</Link>
        </li>
        <li>
        <Link to="/allshoes">Shoes</Link>
        </li>
        <li>
        <Link to="/allshoes">Contect</Link>
        </li>
      </ul>
    </div>
    <div className="hidden lg:block">
      <button
        type="button"
        className="rounded-md bg-black px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-black/80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
      >
        Button text
      </button>
    </div>
    <div className="lg:hidden">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
        className="h-6 w-6 cursor-pointer"
      >
        <line x1="4" y1="12" x2="20" y2="12"></line>
        <line x1="4" y1="6" x2="20" y2="6"></line>
        <line x1="4" y1="18" x2="20" y2="18"></line>
      </svg>
    </div>
  </div>
</div>

    </>
  )
}

export default Navbat2