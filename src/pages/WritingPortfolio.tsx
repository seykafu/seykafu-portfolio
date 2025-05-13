
import React from 'react';
import Layout from '../components/Layout';
import BookEnhanced from '../components/BookEnhanced';
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { BookOpen, FileText } from "lucide-react";

const WritingPortfolio = () => {
  const fictionPages = [
    {
      title: "Darkness Me, Colorful You",
      year: "2022",
      description: "Dive into a world of Perpetua to help Koka uncover the truths of his country and his past, all while fighting to earn the love of a certain goddess along the way! If you're seeking the ultimate escapism novel, J.X. Fu's Darkness Me, Colorful You, Vol. 1 delivers a breathtaking adventure full of mystery, magic, action, and romance.",
      coverImage: "/lovable-uploads/7426fbbf-26cb-4290-876d-66226e408b83.png",
      link: "https://www.goodreads.com/book/show/63187906-darkness-me-colorful-you",
      featured: true
    },
    {
      title: "Corruptions in the Autumn!",
      year: "2023",
      description: "Watch a poor man and a superstar woman clash in this Rom-Com! Life couldn't have crashed harder for the formerly rich Kai Darak, who lost everything thanks to his father's corruption while gaining a 30 million dollar debt. How does one sally forth while conveying his love to the girl who's life was ruined by their said father?",
      coverImage: "/lovable-uploads/da2635f2-64bb-432a-90af-5eec7cd24d40.png",
      link: "https://www.goodreads.com/book/show/63203705-corruptions-are-best-exposed-in-the-autumn"
    },
    {
      title: "The Impeccable Coin",
      year: "2023",
      description: "A short story about a magical coin that grants wishes, but at unexpected costs. This narrative explores the consequences of desire and the true meaning of value in our lives.",
      coverImage: "https://images.unsplash.com/photo-1633158829799-96bb13cab779",
      link: "https://docs.google.com/document/d/1BNMSx5bfZK2nN9ebcU_YtjG5kORIeH-nhctxYPLfm90/edit?usp=sharing"
    },
    {
      title: "Green to Greed",
      year: "2023",
      description: "This short story follows the transformation of a naive environmentalist who enters the corporate world to make change from within, only to find themselves slowly corrupted by the system they sought to reform.",
      coverImage: "https://images.unsplash.com/photo-1526304640581-d334cdbbf45e",
      link: "https://docs.google.com/document/d/1cwIo1jCKAuo-vtQTfikDHMCMELzgsTHAoQuMcwZhQF8/edit?usp=sharing"
    },
  ];

  const nonFictionPages = [
    {
      title: "Dare to Dream",
      year: "2025 (Upcoming)",
      description: "My upcoming non-fiction book explores the power of vision and perseverance, featuring interviews with innovators who turned their dreams into reality. Set to be released in December 2025.",
      coverImage: "https://images.unsplash.com/photo-1518770660439-4636190af475",
      link: "https://medium.com/dream-house/dealing-with-career-anxiety-announcing-my-upcoming-book-dare-to-dream-b50bd5227d02"
    },
    {
      title: "My Substack Newsletter",
      year: "2020-Present",
      description: "PM Hive - A collection of articles covering product management, tech, productivity, and career advice published regularly on Substack.",
      coverImage: "https://images.unsplash.com/photo-1499750310107-5fef28a66643",
      link: "https://seykafu.substack.com/"
    },
    {
      title: "PM Hive Newsletter",
      year: "2020-Present",
      description: "A curated newsletter for product managers featuring industry insights, best practices, and upcoming PM Hive community events.",
      coverImage: "https://images.unsplash.com/photo-1512314889357-e157c22f938d",
      link: "https://lu.ma/PMHive"
    },
  ];

  return (
    <Layout>
      <div className="container mx-auto px-4 md:px-6">
        <section className="py-16">
          <h1 className="font-serif text-4xl md:text-5xl font-bold mb-6 text-center">Writing Portfolio</h1>
          <p className="text-lg text-portfolio-text/80 max-w-3xl mx-auto mb-12 text-center">
            Explore my literary works spanning fiction, short stories, and non-fiction articles.
          </p>
          
          <Tabs defaultValue="fiction" className="w-full max-w-4xl mx-auto">
            <TabsList className="grid w-full max-w-md mx-auto grid-cols-2 mb-8">
              <TabsTrigger value="fiction" className="flex items-center gap-2">
                <BookOpen className="h-4 w-4" />
                <span>Fiction</span>
              </TabsTrigger>
              <TabsTrigger value="non-fiction" className="flex items-center gap-2">
                <FileText className="h-4 w-4" />
                <span>Non-Fiction</span>
              </TabsTrigger>
            </TabsList>
            
            <TabsContent value="fiction" className="focus-visible:outline-none mt-2">
              <div className="mb-4 text-center">
                <h2 className="text-3xl font-serif mb-4">Fiction Projects</h2>
                <p className="text-portfolio-text/80 max-w-2xl mx-auto">
                  From novels to short stories, explore my creative fictional works.
                </p>
              </div>
              <BookEnhanced pages={fictionPages} />
            </TabsContent>
            
            <TabsContent value="non-fiction" className="focus-visible:outline-none mt-2">
              <div className="mb-4 text-center">
                <h2 className="text-3xl font-serif mb-4">Non-Fiction Projects</h2>
                <p className="text-portfolio-text/80 max-w-2xl mx-auto">
                  Articles, newsletters, and resources on product management, tech, and career growth.
                </p>
              </div>
              <BookEnhanced pages={nonFictionPages} />
            </TabsContent>
          </Tabs>
        </section>
      </div>
    </Layout>
  );
};

export default WritingPortfolio;
