import React, { useState } from "react";
import Navbar from "../../components/Navbar";
import SmallNav from "../../components/SmallNav";
import { Link, useNavigate } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { FaTrash, FaChevronLeft } from "react-icons/fa";
import emptyCart from "/images/emptyCart.png";


const Cart = () => {
    const [cartItems, setCartItems] = useState([
        {
            id: "1",
            name: "Bar Wax-Candles",
            preffer: "firstPage",
            price: 299.99,
            quantity: 1,
            imageUrl: "/ServiceImages/s1.webp",
            totalReviews: 128,
            discount: 15,
            images: ["/ServiceImages/s1.webp", "/ServiceImages/s2.webp"],
            stars: "3.5",
            description: "Handcrafted wax candles with a rich aroma and long burn time, perfect for relaxation and decoration.",
            category: "BestSellers",
            collection: "Festival",
            brand: "Sparkle Aura",
            burnTime: "40 hours",
            weight: "500g",
            dimensions: "10cm x 7cm x 7cm",
            material: "Soy Wax",
            fragranceStrength: 4,
            availability: "In Stock",
            safetyInstructions: "Keep away from flammable objects. Do not leave unattended while burning.",
            bestFor: ["Home Decor", "Relaxation", "Gifting"],
            colors: ["Blue", "Black", "White"],
            scents: ["Vanilla", "Lavender", "Sandalwood"]
        },
        {
            id: "2",
            name: "Mom's Gift Candles",
            preffer: "firstPage",
            price: 699.99,
            quantity: 1,
            imageUrl: "/ServiceImages/s2.webp",
            totalReviews: 256,
            discount: 10,
            images: ["/ServiceImages/s3.webp", "/ServiceImages/s4.webp"],
            stars: "4.2",
            description: "Beautifully crafted candles with a soft fragrance, perfect for gifting and home decor.",
            category: "JarCandles",
            collection: "Festival",
            brand: "Candle Delight",
            burnTime: "50 hours",
            weight: "600g",
            dimensions: "12cm x 8cm x 8cm",
            material: "Beeswax",
            fragranceStrength: 5,
            availability: "In Stock",
            safetyInstructions: "Trim the wick to 1/4 inch before each burn. Avoid drafts.",
            bestFor: ["Gifting", "Romantic Dinners", "Home Fragrance"],
            colors: ["Pink", "Red", "White"],
            scents: ["Rose", "Jasmine", "Coconut"]
        }
    ]);

    const navigate = useNavigate();

    // Calculate subtotal
    const subtotal = cartItems.reduce((acc, item) => acc + item.price * item.quantity, 0);

    // Calculate discount
    const discountAmount = cartItems.reduce((acc, item) => acc + (item.price * item.quantity * item.discount) / 100, 0);

    // Tax (10%)
    const tax = (subtotal - discountAmount) * 0.1;

    // Store pickup fee (optional)
    const storePickupFee = 99;

    // Final total calculation
    const total = subtotal - discountAmount + tax + storePickupFee;

    // Handle quantity increase
    const increaseQuantity = (id) => {
        setCartItems(cartItems.map(item =>
            item.id === id ? { ...item, quantity: item.quantity + 1 } : item
        ));
    };

    // Handle quantity decrease (prevent negative values)
    const decreaseQuantity = (id) => {
        setCartItems(cartItems.map(item =>
            item.id === id ? { ...item, quantity: Math.max(1, item.quantity - 1) } : item
        ));
    };

    // Handle item removal
    const removeItem = (id) => {
        setCartItems(cartItems.filter(item => item.id !== id));
    };

    return (
        <>
            <div className="fixed top-0 left-0 w-full z-50 bg-white border-b shadow-sm">
                <SmallNav />
                <Navbar />
            </div>
            
            <div className="bg-gray-50 min-h-screen pt-24 pb-8 px-4">
                <div className="max-w-2xl mx-auto">
                    <div className="flex items-center justify-between mb-6">
                        <button 
                            onClick={() => navigate(-1)}
                            className="flex items-center gap-2 text-gray-600 hover:text-indigo-600"
                        >
                            <FaChevronLeft className="w-4 h-4" />
                            <span className="font-medium">Back</span>
                        </button>
                        <h2 className="text-2xl font-bold text-gray-900">Your Cart</h2>
                        <div className="w-10"></div> {/* Spacer for alignment */}
                    </div>

                    {cartItems.length === 0 ? (
                        <div className="flex flex-col items-center text-center py-12 px-4">
                            <img src={emptyCart} alt="Empty Cart" className="w-48 h-48 mb-6" />
                            <h3 className="text-xl font-semibold text-gray-800 mb-2">Your cart feels lonely</h3>
                            <p className="text-gray-500">Let's add some amazing products!</p>
                            <div className="flex gap-2">
                            <Link to="/login" className="text-blue-600 mb-6 underline">Login</Link><span>for better checkout experiance</span>
                            </div>
                            <Link 
                                to="/viewAllCollection" 
                                className="bg-yellow-600 text-white px-8 py-3 font-medium hover:bg-yellow-700 transition-colors"
                            >
                                Start Shopping
                            </Link>
                        </div>
                    ) : (
                        <div className="space-y-6">
                            <AnimatePresence>
                                {cartItems.map((item) => (
                                    <motion.div
                                        key={item.id}
                                        className="bg-white shadow-sm p-4"
                                        initial={{ opacity: 0, y: 20 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        exit={{ opacity: 0, x: -50 }}
                                        transition={{ duration: 0.2 }}
                                    >
                                        <div className="flex gap-4">
                                            <img 
                                                src={item.imageUrl} 
                                                alt={item.name}
                                                className="w-20 h-20 object-cover" 
                                            />
                                            
                                            <div className="flex-1">
                                                <div className="flex justify-between items-start">
                                                    <h3 className="text-sm text-gray-900">{item.name}</h3>
                                                    <button 
                                                        onClick={() => removeItem(item.id)}
                                                        className="text-gray-400 hover:text-red-500 transition-colors"
                                                    >
                                                        <FaTrash className="w-3 h-3" />
                                                    </button>
                                                </div>
                                                
                                                <div className="mt-2 flex items-center justify-between">
                                                    <div className="flex items-center gap-3">
                                                        <button 
                                                            onClick={() => decreaseQuantity(item.id)}
                                                            className="w-5 h-5 rounded-lg bg-gray-100 flex items-center justify-center hover:bg-gray-200"
                                                        >
                                                            -
                                                        </button>
                                                        <span className="text-sm">{item.quantity}</span>
                                                        <button 
                                                            onClick={() => increaseQuantity(item.id)}
                                                            className="w-5 h-5 rounded-lg bg-gray-100 flex items-center justify-center hover:bg-gray-200"
                                                        >
                                                            +
                                                        </button>
                                                    </div>
                                                    <p className="text-md text-yellow-600">
                                                        Rs. {(item.price * item.quantity).toFixed(2)}
                                                    </p>
                                                </div>
                                                
                                                {item.discount > 0 && (
                                                    <div className="mt-2 flex items-center gap-2">
                                                        <span className="text-sm text-gray-500 line-through">
                                                            Rs. {item.price}
                                                        </span>
                                                        <span className="text-[10px] bg-green-100 text-green-700 px-2 py-1">
                                                            {item.discount}% OFF
                                                        </span>
                                                    </div>
                                                )}
                                            </div>
                                        </div>
                                    </motion.div>
                                ))}
                            </AnimatePresence>

                            {/* Order Summary */}
                            <div className="bg-white shadow-sm p-4">
                                <h3 className="text-md font-bold mb-4">Order Summary</h3>
                                
                                <div className="space-y-3">
                                    <div className="flex text-sm justify-between text-gray-600">
                                        <span>Subtotal ({cartItems.length} items)</span>
                                        <span>Rs. {subtotal.toFixed(2)}</span>
                                    </div>
                                    <div className="flex text-sm justify-between text-green-600">
                                        <span>Discount</span>
                                        <span>- Rs. {discountAmount.toFixed(2)}</span>
                                    </div>
                                    <div className="flex text-sm justify-between text-gray-600">
                                        <span>Tax (10%)</span>
                                        <span>Rs. {tax.toFixed(2)}</span>
                                    </div>
                                    <div className="flex text-sm justify-between text-gray-600">
                                        <span>Service Fee</span>
                                        <span>Rs. {storePickupFee.toFixed(2)}</span>
                                    </div>
                                    
                                    <div className="border-t pt-3 mt-3">
                                        <div className="flex text-sm justify-between font-bold text-gray-900">
                                            <span>Total</span>
                                            <span>Rs. {total.toFixed(2)}</span>
                                        </div>
                                    </div>
                                </div>

                                <button 
                                    className="w-full bg-yellow-600 text-white py-3.5 font-medium hover:bg-indigo-700 mt-6 transition-colors"
                                    disabled={cartItems.length === 0}
                                >
                                    Proceed to Checkout
                                </button>
                            </div>
                        </div>
                    )}
                </div>
            </div>
        </>
    );
};

export default Cart;
