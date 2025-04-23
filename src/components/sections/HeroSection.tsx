
import { useEffect, useRef } from "react";
import { ParticleBackground } from "../ParticleBackground";
import { Download, Github, Linkedin, Mail } from "lucide-react";

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
    <section
      id="home"
      className="min-h-[75vh] flex items-center relative overflow-hidden pt-10"
      // reduced min-height and top padding
    >
      <ParticleBackground />
      <div className="container mx-auto px-2 py-6 md:py-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
          {/* Left: Text */}
          <div className="text-left animate-fade-in">
            <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-2">
              Hi, I'm <span className="text-primary font-poppins">Mohan</span>
            </h1>
            <div className="h-1 w-16 bg-primary mb-3 rounded-full"></div>
            <h2 className="text-lg md:text-xl font-medium text-muted-foreground mb-2 flex items-center">
              <span className="inline-block mr-2 w-2.5 h-2.5 bg-green-400 rounded-full animate-pulse-slow"></span>
              Aspiring AI/ML Engineer | Future Full Stack Developer
            </h2>
            <p className="text-base mb-4 max-w-md">
              CSE student specializing in AI & ML, passionate about creating innovative
              tech solutions that make a difference.
            </p>
            <div className="flex flex-wrap gap-3 mt-5">
              <a
                href="/RESUME.pdf"
                className="flex items-center gap-2 bg-primary text-primary-foreground px-4 py-2 rounded-lg font-medium transition-all hover:scale-105 shadow-md"
                download
              >
                <Download className="w-5 h-5" />
                Download Resume
              </a>
              <a
                href="https://github.com/mohan-sai-14"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 glass px-4 py-2 rounded-lg font-medium transition-all hover:scale-105"
              >
                <Github className="w-5 h-5" />
                GitHub
              </a>
              <a
                href="https://www.linkedin.com/in/mohan-sai-reddy-nagam/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 glass px-4 py-2 rounded-lg font-medium transition-all hover:scale-105"
              >
                <Linkedin className="w-5 h-5" />
                LinkedIn
              </a>
            </div>
          </div>

          {/* Right: Full photo with details at bottom */}
          <div
            ref={glowRef}
            className="glass rounded-2xl relative shadow-xl hidden lg:flex flex-col overflow-hidden animate-float"
            style={{
              "--x": "50%",
              "--y": "50%",
              background:
                "radial-gradient(circle 340px at var(--x) var(--y), rgba(37, 99, 235, 0.07), transparent 40%)"
            } as any}
          >
            {/* User image fills the card except for details at the bottom */}
            <div className="flex-1 flex justify-center items-center bg-white/5">
              <img
                src="/lovable-uploads/b6b7aae0-cf1d-4a27-aaa4-5fd8e3ae0b94.png"
                alt="Mohan Profile"
                className="w-[60%] h-auto object-cover object-top"
                style={{
                  minHeight: 0,
                  minWidth: 0,
                  maxHeight: "220px",
                  userSelect: "none",
                  border: "none",
                  borderRadius: 0
                }}
                draggable={false}
              />
            </div>
            {/* Details at bottom */}
            <div className="px-5 py-4 bg-white/10 dark:bg-black/30">
              <h2 className="font-bold font-outfit mb-1 text-center text-xl">
                Nagam Mohan sai reddy
              </h2>
              <div className="flex flex-col gap-1 text-left text-[15px] items-center justify-center">
                <a
                  href="mailto:mohansaireddy22@gmail.com"
                  className="flex items-center text-primary hover:underline"
                  style={{ fontSize: "0.95em" }}
                >
                  <Mail className="w-5 h-5 mr-2" />
                  mohansaireddy22@gmail.com
                </a>
                <a
                  href="tel:+917095913142"
                  className="flex items-center text-primary hover:underline"
                  style={{ fontSize: "0.95em" }}
                >
                  +91 7095913142
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="absolute bottom-5 left-0 right-0 flex justify-center animate-bounce">
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
