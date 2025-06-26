import React from 'react';
import Layout from '../components/Layout';
import { Calendar, Users, Link } from 'lucide-react';
import { Button } from '../components/ui/button';

const CommunityWork = () => {
  return (
    <Layout>
      <div className="container mx-auto px-4 md:px-6">
        {/* Hero Section */}
        <section className="py-16">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div>
              <h1 className="font-serif text-4xl md:text-5xl font-bold mb-6">Community Work</h1>
              <p className="text-lg text-portfolio-text/80 mb-8">
                As a passionate community builder, I co-founded PM Hive - Vancouver's premier Product Management community - back in 2023. I'm also a co-organizer of Vancouver Tech Week, bringing together tech professionals from across the region to connect, learn, and grow together.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button asChild className="bg-portfolio-accent hover:bg-portfolio-accent-light text-black">
                  <a href="https://pmhive.ca" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2">
                    <Users className="w-5 h-5" />
                    <span>Visit PM Hive</span>
                  </a>
                </Button>
                <Button asChild variant="outline" className="border-portfolio-accent text-portfolio-accent hover:bg-portfolio-accent hover:text-black">
                  <a href="https://vantechweek.com" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2">
                    <Calendar className="w-5 h-5" />
                    <span>Visit Vancouver Tech Week</span>
                  </a>
                </Button>
              </div>
            </div>
            <div className="relative h-[400px] w-full rounded-lg overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-tr from-portfolio-accent/30 to-transparent z-10"></div>
              <img 
                src="/lovable-uploads/624b65ba-382e-4e59-925d-5bb1d80e1d20.png" 
                alt="PM Hive Community Event" 
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </section>
        
        {/* PM Hive Section */}
        <section className="py-12">
          <div className="bg-portfolio-muted/30 p-8 rounded-lg">
            <div className="flex items-center mb-6">
              <Users className="text-portfolio-accent mr-3" />
              <h2 className="font-serif text-3xl font-semibold">PM Hive</h2>
            </div>
            <p className="text-lg text-portfolio-text/80 mb-8">
              PM Hive is Vancouver's Product Management community focused on bringing together product professionals for networking, knowledge-sharing, and career development. Since co-founding this community in 2023, we've hosted numerous events, workshops, and discussions that have helped strengthen the local PM ecosystem.
            </p>
            
            <div className="mt-8">
              <Button asChild className="bg-portfolio-accent hover:bg-portfolio-accent-light">
                <a href="https://lu.ma/PMHive" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2">
                  <Calendar className="w-5 h-5" />
                  <span>View PM Hive Events</span>
                </a>
              </Button>
            </div>
          </div>
        </section>
        
        {/* Vancouver Tech Week Section */}
        <section className="py-12">
          <div className="bg-portfolio-muted/30 p-8 rounded-lg">
            <div className="flex items-center mb-6">
              <Calendar className="text-portfolio-accent mr-3" />
              <h2 className="font-serif text-3xl font-semibold">Vancouver Tech Week</h2>
            </div>
            <p className="text-lg text-portfolio-text/80 mb-8">
              As a co-organizer of Vancouver Tech Week, I help bring together the city's tech ecosystem for a week of collaborative events, knowledge sharing, and networking. This initiative has become a cornerstone of Vancouver's tech calendar, featuring speakers, workshops, and social events that showcase the best of our local tech community.
            </p>
            
            <div className="mt-8">
              <Button asChild className="bg-portfolio-accent hover:bg-portfolio-accent-light">
                <a href="https://lu.ma/vantechweek" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2">
                  <Calendar className="w-5 h-5" />
                  <span>View Tech Week Events</span>
                </a>
              </Button>
            </div>
          </div>
        </section>
        
        {/* Featured Events Section */}
        <section className="py-16">
          <div className="flex items-center mb-8">
            <Calendar className="text-portfolio-accent mr-3" />
            <h2 className="font-serif text-3xl font-semibold">Featured Events</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Event 1 */}
            <div className="bg-portfolio-muted/30 p-6 rounded-lg hover:shadow-md transition-all">
              <h3 className="text-xl font-bold mb-2">PM Buzz 3.0: Imposter Syndrome Night</h3>
              <div className="flex items-center text-portfolio-accent gap-1 mb-3">
                <Calendar className="w-4 h-4" /> 
                <span className="text-sm">June 2024</span>
              </div>
              <p className="text-portfolio-text/80">
                A community event focused on discussing and addressing imposter syndrome among product managers. Featuring panel discussions and interactive workshops.
              </p>
              <div className="mt-4 flex justify-end">
                <Link className="w-4 h-4 text-portfolio-accent" />
              </div>
            </div>
            
            {/* Event 2 */}
            <div className="bg-portfolio-muted/30 p-6 rounded-lg hover:shadow-md transition-all">
              <h3 className="text-xl font-bold mb-2">Vancouver Tech Week's Fireside Chat with Techies</h3>
              <div className="flex items-center text-portfolio-accent gap-1 mb-3">
                <Calendar className="w-4 h-4" /> 
                <span className="text-sm">September 2024</span>
              </div>
              <p className="text-portfolio-text/80">
                An intimate fireside chat bringing together leading tech professionals to discuss industry trends, challenges, and innovations shaping Vancouver's tech landscape.
              </p>
              <div className="mt-4 flex justify-end">
                <Link className="w-4 h-4 text-portfolio-accent" />
              </div>
            </div>
            
            {/* Event 3 */}
            <div className="bg-portfolio-muted/30 p-6 rounded-lg hover:shadow-md transition-all">
              <h3 className="text-xl font-bold mb-2">Vancouver Tech Week Mini Hackathon</h3>
              <div className="flex items-center text-portfolio-accent gap-1 mb-3">
                <Calendar className="w-4 h-4" /> 
                <span className="text-sm">September 2024</span>
              </div>
              <p className="text-portfolio-text/80">
                A fast-paced mini hackathon challenging participants to develop innovative solutions to real-world problems. Teams collaborated to produce working prototypes in just 24 hours.
              </p>
              <div className="mt-4 flex justify-end">
                <Link className="w-4 h-4 text-portfolio-accent" />
              </div>
            </div>
          </div>
        </section>
        
        {/* Call to Action Section */}
        <section className="py-12">
          <div className="bg-portfolio-accent/20 p-8 rounded-lg text-center">
            <h2 className="font-serif text-3xl font-semibold mb-4">Join Our Community</h2>
            <p className="text-lg mb-6">
              Interested in connecting with fellow product leaders or being part of Vancouver's tech scene? Join us at our upcoming events!
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild className="bg-portfolio-accent hover:bg-portfolio-accent-light">
                <a href="https://lu.ma/PMHive" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2">
                  <Calendar className="w-5 h-5" />
                  <span>PM Hive Events</span>
                </a>
              </Button>
              <Button asChild variant="outline" className="border-portfolio-accent text-portfolio-accent hover:bg-portfolio-accent hover:text-white">
                <a href="https://lu.ma/vantechweek" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2">
                  <Calendar className="w-5 h-5" />
                  <span>Tech Week Events</span>
                </a>
              </Button>
            </div>
          </div>
        </section>
      </div>
    </Layout>
  );
};

export default CommunityWork;
