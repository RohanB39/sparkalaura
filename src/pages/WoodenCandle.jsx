import React from 'react'
import Navbar from "../components/Navbar";

const WoodenCandle = () => {
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
          stars: "3.5",
          description: "Premium quality wax candle with a soothing fragrance.",
          colors: ["Blue", "Black", "White"],
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
          stars: "4.5",
          description: "A perfect candle gift for your mom, handcrafted with love.",
          colors: ["Red", "Black", "Pink"],
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
          stars: "4.5",
          description: "A perfect candle gift for your mom, handcrafted with love.",
          colors: ["Red", "Black", "Pink"],
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
          stars: "4.5",
          description: "A perfect candle gift for your mom, handcrafted with love.",
          colors: ["Red", "Black", "Pink"],
        },
        {
          id: "2",
          name: "Mom's Gift Candles",
          price: 699.99,
          imageUrl: "/ServiceImages/s2.webp",
          totalReviews: 256,
          // discount: 10,
          images: [
            "/ServiceImages/s1.webp",
            "/ServiceImages/s2.webp",
            "/ServiceImages/s3.webp",
            "/ServiceImages/s4.webp",
          ],
          stars: "4.5",
          description: "A perfect candle gift for your mom, handcrafted with love.",
          colors: ["Red", "Black", "Pink"],
        },
      ];
    
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
              <p className="text-black text-3xl md:text-5xl">Wooden Candles</p>
              <p className="text-black text-xl md:text-3xl mt-2">
                Handcrafted candles that light up every moment.
              </p>
            </div>
          </div>
    
          <div className="container mx-auto p-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 cursor-pointer">
            {products.map((product) => (
              <div
                key={product.id}
                className="bg-white shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300"
              >
                <div className="relative">
                  <img
                    src={product.imageUrl}
                    alt={product.name}
                    className="w-full h-64 object-cover"
                  />
                  {product.discount > 0 && (
                    <div className="absolute top-2 right-2 bg-red-500 text-white px-3 py-1 rounded-full text-sm">
                      {product.discount}% OFF
                    </div>
                  )}
                </div>
    
                <div className="p-4">
                  <h3 className="text-lg font-semibold mb-2 cursor-pointer">{product.name}</h3>
                  <p className="text-gray-600 text-sm mb-4">{product.description}</p>
    
                  <div className="flex items-center justify-between mb-4">
                    <div>
                      {product.discount > 0 ? (
                        <>
                          <span className="text-2xl">
                            ₹{(product.price - calculateDiscount(product.price, product.discount)).toFixed(2)}
                          </span>
                          <span className="ml-2 text-gray-400 line-through">₹{product.price}</span>
                        </>
                      ) : (
                        <span className="text-2xl font-bold">₹{product.price}</span>
                      )}
                    </div>
                  </div>
    
                  <div className="mb-4">
                    <span className="text-sm text-gray-600">Colors:</span>
                    <div className="flex space-x-2 mt-1">
                      {product.colors.map((color, index) => (
                        <div
                          key={index}
                          className="w-6 h-6 rounded-full border border-gray-200"
                          style={{ backgroundColor: color.toLowerCase() }}
                        />
                      ))}
                    </div>
                  </div>
    
                  <div className="flex space-x-2">
                    <button className="flex-1 bg-yellow-600 text-white py-2 hover:bg-yellow-700 cursor-pointer transition-colors duration-300">
                      Add to Cart
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </>
      );
    };

export default WoodenCandle