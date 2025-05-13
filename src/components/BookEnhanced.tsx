
import React, { useState } from 'react';
import { AspectRatio } from "@/components/ui/aspect-ratio";
import { ArrowLeft, ArrowRight } from 'lucide-react';
import { Card } from "@/components/ui/card";

type Page = {
  title: string;
  year: string;
  description: string;
  coverImage: string;
  link: string;
  featured?: boolean;
};

interface BookProps {
  pages: Page[];
}

const BookEnhanced = ({ pages }: BookProps) => {
  const [currentPage, setCurrentPage] = useState(0);
  const [isFlipping, setIsFlipping] = useState(false);
  const [direction, setDirection] = useState<'next' | 'prev'>('next');
  const totalPages = pages.length;

  const goToPrevPage = () => {
    if (currentPage > 0 && !isFlipping) {
      setDirection('prev');
      setIsFlipping(true);
      
      setTimeout(() => {
        setCurrentPage((prev) => prev - 1);
        setIsFlipping(false);
      }, 500); // Match this with the CSS animation duration
    }
  };

  const goToNextPage = () => {
    if (currentPage < totalPages - 1 && !isFlipping) {
      setDirection('next');
      setIsFlipping(true);
      
      setTimeout(() => {
        setCurrentPage((prev) => prev + 1);
        setIsFlipping(false);
      }, 500); // Match this with the CSS animation duration
    }
  };

  const page = pages[currentPage];

  return (
    <div className="w-full max-w-4xl mx-auto perspective-[1500px]">
      <div className="book relative">
        {/* Book with spine and shadow effect */}
        <Card className={`bg-[#f3f3f3] border border-gray-300 rounded-sm overflow-hidden shadow-[5px_5px_15px_rgba(0,0,0,0.2)] transform-gpu ${isFlipping ? direction === 'next' ? 'animate-page-flip-right' : 'animate-page-flip-left' : ''}`}>
          {/* Book spine */}
          <div className="absolute left-0 top-0 bottom-0 w-[12px] bg-gradient-to-r from-[#d2d0c6] to-[#f3f3f3] rounded-l-sm"></div>
          
          <div className="pl-[12px]"> {/* Add padding to account for the spine */}
            <div className="p-6 flex flex-col md:flex-row items-center gap-6">
              {/* Book Cover */}
              <div className="w-full md:w-2/5 relative rounded overflow-hidden shadow-md">
                <AspectRatio ratio={3/4} className="rounded-sm overflow-hidden">
                  <img 
                    src={page.title === "Darkness Me, Colorful You" ? 
                      "/lovable-uploads/2d08fbdc-9eba-4431-b7da-337195c6dd04.png" : 
                      page.coverImage} 
                    alt={page.title} 
                    className="object-cover w-full h-full"
                  />
                </AspectRatio>
              </div>

              {/* Book Content - Paper-like background */}
              <div className="w-full md:w-3/5 space-y-4 p-6 bg-[#f8f7f2] border border-gray-200 rounded-sm shadow-inner text-[#222]">
                <h3 className="text-2xl font-serif font-bold text-[#222]">{page.title}</h3>
                <p className="text-sm text-[#666]">{page.year}</p>
                <p className="text-[#333] leading-relaxed">{page.description}</p>
                <a 
                  href={page.link} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="inline-block mt-4 px-4 py-2 bg-portfolio-accent text-black rounded-md hover:bg-portfolio-accent-light transition-colors"
                >
                  Learn More
                </a>
              </div>
            </div>
          </div>
        </Card>

        {/* Navigation Controls */}
        <div className="flex justify-between items-center mt-8">
          <button 
            onClick={goToPrevPage} 
            disabled={currentPage === 0 || isFlipping}
            className="p-2 bg-portfolio-muted rounded-full hover:bg-portfolio-accent/20 transition-colors disabled:opacity-30 disabled:cursor-not-allowed"
          >
            <ArrowLeft size={24} />
          </button>
          <div className="text-sm text-portfolio-text/60">
            {currentPage + 1} of {totalPages}
          </div>
          <button 
            onClick={goToNextPage} 
            disabled={currentPage === totalPages - 1 || isFlipping}
            className="p-2 bg-portfolio-muted rounded-full hover:bg-portfolio-accent/20 transition-colors disabled:opacity-30 disabled:cursor-not-allowed"
          >
            <ArrowRight size={24} />
          </button>
        </div>
      </div>
    </div>
  );
};

export default BookEnhanced;
