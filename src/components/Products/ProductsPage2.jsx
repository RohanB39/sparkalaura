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
                <p className="text-yellow-500 md:text-lg text-[12px]">{offerText.offertext}</p>
                <p className="text-blue-500 md:text-sm text-[10px]">...Special Offers Only For You...</p>
            </section>

            <div className="grid grid-cols-2 gap-4 md:grid-cols-5 transition-all duration-500 p-3 py-4">
                {products.map((product) => (
                    <div
                        key={product.id}
                        className="bg-white text-gray-900 shadow-lg hover:shadow-2xl transition-transform transform hover:scale-105 overflow-hidden"
                    >
                        {/* Product Image */}
                        <div className="relative">
                            <img
                                src={product.imageUrl}
                                alt={product.name}
                                className="w-full h-40 md:h-60 object-cover"
                                onError={(e) => { e.target.src = "https://via.placeholder.com/300"; }}
                            />
                            <span className="absolute top-2 left-2 bg-red-500 text-white text-[8px] font-bold px-2 py-1 rounded-full">
                                {product.discount}% OFF
                            </span>
                        </div>

                        {/* Product Info */}
                        <div className="p-2">
                            <h3
                                className="text-[11px] cursor-pointer hover:text-yellow-600"
                                onClick={() => navigate(`/product/${product.id}`, { state: { product } })}
                            >
                                {product.name}
                            </h3>
                            <p className="text-[10px]">Sparkle Aura</p>
                            <div className="flex items-center justify-start gap-2 mt-2">
                                <span className="text-[10px] line-through">
                                    Rs. {product.price}
                                </span>
                                <span className="text-[12px]">
                                    Rs. {(product.price * (1 - product.discount / 100)).toFixed(2)}
                                </span>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
            <div className="flex justify-center items-center mt-2">
                <div className="bg-gray-500 px-10 py-3 md:px-15 text-[11px]">
                    View All Candles
                </div>
            </div>

        </div>
    );
};

export default ProductsPage2;
