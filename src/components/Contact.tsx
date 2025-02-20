
import { Mail, Linkedin, MapPin, Download } from "lucide-react";

export const Contact = () => {
  return (
    <section id="contact" className="py-20 px-4 bg-muted">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="section-heading">Let's Connect</h2>
        <div className="flex flex-col items-center gap-6 mb-8">
          <div className="flex items-center gap-2 text-muted-foreground">
            <MapPin className="w-5 h-5" />
            <span>Remote, Lithuania</span>
          </div>
          <div className="flex gap-4">
            <a href="mailto:[email]" className="contact-button">
              <Mail className="w-5 h-5 mr-2" />
              Email Me
            </a>
            <a
              href="[LinkedIn URL]"
              target="_blank"
              rel="noopener noreferrer"
              className="contact-button bg-[#0077B5]"
            >
              <Linkedin className="w-5 h-5 mr-2" />
              LinkedIn
            </a>
          </div>
          <a
            href="#"
            className="inline-flex items-center gap-2 text-primary hover:underline mt-4"
          >
            <Download className="w-4 h-4" />
            Download CV (PDF)
          </a>
        </div>
      </div>
    </section>
  );
};
