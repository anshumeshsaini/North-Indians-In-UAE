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
    </div>
  );
};

export default Index;
