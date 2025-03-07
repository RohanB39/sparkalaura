import React from "react";
import { FaFacebookF, FaInstagram, FaYoutube, FaWhatsapp } from "react-icons/fa";

const SmallNav = () => {
    return (
        <div className="bg-gray-600 p-3 text-white text-center">
            <div className="flex flex-col md:flex-row items-center justify-around max-w-[1200px] mx-auto">
                {/* Social Icons */}
                <div className="flex gap-4 mb-2 md:mb-0">
                    <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
                        <FaFacebookF className="text-sm hover:text-gray-300 transition" />
                    </a>
                    <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
                        <FaInstagram className="text-sm hover:text-gray-300 transition" />
                    </a>
                    <a href="https://youtube.com" target="_blank" rel="noopener noreferrer">
                        <FaYoutube className="text-sm hover:text-gray-300 transition" />
                    </a>
                    <a href="https://wa.me/your-number" target="_blank" rel="noopener noreferrer">
                        <FaWhatsapp className="text-sm hover:text-gray-300 transition" />
                    </a>
                </div>

                {/* Offer Message */}
                <div className="text-[10px] md:text-base">
                    <span>We're offering <span className="text-yellow-300">FREE SHIPPING</span> on all your orders! 🎉</span>
                </div>
            </div>
        </div>
    );
};

export default SmallNav;
