import React, { useEffect, useRef, useState } from "react";
import { FaStar, FaStarHalfAlt } from "react-icons/fa";
import { BsStarFill } from "react-icons/bs";
import { MdVerifiedUser } from "react-icons/md";
import { Input, Button, Typography } from "@material-tailwind/react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { H2Icon } from "@heroicons/react/16/solid";

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
                <div className="w-full flex justify-around md:items-center gap-y-4 flex-col md:flex-row p-5 bg-amber-200 mt-5">
                    <div>
                        <h2 className="text-2xl">
                            Light up your space with our Bestsellers 🕯️
                        </h2>
                    </div>
                    <Link to="/viewAllCollection">
                        <button className="bg-yellow-500 hover:bg-yellow-600 text-black py-3 px-6 transition-all duration-300 shadow-md hover:shadow-lg text-sm md:text-base cursor-pointer">
                            View All Collection
                        </button>
                    </Link>
                </div>
            </section >
            <div
                ref={scrollRef}
                className={`flex gap-6 transition-all duration-500 overflow-x-auto scrollbar-hide p-6 custom-scrollbar`}
                onScroll={() => setScrollPosition(scrollRef.current?.scrollLeft || 0)}
            >
                {products.map((product, index) => (
                    <div
                        key={product.id}
                        className={`bg-white shadow-lg overflow-hidden transition-transform duration-300 ${products.length === 1 ? "w-full" :
                            products.length === 2 ? "w-1/2" :
                                products.length === 3 ? "w-1/3" :
                                    "w-80 min-w-[320px]"
                            }`}
                    >
                        <div className="relative group">
                            <img
                                src={product.imageUrl}
                                alt={product.name}
                                className="w-full cursor-pointer h-56 object-cover transition-transform duration-300 group-hover:scale-105 font-goudy"
                                onError={(e) => {
                                    e.target.src = "https://images.unsplash.com/photo-1590479773265-7464e5d48118";
                                }}
                                loading="lazy"
                            />
                        </div>
                        <div className="p-4">
                            <div className="flex items-center justify-between mb-2">
                                <h3
                                    className="text-[15px] text-gray-800 cursor-pointer hover:underline"
                                    onClick={() => navigate(`/product/${product.id}`, { state: { product } })}
                                >{product.name}</h3>
                                <MdVerifiedUser className="text-green-500 w-5 h-5" />
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
