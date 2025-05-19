
import React, { useEffect } from 'react';
import Layout from '../components/Layout';
import { Link } from 'react-router-dom';

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
                <span className="text-portfolio-text">Kasey</span>
              </h1>
              <p className="mt-6 text-lg text-portfolio-text/80 leading-relaxed max-w-xl animate-on-load">
                I'm a product manager, author, and community builder. I'm the co-founder of PM Hive, Vancouver's PM community. For fun, I workout, write blogs, longboard, paint, play guitar, read, host events, and play video games! I also have a small cat named Khione.
              </p>
              <div className="mt-8 flex space-x-4 animate-on-load">
                <Link to="/product-portfolio" className="px-6 py-3 bg-portfolio-accent text-white rounded hover:bg-portfolio-accent-light transition-colors">
                  View Product Work
                </Link>
                <Link to="/writing-portfolio" className="px-6 py-3 border border-portfolio-accent text-portfolio-accent rounded hover:bg-portfolio-accent hover:text-white transition-colors">
                  Explore Writing
                </Link>
              </div>
            </div>
            <div className="order-1 md:order-2 animate-on-load">
              <div className="relative w-full h-[400px] md:h-[500px] overflow-hidden rounded-lg shadow-2xl">
                <div className="absolute inset-0 bg-gradient-to-tr from-portfolio-accent/50 to-transparent z-10"></div>
                <img 
                  src="/lovable-uploads/08661f08-9e2e-4316-8b0f-e593eee47af0.png" 
                  alt="Kasey" 
                  className="w-full h-full object-cover animate-float"
                />
              </div>
            </div>
          </div>
        </section>
      </div>
    </Layout>
  );
};

export default Index;
