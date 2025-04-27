import React, { useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import Logo from "../assets/Logo.png";

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  const isActivePath = (path: string) => location.pathname === path;

  const handleBookNow = () => {
    navigate("/booking", {
      state: {
        selectedRoom: "luxury-villa",
        roomDetails: {
          id: "luxury-villa",
          name: "Luxury Pool Villa",
          price: 25000,
          description: "Luxury villa with private pool",
          capacity: 8,
        },
        isOffer: false,
      },
    });
  };

  const navLinks = [
    { path: "/", label: "Home" },
    { path: "/rooms", label: "Rooms" },
    { path: "/special-offers", label: "Special Offers" },
    { path: "/about", label: "About Us" },
    { path: "/login", label: "Login" },
  ];

  return (
    <nav className="bg-primary-50 shadow-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <Link to="/" className="flex items-center">
              <img src={Logo} alt="Hotel Logo" className="h-12 w-auto mr-2" />
            </Link>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-4">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`px-3 py-2 rounded-md text-sm font-medium ${
                  isActivePath(link.path)
                    ? "bg-primary-100 text-primary-700"
                    : "text-secondary-700 hover:bg-primary-100"
                }`}
              >
                {link.label}
              </Link>
            ))}
            <button
              onClick={handleBookNow}
              className="px-3 py-2 rounded-md text-sm font-medium bg-primary-600 text-white hover:bg-primary-700"
            >
              Book Now
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-secondary-700 hover:text-secondary-900 hover:bg-primary-100 focus:outline-none"
            >
              <svg
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                {isMobileMenuOpen ? (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                ) : (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                )}
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`block px-3 py-2 rounded-md text-base font-medium ${
                  isActivePath(link.path)
                    ? "bg-primary-100 text-primary-700"
                    : "text-secondary-700 hover:bg-primary-100"
                }`}
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {link.label}
              </Link>
            ))}
            <button
              onClick={() => {
                handleBookNow();
                setIsMobileMenuOpen(false);
              }}
              className="w-full text-left px-3 py-2 rounded-md text-base font-medium bg-primary-600 text-white hover:bg-primary-700"
            >
              Book Now
            </button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
