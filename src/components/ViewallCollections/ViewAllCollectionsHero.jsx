import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { Link } from "react-router-dom";
import SmallNav from "../SmallNav";
import Navbar from "../Navbar";

const ViewAllCollectionsHero = () => {
  const textRefs = useRef([]);
  const boxTextRef = useRef(null);
  const heroBgRef = useRef(null);

  const texts = [
    "Illuminate your space, soothe your soul, Sparkle Aura glows.",
    "Pure scents & endless serenity—Sparkle Aura.",
    "Indulge in aroma, embrace the glow, feel the Sparkle Aura.",
  ];

  const boxTexts = [
    "Transforming urban spaces into thriving green landscapes.",
    "Nature-inspired solutions for a sustainable future.",
    "Bringing eco-friendly innovation to every project.",
  ];

  useEffect(() => {
    if (
      !heroBgRef.current ||
      textRefs.current.length === 0 ||
      !boxTextRef.current
    )
      return;
    gsap.fromTo(
      heroBgRef.current,
      { y: "-100%", opacity: 0 },
      { y: "0%", opacity: 1, duration: 2.5, ease: "power3.out" }
    );
    let tl = gsap.timeline({ repeat: -1 });
    texts.forEach((_, index) => {
      tl.to(textRefs.current[index], {
        opacity: 1,
        y: 0,
        duration: 1.5,
        ease: "power3.out",
      }).to(textRefs.current[index], {
        opacity: 0,
        y: -20,
        duration: 1.5,
        ease: "power3.in",
        delay: 2,
      });
    });
    let boxTl = gsap.timeline({ repeat: -1 });
    boxTexts.forEach((text, index) => {
      boxTl
        .to(boxTextRef.current, {
          opacity: 0,
          x: 50,
          duration: 0.8,
          ease: "power3.in",
        })
        .set(boxTextRef.current, { x: -50, opacity: 0, textContent: text })
        .to(boxTextRef.current, {
          opacity: 1,
          x: 0,
          duration: 1.2,
          ease: "power3.out",
        })
        .delay(5);
    });
  }, []);

  return (
    <div className="relative overflow-hidden">
      {/* ✅ Fixed Navbar */}
      <div className="fixed top-0 left-0 w-full z-50 bg-black/80 backdrop-blur-md shadow-md">
        <SmallNav />
        <Navbar />
      </div>

      {/* ✅ Hero Section with Padding to Prevent Overlap */}
      <div ref={heroBgRef} className="pt-24">
        <video
          autoPlay
          muted
          loop
          playsInline
          className="absolute top-[5%] left-0 w-full h-full object-cover object-center lg:h-[160%] lg:top-0"
        >
          <source src="/images/2.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>

        <div className="relative z-10 text-yellow-100 font-bold flex items-center min-h-screen">
          <div className="w-[90%] max-w-[1224px] ml-10 mt-60">
            <div className="relative h-[130px] md:h-[120px] overflow-hidden">
              {texts.map((text, index) => (
                <p
                  key={index}
                  ref={(el) => (textRefs.current[index] = el)}
                  className="text-[26px] md:text-[44px] font-normal tracking-wide leading-tight w-full md:w-[50%] absolute opacity-0 translate-y-10 text-left overflow-hidden"
                >
                  {text}
                </p>
              ))}
            </div>
            <div className="md:block mt-4 w-fit py-2 px-6 bg-yellow-500/60 backdrop-blur-sm border-white/30 shadow-lg text-black">
             
                <button className="text-sm md:text-base cursor-pointer tracking-wide font-normal flex items-center gap-2">
                  Check out our all collections below
                </button>
            </div>
          </div>
          <div className="hidden md:absolute md:right-10 bottom-24 w-full h-[10vh] md:w-[30%] p-4 bg-black/20 backdrop-blur-sm border-white/30 shadow-lg text-white overflow-hidden">
            <p ref={boxTextRef} className="text-sm font-normal">
              Transforming urban spaces into thriving green landscapes.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ViewAllCollectionsHero