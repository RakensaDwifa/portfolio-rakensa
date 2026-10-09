import { AboutSection } from "@/components/profile/AboutSection";
import { LearningInPublic } from "@/components/activity/LearningInPublic";
import { ContactSection } from "@/components/contact/ContactSection";
import { HeroSection } from "@/components/hero/HeroSection";
import { JourneyTimeline } from "@/components/journey/JourneyTimeline";
import { ProjectShowcase } from "@/components/projects/ProjectShowcase";
import { TechPipeline } from "@/components/tech/TechPipeline";

export default function Home() {
  return (
    <>
      <HeroSection />
      <AboutSection />
      <ProjectShowcase />
      <TechPipeline />
      <LearningInPublic />
      <JourneyTimeline />
      <ContactSection />
    </>
  );
}
