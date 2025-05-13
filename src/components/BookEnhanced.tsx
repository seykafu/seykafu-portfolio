
import React, { useState } from 'react';
import { AspectRatio } from "@/components/ui/aspect-ratio";
import { ArrowLeft, ArrowRight } from 'lucide-react';

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
  const totalPages = pages.length;

  const goToPrevPage = () => {
    setCurrentPage((prev) => (prev > 0 ? prev - 1 : prev));
  };

  const goToNextPage = () => {
    setCurrentPage((prev) => (prev < totalPages - 1 ? prev + 1 : prev));
  };

  const page = pages[currentPage];
  const isFeatured = page.featured;

  return (
    <div className="w-full max-w-4xl mx-auto">
      <div className="book bg-portfolio-muted p-6 rounded-lg shadow-lg">
        <div className="flex flex-col md:flex-row items-center gap-6">
          {/* Book Cover - Make it bigger if featured */}
          <div className={`${isFeatured ? 'w-full md:w-1/2' : 'w-full md:w-2/5'}`}>
            <AspectRatio ratio={3/4} className="rounded-md overflow-hidden">
              <img 
                src={page.coverImage} 
                alt={page.title} 
                className={`object-cover w-full h-full transition-all ${isFeatured ? 'scale-105' : ''}`}
              />
            </AspectRatio>
          </div>

          {/* Book Details */}
          <div className={`${isFeatured ? 'w-full md:w-1/2' : 'w-full md:w-3/5'} space-y-4`}>
            <h3 className="text-2xl font-serif font-bold">{page.title}</h3>
            <p className="text-sm text-portfolio-text/60">{page.year}</p>
            <p className="text-portfolio-text/80">{page.description}</p>
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

        {/* Navigation Controls */}
        <div className="flex justify-between items-center mt-8">
          <button 
            onClick={goToPrevPage} 
            disabled={currentPage === 0}
            className="p-2 bg-portfolio-muted rounded-full hover:bg-portfolio-accent/20 transition-colors disabled:opacity-30 disabled:cursor-not-allowed"
          >
            <ArrowLeft size={24} />
          </button>
          <div className="text-sm text-portfolio-text/60">
            {currentPage + 1} of {totalPages}
          </div>
          <button 
            onClick={goToNextPage} 
            disabled={currentPage === totalPages - 1}
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
