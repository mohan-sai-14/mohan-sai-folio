
import { useEffect, useRef } from "react";
import { ParticleBackground } from "../ParticleBackground";
import { Download, Github, Linkedin, Mail, User } from "lucide-react";
// import { Avatar, AvatarImage, AvatarFallback } from "../ui/avatar"; // No longer using Avatar

export function HeroSection() {
  const glowRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (glowRef.current) {
        const rect = glowRef.current.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        glowRef.current.style.setProperty("--x", `${x}px`);
        glowRef.current.style.setProperty("--y", `${y}px`);
      }
    };
    
    window.addEventListener("mousemove", handleMouseMove);
    
    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);
  
  return (
    <section id="home" className="min-h-screen flex items-center relative overflow-hidden pt-16">
      <ParticleBackground />
      <div className="container mx-auto px-4 py-12 md:py-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="text-left animate-fade-in">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4">
              Hi, I'm <span className="text-primary font-poppins">Mohan</span>
            </h1>
            <div className="h-1 w-20 bg-primary mb-6 rounded-full"></div>
            <h2 className="text-xl md:text-2xl font-medium text-muted-foreground mb-3 flex items-center">
              <span className="inline-block mr-2 w-3 h-3 bg-green-400 rounded-full animate-pulse-slow"></span>
              Aspiring AI/ML Engineer | Future Full Stack Developer
            </h2>
            <p className="text-lg mb-8 max-w-lg">
              CSE student specializing in AI & ML, passionate about creating innovative
              tech solutions that make a difference.
            </p>
            <div className="flex flex-wrap gap-4 mt-8">
              <a
                href="/RESUME.pdf"
                className="flex items-center gap-2 bg-primary text-primary-foreground px-6 py-3 rounded-lg font-medium transition-all hover:scale-105 shadow-md"
                download
              >
                <Download className="w-5 h-5" />
                Download Resume
              </a>
              <a
                href="https://github.com/mohan-sai-14"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 glass px-6 py-3 rounded-lg font-medium transition-all hover:scale-105"
              >
                <Github className="w-5 h-5" />
                GitHub
              </a>
              <a
                href="https://www.linkedin.com/in/mohan-sai-reddy-nagam/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 glass px-6 py-3 rounded-lg font-medium transition-all hover:scale-105"
              >
                <Linkedin className="w-5 h-5" />
                LinkedIn
              </a>
            </div>
          </div>
          
          <div 
            ref={glowRef}
            className="glass rounded-2xl p-8 relative shadow-xl hidden lg:block animate-float"
            style={{
              "--x": "50%",
              "--y": "50%",
              background: "radial-gradient(circle 500px at var(--x) var(--y), rgba(37, 99, 235, 0.1), transparent 40%)",
            } as any}
          >
            <div className="text-center p-8">
              {/* Rectangle image START */}
              <div className="mx-auto mb-6 w-[224px] h-[144px] rounded-xl overflow-hidden shadow-lg border border-white/20 bg-white/10 dark:bg-white/5 flex items-center justify-center">
                <img 
                  src="/lovable-uploads/b6b7aae0-cf1d-4a27-aaa4-5fd8e3ae0b94.png"
                  alt="Mohan Profile Picture"
                  className="w-full h-full object-cover"
                  style={{objectPosition: 'center'}}
                  draggable={false}
                />
              </div>
              {/* Rectangle image END */}
              
              <h2 className="text-6xl font-bold mb-8 font-outfit">Mohan</h2>
              <div className="mb-6 text-left">
                <p className="mb-2">Email me at</p>
                <a 
                  href="mailto:mohansaireddy22@gmail.com" 
                  className="flex items-center text-primary hover:underline"
                >
                  <Mail className="w-5 h-5 mr-2" />
                  mohansaireddy22@gmail.com
                </a>
              </div>
              <div className="text-left">
                <p className="mb-2">Call me on</p>
                <a 
                  href="tel:+917095913142" 
                  className="flex items-center text-primary hover:underline"
                >
                  +91 7095913142
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="absolute bottom-10 left-0 right-0 flex justify-center animate-bounce">
          <a href="#about" className="text-muted-foreground">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M12 5v14M5 12l7 7 7-7" />
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
}
