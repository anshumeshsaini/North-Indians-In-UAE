import React from "react";
import { Button } from "@/components/ui/button";

export const EngagementSection = () => {
  return (
    <section className="bg-primary text-white py-20 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 text-center">
        <p className="uppercase tracking-wide font-semibold text-sm mb-4 text-white/90">
          STICKIER COMMUNITIES
        </p>
        <h2 className="text-4xl lg:text-5xl font-bold mb-8 max-w-4xl mx-auto leading-tight">
          Swarm puts real connection first,
          with face-to-face video driving twice
          the engagement you're used to.
        </h2>
        
        <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mt-12">
          <Button variant="secondary" size="swarm" className="text-primary font-semibold bg-white hover:bg-gray-100">
            Start your free 14-day trial
          </Button>
          <Button variant="swarm-outline" size="swarm" className="border-white text-white hover:bg-white hover:text-primary">
            or Book a demo →
          </Button>
        </div>
      </div>

      {/* Background geometric shapes */}
      <div className="absolute right-0 top-1/2 transform -translate-y-1/2">


      <svg width="312" height="506" viewBox="0 0 312 506" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M234.869 68.0729L336.702 9.62533L338.215 123.263L234.869 68.0729Z" fill="#3095FC"/>
<path d="M204.467 166.839L312.224 105.731L311.402 229.645L204.467 166.839Z" fill="#1F81F4"/>
<path d="M310.994 350.276L204.992 411.426L204.902 289.615L310.994 350.276Z" fill="#824AFA"/>
<path d="M204.996 289.671L311.522 227.195L311.514 351.112L204.996 289.671Z" fill="#1E5FD6"/>
<path d="M204.991 411.426L311.339 349.572L311.59 473.489L204.991 411.426Z" fill="#7B36FA"/>
<path d="M204.992 289.671L204.492 166.822L309.507 228.293L204.992 289.671Z" fill="#2170E5"/>
<path d="M204.996 289.674L105.496 237.801L204.496 166.822L204.996 289.674Z" fill="#CB9D59"/>
<path d="M105.496 349.731L105.497 237.799L204.997 289.671L105.496 349.731Z" fill="#D07B55"/>
<path d="M204.989 411.429L105.495 349.728L204.993 289.671L204.989 411.429Z" fill="#D43D52"/>
<path d="M204.989 411.424L105.492 472.578L105.492 349.729L204.989 411.424Z" fill="#8B5EFA"/>
<path d="M105.499 472.576L7.39385 420.708L105.497 349.728L105.499 472.576Z" fill="#9C78FA"/>
<path d="M105.493 237.803L105.493 102.394L204.494 166.82L105.493 237.803Z" fill="#C9A95B"/>
<path d="M33.5395 282.022L33.9922 200.673L105.491 237.8L33.5395 282.022Z" fill="#C9A95B"/>
</svg>


      </div>
    </section>
  );
};