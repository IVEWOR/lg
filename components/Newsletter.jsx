import React, { useState } from "react";
import { Mail, CheckCircle, ArrowRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

// Newsletter signup component with a modern, glassy design
export default function Newsletter() {
  const [email, setEmail] = useState("");
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    // Basic email validation
    if (!email || !/\S+@\S+\.\S+/.test(email)) {
      setError("Please enter a valid email address.");
      return;
    }

    setError("");
    setIsSubmitted(true);

    // Here you would typically send the email to your backend service
    // e.g., fetch('/api/subscribe', { method: 'POST', body: JSON.stringify({ email }) });
    console.log("Submitted email:", email);
  };

  if (isSubmitted) {
    return (
      <div className="bg-gray-800/50 backdrop-blur-lg border border-white/10 rounded-2xl p-8 text-center shadow-2xl shadow-green-500/10 max-w-lg mx-auto">
        <div className="flex flex-col items-center">
          <CheckCircle className="h-12 w-12 text-green-400 mb-4" />
          <h3 className="text-2xl font-bold text-white">You're on the list!</h3>
          <p className="text-gray-300 mt-2">
            Thank you for subscribing. Keep an eye on your inbox for updates.
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="backdrop-blur-lg p-8 max-w-lg mx-auto">
      <div className="flex flex-col items-center text-center">
        <Image
          src="/linkgraphlogo.png"
          width={280}
          height={60}
          alt="Linkgraph"
        />

        {/* Content */}

        <p className="text-gray-300 mt-3 max-w-sm">
          Join our newsletter to get the latest updates and special offers.
        </p>

        {/* Form */}
        <form onSubmit={handleSubmit} className="mt-8 w-full max-w-md">
          <div className="flex flex-col sm:flex-row items-start gap-3">
            <div className="relative w-full">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="your.email@example.com"
                className="w-full border border-gray-600 rounded-xl py-3 px-4 text-white placeholder-gray-400 focus:outline-none focus:ring focus:ring-green-500 focus:border-green-500 transition-all text-center sm:text-left text-sm backdrop-blur-xl"
                aria-label="Email address"
              />
              {error && <p className="text-red-500 text-sm mt-2">{error}</p>}
            </div>
            <button
              type="submit"
              className="w-full sm:w-auto flex-shrink-0 bg-white/10 backdrop-blur-xl border border-white/20 text-white text-sm font-semibold py-3 px-4 rounded-xl
    hover:bg-white/20 flex items-center justify-center gap-2 transition-all duration-200 transform hover:scale-105 cursor-pointer"
            >
              <span>Subscribe</span>
              <ArrowRight className="h-5 w-5" />
            </button>
          </div>
        </form>
        <Link href="#" className="mt-3 border-b text-sm text-gray-400">
          Old Linkgraph
        </Link>
      </div>
    </div>
  );
}
