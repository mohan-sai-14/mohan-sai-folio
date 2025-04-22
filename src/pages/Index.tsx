
import { useEffect } from "react";
import { Navbar } from "../components/Navbar";
import { HeroSection } from "../components/sections/HeroSection";
import { AboutSection } from "../components/sections/AboutSection";
import { EducationSection } from "../components/sections/EducationSection";
import { SkillsSection } from "../components/sections/SkillsSection";
import { ProjectsSection } from "../components/sections/ProjectsSection";
import { CertificationsSection } from "../components/sections/CertificationsSection";
import { AchievementsSection } from "../components/sections/AchievementsSection";
import { ContactSection } from "../components/sections/ContactSection";
import { Footer } from "../components/Footer";

const Index = () => {
  useEffect(() => {
    // Set dark mode as default on first load
    if (!localStorage.getItem("theme")) {
      document.documentElement.classList.add("dark");
    }
  }, []);

  return (
    <div className="min-h-screen bg-background text-foreground antialiased overflow-x-hidden circuit-bg">
      <Navbar />
      
      <main>
        <HeroSection />
        <AboutSection />
        <EducationSection />
        <SkillsSection />
        <ProjectsSection />
        <CertificationsSection />
        <AchievementsSection />
        <ContactSection />
      </main>
      
      <Footer />
    </div>
  );
};

export default Index;
