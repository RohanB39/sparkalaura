import React, { useState } from "react";
import Navbar from "../../components/Navbar";
import { Link } from "react-router-dom";
import emptyCart from "/images/empty-cart_15017804.png"

const Cart = () => {
    const [cartItems, setCartItems] = useState([
        {
            id: "1",
            name: "Smartwatch",
            price: 199.99,
            quantity: 1,
            imageUrl: "/ServiceImages/s1.webp",
            totalReviews: 190,
            discount: 10,
            images: [
                "/ServiceImages/s1.webp",
                "/ServiceImages/s2.webp",
                "/ServiceImages/s3.webp",
                "/ServiceImages/s4.webp",
            ],
            stars: "3.5",
            description: "Premium quality leather jacket with a modern design, quilted lining, and adjustable cuffs for ultimate style and comfort.",
            colors: ["Blue", "Black", "White"]
        },
        {
            id: "2",
            name: "Smartwatch",
            price: 199.99,
            quantity: 1,
            imageUrl: "/ServiceImages/s1.webp",
            totalReviews: 190,
            discount: 10,
            images: [
                "/ServiceImages/s1.webp",
                "/ServiceImages/s2.webp",
                "/ServiceImages/s3.webp",
                "/ServiceImages/s4.webp",
            ],
            stars: "3.5",
            description: "Premium quality leather jacket with a modern design, quilted lining, and adjustable cuffs for ultimate style and comfort.",
            colors: ["Blue", "Black", "White"]
        },
        {
            id: "3",
            name: "Smartwatch",
            price: 199.99,
            quantity: 1,
            imageUrl: "/ServiceImages/s1.webp",
            totalReviews: 190,
            discount: 10,
            images: [
                "/ServiceImages/s1.webp",
                "/ServiceImages/s2.webp",
                "/ServiceImages/s3.webp",
                "/ServiceImages/s4.webp",
            ],
            stars: "3",
            description: "Premium quality leather jacket with a modern design, quilted lining, and adjustable cuffs for ultimate style and comfort.",
            colors: ["Blue", "Black", "White"]
        },
        {
            id: "4",
            name: "Smartwatch",
            price: 199.99,
            quantity: 1,
            imageUrl: "/ServiceImages/s1.webp",
            totalReviews: 190,
            discount: 10,
            images: [
                "/ServiceImages/s1.webp",
                "/ServiceImages/s2.webp",
                "/ServiceImages/s3.webp",
                "/ServiceImages/s4.webp",
            ],
            stars: "3.5",
            description: "Premium quality leather jacket with a modern design, quilted lining, and adjustable cuffs for ultimate style and comfort.",
            colors: ["Blue", "Black", "White"]
        },
        {
            id: "5",
            name: "Smartwatch",
            price: 199.99,
            quantity: 1,
            imageUrl: "/ServiceImages/s1.webp",
            totalReviews: 190,
            discount: 10,
            images: [
                "/ServiceImages/s1.webp",
                "/ServiceImages/s2.webp",
                "/ServiceImages/s3.webp",
                "/ServiceImages/s4.webp",
            ],
            stars: "3.5",
            description: "Premium quality leather jacket with a modern design, quilted lining, and adjustable cuffs for ultimate style and comfort.",
            colors: ["Blue", "Black", "White"]
        }
    ]);

    const subtotal = cartItems.reduce((acc, item) => acc + item.price * item.quantity, 0);
    const discountAmount = cartItems.reduce((acc, item) => acc + (item.price * item.quantity * item.discount) / 100, 0);
    const tax = (subtotal - discountAmount) * 0.1;
    const storePickupFee = 99;
    const total = subtotal - discountAmount + tax + storePickupFee;

    return (
        <section className="antialiased">
            <Navbar />
            <div className="mx-auto max-w-screen-xl py-10 bg-yellow-100 px-6">
                <h2 className="text-xl text-gray-900 sm:text-2xl">Shopping Cart</h2>

                {/* If Cart is Empty */}
                {cartItems.length === 0 ? (
                    <div className="mt-10 flex flex-col items-center">
                        <img src={emptyCart} alt="Empty Cart" className="w-40 h-40" />
                        <h3 className="mt-4 text-lg font-semibold text-gray-700">Your cart is empty</h3>
                        <p className="text-gray-500">Looks like you haven't added anything yet.</p>
                        <Link to="/viewAllCollection" className="mt-4 bg-indigo-600 text-white px-5 py-2.5 rounded-lg hover:bg-indigo-700">
                            Continue Shopping →
                        </Link>
                    </div>
                ) : (
                    <div className="mt-6 sm:mt-8 lg:flex lg:items-start xl:gap-8">
                        <div className="mx-auto w-full flex-none lg:max-w-2xl xl:max-w-4xl">
                            <div className="space-y-6">
                                {cartItems.map((item) => (
                                    <div key={item.id} className="border border-gray-200 bg-white p-4 shadow-sm md:p-6">
    <div className="space-y-4 md:flex md:items-center md:justify-between md:gap-6 md:space-y-0">
        {/* Product Image */}
        <a href="#" className="shrink-0 md:order-1">
            <img className="h-20 w-20" src={item.imageUrl} alt={item.name} />
        </a>

        {/* Quantity Control & Price */}
        <div className="flex items-center justify-between md:order-3 md:justify-end">
            <div className="flex items-center">
                <button
                    className="h-5 w-5 border border-gray-300 bg-gray-100 hover:bg-gray-200 rounded-md"
                    onClick={() =>
                        setCartItems(
                            cartItems.map(i =>
                                i.id === item.id ? { ...i, quantity: Math.max(1, i.quantity - 1) } : i
                            )
                        )
                    }
                >
                    -
                </button>
                <input 
                    className="w-10 text-center text-sm font-medium text-gray-900 border-0 bg-transparent"
                    value={item.quantity} 
                    readOnly 
                />
                <button
                    className="h-5 w-5 border border-gray-300 bg-gray-100 hover:bg-gray-200 rounded-md"
                    onClick={() =>
                        setCartItems(
                            cartItems.map(i =>
                                i.id === item.id ? { ...i, quantity: i.quantity + 1 } : i
                            )
                        )
                    }
                >
                    +
                </button>
            </div>
            <div className="text-end md:w-32">
                <p className="text-base font-bold text-gray-900">Rs. {(item.price * item.quantity).toFixed(2)}</p>
            </div>
        </div>

        {/* Product Details */}
        <div className="w-full flex-1 space-y-4 md:order-2 md:max-w-md">
            <a href="#" className="text-base font-medium hover:underline text-black">{item.name}</a>
            
            {/* Description */}
            <p className="text-sm text-gray-600">{item.description}</p>

            {/* Ratings & Reviews */}
            <div className="flex items-center space-x-2">
                <span className="text-yellow-500">⭐ {item.stars}</span>
                <span className="text-gray-500 text-sm">({item.totalReviews} reviews)</span>
            </div>

            {/* Discount */}
            {item.discount > 0 && (
                <p className="text-sm font-medium text-green-600">
                    {item.discount}% off
                </p>
            )}

            {/* Colors */}
            <div className="flex space-x-2">
                {item.colors.map((color, index) => (
                    <span
                        key={index}
                        className="w-5 h-5 border rounded-full"
                        style={{ backgroundColor: color.toLowerCase() }}
                        title={color}
                    ></span>
                ))}
            </div>

            {/* Remove Button */}
            <div className="flex items-center gap-4">
                <button
                    className="text-sm font-medium text-red-600 hover:underline"
                    onClick={() => setCartItems(cartItems.filter(i => i.id !== item.id))}
                >
                    ❌ Remove
                </button>
            </div>
        </div>
    </div>
</div>

                                ))}
                            </div>
                        </div>

                        {/* Order Summary */}
                        <div className="mx-auto mt-6 max-w-4xl flex-1 space-y-6 lg:mt-0 lg:w-full">
                            <div className="space-y-4 border border-gray-200 bg-white p-4 shadow-sm sm:p-6">
                                <p className="text-xl font-semibold text-gray-900">Order Summary</p>
                                <div className="space-y-4">
                                    <div className="space-y-2">
                                        <dl className="flex justify-between">
                                            <dt className="text-base font-normal text-gray-500">Subtotal</dt>
                                            <dd className="text-base font-medium text-gray-900">Rs. {subtotal.toFixed(2)}</dd>
                                        </dl>
                                        <dl className="flex justify-between">
                                            <dt className="text-base font-normal text-gray-500">Discount</dt>
                                            <dd className="text-base font-medium text-green-600">- Rs. {discountAmount.toFixed(2)}</dd>
                                        </dl>
                                        <dl className="flex justify-between">
                                            <dt className="text-base font-normal text-gray-500">Store Pickup</dt>
                                            <dd className="text-base font-medium text-gray-900">Rs. {storePickupFee}</dd>
                                        </dl>
                                        <dl className="flex justify-between">
                                            <dt className="text-base font-normal text-gray-500">Tax (10%)</dt>
                                            <dd className="text-base font-medium text-gray-900">Rs. {tax.toFixed(2)}</dd>
                                        </dl>
                                    </div>
                                    <dl className="flex justify-between border-t border-gray-200 pt-2">
                                        <dt className="text-base font-bold text-gray-900">Total</dt>
                                        <dd className="text-base font-bold text-gray-900">Rs. {total.toFixed(2)}</dd>
                                    </dl>
                                </div>
                                <a href="#" className="block text-center bg-indigo-600 text-white px-5 py-2.5 rounded-lg hover:bg-indigo-700">
                                    Proceed to Checkout
                                </a>
                                <div className="flex items-center justify-center gap-2">
                                    <span className="text-sm text-gray-500">or</span>
                                    <Link to="/viewAllCollection" className="text-sm text-indigo-600 underline">Continue Shopping →</Link>
                                </div>
                            </div>

                            <div className="space-y-4 border border-gray-200 bg-white p-4 shadow-sm sm:p-6">
                                <form className="space-y-4">
                                    <div>
                                        <label className="mb-2 block text-sm font-medium text-gray-900">Do you have a voucher or gift card?</label>
                                        <input type="text" className="block w-full border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900" />
                                    </div>
                                    <button className="block w-full bg-indigo-600 text-white px-5 py-2.5 rounded-lg hover:bg-indigo-700">
                                        Apply Code
                                    </button>
                                </form>
                            </div>
                        </div>
                    </div>
                )}
            </div>
        </section>
    );
};

export default Cart;
