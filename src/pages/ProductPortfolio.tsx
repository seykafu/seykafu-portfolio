import React, { useEffect } from 'react';
import Layout from '../components/Layout';

interface ProductItem {
  company: string;
  year: string;
  description: string;
  image: string;
}

const ProductPortfolio = () => {
  const products: ProductItem[] = [
    {
      company: "Planview",
      year: "2023-2025",
      description: "Managing portfolio management solutions for enterprises.",
      image: "https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7"
    },
    {
      company: "Microsoft",
      year: "2021-2023",
      description: "Led product management for cloud services and enterprise solutions.",
      image: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b"
    },
    {
      company: "Unity",
      year: "2021",
      description: "Worked on Unity Cloud Content Delivery as a product manager.",
      image: "https://images.unsplash.com/photo-1614294149010-950b698f72c0"
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
      image: "https://images.unsplash.com/photo-1639322537504-6427a16b0a28"
    },
    {
      company: "Veeva Systems",
      year: "2020",
      description: "Developed cloud-based software for life sciences industry.",
      image: "https://images.unsplash.com/photo-1532938911079-1b06ac7ceec7"
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
                    <div className="absolute inset-0 bg-portfolio-accent/20 group-hover:bg-portfolio-accent/10 transition-colors rounded-lg"></div>
                    <img 
                      src={product.image} 
                      alt={product.company} 
                      className="w-full h-48 md:h-60 object-cover rounded-lg"
                    />
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
