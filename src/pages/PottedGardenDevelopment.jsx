import React, { useEffect} from "react";
import Navbar from "../components/Navbar";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { fetchProducts } from "../redux/slices/productSlice";

const PottedGardenDevelopment = () => {
  const { products, loading, error } = useSelector((state) => state.products);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchProducts());
  }, [dispatch]);

  const calculateDiscount = (price, discount) => {
    return (price * discount) / 100;
  };

  return (
    <>
      <div className="sticky top-0 z-50 bg-white shadow-md">
        <Navbar />
      </div>
      <div className="heroBg2 relative h-[30vh] lg:h-[50vh]">
        <div className="h-[70%] flex flex-col items-center justify-center text-center px-4 relative z-10">
          <p className="text-black text-3xl md:text-5xl">Sented Candles</p>
          <p className="text-black text-xl md:text-3xl mt-2">
            Handcrafted candles that light up every moment.
          </p>
        </div>
      </div>

      <div className="container mx-auto p-2 grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-3 gap-3 cursor-pointer">
        {products.filter((product) => product.category === "SentedCandles").length === 0 ? (
          <div className="col-span-2 lg:col-span-3 text-center text-gray-600 text-lg font-semibold p-3">
            Oops! No Sented Candles available right now. Check back later for amazing deals! 🛍️
          </div>
        ) : (
          products
            .filter((product) => product.category === "SentedCandles")
            .map((product) => (
              <div
                key={product.id}
                className="bg-white shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300"
                onClick={() => navigate(`/product/${product.id}`, { state: { product } })}
              >
                <div className="relative">
                  <img
                    src={product.imageUrl}
                    alt={product.name}
                    className="w-full h-40 md:h-64 object-cover"
                  />
                  {product.discount > 0 && (
                    <div className="absolute top-2 right-2 bg-red-500 text-white px-2 py-1 rounded-full text-[10px]">
                      {product.discount}% OFF
                    </div>
                  )}
                </div>

                <div className="p-4">
                  <h3 className="text-[12px] mb-2 cursor-pointer">{product.name}</h3>
                  <div className="flex items-center justify-between">
                    <div>
                      {product.discount > 0 ? (
                        <>
                          <span className="text-[12px]">
                            ₹{(product.price - calculateDiscount(product.price, product.discount)).toFixed(2)}
                          </span>
                          <span className="ml-2 text-gray-400 line-through text-[10px]">₹{product.price}</span>
                        </>
                      ) : (
                        <span className="text-[12px]">₹{product.price}</span>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            ))
        )}
      </div>
    </>
  );
};


export default PottedGardenDevelopment