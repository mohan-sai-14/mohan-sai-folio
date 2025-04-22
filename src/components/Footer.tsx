
import { Github, Linkedin, Mail } from "lucide-react";

export function Footer() {
  return (
    <footer className="py-8 border-t border-border">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <h3 className="text-xl font-bold">
              Nagam Mohan Sai Reddy
            </h3>
            <p className="text-muted-foreground">
              Aspiring AI/ML Engineer | Future Full Stack Developer
            </p>
          </div>
          
          <div className="flex space-x-4">
            <a
              href="https://github.com/mohan-sai-14"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-full glass hover:bg-primary/10 transition-colors"
              aria-label="GitHub"
            >
              <Github className="h-5 w-5" />
            </a>
            <a
              href="https://www.linkedin.com/in/mohan-sai-reddy-nagam/"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-full glass hover:bg-primary/10 transition-colors"
              aria-label="LinkedIn"
            >
              <Linkedin className="h-5 w-5" />
            </a>
            <a
              href="mailto:mohansaireddy22@gmail.com"
              className="p-2 rounded-full glass hover:bg-primary/10 transition-colors"
              aria-label="Email"
            >
              <Mail className="h-5 w-5" />
            </a>
          </div>
        </div>
        
        <div className="mt-8 text-center text-sm text-muted-foreground">
          <p>© {new Date().getFullYear()} Nagam Mohan Sai Reddy. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
