
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
            Beyond my professional writing, I enjoy creative writing as a form of self-expression and storytelling, crafting both fiction and non-fiction pieces.
          </p>
        </div>
        <div className="bg-portfolio-muted/30 p-6 rounded-lg">
          <h3 className="text-xl font-bold mb-2">Traveling</h3>
          <p className="text-portfolio-text/80">
            Exploring new cultures, cuisines, and landscapes around the world, collecting experiences and perspectives that enrich both my personal and professional life.
          </p>
        </div>
        <div className="bg-portfolio-muted/30 p-6 rounded-lg">
          <h3 className="text-xl font-bold mb-2">Cooking/Baking</h3>
          <p className="text-portfolio-text/80">
            Experimenting with recipes and techniques in the kitchen, finding joy in creating delicious meals and treats to share with friends and family.
          </p>
        </div>
      </div>
    </section>
  );
};

export default HobbiesSection;
