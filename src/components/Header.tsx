
import { Mail, Linkedin, Globe } from "lucide-react";

export const Header = () => {
  return (
    <section className="min-h-[90vh] flex flex-col justify-center items-center text-center px-4 animate-fade-in">
      <div className="mb-8">
        <img
          src="https://placehold.co/200x200"
          alt="Profile"
          className="w-32 h-32 rounded-full shadow-lg mb-6 mx-auto object-cover"
        />
        <h1 className="text-4xl font-bold mb-2">[Full Name]</h1>
        <h2 className="text-xl text-muted-foreground mb-4">
          Remote Marketing & Outreach Assistant
        </h2>
        <p className="text-lg max-w-2xl mx-auto mb-8">
          Excited to help your team with marketing, partnerships, and outreach!
        </p>
      </div>
      
      <div className="flex flex-col sm:flex-row gap-4 mb-8">
        <a href="mailto:[email]" className="contact-button">
          <Mail className="w-5 h-5 mr-2" />
          Get in Touch
        </a>
        <a 
          href="[LinkedIn URL]" 
          target="_blank" 
          rel="noopener noreferrer" 
          className="contact-button bg-secondary text-secondary-foreground hover:bg-secondary/90"
        >
          <Linkedin className="w-5 h-5 mr-2" />
          LinkedIn Profile
        </a>
      </div>

      <div className="flex gap-6 text-sm">
        <a href="mailto:[email]" className="social-link">
          <Mail className="w-4 h-4" />
          [Email]
        </a>
        <a href="[LinkedIn URL]" target="_blank" rel="noopener noreferrer" className="social-link">
          <Linkedin className="w-4 h-4" />
          LinkedIn
        </a>
        <a href="/" className="social-link">
          <Globe className="w-4 h-4" />
          Portfolio
        </a>
      </div>
    </section>
  );
};
