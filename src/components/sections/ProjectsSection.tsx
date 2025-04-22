
import { useRef, useEffect, useState } from "react";

interface Project {
  title: string;
  description: string;
  status: "Completed" | "In Progress";
  features: string[];
  technologies: string[];
  category: "Basic" | "Intermediate" | "Advanced";
}

interface ProjectCategoryProps {
  title: string;
  icon: React.ReactNode;
  projects: Project[];
  delay: number;
}

function ProjectCard({ project, delay }: { project: Project; delay: number }) {
  const cardRef = useRef<HTMLDivElement>(null);
  
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
    
    if (cardRef.current) {
      observer.observe(cardRef.current);
    }
    
    return () => {
      if (cardRef.current) {
        observer.unobserve(cardRef.current);
      }
    };
  }, [delay]);
  
  return (
    <div ref={cardRef} className="project-card opacity-0">
      <h3 className="text-xl font-bold mb-3">{project.title}</h3>
      <p className="text-muted-foreground mb-4">{project.description}</p>
      
      {project.category === "Advanced" && (
        <div className="mb-4">
          <div className="flex justify-between items-center mb-2">
            <h4 className="text-sm font-medium">Target Features</h4>
            <div className={`px-3 py-1 rounded-full text-xs font-medium ${
              project.status === "Completed" 
                ? "bg-green-500/20 text-green-500" 
                : "bg-purple-500/20 text-purple-500"
            }`}>
              {project.status === "Completed" ? "Completed" : "Currently Building"}
            </div>
          </div>
          <p className="text-sm mb-3">{project.features.join(", ")}</p>
        </div>
      )}
      
      <div className="flex flex-wrap gap-2 mt-4">
        {project.technologies.map((tech, index) => (
          <span key={index} className="tech-chip">{tech}</span>
        ))}
      </div>
    </div>
  );
}

function ProjectCategory({ title, icon, projects, delay }: ProjectCategoryProps) {
  const categoryRef = useRef<HTMLDivElement>(null);
  
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
    
    if (categoryRef.current) {
      observer.observe(categoryRef.current);
    }
    
    return () => {
      if (categoryRef.current) {
        observer.unobserve(categoryRef.current);
      }
    };
  }, [delay]);
  
  return (
    <div ref={categoryRef} className="mb-16 opacity-0">
      <h3 className="text-2xl font-bold mb-6 flex items-center">
        {icon}
        <span className="ml-2">{title}</span>
      </h3>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {projects.map((project, index) => (
          <ProjectCard key={index} project={project} delay={index * 100} />
        ))}
      </div>
    </div>
  );
}

export function ProjectsSection() {
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
  
  const basicProjects: Project[] = [
    {
      title: "Student Management System",
      description: "A Python application to manage student records, courses, and performance.",
      status: "Completed",
      features: [],
      technologies: ["Python"],
      category: "Basic"
    },
    {
      title: "Expense Tracker",
      description: "Track and categorize expenses with visualization and budget management.",
      status: "Completed",
      features: [],
      technologies: ["Python"],
      category: "Basic"
    },
    {
      title: "Quiz Game",
      description: "Interactive quiz application with multiple categories and scoring system.",
      status: "Completed",
      features: [],
      technologies: ["Python"],
      category: "Basic"
    },
    {
      title: "Bingo Game",
      description: "Classic Bingo game with random number generation and pattern matching.",
      status: "Completed",
      features: [],
      technologies: ["Python"],
      category: "Basic"
    }
  ];
  
  const intermediateProjects: Project[] = [
    {
      title: "Weather App",
      description: "Application that fetches and displays current weather and forecasts using weather APIs.",
      status: "Completed",
      features: ["City search", "5-day forecast"],
      technologies: ["Python", "API Integration"],
      category: "Intermediate"
    },
    {
      title: "Personal Portfolio",
      description: "Modern, responsive personal portfolio website showcasing skills and projects.",
      status: "Completed",
      features: ["Responsive design", "Dark mode"],
      technologies: ["HTML", "CSS", "React"],
      category: "Intermediate"
    }
  ];
  
  const advancedProjects: Project[] = [
    {
      title: "QR Attendance System",
      description: "Mobile application for tracking attendance using QR codes, with admin dashboard and analytics.",
      status: "In Progress",
      features: ["QR scanning", "Reporting"],
      technologies: ["MERN Stack", "React Native", "MongoDB", "Express"],
      category: "Advanced"
    },
    {
      title: "Outpass Request App",
      description: "Digital solution for college outpass requests with multi-level approvals and tracking.",
      status: "In Progress",
      features: ["Request management", "Notifications"],
      technologies: ["MERN Stack", "Firebase", "Authentication"],
      category: "Advanced"
    }
  ];
  
  return (
    <section id="projects" ref={sectionRef} className="py-20 opacity-0">
      <div className="container mx-auto px-4">
        <h2 className="section-title text-center">Projects</h2>
        
        <ProjectCategory 
          title="Basic Projects"
          icon={<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="18" height="18" x="3" y="3" rx="2" ry="2"></rect><line x1="3" x2="21" y1="9" y2="9"></line><line x1="9" x2="9" y1="21" y2="9"></line></svg>}
          projects={basicProjects}
          delay={100}
        />
        
        <ProjectCategory 
          title="Intermediate Projects"
          icon={<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M10 2v5.5A2.5 2.5 0 0 1 7.5 10H2"></path><path d="M14 2v5.5A2.5 2.5 0 0 0 16.5 10H22"></path><path d="M10 22v-5.5A2.5 2.5 0 0 0 7.5 14H2"></path><path d="M14 22v-5.5a2.5 2.5 0 0 1 2.5-2.5H22"></path></svg>}
          projects={intermediateProjects}
          delay={400}
        />
        
        <ProjectCategory 
          title="Advanced Projects (In Progress)"
          icon={<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M11 2.5v11.5m3-11.5v11.5m7-8.5-14 8 7-14 7 14Z"></path></svg>}
          projects={advancedProjects}
          delay={700}
        />
      </div>
    </section>
  );
}
