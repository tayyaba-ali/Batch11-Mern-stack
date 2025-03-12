// import React, { useState } from 'react';
// import { Link } from 'react-router-dom';
// import { FaBars, FaTimes, FaHome, FaShoppingCart } from 'react-icons/fa';
// import logo from '../assets/images/logo (4).png';

// const Navigation = () => {
// 	const [isOpen, setIsOpen] = useState(false);

// 	const toggleMenu = () => {
// 		setIsOpen(!isOpen);
// 	};

// 	return (
// 		<nav className='bg-white shadow-lg text-[#BD1521]'>
// 			<div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
// 				<div className='flex items-center justify-between h-16'>
// 					<div className='flex-shrink-0'>
// 						<Link to='/'>
// 							<img className='h-8 w-auto md:h-10' src={logo} alt='logo' />
// 						</Link>
// 					</div>

// 					<div className='hidden sm:flex space-x-6'>
// 						<NavLink to='/' icon={<FaHome />} text='Home' />
// 						<NavLink to='/products' text='Products' />
// 						<NavLink to='/about' text='About' />
// 						<NavLink to='/contact' text='Contact' />
// 						<NavLink to='/signup' text='Sign Up' />
// 						<NavLink to='/login' text='Login' />
// 					</div>

// 					<div className='hidden lg:flex items-center'>
// 						<Link to='/cart' className='relative flex items-center'>
// 							<FaShoppingCart className='h-6 w-6 sm:h-8 sm:w-8 hover:text-[#4bf6d4] transition duration-300' />
// 						</Link>
// 					</div>

// 					<div className='sm:hidden'>
// 						<button onClick={toggleMenu} className='text-gray-500 hover:text-[#BD1521] focus:outline-none'>
// 							{isOpen ? <FaTimes className='h-6 w-6' /> : <FaBars className='h-6 w-6' />}
// 						</button>
// 					</div>
// 				</div>
// 			</div>

// 			<div className={`${isOpen ? 'block' : 'hidden'} sm:hidden bg-white shadow-md`}>
// 				<div className='px-4 pt-2 pb-3 space-y-2'>
// 					<NavLinkMobile to='/' text='Home' onClick={toggleMenu} />
// 					<NavLinkMobile to='/products' text='Products' onClick={toggleMenu} />
// 					<NavLinkMobile to='/about' text='About' onClick={toggleMenu} />
// 					<NavLinkMobile to='/contact' text='Contact' onClick={toggleMenu} />
// 					<NavLinkMobile to='/signup' text='Sign Up' onClick={toggleMenu} />
// 					<NavLinkMobile to='/login' text='Login' onClick={toggleMenu} />
// 				</div>
// 			</div>
// 		</nav>
// 	);
// };

// const NavLink = ({ to, icon, text }) => (
// 	<Link to={to} className='flex items-center text-gray-700 hover:text-[#4bf6d4] transition duration-300 relative group'>
// 		{icon && <span className='mr-2'>{icon}</span>}
// 		<span>{text}</span>
// 		<span className='absolute bottom-0 left-0 w-full bg-[#4bf6d4] h-0.5 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left'></span>
// 	</Link>
// );

// const NavLinkMobile = ({ to, text, onClick }) => (
// 	<Link
// 		to={to}
// 		onClick={onClick}
// 		className='block py-2 px-3 text-gray-700 hover:text-[#BD1521] transition duration-300 relative group'>
// 		<span>{text}</span>
// 		<span className='absolute bottom-0 left-0 w-full  h-0.5 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left'></span>
// 	</Link>
// );

// export default Navigation;




import React, { useState, useRef, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBars,
  faSearch,
  faGift,
  faShoppingBag,
  faChevronDown,
  faTimes,
} from "@fortawesome/free-solid-svg-icons";
import { faHeart } from "@fortawesome/free-regular-svg-icons";
import etsyLogo from "../assets/images/logo.png"; // Adjust the path to your image
import { Link } from "react-router-dom"; // Import Link for routing

const Header = () => {
  const [isCategoriesDropdownOpen, setIsCategoriesDropdownOpen] = useState(false);
  const [isAboutDropdownOpen, setIsAboutDropdownOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const categoriesDropdownRef = useRef(null);
  const aboutDropdownRef = useRef(null);

  const toggleCategoriesDropdown = () => {
    setIsCategoriesDropdownOpen(!isCategoriesDropdownOpen);
  };

  const toggleAboutDropdown = () => {
    setIsAboutDropdownOpen(!isAboutDropdownOpen);
  };

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  // Close dropdowns when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        categoriesDropdownRef.current &&
        !categoriesDropdownRef.current.contains(event.target)
      ) {
        setIsCategoriesDropdownOpen(false);
      }
      if (
        aboutDropdownRef.current &&
        !aboutDropdownRef.current.contains(event.target)
      ) {
        setIsAboutDropdownOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const categories = [
    "Art & Collectibles",
    "Baby",
    "Bags & Purses",
    "Bath & Beauty",
    "Books, Films & Music",
    "Clothing",
    "Craft Supplies & Tools",
    "Electronics & Accessories",
    "Gifts",
    "Home & Living",
    "Jewellery",
    "Weddings",
    "Pet Supplies",
    "Toys & Games",
    "Vintage",
  ];

  return (
    <header>
      {/* Main header section */}
      <div className="container mx-auto px-4 py-2 flex flex-wrap items-center justify-between">
        {/* Left section: Logo and Icons */}
        <div className="flex items-center space-x-4 w-full lg:w-auto justify-between mt-0">
          {/* Logo */}
          <img
            alt="Etsy logo"
            className="h-30" // Further increased logo size
            height="90"
            src={etsyLogo}
            width="180"
          />

          {/* Icons and Toggle Button (for small screens) */}
          <div className="flex items-center space-x-4 lg:hidden">
            <div className="relative group">
              <FontAwesomeIcon
                icon={faHeart}
                className="text-gray-700 hover:text-black transition-all duration-200 text-xl cursor-pointer"
              />
              <span className="absolute top-full left-1/2 transform -translate-x-1/2 bg-black text-white text-xs px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity duration-200 whitespace-nowrap">
                Favorites
              </span>
            </div>
            <div className="relative group">
              <FontAwesomeIcon
                icon={faGift}
                className="text-gray-700 hover:text-black transition-all duration-200 text-xl cursor-pointer"
              />
              <span className="absolute top-full left-1/2 transform -translate-x-1/2 bg-black text-white text-xs px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity duration-200 whitespace-nowrap">
                Gifts
              </span>
            </div>
            <div className="relative group">
              <FontAwesomeIcon
                icon={faShoppingBag}
                className="text-gray-700 hover:text-black transition-all duration-200 text-xl cursor-pointer"
              />
              <span className="absolute top-full left-1/2 transform -translate-x-1/2 bg-black text-white text-xs px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity duration-200 whitespace-nowrap">
                Basket
              </span>
            </div>
            {/* Mobile Toggle Button */}
            <button
              className="text-gray-700 hover:bg-gray-200 p-2 rounded-full transition-all duration-200"
              onClick={toggleMobileMenu}
            >
              <FontAwesomeIcon icon={isMobileMenuOpen ? faTimes : faBars} className="text-xl" />
            </button>
          </div>
        </div>

        {/* Middle section: Search bar */}
        <div className="flex-grow mx-4 mt-4 lg:mt-0 w-full lg:w-auto">
          <div className="relative">
            <input
              className="w-full border rounded-full py-2 px-4 pr-10 focus:outline-none focus:ring-2 focus:ring-gray-300 transition-all duration-200"
              placeholder="Search for anything"
              type="text"
            />
            <button className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500 hover:text-gray-700 transition-all duration-200">
              <FontAwesomeIcon icon={faSearch} />
            </button>
          </div>
        </div>

        {/* Right section: Icons and links (for large screens) */}
        <div className="hidden lg:flex items-center space-x-4">
          <a
            className="text-gray-700 hover:text-black transition-all duration-200 font-semibold text-lg"
            href="#"
          >
            Sign in
          </a>
          <div className="relative group">
            <FontAwesomeIcon
              icon={faHeart}
              className="text-gray-700 hover:text-black transition-all duration-200 text-xl cursor-pointer"
            />
            <span className="absolute top-full left-1/2 transform -translate-x-1/2 bg-black text-white text-xs px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity duration-200 whitespace-nowrap">
              Favorites
            </span>
          </div>
          <div className="relative group">
            <FontAwesomeIcon
              icon={faGift}
              className="text-gray-700 hover:text-black transition-all duration-200 text-xl cursor-pointer"
            />
            <span className="absolute top-full left-1/2 transform -translate-x-1/2 bg-black text-white text-xs px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity duration-200 whitespace-nowrap">
              Gifts
            </span>
          </div>
          <div className="relative group">
            <FontAwesomeIcon
              icon={faShoppingBag}
              className="text-gray-700 hover:text-black transition-all duration-200 text-xl cursor-pointer"
            />
            <span className="absolute top-full left-1/2 transform -translate-x-1/2 bg-black text-white text-xs px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity duration-200 whitespace-nowrap">
              Basket
            </span>
          </div>
        </div>
      </div>

      {/* Navigation links (for large screens) */}
      <nav className="container mx-auto px-4 py-3 lg:flex justify-center space-x-8 text-gray-700 bg-gray-50 hidden mt-0 ">
        <a
          className="flex items-center space-x-1 hover:text-black transition-all duration-200 font-semibold text-lg"
          href="#"
        >
          <FontAwesomeIcon icon={faGift} />
          <span>Gifts</span>
        </a>
        <a
          className="hover:text-black transition-all duration-200 font-semibold text-lg"
          href="#"
        >
          Special Birthday Gifts
        </a>
        <a
          className="hover:text-black transition-all duration-200 font-semibold text-lg"
          href="#"
        >
          Home Favourites
        </a>
        <a
          className="hover:text-black transition-all duration-200 font-semibold text-lg"
          href="#"
        >
          Fashion Finds
        </a>
        <div className="relative" ref={aboutDropdownRef}>
          <button
            className="flex items-center space-x-1 hover:text-black transition-all duration-200 font-semibold text-lg"
            onClick={toggleAboutDropdown}
          >
            <span>About</span>
            <FontAwesomeIcon icon={faChevronDown} className="text-sm" />
          </button>
          {/* Dropdown for About */}
          {isAboutDropdownOpen && (
            <div className="absolute left-0 top-8 bg-white shadow-lg rounded-lg w-48 z-50 border border-gray-200">
              {/* Triangular arrow at the top */}
              <div className="absolute -top-2 left-4 w-4 h-4 bg-white transform rotate-45 border-t border-l border-gray-200"></div>
              <ul>
                <li>
                  <Link
                    to="/partners" // Link to Partners page
                    className="text-gray-700 hover:bg-gray-100 px-4 py-2 block transition-all duration-200"
                  >
                    Partners
                  </Link>
                </li>
                <li>
                  <Link
                    to="/newsletter" // Link to Newsletters page
                    className="text-gray-700 hover:bg-gray-100 px-4 py-2 block transition-all duration-200"
                  >
                    Newsletters
                  </Link>
                </li>
              </ul>
            </div>
          )}
        </div>
      </nav>

      {/* Mobile Menu (for small screens) */}
      {isMobileMenuOpen && (
        <div className="bg-white shadow-lg w-full mx-auto mt-4 rounded-lg lg:hidden overflow-hidden">
          <div className="p-4">
            {/* Navigation links */}
            <div className="space-y-4">
              <a
                className="flex items-center space-x-2 hover:text-black hover:bg-gray-100 p-2 rounded-lg transition-all duration-200 font-semibold text-lg"
                href="#"
              >
                <FontAwesomeIcon icon={faGift} />
                <span>Gifts</span>
              </a>
              <a
                className="block hover:text-black hover:bg-gray-100 p-2 rounded-lg transition-all duration-200 font-semibold text-lg"
                href="#"
              >
                Special Birthday Gifts
              </a>
              <a
                className="block hover:text-black hover:bg-gray-100 p-2 rounded-lg transition-all duration-200 font-semibold text-lg"
                href="#"
              >
                Home Favourites
              </a>
              <a
                className="block hover:text-black hover:bg-gray-100 p-2 rounded-lg transition-all duration-200 font-semibold text-lg"
                href="#"
              >
                Fashion Finds
              </a>
              <div className="relative">
                <button
                  className="flex items-center space-x-2 hover:text-black hover:bg-gray-100 p-2 rounded-lg transition-all duration-200 font-semibold text-lg w-full"
                  onClick={toggleAboutDropdown}
                >
                  <span>About</span>
                  <FontAwesomeIcon icon={faChevronDown} className="text-sm" />
                </button>
                {/* Dropdown for About */}
                {isAboutDropdownOpen && (
                  <div className="mt-2 bg-white shadow-lg rounded-lg w-full z-50 border border-gray-200">
                    <ul>
                      <li>
                        <Link
                          to="/partners" // Link to Partners page
                          className="text-gray-700 hover:bg-gray-100 px-4 py-2 block transition-all duration-200"
                        >
                          Partners
                        </Link>
                      </li>
                      <li>
                        <Link
                          to="/newsletter" // Link to Newsletters page
                          className="text-gray-700 hover:bg-gray-100 px-4 py-2 block transition-all duration-200"
                        >
                          Newsletters
                        </Link>
                      </li>
                    </ul>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Hide scrollbar globally for desktop */}
      <style>
        {`
          /* Hide scrollbar for Chrome, Safari, and Opera */
          body::-webkit-scrollbar {
            display: none;
          }

          /* Hide scrollbar for IE, Edge, and Firefox */
          body {
            -ms-overflow-style: none; /* IE and Edge */
            scrollbar-width: none; /* Firefox */
          }

          /* Ensure no horizontal overflow */
          html, body {
            overflow-x: hidden;
            width: 100%;
          }
        `}
      </style>
    </header>
  );
};

export default Header;