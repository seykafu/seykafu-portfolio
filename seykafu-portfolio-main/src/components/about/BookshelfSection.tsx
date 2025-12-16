
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
            <span className="font-bold">So Good They Can't Ignore You</span> - Cal Newport's guide on developing rare and valuable skills to create work you love rather than following passion.
          </li>
          <li>
            <span className="font-bold">Deep Work</span> - Cal Newport's approach to focused, distraction-free work that improves productivity and results.
          </li>
          <li>
            <span className="font-bold">Supercommunicators</span> - Charles Duhigg's insights on mastering the art of human connection in a digital world.
          </li>
          <li>
            <span className="font-bold">Ikigai</span> - Héctor García and Francesc Miralles explore the Japanese concept of finding purpose and joy in daily life.
          </li>
          <li>
            <span className="font-bold">Adult Children of Emotionally Immature Parents</span> - Lindsay Gibson's guide to healing from childhood and improving emotional connections.
          </li>
          <li>
            <span className="font-bold">The Psychology of Money</span> - Morgan Housel's timeless lessons on wealth, greed, and happiness through interesting stories.
          </li>
        </ul>
      </div>
    </section>
  );
};

export default BookshelfSection;
