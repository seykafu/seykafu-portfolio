
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
            I'm always trying to grow and learn :)
          </p>
        </div>
        <div>
          <h3 className="text-xl font-bold mb-3">Show Compassion</h3>
          <p className="text-portfolio-text/80">
            Be nice and empathize with others
          </p>
        </div>
        <div>
          <h3 className="text-xl font-bold mb-3">Be Creative</h3>
          <p className="text-portfolio-text/80">
            No rigid boundaries; think like the stars!
          </p>
        </div>
        <div>
          <h3 className="text-xl font-bold mb-3">Block Out the Noise</h3>
          <p className="text-portfolio-text/80">
            Kick out digital distraction and only consume high-quality content (and be intentional!)
          </p>
        </div>
        <div>
          <h3 className="text-xl font-bold mb-3">Chaos Over Laziness</h3>
          <p className="text-portfolio-text/80">
            If need be, choose chaotic productiveness over just sitting around.
          </p>
        </div>
        <div>
          <h3 className="text-xl font-bold mb-3">Be Community Centric</h3>
          <p className="text-portfolio-text/80">
            Always help the community :) See <a href="https://pmhive.io" target="_blank" rel="noopener noreferrer" className="text-portfolio-accent hover:text-portfolio-accent-light">PM Hive</a> :^)
          </p>
        </div>
      </div>
    </section>
  );
};

export default PrinciplesSection;
