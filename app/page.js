"use client";
import React, { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import Footer from "@/components/Footer";
import Newsletter from "@/components/Newsletter";
import AnimatedBackground from "@/components/AnimatedBackground";
import MouseFollower from "@/components/MouseFollower";
import ScrollReveal from "@/components/ScrollReveal";
import ParallaxSection from "@/components/ParallaxSection";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [isMenuOpen]);

  const navLinks = [
    { name: "Blog", href: "#" },
    { name: "Profile", href: "#" },
  ];

  return (
    <div className="min-h-screen relative overflow-hidden">
      {/* Animated Background */}
      <AnimatedBackground />

      {/* Mouse Follower */}
      <MouseFollower mousePosition={mousePosition} />

      {/* Parallax Background Elements */}
      <ParallaxSection mousePosition={mousePosition} />

      {/* Main Header for Desktop */}
      <div className="sticky top-0 z-50">
        <ScrollReveal>
          <header className="max-w-full">
            <nav
              className={`glass-effect border-b border-green-500/20 shadow-lg transition-all duration-500 ${
                isScrolled ? "glass-effect-green" : "glass-effect"
              }`}
            >
              <div className="container mx-auto flex items-center justify-between h-18 px-8">
                {/* Logo */}
                <Link
                  href="#"
                  className="flex items-center space-x-2 text-white group"
                >
                  <div className="transform transition-all duration-300 group-hover:scale-105 group-hover:rotate-3 animate-glow-green">
                    <Image
                      src="/linkgraphlogo.png"
                      width={100}
                      height={30}
                      alt="Linkgraph"
                    />
                  </div>
                </Link>

                {/* Desktop Navigation Links */}
                <div className="hidden md:flex items-center space-x-4">
                  {navLinks.slice(0, 5).map((link, index) => (
                    <Link
                      key={link.name}
                      href={link.href}
                      className="text-sm font-medium text-gray-300 hover:text-green-400 transition-all duration-300 transform hover:scale-105 hover:-translate-y-1 relative group"
                      style={{
                        animationDelay: `${index * 0.1}s`,
                        animation: "fadeInUp 0.6s ease-out forwards",
                      }}
                    >
                      {link.name}
                      <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-green-500 to-green-400 transition-all duration-300 group-hover:w-full"></span>
                    </Link>
                  ))}
                </div>

                {/* Right side buttons */}
                <div className="hidden md:flex items-center space-x-2">
                  <Link
                    href="#"
                    className="bg-gradient-to-r from-green-500 to-green-600 text-white text-sm font-semibold px-4 py-1.5 rounded-xl hover:from-green-600 hover:to-green-700 transition-all duration-300 transform hover:scale-105 hover:shadow-lg hover:shadow-green-500/20 animate-glow-green"
                  >
                    Sign In
                  </Link>
                </div>

                {/* Mobile Menu Button */}
                <div className="md:hidden">
                  <button
                    onClick={() => setIsMenuOpen(true)}
                    className="text-white p-2 transition-all duration-300 hover:bg-green-500/10 rounded-lg"
                  >
                    <span className="sr-only">Open menu</span>
                    <Menu className="h-6 w-6 transition-transform duration-300 hover:rotate-90" />
                  </button>
                </div>
              </div>
            </nav>
          </header>
        </ScrollReveal>

        {/* Mobile Menu */}
        <div
          className={`fixed inset-0 z-50 md:hidden transition-all duration-500 backdrop-blur-2xl ease-in-out ${
            isMenuOpen ? "opacity-100 visible" : "opacity-0 invisible"
          }`}
        >
          <div className="absolute inset-0 backdrop-blur-xl bg-transparent">
            <div className="flex flex-col h-full px-8 py-4 mx-auto">
              <div className="flex items-center justify-between">
                <Link
                  href="#"
                  className="flex items-center space-x-2 text-white"
                >
                  <Image
                    src="/linkgraphlogo.png"
                    width={100}
                    height={30}
                    alt="Linkgraph"
                  />
                </Link>
                <button
                  onClick={() => setIsMenuOpen(false)}
                  className="text-white p-2 transition-all duration-300 hover:bg-green-500/10 rounded-lg"
                >
                  <span className="sr-only">Close menu</span>
                  <X className="h-6 w-6 transition-transform duration-300 hover:rotate-90" />
                </button>
              </div>

              <nav className="flex flex-col items-start space-y-6 mt-16">
                {navLinks.map((link, index) => (
                  <Link
                    key={link.name}
                    href={link.href}
                    className={`text-2xl font-medium text-gray-300 hover:text-green-400 transition-all duration-300 transform hover:translate-x-2 ${
                      isMenuOpen
                        ? "translate-x-0 opacity-100"
                        : "-translate-x-4 opacity-0"
                    }`}
                    style={{
                      transitionDelay: isMenuOpen ? `${index * 0.1}s` : "0s",
                    }}
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {link.name}
                  </Link>
                ))}
              </nav>

              <div className="mt-auto border-t border-green-500/20 pt-6 flex flex-col space-y-4">
                <Link
                  href="#"
                  className={`w-full bg-gradient-to-r from-green-500 to-green-600 text-white text-lg font-semibold text-center px-4 py-3 rounded-full hover:from-green-600 hover:to-green-700 transition-all duration-300 transform hover:scale-[1.02] ${
                    isMenuOpen
                      ? "translate-y-0 opacity-100"
                      : "translate-y-8 opacity-0"
                  }`}
                  style={{ transitionDelay: isMenuOpen ? "0.3s" : "0s" }}
                  onClick={() => setIsMenuOpen(false)}
                >
                  Sign In
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Newsletter Section */}
      <div className="mt-30 mb-30 md:mt-50 relative z-40">
        <ScrollReveal>
          <Newsletter />
        </ScrollReveal>
      </div>

      {/* Footer */}
      <div className="md:absolute md:bottom-0 md:left-0 md:right-0 relative z-40">
        <ScrollReveal>
          <Footer />
        </ScrollReveal>
      </div>
    </div>
  );
}
