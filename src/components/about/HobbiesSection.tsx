
import React from 'react';
import { Clock } from 'lucide-react';

const HobbiesSection = () => {
  return (
    <section className="py-16">
      <div className="flex items-center mb-8">
        <Clock className="text-portfolio-accent mr-3" />
        <h2 className="font-serif text-3xl font-semibold">My Hobbies</h2>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="bg-portfolio-muted/30 p-6 rounded-lg">
          <h3 className="text-xl font-bold mb-2">Hiking</h3>
          <p className="text-portfolio-text/80">
            Exploring nature trails and mountains whenever possible, seeking adventure and fresh perspectives.
          </p>
        </div>
        <div className="bg-portfolio-muted/30 p-6 rounded-lg">
          <h3 className="text-xl font-bold mb-2">Photography</h3>
          <p className="text-portfolio-text/80">
            Capturing moments and unique perspectives through the lens, focusing on landscapes and street photography.
          </p>
        </div>
        <div className="bg-portfolio-muted/30 p-6 rounded-lg">
          <h3 className="text-xl font-bold mb-2">Reading</h3>
          <p className="text-portfolio-text/80">
            Constantly expanding horizons through books of various genres, from business and technology to fiction and philosophy.
          </p>
        </div>
      </div>
    </section>
  );
};

export default HobbiesSection;
