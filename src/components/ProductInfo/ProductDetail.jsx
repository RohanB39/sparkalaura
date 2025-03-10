import { useState, useEffect } from "react";
import { FiStar } from "react-icons/fi";
import { useLocation } from "react-router-dom";
import Navbar from "../Navbar";
import SmallNav from "../SmallNav";
import Collection2 from "../ViewallCollections/Collection2/Collection2";
import Collection3 from "../ViewallCollections/Collection3/Collection3";
import { FiChevronDown, FiChevronUp } from "react-icons/fi";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useNavigate } from "react-router-dom";

const ProductDetail = () => {
    const [selectedImage, setSelectedImage] = useState(0);
    const [quantity, setQuantity] = useState(1);
    const location = useLocation();
    const product = location.state?.product;
    const [randomCollection, setRandomCollection] = useState(null);
    const [isOpen, setIsOpen] = useState(false);
    const [selectedColor, setSelectedColor] = useState(product.colors[0] || "");
    const [selectedScent, setSelectedScent] = useState(product.scents[0] || "");
    const navigate = useNavigate(); // Initialize navigation

    useEffect(() => {
        const randomChoice = Math.random() < 0.5 ? "Collection2" : "Collection3";
        setRandomCollection(randomChoice);
    }, []);

    const handleBuyNow = () => {
        const selectedProductDetails = {
            userId: "USR-123",
            SelectedProductId: product.id,
            SelectedProductName: product.name,
            selectProductImage: product.imageUrl,
            SelectedProductDiscount: product.discount,
            selectedProductOriginalPrice: product.price,
            SelectedProductDiscountedPrice: product.discount > 0
                ? (product.price - (product.price * product.discount) / 100).toFixed(2)
                : product.price,
            SelectedProductSelectedColor: selectedColor,
            SelectedProductSelectedScent: selectedScent,
            SelectedProductSelectedQuantity: quantity,
        };
        console.log("Selected Product Details:", selectedProductDetails);
    };

    const handleAddToCart = () => {
            const userLoggedIn = localStorage.getItem("userLoggedIn");
        
            const selectedProductDetailsForCart = {
                SelectedProductId: product.id,
                SelectedProductName: product.name,
                selectProductImage: product.imageUrl,
                SelectedProductDiscount: product.discount,
                selectedProductOriginalPrice: product.price,
                SelectedProductDiscountedPrice: product.discount > 0
                    ? (product.price - (product.price * product.discount) / 100).toFixed(2)
                    : product.price,
                SelectedProductSelectedColor: selectedColor,
                SelectedProductSelectedScent: selectedScent,
                SelectedProductSelectedQuantity: quantity,
            };
        
            if (!userLoggedIn) {
                const existingCart = JSON.parse(localStorage.getItem("SelectedCartProducts")) || [];
                existingCart.push(selectedProductDetailsForCart);
                localStorage.setItem("SelectedCartProducts", JSON.stringify(existingCart));
        
                toast.success("Product added to cart!", { position: "top-center", autoClose: 2000 });
                setTimeout(() => navigate("/cart"), 2000); // Redirect after toast
            } else {
                console.log("User is logged in. Proceed with adding to cart.");
            }
        };


    return (
        <>
            <div className="fixed top-0 left-0 w-full z-50 bg-black/80 backdrop-blur-md shadow-md">
                <SmallNav />
                <Navbar />
            </div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-40">
                <div className="flex flex-col md:flex-row gap-6">
                    {/* Product Image Section */}
                    <div className="w-full md:w-1/2">
                        <div className="aspect-w-4 aspect-h-3 overflow-hidden">
                            <img
                                src={product.images[selectedImage] || product.imageUrl}
                                alt={product.name}
                                className="w-full h-full object-cover"
                            />
                        </div>

                        {/* Thumbnail Images */}
                        <div className="grid grid-cols-3 sm:grid-cols-4 gap-2 mt-4">
                            {product.images.map((image, index) => (
                                <button
                                    key={index}
                                    onClick={() => setSelectedImage(index)}
                                    className={`p-1 ${selectedImage === index ? "ring-2 ring-yellow-500" : ""}`}
                                >
                                    <img src={image} alt={`Product view ${index + 1}`} className="w-full h-16 object-cover" />
                                </button>
                            ))}
                        </div>
                    </div>

                    {/* Product Details Section */}
                    <div className="w-full md:w-1/2 space-y-4">
                        <h1 className="text-2xl font-bold text-yellow-900">{product.name}</h1>

                        {/* Price & Discount */}
                        {product.discount > 0 ? (
                            <div>
                                <p className="text-sm text-yellow-600 font-semibold">{product.discount}% Off</p>
                                <div className="flex items-center gap-5">
                                    <p className="text-sm text-gray-500 line-through">Rs. {product.price}</p>
                                    <p className="text-xl font-semibold text-pink-600">
                                        Rs. {(product.price - (product.price * product.discount) / 100).toFixed(2)}
                                    </p>
                                </div>
                            </div>
                        ) : (
                            <p className="text-xl font-semibold text-pink-600">Rs. {product.price}</p>
                        )}

                        {/* Star Rating & Reviews */}
                        <div className="flex items-center space-x-2">
                            <div className="flex text-yellow-400">
                                {[...Array(5)].map((_, index) => (
                                    <FiStar key={index} className={`w-5 h-5 ${index < Math.floor(product.stars) ? "fill-current" : ""}`} />
                                ))}
                            </div>
                            <span className="text-gray-500">({product.totalReviews} reviews)</span>
                        </div>
                        {/* Product avialability */}
                        <p className={`text-sm font-semibold ${product.availability === "In Stock" ? "text-green-600" : "text-red-600"}`}>
                            {product.availability}
                        </p>

                        {/* Availability & Category */}
                        <div className="border border-gray-300 overflow-hidden">
                            {/* Dropdown Button */}
                            <button
                                onClick={() => setIsOpen(!isOpen)}
                                className="w-full flex justify-between items-center p-3 bg-gray-100 text-gray-900 font-medium"
                            >
                                Product Info
                                {isOpen ? <FiChevronUp className="w-5 h-5" /> : <FiChevronDown className="w-5 h-5" />}
                            </button>

                            {/* Collapsible Content */}
                            <div
                                className={`transition-max-height duration-300 ease-in-out overflow-hidden ${isOpen ? "max-h-[500px]" : "max-h-0"
                                    }`}
                            >
                                <div className="p-4 space-y-2">
                                    <p className="text-sm text-gray-700">Category: {product.category}</p>
                                    <p className="text-sm text-gray-700">Brand: {product.brand}</p>

                                    {/* Additional Product Details */}
                                    <div>
                                        <h3 className="text-sm font-medium text-gray-900">Product Details</h3>
                                        <p className="text-gray-600">Burn Time: {product.burnTime}</p>
                                        <p className="text-gray-600">Weight: {product.weight}</p>
                                        <p className="text-gray-600">Dimensions: {product.dimensions}</p>
                                        <p className="text-gray-600">Material: {product.material}</p>
                                        <p className="text-gray-600">Fragrance Strength: {product.fragranceStrength}/5</p>
                                    </div>

                                    {/* Safety Instructions */}
                                    <div>
                                        <h3 className="text-sm font-medium text-gray-900">Safety Instructions</h3>
                                        <p className="text-gray-600">{product.safetyInstructions}</p>
                                    </div>

                                    {/* Best For */}
                                    <div>
                                        <h3 className="text-sm font-medium text-gray-900">Best For</h3>
                                        <p className="text-gray-600">{product.bestFor.join(", ")}</p>
                                    </div>

                                    {/* Description */}
                                    <div>
                                        <h3 className="text-sm font-medium text-gray-900">Description</h3>
                                        <p className="text-gray-600">{product.description}</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Color Selection */}
                        <div>
                            <h3 className="text-sm font-medium text-gray-900">Available Colors</h3>
                            <div className="flex gap-2 mt-2">
                                {product.colors.map((color) => (
                                    <button
                                        key={color}
                                        onClick={() => setSelectedColor(color)}
                                        className={`w-8 h-8 rounded-full border-2 ${selectedColor === color ? "border-yellow-600 scale-110" : "border-gray-300"}`}
                                        style={{ backgroundColor: color.toLowerCase() }}
                                    ></button>
                                ))}
                            </div>
                        </div>



                        {/* Scents Selection (Only if available) */}
                        {product.scents.length > 0 && (
                            <div>
                                <h3 className="text-sm font-medium text-gray-900">Available Scents</h3>
                                <div className="flex flex-wrap gap-2 mt-2">
                                    {product.scents.map((scent, index) => (
                                        <button
                                            key={index}
                                            onClick={() => setSelectedScent(scent)}
                                            className={`px-3 py-1 text-sm font-medium border rounded-full ${selectedScent === scent ? "bg-yellow-600 text-white scale-110" : "bg-gray-100 text-gray-700 border-gray-300"}`}
                                        >
                                            {scent}
                                        </button>
                                    ))}
                                </div>
                            </div>
                        )}


                        {/* Quantity Selector */}
                        <div>
                            <h3 className="text-sm font-medium text-gray-900">Quantity</h3>
                            <div className="flex items-center space-x-3 mt-2">
                                <button onClick={() => setQuantity(Math.max(1, quantity - 1))} className="px-2 text-3xl text-amber-700">
                                    -
                                </button>
                                <span className="text-lg font-semibold">{quantity}</span>
                                <button onClick={() => setQuantity(quantity + 1)} className="px-2 text-3xl text-amber-700">
                                    +
                                </button>
                            </div>
                        </div>

                        {/* Buy Now & Cart Buttons */}
                        <div className="flex gap-5">
                            {product.availability === "In Stock" ? (
                                <>
                                    <button
                                        onClick={handleBuyNow}
                                        className="w-full bg-yellow-600 text-white py-2 hover:bg-yellow-700"
                                    >
                                        Buy Now
                                    </button>
                                    <button onClick={handleAddToCart} className="w-full border border-yellow-600 text-yellow-600 py-2 hover:bg-blue-50">Add to Cart</button>
                                </>
                            ) : (
                                <button className="w-full bg-gray-400 text-white py-2 rounded-md cursor-not-allowed">Notify Me</button>
                            )}
                        </div>
                    </div>
                </div>
            </div>


            <div>
                {randomCollection === "Collection2" ? <Collection2 /> : <Collection3 />}
            </div>
        </>

    );
};

export default ProductDetail;
