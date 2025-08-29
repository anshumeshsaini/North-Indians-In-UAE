import React, { useState } from 'react';

const TestimonialsSections = () => {
  const [activeTestimonial, setActiveTestimonial] = useState(0);

  const testimonials = [
    {
      name: "Mike Gingerich",
      role: "Chief Storyteller, Wellness Idea Guy",
      content: "Swarm gives me a portal for my client groups and online coaching where video messaging is made easy to allow for communication that is richer than just messages. The audio and video recording as well as ability to go live all in one space are very helpful.",
      avatar: "MG"
    },
    {
      name: "Lindsay Stanton",
      role: "President",
      content: "I love that there are so many video options and integration of video in the platform. It allows for a highly personalized user experience for my clients. Very slick and user friendly. The customer support is excellent!",
      avatar: "LS"
    },
    {
      name: "Adriane Wilson",
      role: "Founder and Community Architect",
      content: "The customer service and constant improvements are what I like best. It feels like I'm part of the Swarm community. The technology is so helpful. I needed a community platform with spaces and video capability. Swarm has it, along with the ability to have a mobile app for my subscribers.",
      avatar: "AW"
    },
    {
      name: "Jonathan Tarrant",
      role: "Founder, Global Ambassador Live-More",
      content: "I love the built in options for video, audio, or text messaging. The overall format is clean and easy to use. Support is amazing and super responsive. Very happy so far!",
      avatar: "JT"
    },
    {
      name: "Mika Mandrix",
      role: "Small-Business Owner/Business Mentor",
      content: "I like that it is video first and there is a lot of flexibility in setting up the Spaces and Hubs. The Swarm team are brilliant at getting back to you quickly if you have any issues. Their support is really good.",
      avatar: "MM"
    },
    {
      name: "Aaron Montgomery",
      role: "CEO, Our Success Group",
      content: "Swarm has completely transformed how I engage with my clients. As a coach, one of the biggest challenges is balancing ongoing client support while maintaining clear, professional boundaries.",
      avatar: "AM"
    },
    {
      name: "Mike Hendrix",
      role: "Vice President, Tesanap",
      content: "I can't remember the last time we rolled out new technology that was met with such positivity. We're looking forward to using it more and more.",
      avatar: "MH"
    },
    {
      name: "Nick",
      role: "YouTube & Podcaster",
      content: "After a year on Circle, we switched to Swarm—and the difference is night and day. The platform is excellent, but the support is what truly stands out. If you're thinking about switching, don't hesitate—just do it!",
      avatar: "N"
    },
    {
      name: "Svetlana Ray",
      role: "Dance Coach",
      content: "I offer personal-finance coaching for individuals and couples, and while live, virtual coaching is the foundational medium for that coaching, Swarm unlocks the ability to continue the coaching conversation asynchronously between live sessions.",
      avatar: "SR"
    },
    {
      name: "Anonymous Swarm User",
      role: "Satisfied Customer",
      content: "This app is absolutely amazing! I'm running two projects with it and it's fast, user-friendly, and engaging. After spending significant money trying to develop our own platform last year, I truly appreciate the work that went into creating this solution.",
      avatar: "AU"
    },
    {
      name: "Jeff M",
      role: "Personal Finance Coach",
      content: "I'm part of the Swarm community. The technology is so helpful. I needed a community platform with spaces and video capability. Swarm has it, along with the ability to have a mobile app for my subscribers. It has everything I need.",
      avatar: "JM"
    },
    {
      name: "Olimpia Valli Fassi",
      role: "Dog Behaviorist",
      content: "Swarm is a true differentiator for and critical component of my coaching business. The format is clean and easy to use. Support is amazing and super responsive. Very happy so far!",
      avatar: "OV"
    }
  ];

  return (
    <div className="bg-purple-50 py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl font-extrabold text-purple-900 sm:text-4xl">
            Loved by industry experts, coaches, & creators
          </h2>
          <p className="mt-4 max-w-2xl mx-auto text-xl text-purple-700">
            Discover why professionals are choosing our platform to build their communities
          </p>
        </div>

        {/* Testimonials */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Main testimonial */}
          <div className="bg-white rounded-2xl p-8 lg:p-12 shadow-lg border border-purple-200">
            <div className="flex items-center mb-6">
              <div className="flex-shrink-0">
                <div className="h-16 w-16 rounded-full bg-purple-100 flex items-center justify-center text-purple-800 font-bold text-xl">
                  {testimonials[activeTestimonial].avatar}
                </div>
              </div>
              <div className="ml-4">
                <h3 className="text-lg font-bold text-purple-900">
                  {testimonials[activeTestimonial].name}
                </h3>
                <p className="text-purple-600">
                  {testimonials[activeTestimonial].role}
                </p>
              </div>
            </div>
            <p className="text-purple-800 text-lg italic">
              "{testimonials[activeTestimonial].content}"
            </p>
          </div>

          {/* Other testimonials grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {testimonials.map((testimonial, index) => (
              <div 
                key={index}
                onClick={() => setActiveTestimonial(index)}
                className={`cursor-pointer rounded-xl p-6 transition-all duration-200 ${
                  index === activeTestimonial 
                    ? 'bg-purple-100 border-2 border-purple-300' 
                    : 'bg-white hover:bg-purple-50 shadow-md'
                }`}
              >
                <div className="flex items-start">
                  <div className="flex-shrink-0">
                    <div className={`h-10 w-10 rounded-full flex items-center justify-center text-sm font-bold ${
                      index === activeTestimonial 
                        ? 'bg-purple-200 text-purple-800' 
                        : 'bg-purple-100 text-purple-700'
                    }`}>
                      {testimonial.avatar}
                    </div>
                  </div>
                  <div className="ml-4">
                    <h3 className="text-sm font-medium text-purple-900">
                      {testimonial.name}
                    </h3>
                    <p className="text-xs text-purple-600">
                      {testimonial.role}
                    </p>
                    <p className="mt-2 text-sm text-purple-700 line-clamp-3">
                      {testimonial.content}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Stats section */}
       
        {/* CTA Section */}
        <div className="mt-20 text-center">
          <h2 className="text-3xl font-extrabold text-purple-900 sm:text-4xl">
            Join thousands of satisfied community builders
          </h2>
          <p className="mt-4 text-lg text-purple-700 max-w-3xl mx-auto">
            Start building your engaged community today with our powerful platform.
          </p>
          <div className="mt-8 flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-4">
            <button className="px-6 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-purple-600 hover:bg-purple-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-purple-500">
              Get started
            </button>
            
          </div>
        </div>
      </div>
    </div>
  );
};

export default TestimonialsSections;