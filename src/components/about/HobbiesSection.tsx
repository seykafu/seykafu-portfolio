
import React from 'react';
import { Book, Plane, Utensils } from 'lucide-react';

const HobbiesSection = () => {
  return (
    <section className="py-16">
      <div className="flex items-center mb-8">
        <Book className="text-portfolio-accent mr-3" />
        <h2 className="font-serif text-3xl font-semibold">My Hobbies</h2>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="bg-portfolio-muted/30 p-6 rounded-lg">
          <h3 className="text-xl font-bold mb-2">Writing</h3>
          <p className="text-portfolio-text/80">
            I write both fiction and non-fiction! Check out my Writing Portfolio :)
          </p>
        </div>
        <div className="bg-portfolio-muted/30 p-6 rounded-lg">
          <h3 className="text-xl font-bold mb-2">Traveling</h3>
          <p className="text-portfolio-text/80">
            I love both solo traveling and visiting cultural places with friends. Went to India in 2025!
          </p>
        </div>
        <div className="bg-portfolio-muted/30 p-6 rounded-lg">
          <h3 className="text-xl font-bold mb-2">Cooking/Baking</h3>
          <p className="text-portfolio-text/80">
            I love making banana bread and olive oil cake the most :3
          </p>
        </div>
      </div>
    </section>
  );
};

export default HobbiesSection;
