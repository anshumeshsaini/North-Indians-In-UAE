import React from "react";
import mobilelaptop from './../assets/mobilelaptop.svg';

export const BrandedAppsSection = () => {
  return (
    <section className="bg-white py-20">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <p className="text-primary uppercase tracking-wide font-semibold text-sm">
              MAKE SWARM YOUR OWN
            </p>
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 leading-tight">
              Give members access to
              your own branded apps
            </h2>
          </div>

          <div className="relative">

              {/* Mobile app mockup placeholder */}
              <div className="">



<img src={mobilelaptop} alt="" />



                
                </div>
              </div>
            </div>
          </div>


    </section>
  );
};