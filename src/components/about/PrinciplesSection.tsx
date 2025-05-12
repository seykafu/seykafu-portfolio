
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
          <h3 className="text-xl font-bold mb-3">User-Centric Design</h3>
          <p className="text-portfolio-text/80">
            Always put the user's needs and experiences at the center of product decisions.
          </p>
        </div>
        <div>
          <h3 className="text-xl font-bold mb-3">Continuous Learning</h3>
          <p className="text-portfolio-text/80">
            Embrace opportunities to grow and develop new skills throughout life.
          </p>
        </div>
        <div>
          <h3 className="text-xl font-bold mb-3">Ethical Innovation</h3>
          <p className="text-portfolio-text/80">
            Create technology that respects privacy and promotes positive social impact.
          </p>
        </div>
        <div>
          <h3 className="text-xl font-bold mb-3">Clear Communication</h3>
          <p className="text-portfolio-text/80">
            Prioritize transparency and effective communication in all interactions.
          </p>
        </div>
        <div>
          <h3 className="text-xl font-bold mb-3">Creative Thinking</h3>
          <p className="text-portfolio-text/80">
            Approach problems with creativity and look beyond conventional solutions.
          </p>
        </div>
        <div>
          <h3 className="text-xl font-bold mb-3">Balance</h3>
          <p className="text-portfolio-text/80">
            Maintain equilibrium between professional pursuits and personal well-being.
          </p>
        </div>
      </div>
    </section>
  );
};

export default PrinciplesSection;
