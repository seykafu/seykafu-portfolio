
import React from 'react';

const AboutHero = () => {
  return (
    <section className="py-16">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
        <div>
          <h1 className="font-serif text-4xl md:text-5xl font-bold mb-6">About Me</h1>
          <p className="text-lg text-portfolio-text/80 mb-6">
            I'm a product manager, writer, author, and community builder. I'm the co-founder of PM Hive, Vancouver's PM community.
          </p>
          <div className="space-y-6">
            <div>
              <h2 className="text-xl font-bold mb-2">My main focus</h2>
              <p className="text-lg text-portfolio-text/80">
                During the day, I'm a PM in the AI space. I was previously at Microsoft Bing, shipping AI models and features in their backend platform. Now I'm at Planview, shipping a new AI assistant for its broad range of F500 customers. On the side, I write articles for various publications such as Product Coalition, Bootcamp, and SUPERJUMP. I'm also a published fiction author and currently working on a non-fiction book. I'm interested in industries such as gaming, enterprise, and content creation.
              </p>
            </div>
            <div>
              <h2 className="text-xl font-bold mb-2">My other projects</h2>
              <p className="text-lg text-portfolio-text/80">
                I'm a part-time writer & a published fiction author; my books include a YA Fantasy/Action titled "Darkness Me, Colorful You" and a RomCom light novel titled "Corruptions Are Best Exposed In The Autumn!"
              </p>
            </div>
            <div>
              <h2 className="text-xl font-bold mb-2">My Background</h2>
              <p className="text-lg text-portfolio-text/80">
                Before diving into writing and PM work, I graduated with a Bachelor's of Science in Science and Business from the University of Waterloo. I've completed many internships in product before graduating.
              </p>
            </div>
            <p className="text-lg text-portfolio-text/80">
              Here, you'll find more about me, my Medium blog, my books, and my manga review blog!
            </p>
          </div>
        </div>
        <div className="relative">
          <div className="relative h-[400px] w-full rounded-lg overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-tr from-portfolio-accent/30 to-transparent z-10"></div>
            <img 
              src="/lovable-uploads/472b48c4-ab9d-4036-a7ba-3ba99d939258.png" 
              alt="Kasey at PM Hive event" 
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutHero;
