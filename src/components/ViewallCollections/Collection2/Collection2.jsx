import React, { useEffect, useRef, useState } from "react";
import { FaStar, FaStarHalfAlt } from "react-icons/fa";
import { BsStarFill } from "react-icons/bs";
import { MdVerifiedUser } from "react-icons/md";
import { Input, Button, Typography } from "@material-tailwind/react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const products = [
    {
        id: "1",
        name: "Bar Wax-Candles",
        description: "Hand-poured, aromatic, long-lasting, eco-friendly, soothing, elegant, premium",
        price: 299.99,
        imageUrl: "/ServiceImages/s1.webp",
        averageRating: 4.5,
        totalReviews: 128,
        discount: 15
    },
    {
        id: "2",
        name: "Mom's Gift Candles",
        description: "Hand-poured, aromatic, long-lasting, eco-friendly, soothing, elegant, premium",
        price: 699.99,
        imageUrl: "/ServiceImages/s2.webp",
        averageRating: 4.7,
        totalReviews: 256,
        discount: 10
    },
    {
        id: "3",
        name: "Unique Design Candles",
        description: "Hand-poured, aromatic, long-lasting, eco-friendly, soothing, elegant, premium",
        price: 1299.99,
        imageUrl: "/ServiceImages/s3.webp",
        averageRating: 4.8,
        totalReviews: 340,
        discount: 12
    },
    {
        id: "4",
        name: "Teddy Candles",
        description: "Hand-poured, aromatic, long-lasting, eco-friendly, soothing, elegant, premium",
        price: 199.99,
        imageUrl: "/ServiceImages/s4.webp",
        averageRating: 4.6,
        totalReviews: 190,
        discount: 18
    },
    {
        id: "5",
        name: "Girl's Dress Candle",
        description: "Hand-poured, aromatic, long-lasting, eco-friendly, soothing, elegant, premium",
        price: 199.99,
        imageUrl: "/ServiceImages/s5.webp",
        averageRating: 4.6,
        totalReviews: 190,
        discount: 20
    },
    {
        id: "6",
        name: "Unique Candles",
        description: "Hand-poured, aromatic, long-lasting, eco-friendly, soothing, elegant, premium",
        price: 199.99,
        imageUrl: "/ServiceImages/s6.webp",
        averageRating: 4.6,
        totalReviews: 190,
        discount: 43
    },
    {
        id: "7",
        name: "Mom's Gift Candle",
        description: "Hand-poured, aromatic, long-lasting, eco-friendly, soothing, elegant, premium",
        price: 199.99,
        imageUrl: "/ServiceImages/s2.webp",
        averageRating: 4.6,
        totalReviews: 190,
        discount: 20
    },
    {
        id: "8",
        name: "Smartwatch",
        description: "Hand-poured, aromatic, long-lasting, eco-friendly, soothing, elegant, premium",
        price: 199.99,
        imageUrl: "/ServiceImages/s3.webp",
        averageRating: 4.6,
        totalReviews: 190,
        discount: 20
    },
    {
        id: "9",
        name: "Smartwatch",
        description: "Hand-poured, aromatic, long-lasting, eco-friendly, soothing, elegant, premium",
        price: 199.99,
        imageUrl: "/ServiceImages/s1.webp",
        averageRating: 4.6,
        totalReviews: 190,
        discount: 10
    },
    {
        id: "10",
        name: "Smartwatch",
        description: "Hand-poured, aromatic, long-lasting, eco-friendly, soothing, elegant, premium",
        price: 199.99,
        imageUrl: "/ServiceImages/s1.webp",
        averageRating: 4.6,
        totalReviews: 190,
        discount: 15
    },
];

const Collection2 = () => {
    const scrollRef = useRef(null);
    const [scrollPosition, setScrollPosition] = useState(0);

    useEffect(() => {
        if (scrollRef.current && products.length > 3) {
            scrollRef.current.scrollTo({
                left: 100,
                behavior: "smooth"
            });
        }
    }, []);

    const itemVariants = {
        hidden: { opacity: 0, x: -50 }, // Start from left (-50px)
        visible: { opacity: 1, x: 0, transition: { duration: 0.5 } }, // Move to original position
    };

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: { staggerChildren: 0.3 }, // Delay each product animation
        },
    };

    return (
        <div className="mb-3">
            <section className="rounded-lg">
                <div className="w-full flex justify-between md:items-center gap-y-4 flex-col md:flex-row p-5">
                    <div className="flex flex-col justify-center items-center w-full">
                    <h2 className="text-sm sm:text-base md:text-lg lg:text-2xl">
                            Light up your space with
                            <span className=" text-yellow-500"> our bestsellers..</span>
                        </h2>
                        <p className="text-xs sm:text-sm md:text-base text-gray-600">
                            Illuminate Your World with Our Top Picks! ✨
                        </p>
                    </div>
                </div>
            </section>

            {/* Products with animation on scroll */}
            <motion.div
                className="flex gap-6 transition-all duration-500 overflow-x-auto scrollbar-hide p-6 custom-scrollbar"
                variants={containerVariants}
                initial="hidden"
                whileInView="visible" // Start animation when in view
                viewport={{ once: true, amount: 0.2 }} // Trigger when 20% is visible
            >
                {products.map((product) => (
                    <motion.div
                        key={product.id}
                        className={`bg-white shadow-lg overflow-hidden transition-transform duration-300 ${products.length === 1 ? "w-full" :
                                products.length === 2 ? "w-1/2" :
                                    products.length === 3 ? "w-1/3" :
                                        "w-80 min-w-[320px]"
                            }`}
                        variants={itemVariants} // Apply animation to each item
                    >
                        <div className="relative group">
                            <img
                                src={product.imageUrl}
                                alt={product.name}
                                className="w-full h-56 object-cover transition-transform duration-300 group-hover:scale-105"
                                onError={(e) => {
                                    e.target.src = "https://images.unsplash.com/photo-1590479773265-7464e5d48118";
                                }}
                                loading="lazy"
                            />
                        </div>

                        <div className="p-4">
                            <div className="flex items-center justify-between mb-2">
                            <h3 className="text-[15px] text-gray-800 cursor-pointer hover:underline">{product.name}</h3>
                                <MdVerifiedUser className="text-green-500 w-5 h-5" />
                            </div>
                            <div className="flex items-center justify-between mb-2">
                                <span className="text-xl text-gray-900">
                                    {(product.price * (1 - product.discount / 100)).toFixed(2)} Rs
                                </span>
                            </div>
                        </div>
                    </motion.div>
                ))}
            </motion.div>
        </div>
    );
};

export default Collection2