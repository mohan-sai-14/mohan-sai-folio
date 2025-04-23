
import { useEffect, useRef } from "react";

export function AboutSection() {
  const sectionRef = useRef<HTMLElement>(null);
  
  useEffect(() => {
    const observerOptions = {
      root: null,
      rootMargin: "0px",
      threshold: 0.1,
    };
    
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("animate-fade-in");
          observer.unobserve(entry.target);
        }
      });
    }, observerOptions);
    
    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }
    
    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);
  
  return (
    <section id="about" ref={sectionRef} className="pt-32 pb-20 opacity-0">
      <div className="container mx-auto px-4">
        <h2 className="section-title text-center">About Me</h2>
        
        <div className="circuit-bg rounded-2xl glass p-8 md:p-12 max-w-4xl mx-auto">
          <div className="space-y-6">
            <p className="text-lg">
              I'm an aspiring AI/ML and Robotics Engineer with a passion for building smart systems that solve real-world problems. I enjoy working on projects that mix software, hardware, and intelligence—whether it's training models or bringing robots to life.
            </p>
            
            <p className="text-lg">
              Currently pursuing B.Tech in Computer Science with a specialization in AI & ML at Takshashila University, I'm actively involved in various university activities as a Joint Secretary of the Robotics Club and a member of the events organization committee.
            </p>
            
            <p className="text-lg">
              I'm looking for opportunities where I can grow, learn from real challenges, and contribute to innovative tech solutions that make a difference. My current focus areas include mastering the MERN stack for web development while continuing to deepen my knowledge in AI and machine learning.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
