import React from "react";
import CarouselBasicExample from "../component/imageslider";
import Trendingcard from "../component/Trendingcard";
import Force from "../component/Force1";
import { CartContext, CartProvider } from "../CartContext";



const Home = () => {
  return (
    <>

      <br />

      <CarouselBasicExample />

     <div className="flex flex-col flex-wrap text-center pt-[70px]">
        <p
          data-qa="subtitle"
          className="   text-color-black text-2xl text-opacity-100 font-semibold max-sm:text-[5px]"
        >
          D-kicks <span className="text-green-600">Invincible</span>{" "}
        </p>
        <h1 className="text-gradient font-bold">FEEL IT TO BELIEVE IT</h1>
      </div>

      {/* <AllProduct/> */}

      <h1 className="px-[65px] text-3xl font-semibold pt-[100px] list-disc">
        Trending & New arival{" "}
      </h1>
      <Trendingcard />

      <div className="flex flex-col flex-wrap text-center pt-[70px]">
        <p
          data-qa="subtitle"
          className="   text-color-black text-2xl text-opacity-100 font-semibold max-sm:text-[5px]"
        >
          D-kicks <span className="text-green-600">Force one</span>{" "}
        </p>
        <h1 className="text-transparent bg-clip-text bg-gradient-to-r  from-orange-600 to-green-300 text-[65px] max-sm:text-[35px] font-bold text-orange-500 fill-orange-500">
          D-KICKS EASYON AND GO{" "}
        </h1>
        <p className=" text-color-black text-xl text-opacity-100 font-semibold max-sm:text-[5px]">
          Take cushion for a run new colors in the Invincible
        </p>
      </div>

      <h1 className="px-[60px] text-4xl font-semibold pt-[100px] text-center text-green-500">
        Force 1{" "}
      </h1>
      <Force/>
      
    </>
  );
};

export default Home;
