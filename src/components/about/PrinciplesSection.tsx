
import React from 'react';
import { User } from 'lucide-react';

const PrinciplesSection = () => {
  return (
    <section className="py-16">
      <div className="flex items-center mb-8">
        <User className="text-portfolio-accent mr-3" />
        <h2 className="font-serif text-3xl font-semibold">My Principles & Values</h2>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        <div>
          <h3 className="text-xl font-bold mb-3">Always a Growth Mindset</h3>
          <p className="text-portfolio-text/80">
            Embrace challenges as opportunities to learn, develop, and continuously improve.
          </p>
        </div>
        <div>
          <h3 className="text-xl font-bold mb-3">Show Compassion</h3>
          <p className="text-portfolio-text/80">
            Practice empathy and kindness in all interactions, recognizing everyone's unique journey.
          </p>
        </div>
        <div>
          <h3 className="text-xl font-bold mb-3">Be Creative</h3>
          <p className="text-portfolio-text/80">
            Approach problems with imagination and innovative thinking to discover unique solutions.
          </p>
        </div>
        <div>
          <h3 className="text-xl font-bold mb-3">Block Out the Noise</h3>
          <p className="text-portfolio-text/80">
            Focus on what truly matters by filtering out distractions and staying committed to priorities.
          </p>
        </div>
        <div>
          <h3 className="text-xl font-bold mb-3">Chaos Over Laziness</h3>
          <p className="text-portfolio-text/80">
            Embrace productive disorder and experimentation rather than settling for comfort and inaction.
          </p>
        </div>
        <div>
          <h3 className="text-xl font-bold mb-3">Be Community Centric</h3>
          <p className="text-portfolio-text/80">
            Prioritize collective growth and support networks that foster mutual success and advancement.
          </p>
        </div>
      </div>
    </section>
  );
};

export default PrinciplesSection;
