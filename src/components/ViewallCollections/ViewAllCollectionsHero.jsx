import React from "react";
import SmallNav from "../SmallNav";
import Navbar from "../Navbar";

const ViewAllCollectionsHero = () => {
  return (
    <div className="relative w-full">
      {/* ✅ Fixed Navbar */}
      <div className="fixed top-0 left-0 w-full z-50 bg-black/80 backdrop-blur-md shadow-md">
        <SmallNav />
        <Navbar />
      </div>

      {/* ✅ Hero Section */}
      <div className="relative h-[40vh] flex items-end mt-[6rem]">
        {/* ✅ Background Video */}
        <video
          autoPlay
          muted
          loop
          playsInline
          className="absolute top-0 left-0 w-full h-full object-cover scale-100"
        >
          <source src="/images/2.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        <div className="absolute top-0 left-0 w-full h-full bg-black/30"></div>
        {/* ✅ Hero Content */}
        <div className="relative z-10 flex flex-col mb-5 w-full text-white text-center">
          <h1 className="text-2xl">Explore Our Collections</h1>
          <p>Find the best products curated just for you.</p>
        </div>
      </div>
    </div>
  );
};

export default ViewAllCollectionsHero;
