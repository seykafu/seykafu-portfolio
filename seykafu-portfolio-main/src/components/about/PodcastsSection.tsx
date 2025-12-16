
import React from 'react';
import { FileText } from 'lucide-react';

const PodcastsSection = () => {
  return (
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
          <a href="https://www.youtube.com/@PMHive" target="_blank" rel="noopener noreferrer" className="text-portfolio-accent hover:text-portfolio-accent-light">Listen →</a>
        </div>
        <div className="bg-portfolio-muted/30 p-6 rounded-lg">
          <h3 className="text-xl font-bold mb-2">UW PM Club Podcast</h3>
          <p className="text-portfolio-text/80 mb-4">
            Interviews and conversations with University of Waterloo product managers and industry experts.
          </p>
          <a href="https://open.spotify.com/show/4bjMhUJIKYlAl0nCjQCqGv?si=67101dd1058840b1" target="_blank" rel="noopener noreferrer" className="text-portfolio-accent hover:text-portfolio-accent-light">Listen →</a>
        </div>
        <div className="bg-portfolio-muted/30 p-6 rounded-lg">
          <h3 className="text-xl font-bold mb-2">Dare To Dream Podcast</h3>
          <p className="text-portfolio-text/80 mb-4">
            Coming soon! Exploring career journeys and professional development strategies.
          </p>
          <a href="https://medium.com/dream-house/dealing-with-career-anxiety-announcing-my-upcoming-book-dare-to-dream-b50bd5227d02" target="_blank" rel="noopener noreferrer" className="text-portfolio-accent hover:text-portfolio-accent-light">Coming Soon →</a>
        </div>
      </div>
    </section>
  );
};

export default PodcastsSection;
