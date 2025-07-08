"use client";
import React, { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import Footer from "@/components/Footer";

// This is a standalone Header component.
// You would typically import it into your main layout or page file.
// e.g., import Header from './Header';

export default function Header() {
  // State to manage the mobile menu's visibility
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  // State to manage header visibility on scroll
  const [isScrolled, setIsScrolled] = useState(false);

  // Effect to handle scroll events for showing/hiding the header
  useEffect(() => {
    const handleScroll = () => {
      // Set scrolled state if user scrolls down more than 10px
      setIsScrolled(window.scrollY > 10);
    };
    // Add scroll event listener
    window.addEventListener("scroll", handleScroll);
    // Cleanup function to remove the event listener
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Effect to prevent scrolling when the mobile menu is open
  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
    // Cleanup function to restore scrolling
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [isMenuOpen]);

  // Navigation links data
  const navLinks = [
    { name: "Blog", href: "#" },
    { name: "Profile", href: "#" },
  ];

  return (
    <>
      {/* Main Header for Desktop */}
      <header
        className={`fixed top-4 left-1/2 z-50 -translate-x-1/2 transition-all duration-300 ease-in-out ${
          isScrolled ? "w-[95%] md:w-[650px]" : "w-[95%] md:w-[780px]"
        }`}
      >
        <nav className="flex items-center justify-between w-full h-18 px-8 bg-neutral-900/70 backdrop-blur-lg rounded-2xl border border-white/10 shadow-lg">
          {/* Logo */}
          <Link href="#" className="flex items-center space-x-2 text-white">
            <Image
              src="/linkgraphlogo.png"
              width={100}
              height={30}
              alt="Linkgraph"
            />
          </Link>

          {/* Desktop Navigation Links (hidden on mobile) */}
          <div className="hidden md:flex items-center space-x-4">
            {navLinks.slice(0, 5).map(
              (
                link // Show first 5 links
              ) => (
                <Link
                  key={link.name}
                  href={link.href}
                  className="text-sm font-medium text-gray-300 hover:text-white transition-colors"
                >
                  {link.name}
                </Link>
              )
            )}
          </div>

          {/* Right side buttons (hidden on mobile) */}
          <div className="hidden md:flex items-center space-x-2">
            <Link
              href="#"
              className="bg-white text-black text-sm font-semibold px-4 py-1.5 rounded-xl hover:bg-gray-200 transition-colors"
            >
              Sign In
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(true)}
              className="text-white p-2"
            >
              <span className="sr-only">Open menu</span>
              <Menu className="h-6 w-6" />
            </button>
          </div>
        </nav>
      </header>

      {/* Mobile Menu (Fullscreen Overlay) */}
      <div
        className={`fixed inset-0 z-50 md:hidden transition-opacity duration-300 ease-in-out ${
          isMenuOpen ? "opacity-100" : "opacity-0 pointer-events-none"
        }`}
      >
        <div className="absolute inset-0 bg-neutral-900/80 backdrop-blur-xl">
          <div className="flex flex-col h-full p-8 w-[95%] mx-auto">
            {/* Mobile Menu Header */}
            <div className="flex items-center justify-between">
              <Link href="#" className="flex items-center space-x-2 text-white">
                <Image
                  src="/linkgraphlogo.png"
                  width={100}
                  height={30}
                  alt="Linkgraph"
                />
              </Link>
              <button
                onClick={() => setIsMenuOpen(false)}
                className="text-white p-2"
              >
                <span className="sr-only">Close menu</span>
                <X className="h-6 w-6" />
              </button>
            </div>

            {/* Mobile Navigation Links */}
            <nav className="flex flex-col items-start space-y-6 mt-16">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  className="text-2xl font-medium text-gray-300 hover:text-white transition-colors"
                >
                  {link.name}
                </Link>
              ))}
            </nav>

            <div className="mt-auto border-t border-white/10 pt-6 flex flex-col space-y-4">
              <Link
                href="#"
                className="w-full bg-white text-black text-lg font-semibold text-center px-4 py-3 rounded-full hover:bg-gray-200 transition-colors"
              >
                Sign In
              </Link>
            </div>
          </div>
        </div>
      </div>
      <div className="h-[500px]"></div>
      <Footer />
    </>
  );
}
