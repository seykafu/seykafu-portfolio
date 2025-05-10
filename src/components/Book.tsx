
import React, { useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

interface BookPage {
  title: string;
  year: string;
  description: string;
  coverImage?: string;
}

interface BookProps {
  pages: BookPage[];
}

const Book = ({ pages }: BookProps) => {
  const [currentPage, setCurrentPage] = useState(0);
  const [animating, setAnimating] = useState(false);

  const goToNextPage = () => {
    if (currentPage < pages.length - 1 && !animating) {
      setAnimating(true);
      setTimeout(() => {
        setCurrentPage(currentPage + 1);
        setAnimating(false);
      }, 500);
    }
  };

  const goToPrevPage = () => {
    if (currentPage > 0 && !animating) {
      setAnimating(true);
      setTimeout(() => {
        setCurrentPage(currentPage - 1);
        setAnimating(false);
      }, 500);
    }
  };

  return (
    <div className="book w-full max-w-4xl mx-auto h-[600px] md:h-[700px] relative">
      {/* Book Cover */}
      <div className="absolute inset-0 bg-portfolio-muted rounded-lg shadow-xl overflow-hidden flex">
        <div className="w-[5%] h-full bg-portfolio-accent/20"></div>
        <div className="flex-1 flex items-center justify-center">
          <div className="p-8 w-full h-full relative">
            {/* Current Page Content */}
            <div className="flex flex-col items-center justify-center h-full text-center">
              <h2 className="font-serif text-3xl md:text-4xl font-bold mb-4">{pages[currentPage].title}</h2>
              <p className="text-portfolio-accent mb-6">{pages[currentPage].year}</p>
              
              {pages[currentPage].coverImage && (
                <div className="mb-8 max-w-[200px] mx-auto">
                  <img 
                    src={pages[currentPage].coverImage} 
                    alt={pages[currentPage].title}
                    className="w-full h-auto rounded shadow-lg"
                  />
                </div>
              )}
              
              <p className="text-lg max-w-xl mx-auto text-portfolio-text/80">
                {pages[currentPage].description}
              </p>
              
              <div className="mt-10 text-sm text-portfolio-text/60">
                Page {currentPage + 1} of {pages.length}
              </div>
            </div>
          </div>
        </div>
        <div className="w-[5%] h-full bg-portfolio-accent/20"></div>
      </div>
      
      {/* Navigation Buttons */}
      <button 
        onClick={goToPrevPage}
        disabled={currentPage === 0 || animating}
        className={`absolute left-4 top-1/2 -translate-y-1/2 w-12 h-12 flex items-center justify-center rounded-full bg-portfolio-accent/80 hover:bg-portfolio-accent transition-colors ${currentPage === 0 ? 'opacity-30 cursor-not-allowed' : 'opacity-100'}`}
      >
        <ChevronLeft size={24} className="text-white" />
      </button>
      
      <button 
        onClick={goToNextPage}
        disabled={currentPage === pages.length - 1 || animating}
        className={`absolute right-4 top-1/2 -translate-y-1/2 w-12 h-12 flex items-center justify-center rounded-full bg-portfolio-accent/80 hover:bg-portfolio-accent transition-colors ${currentPage === pages.length - 1 ? 'opacity-30 cursor-not-allowed' : 'opacity-100'}`}
      >
        <ChevronRight size={24} className="text-white" />
      </button>
    </div>
  );
};

export default Book;
