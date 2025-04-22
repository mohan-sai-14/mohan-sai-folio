
import { useRef, useEffect } from "react";

interface EducationItemProps {
  institution: string;
  degree: string;
  period: string;
  score: string;
  scoreLabel: string;
  delay: number;
}

function EducationItem({ institution, degree, period, score, scoreLabel, delay }: EducationItemProps) {
  const itemRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    const observerOptions = {
      root: null,
      rootMargin: "0px",
      threshold: 0.1,
    };
    
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setTimeout(() => {
            entry.target.classList.add("animate-fade-in");
          }, delay);
          observer.unobserve(entry.target);
        }
      });
    }, observerOptions);
    
    if (itemRef.current) {
      observer.observe(itemRef.current);
    }
    
    return () => {
      if (itemRef.current) {
        observer.unobserve(itemRef.current);
      }
    };
  }, [delay]);
  
  return (
    <div 
      ref={itemRef} 
      className="glass rounded-xl p-6 md:p-8 opacity-0"
    >
      <h3 className="text-xl md:text-2xl font-bold mb-2">{institution}</h3>
      <p className="text-lg text-muted-foreground mb-3">{degree}</p>
      <div className="flex justify-between items-center">
        <span className="text-sm text-muted-foreground">{period}</span>
        <span className="glass rounded-full px-4 py-1 font-medium text-sm">
          {scoreLabel}: <span className="text-primary font-bold">{score}</span>
        </span>
      </div>
    </div>
  );
}

export function EducationSection() {
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
    <section id="education" ref={sectionRef} className="py-20 opacity-0">
      <div className="container mx-auto px-4">
        <h2 className="section-title text-center">Education</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
          <EducationItem 
            institution="Takshashila University"
            degree="B.Tech CSE (AI & ML)"
            period="2023 - 2027 (Expected)"
            score="7.42"
            scoreLabel="CGPA"
            delay={100}
          />
          
          <EducationItem 
            institution="Narayana Olympiad EM High School"
            degree="Class XII"
            period="2021 - 2023"
            score="707/1000"
            scoreLabel="Score"
            delay={300}
          />
          
          <EducationItem 
            institution="Narayana Olympiad EM High School"
            degree="Class X"
            period="2020 - 2021"
            score="10"
            scoreLabel="CGPA"
            delay={500}
          />
        </div>
      </div>
    </section>
  );
}
