import React, { useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import ButtonsSection from "../ButtonsSection";

const ProductsPage1 = ({products}) => {
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
                {products
                    .filter((product) => product.discount === 0 && product.preffer === "firstPage")
                    .map((product, index) => (
                        <div
                            key={product.id}
                            className="bg-white shadow-lg overflow-hidden transition-transform duration-300 w-full"
                            onClick={() => navigate(`/product/${product.productId}`, { state: { product } })}
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
                                    >
                                        {product.name}
                                    </h3>
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
