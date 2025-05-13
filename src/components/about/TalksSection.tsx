
import React from 'react';
import { Calendar } from 'lucide-react';

const TalksSection = () => {
  return (
    <section className="py-16">
      <div className="flex items-center mb-8">
        <Calendar className="text-portfolio-accent mr-3" />
        <h2 className="font-serif text-3xl font-semibold">Talks / Press / Media</h2>
      </div>
      <div className="space-y-6">
        <div className="border-l-2 border-portfolio-accent pl-6 py-2">
          <h3 className="text-xl font-bold">Three Tech Communities Launch Vancouver Tech Week</h3>
          <p className="text-portfolio-accent">Press Feature</p>
          <p className="text-portfolio-text/80 mt-2">
            Featured in Vancouver Tech Journal for helping launch Vancouver Tech Week.
          </p>
          <a 
            href="https://vantechjournal.com/p/three-tech-communities-officially-launch-vancouver-tech-week" 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-portfolio-accent hover:text-portfolio-accent-light mt-2 inline-block"
          >
            Read Article →
          </a>
        </div>
        <div className="border-l-2 border-portfolio-accent pl-6 py-2">
          <h3 className="text-xl font-bold">Future of AI Copilots for Product Managers</h3>
          <p className="text-portfolio-accent">Speaker</p>
          <p className="text-portfolio-text/80 mt-2">
            Presented on the future of AI co-pilots for product managers at a community session.
          </p>
          <a 
            href="https://www.productmanagementexercises.com/public-ai-product-management-community-sessions/future-of-ai-co-pilots-for-product-managers" 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-portfolio-accent hover:text-portfolio-accent-light mt-2 inline-block"
          >
            View Session →
          </a>
        </div>
      </div>
    </section>
  );
};

export default TalksSection;
