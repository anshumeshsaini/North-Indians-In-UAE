import React, { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";

export const CommunityEngagementSection = () => {
  const avatars = [

    "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop&crop=face",
    "https://images.unsplash.com/photo-1517841905240-472988babdf9?w=100&h=100&fit=crop&crop=face",
    "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=100&h=100&fit=crop&crop=face",
    "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop&crop=face",
    "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop&crop=face",

    "https://images.unsplash.com/photo-1527980965255-d3b416303d12?w=100&h=100&fit=crop&crop=face"
  ];

  const [currentAvatarIndex, setCurrentAvatarIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentAvatarIndex((prev) => (prev + 1) % avatars.length);
    }, 3000);
    return () => clearInterval(interval);
  }, [avatars.length]);

  return (
    <section className="relative py-24 overflow-hidden bg-gradient-to-br from-indigo-50 to-purple-50">
      {/* Decorative elements */}
      <div className="absolute top-0 left-0 w-full h-72 bg-gradient-to-r from-purple-400/10 to-indigo-400/10 transform -skew-y-3 -translate-y-16"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-purple-200/20 rounded-full blur-3xl"></div>
      <div className="absolute top-1/3 left-10 w-64 h-64 bg-indigo-200/20 rounded-full blur-3xl"></div>
      
      <div className="max-w-6xl mx-auto px-6 relative z-10">
        <div className="text-center mb-20">
          <div className="inline-flex items-center justify-center mb-4">


          </div>
          
          <h2 className="text-5xl lg:text-6xl font-bold text-gray-900 mb-8 tracking-tight">
            Community <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-indigo-600">Engagement</span>
          </h2>
          
          <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-12 leading-relaxed">
            Unlike faceless platforms like Mighty Networks and Circle, Swarm puts video
            front and center, creating a true in-person feel for members.
          </p>
          
          <Button variant="swarm" size="swarm" className="mb-16 relative overflow-hidden group">
            <span className="relative z-10">Try it for yourself</span>
            <div className="absolute inset-0 bg-gradient-to-r from-purple-600 to-indigo-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
          </Button>
        </div>

        {/* Animated avatar showcase */}
        <div className="relative mb-16">
        
          
          <div className="flex flex-wrap justify-center items-center gap-3 mt-8">
            {avatars.map((avatar, index) => (
              <div 
                key={index} 
                className={`relative transition-all duration-500 ${index === currentAvatarIndex ? 'scale-110 z-10' : 'scale-100'}`}
                onClick={() => setCurrentAvatarIndex(index)}
              >
                <div className={`w-16 h-16 rounded-xl overflow-hidden shadow-lg cursor-pointer transition-all duration-300 hover:scale-110 ${index === currentAvatarIndex ? 'ring-2 ring-purple-500 ring-offset-2' : ''}`}>
                  <img 
                    src={avatar} 
                    alt={`Community member ${index + 1}`}
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Testimonial card */}
        <div className="relative max-w-4xl mx-auto">
          <div className="absolute -inset-4 bg-gradient-to-r from-purple-400/20 to-indigo-400/20 rounded-3xl blur-lg opacity-70 group-hover:opacity-100 transition duration-1000 group-hover:duration-200 animate-tilt"></div>
          <div className="relative bg-white/80 backdrop-blur-md rounded-3xl p-10 shadow-xl border border-white/20">
            <div className="text-center">
              <div className="mb-6">
                <svg className="w-12 h-12 mx-auto text-purple-400/60" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                </svg>
              </div>
              
              <blockquote className="text-2xl lg:text-3xl font-medium text-gray-900 mb-8 leading-relaxed">
                "I love Swarm's seamless video integration—it creates a highly
                personalized experience for my members."
              </blockquote>
              
              <div className="flex items-center justify-center">
                <div className="relative">
                  <div className="w-14 h-14 bg-gradient-to-r from-purple-400 to-indigo-400 rounded-full flex items-center justify-center mr-4 shadow-md">
                    <span className="text-white font-bold text-lg">LS</span>
                  </div>
                  <div className="absolute -bottom-1 -right-1 w-5 h-5 bg-green-400 rounded-full border-2 border-white"></div>
                </div>
                <div className="text-left">
                  <p className="font-semibold text-gray-900">Lindsay Stanton</p>
                  <p className="text-gray-600 text-sm">Author & Grief Coach</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};