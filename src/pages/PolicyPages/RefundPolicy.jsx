import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import Navbar from "../../components/Navbar";

const RefundPolicy = () => {
    const [scrollingUp, setScrollingUp] = useState(false);
        let lastScrollY = window.scrollY;
    
        useEffect(() => {
            const handleScroll = () => {
                if (window.scrollY < lastScrollY) {
                    setScrollingUp(true);
                } else {
                    setScrollingUp(false);
                }
                lastScrollY = window.scrollY;
            };
    
            window.addEventListener("scroll", handleScroll);
            return () => window.removeEventListener("scroll", handleScroll);
        }, []);
  return (
    <div className="min-h-screen bg-gray-100">
            {/* Sticky Navbar */}
            <div className={`fixed top-0 left-0 w-full bg-white shadow-md transition-transform duration-300 ${scrollingUp ? "translate-y-0" : "-translate-y-full"}`}>
                <Navbar />
            </div>

            {/* Content with padding so it doesn't overlap Navbar */}
            <div className="max-w-4xl mx-auto p-6">
                <motion.h1
                    className="text-3xl font-semibold text-gray-900 text-center mb-6 mt-20"
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, ease: "easeOut" }}
                >
                    REFUND POLICY OF SPARKLEAURA
                </motion.h1>

                <motion.p
                    className="text-gray-700 mt-4 leading-relaxed text-justify"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 1, delay: 0.4 }}
                >
                    At House of Aura, we do not accept returns or offer refunds unless the product has a manufacturing defect. As our candles are customized and handmade, there may be slight variations between the product image shown and the actual item.<br /><br />

No Returns: As our candles are specially handcrafted for each order, we do not accept returns. Please review your order carefully before confirming your purchase.<br /><br />

No Refunds: Refunds are not provided once an order has been received and processed.<br /><br />

Damaged or Defective Items:
If you receive a damaged or defective item, please follow these steps:<br /><br />

Take a video while unboxing the item.<br /><br />
Share the video on Instagram by tagging us @houseofaura_candles and sending a direct message.<br /><br />
Include a description of the issue, and we will review the situation and offer a replacement for the defective item.<br /><br />
Contact Us:
For any questions or concerns, feel free to reach out to us at sparkleaura@gmail.com. We are happy to assist you!
                </motion.p>
            </div>
        </div>
  )
}

export default RefundPolicy