import React from "react";
import shopping_image from "../assets/shopping_image.png";

import { Link } from "react-router-dom";

const AboutUs = () => {
  return (
    <section className="h-[1100px] bg-AboutUs bg-no-repeat bg-cover bg-center py-50">
      <div className="container mx-auto flex justify-around items-center h-full flex-col md:flex-row md:justify-between mt-[129px] md:mt-0">
        <div className="shopping_div">
          <img src={shopping_image} />
        </div>

        {/* text */}
        <div className="flex flex-col justify-center md:mb-0 mb-8">
          <div className="font-semibold flex items-center uppercase">
            <div className="w-10 h-[2px] mr-3 bg-cyan-700"></div>ABOUT US
          </div>
          <h1 className="uppercase text-[50px] md:text-[70px] leading-[1.1] font-semibold mb-4">
            Your Favorites
            <br />
            <span className="font-light">
                
            Our mission is to bring you high-quality,
                
                
            </span>
          </h1>
          <Link
            to={"/"}
            className="self-start uppercase font-semibold border-b-2 border-primary"
          >
            we specialize in offering a curated collection of stylish jewelry
            💍 and trendy clothing 👗.
          </Link>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
