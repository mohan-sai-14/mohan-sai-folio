
import { useEffect } from "react";

export function ParticleBackground() {
  useEffect(() => {
    const createParticle = () => {
      const particlesContainer = document.getElementById("particles-container");
      if (!particlesContainer) return;
      
      const totalParticles = 40;
      particlesContainer.innerHTML = "";
      
      for (let i = 0; i < totalParticles; i++) {
        const particle = document.createElement("div");
        particle.classList.add("particle");
        
        // Random position
        particle.style.left = `${Math.random() * 100}%`;
        particle.style.top = `${Math.random() * 100}%`;
        
        // Random size
        const size = Math.random() * 10 + 2;
        particle.style.width = `${size}px`;
        particle.style.height = `${size}px`;
        
        // Random opacity
        particle.style.opacity = `${Math.random() * 0.5 + 0.1}`;
        
        particlesContainer.appendChild(particle);
      }
    };
    
    createParticle();
    
    // Recreate particles on window resize
    window.addEventListener("resize", createParticle);
    return () => {
      window.removeEventListener("resize", createParticle);
    };
  }, []);
  
  return <div id="particles-container" className="particles-bg" />;
}
