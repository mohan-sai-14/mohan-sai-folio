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
      className="min-h-[50vh] flex items-center relative overflow-hidden pt-4"
    >
      <ParticleBackground />
      <div className="container mx-auto px-2 py-4 md:py-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 items-center">
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

          {/* Right: Profile photo with details */}
          <div
            ref={glowRef}
            className="glass rounded-2xl relative shadow-lg flex flex-col items-center justify-center mx-auto max-w-xs w-full py-4 animate-float border border-white/10 bg-gradient-to-br from-white/10 via-background/30 to-white/5"
            style={{
              "--x": "50%",
              "--y": "50%",
              background:
                "radial-gradient(circle 270px at var(--x) var(--y), rgba(37, 99, 235, 0.09), transparent 50%)",
            } as any}
          >
            {/* Image as circle with ring and shadow */}
            <div className="flex justify-center items-center mb-2">
              <div className="relative">
                <img
                  src="/lovable-uploads/64548193-a097-4b83-b02f-5130e7f14528.png"
                  alt="Mohan Profile"
                  className="w-[150px] h-[150px] rounded-full object-cover border-4 border-primary shadow-xl hover:scale-105 transition-transform"
                  style={{
                    minHeight: 0,
                    minWidth: 0,
                    userSelect: "none",
                    borderRadius: "9999px",
                    border: "4px solid var(--tw-prose-bold, hsl(var(--primary)))",
                    objectPosition: "center",
                    objectFit: "cover"
                  }}
                  draggable={false}
                />
                <div className="absolute -inset-1 rounded-full border border-white/20 pointer-events-none" aria-hidden="true"></div>
              </div>
            </div>
            {/* Details at bottom */}
            <div className="px-4 py-2 w-full">
              <h2 className="font-extrabold font-outfit text-lg text-center mb-1 leading-tight tracking-wide">
                Nagam Mohan sai reddy
              </h2>
              <div className="flex flex-col gap-1 text-center text-[15px] items-center justify-center">
                <a
                  href="mailto:mohansaireddy22@gmail.com"
                  className="flex items-center justify-center gap-1 text-primary hover:underline"
                  style={{ fontSize: "0.95em" }}
                >
                  <Mail className="w-5 h-5 mr-1" />
                  mohansaireddy22@gmail.com
                </a>
                <a
                  href="tel:+917095913142"
                  className="flex items-center justify-center gap-1 text-primary hover:underline"
                  style={{ fontSize: "0.95em" }}
                >
                  +91 7095913142
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="absolute bottom-3 left-0 right-0 flex justify-center animate-bounce">
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
