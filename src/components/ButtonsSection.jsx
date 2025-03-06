import React from "react";
import { useNavigate } from "react-router-dom"; // Import useNavigate

const categories = [
  { name: "Bestsellers", bg: "bg-yellow-100", path: "/greenWall" },
  { name: "Jar Candles", bg: "bg-pink-100", path: "/gifting" },
  { name: "Ceramic Candles", bg: "bg-yellow-100", path: "/rentalPlant" },
  { name: "Geometric Candles", bg: "bg-pink-100", path: "/gardenMaintainance" },
  { name: "Scented Candles", bg: "bg-yellow-100", path: "/pottedGarden" },
  { name: "Wooden Candles", bg: "bg-pink-100", path: "/woodenCandle" },
];

const ButtonsSection = () => {
  const navigate = useNavigate(); // Initialize navigation

  return (
    <div className="w-full p-4">
      <h2 className="text-md text-center mb-4 text-gray-800">Shop by Categories</h2>
      <div className="grid grid-cols-3 sm:grid-cols-3 md:grid-cols-6 gap-3">
        {categories.map((category, index) => (
          <button
            key={index}
            onClick={() => navigate(category.path)} // Navigate on click
            className={`relative text-[10px] p-2 font-md transition-transform duration-300 active:scale-95 overflow-hidden ${category.bg}`}
          >
            {category.name}
          </button>
        ))}
      </div>
    </div>
  );
};

export default ButtonsSection;
