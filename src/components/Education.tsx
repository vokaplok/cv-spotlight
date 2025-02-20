
import { GraduationCap, Calendar } from "lucide-react";

export const Education = () => {
  return (
    <section id="education" className="py-20 px-4">
      <div className="max-w-4xl mx-auto">
        <h2 className="section-heading text-center">Education</h2>
        <div className="bg-white p-6 rounded-lg shadow-sm max-w-2xl mx-auto">
          <div className="flex items-center gap-2 mb-2 text-primary">
            <GraduationCap className="w-5 h-5" />
            <h3 className="font-semibold">[University Name]</h3>
          </div>
          <div className="flex items-center gap-2 text-sm text-muted-foreground mb-4">
            <Calendar className="w-4 h-4" />
            <span>[Years of Study]</span>
          </div>
          <p className="text-foreground">
            Bachelor's in Business & Marketing (3rd Year)
          </p>
          <p className="text-muted-foreground mt-2">
            Relevant coursework: marketing, management, statistics, finance
          </p>
        </div>
      </div>
    </section>
  );
};
