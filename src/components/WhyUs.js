import React from "react";

import { useNavigate } from "react-router-dom";

function App() {
  const navigate = useNavigate(); // Initialize useNavigate hook

  const handleSeeCollections = () => {
    navigate("/explore-more"); // Navigate to ExploreMore page
  };
  return (
    <div className="relative w-full h-screen  ">
    {/* Video Background */}
    <video
      autoPlay
      muted
      loop
      playsInline
      className="absolute top-0 left-0 w-full h-full object-cover"
    >
      <source
        src="https://mdbootstrap.com/img/video/Sail-Away.mp4" // Replace this URL with a working clothing video URL
        type="video/mp4"
      />
      Your browser does not support the video tag.
    </video>
  
    {/* Text Overlay */}
    <div className="absolute inset-0 flex flex-col items-center justify-center space-y-4 w-[100%] p-20 ">
      <h2 className="text-[6vw] uppercase font-semibold bg-white mix-blend-screen text-center">
        New Fashion    <br/>       20% Off! Hurry Up!

      </h2>
      {/* <p className="text-3xl text-red-500 font-bold animate-pulse">
        20% Off! Hurry Up!
      </p> */}
  
      <button
        onClick={handleSeeCollections}
        className="bg-white text-blue-500 py-2 px-4 rounded-lg opacity-100 hover:bg-[#85b9c4] hover:text-white transition-all duration-500 ease-in-out focus:outline-none focus:ring-4 focus:ring-blue-300"
      >
        See the Collections
      </button>
    </div>
  </div>
  
  );
}

export default App;
