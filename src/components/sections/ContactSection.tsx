
import { useRef, useState, useEffect } from "react";
import { Github, Linkedin, Mail, Phone } from "lucide-react";

interface ContactInfo {
  icon: React.ReactNode;
  title: string;
  value: string;
  link: string;
}

function ContactInfoItem({ info }: { info: ContactInfo }) {
  return (
    <a 
      href={info.link}
      className="flex items-center gap-4 mb-6 hover:bg-secondary/30 p-3 rounded-lg transition-colors"
      target={info.title !== "Email" && info.title !== "Phone" ? "_blank" : ""}
      rel="noopener noreferrer"
    >
      <div className="flex-shrink-0 w-12 h-12 rounded-full glass flex items-center justify-center">
        {info.icon}
      </div>
      <div className="flex-grow">
        <h4 className="text-sm font-medium text-muted-foreground">{info.title}</h4>
        <p className="text-base">{info.value}</p>
      </div>
    </a>
  );
}

export function ContactSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const formRef = useRef<HTMLFormElement>(null);
  
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    subject: "",
    message: ""
  });
  
  const [formStatus, setFormStatus] = useState<{
    message: string;
    type: "success" | "error" | null;
  }>({
    message: "",
    type: null
  });
  
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormState({
      ...formState,
      [e.target.name]: e.target.value
    });
  };
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Form validation
    if (!formState.name || !formState.email || !formState.message) {
      setFormStatus({
        message: "Please fill in all required fields",
        type: "error"
      });
      return;
    }
    
    // In a real implementation, you would send the form data to a server
    // For this demo, we'll just simulate a successful submission
    
    // Simulating form submission
    setFormStatus({
      message: "Thank you for your message! I'll get back to you soon.",
      type: "success"
    });
    
    // Reset form
    setFormState({
      name: "",
      email: "",
      subject: "",
      message: ""
    });
    
    // Clear success message after 5 seconds
    setTimeout(() => {
      setFormStatus({
        message: "",
        type: null
      });
    }, 5000);
  };
  
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
  
  const contactInfo: ContactInfo[] = [
    {
      icon: <Mail className="h-6 w-6 text-primary" />,
      title: "Email",
      value: "mohansaireddy22@gmail.com",
      link: "mailto:mohansaireddy22@gmail.com"
    },
    {
      icon: <Phone className="h-6 w-6 text-primary" />,
      title: "Phone",
      value: "+91 7095913142",
      link: "tel:+917095913142"
    },
    {
      icon: <Github className="h-6 w-6 text-primary" />,
      title: "GitHub",
      value: "github.com/mohan-sai-14",
      link: "https://github.com/mohan-sai-14"
    },
    {
      icon: <Linkedin className="h-6 w-6 text-primary" />,
      title: "LinkedIn",
      value: "linkedin.com/in/mohan-sai-reddy-nagam",
      link: "https://www.linkedin.com/in/mohan-sai-reddy-nagam/"
    }
  ];
  
  return (
    <section id="contact" ref={sectionRef} className="py-20 opacity-0">
      <div className="container mx-auto px-4">
        <h2 className="section-title text-center">Get In Touch</h2>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 max-w-6xl mx-auto">
          <div>
            <h3 className="text-xl font-bold mb-6">Contact Information</h3>
            
            <div>
              {contactInfo.map((info, index) => (
                <ContactInfoItem key={index} info={info} />
              ))}
            </div>
          </div>
          
          <div>
            <h3 className="text-xl font-bold mb-6">Send a Message</h3>
            
            <form ref={formRef} onSubmit={handleSubmit} className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="name" className="block mb-2 text-sm font-medium">
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    className="contact-input w-full p-3"
                    placeholder="Your name"
                    value={formState.name}
                    onChange={handleChange}
                  />
                </div>
                
                <div>
                  <label htmlFor="email" className="block mb-2 text-sm font-medium">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    className="contact-input w-full p-3"
                    placeholder="Your email"
                    value={formState.email}
                    onChange={handleChange}
                  />
                </div>
              </div>
              
              <div>
                <label htmlFor="subject" className="block mb-2 text-sm font-medium">
                  Subject
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  className="contact-input w-full p-3"
                  placeholder="What is this regarding?"
                  value={formState.subject}
                  onChange={handleChange}
                />
              </div>
              
              <div>
                <label htmlFor="message" className="block mb-2 text-sm font-medium">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={5}
                  className="contact-input w-full p-3"
                  placeholder="Your message"
                  value={formState.message}
                  onChange={handleChange}
                ></textarea>
              </div>
              
              {formStatus.message && (
                <div className={`p-3 rounded ${
                  formStatus.type === "success" 
                    ? "bg-green-500/20 text-green-500" 
                    : "bg-red-500/20 text-red-500"
                }`}>
                  {formStatus.message}
                </div>
              )}
              
              <button
                type="submit"
                className="glass px-6 py-3 rounded-lg font-medium hover:bg-primary/10 transition-colors"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
