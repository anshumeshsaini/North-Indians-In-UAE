import React from "react";

export const SetupSection = () => {
  const steps = [
    {
      number: "1",
      title: "Create a space",
      description: "Give it a name, add a logo, and you're good to go!",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
        </svg>
      )
    },
    {
      number: "2", 
      title: "Set up hubs",
      description: "Pick from a list of suggested channels — or add your own.",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 5a1 1 0 011-1h14a1 1 0 011 1v2a1 1 0 01-1 1H5a1 1 0 01-1-1V5zM4 13a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H5a1 1 0 01-1-1v-6zM16 13a1 1 0 011-1h2a1 1 0 011 1v6a1 1 0 01-1 1h-2a1 1 0 01-1-1v-6z" />
        </svg>
      )
    },
    {
      number: "3",
      title: "Invite your people", 
      description: "Share your link and get notified when members join.",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M18 9v3m0 0v3m0-3h3m-3 0h-3m-2-5a4 4 0 11-8 0 4 4 0 018 0zM3 20a6 6 0 0112 0v1H3v-1z" />
        </svg>
      )
    }
  ];

  return (
    <section className="relative py-24 overflow-hidden bg-gradient-to-br from-gray-50 to-indigo-50">
      {/* Decorative elements */}
      <div className="absolute top-0 right-0 w-72 h-72 bg-purple-200/20 rounded-full blur-3xl"></div>
      <div className="absolute bottom-10 left-10 w-64 h-64 bg-indigo-200/20 rounded-full blur-3xl"></div>
      
      <div className="max-w-6xl mx-auto px-6 relative z-10">
        <div className="text-center mb-20">
          <div className="inline-flex items-center justify-center px-4 py-1.5 rounded-full bg-purple-100 mb-6">
            <div className="w-2 h-2 rounded-full bg-purple-500 mr-2 animate-pulse"></div>
            <p className="text-purple-700 uppercase tracking-wider font-medium text-sm">
              LAUNCH IN MINUTES
            </p>
          </div>
          
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6 leading-tight">
            Build a community your
            <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-indigo-600">
              members can't live without
            </span>
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto text-lg">
            Get started quickly with our intuitive setup process designed for creators
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 max-w-5xl mx-auto">
          {steps.map((step, index) => (
            <div 
              key={index} 
              className="relative group"
            >
              {/* Connecting line between steps */}
              {index < steps.length - 1 && (
                <div className="hidden md:block absolute top-16 -right-5 w-10 h-0.5 bg-gradient-to-r from-purple-300 to-indigo-300 group-hover:from-purple-400 group-hover:to-indigo-400 transition-colors z-0"></div>
              )}
              
              <div className="relative h-full bg-white/80 backdrop-blur-sm rounded-2xl p-8 shadow-lg border border-white/20 transition-all duration-500 hover:shadow-xl hover:-translate-y-2 group-hover:border-purple-200/50">
                {/* Step number with gradient background */}
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-purple-600 to-indigo-600 flex items-center justify-center shadow-lg">
                    <span className="text-white font-bold text-lg">{step.number}</span>
                  </div>
                </div>
                
                <div className="text-center space-y-6 pt-4">
                  {/* Icon container */}
                  <div className="w-16 h-16 mx-auto bg-gradient-to-br from-purple-100 to-indigo-100 rounded-2xl flex items-center justify-center text-purple-600">
                    {step.icon}
                  </div>
                  
                  <div className="space-y-4">
                    <h3 className="text-xl font-bold text-gray-900 group-hover:text-purple-700 transition-colors">
                      {step.title}
                    </h3>
                    <p className="text-gray-600 leading-relaxed">
                      {step.description}
                    </p>
                  </div>
                </div>
                
                {/* Hover effect border */}
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-purple-400/0 to-indigo-400/0 group-hover:from-purple-400/10 group-hover:to-indigo-400/10 transition-all duration-500"></div>
              </div>
            </div>
          ))}
        </div>
        
        {/* CTA Button */}
        <div className="text-center mt-16">
          <button className="px-8 py-4 bg-gradient-to-r from-purple-600 to-indigo-600 text-white font-medium rounded-xl shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 transition-all duration-300">
            Start Building Your Community
          </button>
        </div>
      </div>
    </section>
  );
};