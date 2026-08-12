import React from 'react';
import Layout from '../components/Layout';
import FlipBook, { FlipPage } from '../components/FlipBook';
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { BookOpen, FileText, Feather } from "lucide-react";

const fictionPages: FlipPage[] = [
  {
    title: "Darkness Me, Colorful You",
    year: "2022",
    description: "Dive into a world of Perpetua to help Koka uncover the truths of his country and his past, all while fighting to earn the love of a certain goddess along the way! If you're seeking the ultimate escapism novel, J.X. Fu's Darkness Me, Colorful You, Vol. 1 delivers a breathtaking adventure full of mystery, magic, action, and romance.",
    coverImage: "/lovable-uploads/2d08fbdc-9eba-4431-b7da-337195c6dd04.png",
    link: "https://www.goodreads.com/book/show/63187906-darkness-me-colorful-you"
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

const nonFictionPages: FlipPage[] = [
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

const stats = [
  { value: '2', label: 'Novels Published' },
  { value: '4+', label: 'Stories & Essays' },
  { value: '6+', label: 'Years Writing' },
];

const WritingPortfolio = () => {
  return (
    <Layout>
      <div className="container mx-auto px-4 md:px-6">
        {/* Hero header */}
        <section className="pb-4 pt-12 md:pt-16">
          <div className="animate-fade-up flex items-center gap-2 text-portfolio-text/60">
            <Feather className="h-4 w-4" />
            <span className="text-xs uppercase tracking-[0.3em] sm:text-sm">
              Writing Portfolio
            </span>
          </div>

          <h1 className="animate-fade-up-delay-1 mt-6 font-display uppercase leading-[0.92] tracking-tight lg:mt-8">
            <span className="block text-[clamp(2.8rem,8vw,7rem)]">Read.</span>
            <span className="block text-[clamp(2.8rem,8vw,7rem)] italic text-portfolio-accent">
              Write.
            </span>
            <span className="block text-[clamp(2.8rem,8vw,7rem)]">Repeat.</span>
          </h1>

          <p className="animate-fade-up-delay-2 mt-6 max-w-md text-sm leading-relaxed text-portfolio-text/70 sm:text-base lg:mt-8">
            Novels, short stories, and newsletters — fiction that chases wonder,
            and non-fiction that helps PMs <span className="font-bold text-portfolio-text">dream bigger.</span>
          </p>

          <div className="animate-fade-up-delay-3 mt-8 flex flex-wrap gap-6 sm:mt-10 sm:gap-12 lg:mt-14 lg:gap-16">
            {stats.map((stat) => (
              <div key={stat.label}>
                <div className="text-2xl font-bold tracking-tight sm:text-4xl lg:text-5xl">
                  {stat.value}
                </div>
                <div className="mt-1 text-[9px] uppercase tracking-widest text-portfolio-text/50 sm:text-xs">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* The book */}
        <section className="py-16">
          <Tabs defaultValue="fiction" className="w-full max-w-4xl mx-auto">
            <TabsList className="animate-fade-up-delay-4 grid w-full max-w-md mx-auto grid-cols-2 mb-12">
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
              <FlipBook pages={fictionPages} />
            </TabsContent>

            <TabsContent value="non-fiction" className="focus-visible:outline-none mt-2">
              <FlipBook pages={nonFictionPages} />
            </TabsContent>
          </Tabs>
        </section>
      </div>
    </Layout>
  );
};

export default WritingPortfolio;
