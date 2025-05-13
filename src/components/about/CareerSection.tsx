
import React from 'react';
import { Briefcase } from 'lucide-react';

const CareerSection = () => {
  return (
    <section className="py-16">
      <div className="flex items-center mb-8">
        <Briefcase className="text-portfolio-accent mr-3" />
        <h2 className="font-serif text-3xl font-semibold">My Career</h2>
      </div>
      <div className="space-y-8">
        <div className="grid grid-cols-1 md:grid-cols-[200px_1fr] gap-4">
          <div className="font-medium text-portfolio-accent">2023 - 2025</div>
          <div>
            <h3 className="text-xl font-bold">Planview</h3>
            <p className="text-lg text-portfolio-text/80 mt-2">
              Led product management initiatives for enterprise portfolio management solutions, 
              helping organizations optimize their project investments and resources.
            </p>
          </div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-[200px_1fr] gap-4">
          <div className="font-medium text-portfolio-accent">2021 - 2023</div>
          <div>
            <h3 className="text-xl font-bold">Microsoft</h3>
            <p className="text-lg text-portfolio-text/80 mt-2">
              Managed cloud service products used by millions of customers worldwide, 
              focusing on enterprise solutions that improve productivity and collaboration.
            </p>
          </div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-[200px_1fr] gap-4">
          <div className="font-medium text-portfolio-accent">2021</div>
          <div>
            <h3 className="text-xl font-bold">Unity & Shenkii</h3>
            <p className="text-lg text-portfolio-text/80 mt-2">
              Worked on Unity Cloud Content Delivery as a PM and contributed to Shenkii, 
              a Japanese NFT marketplace platform.
            </p>
          </div>
        </div>
        
        <a href="/product-portfolio" className="inline-block text-portfolio-accent hover:text-portfolio-accent-light mt-4">
          View full product portfolio →
        </a>
      </div>
    </section>
  );
};

export default CareerSection;
