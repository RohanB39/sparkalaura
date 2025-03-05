import React from "react";
import { PiCubeFocusLight, PiMoonStarsBold } from "react-icons/pi";
import { MdOutlineAir } from "react-icons/md";
import { FaHeartbeat } from "react-icons/fa";

const Information = () => {
  return (
    <div>
      <div className="hidden md:block w-[90%] max-w-[1224px] mx-auto mb-32 mt-16">
        <div className="text-center mb-4">
          <h3 className="text-[28px] border-b border-b-yellow-500">
            Benefits of a Candle-Lit Ambiance
          </h3>
        </div>
        <div>
          <div className="grid grid-cols-2 gap-2 w-[85%] mx-auto">
            <div className="flex items-end gap-6">
              <div>
                <div className="text-end mt-8">
                  <h3 className="font-semibold text-base">
                    Enhances Relaxation
                  </h3>
                  <p className="text-sm text-end">
                    The soft glow and soothing scents create a peaceful ambiance, reducing stress, anxiety, and promoting mindfulness.
                  </p>
                </div>
                <div className="mt-10 text-end">
                  <h3 className="font-semibold text-base">Boosts Focus</h3>
                  <p className="text-sm text-end">
                    Warm candlelight minimizes harsh brightness, helping to improve concentration,
                    productivity, and mental clarity during work or study.
                  </p>
                </div>
              </div>
              <div>
                <div>
                  <span className="text-[54px] ">
                    <PiCubeFocusLight className=" p-2 bg-yellow-500" />
                  </span>
                </div>
                <div className="w-[1px] h-5"></div>
                <div className="mt-16">
                  <span className="text-[54px] ">
                    <MdOutlineAir className="border p-2 " />
                  </span>
                </div>
              </div>
            </div>

            {/* rightpart */}
            <div className="flex items-end gap-6">
              <div>
                <div>
                  <span className="text-[54px] ">
                    <FaHeartbeat className=" p-3 bg-blue-300" />
                  </span>
                </div>
                <div className="w-[1px] h-5"></div>
                <div className="mt-16">
                  <span className="text-[54px] ">
                    <PiMoonStarsBold className=" p-4 bg-yellow-300" />
                  </span>
                </div>
              </div>
              <div>
                <div className="text-start mt-8">
                  <h3 className="font-semibold text-base">Elevates Mood</h3>
                  <p className="text-sm text-start">
                  Gentle flickering flames and calming fragrances uplift emotions, 
                  fostering a sense of happiness, comfort, and inner peace.
                  </p>
                </div>
                <div className="mt-16 text-start">
                  <h3 className="font-semibold text-base"> Adds Elegance</h3>
                  <p className="text-sm text-start">
                  Beautifully crafted candles transform any space, adding warmth, 
                  sophistication, and a welcoming aura to homes or offices.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Information;
