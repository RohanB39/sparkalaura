import React, { useEffect, useRef } from "react";
import Navbar from "../components/Navbar";
import { RiCandleFill } from "react-icons/ri";
import Information from "../components/Information";
import gsap from "gsap";

const AboutUs = () => {
  const heroBgRef = useRef(null);

  useEffect(() => {
    gsap.fromTo(
      heroBgRef.current,
      { opacity: 0, y: "-100%" },
      { opacity: 1, y: "0%", duration: 5, ease: "power3.out" }
    );
  }, []);

  return (
    <div className="pt-[80px] mb-12">
      {/* Sticky Navbar */}
      <div className="fixed top-0 left-0 w-full z-50 bg-white shadow-md">
        <Navbar />
      </div>

      {/* Hero Section */}
      <div className="heroBg relative h-[30vh] lg:h-[50vh]" ref={heroBgRef}>
        <div className="absolute inset-0 bg-gradient-to-b from-black/10 via-black/10 to-black/10"></div>
        <div className="w-[90%] max-w-[1224px] mx-auto">
          <span className="absolute bottom-2 font-normal text-[24px] md:text-[36px] text-white tracking-wide">
            About Sparkle Aura
          </span>
        </div>
      </div>

      {/* Content Section */}
      <div className="w-[90%] max-w-[1224px] mx-auto mt-12">
        <div className="mt-4 lg:flex justify-between items-center gap-4">
          {/* Founder Section */}
          <div className="leading-tight basis-[30%]">
            <div className="md:mb-16 xl:mb-1">
              <p className="md:text-[24px] text-[24px] font-normal text-yellow-900">
                Hi, I'm Tejashri
              </p>
              <p className="md:text-[12px] text-[12px] font-normal text-yellow-900">
                Founder of Sparkle Aura
              </p>
            </div>
            <div className="mt-10">
              <img
                src="/images/Teju.jpg"
                alt="Founder"
                className="h-99 w-full object-cover"
              />
            </div>
          </div>

          {/* Description Section */}
          <div className="basis-[70%]">
            <div className="grid md:grid-cols-2 gap-4 mb-4 mt-4">
              <p className="text-base">
                Welcome to Sparkle Aura, where we believe that every space deserves to be filled with warmth, beauty, and the enchanting glow of a perfectly crafted candle. 
              </p>
              <p className="text-base">
                At House of Aura, we are committed to quality, sustainability, and creativity. Our candles are made with premium ingredients and eco-friendly materials, ensuring they burn clean and bright.
              </p>
            </div>
            <img
              src="/images/7.jpg"
              alt="Candle Image"
              className="h-60 w-full object-cover"
            />
          </div>
        </div>
      </div>

      {/* Mission, Vision, Purpose Section */}
      <div className="w-[90%] max-w-[1224px] mx-auto mt-12">
        <div className="aboutHeader pt-20">
          <div className="md:flex justify-between items-end mb-6">
            <p className="md:text-[34px] text-[24px] font-work font-normal leading-tight">
              Igniting warmth in every flame, <br /> illuminating moments with elegance.
            </p>
          </div>
        </div>
        <div className="aboutMain lg:flex justify-between items-end gap-12 mt-12">
          <div className="content basis-[100%] grid md:grid-cols-3 gap-4">
            {[
              {
                title: "SparkleAura's Mission",
                text: "Illuminating lives with handcrafted elegance...",
                bg: "bg-yellow-900",
                textColor: "text-yellow-100",
                iconBg: "bg-yellow-700 text-white",
              },
              {
                title: "SparkleAura's Vision",
                text: "To illuminate every space with elegance and serenity...",
                bg: "bg-white",
                textColor: "text-yellow-950",
                iconBg: "border-yellow-900",
              },
              {
                title: "SparkleAura's Purpose",
                text: "To infuse every space with warmth and serenity...",
                bg: "bg-white",
                textColor: "text-yellow-950",
                iconBg: "border-yellow-900",
              },
            ].map((item, index) => (
              <div key={index} className={`border p-4 ${item.bg}`}>
                <span>
                  <RiCandleFill className={`border text-4xl p-2 border-green-100 ${item.iconBg}`} />
                </span>
                <h5 className={`text-[16px] ${item.textColor} font-medium mt-4`}>
                  {item.title}
                </h5>
                <p className={`text-sm font-normal mt-2 ${item.textColor}`}>
                  {item.text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Additional Information */}
      <Information />

      {/* Gallery Section */}
      <div className="w-[90%] max-w-[1224px] mx-auto mt-8">
        <div className="lg:mt-32 mt-8 gap-4 h-auto">
          <div className="basis-[20%] mb-4">
            <div className="leading-tight bottom-2">
              <p className="md:text-[28px] text-[24px]">Where Light Meets Art</p>
            </div>
            <p className="text-base font-normal">
              A glimpse of our finest creations.
            </p>
          </div>

          <div className="relative w-full h-full">
            <div className="flex flex-col gap-2">
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-2">
                {["4", "1", "2", "3", "5", "6", "7", "8", "9", "10", "11", "12"].map((img, index) => (
                  <div key={index}>
                    <img
                      src={`/images/${img}.jpg`}
                      alt={`Work ${index + 1}`}
                      className={`h-${index % 2 === 0 ? "[50vh]" : "[20vh]"} object-cover w-full mb-2`}
                    />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
