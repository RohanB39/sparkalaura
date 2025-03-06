import React from "react";

const categories = [
  { name: "Bestsellers", bg: "bg-yellow-100" },
  { name: "Jar Candles", bg: "bg-pink-100" },
  { name: "Ceramic Candles", bg: "bg-yellow-100" },
  { name: "Geometric Candles", bg: "bg-pink-100" },
  { name: "Sented Candles", bg: "bg-yellow-100" },
  { name: "Wooden Candles", bg: "bg-pink-100" },
];

const ButtonsSection = () => {
  return (
    <div className="w-full p-4">
      <h2 className="text-md text-center mb-4 text-gray-800">
        Shop by Categories
      </h2>
      <div className="grid grid-cols-3 sm:grid-cols-3 md:grid-cols-6 gap-3">
        {categories.map((category, index) => (
          <button
            key={index}
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
