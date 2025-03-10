import React, { useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import ButtonsSection from "../ButtonsSection";

// const products = [
//     {
//         id: "1",
//         name: "Bar Wax-Candles",
//         preffer: "firstPage",
//         price: 299.99,
//         imageUrl: "/ServiceImages/s1.webp",
//         totalReviews: 128,
//         discount: 15,
//         images: ["/ServiceImages/s1.webp", "/ServiceImages/s2.webp"],
//         stars: "3.5",
//         description: "Handcrafted wax candles with a rich aroma and long burn time, perfect for relaxation and decoration.",
//         category: "BestSellers",
//         collection: "Festival",
//         brand: "Sparkle Aura",
//         burnTime: "40 hours",
//         weight: "500g",
//         dimensions: "10cm x 7cm x 7cm",
//         material: "Soy Wax",
//         fragranceStrength: 4,
//         availability: "In Stock",
//         safetyInstructions: "Keep away from flammable objects. Do not leave unattended while burning.",
//         bestFor: ["Home Decor", "Relaxation", "Gifting"],
//         colors: ["Blue", "Black", "White"],
//         scents: ["Vanilla", "Lavender", "Sandalwood"]
//     },
//     {
//         id: "2",
//         name: "Mom's Gift Candles",
//         preffer: "firstPage",
//         price: 699.99,
//         imageUrl: "/ServiceImages/s2.webp",
//         totalReviews: 256,
//         discount: 0,
//         images: ["/ServiceImages/s3.webp", "/ServiceImages/s4.webp"],
//         stars: "4.2",
//         description: "Beautifully crafted candles with a soft fragrance, perfect for gifting and home decor.",
//         category: "JarCandles",
//         collection: "Festival",
//         brand: "Candle Delight",
//         burnTime: "50 hours",
//         weight: "600g",
//         dimensions: "12cm x 8cm x 8cm",
//         material: "Beeswax",
//         fragranceStrength: 5,
//         availability: "In Stock",
//         safetyInstructions: "Trim the wick to 1/4 inch before each burn. Avoid drafts.",
//         bestFor: ["Gifting", "Romantic Dinners", "Home Fragrance"],
//         colors: ["Pink", "Red", "White"],
//         scents: ["Rose", "Jasmine", "Coconut"]
//     },
//     {
//         id: "3",
//         name: "Unique Design Candles",
//         preffer: "firstPage",
//         price: 1299.99,
//         imageUrl: "/ServiceImages/s3.webp",
//         totalReviews: 340,
//         discount: 12,
//         images: ["/ServiceImages/s5.webp", "/ServiceImages/s6.webp"],
//         stars: "4.0",
//         description: "Artistic candles designed to elevate home decor with elegance and warmth.",
//         category: "CeramicCandles",
//         collection: "Festival",
//         brand: "Artisan Glow",
//         burnTime: "45 hours",
//         weight: "550g",
//         dimensions: "11cm x 9cm x 9cm",
//         material: "Coconut Wax",
//         fragranceStrength: 3,
//         availability: "Out of Stock",
//         safetyInstructions: "Burn on a heat-resistant surface. Do not touch hot wax.",
//         bestFor: ["Decor", "Gifting", "Aromatherapy"],
//         colors: ["Green", "Gold"],
//         scents: ["Lemon Grass", "Cedarwood"]
//     },
//     {
//         id: "4",
//         name: "Teddy Candles",
//         preffer: "firstPage",
//         price: 199.99,
//         imageUrl: "/ServiceImages/s4.webp",
//         totalReviews: 190,
//         discount: 0,
//         images: ["/ServiceImages/s7.webp", "/ServiceImages/s8.webp"],
//         stars: "3.8",
//         description: "Adorable teddy bear-shaped candles, a great gift for kids and loved ones.",
//         category: "GeometricCandles",
//         collection: "Sented",
//         brand: "Cozy Lights",
//         burnTime: "30 hours",
//         weight: "450g",
//         dimensions: "8cm x 6cm x 6cm",
//         material: "Palm Wax",
//         fragranceStrength: 2,
//         availability: "In Stock",
//         safetyInstructions: "Never leave burning candles near pets or children.",
//         bestFor: ["Gifting", "Bedroom Decor", "Festivals"],
//         colors: ["Brown", "Beige"],
//         scents: ["Chocolate", "Vanilla"]
//     },
//     {
//         id: "5",
//         name: "Luxury Aroma Candle",
//         preffer: "collectionPage",
//         price: 599.99,
//         imageUrl: "/ServiceImages/s5.webp",
//         totalReviews: 310,
//         discount: 20,
//         images: ["/ServiceImages/s9.webp", "/ServiceImages/s10.webp"],
//         stars: "4.7",
//         description: "Luxury scented candles with a rich blend of essential oils for ultimate relaxation.",
//         category: "SentedCandles",
//         collection: "Sented",
//         brand: "Elite Essence",
//         burnTime: "60 hours",
//         weight: "700g",
//         dimensions: "14cm x 10cm x 10cm",
//         material: "Soy & Coconut Wax",
//         fragranceStrength: 5,
//         availability: "In Stock",
//         safetyInstructions: "Use in well-ventilated areas. Extinguish properly after use.",
//         bestFor: ["Spa", "Relaxation", "Self-Care"],
//         colors: ["Purple", "White"],
//         scents: ["Lavender", "Chamomile", "Peppermint"]
//     },
//     {
//         id: "6",
//         name: "Classic Pillar Candle",
//         preffer: "collectionPage",
//         price: 249.99,
//         imageUrl: "/ServiceImages/s6.webp",
//         totalReviews: 140,
//         discount: 0,
//         images: ["/ServiceImages/s11.webp", "/ServiceImages/s12.webp"],
//         stars: "4.1",
//         description: "Classic unscented pillar candles perfect for home decor and dining setups.",
//         category: "WoodenCandles",
//         collection: "Sented",
//         brand: "Glow Home",
//         burnTime: "50 hours",
//         weight: "500g",
//         dimensions: "15cm x 7cm x 7cm",
//         material: "Paraffin Wax",
//         fragranceStrength: 0,  // Unscented
//         availability: "In Stock",
//         safetyInstructions: "Always burn on a heat-resistant surface.",
//         bestFor: ["Dining", "Events", "Weddings"],
//         colors: ["White", "Ivory"],
//         scents: []
//     },
// ];


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
                            onClick={() => navigate(`/product/${product.id}`, { state: { product } })}
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
