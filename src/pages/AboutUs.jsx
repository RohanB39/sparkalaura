import React, { useEffect, useRef } from "react";
import Navbar from "../components/Navbar";
import { Link } from "react-router-dom";
import gsap from "gsap";
import { RiCandleFill } from "react-icons/ri";
import Information from "../components/Information";

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
    <div className="mb-12">
      <div className="heroBg relative h-[30vh] lg:h-[50vh]">
        <div className="absolute inset-0 bg-gradient-to-b from-black/10 via-black/10 to-black/10"></div>
        <Navbar className="relative z-10" />
        <div className="w-[90%] max-w-[1224px] mx-auto ">
          <span className="absolute bottom-2 font-normal text-[24px] md:text-[36px] text-white tracking-wide">
            About Sparkle Aura
          </span>
        </div>
      </div>
      <div className="w-[90%] max-w-[1224px] mx-auto mt-12">
        <div className="mt-4 lg:flex justify-between items-center gap-4">
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
                alt="bg23"
                className="h-99 w-full object-cover"
              />
            </div>
          </div>
          <div className="basis-[70%]">
            <div className="grid md:grid-cols-2 gap-4 mb-4 mt-4">
              <p className="text-base">
                Welcome to Sparkle Aura, where we believe that every space deserves to be filled with warmth, beauty, and the enchanting glow of a perfectly crafted candle. We specialize in hand-poured, luxurious scented candles that elevate your environment, whether it's a cozy evening at home or a special celebration.
              </p>
              <p className="text-base">
                {" "}
                At House of Aura, we are committed to quality, sustainability, and creativity. Our candles are made with premium ingredients and eco-friendly materials, ensuring they burn clean and bright. Whether you’re looking for the perfect gift or something special for yourself, we invite you to discover the warmth and charm of House of Aura.

                Light up your world with us. 💫
              </p>
            </div>
            <img
              src="/images/7.jpg"
              alt="bg23"
              className="h-60 w-full object-cover"
            />
          </div>
        </div>
      </div>

      <div className="w-[90%] max-w-[1224px] mx-auto">
        <div className="aboutHeader pt-20">
          <div className="md:flex justify-between items-end mb-6">
            <p className="md:text-[34px] text-[24px] font-work font-normal leading-tight">
              Igniting warmth in every flame, <br /> illuminating moments with elegance.
            </p>

          </div>
        </div>
        <div className="aboutMain lg:flex justify-between items-end gap-12 mt-12 ">
          <div className="content basis-[100%] grid md:grid-cols-3 gap-4">
            <div className="border p-4 bg-yellow-900">
              <span className="">
                <RiCandleFill className="border text-4xl p-2 border-green-100 bg-yellow-700 text-white" />
              </span>
              <h5 className="text-[16px] text-yellow-100 font-medium mt-4">
                {" "}
                SparkleAura's Mission
              </h5>
              <p className="text-sm font-normal mt-2 text-yellow-300">
                Illuminating lives with handcrafted elegance. At SparkleAura, we create
                candles that inspire tranquility, warmth, and a touch of luxury in every
                space.
              </p>
            </div>
            <div className="border p-4">
              <span className="">
                <RiCandleFill className="border text-4xl p-2 border-yellow-900" />
              </span>
              <h5 className="text-[16px] text-yellow-950 font-medium mt-4">
                {" "}
                SparkleAura's Vision
              </h5>
              <p className="text-sm font-normal mt-2">
                To illuminate every space with elegance and serenity, creating a world where
                warmth and fragrance inspire tranquility and joy.
              </p>
            </div>
            <div className="border p-4">
              <span className="">
                <RiCandleFill className="border text-4xl p-2 border-yellow-900" />
              </span>
              <h5 className="text-[16px] text-yellow-950 font-medium mt-4">
                {" "}
                SparkleAura's Purpose
              </h5>
              <p className="text-sm font-normal mt-2">
                To infuse every space with warmth and serenity, transforming moments with
                the soft glow and soothing fragrances of our handcrafted candles.
              </p>
            </div>
          </div>
        </div>
      </div>
      <Information />

      <div className="w-[90%] max-w-[1224px] mx-auto mt-8 ">
        <div className="lg:mt-32 mt-8  gap-4 h-auto">
          <div className=" basis-[20%] mb-4">
            <div className="leading-tight  bottom-2">
              <p className="md:text-[28px] text-[24px]">Where Light Meets Art</p>
            </div>
            <p className="text-base font-normal">
              A glimpse of our finest creations.
            </p>
          </div>

          <div className="relative w-full h-full ">
            <div className="flex flex-col gap-2">
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-2">
                <div>
                  <img
                    src="/images/4.jpg"
                    alt="Work 1"
                    className="h-full object-cover w-full"
                  />
                </div>
                <div>
                  <img
                    src="/images/4.jpg"
                    alt="Work 2"
                    className="h-[20vh] object-cover w-full mb-2"
                  />
                  <img
                    src="/images/1.jpg"
                    alt="Work 3"
                    className="h-[50vh] object-cover w-full"
                  />
                </div>
                <div>
                  <img
                    src="/images/2.jpg"
                    alt="Work 4"
                    className="h-[50vh] object-cover w-full mb-2"
                  />
                  <img
                    src="/images/3.jpg"
                    alt="Work 5"
                    className="h-[20vh] object-cover w-full"
                  />
                </div>
                <div>
                  <img
                    src="/images/4.jpg"
                    alt="Work 2"
                    className="h-[20vh] object-cover w-full mb-2"
                  />
                  <img
                    src="/images/5.jpg"
                    alt="Work 3"
                    className="h-[50vh] object-cover w-full"
                  />
                </div>
                {/* mid row */}
                <div>
                  <img
                    src="/images/6.jpg"
                    alt="Work 1"
                    className="h-full object-cover w-full"
                  />
                </div>
                <div>
                  <img
                    src="/images/7.jpg"
                    alt="Work 2"
                    className="h-[20vh] object-cover w-full mb-2"
                  />
                  <img
                    src="/images/8.jpg"
                    alt="Work 3"
                    className="h-[50vh] object-cover w-full"
                  />
                </div>

                <div>
                  <img
                    src="/images/9.jpg"
                    alt="Work 1"
                    className="h-full object-cover w-full"
                  />
                </div>
                <div>
                  <img
                    src="/images/10.jpg"
                    alt="Work 2"
                    className="h-[60vh] object-cover w-full mb-2"
                  />
                  <img
                    src="/images/11.jpg"
                    alt="Work 3"
                    className="h-[60vh] object-cover w-full"
                  />
                </div>
                <div>
                  <img
                    src="/images/12.jpg"
                    alt="Work 1"
                    className="h-full object-cover w-full"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
