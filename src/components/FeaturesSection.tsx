import React from "react";
import liveVideoImage from "@/assets/live-video-engagement.jpg";

export const FeaturesSection = () => {
  return (
    <section className="bg-white py-20">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <p className="text-primary uppercase tracking-wide font-semibold text-sm mb-4">
            FACE-TO-FACE INTERACTIONS
          </p>
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            Run an online community
            <br />
            that captivates members
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            With Swarm, members exchange personal videos, screen shares, voice notes,
            or text messages in threaded, asynchronous conversations.
          </p>
        </div>

        <div className="relative">
          <img 
            src={liveVideoImage} 
            alt="Community member sharing in live video with engagement metrics"
            className="w-full max-w-4xl mx-auto rounded-2xl shadow-2xl"
          />
          
          {/* Feature callouts */}
          <div className="absolute top-8 left-8 bg-black text-white px-4 py-2 rounded-full text-sm font-medium shadow-lg">
            Spaces
          </div>
          <div className="absolute top-20 right-8 bg-black text-white px-4 py-2 rounded-full text-sm font-medium shadow-lg">
            Automatic Titles
          </div>
          <div className="absolute bottom-8 right-8 bg-black text-white px-4 py-2 rounded-full text-sm font-medium shadow-lg">
            Transcripts
          </div>
          <div className="absolute bottom-20 left-8 bg-black text-white px-4 py-2 rounded-full text-sm font-medium shadow-lg">
            Topics
          </div>
        </div>
      </div>
    </section>
  );
};