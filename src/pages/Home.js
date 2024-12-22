import React, { useContext } from "react";
import { ProductContext } from "../contexts/ProductContext";
import Product from "../components/Product";
import Hero from "../components/Hero";
import { useNavigate } from "react-router-dom";
import Sale from "../components/WhyUs";
import Customers from "../components/Customers";
import Footer from "../components/Footer";
import AboutUs from "../components/Aboutus";

const Home = () => {
  const navigate = useNavigate(); // Initialize useNavigate hook

  const handleSeeCollections = () => {
    navigate("/explore-more"); // Navigate to ExploreMore page
  };
  return (
    <div>
      <Hero />
      <Sale />
      <Customers />
      {/* <AboutUs/> */}
    </div>
  );
};

export default Home;
