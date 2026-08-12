
import React from 'react';
import Layout from '../components/Layout';
import AboutHero from '../components/about/AboutHero';
import ResumeSnapshot from '../components/about/ResumeSnapshot';
import PodcastsSection from '../components/about/PodcastsSection';
import BookshelfSection from '../components/about/BookshelfSection';
import TalksSection from '../components/about/TalksSection';
import PrinciplesSection from '../components/about/PrinciplesSection';

const About = () => {
  return (
    <Layout>
      <div className="container mx-auto px-4 md:px-6">
        <AboutHero />
        <ResumeSnapshot />
        <PodcastsSection />
        <BookshelfSection />
        <TalksSection />
        <PrinciplesSection />
      </div>
    </Layout>
  );
};

export default About;
