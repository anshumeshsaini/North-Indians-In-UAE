import React, { useState, useEffect, useRef } from "react";
import { Button } from "@/components/ui/button";
import Lottie from "lottie-react";
import communityAnimation from "@/assets/Community.json";




export const HeroSection = () => {
  const [currentFeature, setCurrentFeature] = useState(0);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const lottieRef = useRef(null);
  
  const features = [
    { 
      name: "Live Video", 
      animation: communityAnimation,
      color: "from-red-400 to-pink-500",
      bg: "bg-gradient-to-br from-red-500/10 to-pink-500/10"
    },
    
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentFeature((prev) => (prev + 1) % features.length);
    }, 3500);
    return () => clearInterval(interval);
  }, [features.length]);

  useEffect(() => {
    if (lottieRef.current) {
      lottieRef.current.play();
    }
  }, [currentFeature]);

  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <section className="bg-gradient-to-br from-gray-900 via-purple-900 to-indigo-900 text-white min-h-screen relative overflow-hidden">
      {/* Animated background elements that follow mouse */}
      <div 
        className="absolute w-80 h-80 rounded-full blur-3xl transition-all duration-1000 ease-out"
        style={{
          background: `radial-gradient(circle at ${mousePosition.x}px ${mousePosition.y}px, rgba(139, 92, 246, 0.15) 0%, transparent 50%)`,
          left: `${mousePosition.x - 200}px`,
          top: `${mousePosition.y - 200}px`,
        }}
      ></div>
      
      {/* Floating animated elements */}
      {[...Array(8)].map((_, i) => (
        <div 
          key={i}
          className="absolute w-4 h-4 rounded-full bg-gradient-to-r from-purple-400 to-pink-400 opacity-30"
          style={{
            top: `${20 + (i * 10)}%`,
            left: `${10 + (i * 12)}%`,
            animation: `float ${6 + i * 2}s infinite ease-in-out`,
            animationDelay: `${i * 0.5}s`,
            transform: `scale(${0.5 + (i * 0.1)})`
          }}
        ></div>
      ))}
      
      <div className="max-w-7xl mx-auto px-6 py-20 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center min-h-[80vh]">
          <div className="space-y-10">
            <div className="space-y-6">
              <div className="inline-flex items-center px-4 py-2 rounded-full bg-purple-500/20 backdrop-blur-sm border border-purple-500/30 relative overflow-hidden group">
                <div className="absolute inset-0 bg-gradient-to-r from-purple-500/0 to-pink-500/0 group-hover:from-purple-500/10 group-hover:to-pink-500/10 transition-all duration-500"></div>
                <div className="w-2 h-2 rounded-full bg-purple-400 mr-2 animate-pulse"></div>
                <p className="text-purple-200 uppercase tracking-wider font-medium text-sm">
                  A FRESH TAKE ON COMMUNITY
                </p>
              </div>
              
              <h1 className="text-5xl lg:text-7xl font-bold leading-tight bg-clip-text text-transparent bg-gradient-to-r from-purple-300 to-pink-300">
                Revolutionize
                <br />
                <span className="text-white">Community</span>
                <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400">
                  Engagement
                </span>
              </h1>
              
              <p className="text-xl text-gray-300 max-w-lg leading-relaxed">
                Unlike faceless platforms, Swarm puts video front and center, 
                creating authentic human connections through immersive experiences.
              </p>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-6">
              <Button className="px-8 py-4 bg-gradient-to-r from-purple-600 to-pink-600 text-white font-medium rounded-xl text-lg shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 transition-all duration-300 group relative overflow-hidden">
                <span className="relative z-10">Try it for yourself</span>
                <div className="absolute inset-0 bg-gradient-to-r from-purple-500 to-pink-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </Button>
              <Button variant="outline" className="px-8 py-4 border-2 border-purple-500/50 text-white font-medium rounded-xl text-lg hover:bg-purple-500/10 hover:border-purple-500 transition-all duration-300 group">
                Book a demo
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-2 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </Button>
            </div>

            {/* Stats section with animated counters */}
            <div className="grid grid-cols-3 gap-8 pt-8 border-t border-purple-500/20">
              <div className="text-center">
                <div className="text-3xl font-bold text-purple-400 mb-2">

                </div>

              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-pink-400 mb-2">

                </div>

              </div>
              <div className="text-center">


              </div>
            </div>
          </div>

          <div className="relative">
            {/* Animated gradient border */}
            <div className="absolute -inset-4 rounded-3xl bg-gradient-to-r from-purple-500/20 via-pink-500/20 to-orange-500/20 animate-gradient-x blur-xl"></div>
            
            <div className="relative rounded-3xl overflow-hidden shadow-2xl border border-purple-500/30 transform hover:scale-[1.02] transition-transform duration-700 group">
              <div className={`w-full h-96 ${features[currentFeature].bg} rounded-3xl flex items-center justify-center p-8`}>
                <Lottie
                  lottieRef={lottieRef}
                  animationData={features[currentFeature].animation}
                  loop={true}
                  autoplay={true}
                  className="w-full h-full"
                />
              </div>
              
          
              
              {/* Live participants indicator */}
              <div className="absolute top-6 right-6 bg-white/10 backdrop-blur-sm text-white px-4 py-2 rounded-full text-sm font-medium shadow-lg border border-white/10">
                <span className="flex items-center">
                  <span className="w-2 h-2 bg-red-500 rounded-full mr-2 animate-pulse"></span>
                  Live Now
                </span>
              </div>
              
              {/* Interactive stats */}
              
            </div>
            
            {/* Animated feature dots */}
            <div className="flex justify-center space-x-2 mt-6">
              {features.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentFeature(index)}
                  className={`w-3 h-3 rounded-full transition-all duration-500 cursor-pointer ${
                    currentFeature === index 
                      ? 'bg-gradient-to-r from-purple-400 to-pink-400 w-8' 
                      : 'bg-gray-600 hover:bg-gray-400'
                  }`}
                ></button>
              ))}
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          50% { transform: translateY(-20px) rotate(5deg); }
        }
        @keyframes gradient-x {
          0% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
          100% { background-position: 0% 50%; }
        }
        .animate-gradient-x {
          background-size: 200% 200%;
          animation: gradient-x 15s ease infinite;
        }
      `}</style>
    </section>
  );
};

// Animated counter component
const AnimatedCounter = ({ value }) => {
  const [count, setCount] = useState(0);
  
  useEffect(() => {
    const duration = 2000;
    const increment = value / (duration / 20);
    let current = 0;
    
    const timer = setInterval(() => {
      current += increment;
      if (current >= value) {
        setCount(value);
        clearInterval(timer);
      } else {
        setCount(Math.floor(current));
      }
    }, 20);
    
    return () => clearInterval(timer);
  }, [value]);

  return <span>{value % 1 === 0 ? count : count.toFixed(1)}</span>;
};