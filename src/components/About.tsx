
export const About = () => {
  return (
    <section id="about" className="py-20 px-4 bg-muted">
      <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-12 items-center">
        <div className="space-y-4">
          <h2 className="section-heading">About Me</h2>
          <p className="text-lg leading-relaxed">
            I am a young marketing and outreach professional with experience in lead
            generation, email outreach, media partnerships, and platform moderation.
            Currently studying business in Lithuania, I am open to new remote
            opportunities where I can contribute and grow.
          </p>
        </div>
        <div className="relative">
          <img
            src="https://placehold.co/400x500"
            alt="About Me"
            className="rounded-lg shadow-lg w-full object-cover"
          />
        </div>
      </div>
    </section>
  );
};
