import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useDispatch, useSelector } from "react-redux";
import { fetchProducts } from "../../../redux/slices/productSlice";

const Collection2 = () => {
    const { products, loading, error } = useSelector((state) => state.products);
    const [sortedProducts, setSortedProducts] = useState(products);
    const [sortOrder, setSortOrder] = useState("");
    const navigate = useNavigate();

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchProducts());
    }, [dispatch]);

    // Function to apply sorting
    const handleSort = (order) => {
        setSortOrder(order);
        const sortedProducts = [...products].sort((a, b) =>
            order === "lowToHigh" ? a.price - b.price : b.price - a.price
        );
        setSortedProducts(sortedProducts);
    };

    return (
        <div className="mb-3 mt-5">
            <section className="w-full flex flex-col md:flex-row md:items-center justify-center gap-y-4 p-5">
                <div className="flex flex-col items-center w-full bg-pink-200 p-3">
                    <h2 className="text-[14px] lg:text-2xl font-semibold">
                        Explore our exclusive Festive collection.
                    </h2>
                </div>
                <div className="w-full flex flex-col md:flex-row md:items-center justify-center gap-y-4">
                    <div className="w-full flex flex-col md:flex-row md:items-center justify-center gap-y-4">
                        <div className="flex gap-4 w-full">
                            <select
                                onChange={(e) => handleSort(e.target.value)}
                                value={sortOrder}
                                className="px-5 w-full outline-none py-2 border border-gray-300 text-sm"
                            >
                                <option value="">Sort By Price</option>
                                <option value="lowToHigh">Low to High</option>
                                <option value="highToLow">High to Low</option>
                            </select>
                        </div>
                    </div>
                </div>
            </section>

            <div className="grid grid-cols-2 gap-4 md:grid-cols-5 transition-all duration-500 md:overflow-x-auto scrollbar-hide p-6">
                {sortedProducts.filter((product) => product.collection === "Festival").length === 0 ? (
                    // ✅ Show message if no products are found
                    <div className="col-span-2 md:col-span-5 text-center text-gray-600 text-lg font-semibold">
                        No products available in the "Festival" collection. 💔
                    </div>
                ) : (
                    sortedProducts
                        .filter((product) => product.collection === "Festival")
                        .map((product, index) => {
                            const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.2 });

                            return (
                                <motion.div
                                    ref={ref}
                                    key={product.id}
                                    initial={{ opacity: 0, y: 30 }}
                                    animate={{ opacity: inView ? 1 : 0, y: inView ? 0 : 30 }}
                                    transition={{ duration: 0.5, delay: index * 0.1 }}
                                    className={`bg-white shadow-lg overflow-hidden transition-transform duration-300 w-full ${product.discount > 1 ? "hover:shadow-2xl transform hover:scale-105 text-gray-900" : ""
                                        }`}
                                    onClick={() =>
                                        navigate(`/productDetailsFromCollection/${product.productId}`, { state: { product } })
                                    }
                                >
                                    {/* Product Image */}
                                    <div className="relative group">
                                        <img
                                            src={product.imageUrl}
                                            alt={product.name}
                                            className={`w-full cursor-pointer h-44 object-cover transition-transform duration-300 group-hover:scale-105 font-goudy ${product.discount > 1 ? "h-40 md:h-60" : ""
                                                }`}
                                            onError={(e) => {
                                                e.target.src = "https://images.unsplash.com/photo-1590479773265-7464e5d48118";
                                            }}
                                            loading="lazy"
                                        />
                                        {product.discount > 1 && (
                                            <span className="absolute top-2 left-2 bg-red-500 text-white text-[8px] font-bold px-2 py-1 rounded-full">
                                                {product.discount}% OFF
                                            </span>
                                        )}
                                    </div>

                                    {/* Product Info */}
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
                                            <div className="flex items-center justify-start gap-2 mt-2">
                                                {product.discount > 1 && (
                                                    <span className="text-[10px] line-through">Rs. {product.price}</span>
                                                )}
                                                <span className="text-sm text-gray-900">
                                                    Rs. {(product.price * (1 - product.discount / 100)).toFixed(2)}
                                                </span>
                                            </div>
                                        </div>
                                    </div>
                                </motion.div>
                            );
                        })
                )}
            </div>
        </div>
    );
};

export default Collection2