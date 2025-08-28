import React from "react";
import { Button } from "@/components/ui/button";
import heroImage from "@/assets/hero-community-interface.jpg";

export const HeroSection = () => {
  return (
    <section className="bg-black text-white min-h-screen relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 py-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <div className="space-y-4">
              <p className="text-primary uppercase tracking-wide font-semibold text-sm">
                A FRESH TAKE ON COMMUNITY
              </p>
              <h1 className="text-5xl lg:text-6xl font-bold leading-tight">
                Say goodbye to low
                <br />
                <span className="text-primary">community engagement</span>
              </h1>
              <p className="text-lg text-gray-300 max-w-lg">
                Unlike faceless platforms like Mighty Networks and Circle, Swarm puts video
                front and center, creating a true in-person feel for members.
              </p>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <Button variant="swarm" size="swarm" className="text-lg">
                Try it for yourself
              </Button>
              <Button variant="swarm-outline" size="swarm" className="text-lg">
                Book a demo →
              </Button>
            </div>
          </div>

          <div className="relative">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl">
              <img 
                src={heroImage} 
                alt="Swarm community platform interface showing video calls and community features"
                className="w-full h-auto object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
            </div>
            
            {/* Floating UI elements */}
            <div className="absolute -top-4 -left-4 bg-primary text-white px-4 py-2 rounded-full text-sm font-medium shadow-lg">
              Live Video
            </div>
            <div className="absolute -bottom-4 -right-4 bg-primary text-white px-4 py-2 rounded-full text-sm font-medium shadow-lg">
              Real-time Chat
            </div>
          </div>
        </div>
      </div>

      {/* Background decoration */}
      <div className="absolute right-0 bottom-0 w-1/3 h-1/3 bg-gradient-to-tl from-primary/20 to-transparent rounded-full blur-3xl"></div>
    </section>
  );
};