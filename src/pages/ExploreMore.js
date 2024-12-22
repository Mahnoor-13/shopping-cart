import React, { useContext } from "react";
import { ProductContext } from "../contexts/ProductContext";
import Product from "../components/Product";
import { useNavigate } from "react-router-dom"; // Import useNavigate
import back from "../assets/back.png";

const ExploreMore = () => {
  const navigate = useNavigate(); // Initialize useNavigate hook

  // Get products from product context
  const { products } = useContext(ProductContext);

  // Filter men's clothing, men's jewelry, women's clothing, and women's jewelry
  const menClothing = products.filter(
    (item) => item.category === "men's clothing"
  );
  const menJewelry = products.filter(
    (item) => item.category === "jewelery" && item.subcategory === "men"
  );
  const womenClothing = products.filter(
    (item) => item.category === "women's clothing"
  );
  const womenJewelry = products.filter((item) => item.category === "jewelery");

  // Function to handle back navigation
  const handleBack = () => {
    navigate(-1); // Navigate back to the previous page
  };

  return (
    <section className="py-20">
      {/* Back Button */}
      <button onClick={handleBack} className=" p-20">
        <img src={back} className="h-5 w-5" />
      </button>

      <div className="container mx-auto">
        <h1 className="text-3xl font-semibold mb-10 text-center color-[#fff] ">
          Explore Our Products
        </h1>

        {/* Men's Collection */}
        <h2 className="text-2xl font-semibold mb-9 py-9 text-center">
          Men's Collection
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 lg:mx-8 gap-[30px] max-w-sm mx-auto md:max-w-none md:mx-0">
          {menClothing.map((product) => {
            return <Product product={product} key={product.id} />;
          })}
        </div>

        {/* Women's Collection */}
        <h2 className="text-2xl font-semibold mb-9 py-9 text-center">
          Women's Collection
        </h2>

        {/* Women's Clothing */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 lg:mx-8 gap-[30px] max-w-sm mx-auto md:max-w-none md:mx-0">
          {womenClothing.map((product) => {
            return <Product product={product} key={product.id} />;
          })}
        </div>

        {/* Women's Jewelry */}
        <h2 className="text-2xl font-semibold mb-9 py-9 text-center">
          Women's Jewelry
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 lg:mx-8 gap-[30px] max-w-sm mx-auto md:max-w-none md:mx-0">
          {womenJewelry.map((product) => {
            return <Product product={product} key={product.id} />;
          })}
        </div>
      </div>
    </section>
  );
};

export default ExploreMore;
