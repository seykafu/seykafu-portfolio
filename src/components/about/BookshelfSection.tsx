
import React from 'react';
import { BookOpen } from 'lucide-react';

const BookshelfSection = () => {
  return (
    <section className="py-16">
      <div className="flex items-center mb-8">
        <BookOpen className="text-portfolio-accent mr-3" />
        <h2 className="font-serif text-3xl font-semibold">My Bookshelf</h2>
      </div>
      <div className="bg-portfolio-muted/30 p-6 rounded-lg">
        <ul className="space-y-4 list-disc pl-5">
          <li>
            <span className="font-bold">Atomic Habits</span> - A comprehensive guide on building good habits and breaking bad ones through small, consistent changes.
          </li>
          <li>
            <span className="font-bold">Zero to One</span> - Peter Thiel's insights on building startups and creating new things rather than iterating on existing ideas.
          </li>
          <li>
            <span className="font-bold">Inspired</span> - Marty Cagan's product management bible covering techniques for creating tech products customers love.
          </li>
          <li>
            <span className="font-bold">Sapiens</span> - A brief history of humankind exploring how humans evolved and built complex societies and civilizations.
          </li>
          <li>
            <span className="font-bold">On Writing</span> - Stephen King's memoir and guide offering practical advice and insights into the craft of writing.
          </li>
          <li>
            <span className="font-bold">Shoe Dog</span> - Phil Knight's memoir about founding Nike and the challenges of building a global brand.
          </li>
        </ul>
      </div>
    </section>
  );
};

export default BookshelfSection;
