import React from 'react';
import Layout from '../components/Layout';
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Briefcase, Rocket } from 'lucide-react';

interface ProductItem {
  company: string;
  year: string;
  description: string;
  image: string;
  video?: string;
  link?: string;
  linkLabel?: string;
}

const workProducts: ProductItem[] = [
  {
    company: "Disco",
    year: "2026",
    description: "Product Manager at Disco, the AI-first social learning platform powering cohort-based programs, academies, and professional communities worldwide. Built AI-native learning experiences, from AI agents and curriculum generation to community and learning operations.",
    image: "/lovable-uploads/disco-platform.webp",
    link: "https://www.disco.co/"
  },
  {
    company: "Unbounce",
    year: "2025-2026",
    description: "The Lead PM for Insightly CRM and Insightly AI Copilot, scaling growth from 10k mid-market and small business users to 100k.",
    image: "/lovable-uploads/72c58629-f443-42c4-9487-b1aec188fa27.png"
  },
  {
    company: "Planview",
    year: "2023-2025",
    description: "The Lead PM for Planview's AI Assistant, Planview Copilot, growing the product from 0 to 1. Grew adoption from 0 to 110 customers and 0 to 1200 prompts per month.",
    image: "https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7",
    video: '<iframe src="https://www.linkedin.com/embed/feed/update/urn:li:ugcPost:7326020067362492417?compact=1" height="399" width="100%" frameborder="0" allowfullscreen="" title="Embedded post"></iframe>'
  },
  {
    company: "Microsoft",
    year: "2021-2023",
    description: "Improved Bing clickshare rate by 4% from 2023 to 2024 as the product manager in Bing's Web Data Platform team, shipping ML models to improve Bing Search results and caption accuracy.",
    image: "/lovable-uploads/cbcb4d24-3b85-4d2a-b9a5-20f86cda7c7b.png"
  },
  {
    company: "Unity",
    year: "2021",
    description: "Worked on Unity Cloud Content Delivery as a product manager.",
    image: "/lovable-uploads/2fbc7641-38fc-4781-99cc-14824eaef1be.png"
  },
  {
    company: "Shenkii",
    year: "2021",
    description: "Product manager for a Japanese NFT marketplace platform.",
    image: "https://images.unsplash.com/photo-1592478411213-6153e4ebc07d"
  },
  {
    company: "CertiK",
    year: "2020",
    description: "Worked on blockchain security solutions and audit tools.",
    image: "/lovable-uploads/03c05719-feca-4156-bfb5-7a7d53903d0d.png"
  },
  {
    company: "Veeva Systems",
    year: "2020",
    description: "Developed cloud-based software for life sciences industry.",
    image: "/lovable-uploads/6d4375c7-cb88-451c-ad60-6b8856ff87cb.png"
  },
  {
    company: "SAP",
    year: "2019",
    description: "Managed enterprise resource planning software for global clients.",
    image: "https://images.unsplash.com/photo-1599658880436-c61792e70672"
  },
  {
    company: "BlackBerry Messenger",
    year: "2018",
    description: "Led product initiatives for enterprise security software solutions.",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f"
  },
  {
    company: "Qidni Labs",
    year: "2017",
    description: "Contributed to the development of innovative medical devices for kidney disease treatment.",
    image: "https://images.unsplash.com/photo-1576091160550-2173dba999ef"
  }
];

const personalProducts: ProductItem[] = [
  {
    company: "Pencat",
    year: "Live",
    description: "Pencat creates personalized hardcover storybooks starring your child as the main character. Share a few details, and Pencat's authors and AI studio craft an original illustrated story, printed and shipped within about a week.",
    image: "https://www.pencat.com/pencat-logo.png",
    link: "https://pencat.com",
    linkLabel: "Visit Pencat →"
  },
  {
    company: "Pencat Games",
    year: "Live",
    description: "Pencat Games is my storytelling games publisher, the home for narrative-first titles like Ravage, a tactical RPG, and Khione, a cozy island adventure starring a little cat. Every release starts with a story worth telling and builds the play around it.",
    image: "/lovable-uploads/pencat-games.png",
    link: "https://pencatgames.com",
    linkLabel: "Visit Pencat Games →"
  },
  {
    company: "Ravage",
    year: "Live",
    description: "Ravage is a browser-based tactical RPG published under Pencat Games that interweaves strategic combat with a visual-novel narrative, with twenty-one characters, a thirty-battle campaign, and seven distinct endings shaped by your tactical choices.",
    image: "/lovable-uploads/ravage-cover.webp",
    link: "https://ravage.game",
    linkLabel: "Play Ravage →"
  },
  {
    company: "Trial & Error",
    year: "Live",
    description: "Trial & Error is my travel blog, a travel journal of happy accidents. It skips the polished tourist narrative in favour of the wrong turns and happy accidents that make a trip memorable, distilled into curated city guides across 24 cities in 10 countries, each with our top 5 eats, top 5 local experiences, and top 5 places for photos.",
    image: "/lovable-uploads/trial-error-blog.png",
    link: "https://trialerror.blog",
    linkLabel: "Visit Trial & Error →"
  },
  {
    company: "Indie Games",
    year: "2021-2024",
    description: "I've developed or produced indie games before! I've developed a visual novel game that leverages AI for character conversations, and produced a 3D maze-runner survival game based on Unreal Engine.",
    image: "https://images.unsplash.com/photo-1511512578047-dfb367046420",
    link: "https://seykafu.itch.io/",
    linkLabel: "View games →"
  }
];

const ProductList = ({ products }: { products: ProductItem[] }) => (
  <div className="space-y-16">
    {products.map((product, index) => (
      <div
        key={index}
        className="animate-fade-up grid grid-cols-1 md:grid-cols-2 gap-8 items-center"
        style={{ animationDelay: `${index * 80}ms` }}
      >
        <div className={`${index % 2 === 0 ? 'order-1' : 'order-1 md:order-2'}`}>
          <div className="relative group">
            {product.video ? (
              <div className="w-full" dangerouslySetInnerHTML={{ __html: product.video }} />
            ) : product.link ? (
              <a
                href={product.link}
                target="_blank"
                rel="noopener noreferrer"
                className="block aspect-[16/10] overflow-hidden rounded-lg bg-portfolio-muted/30"
              >
                <img
                  src={product.image}
                  alt={product.company}
                  className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-[1.03]"
                />
              </a>
            ) : (
              <div className="aspect-[16/10] overflow-hidden rounded-lg bg-portfolio-muted/30">
                <img
                  src={product.image}
                  alt={product.company}
                  className="h-full w-full object-cover"
                />
              </div>
            )}
          </div>
        </div>
        <div className={`${index % 2 === 0 ? 'order-2' : 'order-2 md:order-1'}`}>
          <div className="space-y-3">
            <h3 className="font-serif text-3xl font-bold">{product.company}</h3>
            <p className="text-portfolio-accent">{product.year}</p>
            <p className="text-lg text-portfolio-text/80">{product.description}</p>
            {product.link && (
              <a
                href={product.link}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block text-portfolio-accent hover:text-portfolio-accent-light mt-2"
              >
                {product.linkLabel ?? 'Learn more →'}
              </a>
            )}
          </div>
        </div>
      </div>
    ))}
  </div>
);

const ProductPortfolio = () => {
  return (
    <Layout>
      <div className="container mx-auto px-4 md:px-6">
        <section className="py-16">
          <h1 className="font-serif text-4xl md:text-5xl font-bold mb-6">Product Portfolio</h1>
          <p className="text-lg text-portfolio-text/80 max-w-3xl mb-10">
            Throughout my career, I've had the privilege of working at innovative companies
            across various industries, from enterprise software to gaming, blockchain, and beyond.
          </p>

          <Tabs defaultValue="work" className="w-full">
            <TabsList className="grid w-full max-w-md grid-cols-2 mb-12">
              <TabsTrigger value="work" className="flex items-center gap-2">
                <Briefcase className="h-4 w-4" />
                <span>Work</span>
              </TabsTrigger>
              <TabsTrigger value="personal" className="flex items-center gap-2">
                <Rocket className="h-4 w-4" />
                <span>Personal</span>
              </TabsTrigger>
            </TabsList>

            <TabsContent value="work" className="focus-visible:outline-none">
              <ProductList products={workProducts} />
            </TabsContent>

            <TabsContent value="personal" className="focus-visible:outline-none">
              <p className="animate-fade-up text-lg text-portfolio-text/80 max-w-3xl mb-10">
                Products I've built and shipped on my own time. Side projects turned into real things people use.
              </p>
              <ProductList products={personalProducts} />
              <a
                href="https://seykafu.notion.site/Seykafu-a8fda5021a274d82af74341b9a4a9f2e"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block text-portfolio-accent hover:text-portfolio-accent-light mt-16"
              >
                View more side projects →
              </a>
            </TabsContent>
          </Tabs>
        </section>
      </div>
    </Layout>
  );
};

export default ProductPortfolio;
