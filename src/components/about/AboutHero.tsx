
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
                I identify as both a product leader and a writer. I helped improve <a href="https://bing.com" target="_blank" rel="noopener noreferrer" className="text-portfolio-accent hover:underline">Bing Search</a> marketshare back at Microsoft and now I'm building Planview's flagship AI product, <a href="https://planview.com/ai" target="_blank" rel="noopener noreferrer" className="text-portfolio-accent hover:underline">Planview Copilot</a>. I run both the <a href="https://pmhive.blog" target="_blank" rel="noopener noreferrer" className="text-portfolio-accent hover:underline">PM Hive Newsletter</a> as well as other productivity blogs on <a href="https://medium.com/@seykafu" target="_blank" rel="noopener noreferrer" className="text-portfolio-accent hover:underline">Medium</a>.
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
