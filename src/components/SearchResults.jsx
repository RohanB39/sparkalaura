import React, { useState, useRef, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import SmallNav from "./SmallNav";
import Navbar from "./Navbar";

const SearchResults = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const scrollRef = useRef(null);
  const [scrollPosition, setScrollPosition] = useState(0);
  const [loading, setLoading] = useState(true);
  const searchQuery = new URLSearchParams(location.search).get("q");

  // Dummy data (Replace this with API fetch logic)
  const productsData = [
    { id: "1", name: "Bar Wax-Candles", price: 299.99, imageUrl: "/ServiceImages/s1.webp", discount: 15 },
    { id: "2", name: "Mom's Gift Candles", price: 699.99, imageUrl: "/ServiceImages/s2.webp", discount: 10 },
    { id: "3", name: "Unique Design Candles", price: 1299.99, imageUrl: "/ServiceImages/s3.webp", discount: 12 },
    { id: "4", name: "Teddy Candles", price: 199.99, imageUrl: "/ServiceImages/s4.webp", discount: 18 },
    { id: "5", name: "Girl's Dress Candle", price: 199.99, imageUrl: "/ServiceImages/s5.webp", discount: 20 },
    { id: "6", name: "Unique Candles", price: 199.99, imageUrl: "/ServiceImages/s6.webp", discount: 43 },
  ];

  // Prioritize matching results
  let matchedResults = [];
  let otherResults = [];

  productsData.forEach((product) => {
    if (searchQuery && product.name.toLowerCase().includes(searchQuery.toLowerCase())) {
      matchedResults.push(product);
    } else {
      otherResults.push(product);
    }
  });

  const sortedProducts = [...matchedResults, ...otherResults];

  // Simulate API loading effect
  useEffect(() => {
    setLoading(true);
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1000); // Simulate network delay
    return () => clearTimeout(timer);
  }, [searchQuery]);

  return (
    <div className="w-full max-w-6xl mx-auto p-6">
      {/* ✅ Fixed Navbar */}
      <div className="fixed top-0 left-0 w-full z-50 bg-black/80 backdrop-blur-md shadow-md">
        <SmallNav />
        <Navbar />
        <h2 className="text-md text-black bg-white py-3 px-5">
          Search Results for "<span className="text-yellow-500">{searchQuery}</span>"
        </h2>
      </div>

      {/* ✅ Show Loading Animation */}
      {loading ? (
        <div className="flex justify-center items-center h-screen mt-10">
          <div className="w-12 h-12 border-4 border-yellow-500 border-dotted rounded-full animate-spin"></div>
        </div>
      ) : (
        <div
          ref={scrollRef}
          className="grid grid-cols-2 gap-4 md:grid-cols-5 mt-48 transition-all duration-500 md:overflow-x-auto scrollbar-hide animate-fade-in"
          onScroll={() => setScrollPosition(scrollRef.current?.scrollLeft || 0)}
        >
          {sortedProducts.map((product) => (
            <div
              key={product.id}
              className="bg-white shadow-lg overflow-hidden transition-transform duration-300 w-full"
            >
              <div className="relative group">
                <img
                  src={product.imageUrl}
                  alt={product.name}
                  className="w-full cursor-pointer h-44 object-cover transition-transform duration-300 group-hover:scale-105"
                  onError={(e) => {
                    e.target.src = "https://images.unsplash.com/photo-1590479773265-7464e5d48118";
                  }}
                  loading="lazy"
                />
              </div>
              <div className="p-2">
                <div className="flex items-center justify-between mb-2">
                  <h3
                    className="text-[12px] text-gray-800 cursor-pointer hover:underline"
                    onClick={() => navigate(`/product/${product.id}`, { state: { product } })}
                  >
                    {product.name}
                  </h3>
                </div>
                <div className="flex flex-col mb-2">
                  <h3 className="text-[10px] text-gray-800">Sparkle Aura</h3>
                  <span className="text-sm text-gray-900">
                    Rs. {(product.price * (1 - product.discount / 100)).toFixed(2)}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default SearchResults;
