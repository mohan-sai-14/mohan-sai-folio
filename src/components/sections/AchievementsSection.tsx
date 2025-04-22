
import { useRef, useEffect } from "react";

interface Achievement {
  title: string;
  description: string;
}

interface Position {
  title: string;
  organization: string;
}

function AchievementItem({ achievement, index }: { achievement: Achievement; index: number }) {
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
          }, index * 100);
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
  }, [index]);
  
  return (
    <div ref={itemRef} className="flex items-start mb-6 opacity-0">
      <div className="flex-shrink-0 w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center mt-1 mr-4">
        <span className="text-primary text-sm font-bold">{index + 1}</span>
      </div>
      <div>
        <h4 className="font-medium mb-1">{achievement.title}</h4>
        <p className="text-sm text-muted-foreground">{achievement.description}</p>
      </div>
    </div>
  );
}

function PositionItem({ position, index }: { position: Position; index: number }) {
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
          }, index * 100);
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
  }, [index]);
  
  return (
    <div ref={itemRef} className="flex items-start mb-6 opacity-0">
      <div className="flex-shrink-0 w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center mt-1 mr-4">
        <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-primary"><circle cx="12" cy="8" r="5"></circle><path d="M20 21a8 8 0 0 0-16 0"></path></svg>
      </div>
      <div>
        <h4 className="font-medium mb-1">{position.title}</h4>
        <p className="text-sm text-muted-foreground">{position.organization}</p>
      </div>
    </div>
  );
}

export function AchievementsSection() {
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
  
  const achievements: Achievement[] = [
    {
      title: "Debate Competition Winner",
      description: "Three-time winner in university debate competitions"
    },
    {
      title: "Spark Talk 1 & 2.0",
      description: "Organized successful debate competitions at university level"
    },
    {
      title: "Megabout",
      description: "Organized gaming competition for university students"
    },
    {
      title: "Khelo Takshashila 2025",
      description: "Organizing member for university-wide sports event"
    }
  ];
  
  const positions: Position[] = [
    {
      title: "Joint Secretary",
      organization: "Robotics Club, Takshashila University"
    },
    {
      title: "Class Representative",
      organization: "2nd Semester, B.Tech CSE (AI & ML)"
    },
    {
      title: "Events Committee Member",
      organization: "University Events organization team"
    }
  ];
  
  return (
    <section id="achievements" ref={sectionRef} className="py-20 opacity-0">
      <div className="container mx-auto px-4">
        <h2 className="section-title text-center">Achievements & Roles</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 max-w-5xl mx-auto">
          <div className="glass rounded-xl p-6">
            <h3 className="text-xl font-bold mb-6 flex items-center">
              <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="mr-2 text-primary"><path d="M18 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V4a2 2 0 0 0-2-2z"></path><circle cx="12" cy="10" r="3"></circle><path d="M6 16.1c.5 3 3 4.9 6 4.9s5.5-1.9 6-4.9"></path></svg>
              Achievements
            </h3>
            
            <div>
              {achievements.map((achievement, index) => (
                <AchievementItem 
                  key={index} 
                  achievement={achievement} 
                  index={index}
                />
              ))}
            </div>
          </div>
          
          <div className="glass rounded-xl p-6">
            <h3 className="text-xl font-bold mb-6 flex items-center">
              <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="mr-2 text-primary"><path d="M22 10v1c0 6-4 10-10 10S2 17 2 11v-1a1 1 0 0 1 1-1h4a1 1 0 0 1 1 1v1a4 4 0 0 0 8 0v-1a1 1 0 0 1 1-1h4a1 1 0 0 1 1 1Z"></path><path d="M18 8h.01"></path><path d="M6 8h.01"></path><path d="M12 18v4"></path><path d="M13 9v2"></path><path d="M11 9v2"></path></svg>
              Positions of Responsibility
            </h3>
            
            <div>
              {positions.map((position, index) => (
                <PositionItem 
                  key={index} 
                  position={position} 
                  index={index}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
