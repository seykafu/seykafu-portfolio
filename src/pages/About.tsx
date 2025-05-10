
import React from 'react';
import Layout from '../components/Layout';
import { Briefcase, BookOpen, FileText, User, Calendar, Clock } from 'lucide-react';

const About = () => {
  return (
    <Layout>
      <div className="container mx-auto px-4 md:px-6">
        {/* Hero Section */}
        <section className="py-16">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div>
              <h1 className="font-serif text-4xl md:text-5xl font-bold mb-6">About Me</h1>
              <p className="text-lg text-portfolio-text/80 mb-6">
                Hello! I'm a Product Manager and Writer with over 8 years of experience in the tech industry. 
                I'm passionate about building user-centered products and telling compelling stories.
              </p>
              <p className="text-lg text-portfolio-text/80">
                With a background spanning from startups to large enterprises like Microsoft and Planview, 
                I've developed a versatile skill set that allows me to tackle complex problems and deliver 
                exceptional results. When I'm not working on products, I'm usually writing fiction or exploring 
                new ideas through my blog posts.
              </p>
            </div>
            <div className="relative">
              <div className="relative h-[400px] w-full rounded-lg overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-tr from-portfolio-accent/30 to-transparent z-10"></div>
                <img 
                  src="https://images.unsplash.com/photo-1649972904349-6e44c42644a7" 
                  alt="About Me" 
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </section>
        
        {/* Career Section */}
        <section className="py-16">
          <div className="flex items-center mb-8">
            <Briefcase className="text-portfolio-accent mr-3" />
            <h2 className="font-serif text-3xl font-semibold">My Career</h2>
          </div>
          <div className="space-y-8">
            <div className="grid grid-cols-1 md:grid-cols-[200px_1fr] gap-4">
              <div className="font-medium text-portfolio-accent">2023 - 2025</div>
              <div>
                <h3 className="text-xl font-bold">Planview</h3>
                <p className="text-lg text-portfolio-text/80 mt-2">
                  Led product management initiatives for enterprise portfolio management solutions, 
                  helping organizations optimize their project investments and resources.
                </p>
              </div>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-[200px_1fr] gap-4">
              <div className="font-medium text-portfolio-accent">2021 - 2023</div>
              <div>
                <h3 className="text-xl font-bold">Microsoft</h3>
                <p className="text-lg text-portfolio-text/80 mt-2">
                  Managed cloud service products used by millions of customers worldwide, 
                  focusing on enterprise solutions that improve productivity and collaboration.
                </p>
              </div>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-[200px_1fr] gap-4">
              <div className="font-medium text-portfolio-accent">2021</div>
              <div>
                <h3 className="text-xl font-bold">Unity & Shenkii</h3>
                <p className="text-lg text-portfolio-text/80 mt-2">
                  Contributed to gaming and VR educational platforms, enhancing user experiences 
                  and expanding product capabilities.
                </p>
              </div>
            </div>
            
            <a href="/product-portfolio" className="inline-block text-portfolio-accent hover:text-portfolio-accent-light mt-4">
              View full product portfolio →
            </a>
          </div>
        </section>
        
        {/* Podcasts Section - Updated */}
        <section className="py-16">
          <div className="flex items-center mb-8">
            <FileText className="text-portfolio-accent mr-3" />
            <h2 className="font-serif text-3xl font-semibold">My Podcasts</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-portfolio-muted/30 p-6 rounded-lg">
              <h3 className="text-xl font-bold mb-2">The PM Hive Podcast</h3>
              <p className="text-portfolio-text/80 mb-4">
                Discussions about product management trends and insights from the PM Hive community.
              </p>
              <a href="#" className="text-portfolio-accent hover:text-portfolio-accent-light">Listen →</a>
            </div>
            <div className="bg-portfolio-muted/30 p-6 rounded-lg">
              <h3 className="text-xl font-bold mb-2">UW PM Club Podcast</h3>
              <p className="text-portfolio-text/80 mb-4">
                Interviews and conversations with University of Waterloo product managers and industry experts.
              </p>
              <a href="#" className="text-portfolio-accent hover:text-portfolio-accent-light">Listen →</a>
            </div>
            <div className="bg-portfolio-muted/30 p-6 rounded-lg">
              <h3 className="text-xl font-bold mb-2">Dare To Dream Podcast</h3>
              <p className="text-portfolio-text/80 mb-4">
                Coming soon! Exploring career journeys and professional development strategies.
              </p>
              <a href="#" className="text-portfolio-accent hover:text-portfolio-accent-light">Coming Soon →</a>
            </div>
          </div>
        </section>
        
        {/* Bookshelf Section - Changed to bullet list */}
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
        
        {/* Talks/Press/Media Section */}
        <section className="py-16">
          <div className="flex items-center mb-8">
            <Calendar className="text-portfolio-accent mr-3" />
            <h2 className="font-serif text-3xl font-semibold">Talks / Press / Media</h2>
          </div>
          <div className="space-y-6">
            <div className="border-l-2 border-portfolio-accent pl-6 py-2">
              <h3 className="text-xl font-bold">Product Conference 2024</h3>
              <p className="text-portfolio-accent">Speaker</p>
              <p className="text-portfolio-text/80 mt-2">
                Presented on "Building Products with Purpose" at the annual industry conference.
              </p>
            </div>
            <div className="border-l-2 border-portfolio-accent pl-6 py-2">
              <h3 className="text-xl font-bold">Tech Magazine Feature</h3>
              <p className="text-portfolio-accent">Interview</p>
              <p className="text-portfolio-text/80 mt-2">
                Shared insights on product management in enterprise environments.
              </p>
            </div>
            <div className="border-l-2 border-portfolio-accent pl-6 py-2">
              <h3 className="text-xl font-bold">Writers Guild Panel</h3>
              <p className="text-portfolio-accent">Panelist</p>
              <p className="text-portfolio-text/80 mt-2">
                Discussed balancing creative writing with a tech career.
              </p>
            </div>
          </div>
        </section>
        
        {/* Principles Section */}
        <section className="py-16">
          <div className="flex items-center mb-8">
            <User className="text-portfolio-accent mr-3" />
            <h2 className="font-serif text-3xl font-semibold">My Principles & Values</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div>
              <h3 className="text-xl font-bold mb-3">User-Centric Design</h3>
              <p className="text-portfolio-text/80">
                Always put the user's needs and experiences at the center of product decisions.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-bold mb-3">Continuous Learning</h3>
              <p className="text-portfolio-text/80">
                Embrace opportunities to grow and develop new skills throughout life.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-bold mb-3">Ethical Innovation</h3>
              <p className="text-portfolio-text/80">
                Create technology that respects privacy and promotes positive social impact.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-bold mb-3">Clear Communication</h3>
              <p className="text-portfolio-text/80">
                Prioritize transparency and effective communication in all interactions.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-bold mb-3">Creative Thinking</h3>
              <p className="text-portfolio-text/80">
                Approach problems with creativity and look beyond conventional solutions.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-bold mb-3">Balance</h3>
              <p className="text-portfolio-text/80">
                Maintain equilibrium between professional pursuits and personal well-being.
              </p>
            </div>
          </div>
        </section>
        
        {/* Hobbies Section - Removed images, simplified to text */}
        <section className="py-16">
          <div className="flex items-center mb-8">
            <Clock className="text-portfolio-accent mr-3" />
            <h2 className="font-serif text-3xl font-semibold">My Hobbies</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-portfolio-muted/30 p-6 rounded-lg">
              <h3 className="text-xl font-bold mb-2">Hiking</h3>
              <p className="text-portfolio-text/80">
                Exploring nature trails and mountains whenever possible, seeking adventure and fresh perspectives.
              </p>
            </div>
            <div className="bg-portfolio-muted/30 p-6 rounded-lg">
              <h3 className="text-xl font-bold mb-2">Photography</h3>
              <p className="text-portfolio-text/80">
                Capturing moments and unique perspectives through the lens, focusing on landscapes and street photography.
              </p>
            </div>
            <div className="bg-portfolio-muted/30 p-6 rounded-lg">
              <h3 className="text-xl font-bold mb-2">Reading</h3>
              <p className="text-portfolio-text/80">
                Constantly expanding horizons through books of various genres, from business and technology to fiction and philosophy.
              </p>
            </div>
          </div>
        </section>
      </div>
    </Layout>
  );
};

export default About;
