import React from "react";

export const SetupSection = () => {
  const steps = [
    {
      number: "1",
      title: "Create a space",
      description: "Give it a name, add a logo, and you're good to go!"
    },
    {
      number: "2", 
      title: "Set up hubs",
      description: "Pick from a list of suggested channels — or add your own."
    },
    {
      number: "3",
      title: "Invite your people", 
      description: "Share your link and get notified when members join."
    }
  ];

  return (
    <section className="bg-white py-20">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <p className="text-primary uppercase tracking-wide font-semibold text-sm mb-4">
            LAUNCH IN MINUTES
          </p>
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900">
            Build a community your
            <br />
            members can't live without
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {steps.map((step, index) => (
            <div key={index} className="text-center space-y-6">
              <div className="relative">
                <div className="w-16 h-16 mx-auto bg-gray-100 rounded-2xl flex items-center justify-center mb-6">
                  <span className="text-2xl font-bold text-primary">{step.number}</span>
                </div>
              </div>
              <div className="space-y-3">
                <h3 className="text-xl font-bold text-gray-900">{step.title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  {step.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};