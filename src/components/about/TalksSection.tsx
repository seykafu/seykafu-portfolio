
import React from 'react';
import { Calendar } from 'lucide-react';

const TalksSection = () => {
  return (
    <section className="py-16">
      <div className="flex items-center mb-8">
        <Calendar className="text-portfolio-accent mr-3" />
        <h2 className="font-serif text-3xl font-semibold">Talks / Press / Media</h2>
      </div>
      <div className="space-y-6">
        <div className="border-l-2 border-portfolio-accent pl-6 py-2">
          <h3 className="text-xl font-bold">Product Conference 2024</h3>
          <p className="text-portfolio-accent">Speaker</p>
          <p className="text-portfolio-text/80 mt-2">
            Presented on "Building Products with Purpose" at the annual industry conference.
          </p>
        </div>
        <div className="border-l-2 border-portfolio-accent pl-6 py-2">
          <h3 className="text-xl font-bold">Tech Magazine Feature</h3>
          <p className="text-portfolio-accent">Interview</p>
          <p className="text-portfolio-text/80 mt-2">
            Shared insights on product management in enterprise environments.
          </p>
        </div>
        <div className="border-l-2 border-portfolio-accent pl-6 py-2">
          <h3 className="text-xl font-bold">Writers Guild Panel</h3>
          <p className="text-portfolio-accent">Panelist</p>
          <p className="text-portfolio-text/80 mt-2">
            Discussed balancing creative writing with a tech career.
          </p>
        </div>
      </div>
    </section>
  );
};

export default TalksSection;
