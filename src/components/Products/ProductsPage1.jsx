import React, { useEffect, useRef, useState } from "react";
import { FaStar, FaStarHalfAlt } from "react-icons/fa";
import { BsStarFill } from "react-icons/bs";
import { MdVerifiedUser } from "react-icons/md";
import { Input, Button, Typography } from "@material-tailwind/react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { H2Icon } from "@heroicons/react/16/solid";
import ButtonsSection from "../ButtonsSection";

const products = [
    {
        id: "1",
        name: "Bar Wax-Candles",
        price: 299.99,
        imageUrl: "/ServiceImages/s1.webp",
        totalReviews: 128,
        discount: 15,
        images: [
            "/ServiceImages/s1.webp",
            "/ServiceImages/s2.webp",
            "/ServiceImages/s3.webp",
            "/ServiceImages/s4.webp",
        ],
        starts: "3.5",
        discription: "Premium quality leather jacket with a modern design, quilted lining, and adjustable cuffs for ultimate style and comfort.",
        colors: [
            "Blue",
            "Black",
            "White"
        ]
    },
    {
        id: "2",
        name: "Mom's Gift Candles",
        price: 699.99,
        imageUrl: "/ServiceImages/s2.webp",
        totalReviews: 256,
        discount: 10,
        images: [
            "/ServiceImages/s1.webp",
            "/ServiceImages/s2.webp",
            "/ServiceImages/s3.webp",
            "/ServiceImages/s4.webp",
        ],
        starts: "3.5",
        discription: "Premium quality leather jacket with a modern design, quilted lining, and adjustable cuffs for ultimate style and comfort.",
        colors: [
            "Blue",
            "Black",
            "White"
        ]
    },
    {
        id: "3",
        name: "Unique Design Candles",
        price: 1299.99,
        imageUrl: "/ServiceImages/s3.webp",
        totalReviews: 340,
        discount: 12,
        images: [
            "/ServiceImages/s1.webp",
            "/ServiceImages/s2.webp",
            "/ServiceImages/s3.webp",
            "/ServiceImages/s4.webp",
        ],
        starts: "3.5",
        discription: "Premium quality leather jacket with a modern design, quilted lining, and adjustable cuffs for ultimate style and comfort.",
        colors: [
            "Blue",
            "Black",
            "White"
        ]
    },
    {
        id: "4",
        name: "Teddy Candles",
        price: 199.99,
        imageUrl: "/ServiceImages/s4.webp",
        totalReviews: 190,
        discount: 18,
        images: [
            "/ServiceImages/s1.webp",
            "/ServiceImages/s2.webp",
            "/ServiceImages/s3.webp",
            "/ServiceImages/s4.webp",
        ],
        starts: "3.5",
        discription: "Premium quality leather jacket with a modern design, quilted lining, and adjustable cuffs for ultimate style and comfort.",
        colors: [
            "Blue",
            "Black",
            "White"
        ]
    },
    {
        id: "5",
        name: "Girl's Dress Candle",
        price: 199.99,
        imageUrl: "/ServiceImages/s5.webp",
        totalReviews: 190,
        discount: 20,
        images: [
            "/ServiceImages/s1.webp",
            "/ServiceImages/s2.webp",
            "/ServiceImages/s3.webp",
            "/ServiceImages/s4.webp",
        ],
        starts: "3.5",
        discription: "Premium quality leather jacket with a modern design, quilted lining, and adjustable cuffs for ultimate style and comfort.",
        colors: [
            "Blue",
            "Black",
            "White"
        ]
    },
    {
        id: "6",
        name: "Unique Candles",
        price: 199.99,
        imageUrl: "/ServiceImages/s6.webp",
        totalReviews: 190,
        discount: 43,
        images: [
            "/ServiceImages/s1.webp",
            "/ServiceImages/s2.webp",
            "/ServiceImages/s3.webp",
            "/ServiceImages/s4.webp",
        ],
        starts: "3.5",
        discription: "Premium quality leather jacket with a modern design, quilted lining, and adjustable cuffs for ultimate style and comfort.",
        colors: [
            "Blue",
            "Black",
            "White"
        ]
    },
    {
        id: "7",
        name: "Mom's Gift Candle",
        price: 199.99,
        imageUrl: "/ServiceImages/s2.webp",
        totalReviews: 190,
        discount: 20,
        images: [
            "/ServiceImages/s1.webp",
            "/ServiceImages/s2.webp",
            "/ServiceImages/s3.webp",
            "/ServiceImages/s4.webp",
        ],
        starts: "3.5",
        discription: "Premium quality leather jacket with a modern design, quilted lining, and adjustable cuffs for ultimate style and comfort.",
        colors: [
            "Blue",
            "Black",
            "White"
        ]
    },
    {
        id: "8",
        name: "Smartwatch",
        price: 199.99,
        imageUrl: "/ServiceImages/s3.webp",
        totalReviews: 190,
        discount: 20,
        images: [
            "/ServiceImages/s1.webp",
            "/ServiceImages/s2.webp",
            "/ServiceImages/s3.webp",
            "/ServiceImages/s4.webp",
        ],
        starts: "3.5",
        discription: "Premium quality leather jacket with a modern design, quilted lining, and adjustable cuffs for ultimate style and comfort.",
        colors: [
            "Blue",
            "Black",
            "White"
        ]
    },
    {
        id: "9",
        name: "Smartwatch",
        price: 199.99,
        imageUrl: "/ServiceImages/s1.webp",
        totalReviews: 190,
        discount: 10,
        images: [
            "/ServiceImages/s1.webp",
            "/ServiceImages/s2.webp",
            "/ServiceImages/s3.webp",
            "/ServiceImages/s4.webp",
        ],
        starts: "3.5",
        discription: "Premium quality leather jacket with a modern design, quilted lining, and adjustable cuffs for ultimate style and comfort.",
        colors: [
            "Blue",
            "Black",
            "White"
        ]
    },
    {
        id: "10",
        name: "Smartwatch",
        price: 199.99,
        imageUrl: "/ServiceImages/s1.webp",
        totalReviews: 190,
        discount: 15,
        images: [
            "/ServiceImages/s1.webp",
            "/ServiceImages/s2.webp",
            "/ServiceImages/s3.webp",
            "/ServiceImages/s4.webp",
        ],
        starts: "3.5",
        discription: "Premium quality leather jacket with a modern design, quilted lining, and adjustable cuffs for ultimate style and comfort.",
        colors: [
            "Blue",
            "Black",
            "White"
        ]
    },
];

const ProductsPage1 = () => {
    const scrollRef = useRef(null);
    const [scrollPosition, setScrollPosition] = useState(0);
    const navigate = useNavigate();

    useEffect(() => {
        if (scrollRef.current && products.length > 3) {
            scrollRef.current.scrollTo({
                left: 100,
                behavior: "smooth"
            });
        }
    }, []);

    return (
        <div className="mb-3">
            <section className="rounded-lg">
                <ButtonsSection />
            </section >
            <div
                ref={scrollRef}
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



        </div >
    );
};

export default ProductsPage1;
