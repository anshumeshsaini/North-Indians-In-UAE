import React, { useState, useEffect } from "react";
import liveVideoImage from "@/assets/live-video-engagement.jpg";

export const PersonalSection = () => {
  const [viewers, setViewers] = useState(99);
  const [likes, setLikes] = useState(84);

  useEffect(() => {
    // Simulate engagement metrics changing
    const interval = setInterval(() => {
      setViewers(prev => prev + Math.floor(Math.random() * 3));
      setLikes(prev => prev + Math.floor(Math.random() * 2));
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="bg-white py-24 relative overflow-hidden">
      {/* Decorative elements that work with white background */}
      <div className="absolute top-20 -left-20 w-80 h-80 bg-purple-100/30 rounded-full blur-3xl"></div>
      <div className="absolute bottom-10 -right-20 w-72 h-72 bg-indigo-100/30 rounded-full blur-3xl"></div>
      
      <div className="max-w-6xl mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="space-y-8">
            <div className="inline-flex items-center px-4 py-1.5 rounded-full bg-purple-100 border border-purple-200/50">
              <div className="w-2 h-2 rounded-full bg-purple-500 mr-2 animate-pulse"></div>
              <p className="text-purple-700 uppercase tracking-wider font-medium text-sm">
                GET PERSONAL
              </p>
            </div>
            
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 leading-tight">
              Make your
              <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-indigo-600">
                members the star
              </span>
              <br />
              of the show
            </h2>
            
            <p className="text-lg text-gray-600 leading-relaxed">
              Host AMA's, fireside chats, and threaded
              discussions that run asynchronously with an
              in-person feel. No scheduling needed. Simply
              hit record and go!
            </p>

            {/* Feature highlights */}
            <div className="grid grid-cols-2 gap-6 pt-4">
              <div className="flex items-center">
                <div className="w-10 h-10 rounded-xl bg-purple-100 flex items-center justify-center mr-3 text-purple-600">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <span className="text-sm font-medium text-gray-700">Async Discussions</span>
              </div>
              
              <div className="flex items-center">
                <div className="w-10 h-10 rounded-xl bg-indigo-100 flex items-center justify-center mr-3 text-indigo-600">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />
                  </svg>
                </div>
                <span className="text-sm font-medium text-gray-700">One-Click Recording</span>
              </div>
            </div>

            {/* CTA Button */}
            <div className="pt-6">
              <button className="px-8 py-4 bg-gradient-to-r from-purple-600 to-indigo-600 text-white font-medium rounded-xl shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 transition-all duration-300 flex items-center group">
                Start Engaging Your Members
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-2 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </button>
            </div>
          </div>

          {/* Image container with elegant enhancements */}
          <div className="relative">
            <div className="absolute -inset-4 bg-gradient-to-r from-purple-100 to-indigo-100 rounded-3xl blur-xl opacity-50"></div>
            
            <div className="relative rounded-2xl overflow-hidden shadow-2xl border border-gray-100 transform hover:scale-[1.02] transition-transform duration-700 group">
              <img 
                src={liveVideoImage} 
                alt="Community member as star of the show in live video session"
                className="w-full h-auto object-cover transition-transform duration-700 group-hover:scale-105"
              />
              
              {/* Floating engagement indicators */}
              <div className="absolute top-6 left-6">
                <div className="bg-white/95 backdrop-blur-sm rounded-full px-4 py-2 shadow-lg flex items-center space-x-2 hover:scale-105 transition-transform duration-300 cursor-pointer">
                  <div className="w-4 h-4 bg-red-400 rounded-full animate-pulse"></div>
                  <span className="font-semibold text-gray-900 text-sm">LIVE</span>
                </div>
              </div>
              
              {/* Likes overlay with animation */}
              <div className="absolute bottom-6 left-6">
                <div className="bg-white/95 backdrop-blur-sm rounded-full px-4 py-2 shadow-lg flex items-center space-x-2 hover:scale-105 transition-transform duration-300 cursor-pointer">
                  <span className="text-red-500 text-lg">❤️</span>
                  <span className="font-semibold text-gray-900">{likes}</span>
                </div>
              </div>
              
              {/* Viewers overlay with animated avatars */}
              <div className="absolute bottom-6 right-6">
                <div className="bg-white/95 backdrop-blur-sm rounded-full px-4 py-2 shadow-lg flex items-center space-x-2 hover:scale-105 transition-transform duration-300 cursor-pointer">
                  <div className="flex -space-x-2">
                    <div className="w-6 h-6 bg-gradient-to-r from-blue-400 to-blue-600 rounded-full border-2 border-white shadow-sm"></div>
                    <div className="w-6 h-6 bg-gradient-to-r from-green-400 to-green-600 rounded-full border-2 border-white shadow-sm"></div>
                    <div className="w-6 h-6 bg-gradient-to-r from-purple-400 to-purple-600 rounded-full border-2 border-white shadow-sm"></div>
                  </div>
                  <span className="font-semibold text-gray-900 text-sm">{viewers} viewers</span>
                </div>
              </div>

              {/* Play button overlay */}
              <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                <div className="w-16 h-16 rounded-full bg-white/90 backdrop-blur-sm flex items-center justify-center shadow-xl transform hover:scale-110 transition-transform duration-300 cursor-pointer">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-purple-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z" />
                  </svg>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};