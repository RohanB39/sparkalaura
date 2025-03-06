import React, { useEffect, useRef } from "react";
import { RiCandleFill, RiFireFill, RiLightbulbFlashFill, RiSparklingFill } from "react-icons/ri";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const AboutSection = () => {
  const sectionRef = useRef(null);
  const cardsRef = useRef([]);
  const headerRef = useRef(null);

  const cardData = [
    {
      icon: <RiCandleFill className="border text-4xl p-2 border-yellow-900" />,
      title: "The Warmth of Candlelight",
      text: "Candles create a cozy, inviting atmosphere, perfect for relaxation and unwinding. Whether for self-care or celebrations, they bring warmth and comfort to any space.",
    },
    {
      icon: <RiFireFill className="border text-4xl p-2 border-orange-900" />,
      title: "Aromatherapy & Mood Enhancement",
      text: "Scented candles infused with essential oils help reduce stress, improve sleep, and enhance focus. Each fragrance sets a unique mood, from calming lavender to energizing citrus.",
    },
    {
      icon: <RiLightbulbFlashFill className="border text-4xl p-2 border-yellow-700" />,
      title: "Handcrafted Elegance",
      text: "Every candle is a work of art, handcrafted with precision and care. From minimalist designs to intricate patterns, they add elegance to any setting.",
    },
    {
      icon: <RiSparklingFill className="border text-4xl p-2 border-gold-700" />,
      title: "Sustainable & Eco-friendly",
      text: "Made with natural waxes like soy and beeswax, eco-friendly candles burn cleaner, last longer, and contribute to a sustainable, toxin-free environment.",
    },
  ];

  return (
    <div ref={sectionRef}>
      <div className="w-[90%] max-w-[1224px] m-auto mb-12">
        <div className="aboutHeader pt-12" ref={headerRef}>
          <div className="md:flex justify-between items-end mb-6">
            <p className="text-[15px] md:text-[34px] font-notmal leading-tight">
            Flames that flicker, stories that shine, <br/> moments that last.
            </p>
          </div>
        </div>

        <div className="aboutMain md:flex justify-between gap-12">
          <div className="basis-[30%] md:basis-[60%] xl:basis-[30%] aboutImg shadow-lg"></div>
          <div className="content basis-[70%] grid lg:grid-cols-2 gap-4 lg:mt-0 md:mt-0">
            {cardData.map((item, index) => (
              <div
                key={index}
                className="p-4 w-full border md:border-none border-gray-300"
                ref={(el) => (cardsRef.current[index] = el)}
              >
                <span>{item.icon}</span>
                <h5 className="text-[14px] text-green-950 font-medium mt-4">
                  {item.title}
                </h5>
                <p className="text-[12px] mt-2 font-normal whitespace-normal w-full">
                  {item.text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutSection;
