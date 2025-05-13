
import React, { useEffect } from 'react';
import Layout from '../components/Layout';

interface ProductItem {
  company: string;
  year: string;
  description: string;
  image: string;
  video?: string;
}

const ProductPortfolio = () => {
  const products: ProductItem[] = [
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
      description: "Product manager in Bing's Web Data Platform team, shipping ML models to improve Bing search results and captions.",
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
      company: "Avoy",
      year: "2020",
      description: "Built travel technology solutions for modern travelers.",
      image: "https://images.unsplash.com/photo-1436491865332-7a61a109cc05"
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
      company: "BlackBerry",
      year: "2018",
      description: "Led product initiatives for enterprise security software solutions.",
      image: "https://images.unsplash.com/photo-1611174475383-7665406065b3"
    },
    {
      company: "Qidni Labs",
      year: "2017",
      description: "Contributed to the development of innovative medical devices for kidney disease treatment.",
      image: "https://images.unsplash.com/photo-1576091160550-2173dba999ef"
    }
  ];

  useEffect(() => {
    // Animation for product items
    const items = document.querySelectorAll('.product-item');
    items.forEach((item, index) => {
      const element = item as HTMLElement;
      element.style.opacity = '0';
      element.style.transform = 'translateY(20px)';
      
      setTimeout(() => {
        element.style.transition = 'all 0.5s ease-out';
        element.style.opacity = '1';
        element.style.transform = 'translateY(0)';
      }, 100 * (index + 1));
    });
  }, []);

  return (
    <Layout>
      <div className="container mx-auto px-4 md:px-6">
        <section className="py-16">
          <h1 className="font-serif text-4xl md:text-5xl font-bold mb-6">Product Portfolio</h1>
          <p className="text-lg text-portfolio-text/80 max-w-3xl mb-12">
            Throughout my career, I've had the privilege of working at innovative companies 
            across various industries, from enterprise software to gaming, blockchain, and beyond.
          </p>

          <div className="space-y-16">
            {products.map((product, index) => (
              <div key={index} className="product-item grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
                <div className={`${index % 2 === 0 ? 'order-1' : 'order-1 md:order-2'}`}>
                  <div className="relative group">
                    {product.video ? (
                      <div className="w-full" dangerouslySetInnerHTML={{ __html: product.video }} />
                    ) : (
                      <>
                        <div className="absolute inset-0 bg-portfolio-accent/20 group-hover:bg-portfolio-accent/10 transition-colors rounded-lg"></div>
                        <img 
                          src={product.image} 
                          alt={product.company} 
                          className="w-full h-48 md:h-60 object-cover rounded-lg"
                        />
                      </>
                    )}
                  </div>
                </div>
                <div className={`${index % 2 === 0 ? 'order-2' : 'order-2 md:order-1'}`}>
                  <div className="space-y-3">
                    <h2 className="font-serif text-3xl font-bold">{product.company}</h2>
                    <p className="text-portfolio-accent">{product.year}</p>
                    <p className="text-lg text-portfolio-text/80">{product.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>
      </div>
    </Layout>
  );
};

export default ProductPortfolio;
