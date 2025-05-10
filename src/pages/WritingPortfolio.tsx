
import React from 'react';
import Layout from '../components/Layout';
import Book from '../components/Book';

const WritingPortfolio = () => {
  const bookPages = [
    {
      title: "Darkness Me, Colorful You",
      year: "2022",
      description: "A fascinating journey through the mind of a protagonist who sees the world in shades of gray until meeting someone who changes everything. This fiction novel explores themes of perception, mental health, and personal transformation.",
      coverImage: "https://images.unsplash.com/photo-1544947950-fa07a98d237f"
    },
    {
      title: "Corruptions in the Autumn!",
      year: "2023",
      description: "My second fiction book follows the story of a small town facing mysterious events as autumn arrives. A tale of community, secrets, and the supernatural that captivates readers from the first page to the last.",
      coverImage: "https://images.unsplash.com/photo-1495640452828-3df6795cf69b"
    },
    {
      title: "The Impeccable Coin",
      year: "2023",
      description: "A short story about a magical coin that grants wishes, but at unexpected costs. This narrative explores the consequences of desire and the true meaning of value in our lives.",
      coverImage: "https://images.unsplash.com/photo-1633158829799-96bb13cab779"
    },
    {
      title: "Green to Greed",
      year: "2023",
      description: "This short story follows the transformation of a naive environmentalist who enters the corporate world to make change from within, only to find themselves slowly corrupted by the system they sought to reform.",
      coverImage: "https://images.unsplash.com/photo-1526304640581-d334cdbbf45e"
    },
    {
      title: "My Medium Blogs",
      year: "2020-Present",
      description: "A collection of articles covering technology trends, product management insights, creative writing tips, and personal reflections published on Medium and other platforms.",
      coverImage: "https://images.unsplash.com/photo-1499750310107-5fef28a66643"
    },
    {
      title: "Dare to Dream",
      year: "2025 (Upcoming)",
      description: "My upcoming non-fiction book explores the power of vision and perseverance, featuring interviews with innovators who turned their dreams into reality. Set to be released in December 2025.",
      coverImage: "https://images.unsplash.com/photo-1518770660439-4636190af475"
    },
  ];

  return (
    <Layout>
      <div className="container mx-auto px-4 md:px-6">
        <section className="py-16">
          <h1 className="font-serif text-4xl md:text-5xl font-bold mb-6 text-center">Writing Portfolio</h1>
          <p className="text-lg text-portfolio-text/80 max-w-3xl mx-auto mb-16 text-center">
            Explore my literary works spanning fiction, short stories, and non-fiction articles.
            Each page represents a different published work or collection.
          </p>
          
          <Book pages={bookPages} />
        </section>
      </div>
    </Layout>
  );
};

export default WritingPortfolio;
