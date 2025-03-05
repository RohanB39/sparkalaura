import React from "react";
import logo from "../assets/Navlogo.png";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div className="bg-yellow-500 w-full h-auto">
      <div className="w-[90%] max-w-[1224px] m-auto p-4 gap-12 md:flex md:justify-between justify-items-start items-center">
        <div className="md:basis-[30%] text-start md:text-center">
          <img src={logo} alt="logo" className="h-35 filter invert grayscale contrast-200 drop-shadow-lg transition duration-300 hover:scale-75" />
          <small className="text-sm font-normal text-black">
            From Seed to Splendor, We Nurture Growth with Care and Passion.
          </small>
        </div>

        {/* Contact Section */}
        <div className="md:basis-[30%] xl:basis-[30%]  mt-12 md:mt-0">
          <h3 className="font-normal text-xl text-black">Address</h3>

          {/* Location */}
          <p className=" text-black font-normal flex items-start gap-4 text-sm mt-4">
            <span className="border p-2 h-fit border-black">
              {/* Location Icon */}
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
                  d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
                />
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z"
                />
              </svg>
            </span>
            YOO Pune, Panchshil Towers, New Kalyani Nagar, Pune, Maharashtra 411006, India
          </p>

          {/* Phone Number (Clickable) */}
          <p className="text-[12px] text-black font-normal text-end flex items-center gap-4">
            <span className="border p-2 h-fit border-black">
              {/* Phone Icon */}
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
                  d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 0 0 2.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 0 1-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 0 0-1.091-.852H4.5A2.25 2.25 0 0 0 2.25 4.5v2.25Z"
                />
              </svg>
            </span>
            <a
              href="tel:+918600415727"
              className="text-black hover:underline text-sm"
            >
              8600415727
            </a>
          </p>

          {/* Email (Clickable) */}
          <p className="text-[12px] text-black font-normal mt-4 text-end flex items-center gap-4">
            <span className="border p-2 h-fit border-black">
              {/* Email Icon */}
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
                  d="M9 3.75H6.912a2.25 2.25 0 0 0-2.15 1.588L2.35 13.177a2.25 2.25 0 0 0-.1.661V18a2.25 2.25 0 0 0 2.25 2.25h15A2.25 2.25 0 0 0 21.75 18v-4.162c0-.224-.034-.447-.1-.661L19.24 5.338a2.25 2.25 0 0 0-2.15-1.588H15M2.25 13.5h3.86a2.25 2.25 0 0 1 2.012 1.244l.256.512a2.25 2.25 0 0 0 2.013 1.244h3.218a2.25 2.25 0 0 0 2.013-1.244l.256-.512a2.25 2.25 0 0 1 2.013-1.244h3.859M12 3v8.25m0 0-3-3m3 3 3-3"
                />
              </svg>
            </span>
            <a
              href="mailto:info@trisara.co.in"
              className="text-black hover:underline text-sm"
            >
              info@sparkleaura.co.in
            </a>{" "}
          </p>
        </div>
      </div>
      <hr className="border-yellow-800" />
      <div className="w-full flex items-center justify-center p-2">
        <div className="flex flex-wrap justify-center gap-4 text-[12px] md:text-base text-center">
          <Link to="/privacyp" className="hover:underline text-[12px]">Privacy Policy</Link>
          <Link to="/refundp" className="hover:underline text-[12px]">Refund Policy</Link>
          <Link to="/privacyp" className="hover:underline text-[12px]">Shipping Policy</Link>
          <Link to="/privacyp" className="hover:underline text-[12px]">Contact Information</Link>
        </div>
      </div>
      <hr className="border-yellow-800" />

      <div className="w-full mt-2 text-[12px] text-center">
        <p className="text-yellow-800 tracking-wide py-4">
          All rights reserved by Sparkle Aura | Designed and developed by Rohan Bankar{" "}
        </p>
      </div>
    </div>
  );
};

export default Footer;
