
import { CheckCircle } from "lucide-react";

const skills = [
  "Lead Generation (Hunter, SimilarWeb)",
  "Email Outreach (Manual, MailLift)",
  "Media Partnerships & Communication",
  "Event Coordination & Project Assistance",
  "Marketing Research & Data Analysis",
  "AI Tools (ChatGPT, Gamma, R-Studio)",
  "Presentation & Report Preparation",
  "Excel, Google Suite, and Analytics",
];

export const Skills = () => {
  return (
    <section id="skills" className="py-20 px-4">
      <div className="max-w-4xl mx-auto">
        <h2 className="section-heading text-center mb-12">Skills</h2>
        <div className="grid md:grid-cols-2 gap-4">
          {skills.map((skill, index) => (
            <div
              key={index}
              className="skill-card flex items-start gap-3"
            >
              <CheckCircle className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
              <span className="text-foreground">{skill}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
