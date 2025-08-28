import React from "react";
import liveEventImage from "@/assets/live-event-grid.jpg";

export const LiveEventsSection = () => {
  return (
    <section className="bg-gray-50 py-20">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <p className="text-primary uppercase tracking-wide font-semibold text-sm mb-4">
            GO LIVE ANYTIME
          </p>
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            Host live events directly in
            <br />
            your Swarm space
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            With Swarm Live, you can create immersive live video experiences for your
            members. Whether it's a webinar, mastermind group, or live podcast
            recording, Swarm has you covered.
          </p>
        </div>

        <div className="relative max-w-5xl mx-auto">
          <img 
            src={liveEventImage} 
            alt="Live event with multiple participants in video grid format"
            className="w-full rounded-2xl shadow-2xl"
          />
          
          {/* Feature indicators */}
          <div className="absolute top-4 left-4 bg-primary text-white px-3 py-1 rounded-full text-sm font-medium">
            Live Streaming
          </div>
          <div className="absolute top-4 right-4 bg-black text-white px-3 py-1 rounded-full text-sm font-medium">
            HD Quality
          </div>
          <div className="absolute bottom-4 left-4 bg-green-500 text-white px-3 py-1 rounded-full text-sm font-medium">
            • LIVE
          </div>
          <div className="absolute bottom-4 right-4 bg-white text-gray-900 px-3 py-1 rounded-full text-sm font-medium shadow-lg">
            Recording
          </div>
        </div>
      </div>
    </section>
  );
};