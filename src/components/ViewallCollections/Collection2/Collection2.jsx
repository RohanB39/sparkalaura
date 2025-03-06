import React, { useEffect, useRef, useState } from "react";
import { FaStar, FaStarHalfAlt } from "react-icons/fa";
import { BsStarFill } from "react-icons/bs";
import { MdVerifiedUser } from "react-icons/md";
import { Input, Button, Typography } from "@material-tailwind/react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const productsData = [
    { id: "1", name: "Bar Wax-Candles", price: 299.99, imageUrl: "/ServiceImages/s1.webp", discount: 15 },
    { id: "2", name: "Mom's Gift Candles", price: 699.99, imageUrl: "/ServiceImages/s2.webp", discount: 10 },
    { id: "3", name: "Unique Design Candles", price: 1299.99, imageUrl: "/ServiceImages/s3.webp", discount: 12 },
    { id: "4", name: "Teddy Candles", price: 199.99, imageUrl: "/ServiceImages/s4.webp", discount: 18 },
    { id: "5", name: "Girl's Dress Candle", price: 199.99, imageUrl: "/ServiceImages/s5.webp", discount: 20 },
    { id: "6", name: "Unique Candles", price: 199.99, imageUrl: "/ServiceImages/s6.webp", discount: 43 },
];

const Collection2 = () => {
    const scrollRef = useRef(null);
    const [products, setProducts] = useState(productsData);
    const [sortOrder, setSortOrder] = useState("");  // Sorting order
    const [maxPrice, setMaxPrice] = useState(1300);  // Default max price

    // Function to apply sorting
    const handleSort = (order) => {
        setSortOrder(order);
        const sortedProducts = [...products].sort((a, b) =>
            order === "lowToHigh" ? a.price - b.price : b.price - a.price
        );
        setProducts(sortedProducts);
    };


    return (
        <div className="mb-3 mt-5">
            <section className="w-full flex flex-col md:flex-row md:items-center justify-center gap-y-4 p-5">
                <div className="flex flex-col items-center w-full">
                <h2 className="text-[14px] lg:text-2xl">
  Celebrate joy, light up moments—each candle brings warmth, happiness, and festive cheer.  
  <span className="text-red-400">Explore our exclusive festival collection and make every occasion special.</span>
</h2>

                </div>
                <div className="w-full flex flex-col md:flex-row md:items-center justify-center gap-y-4">
                    <div className="flex gap-4">
                        <select
                            onChange={(e) => handleSort(e.target.value)}
                            value={sortOrder}
                            className="px-5 py-2 border border-gray-300 text-sm"
                        >
                            <option value="">Sort By Price</option>
                            <option value="lowToHigh">Low to High</option>
                            <option value="highToLow">High to Low</option>
                        </select>
                    </div>
                </div>
            </section>

            <div
                className="grid grid-cols-2 gap-4 md:grid-cols-5 transition-all duration-500 md:overflow-x-auto scrollbar-hide p-6"
                onScroll={() => setScrollPosition(scrollRef.current?.scrollLeft || 0)}
            >
                {products.map((product, index) => (
                    <div
                        key={product.id}
                        className="bg-white shadow-lg overflow-hidden transition-transform duration-300 w-full"
                    >
                        <div className="relative group">
                            <img
                                src={product.imageUrl}
                                alt={product.name}
                                className="w-full cursor-pointer h-44 object-cover transition-transform duration-300 group-hover:scale-105 font-goudy"
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
                                {/* <MdVerifiedUser className="text-green-500 w-5 h-5" /> */}
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
        </div>
    );
};

export default Collection2