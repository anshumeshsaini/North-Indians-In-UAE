import React from "react";
import { Header } from "@/components/Header";
import { HeroSection } from "@/components/HeroSection";
import { FeaturesSection } from "@/components/FeaturesSection";
import { EngagementSection } from "@/components/EngagementSection";
import { PersonalSection } from "@/components/PersonalSection";
import { LiveEventsSection } from "@/components/LiveEventsSection";
import { SetupSection } from "@/components/SetupSection";
import { TestimonialSection } from "@/components/TestimonialSection";
import { CommunityEngagementSection } from "@/components/CommunityEngagementSection";
import { ScaleSection } from "@/components/ScaleSection";
import { BrandedAppsSection } from "@/components/BrandedAppsSection";
import ThreeDHoverGallery from "@/components/3d-hover-gallery";
import {Footer} from "@/components/Footer";
import CommunityPlatform from "@/components/Card";
import TestimonialsSection from "./../components/TestCard";
import { 
  ThreeDScrollTriggerContainer, 
  ThreeDScrollTriggerRow 
} from '@/components/3d-scroll-trigger';



const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <HeroSection />
      <FeaturesSection />
      <EngagementSection />
      <PersonalSection />
      <LiveEventsSection />
      <SetupSection />
      <TestimonialSection />
   
      <CommunityEngagementSection />
      <ScaleSection />
      <BrandedAppsSection />
      <CommunityPlatform/>

      <ThreeDHoverGallery/>
      <ThreeDScrollTriggerRow baseVelocity={5} direction={1}>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
  {/* Testimonial 1 */}
  

  {/* Testimonial 3 */}
  

  {/* Testimonial 4 */}
  <div className="px-4 py-4 bg-purple-500 text-white rounded-lg shadow-lg">
    <img 
      src="https://plus.unsplash.com/premium_photo-1756298027388-05fcfc5e8169?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwxfHx8ZW58MHx8fHx8" 
      alt="David Johnson" 
      className="w-16 h-16 rounded-full mb-2"
    />
    <h3 className="text-lg font-semibold">David Johnson</h3>
    <p className="text-sm italic">Marketing Specialist</p>
    <p className="mt-2">
      "The support team is phenomenal!."
    </p>
  </div>
  <div className="px-4 py-4 bg-purple-500 text-white rounded-lg shadow-lg">
    <img 
      src="https://plus.unsplash.com/premium_photo-1756298027388-05fcfc5e8169?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwxfHx8ZW58MHx8fHx8" 
      alt="David Johnson" 
      className="w-16 h-16 rounded-full mb-2"
    />
    <h3 className="text-lg font-semibold">David Johnson</h3>
    <p className="text-sm italic">Marketing Specialist</p>
    <p className="mt-2">
      "The support team is phenomenal!"
    </p>
  </div>
  <div className="px-4 py-4 bg-purple-500 text-white rounded-lg shadow-lg">
    <img 
      src="https://plus.unsplash.com/premium_photo-1756298027388-05fcfc5e8169?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwxfHx8ZW58MHx8fHx8" 
      alt="David Johnson" 
      className="w-16 h-16 rounded-full mb-2"
    />
    <h3 className="text-lg font-semibold">David Johnson</h3>
    <p className="text-sm italic">Marketing Specialist</p>
    <p className="mt-2">
      "The support team is phenomenal!"
    </p>
  </div>
  <div className="px-4 py-4 bg-purple-500 text-white rounded-lg shadow-lg">
    <img 
      src="https://plus.unsplash.com/premium_photo-1756298027388-05fcfc5e8169?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwxfHx8ZW58MHx8fHx8" 
      alt="David Johnson" 
      className="w-16 h-16 rounded-full mb-2"
    />
    <h3 className="text-lg font-semibold">David Johnson</h3>
    <p className="text-sm italic">Marketing Specialist</p>
    <p className="mt-2">
      "The support team is phenomenal!"
    </p>
  </div>
  <div className="px-4 py-4 bg-purple-500 text-white rounded-lg shadow-lg">
    <img 
      src="https://plus.unsplash.com/premium_photo-1756298027388-05fcfc5e8169?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwxfHx8ZW58MHx8fHx8" 
      alt="David Johnson" 
      className="w-16 h-16 rounded-full mb-2"
    />
    <h3 className="text-lg font-semibold">David Johnson</h3>
    <p className="text-sm italic">Marketing Specialist</p>
    <p className="mt-2">
      "The support team is phenomenal! 
    </p>
  </div>
  <div className="px-4 py-4 bg-purple-500 text-white rounded-lg shadow-lg">
    <img 
      src="https://plus.unsplash.com/premium_photo-1756298027388-05fcfc5e8169?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwxfHx8ZW58MHx8fHx8" 
      alt="David Johnson" 
      className="w-16 h-16 rounded-full mb-2"
    />
    <h3 className="text-lg font-semibold">David Johnson</h3>
    <p className="text-sm italic">Marketing Specialist</p>
    <p className="mt-2">
      "The support team is phenomenal! "
    </p>
  </div>
  <div className="px-4 py-4 bg-purple-500 text-white rounded-lg shadow-lg">
    <img 
      src="https://plus.unsplash.com/premium_photo-1756298027388-05fcfc5e8169?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwxfHx8ZW58MHx8fHx8" 
      alt="David Johnson" 
      className="w-16 h-16 rounded-full mb-2"
    />
    <h3 className="text-lg font-semibold">David Johnson</h3>
    <p className="text-sm italic">Marketing Specialist</p>
    <p className="mt-2">
      "The support team is phenomenal! "
    </p>
  </div>
  <div className="px-4 py-4 bg-purple-500 text-white rounded-lg shadow-lg">
    <img 
      src="https://plus.unsplash.com/premium_photo-1756298027388-05fcfc5e8169?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwxfHx8ZW58MHx8fHx8" 
      alt="David Johnson" 
      className="w-16 h-16 rounded-full mb-2"
    />
    <h3 className="text-lg font-semibold">David Johnson</h3>
    <p className="text-sm italic">Marketing Specialist</p>
    <p className="mt-2">
      "The support team is phenomenal! "
    </p>
  </div>
  <div className="px-4 py-4 bg-purple-500 text-white rounded-lg shadow-lg">
    <img 
      src="https://plus.unsplash.com/premium_photo-1756298027388-05fcfc5e8169?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwxfHx8ZW58MHx8fHx8" 
      alt="David Johnson" 
      className="w-16 h-16 rounded-full mb-2"
    />
    <h3 className="text-lg font-semibold">David Johnson</h3>
    <p className="text-sm italic">Marketing Specialist</p>
    <p className="mt-2">
      "The support team is phenomenal! "
    </p>
  </div>
  <div className="px-4 py-4 bg-purple-500 text-white rounded-lg shadow-lg">
    <img 
      src="https://plus.unsplash.com/premium_photo-1756298027388-05fcfc5e8169?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwxfHx8ZW58MHx8fHx8" 
      alt="David Johnson" 
      className="w-16 h-16 rounded-full mb-2"
    />
    <h3 className="text-lg font-semibold">David Johnson</h3>
    <p className="text-sm italic">Marketing Specialist</p>
    <p className="mt-2">
      "The support team is phenomenal! "
    </p>
  </div>
  <div className="px-4 py-4 bg-purple-500 text-white rounded-lg shadow-lg">
    <img 
      src="https://plus.unsplash.com/premium_photo-1756298027388-05fcfc5e8169?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwxfHx8ZW58MHx8fHx8" 
      alt="David Johnson" 
      className="w-16 h-16 rounded-full mb-2"
    />
    <h3 className="text-lg font-semibold">David Johnson</h3>
    <p className="text-sm italic">Marketing Specialist</p>
    <p className="mt-2">
      "The support team is phenomenal! "
    </p>
  </div>
  <div className="px-4 py-4 bg-purple-500 text-white rounded-lg shadow-lg">
    <img 
      src="https://plus.unsplash.com/premium_photo-1756298027388-05fcfc5e8169?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwxfHx8ZW58MHx8fHx8" 
      alt="David Johnson" 
      className="w-16 h-16 rounded-full mb-2"
    />
    <h3 className="text-lg font-semibold">David Johnson</h3>
    <p className="text-sm italic">Marketing Specialist</p>
    <p className="mt-2">
      "The support team is phenomenal! "
    </p>
  </div>

  
</div>

  </ThreeDScrollTriggerRow>
<Footer/>
    </div>
  );
};

export default Index;
