
import React, { useState } from 'react';
import { ChevronLeft, ChevronRight, ExternalLink } from 'lucide-react';

interface BookPage {
  title: string;
  year: string;
  description: string;
  coverImage?: string;
  link?: string;
}

interface BookProps {
  pages: BookPage[];
}

const Book = ({ pages }: BookProps) => {
  const [currentPage, setCurrentPage] = useState(0);
  const [isFlipping, setIsFlipping] = useState(false);
  const [direction, setDirection] = useState<'next' | 'prev'>('next');

  const goToNextPage = () => {
    if (currentPage < pages.length - 1 && !isFlipping) {
      setDirection('next');
      setIsFlipping(true);
      
      // Wait for animation to complete before changing page
      setTimeout(() => {
        setCurrentPage(currentPage + 1);
        setIsFlipping(false);
      }, 600);
    }
  };

  const goToPrevPage = () => {
    if (currentPage > 0 && !isFlipping) {
      setDirection('prev');
      setIsFlipping(true);
      
      setTimeout(() => {
        setCurrentPage(currentPage - 1);
        setIsFlipping(false);
      }, 600);
    }
  };

  return (
    <div className="book w-full max-w-4xl mx-auto h-[600px] md:h-[700px] relative">
      {/* Book Cover */}
      <div className="absolute inset-0 bg-portfolio-muted rounded-lg shadow-xl overflow-hidden flex">
        {/* Book Spine */}
        <div className="w-[5%] h-full bg-portfolio-accent/20"></div>
        
        {/* Book Content Area */}
        <div className="flex-1 flex items-center justify-center">
          <div className="p-8 w-full h-full relative perspective-[1500px]">
            {/* Current Page */}
            <div 
              className={`page absolute inset-0 ${isFlipping ? 'turn' : ''}`}
              style={{
                transformOrigin: direction === 'next' ? 'left center' : 'right center',
                transition: 'transform 0.6s cubic-bezier(0.645, 0.045, 0.355, 1)',
                backfaceVisibility: 'hidden'
              }}
            >
              <div className="page-front absolute inset-0 bg-[#f5f5dc]/10 p-8 flex flex-col items-center justify-center">
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
                  
                  <p className="text-lg max-w-xl mx-auto text-portfolio-text/80 mb-6">
                    {pages[currentPage].description}
                  </p>
                  
                  {pages[currentPage].link && (
                    <a 
                      href={pages[currentPage].link} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 text-portfolio-accent hover:text-portfolio-accent-light transition-colors mb-6"
                    >
                      View Project <ExternalLink size={16} />
                    </a>
                  )}
                  
                  <div className="mt-4 text-sm text-portfolio-text/60">
                    Page {currentPage + 1} of {pages.length}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        <div className="w-[5%] h-full bg-portfolio-accent/20"></div>
      </div>
      
      {/* Page Corner Effect */}
      <div className="absolute bottom-4 right-16 w-16 h-16 bg-portfolio-accent/5 rounded-bl-lg transform rotate-45 shadow-inner"></div>
      
      {/* Navigation Buttons */}
      <button 
        onClick={goToPrevPage}
        disabled={currentPage === 0 || isFlipping}
        className={`absolute left-4 top-1/2 -translate-y-1/2 w-12 h-12 flex items-center justify-center rounded-full bg-portfolio-accent/80 hover:bg-portfolio-accent transition-colors ${currentPage === 0 ? 'opacity-30 cursor-not-allowed' : 'opacity-100'}`}
        aria-label="Previous page"
      >
        <ChevronLeft size={24} className="text-white" />
      </button>
      
      <button 
        onClick={goToNextPage}
        disabled={currentPage === pages.length - 1 || isFlipping}
        className={`absolute right-4 top-1/2 -translate-y-1/2 w-12 h-12 flex items-center justify-center rounded-full bg-portfolio-accent/80 hover:bg-portfolio-accent transition-colors ${currentPage === pages.length - 1 ? 'opacity-30 cursor-not-allowed' : 'opacity-100'}`}
        aria-label="Next page"
      >
        <ChevronRight size={24} className="text-white" />
      </button>
    </div>
  );
};

export default Book;
