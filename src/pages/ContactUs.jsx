import React, { useEffect, useRef, useState } from "react";
import Navbar from "../components/Navbar";
import gsap from "gsap";
import emailjs from "@emailjs/browser";

const ContactUs = () => {
  const heroBgRef = useRef(null);
  const formRef = useRef(null);
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    message: "",
  });

  useEffect(() => {
    gsap.fromTo(
      heroBgRef.current,
      { opacity: 0, y: "-100%" },
      { opacity: 1, y: "0%", duration: 1.5, ease: "power3.out" }
    );
  }, []);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // emailjs
    //   .sendForm(
    //     "service_o2439vh",
    //     "template_na8e8om",
    //     formRef.current,
    //     "foRL6k0dQfYNqxc98TfRJ"
    //   )
    //   .then(
    //     (result) => {
    //       alert("Message sent successfully!");
    //       setFormData({
    //         firstName: "",
    //         lastName: "",
    //         email: "",
    //         phone: "",
    //         message: "",
    //       });
    //     },
    //     (error) => {
    //       alert("Something went wrong, please try again.");
    //     }
    //   );
  };

  return (
    <div>
      <div className="heroBg relative h-[100vh] lg:h-[100vh]">
        <div className="absolute inset-0 bg-gradient-to-b from-black/10 via-black/10 to-black/10"></div>
        <Navbar className="relative z-10" />
        <div className="w-[95%] max-w-[1224px] md:w-[90%] mx-auto relative">
  {/* Information Section */}
  <div className="absolute text-white flex flex-col gap-6 p-6 sm:p-10 w-full md:w-[50%]">
    <div>
      <h3 className="text-lg sm:text-xl lg:text-2xl">Bulk Orders</h3>
      <p className="text-sm sm:text-base text-justify">
        Need candles in large quantities? We specialize in bulk orders for weddings, festive celebrations, corporate events, and more. Enjoy exclusive discounts and customized packaging to fit your theme. Whether it's 10 pieces or 10,000, we've got you covered!
      </p>
    </div>
    <div>
      <h3 className="text-lg sm:text-xl lg:text-2xl">Party Return Gifts</h3>
      <p className="text-sm sm:text-base text-justify">
        Make your event memorable with handcrafted, aromatic candles as party favors! Perfect for birthday parties, baby showers, weddings, and festive gatherings, our candles come in custom designs, personalized labels, and premium packaging to match your occasion.
      </p>
    </div>
    <div>
      <h3 className="text-lg sm:text-xl lg:text-2xl">Corporate Gifting</h3>
      <p className="text-sm sm:text-base text-justify">
        Impress your clients and employees with elegant, eco-friendly candles that symbolize warmth and appreciation. Choose from customized branding, luxury gift boxes, and scented collections to create a lasting impression. Perfect for festive gifting, employee appreciation, and client giveaways.
      </p>
    </div>
  </div>
</div>

      </div>
      <div className="w-[90%] max-w-[1224px] mx-auto lg:flex pt-16 mb-12">
        <div className="lg:w-[30%] bg-yellow-100 p-4">
          <h3 className="text-lg font-medium">Tell Us What’s on Your Mind</h3>
          <p className="text-[12px] mt-2">
            Whether you have a question, feedback, or just want to say hello,
            we’re here to listen. Drop us a message!
          </p>
          <hr className="mt-2 mb-4" />
          <div>
            <p className="text-[12px] text-green-950 font-normal flex flex-col items-start gap-1">
              <span className="text-sm font-medium mt-2">Our Address</span>
              YOO Pune, Panchshil Towers, New Kalyani Nagar, Pune, Maharashtra 411006, India
            </p>
            <p className="text-sm text-green-950 font-normal flex flex-col items-start gap-1 mt-3">
              <span className="text-sm font-medium">Contact Number</span>
              <a
                href="tel:+918329403008"
                className="text-blue-600 text-[12px] hover:underline"
              >
                +91 7028494950
              </a>
            </p>
            <p className="text-sm text-green-950 font-normal flex flex-col items-start gap-1 mt-3">
              <span className="text-sm font-medium">Email Address</span>
              <a
                href="mailto:info@trisara.co.in"
                className="text-blue-600 text-[12px] hover:underline"
              >
                info@sparkleaura.co.in
              </a>
            </p>
          </div>
        </div>

        <div className="lg:w-[70%] md:p-4 mt-4 md:mt-0">
          <h3 className="text-base">Contact Us</h3>
          <hr className="mt-2 mb-4 border-gray-300" />
          <form ref={formRef} onSubmit={handleSubmit}>
            <div className="grid md:grid-cols-2 gap-4">
              <div className="flex flex-col">
                <label className="text-sm" htmlFor="firstName">
                  First name*
                </label>
                <input
                  type="text"
                  name="firstName"
                  id="firstName"
                  required
                  value={formData.firstName}
                  onChange={handleChange}
                  className="border border-gray-400 p-2 outline-none text-sm mt-1"
                />
              </div>
              <div className="flex flex-col">
                <label className="text-sm" htmlFor="lastName">
                  Last name*
                </label>
                <input
                  type="text"
                  name="lastName"
                  id="lastName"
                  required
                  value={formData.lastName}
                  onChange={handleChange}
                  className="border border-gray-400 p-2 outline-none text-sm mt-1"
                />
              </div>
            </div>
            <div className="grid md:grid-cols-2 gap-4 mt-2">
              <div className="flex flex-col">
                <label className="text-sm" htmlFor="email">
                  Email*
                </label>
                <input
                  type="email"
                  name="email"
                  id="email"
                  required
                  value={formData.email}
                  onChange={handleChange}
                  className="border border-gray-400 p-2 outline-none text-sm mt-1"
                />
              </div>
              <div className="flex flex-col">
                <label className="text-sm" htmlFor="phone">
                  Phone Number*
                </label>
                <input
                  type="tel"
                  name="phone"
                  id="phone"
                  pattern="\d{10}"
                  required
                  value={formData.phone}
                  onChange={handleChange}
                  className="border border-gray-400 p-2 outline-none text-sm mt-1"
                />
              </div>
            </div>
            <div className="flex flex-col mt-4">
              <label className="text-sm" htmlFor="message">
                Message*
              </label>
              <textarea
                name="message"
                id="message"
                required
                value={formData.message}
                onChange={handleChange}
                className="border border-gray-400 p-2 outline-none text-sm mt-1 min-h-24 max-h-40"
              />
            </div>

            <div className="flex justify-end mt-2">
              <button
                type="submit"
                className="px-6 py-2 bg-yellow-500 text-white hover:bg-yellow-700 cursor-pointer transition-all duration-300 ease-in-out"
              >
                Submit
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
