
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
          <div className="font-medium text-portfolio-accent">2017 - 2021</div>
          <div>
            <h3 className="text-xl font-bold">Various Internships</h3>
            <p className="text-lg text-portfolio-text/80 mt-2">
              I interned at various companies including Unity, Veeva Systems, SAP, LoyaltyOne, BlackBerry, and Qidni Labs.
            </p>
          </div>
        </div>
        
        <a href="https://seykafu.notion.site/Seykafu-a8fda5021a274d82af74341b9a4a9f2e" className="inline-block text-portfolio-accent hover:text-portfolio-accent-light mt-4" target="_blank" rel="noopener noreferrer">
          View my side projects →
        </a>
      </div>
    </section>
  );
};

export default CareerSection;
