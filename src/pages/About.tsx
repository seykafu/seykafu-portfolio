
import React from 'react';
import Layout from '../components/Layout';
import AboutHero from '../components/about/AboutHero';
import CareerSection from '../components/about/CareerSection';
import PodcastsSection from '../components/about/PodcastsSection';
import BookshelfSection from '../components/about/BookshelfSection';
import TalksSection from '../components/about/TalksSection';
import PrinciplesSection from '../components/about/PrinciplesSection';
import HobbiesSection from '../components/about/HobbiesSection';

const About = () => {
  return (
    <Layout>
      <div className="container mx-auto px-4 md:px-6">
        <AboutHero />
        <CareerSection />
        <PodcastsSection />
        <BookshelfSection />
        <TalksSection />
        <PrinciplesSection />
        <HobbiesSection />
      </div>
    </Layout>
  );
};

export default About;
