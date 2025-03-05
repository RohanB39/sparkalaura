import React, { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import gsap from "gsap";
import { GiPlantsAndAnimals } from "react-icons/gi";
import Navbar from "../components/Navbar";

const servicesData = [
  {
    title: "Green Walls & Vertical Gardens",
    shortDescription:
      "We pride ourselves on being experts in green wall installations, offering our star product that transforms spaces with natural beauty. Our green walls come in two distinctive types:",
    details: [
      "Standard Bio Wall Our standard bio wall is a tried-and-true option, providing a lush, vertical garden that breathes life into any environment. These walls are perfect for those who desire a classic, elegant touch of greenery",
      "Innovative Felt Wall Introducing our innovative felt wall, a new product we've proudly brought to the Indian market. Unlike traditional bio walls, our felt walls are designed to mimic the natural beauty of jungles, featuring a diverse array of plant varieties and sizes. This unique design creates a vibrant, dynamic green wall that stands out as a true masterpiece of horticultural art.",
    ],
    images: [
      "../../public/Verticalgardens/vg10.jpg",
      "../../public/Verticalgardens/vg11.jpg",
      "../assets/Vertical gardens/vg1.jpg",
      "../assets/Vertical gardens/vg1.jpg",
    ],
  },
  {
    title: "Corporate Gifting & Plant Decor",
    shortDescription: "Give the gift of greenery with customized plant gifts.",
    details: [
      "Perfect for corporate events and employee appreciation.",
      "Sustainable, elegant, and long-lasting.",
      "Various plant sizes and packaging options available.",
    ],
    images: ["/images/gw1.JPG", "/images/bg3.jpeg", "/images/bg4.jpeg"],
  },
  {
    title: "Corporate Plant Rental",
    shortDescription:
      "Incorporating plants into workplace environments is more than just a trend; it’s a necessity. Research has shown that having plants in the office reduces stress, promotes physical and mental well-being.",
    details: [
      "Expert Plant Care: Our team specializes in the creation, growth, and maintenance of plants, even in diverse conditions. We ensure your office plants remain vibrant and healthy with minimal effort on your part.",
      "Professional Maintenance: We handle all aspects of plant care, from routine maintenance to emergency plant rescue. Our services include regular watering, pruning, and pest control, ensuring your plants thrive in any environment.",
      "Hassle-Free Transitions: Our corporate team is well-versed in the formalities and processes involved in providing continuous maintenance services. Whether it’s replacing plants, handling last-minute requests, or making necessary adjustments, we do it all seamlessly.",
      "Smooth Workflow Integration: We aim to integrate our services into your existing workflow with minimal disruption. Our professional approach ensures that you won’t need to follow up multiple times. We take care of everything, so you can focus on what matters most for your business.",
    ],
    images: [
      "/images/c1.JPG",
      "/images/c2.JPG",
      "/images/c3.JPG",
      "/images/c4.JPG",
      "/images/c5.JPG",
      "/images/c35.jpg",
      "/images/c36.jpg",
      "/images/c37.jpg",
      "/images/c38.jpg",
      "/images/c45.jpg",
      "/images/c46.jpg",
      "/images/c47.jpg",
      "/images/c48.jpg",
      "/images/c49.jpg",
      "/images/c50.jpg",
    ],
  },
  {
    title: "Garden Maintenance & Landscaping",
    shortDescription:
      "When we deliver plants to our customers, we go beyond simply providing the greenery. ",
    details: [
      "We take full responsibility for the health and well-being of those plants, as well as any existing ones you might have",
      ". Our expert gardening team ensures that your plants receive the best possible care.",
      "We offer specialized Annual Maintenance Contract (AMC) services that cater to both corporate clients and individual customers with small balconies. ",
      " Our AMC services include regular maintenance visits, where our team takes care of watering, pruning, fertilizing, and pest control. ",
      "This ensures that your plants remain healthy, vibrant, and beautiful all year round.",
    ],
    images: [
      "/images/gw10.jpeg",
      "/images/gw11.jpeg",
      "/images/gw12.jpeg",
      "/images/gw13.jpeg",
      "/images/gw14.jpeg",

      "/images/gw16.JPG",
      "/images/gw18.jpg",
      "/images/gw19.JPG",
      "/images/gw20.JPG",
    ],
  },
  {
    title: "Potted Garden Development",
    shortDescription:
      "Potted gardens are the new-age solution we offer to both retail and commercial hospitality clients",
    details: [
      "Potted gardens are the new-age solution we offer to both retail and commercial hospitality clients",

      "Whether you're a homeowner looking to transform your balcony into a lush retreat, or a restaurant owner aiming to create a serene, inviting atmosphere, our potted garden solutions are perfect for you",
      "Imagine stepping out onto your balcony and being greeted by a vibrant array of plants in beautifully crafted pots. Our potted gardens are designed to fit any space, big or small.",
      " We offer a variety of plant species and pot designs, allowing you to create a personalized green oasis. With our potted garden solutions, you can enjoy the tranquility of nature right at home.",
    ],
    images: ["/images/gw1.JPG", "/images/bg3.jpeg", "/images/bg4.jpeg"],
  },
];

const Services = () => {
  const modalRef = useRef(null);
  const sliderRef = useRef(null);
  const [selectedService, setSelectedService] = useState(null);

  const [hoveredIndex, setHoveredIndex] = useState(null);

  const handleMouseOver = (event) => {
    const index = event.target.closest(".offer-item")?.dataset.index;
    if (index) setHoveredIndex(index);
  };

  const handleMouseOut = () => {
    setHoveredIndex(null);
  };

  const offers = [
    {
      title: "Onsite Consultation",
      description:
        "After a tour of your space, we will choose plants for your space's needs.",
    },
    {
      title: "Selection of Plants",
      description:
        "Select from a variety of plants best suited for your home or office.",
    },
    {
      title: "Design & Installation",
      description:
        "We help you design your green space and install it professionally.",
    },
    {
      title: "Maintenance & Care",
      description:
        "Ensure your plants thrive with our expert maintenance services.",
    },
    {
      title: "Customized Solutions",
      description:
        "Get tailored plant solutions that match your space and preferences.",
    },
  ];

  useEffect(() => {
    if (selectedService && modalRef.current) {
      // Modal animation
      gsap.fromTo(
        modalRef.current,
        { opacity: 0, scale: 0.8 },
        { opacity: 1, scale: 1, duration: 0.5, ease: "power2.out" }
      );

      if (selectedService.images.length > 2 && sliderRef.current) {
        // Infinite scrolling animation only for more than two images
        const tl = gsap.timeline({ repeat: -1, defaults: { ease: "linear" } });
        tl.to(sliderRef.current, {
          xPercent: -100,
          duration: 50,
        }).set(sliderRef.current, { xPercent: 0 });
      }
    }
  }, [selectedService]);

  const closeModal = () => {
    gsap.to(modalRef.current, {
      opacity: 0,
      scale: 0.8,
      duration: 0.3,
      ease: "power2.in",
      onComplete: () => setSelectedService(null),
    });
  };

  return (
    <div>
      {/* Hero Section */}
      <div className="heroBg relative h-[30vh] lg:h-[50vh]">
        <div className="absolute inset-0 bg-gradient-to-b from-black/10 via-black/10 to-black/10"></div>
        <Navbar className="relative z-10" />
        <div className="w-[90%] max-w-[1224px] mx-auto">
          <span className="absolute bottom-2 font-normal text-[20px] md:text-[36px] text-white tracking-wide">
            Trisara's Services
          </span>
        </div>
      </div>

      {/* Services Section */}
      <div className="w-[90%] max-w-[1224px] mx-auto pt-16 mb-12 ">
        <div className="flex justify-between items-center mb-8">
          <div>
            <h3 className="md:text-xl text-lg font-semibold tracking-wide leading-tight">
              Bringing Nature to Life: <br /> Transforming Spaces with Green
              Elegance
            </h3>
            <p className="text-base font-normal tracking-normal mt-4">
              At Trisara, we specialize in transforming spaces with lush
              greenery and innovative plant solutions.
            </p>
          </div>
          <Link to="/contact">
            <button className="bg-green-700 hidden lg:block py-3 text-white text-sm tracking-wide px-6 mt-4 cursor-pointer hover:bg-transparent hover:border hover:text-green-800 ">
              Book Appointment
            </button>
          </Link>
        </div>

        {/* Services Grid */}
        <div className="basis-[70%] grid md:grid-cols-3 gap-4 mt-8 lg:mt-0">
          {servicesData.map((service, index) => (
            <div key={index} className="border p-4">
              <span>
                <GiPlantsAndAnimals className="text-4xl text-green-800" />
              </span>
              <h5 className="font-medium text-base mt-4">{service.title}</h5>
              <p className="text-sm mt-2">{service.shortDescription}</p>
              <small
                className="mt-2 text-[12px] flex justify-end cursor-pointer text-green-700 hover:underline"
                onClick={() => setSelectedService(service)}
              >
                Know More
              </small>
            </div>
          ))}
        </div>
      </div>

      {/* Modal Popup */}
      {selectedService && (
        <div className="fixed inset-0 bg-black/50 flex justify-center items-center z-50">
          <div
            ref={modalRef}
            className="bg-white p-6 shadow-lg w-[90%] md:w-[80%] lg:w-[60%] h-96 lg:h-[90vh] xl-h-[60vh] xl-w-[601px] overflow-y-auto"
          >
            <div className="flex justify-between items-center ">
              <h3 className="text-[16px] font-medium md:text-lg md:font-semibold">
                {selectedService.title}
              </h3>

              <button
                onClick={closeModal}
                className="mt-4 bg-red-900 cursor-pointer text-sm md:text-[16px] text-white py-2 px-4 hover:bg-green-700"
              >
                Close
              </button>
            </div>
            <hr />

            {/* Image Section (Slider only for more than 2 images) */}
            <div className="w-full overflow-hidden mt-4 relative">
              {selectedService.images.length > 2 ? (
                <div
                  ref={sliderRef}
                  className="flex space-x-4 w-max"
                  style={{ willChange: "transform" }}
                >
                  {selectedService.images.map((img, index) => (
                    <img
                      key={index}
                      src={img}
                      alt={selectedService.title}
                      className="w-[250px] h-[200px] object-cover "
                    />
                  ))}
                </div>
              ) : (
                <div className="flex justify-center gap-4">
                  {selectedService.images.map((img, index) => (
                    <img
                      key={index}
                      src={img}
                      alt={selectedService.title}
                      className="w-[250px] h-[200px] object-cover "
                    />
                  ))}
                </div>
              )}
            </div>

            {/* Detailed Information */}
            <ul className="mt-2 list-disc list-inside text-[12px]  text-gray-700">
              {selectedService.details.map((detail, index) => (
                <li className="mb-1 mt-3 text-sm" key={index}>
                  {detail}
                </li>
              ))}
            </ul>
          </div>
        </div>
      )}
    </div>
  );
};

export default Services;
