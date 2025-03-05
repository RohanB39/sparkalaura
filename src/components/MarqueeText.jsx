import React from "react";

const MarqueeText = ({ text }) => {
  return (
    <div className="overflow-hidden whitespace-nowrap w-full bg-yellow-50 py-4">
      <div className="flex space-x-8 animate-marquee">
        <p className="text-yellow-400 text-2xl">{text}</p>
        <p className="text-yellow-400 text-2xl">{text}</p>
        <p className="text-yellow-400 text-2xl">{text}</p>
        <p className="text-yellow-400 text-2xl">{text}</p>
      </div>
    </div>
  );
};

export default MarqueeText;
