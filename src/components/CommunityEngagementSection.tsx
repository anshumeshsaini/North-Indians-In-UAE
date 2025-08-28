import React from "react";
import { Button } from "@/components/ui/button";

export const CommunityEngagementSection = () => {
  const avatars = [
    "https://images.unsplash.com/photo-1494790108755-2616b612b47c?w=100&h=100&fit=crop&crop=face",
    "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop&crop=face",
    "https://images.unsplash.com/photo-1517841905240-472988babdf9?w=100&h=100&fit=crop&crop=face",
    "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=100&h=100&fit=crop&crop=face",
    "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop&crop=face",
    "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop&crop=face",
    "https://images.unsplash.com/photo-1554151228-14d9def656e4?w=100&h=100&fit=crop&crop=face",
    "https://images.unsplash.com/photo-1527980965255-d3b416303d12?w=100&h=100&fit=crop&crop=face"
  ];

  return (
    <section className="bg-white py-20">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-8">
            community engagement
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto mb-12">
            Unlike faceless platforms like Mighty Networks and Circle, Swarm puts video
            front and center, creating a true in-person feel for members.
          </p>
          
          <Button variant="swarm" size="swarm" className="mb-16">
            Try it for yourself
          </Button>
        </div>

        {/* Member avatars showcase */}
        <div className="flex flex-wrap justify-center items-center gap-4 mb-12">
          {avatars.map((avatar, index) => (
            <div key={index} className="relative">
              <img 
                src={avatar} 
                alt={`Community member ${index + 1}`}
                className="w-20 h-20 rounded-2xl object-cover shadow-lg"
              />
            </div>
          ))}
        </div>

        <div className="text-center">
          <blockquote className="text-2xl lg:text-3xl font-bold text-gray-900 mb-8 max-w-4xl mx-auto leading-tight">
            "I love Swarm's seamless video integration—it creates a highly
            personalized experience for my members."
          </blockquote>
          
          <div className="flex items-center justify-center">
            <div className="w-12 h-12 bg-gray-300 rounded-full flex items-center justify-center mr-3">
              <span className="text-gray-600 font-bold">LS</span>
            </div>
            <div className="text-left">
              <p className="font-semibold text-gray-900">Lindsay Stanton</p>
              <p className="text-gray-600 text-sm">Author & Grief Coach</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};