import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchProducts } from "../../redux/slices/productSlice";
import AdminNav from "./AdminNav";

const ViewProducts = () => {
    const { products, loading, error } = useSelector((state) => state.products);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchProducts());
    }, [dispatch]);

    if (loading) return <div className="text-center py-10">Loading...</div>;
    if (error) return <div className="text-center py-10 text-red-500">Error: {error}</div>;

    return (
        <>
            <div className="fixed top-0 left-0 w-full z-50 bg-black/80 backdrop-blur-md">
                <AdminNav />
            </div>
            <div className="p-4 bg-gray-100 min-h-screen mt-18">
                <h1 className="text-xl font-bold mb-4 text-center">All Products</h1>

                {/* Products Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                    {products.map((product) => (
                        <div key={product.productId} className="bg-white p-3 shadow-lg">
                            {/* Product Image */}
                            <img
                                src={product.imageUrl}
                                alt={product.name}
                                className="w-full h-48 object-cover"
                            />

                            {/* Product Details */}
                            <div className="mt-3">
                                <h2 className="text-lg font-semibold">{product.name}</h2>
                                <p className="text-sm text-gray-600">{product.description}</p>

                                {/* Price & Availability */}
                                <div className="flex justify-between items-center mt-2">
                                    <span className="text-lg font-bold text-green-600">₹{product.price}</span>
                                    <span className={`px-2 py-1 text-xs font-semibold rounded ${product.availability === "In Stock" ? "bg-green-200 text-green-800" : "bg-red-200 text-red-800"}`}>
                                        {product.availability}
                                    </span>
                                </div>

                                {/* Categories & Best For */}
                                <div className="mt-2 text-xs text-gray-500">
                                    <p><strong>Category:</strong> {product.category}</p>
                                    <p><strong>Best For:</strong> {product.bestFor.join(", ")}</p>
                                </div>

                                {/* Additional Details */}
                                <div className="mt-2 text-xs text-gray-500">
                                    <p><strong>Brand:</strong> {product.brand}</p>
                                    <p><strong>Burn Time:</strong> {product.burnTime} hrs</p>
                                    <p><strong>Material:</strong> {product.material}</p>
                                    <p><strong>Weight:</strong> {product.weight}g</p>
                                </div>

                                {/* Colors */}
                                <div className="flex gap-2 mt-2">
                                    {product.colors.map((color, index) => (
                                        <span key={index} className="text-xs font-medium bg-gray-200 px-2 py-1 rounded">{color}</span>
                                    ))}
                                </div>

                                {/* Scents */}
                                <div className="flex gap-2 mt-2">
                                    {product.scents.map((scent, index) => (
                                        <span key={index} className="text-xs font-medium bg-purple-200 px-2 py-1 rounded">{scent}</span>
                                    ))}
                                </div>

                               <div className="flex gap-2">
                               <button className="mt-4 flex items-center justify-center gap-2 w-full bg-yellow-500 hover:bg-yellow-600 text-white py-2 rounded-md">
                                    <span>
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-5">
  <path strokeLinecap="round" strokeLinejoin="round" d="m16.862 4.487 1.687-1.688a1.875 1.875 0 1 1 2.652 2.652L10.582 16.07a4.5 4.5 0 0 1-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 0 1 1.13-1.897l8.932-8.931Zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0 1 15.75 21H5.25A2.25 2.25 0 0 1 3 18.75V8.25A2.25 2.25 0 0 1 5.25 6H10" />
</svg>

                                    </span>
                                    Edit
                                </button>
                                <button className="mt-4 w-full flex items-center justify-center gap-2 text-red-500 shadow py-2 rounded-md">
                                    <span className="text-red-500">
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-5">
  <path strokeLinecap="round" strokeLinejoin="round" d="m14.74 9-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 0 1-2.244 2.077H8.084a2.25 2.25 0 0 1-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 0 0-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 0 1 3.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 0 0-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 0 0-7.5 0" />
</svg>

                                    </span>
                                    Delete
                                </button>

                               </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </>
    );
};

export default ViewProducts;
