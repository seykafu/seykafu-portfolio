import React, { useEffect } from 'react';
import Layout from '../components/Layout';
import SpotlightHero from '../components/SpotlightHero';
import { Link } from 'react-router-dom';
import { Rocket, PenTool, Users, Compass } from 'lucide-react';

const explore = [
  {
    to: '/product-portfolio',
    icon: Rocket,
    title: 'Product',
    description: 'AI products at Disco, Unbounce, Planview, Microsoft & more.',
  },
  {
    to: '/writing-portfolio',
    icon: PenTool,
    title: 'Writing',
    description: 'Books, blogs, and essays — including Doing the Dream.',
  },
  {
    to: '/community-work',
    icon: Users,
    title: 'Community',
    description: "PM Hive — Vancouver's product management community.",
  },
  {
    to: '/career-support',
    icon: Compass,
    title: 'Career Support',
    description: 'Coaching, resume reviews, and mentorship for PMs.',
  },
];

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
              <div className="mt-8 flex space-x-4 animate-on-load">
                <Link
                  to="/product-portfolio"
                  className="rounded bg-portfolio-accent px-6 py-3 text-white transition-colors hover:bg-portfolio-accent-light"
                >
                  View Product Work
                </Link>
                <Link
                  to="/career-support"
                  className="rounded border border-portfolio-accent px-6 py-3 text-portfolio-accent transition-colors hover:bg-portfolio-accent hover:text-white"
                >
                  Career Support
                </Link>
              </div>
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

        {/* Explore cards */}
        <section className="pb-24">
          <p className="mb-8 text-xs uppercase tracking-[0.35em] text-portfolio-text/50 animate-on-load">
            Explore
          </p>
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {explore.map((item) => (
              <Link
                key={item.to}
                to={item.to}
                className="liquid-glass group rounded-2xl p-6 transition-transform duration-300 hover:-translate-y-1 animate-on-load"
              >
                <item.icon className="h-6 w-6 text-portfolio-accent transition-transform duration-300 group-hover:scale-110" />
                <h3 className="mt-4 font-display text-2xl">{item.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-portfolio-text/60">
                  {item.description}
                </p>
                <span className="mt-4 inline-block text-sm text-portfolio-accent opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                  Explore →
                </span>
              </Link>
            ))}
          </div>
        </section>
      </div>
    </Layout>
  );
};

export default Index;
