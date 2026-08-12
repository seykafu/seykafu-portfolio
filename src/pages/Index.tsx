import React, { useEffect } from 'react';
import Layout from '../components/Layout';
import SpotlightHero from '../components/SpotlightHero';

const Index = () => {
  useEffect(() => {
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
    <Layout fullBleed>
      <SpotlightHero />

      <div className="container mx-auto px-4 md:px-6">
        {/* Intro */}
        <section className="py-20 md:py-28">
          <div className="grid grid-cols-1 items-center gap-12 md:grid-cols-2">
            <div>
              <h2 className="font-display text-4xl md:text-5xl lg:text-6xl animate-on-load">
                <span className="text-portfolio-accent italic">Hello,</span> I'm Kasey
              </h2>
              <p className="mt-6 max-w-xl text-lg leading-relaxed text-portfolio-text/80 animate-on-load">
                I'm a product manager, author, and community builder. I'm the
                co-founder of PM Hive, Vancouver's PM community. For fun, I
                workout, write blogs, longboard, paint, play guitar, read, host
                events, and play video games! I also have a small cat named
                Khione.
              </p>
            </div>
            <div className="animate-on-load">
              <div className="relative h-[400px] w-full overflow-hidden rounded-lg shadow-2xl md:h-[500px]">
                <div className="absolute inset-0 z-10 bg-gradient-to-tr from-portfolio-accent/50 to-transparent"></div>
                <img
                  src="/lovable-uploads/08661f08-9e2e-4316-8b0f-e593eee47af0.png"
                  alt="Kasey"
                  className="h-full w-full object-cover animate-float"
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
