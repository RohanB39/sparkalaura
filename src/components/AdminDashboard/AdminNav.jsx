import React, { useState, useEffect, useRef } from "react";
import { NavLink } from "react-router-dom";
import { gsap } from "gsap";
import { Link } from "react-router-dom";
import NavLogo from "../../assets/Navlogo.png";
import { motion, AnimatePresence } from "framer-motion";
import { useNavigate } from "react-router-dom";

const AdminNav = () => {
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
  const [cartCount, setCartCount] = useState(0);

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
        <div className="md:flex text-nowrap items-center gap-2 hidden text-sm">
        <NavLink
          to="/adminDash"
          className="text-black text-sm py-1 px-8"
          onClick={() => setIsOpen(false)}
        >
          Dashboard
        </NavLink>
        <NavLink
          to="/addProduct"
          className="text-black text-sm py-1 px-8"
          onClick={() => setIsOpen(false)}
        >
          Add Product
        </NavLink>

        <NavLink
          to="/contact"
          className="text-black text-sm py-1 px-8"
          onClick={() => setIsOpen(false)}
        >
          View Products
        </NavLink>

        <NavLink
          to="/contact"
          className="text-black text-sm py-1 px-8"
          onClick={() => setIsOpen(false)}
        >
          Pending Orders
        </NavLink>

        <NavLink
          to="/contact"
          className="text-black text-sm py-1 px-8"
          onClick={() => setIsOpen(false)}
        >
          Completed Orders
        </NavLink>

        <NavLink
          to="/contact"
          className="text-black text-sm py-1 px-8"
          onClick={() => setIsOpen(false)}
        >
          Finance
        </NavLink>
        </div>

        {/* Mobile Menu Button */}
        <div className="flex items-center gap-2">
          <div
            className="md:hidden cursor-pointer"
          >
            <div
              className="text-black px-3"
            >
              <span>
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
  <path strokeLinecap="round" strokeLinejoin="round" d="M17.982 18.725A7.488 7.488 0 0 0 12 15.75a7.488 7.488 0 0 0-5.982 2.975m11.963 0a9 9 0 1 0-11.963 0m11.963 0A8.966 8.966 0 0 1 12 21a8.966 8.966 0 0 1-5.982-2.275M15 9.75a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
</svg>


              </span>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      <div
        ref={mobileNavRef}
        className="md:hidden flex flex-col z-50  gap-4 py-6 text-white bg-yellow-600 w-full absolute top-auto left-0 overflow-hidden opacity-0"
      >
        <NavLink
          to="/adminDash"
          className="text-white text-sm py-1 px-8"
          onClick={() => setIsOpen(false)}
        >
          Dashboard
        </NavLink>
        <NavLink
          to="/addProduct"
          className="text-white text-sm py-1 px-8"
          onClick={() => setIsOpen(false)}
        >
          Add Product
        </NavLink>

        <NavLink
          to="/contact"
          className="text-white text-sm py-1 px-8"
          onClick={() => setIsOpen(false)}
        >
          View Products
        </NavLink>

        <NavLink
          to="/contact"
          className="text-white text-sm py-1 px-8"
          onClick={() => setIsOpen(false)}
        >
          Pending Orders
        </NavLink>

        <NavLink
          to="/contact"
          className="text-white text-sm py-1 px-8"
          onClick={() => setIsOpen(false)}
        >
          Completed Orders
        </NavLink>

        <NavLink
          to="/contact"
          className="text-white text-sm py-1 px-8"
          onClick={() => setIsOpen(false)}
        >
          Finance
        </NavLink>
      </div>
    </div>
  );
};

export default AdminNav;
