import React, { useState } from "react";
import { Link, useNavigate, useLocation } from "react-router-dom";
import araunahLogo from "../assets/images/araunah-logo.png";
import chariLogo from "../assets/images/castle-of-chari-logo.png";

const Navbar = ({ contactRef }) => {
  const [menuOpen, setMenuOpen] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  const scrollToContact = () => {
    if (location.pathname !== "/") {
      navigate("/");
      setTimeout(() => {
        contactRef?.current?.scrollIntoView({ behavior: "smooth" });
      }, 500);
    } else {
      contactRef?.current?.scrollIntoView({ behavior: "smooth" });
    }

    setMenuOpen(false); // close menu on mobile
  };

  const isActive = (path) => location.pathname === path;

  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-[#dfd6d6] bg-opacity-90 shadow-md">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        {/* Logos */}
        <div className="flex items-center space-x-4">
          <img src={araunahLogo} alt="Araunah" className="h-10 w-auto" />
          <img src={chariLogo} alt="Castle of Chári 70" className="h-10 w-auto" />
        </div>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center space-x-8 text-sm font-medium text-black">
          <Link to="/" className={isActive("/") ? "text-[#f9b17a]" : "hover:text-[#f9b17a]"}>Home</Link>
          <Link to="/short-term" className={isActive("/short-term") ? "text-[#f9b17a]" : "hover:text-[#f9b17a]"}>Short-Term ROI</Link>
          <Link to="/medium-term" className={isActive("/medium-term") ? "text-[#f9b17a]" : "hover:text-[#f9b17a]"}>Medium-Term ROI</Link>
          <Link to="/long-term" className={isActive("/long-term") ? "text-[#f9b17a]" : "hover:text-[#f9b17a]"}>Long-Term ROI</Link>
          <button onClick={scrollToContact} className="hover:text-[#f9b17a]">Contact</button>
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <button onClick={() => setMenuOpen(!menuOpen)} className="text-black focus:outline-none text-lg">
            ☰
          </button>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {menuOpen && (
        <div className="md:hidden px-6 pb-4 bg-[#dfd6d6] text-black space-y-4 text-sm font-medium">
          <Link to="/" onClick={() => setMenuOpen(false)} className={isActive("/") ? "text-[#f9b17a]" : "hover:text-[#f9b17a]"}>Home</Link>
          <Link to="/short-term" onClick={() => setMenuOpen(false)} className={isActive("/short-term") ? "text-[#f9b17a]" : "hover:text-[#f9b17a]"}>Short-Term ROI</Link>
          <Link to="/medium-term" onClick={() => setMenuOpen(false)} className={isActive("/medium-term") ? "text-[#f9b17a]" : "hover:text-[#f9b17a]"}>Medium-Term ROI</Link>
          <Link to="/long-term" onClick={() => setMenuOpen(false)} className={isActive("/long-term") ? "text-[#f9b17a]" : "hover:text-[#f9b17a]"}>Long-Term ROI</Link>
          <button onClick={scrollToContact} className="hover:text-[#f9b17a]">Contact</button>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
