import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import logo from "@/assets/logo-removebg-preview.png";


export const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="w-full bg-black border-b border-gray-800 relative overflow-visible z-40 pt-2">

<div>
  <nav className="w-inherit max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-evenly h-16">
  <div className="relative flex justify-center">
  {/* White background with perfect round bottom */}
  <div className="absolute top-0 w-[120px] h-[120px] bg-white rounded-b-full"></div>

  {/* Logo inside */}
  <img
    src={logo}
    alt="logo"
    className="relative w-[99px] h-[99px] object-contain mt-2"
  />
</div>

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
          <Button variant="swarm" size="swarm" className="ml-4">
          Get started
        </Button>

  </nav>
</div>
        {/* Mobile menu button - positioned to the left */}
       



  
         

        {/* CTA Button */}
       


     
      {/* 👇 Floating Logo - positioned higher */}
      
    </header>
  );
};