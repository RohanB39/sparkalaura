import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import { motion } from "framer-motion";
import axios from "axios";
import SmallNav from "../../components/SmallNav";
import Navbar from "../../components/Navbar";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Checkout = () => {
    const location = useLocation();
    const product = location.state;
    const [user, setUser] = useState({
        name: "",
        email: "",
        phone: "",
        postalCode: "",
        address: "",
        city: "",
        taluka: "",
        district: "",
        state: "",
        country: "India",
    });

    const [cities, setCities] = useState([]);
    const [talukas, setTalukas] = useState([]);
    const [districts, setDistricts] = useState([]);
    const [states, setStates] = useState([]);
    const [createAccount, setCreateAccount] = useState(false);
    const [paymentConditions, setPaymentCondittions] = useState(false);
    const [ShippingConditions, setShippingConditions] = useState(false);
    const [password, setPassword] = useState("");
    const [showPasswordPopup, setShowPasswordPopup] = useState(false);


    const [shipping, setShipping] = useState({
        method: "Standard Shipping",
        cost: 50, // Default shipping cost
        estimatedDelivery: "3-5 Business Days",
    });

    const taxRate = 0.18; // 18% GST
    const subtotal = product.SelectedProductDiscountedPrice * product.SelectedProductSelectedQuantity;
    const taxAmount = subtotal * taxRate;
    const totalAmount = subtotal + taxAmount + shipping.cost;

    useEffect(() => {
        const userLoggedIn = localStorage.getItem("userLoggedIn");

        if (userLoggedIn === "true") {
            fetchUserData();
        }
        loadRazorpayScript();
    }, []);

    const fetchUserData = async () => {
        try {
            const { data } = await axios.get("http://localhost:8888/api/user/details");
            setUser({
                name: data.name || "",
                email: data.email || "",
                phone: data.phone || "",
                address: data.address || "",
                city: data.city || "",
                state: data.state || "",
                postalCode: data.postalCode || "",
                country: data.country || "India",
            });
        } catch (error) {
            console.error("Error fetching user data:", error);
        }
    };

    const loadRazorpayScript = () => {
        return new Promise((resolve) => {
            if (window.Razorpay) {
                resolve(true);
                return;
            }
            const script = document.createElement("script");
            script.src = "https://checkout.razorpay.com/v1/checkout.js";
            script.onload = () => resolve(true);
            script.onerror = () => resolve(false);
            document.body.appendChild(script);
        });
    };

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setUser((prev) => ({ ...prev, [name]: value }));
        if (name === "postalCode" && value.length === 6) {
            fetchLocationData(value);
        }
    };

    const handlePayment = async () => {
        const scriptLoaded = await loadRazorpayScript();
        if (!scriptLoaded) {
            toast.error("Failed to load Razorpay SDK.", { position: "top-center", autoClose: 2000 });
            return;
        }

        if (!paymentConditions) {
            toast.error("Please check the payment conditions before proceeding.", { position: "top-center", autoClose: 2000 });
            return;
        }

        if (!ShippingConditions) {
            toast.error("Please check the shipping conditions before proceeding.", { position: "top-center", autoClose: 2000 });
            return;
        }

        if (!user.name || !user.email || !user.phone || !user.postalCode || !user.address || !user.city || !user.district || !user.state) {
            toast.error("Please fill in all billing details before proceeding.", { position: "top-center", autoClose: 2000 });
            return;
        }

        if (!product.SelectedProductId || !product.SelectedProductName || !product.SelectedProductDiscountedPrice || !product.SelectedProductSelectedQuantity) {
            toast.error("Product details are missing. Please select a product before proceeding.", { position: "top-center", autoClose: 2000 });
            return;
        }

        const orderData = {
            ...user,
            finalAmount: totalAmount,
            product: {
                SelectedProductId: product.SelectedProductId,
                SelectedProductName: product.SelectedProductName,
                SelectedProductDiscount: product.SelectedProductDiscount,
                SelectedProductDiscountedPrice: product.SelectedProductDiscountedPrice,
                SelectedProductSelectedColor: product.SelectedProductSelectedColor,
                SelectedProductSelectedQuantity: product.SelectedProductSelectedQuantity,
                SelectedProductSelectedScent: product.SelectedProductSelectedScent,
                selectedProductOriginalPrice: product.selectedProductOriginalPrice,
                selectProductImage: product.selectProductImage,
            },
        };
        try {
            const { data } = await axios.post("https://sp.corely.in/api/order/createOrder", orderData);
            const options = {
                key: "rzp_test_39SN1CVZ2cK38s",
                amount: data.amount * 100,
                currency: "INR",
                name: "Sparkle Aura",
                description: product.SelectedProductName,
                image: product.selectProductImage,
                order_id: data.id,
                handler: async function (response) {
                    await axios.post("https://sp.corely.in/api/order/verify-payment", response);
                    toast.success("Payment Successfull..!", { position: "top-center", autoClose: 2000 });
                },
                prefill: { name: user.name, email: user.email, contact: user.phone },
            };

            const rzp1 = new window.Razorpay(options);
            rzp1.open();
        } catch (error) {
            console.error("Error creating order:", error);
            toast.error("Order creation failed. Please try again.", { position: "top-center", autoClose: 2000 });
        }
    };

    const fetchLocationData = async (pinCode) => {
        try {
            const response = await axios.get(`https://api.postalpincode.in/pincode/${pinCode}`);
            const data = response.data;

            if (data && data[0].Status === "Success") {
                const postOffices = data[0].PostOffice;
                const uniqueCities = [...new Set(postOffices.map(po => po.Name))];
                const uniqueDistricts = [...new Set(postOffices.map(po => po.District))];
                const uniqueStates = [...new Set(postOffices.map(po => po.State))];
                const uniqueTaluks = [...new Set(postOffices.map(po => po.Block))];

                setCities(uniqueCities);
                setDistricts(uniqueDistricts);
                setStates(uniqueStates);
                setTalukas(uniqueTaluks);
                setUser((prev) => ({
                    ...prev,
                    city: uniqueCities[0] || "",
                    district: uniqueDistricts[0] || "",
                    state: uniqueStates[0] || "",
                    country: data[0].PostOffice[0].Country,
                }));
            }
        } catch (error) {
            console.error("Error fetching location:", error);
        }
    };

    const handleCreateAccountChange = () => {
        setCreateAccount(!createAccount);
        setShowPasswordPopup(!createAccount); // Show password popup when checked
    };

    return (
        <>
            <div className="fixed top-0 left-0 w-full z-50 bg-black/80 backdrop-blur-md shadow-md">
                <SmallNav />
                <Navbar />
            </div>

            <motion.div className="flex flex-col items-center justify-center min-h-screen p-6 text-black mt-36"
                initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>

                {/* Order Details Card */}
                <motion.div className="w-full max-w-lg p-3 shadow-lg"
                    initial={{ scale: 0.9 }} animate={{ scale: 1 }} transition={{ duration: 0.3 }}>
                    <h2 className="text-xl font-semibold text-center mb-4">Order Summary</h2>
                    <div className="flex items-center gap-4">
                        <img src={product.selectProductImage} alt="Product" className="w-20 h-20 object-cover" />
                        <div>
                            <h3 className="text-lg font-bold">{product.SelectedProductName}</h3>
                            <p className="text-sm text-gray-400">Product Id: {product.SelectedProductId}</p>
                            <p className="text-sm text-gray-400">Color: {product.SelectedProductSelectedColor}</p>
                            <p className="text-sm text-gray-400">Scent: {product.SelectedProductSelectedScent}</p>
                            <p className="text-sm text-gray-400">Quantity: {product.SelectedProductSelectedQuantity}</p>
                            <p className="text-lg font-semibold text-yellow-600">Rs {subtotal.toFixed(2)}</p>
                        </div>
                    </div>
                </motion.div>

                {/* Shipping Details */}
                <motion.div className="w-full max-w-lg mt-6 p-3 shadow-lg"
                    initial={{ scale: 0.9 }} animate={{ scale: 1 }} transition={{ duration: 0.3 }}>
                    <h2 className="text-2xl font-bold text-center mb-4">Shipping Details</h2>
                    <p><strong>Method:</strong> {shipping.method}</p>
                    <p><strong>Estimated Delivery:</strong> {shipping.estimatedDelivery}</p>
                    <p><strong>Shipping Cost:</strong> ₹{shipping.cost.toFixed(2)}</p>
                </motion.div>

                {/* Checkout Form */}
                <motion.div className="w-full max-w-lg mt-6 p-6 shadow-lg"
                    initial={{ scale: 0.9 }} animate={{ scale: 1 }} transition={{ duration: 0.3 }}>
                    <h2 className="text-2xl font-bold text-center mb-4">Billing Information</h2>
                    <form className="space-y-4">

                        <input type="text" name="name" placeholder="Full Name*" value={user.name} onChange={handleInputChange}
                            className="w-full p-2 border border-gray-600 focus:outline-none" />

                        <div className="grid grid-cols-2 gap-3">
                            <input type="email" name="email" placeholder="Email Address*" value={user.email} onChange={handleInputChange}
                                className="w-full p-2 border border-gray-600 focus:outline-none" />

                            <input type="text" name="phone" placeholder="Phone Number*" value={user.phone} onChange={handleInputChange}
                                className="w-full p-2 border border-gray-600 focus:outline-none" />

                        </div>
                        <input type="text" name="postalCode" placeholder="Pin Code*" value={user.postalCode} onChange={handleInputChange}
                            className="w-full p-2 border border-gray-600 focus:outline-none" />

                        <textarea type="text" name="address" placeholder="Flat/Plot No, Street, Landmark*" value={user.address} onChange={handleInputChange}
                            className="w-full p-2 border border-gray-600 focus:outline-none" />

                        <select
                            name="city"
                            value={user.city || ""}
                            onChange={handleInputChange}
                            className="w-full p-2 border border-gray-600 focus:outline-none"
                        >
                            <option value="" disabled>
                                Select City/Village
                            </option>
                            {cities.map((city, index) => (
                                <option key={index} value={city}>
                                    {city}
                                </option>
                            ))}
                        </select>

                        <select
                            name="taluka"
                            value={user.taluka || ""}
                            onChange={handleInputChange}
                            className="w-full p-2 border border-gray-600 focus:outline-none"
                        >
                            <option value="" disabled>
                                Select Tal
                            </option>
                            {talukas.map((taluka, index) => (
                                <option key={index} value={taluka}>
                                    {taluka}
                                </option>
                            ))}
                        </select>


                        <select name="district" value={user.district} onChange={handleInputChange} className="w-full p-2 border border-gray-600 focus:outline-none">
                            {districts.map((district, index) => <option key={index} value={district}>{district}</option>)}
                        </select>

                        <select name="state" value={user.state} onChange={handleInputChange} className="w-full p-2 border border-gray-600 focus:outline-none">
                            {states.map((state, index) => <option key={index} value={state}>{state}</option>)}
                        </select>
                        <div>
                            <div>
                                <label className="inline-flex items-center">
                                    <input
                                        type="checkbox"
                                        checked={createAccount}
                                        onChange={handleCreateAccountChange}
                                        className="form-checkbox h-3 w-3 text-blue-600"
                                    />
                                    <span className="ml-2 text-[13px]">Create an account for future purchases</span>
                                </label>
                            </div>
                            <div>
                                <label className="inline-flex items-center">
                                    <input
                                        type="checkbox"
                                        checked={paymentConditions}
                                        onChange={() => setPaymentCondittions(!paymentConditions)}
                                        className="form-checkbox h-3 w-3 text-blue-600"
                                    />
                                    <span className="ml-2 text-[13px]">I aggreed all payment conditions</span>
                                </label>
                            </div>
                            <div>
                                <label className="inline-flex items-center">
                                    <input
                                        type="checkbox"
                                        checked={ShippingConditions}
                                        onChange={() => setShippingConditions(!ShippingConditions)}
                                        className="form-checkbox h-3 w-3 text-blue-600"
                                    />
                                    <span className="ml-2 text-[13px]">I aggreed all shipping conditions</span>
                                </label>
                            </div>
                            {showPasswordPopup && (
                                <div className="mt-4 bg-white shadow-lg">
                                    <label className="block text-sm font-medium text-gray-700">Enter Password For Your New Account</label>
                                    <input
                                        type="password"
                                        value={password}
                                        onChange={(e) => setPassword(e.target.value)}
                                        className="mt-1 p-2 w-full border border-gray-400 focus:outline-none"
                                        placeholder="Enter your password"
                                    />
                                </div>
                            )}

                        </div>
                    </form>
                </motion.div>

                {/* Payment Summary */}
                <motion.div className="w-full max-w-lg mt-6 p-6 shadow-lg"
                    initial={{ scale: 0.9 }} animate={{ scale: 1 }} transition={{ duration: 0.3 }}>
                    <h2 className="text-2xl font-bold text-center mb-4">Payment Summary</h2>
                    <p><strong>Subtotal:</strong> Rs. {subtotal.toFixed(2)}</p>
                    <p><strong>Tax (18% GST):</strong> Rs. {taxAmount.toFixed(2)}</p>
                    <p><strong>Shipping:</strong> Rs. {shipping.cost.toFixed(2)}</p>
                    <p className="text-lg font-bold text-blue-400">Total: Rs. {totalAmount.toFixed(2)}</p>
                </motion.div>

                <motion.button type="button" onClick={handlePayment}
                    className="w-full p-3 mt-4 text-lg font-bold text-white bg-yellow-600 hover:bg-yellow-700 transition duration-300"
                    whileTap={{ scale: 0.9 }}>
                    Pay ₹{totalAmount.toFixed(2)}
                </motion.button>
            </motion.div>
        </>
    );
};

export default Checkout;
