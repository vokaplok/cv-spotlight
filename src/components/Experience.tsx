
import { Briefcase, Calendar } from "lucide-react";

export const Experience = () => {
  return (
    <section id="experience" className="py-20 px-4 bg-muted">
      <div className="max-w-4xl mx-auto">
        <h2 className="section-heading text-center">Work Experience</h2>
        <div className="space-y-8">
          <div className="bg-white p-6 rounded-lg shadow-sm">
            <div className="flex items-center gap-2 mb-2 text-primary">
              <Briefcase className="w-5 h-5" />
              <h3 className="font-semibold">[Company Name] – Remote Marketing Assistant</h3>
            </div>
            <div className="flex items-center gap-2 text-sm text-muted-foreground mb-4">
              <Calendar className="w-4 h-4" />
              <span>[Work Period]</span>
            </div>
            <ul className="space-y-2 text-foreground">
              <li>• Lead generation and contact validation</li>
              <li>• Email outreach and follow-ups</li>
              <li>• Website analysis and verification (SimilarWeb)</li>
              <li>• Communicating with partners and stakeholders</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};
