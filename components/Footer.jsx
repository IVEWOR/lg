import React from "react";
import { Github, Twitter } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

// This is a standalone Footer component.
// You would typically import it into your main layout or page file.
// e.g., import Footer from './Footer';

export default function Footer() {
  // Footer link data based on the provided screenshot
  const footerLinks = [
    {
      title: "Product",
      links: ["Features", "Pricing", "Examples"],
    },
    {
      title: "Resources",
      links: ["Docs", "Community", "Contact"],
    },
    {
      title: "Legal",
      links: ["Privacy", "Terms"],
    },
  ];

  return (
    <div className="relative">
      <div className="absolute bottom-0 left-0 right-0">
        <Image
          src="/bg6.png"
          width={600}
          height={600}
          alt="background"
          className="mx-auto opacity-60"
        />
      </div>
      <footer className="bg-neutral-900/50 text-white backdrop-blur-lg border-t border-white/10">
        <div className="container mx-auto px-6 py-12">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8">
            {/* Left Section: Brand Info */}
            <div className="md:col-span-5 lg:col-span-6">
              <Link href="#" className="flex items-center space-x-2">
                {/* Using the same style of command icon for consistency */}
                <Image
                  src="/linkgraphlogo.png"
                  width={100}
                  height={30}
                  alt="Linkgraph"
                />
              </Link>
              <p className="mt-4 max-w-md text-gray-300">
                The ultimate creator hub to showcase your complete digital
                identity.
              </p>
              <div className="mt-6 flex space-x-4">
                <Link
                  href="#"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  <span className="sr-only">GitHub</span>
                  <Github className="h-6 w-6" />
                </Link>
                <Link
                  href="#"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  <span className="sr-only">Twitter</span>
                  <Twitter className="h-6 w-6" />
                </Link>
              </div>
            </div>

            {/* Right Section: Links */}
            <div className="md:col-span-7 lg:col-span-6 grid grid-cols-2 sm:grid-cols-3 gap-8">
              {footerLinks.map((column) => (
                <div key={column.title}>
                  <h3 className="font-semibold tracking-wider uppercase text-gray-200">
                    {column.title}
                  </h3>
                  <ul className="mt-4 space-y-3">
                    {column.links.map((link) => (
                      <li key={link}>
                        <Link
                          href="#"
                          className="text-gray-400 hover:text-white transition-colors"
                        >
                          {link}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>

          {/* Bottom Section: Copyright */}
          <div className="mt-12 pt-8 border-t border-white/10 text-center text-gray-400">
            <p>
              &copy; {new Date().getFullYear()} LinkGraph. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
