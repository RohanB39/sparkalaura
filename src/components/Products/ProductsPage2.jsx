import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { MdVerifiedUser } from "react-icons/md";
import MarqueeText from "../MarqueeText";

const products = [
    { id: "1", name: "Bar Wax-Candles", price: 299.99, imageUrl: "/ServiceImages/s1.webp", totalReviews: 128, discount: 15 },
    { id: "2", name: "Mom's Gift Candles", price: 699.99, imageUrl: "/ServiceImages/s2.webp", totalReviews: 256, discount: 10 },
    { id: "3", name: "Unique Design Candles", price: 1299.99, imageUrl: "/ServiceImages/s3.webp", totalReviews: 340, discount: 12 },
    { id: "3", name: "Unique Design Candles", price: 1299.99, imageUrl: "/ServiceImages/s3.webp", totalReviews: 340, discount: 12 },
    { id: "3", name: "Unique Design Candles", price: 1299.99, imageUrl: "/ServiceImages/s3.webp", totalReviews: 340, discount: 12 },
    { id: "3", name: "Unique Design Candles", price: 1299.99, imageUrl: "/ServiceImages/s3.webp", totalReviews: 340, discount: 12 },
];

const offerText = {
    offertext: "----------------Buy 2 and get 30% off-------------------"
}

const ProductsPage2 = () => {
    const navigate = useNavigate();

    return (
        <div className="mb-6 px-4 text-white">
            <section className=" text-center">
                <p className="text-yellow-500 md:text-lg">{offerText.offertext}</p>
                <p className="text-blue-500 md:text-sm">...Special Offers Only For You...</p>
            </section>

            <div className="relative mt-6 overflow-x-auto scrollbar-hide cursor-pointer">
                <div className="flex space-x-6 snap-x snap-mandatory px-4 py-2">
                    {products.map((product) => (
                        <div 
                            key={product.id} 
                            className="snap-start bg-white text-gray-900 shadow-lg hover:shadow-2xl transition-transform transform hover:scale-105 overflow-hidden w-72 flex-shrink-0"
                        >
                            <div className="relative">
                                <img
                                    src={product.imageUrl}
                                    alt={product.name}
                                    className="w-full h-60 object-cover"
                                    onError={(e) => { e.target.src = "https://via.placeholder.com/300"; }}
                                />
                                <span className="absolute top-2 left-2 bg-red-500 text-white text-xs font-bold px-3 py-1 rounded-full">
                                    {product.discount}% OFF
                                </span>
                            </div>

                            {/* Product Info */}
                            <div className="p-4">
                                <h3
                                    className="text-sm cursor-pointer hover:text-yellow-600"
                                    onClick={() => navigate(`/product/${product.id}`, { state: { product } })}
                                >
                                    {product.name}
                                </h3>
                                <p className="text-[10px]">Sparkle Aura</p>
                                <div className="flex items-center justify-between mt-2">
                                    <span className="text-sm line-through">
                                        Rs. {product.price}
                                    </span>
                                    <span className="text-sm">
                                        Rs. {(product.price * (1 - product.discount / 100)).toFixed(2)}
                                    </span>
                                    <MdVerifiedUser className="text-green-500 w-6 h-6" />
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
            <style>
                {`
                .scrollbar-hide::-webkit-scrollbar {
                    display: none;
                }
                .scrollbar-hide {
                    -ms-overflow-style: none;
                    scrollbar-width: none;
                }
                `}
            </style>
        </div>
    );
};

export default ProductsPage2;
