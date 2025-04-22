
import { useRef, useEffect } from "react";
import { Progress } from "@/components/ui/progress";

interface SkillProps {
  name: string;
  progress: number;
  level: string;
  delay: number;
}

interface SkillGroupProps {
  title: string;
  icon: React.ReactNode;
  skills: SkillProps[];
  delay: number;
}

function Skill({ name, progress, level, delay }: SkillProps) {
  const skillRef = useRef<HTMLDivElement>(null);
  
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
            if (skillRef.current) {
              skillRef.current.classList.add("animate-fade-in");
              const progressBar = skillRef.current.querySelector(".progress-value");
              if (progressBar) {
                (progressBar as HTMLElement).style.width = `${progress}%`;
              }
            }
          }, delay);
          observer.unobserve(entry.target);
        }
      });
    }, observerOptions);
    
    if (skillRef.current) {
      observer.observe(skillRef.current);
    }
    
    return () => {
      if (skillRef.current) {
        observer.unobserve(skillRef.current);
      }
    };
  }, [progress, delay]);
  
  return (
    <div ref={skillRef} className="mb-4 opacity-0">
      <div className="flex justify-between mb-1">
        <span>{name}</span>
        <span className="text-sm font-medium text-muted-foreground">{level}</span>
      </div>
      <div className="skill-bar">
        <div 
          className="progress-value skill-progress transition-all duration-1000 ease-out" 
          style={{ width: "0%" }}
        ></div>
      </div>
    </div>
  );
}

function SkillGroup({ title, icon, skills, delay }: SkillGroupProps) {
  const groupRef = useRef<HTMLDivElement>(null);
  
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
    
    if (groupRef.current) {
      observer.observe(groupRef.current);
    }
    
    return () => {
      if (groupRef.current) {
        observer.unobserve(groupRef.current);
      }
    };
  }, [delay]);
  
  return (
    <div ref={groupRef} className="glass rounded-xl p-6 opacity-0">
      <h3 className="text-lg font-medium mb-4 flex items-center text-primary">
        {icon}
        <span className="ml-2">{title}</span>
      </h3>
      
      <div className="space-y-4">
        {skills.map((skill, index) => (
          <Skill
            key={index}
            name={skill.name}
            progress={skill.progress}
            level={skill.level}
            delay={index * 100}
          />
        ))}
      </div>
    </div>
  );
}

export function SkillsSection() {
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
  
  // Updated skill arrays with the delay property
  const programmingLanguages = [
    { name: "Python", progress: 70, level: "Intermediate", delay: 100 },
    { name: "C", progress: 70, level: "Intermediate", delay: 200 },
    { name: "C++", progress: 65, level: "Intermediate", delay: 300 },
    { name: "JavaScript", progress: 40, level: "Basic", delay: 400 },
  ];
  
  const webDevelopment = [
    { name: "HTML", progress: 90, level: "Expert", delay: 100 },
    { name: "CSS", progress: 85, level: "Expert", delay: 200 },
    { name: "React", progress: 45, level: "Basic", delay: 300 },
    { name: "MERN Stack", progress: 30, level: "Learning", delay: 400 },
  ];
  
  const aiMl = [
    { name: "Machine Learning Basics", progress: 60, level: "Intermediate", delay: 100 },
    { name: "Data Analysis", progress: 65, level: "Intermediate", delay: 200 },
    { name: "Neural Networks", progress: 40, level: "Learning", delay: 300 },
  ];
  
  const tools = [
    { name: "Git", progress: 60, level: "Intermediate", delay: 100 },
    { name: "AI Tools", progress: 85, level: "Expert", delay: 200 },
    { name: "Problem Solving", progress: 75, level: "Advanced", delay: 300 },
  ];
  
  return (
    <section id="skills" ref={sectionRef} className="py-20 opacity-0">
      <div className="container mx-auto px-4">
        <h2 className="section-title text-center">Skills</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          <SkillGroup 
            title="Programming Languages"
            icon={<svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M17.5 12h.5a2 2 0 0 1 2 2v4a2 2 0 0 1-2 2h-5a2 2 0 0 1-2-2v-4a2 2 0 0 1 2-2h.5"></path><path d="M19.22 8.22a2 2 0 0 1 0 2.83l-7.37 7.37a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l7.37-7.37a2 2 0 0 1 2.83 0zM16.95 7.05a3 3 0 0 0-4.24 0l-9 9a3 3 0 0 0 0 4.24"></path></svg>}
            skills={programmingLanguages}
            delay={100}
          />
          
          <SkillGroup 
            title="Web Development"
            icon={<svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 3a3 3 0 0 0-3 3v12a3 3 0 0 0 3 3 3 3 0 0 0 3-3 3 3 0 0 0-3-3H6a3 3 0 0 0-3 3 3 3 0 0 0 3 3 3 3 0 0 0 3-3V6a3 3 0 0 0-3-3 3 3 0 0 0-3 3 3 3 0 0 0 3 3h12a3 3 0 0 0 3-3 3 3 0 0 0-3-3z"></path></svg>}
            skills={webDevelopment}
            delay={300}
          />
          
          <SkillGroup 
            title="AI & ML"
            icon={<svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 2v8"></path><path d="M18.4 6.5 13 12"></path><path d="m8.4 6.5 5.3 5.5"></path><path d="M9 19h6"></path><path d="M10 14a3 3 0 0 0 4 3"></path></svg>}
            skills={aiMl}
            delay={500}
          />
          
          <SkillGroup 
            title="Tools & Others"
            icon={<svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 8a6 6 0 01-6-6A9 9 0 0018 8z"></path><path d="M6 16a6 6 0 016 6 9 9 0 00-6-6z"></path><path d="M12 12m-2 0a2 2 0 104 0 2 2 0 10-4 0"></path></svg>}
            skills={tools}
            delay={700}
          />
        </div>
      </div>
    </section>
  );
}
