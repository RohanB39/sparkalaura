import React, { useState, useRef, useEffect } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import SmallNav from "./SmallNav";
import Navbar from "./Navbar";

const SearchResults = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const scrollRef = useRef(null);
  const [loading, setLoading] = useState(true);
  const searchQuery = new URLSearchParams(location.search).get("q")?.trim().toLowerCase() || "";

  const products = [
    {
      id: "1",
      name: "Bar Wax-Candles",
      preffer: "firstPage",
      price: 299.99,
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
      imageUrl: "/ServiceImages/s2.webp",
      totalReviews: 256,
      discount: 0,
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
    },
    {
      id: "3",
      name: "Unique Design Candles",
      preffer: "firstPage",
      price: 1299.99,
      imageUrl: "/ServiceImages/s3.webp",
      totalReviews: 340,
      discount: 12,
      images: ["/ServiceImages/s5.webp", "/ServiceImages/s6.webp"],
      stars: "4.0",
      description: "Artistic candles designed to elevate home decor with elegance and warmth.",
      category: "CeramicCandles",
      collection: "Festival",
      brand: "Artisan Glow",
      burnTime: "45 hours",
      weight: "550g",
      dimensions: "11cm x 9cm x 9cm",
      material: "Coconut Wax",
      fragranceStrength: 3,
      availability: "Out of Stock",
      safetyInstructions: "Burn on a heat-resistant surface. Do not touch hot wax.",
      bestFor: ["Decor", "Gifting", "Aromatherapy"],
      colors: ["Green", "Gold"],
      scents: ["Lemon Grass", "Cedarwood"]
    },
    {
      id: "4",
      name: "Teddy Candles",
      preffer: "firstPage",
      price: 199.99,
      imageUrl: "/ServiceImages/s4.webp",
      totalReviews: 190,
      discount: 0,
      images: ["/ServiceImages/s7.webp", "/ServiceImages/s8.webp"],
      stars: "3.8",
      description: "Adorable teddy bear-shaped candles, a great gift for kids and loved ones.",
      category: "GeometricCandles",
      collection: "Sented",
      brand: "Cozy Lights",
      burnTime: "30 hours",
      weight: "450g",
      dimensions: "8cm x 6cm x 6cm",
      material: "Palm Wax",
      fragranceStrength: 2,
      availability: "In Stock",
      safetyInstructions: "Never leave burning candles near pets or children.",
      bestFor: ["Gifting", "Bedroom Decor", "Festivals"],
      colors: ["Brown", "Beige"],
      scents: ["Chocolate", "Vanilla"]
    },
    {
      id: "5",
      name: "Luxury Aroma Candle",
      preffer: "collectionPage",
      price: 599.99,
      imageUrl: "/ServiceImages/s5.webp",
      totalReviews: 310,
      discount: 20,
      images: ["/ServiceImages/s9.webp", "/ServiceImages/s10.webp"],
      stars: "4.7",
      description: "Luxury scented candles with a rich blend of essential oils for ultimate relaxation.",
      category: "SentedCandles",
      collection: "Sented",
      brand: "Elite Essence",
      burnTime: "60 hours",
      weight: "700g",
      dimensions: "14cm x 10cm x 10cm",
      material: "Soy & Coconut Wax",
      fragranceStrength: 5,
      availability: "In Stock",
      safetyInstructions: "Use in well-ventilated areas. Extinguish properly after use.",
      bestFor: ["Spa", "Relaxation", "Self-Care"],
      colors: ["Purple", "White"],
      scents: ["Lavender", "Chamomile", "Peppermint"]
    },
    {
      id: "6",
      name: "Classic Pillar Candle",
      preffer: "collectionPage",
      price: 249.99,
      imageUrl: "/ServiceImages/s6.webp",
      totalReviews: 140,
      discount: 0,
      images: ["/ServiceImages/s11.webp", "/ServiceImages/s12.webp"],
      stars: "4.1",
      description: "Classic unscented pillar candles perfect for home decor and dining setups.",
      category: "WoodenCandles",
      collection: "Sented",
      brand: "Glow Home",
      burnTime: "50 hours",
      weight: "500g",
      dimensions: "15cm x 7cm x 7cm",
      material: "Paraffin Wax",
      fragranceStrength: 0,  // Unscented
      availability: "In Stock",
      safetyInstructions: "Always burn on a heat-resistant surface.",
      bestFor: ["Dining", "Events", "Weddings"],
      colors: ["White", "Ivory"],
      scents: []
    },
  ];

  let exactMatches = [];
  let otherProducts = [];

  if (searchQuery) {
    products.forEach((product) => {
      const productName = product.name.toLowerCase();
      if (productName === searchQuery) {
        exactMatches.push(product); 
      } else {
        otherProducts.push(product);
      }
    });
  } else {
    otherProducts = products;
  }
  const filteredProducts = [...exactMatches];

  useEffect(() => {
    setLoading(true);
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1000);
    return () => clearTimeout(timer);
  }, [searchQuery]);

  return (
    <div className="w-full max-w-6xl mx-auto p-6">
      {/* ✅ Navbar */}
      <div className="fixed top-0 left-0 w-full z-50 bg-black/80 backdrop-blur-md shadow-md">
        <SmallNav />
        <Navbar />
        <h2 className="text-md text-black bg-white py-3 px-5">
          Search Results for "<span className="text-yellow-500">{searchQuery}</span>"
        </h2>
        <div className="flex items-center gap-2 text-sm text-gray-600 bg-white px-5 py-2">
          <Link to="/" className="hover:underline text-black">Home</Link>
          <span className="text-gray-400">/</span>
          <span className="text-yellow-600">Search Results</span>
        </div>
      </div>

      {loading ? (
        <div className="flex justify-center items-center h-screen mt-10">
          <div className="w-12 h-12 border-4 border-yellow-500 border-dotted rounded-full animate-spin"></div>
        </div>
      ) : (
        <>
          <div
            ref={scrollRef}
            className="grid grid-cols-2 gap-4 md:grid-cols-5 mt-56 transition-all duration-500 md:overflow-x-auto scrollbar-hide animate-fade-in"
          >
            {filteredProducts.length > 0 ? (
              filteredProducts.map((product) => (
                <div key={product.id} className="bg-white shadow-lg overflow-hidden transition-transform duration-300 w-full">
                  <div className="relative group">
                    <img
                      src={product.imageUrl}
                      alt={product.name}
                      className="w-full cursor-pointer h-44 object-cover transition-transform duration-300 group-hover:scale-105"
                      onClick={() => navigate(`/product/${product.id}`, { state: { product } })}
                    />
                  </div>
                  <div className="p-2">
                    <h3 className="text-[12px] text-gray-800 cursor-pointer hover:underline">
                      {product.name}
                    </h3>
                    <span className="text-sm text-gray-900">
                      Rs. {product.price.toFixed(2)}
                    </span>
                  </div>
                </div>
              ))
            ) : (
              <div className="col-span-2 md:col-span-5 text-center text-gray-600 text-lg font-semibold">
                Searched product is not available.
              </div>
            )}
          </div>

          {otherProducts.length > 0 && (
            <>
              <h3 className="text-lg font-semibold mt-8 mb-4 text-gray-800">You may also like</h3>
              <div className="grid grid-cols-2 gap-4 md:grid-cols-5">
                {otherProducts.map((product) => (
                  <div key={product.id} className="bg-white shadow-lg overflow-hidden transition-transform duration-300 w-full">
                    <div className="relative group">
                      <img
                        src={product.imageUrl}
                        alt={product.name}
                        className="w-full cursor-pointer h-44 object-cover transition-transform duration-300 group-hover:scale-105"
                        onClick={() => navigate(`/product/${product.id}`, { state: { product } })}
                      />
                    </div>
                    <div className="p-2">
                      <h3 className="text-[12px] text-gray-800 cursor-pointer hover:underline">
                        {product.name}
                      </h3>
                      <span className="text-sm text-gray-900">
                        Rs. {product.price.toFixed(2)}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </>
          )}
        </>
      )}
    </div>
  );
};

export default SearchResults;
