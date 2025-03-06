import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { Link } from "react-router-dom";
import Navbar from "./Navbar";
import SmallNav from "./SmallNav";

const HeroSection = () => {
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
    <div ref={heroBgRef} className="heroBg relative h-screen md:h-[100vh] overflow-hidden">
      <video
        autoPlay
        muted
        loop
        playsInline
        className="absolute top-0 left-0 w-full h-full object-cover object-center lg:h-[160%] lg:top-[-60%]"
      >
        <source src="/images/3.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      <div className="absolute inset-0">
        <SmallNav className="relative z-10" />
        <Navbar className="relative z-10" />
        <div className="relative z-10 text-yellow-100 font-bold flex items-center h-[70vh] md:h-full">
          <div className="w-[90%] max-w-[1224px] m-auto">
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
            <div className="hidden md:block mt-4 w-fit py-2 px-6 bg-yellow-500/60 backdrop-blur-sm border-white/30 shadow-lg text-black">

              <Link to="/viewAllCollection">
                <button className="text-sm md:text-base cursor-pointer tracking-wide font-normal flex items-center gap-2">
                  What we sell
                  <span className="border rounded-full p-2 bg-white text-green-900 hover:bg-black cursor-pointer hover:text-white">
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
          <div className="hidden md:absolute md:right-10 bottom-24 w-full h-[10vh] md:w-[30%] p-4 bg-black/20 backdrop-blur-sm border-white/30 shadow-lg text-white overflow-hidden">
            <p ref={boxTextRef} className="text-sm font-normal">
              Transforming urban spaces into thriving green landscapes.
            </p>
          </div>
        </div>
        <div className="md:hidden mt-[-10%] w-fit py-2 px-6 bg-yellow-500/60 backdrop-blur-sm border-white/30 shadow-lg text-black">

              <Link to={"/viewAllCollection"}>
                <button className="text-sm md:text-base cursor-pointer tracking-wide font-normal flex items-center gap-2">
                  What we sell
                  <span className="border rounded-full p-2 bg-white text-green-900 hover:bg-black cursor-pointer hover:text-white">
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
