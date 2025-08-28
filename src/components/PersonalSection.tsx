import React from "react";
import liveVideoImage from "@/assets/live-video-engagement.jpg";

export const PersonalSection = () => {
  return (
    <section className="bg-white py-20">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <p className="text-primary uppercase tracking-wide font-semibold text-sm">
              GET PERSONAL
            </p>
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 leading-tight">
              Make your
              <br />
              members the star
              <br />
              of the show
            </h2>
            <p className="text-lg text-gray-600 leading-relaxed">
              Host AMA's, fireside chats, and threaded
              discussions that run asynchronously with an
              in-person feel. No scheduling needed. Simply
              hit record and go!
            </p>
          </div>

          <div className="relative">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl">
              <img 
                src={liveVideoImage} 
                alt="Community member as star of the show in live video session"
                className="w-full h-auto object-cover"
              />
              
              {/* Engagement overlay */}
              <div className="absolute bottom-6 left-6 bg-white rounded-full px-4 py-2 shadow-lg flex items-center space-x-2">
                <span className="text-red-500">❤️</span>
                <span className="font-semibold text-gray-900">84</span>
              </div>
              
              <div className="absolute bottom-6 right-6 bg-white rounded-full px-4 py-2 shadow-lg flex items-center space-x-2">
                <div className="flex -space-x-2">
                  <div className="w-6 h-6 bg-blue-500 rounded-full border-2 border-white"></div>
                  <div className="w-6 h-6 bg-green-500 rounded-full border-2 border-white"></div>
                  <div className="w-6 h-6 bg-purple-500 rounded-full border-2 border-white"></div>
                </div>
                <span className="font-semibold text-gray-900 text-sm">99 viewers</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};