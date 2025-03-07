import { useState, useEffect } from "react";
import { FiShoppingCart, FiHeart, FiStar } from "react-icons/fi";
import { useLocation } from "react-router-dom";
import Navbar from "../Navbar";
import SmallNav from "../SmallNav";
import Collection1 from "../ViewallCollections/Collection1/Collection1";

const ProductDetail = () => {
    const [selectedImage, setSelectedImage] = useState(0);
    const [quantity, setQuantity] = useState(1);
    const location = useLocation();
    const product = location.state?.product;
    const [showNavbar, setShowNavbar] = useState(true);
    return (
        <>
            {/* Sticky Navbar with Animation */}
            <div className="fixed top-0 left-0 w-full z-50 bg-black/80 backdrop-blur-md shadow-md">
                <SmallNav />
                <Navbar />
            </div>
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 mt-20">
                <div className="flex flex-col md:flex-row gap-8">
                    <div className="md:w-1/2 space-y-4">
                        <div className="aspect-w-3 aspect-h-4">
                            <img
                                src={product.imageUrl}
                                alt={product.name}
                                className="w-full h-full object-cover rounded-lg"
                            />
                        </div>
                        <div className="grid grid-cols-4 gap-4">
                            {product.images.map((image, index) => (
                                <button
                                    key={index}
                                    onClick={() => setSelectedImage(index)}
                                    className={`aspect-w-1 aspect-h-1 ${selectedImage === index ? "ring-2 ring-blue-500" : ""}`}
                                >
                                    <img
                                        src={image}
                                        alt={`Product view ${index + 1}`}
                                        className="w-full h-full object-cover rounded-md"
                                    />
                                </button>
                            ))}
                        </div>
                    </div>

                    <div className="md:w-1/2 space-y-6">
                        <div>
                            <h1 className="text-3xl font-bold text-gray-900">{product.name}</h1>
                            <p className="text-2xl font-semibold text-gray-900 mt-2">Rs. {product.price}</p>
                        </div>

                        <div className="flex items-center space-x-2">
                            <div className="flex text-yellow-400">
                                {[...Array(5)].map((_, index) => (
                                    <FiStar
                                        key={index}
                                        className={`w-5 h-5 ${index < Math.floor(product.starts) ? "fill-current" : ""}`}
                                    />
                                ))}
                            </div>
                            <span className="text-gray-500">({product.totalReviews} reviews)</span>
                        </div>

                        <div>
                            <h3 className="text-sm font-medium text-gray-900">Description</h3>
                            <p className="mt-2 text-gray-600">{product.discription}</p>
                        </div>

                        <div>
                            <h3 className="text-sm font-medium text-gray-900">Color</h3>
                            <div className="grid grid-cols-3 gap-2 mt-2">
                                {product.colors.map((color) => (
                                    <button
                                        key={color}
                                        className="border rounded-md py-2 text-sm font-medium hover:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-500"
                                    >
                                        {color}
                                    </button>
                                ))}
                            </div>
                        </div>

                        <div>
                            <h3 className="text-sm font-medium text-gray-900">Quantity</h3>
                            <div className="flex items-center space-x-3 mt-2">
                                <button
                                    onClick={() => setQuantity(Math.max(1, quantity - 1))}
                                    className="px-3 py-1 border rounded-md"
                                >
                                    -
                                </button>
                                <span className="text-gray-900">{quantity}</span>
                                <button
                                    onClick={() => setQuantity(quantity + 1)}
                                    className="px-3 py-1 border rounded-md"
                                >
                                    +
                                </button>
                            </div>
                        </div>

                        <div className="flex space-x-4">
                            <button className="flex-1 bg-blue-600 text-white py-3 px-6 rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2">
                                Buy Now
                            </button>
                            <button className="flex-1 border border-blue-600 text-blue-600 py-3 px-6 rounded-md hover:bg-blue-50 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2">
                                Add to Cart
                            </button>
                            <button className="p-3 border rounded-md hover:bg-gray-50">
                                <FiHeart className="w-6 h-6 text-gray-600" />
                            </button>
                        </div>
                    </div>
                </div>
            </div>
            <div className="mt-10">
                <Collection1 />
            </div>
        </>

    );
};

export default ProductDetail;
