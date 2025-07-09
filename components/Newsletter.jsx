"use client";
import React, { useState } from "react";
import { Mail, CheckCircle, ArrowRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function Newsletter() {
  const [email, setEmail] = useState("");
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);

    if (!email || !/\S+@\S+\.\S+/.test(email)) {
      setError("Please enter a valid email address.");
      setIsLoading(false);
      return;
    }

    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 1000));

    setError("");
    setIsSubmitted(true);
    setIsLoading(false);
    console.log("Submitted email:", email);
  };

  if (isSubmitted) {
    return (
      <div className="text-center max-w-lg mx-auto transform animate-bounce-in">
        <div className="flex flex-col items-center">
          <div className="relative">
            <CheckCircle className="h-16 w-16 text-green-400 animate-pulse" />
            <div className="absolute inset-0 h-16 w-16 rounded-full bg-green-400/20 animate-ping"></div>
          </div>
          <h3 className="text-3xl font-bold text-white mt-4 animate-fade-in gradient-text-green">
            You're on the list!
          </h3>
          <p className="text-gray-300 mt-2 animate-fade-in-delayed">
            Thank you for subscribing. Keep an eye on your inbox for updates.
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="max-w-lg mx-auto px-8">
      <div className="flex flex-col items-center text-center">
        <div className="transform hover:scale-105 transition-all duration-300 hover:rotate-1 animate-glow-green">
          <Image
            src="/linkgraphlogo.png"
            width={280}
            height={60}
            alt="Linkgraph"
            className="drop-shadow-2xl"
          />
        </div>

        <p className="text-gray-300 mt-3 max-w-sm animate-fade-in">
          Join our newsletter to get the latest updates and special offers.
        </p>

        <form onSubmit={handleSubmit} className="mt-8 w-full max-w-md">
          <div className="flex flex-col sm:flex-row items-start gap-3">
            <div className="relative w-full group">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="your.email@example.com"
                className="w-full bg-gray-800/50 border border-gray-600/50 rounded-xl py-3 px-4 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-green-500 transition-all duration-300 text-center sm:text-left text-sm backdrop-blur-sm"
                aria-label="Email address"
                disabled={isLoading}
              />
              {error && (
                <p className="text-red-400 text-sm mt-2 animate-shake">
                  {error}
                </p>
              )}
            </div>
            <button
              type="submit"
              disabled={isLoading}
              className="w-full sm:w-auto flex-shrink-0 bg-gradient-to-r from-green-500 to-green-600 text-white text-sm font-semibold py-3 px-6 rounded-xl
                hover:from-green-600 hover:to-green-700 flex items-center justify-center gap-2 transition-all duration-300 transform hover:scale-105 cursor-pointer
                disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none shadow-lg hover:shadow-xl hover:shadow-green-500/25 animate-glow-green"
            >
              {isLoading ? (
                <>
                  <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white"></div>
                  <span>Subscribing...</span>
                </>
              ) : (
                <>
                  <span>Subscribe</span>
                  <ArrowRight className="h-5 w-5 transition-transform duration-300 group-hover:translate-x-1" />
                </>
              )}
            </button>
          </div>
        </form>

        <Link
          href="#"
          className="mt-6 text-sm text-gray-400 hover:text-green-400 transition-all duration-300 border-b border-gray-600/50 hover:border-green-400 pb-1"
        >
          Old Linkgraph
        </Link>
      </div>
    </div>
  );
}
