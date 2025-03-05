import React, { useEffect, useRef, useState } from "react";
import { MdVerifiedUser } from "react-icons/md";
import { motion } from "framer-motion";

const productsData = [
    { id: "1", name: "Bar Wax-Candles", price: 299.99, imageUrl: "/ServiceImages/s1.webp", discount: 15 },
    { id: "2", name: "Mom's Gift Candles", price: 699.99, imageUrl: "/ServiceImages/s2.webp", discount: 10 },
    { id: "3", name: "Unique Design Candles", price: 1299.99, imageUrl: "/ServiceImages/s3.webp", discount: 12 },
    { id: "4", name: "Teddy Candles", price: 199.99, imageUrl: "/ServiceImages/s4.webp", discount: 18 },
    { id: "5", name: "Girl's Dress Candle", price: 199.99, imageUrl: "/ServiceImages/s5.webp", discount: 20 },
    { id: "6", name: "Unique Candles", price: 199.99, imageUrl: "/ServiceImages/s6.webp", discount: 43 },
];

const Collection1 = () => {
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

    // Function to apply filtering based on price range
    const handleFilter = (price) => {
        setMaxPrice(price);
        const filteredProducts = productsData.filter(product => product.price <= price);
        setProducts(filteredProducts);
    };

    return (
        <div className="mb-3 p-6">
            <section className="w-full flex flex-col md:flex-row md:items-center justify-center gap-y-4">
            <div className="flex flex-col items-center w-full">
                <h2 className="text-lg lg:text-2xl">Valentine's Day Collection 💝</h2>
            </div>
                <div className="w-full flex flex-col md:flex-row md:items-center justify-center gap-y-4">
                    <div className="flex gap-4">
                        <select
                            onChange={(e) => handleSort(e.target.value)}
                            value={sortOrder}
                            className="p-2 border border-gray-300 rounded-md text-sm"
                        >
                            <option value="">Sort By Price</option>
                            <option value="lowToHigh">Low to High</option>
                            <option value="highToLow">High to Low</option>
                        </select>

                        {/* Price Range Filter */}
                        <div className="flex items-center gap-2">
                            <input
                                type="range"
                                min="199"
                                max="1300"
                                step="50"
                                value={maxPrice}
                                onChange={(e) => handleFilter(e.target.value)}
                                className="cursor-pointer bg-amber-200"
                            />
                            <span className="text-sm text-gray-700">{maxPrice} Rs</span>
                        </div>
                    </div>
                </div>
            </section>

            <motion.div className="flex gap-6 overflow-x-auto scrollbar-hide p-6 custom-scrollbar">
                {products.length > 0 ? (
                    products.map((product) => (
                        <motion.div key={product.id} className="bg-white shadow-lg p-4 w-72 min-w-[280px]">
                            <div className="relative group">
                                <img
                                    src={product.imageUrl}
                                    alt={product.name}
                                    className="w-full h-56 object-cover transition-transform duration-300 group-hover:scale-105"
                                    onError={(e) => {
                                        e.target.src = "https://via.placeholder.com/280";
                                    }}
                                    loading="lazy"
                                />
                            </div>

                            <div className="mt-3">
                                <div className="flex items-center justify-between">
                                    <h3 className="text-[15px] text-gray-800">{product.name}</h3>
                                    <MdVerifiedUser className="text-green-500 w-5 h-5" />
                                </div>

                                <div className="flex items-center justify-between mt-2">
                                    <span className="text-lg font-bold text-gray-900">
                                        ₹{(product.price * (1 - product.discount / 100)).toFixed(2)}
                                    </span>
                                </div>
                            </div>
                        </motion.div>
                    ))
                ) : (
                    <p className="text-center text-gray-600">No products available in this range.</p>
                )}
            </motion.div>
        </div>
    );
};

export default Collection1;
