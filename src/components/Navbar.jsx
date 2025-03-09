import React, { useState, useEffect, useRef } from "react";
import { NavLink } from "react-router-dom";
import { gsap } from "gsap";
import { Link } from "react-router-dom";
import NavLogo from "../assets/Navlogo.png";
import { motion, AnimatePresence } from "framer-motion";
import { useNavigate } from "react-router-dom";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const mobileNavRef = useRef(null);
  const dropdownRef = useRef(null);
  const [visible, setVisible] = useState(true);
  let lastScrollY = window.scrollY;
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const searchBarRef = useRef(null);
  const [filteredSuggestions, setFilteredSuggestions] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > lastScrollY) {
        setVisible(false);
      } else {
        setVisible(true);
      }
      lastScrollY = window.scrollY;
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (mobileNavRef.current && !mobileNavRef.current.contains(event.target)) {
        setIsOpen(false); // Close menu
      }
    };

    if (isOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    } else {
      document.removeEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isOpen]);

  useEffect(() => {
    if (isOpen) {
      gsap.to(mobileNavRef.current, {
        height: "auto",
        opacity: 1,
        duration: 0.5,
        ease: "power2.out",
      });
    } else {
      gsap.to(mobileNavRef.current, {
        height: 0,
        opacity: 0,
        duration: 0.5,
        ease: "power2.in",
      });
    }
  }, [isOpen]);

  useEffect(() => {
    if (isDropdownOpen) {
      gsap.to(dropdownRef.current, {
        height: "auto",
        opacity: 1,
        duration: 0.3,
        ease: "power2.out",
      });
    } else {
      gsap.to(dropdownRef.current, {
        height: 0,
        opacity: 0,
        duration: 0.3,
        ease: "power2.in",
      });
    }
  }, [isDropdownOpen]);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (searchBarRef.current && !searchBarRef.current.contains(event.target)) {
        setIsSearchOpen(false);
      }
    };

    if (isSearchOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    } else {
      document.removeEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isSearchOpen]);

  const candleSuggestions = [
    "Vanilla Scented Candle",
    "Lavender Relaxing Candle",
    "Rose Aromatherapy Candle",
    "Sandalwood Meditative Candle",
    "Ocean Breeze Candle",
    "Lemon Citrus Candle",
    "Cinnamon Spice Candle",
    "Eucalyptus Refreshing Candle",
    "Jasmine Floral Candle",
    "Winter Snow Candle",
    "Bar Wax-Candles",
    "Mom's Gift Candles",
    "Unique Design Candles",
    "Teddy Candles",
    "Girl's Dress Candle",
    "Unique Candles",
  ];


  const handleSearchChange = (e) => {
    const value = e.target.value;
    setSearchTerm(value);
    if (value.trim() === "") {
      setFilteredSuggestions([]);
    } else {
      setFilteredSuggestions(
        candleSuggestions.filter((candle) =>
          candle.toLowerCase().includes(value.toLowerCase())
        )
      );
    }
  };

  const handleSelectSuggestion = (suggestion) => {
    setSearchTerm(suggestion);
    setFilteredSuggestions([]);
    navigate(`/search?q=${suggestion}`);
  };

  const handleSearchSubmit = () => {
    if (searchTerm.trim() !== "") {
      navigate(`/search?q=${searchTerm}`);
      setFilteredSuggestions([]);
    }
  };

  const [cartCount, setCartCount] = useState(0);
  useEffect(() => {
    const userLoggedIn = localStorage.getItem("userLoggedIn");

    if (!userLoggedIn) {
        const selectedCartProducts = JSON.parse(localStorage.getItem("SelectedCartProducts")) || [];
        setCartCount(selectedCartProducts.length);
    } else {
        setCartCount(0);
    }
    const handleStorageChange = () => {
        const updatedCart = JSON.parse(localStorage.getItem("SelectedCartProducts")) || [];
        setCartCount(updatedCart.length);
    };
    window.addEventListener("storage", handleStorageChange);
    return () => window.removeEventListener("storage", handleStorageChange);
}, []);


  return (
    <div className="relative text-white z-20 text-lg bg-white">
      <div className="w-[90%] m-auto max-w-[1224px] flex items-center justify-between sticky top-0">
        <div
          className="md:hidden cursor-pointer mr-10"
          onClick={() => setIsOpen(!isOpen)}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="black"
            className="size-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M3.75 6.75h16.5M3.75 12h16.5M12 17.25h8.25"
            />
          </svg>
        </div>
        <Link to="/">
          <img
            src={NavLogo}
            alt="logo"
            className="h-18 w-auto sm:h-24 md:h-28 lg:h-20 filter invert grayscale contrast-200 drop-shadow-lg transition duration-300 hover:scale-75"
          />
        </Link>

        {/* Desktop Navigation */}
        <div className="md:flex items-center gap-8 hidden text-sm">
          <NavLink
            to="/"
            className={({ isActive }) =>
              isActive
                ? "text-yellow-400 border py-1 px-4"
                : "text-black"
            }
          >
            Home
          </NavLink>

          <div className="relative">
            <button
              className="text-black hover:text-yellow-400 border border-transparent cursor-pointer py-1 px-4 flex items-center gap-2"
              onClick={() => setIsDropdownOpen(!isDropdownOpen)}
            >
              Shop{" "}
              <span>
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
                    d="m19.5 8.25-7.5 7.5-7.5-7.5"
                  />
                </svg>
              </span>
            </button>
            <div
              ref={dropdownRef}
              className={`absolute left-0 mt-2 w-64 bg-white text-[15px] text-green-950 shadow-lg overflow-hidden 
  ${isDropdownOpen ? "pointer-events-auto" : "pointer-events-none opacity-0"}`}
            >
              <NavLink
                to="/greenWall"
                className="block px-4 py-3 hover:bg-yellow-200 border-b cursor-pointer border-gray-300"
                onClick={() => setIsDropdownOpen(false)}
              >
                Bestsellers
              </NavLink>
              <NavLink
                to="/gifting"
                className="block px-4 py-3 hover:bg-yellow-200 border-b border-gray-300"
                onClick={() => setIsDropdownOpen(false)}
              >
                Jar Candles
              </NavLink>
              <NavLink
                to="/rentalPlant"
                className="block px-4 py-3 hover:bg-yellow-200 border-b border-gray-300"
                onClick={() => setIsDropdownOpen(false)}
              >
                Ceramic Candles
              </NavLink>
              <NavLink
                to="/gardenMaintainance"
                className="block px-4 py-3 hover:bg-yellow-200 border-b border-gray-300"
                onClick={() => setIsDropdownOpen(false)}
              >
                Geometric Candles
              </NavLink>
              <NavLink
                to="/pottedGarden"
                className="block px-4 py-3 hover:bg-yellow-200 border-b border-gray-300"
                onClick={() => setIsDropdownOpen(false)}
              >
                Sented Candles
              </NavLink>
              <NavLink
                to="/woodenCandle"
                className="block px-4 py-3 hover:bg-yellow-200 border-b border-gray-300"
                onClick={() => setIsDropdownOpen(false)}
              >
                Wooden Candles
              </NavLink>
            </div>
          </div>

          <NavLink
            to="/about"
            className={({ isActive }) =>
              isActive
                ? "text-yellow-400 border py-1 px-4"
                : "text-black"
            }
          >
            About
          </NavLink>

          <NavLink
            to="/contact"
            className={({ isActive }) =>
              isActive
                ? "text-yellow-400 border py-1 px-4"
                : "text-black"
            }
          >
            Contact Us
          </NavLink>

          <NavLink
            to="/login"
            className={({ isActive }) =>
              isActive
                ? "text-yellow-400 border py-1 px-4"
                : "text-black"
            }
          >
            <span>
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="M17.982 18.725A7.488 7.488 0 0 0 12 15.75a7.488 7.488 0 0 0-5.982 2.975m11.963 0a9 9 0 1 0-11.963 0m11.963 0A8.966 8.966 0 0 1 12 21a8.966 8.966 0 0 1-5.982-2.275M15 9.75a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
              </svg>
            </span>
          </NavLink>

          <NavLink
            to="/cart"
            className={({ isActive }) =>
              isActive
                ? "text-yellow-400 border py-1 px-4"
                : "text-black"
            }
          >
            <span>
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 10.5V6a3.75 3.75 0 1 0-7.5 0v4.5m11.356-1.993 1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 0 1-1.12-1.243l1.264-12A1.125 1.125 0 0 1 5.513 7.5h12.974c.576 0 1.059.435 1.119 1.007ZM8.625 10.5a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm7.5 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Z" />
              </svg>

            </span>
          </NavLink>
        </div>

        {/* Mobile Menu Button */}
        <div className="flex items-center gap-2">
          <div
            className="md:hidden cursor-pointer"
          >
            <NavLink
              to="/login"
              className="text-black px-8"
            >
              <span>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-5">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M18 7.5v3m0 0v3m0-3h3m-3 0h-3m-2.25-4.125a3.375 3.375 0 1 1-6.75 0 3.375 3.375 0 0 1 6.75 0ZM3 19.235v-.11a6.375 6.375 0 0 1 12.75 0v.109A12.318 12.318 0 0 1 9.374 21c-2.331 0-4.512-.645-6.374-1.766Z" />
                </svg>

              </span>
            </NavLink>
          </div>
          <div
            className="md:hidden cursor-pointer"
          >
            <NavLink to="/cart" className="text-black px-8 relative flex">
            <span>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-5">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 0 0-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 0 0-16.536-1.84M7.5 14.25 5.106 5.272M6 20.25a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Zm12.75 0a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Z" />
                </svg>
            </span>
            {cartCount > 0 && (
                <span className="absolute -top-2 right-4 bg-pink-500 text-white text-[8px] rounded-full w-4 h-4 flex items-center justify-center">
                    {cartCount}
                </span>
            )}
        </NavLink>
          </div>
          <div className="cursor-pointer text-yellow-600" onClick={() => setIsSearchOpen(true)}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="size-5"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z"
              />
            </svg>
          </div>

          <div
            ref={searchBarRef}
            className={`absolute left-0 right-0 top-0 bg-white flex flex-col p-3 transition-all duration-300 transform ${isSearchOpen
              ? "opacity-100 scale-y-100"
              : "opacity-0 scale-y-0 pointer-events-none"
              }`}
          >
            {/* Search Input */}
            <div className="flex items-center mt-2">
              <input
                type="text"
                placeholder="Search by candle...🕯️"
                value={searchTerm}
                onChange={handleSearchChange}
                className="w-full px-4 py-2 outline-none text-black text-base"
              />
              {/* Close Button */}
              <button
                onClick={() => {
                  handleSearchSubmit()
                }}
                className="ml-2 text-black hover:text-black"
              >
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                  <path strokeLinecap="round" strokeLinejoin="round" d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z" />
                </svg>

              </button>
              <button
                onClick={() => {
                  setIsSearchOpen(false);
                  setSearchTerm("");
                  setFilteredSuggestions([]);
                }}
                className="ml-2 text-yellow-600 hover:text-black"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="size-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="m9.75 9.75 4.5 4.5m0-4.5-4.5 4.5M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
                  />
                </svg>
              </button>
            </div>
          </div>

        </div>
      </div>
      {filteredSuggestions.length > 0 && (
        <motion.ul
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -10 }}
          transition={{ duration: 0.3 }}
          className="mt-2 bg-white px-4 py-2 shadow-md rounded-md"
        >
          <p className="text-gray-400 px-2 text-sm underline mb-2">Suggestions:</p>

          <AnimatePresence>
            {filteredSuggestions.map((suggestion, index) => (
              <motion.li
                key={index}
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: 10 }}
                transition={{ duration: 0.2, delay: index * 0.05 }}
                className="p-2 hover:bg-gray-200 cursor-pointer text-black text-sm"
                onClick={() => handleSelectSuggestion(suggestion)}
              >
                {suggestion}
              </motion.li>
            ))}
          </AnimatePresence>
        </motion.ul>
      )}

      {/* Mobile Navigation */}
      <div
        ref={mobileNavRef}
        className="md:hidden flex flex-col  gap-4 py-6 z-50 text-white bg-yellow-600 w-full absolute top-full left-0 overflow-hidden opacity-0"
      >
        <NavLink
          to="/"
          className="text-white py-1 px-8"
          onClick={() => setIsOpen(false)}
        >
          Home
        </NavLink>
        <NavLink
          to="/about"
          className="text-white py-1 px-8"
          onClick={() => setIsOpen(false)}
        >
          About
        </NavLink>

        {/* Mobile Services Dropdown */}
        <div className="w-full ">
          <button
            className="text-white py-2 px-8 flex items-center justify-between w-full border border-transparent hover:border-green-400"
            onClick={() => setIsDropdownOpen(!isDropdownOpen)}
          >
            Shop{" "}
            <span>
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
                  d="m19.5 8.25-7.5 7.5-7.5-7.5"
                />
              </svg>
            </span>
          </button>
          {isDropdownOpen && (
            <div className="flex flex-col bg-yellow-800 text-white ">
              <NavLink
                to="/greenWall"
                className="py-4 px-8 hover:bg-yellow-300 border-b border-yellow-700"
                onClick={() => setIsOpen(false)}
              >
                Bestsellers
              </NavLink>
              <NavLink
                to="/gifting"
                className="py-4 px-8 hover:bg-yellow-300 border-b border-yellow-700"
                onClick={() => setIsOpen(false)}
              >
                Jar Candles
              </NavLink>
              <NavLink
                to="/rentalPlant"
                className="py-4 px-8 hover:bg-yellow-300 border-b border-yellow-700"
                onClick={() => setIsOpen(false)}
              >
                Ceramic Candles
              </NavLink>
              <NavLink
                to="/gardenMaintainance"
                className="py-4 px-8 hover:bg-yellow-300 border-b border-yellow-700"
                onClick={() => setIsOpen(false)}
              >
                Geometric Candles
              </NavLink>

              <NavLink
                to="/pottedGarden"
                className="py-4 px-8 hover:bg-yellow-300 border-b border-yellow-700"
                onClick={() => setIsOpen(false)}
              >
                Sented Candles
              </NavLink>
              <NavLink
                to="/woodenCandle"
                className="py-4 px-8 hover:bg-yellow-300 border-b border-yellow-700"
                onClick={() => setIsOpen(false)}
              >
                Wooden Candles
              </NavLink>
            </div>
          )}
        </div>

        <NavLink
          to="/contact"
          className="text-white py-1 px-8"
          onClick={() => setIsOpen(false)}
        >
          Contact Us
        </NavLink>
      </div>
    </div>
  );
};

export default Navbar;
