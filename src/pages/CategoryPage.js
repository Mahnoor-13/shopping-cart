import React, { useContext } from "react";
import { useParams } from "react-router-dom";
import { ProductContext } from "../contexts/ProductContext";
import Product from "../components/Product";
import Hero from "../components/Hero";

const CategoryPage = () => {
  const { category } = useParams(); // Get the category from the URL
  const { products } = useContext(ProductContext);

  // Filter products based on the selected category
  const filteredProducts = products.filter(
    (item) => item.category.toLowerCase() === category.toLowerCase()
  );

  return (
    <div>
      <Hero />
      <section className="py-20">
        <div className="container mx-auto">
          <h1 className="text-3xl font-semibold mb-10 text-center">
            {category.charAt(0).toUpperCase() + category.slice(1)} Collection
          </h1>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-[30px]">
            {filteredProducts.length > 0 ? (
              filteredProducts.map((product) => (
                <Product product={product} key={product.id} />
              ))
            ) : (
              <p>No products available in this category.</p>
            )}
          </div>
        </div>
      </section>
    </div>
  );
};

export default CategoryPage;
