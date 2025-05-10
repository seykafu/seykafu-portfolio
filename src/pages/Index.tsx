
import React, { useEffect } from 'react';
import Layout from '../components/Layout';
import Timeline from '../components/Timeline';

const Index = () => {
  useEffect(() => {
    // Animation for home page elements
    const elements = document.querySelectorAll('.animate-on-load');
    elements.forEach((el, index) => {
      const element = el as HTMLElement;
      element.style.opacity = '0';
      element.style.transform = 'translateY(20px)';
      
      setTimeout(() => {
        element.style.transition = 'all 0.6s ease-out';
        element.style.opacity = '1';
        element.style.transform = 'translateY(0)';
      }, 100 * (index + 1));
    });
  }, []);
  
  return (
    <Layout>
      <div className="container mx-auto px-4 md:px-6">
        {/* Hero Section */}
        <section className="py-16 md:py-24">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div className="order-2 md:order-1">
              <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl font-bold animate-on-load">
                <span className="text-portfolio-accent">Hello,</span> I'm <br />
                <span className="text-portfolio-text">Your Name</span>
              </h1>
              <p className="mt-6 text-lg text-portfolio-text/80 leading-relaxed max-w-xl animate-on-load">
                Product Manager & Writer with a passion for technology and storytelling.
                I've built products at Microsoft, Planview, Unity and more, while writing fiction
                and non-fiction in my creative pursuits.
              </p>
              <div className="mt-8 flex space-x-4 animate-on-load">
                <a href="/product-portfolio" className="px-6 py-3 bg-portfolio-accent text-white rounded hover:bg-portfolio-accent-light transition-colors">
                  View Product Work
                </a>
                <a href="/writing-portfolio" className="px-6 py-3 border border-portfolio-accent text-portfolio-accent rounded hover:bg-portfolio-accent hover:text-white transition-colors">
                  Explore Writing
                </a>
              </div>
            </div>
            <div className="order-1 md:order-2 animate-on-load">
              <div className="relative w-full h-[400px] md:h-[500px] overflow-hidden rounded-lg shadow-2xl">
                <div className="absolute inset-0 bg-gradient-to-tr from-portfolio-accent/50 to-transparent z-10"></div>
                <img 
                  src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158" 
                  alt="Portfolio Owner" 
                  className="w-full h-full object-cover animate-float"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Timeline Section */}
        <section className="py-16">
          <h2 className="text-center font-serif text-3xl font-semibold mb-8">My Journey</h2>
          <Timeline />
        </section>
        
        {/* Quick Links Section */}
        <section className="py-16">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <a href="/product-portfolio" className="group block relative p-8 border border-portfolio-muted/30 rounded-lg hover:border-portfolio-accent transition-colors">
              <h3 className="font-serif text-2xl font-bold">Product Portfolio</h3>
              <p className="mt-3 text-portfolio-text/70">
                Explore my work at Microsoft, Planview, and other tech companies
              </p>
              <span className="absolute bottom-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity text-portfolio-accent">
                →
              </span>
            </a>
            <a href="/writing-portfolio" className="group block relative p-8 border border-portfolio-muted/30 rounded-lg hover:border-portfolio-accent transition-colors">
              <h3 className="font-serif text-2xl font-bold">Writing Portfolio</h3>
              <p className="mt-3 text-portfolio-text/70">
                Dive into my fiction books, short stories, and articles
              </p>
              <span className="absolute bottom-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity text-portfolio-accent">
                →
              </span>
            </a>
            <a href="/about" className="group block relative p-8 border border-portfolio-muted/30 rounded-lg hover:border-portfolio-accent transition-colors">
              <h3 className="font-serif text-2xl font-bold">About Me</h3>
              <p className="mt-3 text-portfolio-text/70">
                Learn more about my career, principles, and hobbies
              </p>
              <span className="absolute bottom-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity text-portfolio-accent">
                →
              </span>
            </a>
          </div>
        </section>
      </div>
    </Layout>
  );
};

export default Index;
