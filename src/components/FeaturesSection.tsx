import React, { useState, useEffect } from "react";
import liveVideoImage from "@/assets/desgin.svg";

export const FeaturesSection = () => {
  const [activeFeature, setActiveFeature] = useState(0);
  
  const features = [
   
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveFeature((prev) => (prev + 1) % features.length);
    }, 3000);
    return () => clearInterval(interval);
  }, [features.length]);

  return (
    <section className="bg-white py-24 relative overflow-hidden">
      {/* Subtle background elements */}
      <div className="absolute top-0 left-0 w-72 h-72 bg-purple-50 rounded-full blur-3xl opacity-50"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-indigo-50 rounded-full blur-3xl opacity-50"></div>
      
      <div className="max-w-6xl mx-auto px-6 relative z-10">
        <div className="text-center mb-20">
          <div className="inline-flex items-center px-4 py-1.5 rounded-full bg-purple-100 border border-purple-200/50 mb-6">
            <div className="w-2 h-2 rounded-full bg-purple-500 mr-2 animate-pulse"></div>
            <p className="text-purple-700 uppercase tracking-wider font-medium text-sm">
              FACE-TO-FACE INTERACTIONS
            </p>
          </div>
          
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6 leading-tight">
            Run an online community
            <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-indigo-600">
              that captivates members
            </span>
          </h2>
          
          <p className="text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
            With Swarm, members exchange personal videos, screen shares, voice notes,
            or text messages in threaded, asynchronous conversations.
          </p>
        </div>

        <div className="flex flex-col lg:flex-row gap-12 items-center max-w-6xl mx-auto">
          {/* Feature descriptions */}
          <div className="w-full lg:w-2/5 space-y-8">
            {features.map((feature, index) => (
              <div 
                key={feature.id}
                className={`p-6 rounded-2xl border-2 transition-all duration-500 cursor-pointer ${
                  activeFeature === index 
                    ? 'border-purple-500 bg-purple-50/50 shadow-lg' 
                    : 'border-gray-100 hover:border-purple-200'
                }`}
                onMouseEnter={() => setActiveFeature(index)}
              >
                <div className="flex items-start space-x-4">
                  <div className={`w-12 h-12 rounded-xl flex items-center justify-center transition-colors ${
                    activeFeature === index 
                      ? 'bg-purple-600 text-white' 
                      : 'bg-purple-100 text-purple-600'
                  }`}>
                    {feature.icon}
                  </div>
                  <div>
                    <h3 className={`font-bold text-lg mb-2 transition-colors ${
                      activeFeature === index ? 'text-purple-700' : 'text-gray-900'
                    }`}>
                      {feature.title}
                    </h3>
                    <p className="text-gray-600 leading-relaxed">
                      {feature.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Image with interactive feature points - Made larger and centered */}
          <div className="w-full lg:w-3/5 relative flex justify-center items-center">
            <div className="w-full max-w-2xl mx-auto">
              <div className="absolute -inset-4 bg-gradient-to-r rounded-3xl"></div>

              <img 
                src={liveVideoImage} 
                alt="Community member sharing in live video with engagement metrics"
                className="w-full h-auto max-h-[500px] object-contain mx-auto rounded-lg shadow-xl"
              />
              
              {/* Interactive feature points */}
              {features.map((feature, index) => (
                <div
                  key={feature.id}
                  className={`absolute ${feature.position} transition-all duration-500 ${
                    activeFeature === index ? 'scale-110 z-10' : 'scale-100'
                  }`}
                  onMouseEnter={() => setActiveFeature(index)}
                >
                  <div className={`relative group cursor-pointer ${
                    activeFeature === index ? 'animate-pulse' : ''
                  }`}>
                    {/* Animated ring */}
                    <div className={`absolute -inset-2 rounded-full ${
                      activeFeature === index 
                        ? 'bg-purple-400/30 animate-ping' 
                        : 'group-hover:bg-purple-200/30'
                    } transition-all duration-300`}></div>
                    
                    {/* Feature point */}
                    <div className={`relative flex items-center space-x-2 px-4 py-2 rounded-full shadow-lg transition-all duration-300 ${
                      activeFeature === index
                        ? 'bg-purple-600 text-white'
                        : 'bg-white text-gray-900 group-hover:bg-purple-100'
                    }`}>
                      <div className="w-6 h-6 rounded-full bg-white/20 flex items-center justify-center">
                        {feature.icon}
                      </div>
                      <span className="font-medium text-sm">{feature.title}</span>
                    </div>
                    
                    {/* Connecting line (visible when active) */}
                    {activeFeature === index && (
                      <div className="absolute top-1/2 -left-16 w-16 h-0.5 bg-purple-400 transform -translate-y-1/2"></div>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Stats section */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-20 pt-12 border-t border-gray-100">
          <div className="text-center">
            <div className="text-3xl font-bold text-purple-600 mb-2">92%</div>
            <div className="text-gray-600">Member Retention</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-indigo-600 mb-2">3.4x</div>
            <div className="text-gray-600">More Engagement</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-purple-600 mb-2">87%</div>
            <div className="text-gray-600">Active Participation</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-indigo-600 mb-2">24/7</div>
            <div className="text-gray-600">Async Connection</div>
          </div>
        </div>
      </div>
    </section>
  );
};