
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
      }, 300);
    }
  };

  const goToNextPage = () => {
    if (currentPage < totalPages - 1 && !isFlipping) {
      setDirection('next');
      setIsFlipping(true);
      
      setTimeout(() => {
        setCurrentPage((prev) => prev + 1);
        setIsFlipping(false);
      }, 300);
    }
  };

  const page = pages[currentPage];

  return (
    <div className="w-full max-w-4xl mx-auto perspective-[1500px] relative">
      <div className="book relative">
        {/* Book with spine and shadow effect */}
        <Card className={`bg-[#f3f3f3] border border-gray-300 rounded-sm overflow-hidden shadow-[5px_5px_15px_rgba(0,0,0,0.2)] transform-gpu transition-all duration-300 ease-out ${
          isFlipping 
            ? direction === 'next' 
              ? 'animate-slide-out-right opacity-80 scale-98' 
              : 'animate-slide-in-right opacity-80 scale-98'
            : 'opacity-100 scale-100'
        }`}>
          {/* Book spine */}
          <div className="absolute left-0 top-0 bottom-0 w-[12px] bg-gradient-to-r from-[#d2d0c6] to-[#f3f3f3] rounded-l-sm"></div>
          
          <div className="pl-[12px]">
            <div className="p-6 flex flex-col md:flex-row items-center gap-6">
              {/* Book Cover */}
              <div className="w-full md:w-2/5 relative rounded overflow-hidden shadow-md">
                <AspectRatio ratio={3/4} className="rounded-sm overflow-hidden">
                  <img 
                    src={page.title === "Darkness Me, Colorful You" ? 
                      "/lovable-uploads/2d08fbdc-9eba-4431-b7da-337195c6dd04.png" : 
                      page.coverImage} 
                    alt={page.title} 
                    className="object-cover w-full h-full transition-transform duration-500 hover:scale-105"
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

        {/* Enhanced Navigation Controls */}
        <div className="flex justify-between items-center mt-8 relative">
          {/* Previous Button */}
          <button 
            onClick={goToPrevPage} 
            disabled={currentPage === 0 || isFlipping}
            className={`group relative p-4 rounded-full transition-all duration-200 ${
              currentPage === 0 || isFlipping
                ? 'bg-portfolio-muted/30 text-portfolio-text/30 cursor-not-allowed'
                : 'bg-portfolio-accent/20 hover:bg-portfolio-accent text-portfolio-accent hover:text-black hover:shadow-lg hover:scale-110'
            }`}
          >
            <ArrowLeft size={24} />
            <span className="absolute -top-10 left-1/2 transform -translate-x-1/2 bg-black text-white px-2 py-1 rounded text-sm opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none">
              Previous
            </span>
          </button>

          {/* Page Indicator */}
          <div className="flex flex-col items-center space-y-2">
            <div className="text-sm text-portfolio-text/60 font-medium">
              {currentPage + 1} of {totalPages}
            </div>
            {/* Page dots */}
            <div className="flex space-x-2">
              {pages.map((_, index) => (
                <button
                  key={index}
                  onClick={() => {
                    if (!isFlipping && index !== currentPage) {
                      setDirection(index > currentPage ? 'next' : 'prev');
                      setIsFlipping(true);
                      setTimeout(() => {
                        setCurrentPage(index);
                        setIsFlipping(false);
                      }, 300);
                    }
                  }}
                  className={`w-2 h-2 rounded-full transition-all duration-200 ${
                    index === currentPage 
                      ? 'bg-portfolio-accent scale-125' 
                      : 'bg-portfolio-muted hover:bg-portfolio-accent/50 hover:scale-110'
                  }`}
                />
              ))}
            </div>
          </div>

          {/* Next Button */}
          <button 
            onClick={goToNextPage} 
            disabled={currentPage === totalPages - 1 || isFlipping}
            className={`group relative p-4 rounded-full transition-all duration-200 ${
              currentPage === totalPages - 1 || isFlipping
                ? 'bg-portfolio-muted/30 text-portfolio-text/30 cursor-not-allowed'
                : 'bg-portfolio-accent/20 hover:bg-portfolio-accent text-portfolio-accent hover:text-black hover:shadow-lg hover:scale-110'
            }`}
          >
            <ArrowRight size={24} />
            <span className="absolute -top-10 left-1/2 transform -translate-x-1/2 bg-black text-white px-2 py-1 rounded text-sm opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none">
              Next
            </span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default BookEnhanced;
