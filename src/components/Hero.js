import React from "react";
import shopping_image from "../assets/shopping1.jpg";

import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <section className="h-[1100px] bg-hero bg-no-repeat bg-cover bg-center py-50">
      <div className="container mx-auto flex justify-around items-center h-full flex-col md:flex-row md:justify-between mt-[129px] md:mt-0">
        {/* text */}
        <div className="flex flex-col justify-center md:mb-0 mb-8">
          <div className="font-semibold flex items-center uppercase">
            <div className="w-10 h-[2px] mr-3 bg-cyan-700"></div>Hot Trend
          </div>
          <h1 className="uppercase text-[50px] md:text-[70px] leading-[1.1] font-semibold mb-4">
            Your Favorites
            <br />
            <span className="font-light">Don't Miss Out! ⭐</span>
          </h1>
          <Link
            to={"/"}
            className="self-start uppercase font-semibold border-b-2 border-primary"
          >
            Discover the joy of effortless shopping with handpicked collections
            tailored just for you
          </Link>
        </div>

        <div className="shopping_div">
          <img src={shopping_image} />
        </div>
      </div>
    </section>
  );
};

export default Hero;
