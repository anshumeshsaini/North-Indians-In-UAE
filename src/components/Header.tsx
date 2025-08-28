import React from "react";
import { Button } from "@/components/ui/button";

const SwarmLogo = () => (
  <div className="flex items-center space-x-2">
    <div className="flex items-center">
      <div className="w-8 h-8 relative">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-400 via-purple-500 to-orange-400 rounded-lg transform rotate-12"></div>
        <div className="absolute inset-0 bg-gradient-to-br from-purple-500 via-pink-500 to-yellow-400 rounded-lg transform -rotate-12 opacity-80"></div>
      </div>
    </div>
    <span className="text-white font-bold text-xl">swarm</span>
  </div>
);

export const Header = () => {
  return (
    <header className="w-full bg-black border-b border-gray-800">
      <div className="max-w-7xl mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <SwarmLogo />
          
          <nav className="hidden md:flex items-center space-x-8">
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

          <Button variant="swarm" size="swarm">
            Get started
          </Button>
        </div>
      </div>
    </header>
  );
};