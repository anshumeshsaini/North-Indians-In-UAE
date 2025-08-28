import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import logo from "@/assets/logo-removebg-preview.png";

const SwarmLogo = () => (
  <div className="absolute left-6 md:left-10 -top-4 md:-top-6 z-50">
    <div className="w-16 h-16 md:w-20 md:h-20 rounded-full bg-white flex items-center justify-center shadow-xl border-2 border-gray-200">
      <img
        src={logo}
        alt="Swarm Logo"
        className="w-32 h-32 md:w-16 md:h-16 object-contain"
      />
    </div>
  </div>
);

export const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="w-full bg-black border-b border-gray-800 relative overflow-visible z-40 pt-2">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-4 flex items-center justify-between relative">
        
        {/* Mobile menu button - positioned to the left */}
        <div className="md:hidden">
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="text-gray-300 hover:text-white focus:outline-none"
          >
            <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              {isMenuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>

        {/* 👇 Navbar items - shifted further right */}
        <nav className="hidden md:flex items-center space-x-6 lg:space-x-8 ml-48">
          <Button variant="nav-link" size="sm">
            For Coaches
          </Button>
          <Button variant="nav-link" size="sm">
            Demo
          </Button>
          <Button variant="nav-link" size="sm">
            Pricing
          </Button>
          <Button variant="nav-link" size="sm">
            Log in
          </Button>
        </nav>

        {/* CTA Button */}
        <Button variant="swarm" size="swarm" className="ml-4">
          Get started
        </Button>
      </div>

      {/* Mobile menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-gray-900 px-4 py-2">
          <div className="flex flex-col space-y-3">
            <Button variant="nav-link" size="sm" className="justify-start">
              For Coaches
            </Button>
            <Button variant="nav-link" size="sm" className="justify-start">
              Demo
            </Button>
            <Button variant="nav-link" size="sm" className="justify-start">
              Pricing
            </Button>
            <Button variant="nav-link" size="sm" className="justify-start">
              Log in
            </Button>
          </div>
        </div>
      )}

      {/* 👇 Floating Logo - positioned higher */}
      <SwarmLogo />
    </header>
  );
};