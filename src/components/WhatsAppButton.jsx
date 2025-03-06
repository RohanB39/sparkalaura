import React, { useState } from "react";
import { FaWhatsapp } from "react-icons/fa";

const WhatsAppButton = () => {
  const phoneNumber = "7028494950";
  const message = "Hello, I'm interested in your services!";
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div 
      className="fixed bottom-4 right-4 flex flex-col items-center z-50"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Text Appears on Hover */}
      <div
        className={`bg-black text-white text-sm px-3 py-1 rounded-lg mb-2 transition-opacity duration-300 ${
          isHovered ? "opacity-100 scale-100" : "opacity-0 scale-90"
        }`}
      >
        Let's Connect
      </div>

      {/* WhatsApp Icon */}
      <a
        href={`https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`}
        target="_blank"
        rel="noopener noreferrer"
        className="bg-green-500 text-white p-4 rounded-full shadow-lg hover:bg-green-600 transition-transform duration-300 transform hover:scale-110"
      >
        <FaWhatsapp size={32} />
      </a>
    </div>
  );
};

export default WhatsAppButton;
