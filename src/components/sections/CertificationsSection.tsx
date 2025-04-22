
import { useRef, useEffect } from "react";

interface Certification {
  title: string;
  issuer: string;
  description: string;
  link: string;
}

interface CertificationCardProps {
  certification: Certification;
  index: number;
}

function CertificationCard({ certification, index }: CertificationCardProps) {
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
          }, index * 150);
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
  }, [index]);
  
  return (
    <div 
      ref={cardRef} 
      className={`glass rounded-xl p-6 opacity-0 h-full flex flex-col`}
      style={{
        backgroundImage: `linear-gradient(to bottom right, 
          rgba(37, 99, 235, 0.1), 
          rgba(${100 + index * 50}, ${120 + index * 20}, 255, 0.05)
        )`,
      }}
    >
      <h3 className="text-xl font-bold mb-1">{certification.title}</h3>
      <p className="text-muted-foreground mb-4">{certification.issuer}</p>
      
      <div className="border-l-2 border-primary pl-4 py-1 mb-4 text-sm">
        <p>{certification.description}</p>
      </div>
      
      <div className="mt-auto">
        <a 
          href={certification.link} 
          target="_blank" 
          rel="noopener noreferrer"
          className="inline-flex items-center px-4 py-2 rounded-lg glass hover:bg-primary/10 transition-colors"
        >
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="mr-2"><path d="M15 2H9a3 3 0 0 0-3 3v10a3 3 0 0 0 3 3h6a3 3 0 0 0 3-3V5a3 3 0 0 0-3-3Z"></path><path d="M10 22h4"></path><circle cx="12" cy="15.5" r="1.5"></circle></svg>
          View Certificate
        </a>
      </div>
    </div>
  );
}

export function CertificationsSection() {
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
  
  const certifications: Certification[] = [
    {
      title: "Python Programming",
      issuer: "University of Michigan",
      description: "Comprehensive course covering Python fundamentals, data structures, and practical programming concepts.",
      link: "https://drive.google.com/file/d/1-yQ4rCG0V3QmqA9aRb3pFX11gDBL73Fj/view?usp=drive_link"
    },
    {
      title: "Introduction to Artificial Intelligence",
      issuer: "IBM",
      description: "Introduction to AI concepts, machine learning principles, and IBM's AI tools and platforms.",
      link: "https://drive.google.com/file/d/194JMHyaewlQlf7KapxWRIVebYxVdZieF/view?usp=drive_link"
    },
    {
      title: "Introduction to C Programming",
      issuer: "Learntube",
      description: "Fundamentals of C programming including syntax, data types, control structures, and memory management.",
      link: "https://drive.google.com/file/d/1n07lg1jMcOczwA9-_t7q0TDGmQwIAywQ/view?usp=drive_link"
    },
    {
      title: "10-week AI & ML Virtual Internship",
      issuer: "Google",
      description: "Practical experience in AI and ML techniques using Google's tools and frameworks.",
      link: "https://drive.google.com/file/d/1hxB3Btb8w-LvwNLhODXWO6ddw_BW8CDK/view?usp=drive_link"
    }
  ];
  
  return (
    <section id="certifications" ref={sectionRef} className="py-20 opacity-0 bg-gradient-to-b from-background to-background/50">
      <div className="container mx-auto px-4">
        <h2 className="section-title text-center">Certifications</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-6xl mx-auto">
          {certifications.map((certification, index) => (
            <CertificationCard 
              key={index} 
              certification={certification} 
              index={index}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
