import React from "react";
import { Link } from "react-router-dom";
import Navbar from "./Navbar";
import SmallNav from "./SmallNav";

const HeroSection = () => {
  return (
    <div className="relative overflow-hidden">
      {/* Fixed Navbar */}
      <div className="fixed top-0 left-0 w-full z-50 bg-black/80 backdrop-blur-md shadow-md">
        <SmallNav />
        <Navbar />
      </div>

      {/* Hero Section (Push it below navbar) */}
      <div className="relative h-[30vh] flex items-end mt-[10rem]">
        {/* Background Video */}
        <video
          autoPlay
          muted
          loop
          playsInline
          className="absolute top-20 left-[-20px] w-full h-full object-cover scale-200"
        >
          <source src="/images/4.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>

        {/* Button */}
        <div className="relative z-10 mb-5">
          <Link to="/viewAllCollection">
            <button className="text-sm md:text-base px-3 py-3 font-semibold text-black rounded-lg shadow-md hover:bg-black hover:text-white transition duration-300 flex items-center gap-2">
              What we sell
              <span className="border rounded-full p-1 bg-yellow-100 text-green-900 hover:bg-black hover:text-white transition duration-300">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="size-4"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="m4.5 19.5 15-15m0 0H8.25m11.25 0v11.25"
                  />
                </svg>
              </span>
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
