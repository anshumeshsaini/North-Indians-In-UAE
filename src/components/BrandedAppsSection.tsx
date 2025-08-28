import React from "react";
import mobilelaptop from './../assets/mobilelaptop.svg';

export const BrandedAppsSection = () => {
  return (
    <section className="bg-white py-20">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col items-center">
          {/* Text content - now above the image */}
          <div className="text-center space-y-6 mb-12 w-full max-w-3xl">
            <p className="text-primary uppercase tracking-wide font-semibold text-lg">
              MAKE SWARM YOUR OWN
            </p>
            <h2 className="text-5xl lg:text-6xl font-bold text-gray-900 leading-tight">
              Give members access to
              your own branded apps
            </h2>
          </div>

          {/* Image content - now below the text */}
          <div className="w-full max-w-4xl">
            <img 
              src={mobilelaptop} 
              alt="Mobile and laptop app mockups" 
              className="w-full h-auto"
            />
          </div>
        </div>
      </div>
    </section>
  );
};