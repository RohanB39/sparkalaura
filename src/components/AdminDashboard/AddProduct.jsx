import React, { useState, useEffect } from 'react';
import AdminNav from './AdminNav';
import { motion } from "framer-motion";
import { addProduct } from "../../redux/slices/addProduct";
import { useDispatch, useSelector } from "react-redux";
import { toast } from 'react-toastify';
import "react-toastify/dist/ReactToastify.css";

const AddProduct = () => {
    const [currentStep, setCurrentStep] = useState(1);
    const [formData, setFormData] = useState({
      productId: '',
      name: '',
      preffer: 'firstPage',
      price: 0,
      imageUrl: '',
      totalReviews: 0,
      discount: 0,
      stars: 0,
      description: '',
      category: 'BestSellers',
      collection: 'Festival',
      brand: 'Sparkle Aura',
      burnTime: '',
      weight: '',
      dimensions: '',
      material: '',
      fragranceStrength: 0,
      availability: 'In Stock',
      safetyInstructions: '',
      bestFor: [],
      colors: [],
      scents: [],
      images: []
    });
    const dispatch = useDispatch();
  
    const steps = ['Basic Info', 'Specifications', 'Media', 'Attributes', 'Review'];
  
    const handleChange = (e) => {
      const { name, value, type, checked } = e.target;
      if (type === 'checkbox') {
        setFormData(prev => ({
          ...prev,
          [name]: checked
            ? [...prev[name], value]
            : prev[name].filter(item => item !== value)
        }));
      } else {
        setFormData(prev => ({ ...prev, [name]: value }));
      }
    };
  
    const handleSubmit = async (e) => {
      e.preventDefault();
      dispatch(addProduct(formData))
        .unwrap()
        .then((response) => {
          toast.success(response.message || "Product added successfully!");
        })
        .catch((error) => {
          toast.error(error || "Failed to add product!");
        });
    };

    useEffect(() => {
      setFormData((prevFormData) => ({
        ...prevFormData,
        productId: generateRandomId(),
      }));
    }, []);
    

    const generateRandomId = () => {
      const randomNum = Math.floor(Math.random() * 999) + 1;
      return `P${randomNum.toString().padStart(3, "0")}`;
    };
  
  
    return (
      <>
        <div className="fixed top-0 left-0 w-full z-50 bg-black/80 backdrop-blur-md">
          <AdminNav />
        </div>
        <div className="min-h-screen p-3">
          <div className="max-w-5xl">
            {/* Stepper */}
            <div className="flex items-center mb-7 fixed top-18 left-0 w-full z-0 bg-white p-2">
              {steps.map((step, index) => {
                const isCompleted = currentStep > index + 1;
                return (
                  <div key={index} className="flex flex-col items-center w-full">
                    <motion.div
                      className={`h-6 w-6 flex items-center justify-center rounded-full font-bold transition-all 
                  ${isCompleted ? "text-yellow-500" : "text-red-800"}`}
                      initial={{ scale: 0.8 }}
  
                      transition={{ type: "spring", stiffness: 300 }}
                    >
                      {isCompleted ? (
                        <span>
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            strokeWidth={1.5}
                            stroke="currentColor"
                            className="size-6"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              d="M9 12.75 11.25 15 15 9.75M21 12c0 1.268-.63 2.39-1.593 3.068a3.745 3.745 0 0 1-1.043 3.296 3.745 3.745 0 0 1-3.296 1.043A3.745 3.745 0 0 1 12 21c-1.268 0-2.39-.63-3.068-1.593a3.746 3.746 0 0 1-3.296-1.043 3.745 3.745 0 0 1-1.043-3.296A3.745 3.745 0 0 1 3 12c0-1.268.63-2.39 1.593-3.068a3.745 3.745 0 0 1 1.043-3.296 3.746 3.746 0 0 1 3.296-1.043A3.746 3.746 0 0 1 12 3c1.268 0 2.39.63 3.068 1.593a3.746 3.746 0 0 1 3.296 1.043 3.746 3.746 0 0 1 1.043 3.296A3.745 3.745 0 0 1 21 12Z"
                            />
                          </svg>
                        </span>
                      ) : (
                        <span>
                          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v3.75m9-.75a9 9 0 1 1-18 0 9 9 0 0 1 18 0Zm-9 3.75h.008v.008H12v-.008Z" />
                          </svg>
  
                        </span>
                      )}
  
                    </motion.div>
                    <div className={"text-[10px] mt-1 text-yellow-800"}>
                      {step}
                    </div>
                  </div>
                );
              })}
            </div>
  
            <form onSubmit={handleSubmit} className="mt-36 md:w-[96vw] md:px-15">
              {/* Step 1 */}
              {currentStep === 1 && (
                <div className="space-y-6">
                  <div className="text-center text-pink-800">
                    <h4>Basic Information About Product</h4>
                  </div>
                  <div>
                    <label className="block text-[12px] font-medium text-gray-700">Product ID <span className="text-pink-800">(Auto)</span></label>
                    <input
                      type="text"
                      value={formData.productId}
                      readOnly
                      className="mt-1 block w-full bg-pink-100 shadow-sm p-2 outline-none"
                    />
                  </div>
  
                  <div className="grid grid-cols-2 gap-6">
                    <div>
                      <label className="block text-[12px] font-medium text-gray-700">Product Name</label>
                      <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        className="mt-1 block w-full border-gray-300 shadow-sm p-2 outline-none"
                      />
                    </div>
  
                    <div>
                      <label className="block text-[12px] font-medium text-gray-700">Price <span className="text-pink-800">(In Rs)</span></label>
                      <input
                        type="number"
                        name="price"
                        value={formData.price}
                        onChange={handleChange}
                        className="mt-1 block w-full border-gray-300 shadow-sm p-2 outline-none"
                      />
                    </div>
                    <div>
                      <label className="block text-[12px] font-medium text-gray-700">Preferred</label>
                      <select
                        name="preffer"
                        value={formData.preffer}
                        onChange={handleChange}
                        className="mt-1 block w-full border-gray-300 shadow-sm p-2 outline-none"
                      >
                        <option value="firstPage">First Page</option>
                        <option value="collectionPage">Collection Page</option>
                      </select>
                    </div>
  
                    <div>
                      <label className="block text-[12px] font-medium text-gray-700">Category</label>
                      <select
                        name="category"
                        value={formData.category}
                        onChange={handleChange}
                        className="mt-1 block w-full border-gray-300 shadow-sm p-2 outline-none"
                      >
                        <option value="BestSellers">Best Sellers</option>
                        <option value="JarCandles">Jar Candles</option>
                        <option value="CeramicCandles">Ceramic Candles</option>
                        <option value="GeometricCandles">Geometric Candles</option>
                        <option value="SentedCandles">Sented Candles</option>
                        <option value="WoodenCandles">Wooden Candles</option>
                      </select>
                    </div>
  
                    <div>
                      <label className="block text-[12px] font-medium text-gray-700">Collection</label>
                      <select
                        name="collection"
                        value={formData.collection}
                        onChange={handleChange}
                        className="mt-1 block w-full border-gray-300 shadow-sm p-2 outline-none"
                      >
                        <option value="Festival">Festival Collection</option>
                        <option value="Sented">Sented Collection</option>
                        <option value="valentine">Valentine Collection</option>
                      </select>
                    </div>
                    <div>
                      <label className="block text-[12px] font-medium text-gray-700">Brand</label>
                      <input
                        type="text"
                        value={formData.brand}
                        readOnly
                        className="mt-1 block w-full bg-pink-100 shadow-sm p-2 outline-none"
                      />
                    </div>
                  </div>
                  <div>
                    <div>
                      <label className="text-[12px] font-medium text-gray-700">Description</label>
                      <textarea
                        name="description"
                        type='text'
                        value={formData.description}
                        onChange={handleChange}
                        className="mt-1 block w-full border-gray-300 shadow-sm p-2 outline-none"
                      >
                      </textarea>
                    </div>
                  </div>
                </div>
              )}
  
              {/* Step 2 - Specifications */}
              {currentStep === 2 && (
                <div>
                  <div className="grid grid-cols-2 gap-6">
                    <div>
                      <label className="block text-[12px] font-medium text-gray-700">Burn Time (In Minutes)</label>
                      <input
                        type="text"
                        name="burnTime"
                        value={formData.burnTime}
                        onChange={handleChange}
                        className="mt-1 block w-full border-gray-300 shadow-sm p-2 outline-none"
                      />
                    </div>
  
                    <div>
                      <label className="block text-[12px] font-medium text-gray-700">Weight (In Grams)</label>
                      <input
                        type="text"
                        name="weight"
                        value={formData.weight}
                        onChange={handleChange}
                        className="mt-1 block w-full border-gray-300 shadow-sm p-2 outline-none"
                      />
                    </div>
  
                    <div>
                      <label className="block text-[12px] font-medium text-gray-700">Dimensions (In CM)</label>
                      <input
                        type="text"
                        name="dimensions"
                        value={formData.dimensions}
                        onChange={handleChange}
                        className="mt-1 block w-full border-gray-300 shadow-sm p-2 outline-none"
                      />
                    </div>
  
                    <div>
                      <label className="block text-[12px] font-medium text-gray-700">Material</label>
                      <input
                        type="text"
                        name="material"
                        value={formData.material}
                        onChange={handleChange}
                        className="mt-1 block w-full border-gray-300 shadow-sm p-2 outline-none"
                      />
                    </div>
  
                    <div>
                      <label className="block text-[12px] font-medium text-gray-700">Fragrance Strength</label>
                      <input
                        type="number"
                        name="fragranceStrength"
                        value={formData.fragranceStrength}
                        onChange={handleChange}
                        className="mt-1 block w-full border-gray-300 shadow-sm p-2 outline-none"
                      />
                    </div>
  
                    <div>
                      <label className="block text-[12px] font-medium text-gray-700">Discount (%)</label>
                      <input
                        type="number"
                        name="discount"
                        value={formData.discount}
                        onChange={handleChange}
                        className="mt-1 block w-full border-gray-300 shadow-sm p-2 outline-none"
                      />
                    </div>
                    <div>
                      <label className="block text-[12px] font-medium text-gray-700">Availability</label>
                      <select
                        name="availability"
                        value={formData.availability}
                        onChange={handleChange}
                        className="mt-1 block w-full border-gray-300 shadow-sm p-2 outline-none"
                      >
                        <option value="In Stock">In Stock</option>
                        <option value="Out Of Stock">Out of stock</option>
                      </select>
                    </div>
                  </div>
                  <div className="mt-2">
                    <label className="block text-[12px] font-medium text-gray-700">Safety Instructions</label>
                    <textarea
                      type="text"
                      name="safetyInstructions"
                      value={formData.safetyInstructions}
                      onChange={handleChange}
                      className="mt-1 block w-full border-gray-300 shadow-sm p-2 outline-none"
                    />
                  </div>
  
                </div>
              )}
  
              {/* Step 3 - Media */}
              {currentStep === 3 && (
                <div className="space-y-6">
                  <div>
                    <label className="block text-[12px] font-medium text-gray-700">Main Image URL</label>
                    <input
                      type="url"
                      name="imageUrl"
                      value={formData.imageUrl}
                      onChange={handleChange}
                      className="mt-1 block w-full border-gray-300 shadow-sm p-2 outline-none"
                    />
                  </div>
  
                  <div>
                    <label className="block text-[12px] font-medium text-gray-700">Additional Images</label>
                    {formData.images.map((img, index) => (
                      <input
                        key={index}
                        type="url"
                        value={img}
                        onChange={(e) => {
                          const newImages = [...formData.images];
                          newImages[index] = e.target.value;
                          setFormData({ ...formData, images: newImages });
                        }}
                        className="mt-1 block w-full border-gray-300 shadow-sm p-2 outline-none"
                      />
                    ))}
                    <button
                      type="button"
                      onClick={() => setFormData({ ...formData, images: [...formData.images, ''] })}
                      className="mt-2 text-sm text-yellow-600"
                    >
                      + Add Another Image URL
                    </button>
                  </div>
                </div>
              )}
  
              {/* Step 4 - Attributes */}
              {currentStep === 4 && (
                <div className="space-y-6">
                  <div>
                    <label className="block text-[12px] font-medium text-gray-700">Best For</label>
                    {['Home Decor', 'Relaxation', 'Gifting', 'Aromatherapy', 'Soothing', 'Warmth', 'Tranquility', 'Glow', 'Scented', 'Flickering', 'Cozy', 'Ambience', 'Elegance', 'Handmade', 'Fragrance', 'Wellness', 'Romantic', 'Serenity', 'Therapeutic', 'Healing', 'Illumination', 'Luxury'].map((option) => (
                      <label key={option} className="inline-flex items-center mt-2 mr-4">
                        <input
                          type="checkbox"
                          name="bestFor"
                          value={option}
                          checked={formData.bestFor.includes(option)}
                          onChange={handleChange}
                          className="rounded border-gray-300 text-yellow-600 shadow-sm"
                        />
                        <span className="ml-2 text-[12px]">{option}</span>
                      </label>
                    ))}
                  </div>
  
                  <div>
                    <label className="block text-[12px] font-medium text-gray-700">Colors</label>
                    {['White', 'Red', 'Pink', 'Blue', 'Green', 'Yellow', 'Orange', 'Purple', 'Black', 'Brown', 'Gold', 'Silver'].map((option) => (
                      <label key={option} className="inline-flex items-center mt-2 mr-4">
                        <input
                          type="checkbox"
                          name="colors"
                          value={option}
                          checked={formData.colors.includes(option)}
                          onChange={handleChange}
                          className="rounded border-gray-300 text-yellow-600 shadow-sm"
                        />
                        <span className="ml-2 text-[12px]">{option}</span>
                      </label>
                    ))}
                  </div>
  
                  <div>
                    <label className="block text-[12px] font-medium text-gray-700">Sents</label>
                    {['Lavender', 'Rose', 'Jasmine', 'Lilac', 'Peony', 'Citrus', 'Apple', 'Berry', 'Coconut', 'Pineapple', 'Sandalwood', 'Cedarwood', 'Patchouli', 'Pine', 'Oakmoss', 'Vanilla', 'Cinnamon', 'Clove', 'Nutmeg', 'Ginger', 'Ocean Breeze', 'Cotton/Linen', 'Eucalyptus', 'Mint', 'Rain', 'Coffee', 'Chocolate', 'Caramel', 'Pumpkin Spice', 'Honey'].map((option) => (
                      <label key={option} className="inline-flex items-center mt-2 mr-4">
                        <input
                          type="checkbox"
                          name="scents"
                          value={option}
                          checked={formData.scents.includes(option)}
                          onChange={handleChange}
                          className="rounded border-gray-300 text-yellow-600 shadow-sm"
                        />
                        <span className="ml-2 text-[12px]">{option}</span>
                      </label>
                    ))}
                  </div>
                </div>
              )}
  
              {currentStep === 5 && (
                <div className="space-y-6">
                  <div className="space-y-4 p-4 bg-white rounded-lg shadow-md w-full max-w-md mx-auto">
                    <h2 className="text-lg font-semibold text-gray-700">Product Review</h2>
                    <div className="grid grid-cols-1 gap-4 text-gray-700">
                      <p><strong>Product Name:</strong> {formData.name}</p>
                      <p><strong>Price:</strong> ₹{formData.price}</p>
                      <p><strong>Brand:</strong> {formData.brand}</p>
                      <p><strong>Burn Time:</strong> {formData.burnTime}</p>
                      <p><strong>Weight:</strong> {formData.weight}</p>
                      <p><strong>Dimensions:</strong> {formData.dimensions}</p>
                      <p><strong>Description:</strong> {formData.description}</p>
                      <p><strong>Category:</strong> {formData.category}</p>
                      <p><strong>Collection:</strong> {formData.collection}</p>
                      <p><strong>Material:</strong> {formData.material}</p>
                      <p><strong>Fragrance Strength:</strong> {formData.fragranceStrength}</p>
                      <p><strong>Availability:</strong> {formData.availability}</p>
                      <p><strong>Safety Instructions:</strong> {formData.safetyInstructions}</p>
                      <p><strong>Best For:</strong> {formData.bestFor.join(", ")}</p>
                      <p><strong>Colors:</strong> {formData.colors.join(", ")}</p>
                      <p><strong>Scents:</strong> {formData.scents.join(", ")}</p>
                    </div>
                  </div>
                </div>
              )}
  
              {/* Navigation Buttons */}
              <div className="mt-8 flex justify-between">
                {currentStep > 1 && (
                  <button
                    type="button"
                    onClick={() => setCurrentStep(currentStep - 1)}
                    className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium text-gray-700 bg-pink-100"
                  >
                    Previous
                  </button>
                )}
  
                {currentStep < steps.length ? (
                  <button
                    type="button"
                    onClick={() => setCurrentStep(currentStep + 1)}
                    className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium text-white bg-yellow-600"
                  >
                    Next
                  </button>
                ) : (
                  <button
                    type="submit"
                    className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium text-black bg-amber-200"
                  >
                    Submit Product
                  </button>
                )}
              </div>
            </form>
          </div>
        </div>
  
      </>
    );
  };

export default AddProduct