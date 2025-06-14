
import React, { useState } from 'react';
import Layout from '../components/Layout';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';

const Journal = () => {
  const [password, setPassword] = useState('');
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [error, setError] = useState('');

  const handlePasswordSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (password === 'khionecutie') {
      setIsAuthenticated(true);
      setError('');
    } else {
      setError('Incorrect password. Please try again.');
    }
  };

  const journalEntries = [
    {
      month: "January 2024",
      content: "Starting the year with renewed energy and focus. Working on exciting new product initiatives at Planview and continuing to build meaningful connections in the PM community. The winter months always give me time to reflect and plan for the months ahead."
    },
    {
      month: "February 2024",
      content: "February has been all about deep work and strategic planning. Spent considerable time refining our AI assistant roadmap and engaging with customers to understand their evolving needs. Also been enjoying some creative writing in the evenings."
    },
    {
      month: "March 2024",
      content: "Spring is here and with it comes new opportunities. Been exploring some exciting side projects and continuing to grow the PM Hive community. The energy of this season always inspires me to think bigger and bolder."
    },
    {
      month: "April 2024",
      content: "April brought some significant milestones in our product development. Seeing user adoption grow has been incredibly rewarding. Also spent time traveling and gathering inspiration from different cultures and perspectives."
    },
    {
      month: "May 2024",
      content: "Mid-year reflections are setting in. The balance between work, creativity, and personal growth continues to be a central theme. Been diving deeper into some indie game development projects that combine my love for storytelling and technology."
    },
    {
      month: "June 2024",
      content: "Summer vibes and increased productivity. The longer days give me more energy to tackle complex problems and explore new ideas. Community work has been particularly fulfilling this month, connecting with fellow product managers and sharing insights."
    },
    {
      month: "July 2024",
      content: "July has been about pushing boundaries and exploring new territories. Both literally through travel and figuratively through product innovation. The indie game projects are gaining momentum and teaching me new aspects of user experience design."
    },
    {
      month: "August 2024",
      content: "Late summer brings a sense of accomplishment. Looking back at the year so far, there's been substantial growth both professionally and personally. The chaos-over-laziness principle continues to serve me well in navigating complex challenges."
    },
    {
      month: "September 2024",
      content: "September always feels like a fresh start. Back to focused work after summer adventures. The product metrics are looking strong, and the team dynamics continue to improve. Been spending more time on creative writing and exploring new storytelling formats."
    },
    {
      month: "October 2024",
      content: "Fall energy brings clarity and focus. Working on some exciting new features that could significantly impact user experience. The seasonal change always reminds me to embrace growth mindset and stay curious about emerging trends."
    },
    {
      month: "November 2024",
      content: "Gratitude month has me reflecting on the incredible journey this year has been. The community-centric approach continues to open doors and create meaningful connections. Planning for the final sprint of the year while maintaining balance."
    },
    {
      month: "December 2024",
      content: "Wrapping up an incredible year of growth, challenges, and discoveries. The product launches exceeded expectations, and the personal projects have evolved in unexpected directions. Looking forward to what the new year will bring while staying grounded in the present moment."
    }
  ];

  if (!isAuthenticated) {
    return (
      <Layout>
        <div className="container mx-auto px-4 md:px-6 min-h-screen flex items-center justify-center">
          <div className="max-w-md w-full">
            <h1 className="font-serif text-4xl font-bold mb-6 text-center">My Journal</h1>
            <p className="text-portfolio-text/80 mb-6 text-center">
              This is a private space. Please enter the password to continue.
            </p>
            <form onSubmit={handlePasswordSubmit} className="space-y-4">
              <Input
                type="password"
                placeholder="Enter password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full"
              />
              {error && (
                <p className="text-red-500 text-sm">{error}</p>
              )}
              <Button type="submit" className="w-full bg-portfolio-accent hover:bg-portfolio-accent/90">
                Access Journal
              </Button>
            </form>
          </div>
        </div>
      </Layout>
    );
  }

  return (
    <Layout>
      <div className="container mx-auto px-4 md:px-6">
        <section className="py-16">
          <h1 className="font-serif text-4xl md:text-5xl font-bold mb-6">My Journal</h1>
          <p className="text-lg text-portfolio-text/80 max-w-3xl mb-12">
            Personal reflections and thoughts throughout 2024.
          </p>

          <div className="space-y-12">
            {journalEntries.map((entry, index) => (
              <div key={index} className="border-l-4 border-portfolio-accent pl-6">
                <h2 className="font-serif text-2xl font-semibold mb-3 text-portfolio-accent">
                  {entry.month}
                </h2>
                <p className="text-lg text-portfolio-text/80 leading-relaxed">
                  {entry.content}
                </p>
              </div>
            ))}
          </div>
        </section>
      </div>
    </Layout>
  );
};

export default Journal;
