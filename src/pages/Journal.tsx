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

  const journalYears = [
    {
      year: "2020",
      wwwContent: [
        "Internship search went relatively well.",
        "Had lots of fun exploring Van & Richmond in Fall 2020 w/ Joe.",
        "I started a side project called Shenkii.",
        "Dieted during the summer and obtained a nice body!",
        "I finally broke up from a bad relationship.",
        "I began exercising a lot in the summer and became more fit!",
        "Began drawing anime stuff!",
        "Been getting better at cleaning.",
        "Read a lot of Manga and spent some time with Fam over the summer.",
        "Finally was able to romantically go out with someone new in the Fall~"
      ],
      wcbiContent: [
        "Mental health probably due to being so secluded by COVID.",
        "Had a few brief periods where I was moody from dieting for so long, and this cascaded to how I treated family members at home during the summer.",
        "My interviews in Fall 2020 were relatively bad. Should've prepared more!",
        "Shed lots of hair in Fall 2020, due to having itchy scalp. Need to learn how to treat my hair better.",
        "Spent lots of money over the summer.",
        "Bought TWO keyboards...and never really learned how to play at all."
      ],
      lifeContent: "I'll be turning 23 by the end of next year. I'm getting old, and I have only a few years left to truly reduce any leftover ambiguity related to my professional career goals.\n\nI want to spend 2021 in a state of constantly learning, but I also want to ensure that I'm doing things, whether that's performing tasks, working on projects, or anything else of the sort, consistently. I have a strong vision for myself in the next few years, but it's time to fall back down to Earth and begin with working on hands-on skills instead of always being in the clouds!\n\nSo for my professional life, I want to ensure that I'm developing hands-on skills as much as I am putting in effort to experiment and discover what I like and dislike. I really want to land an amazing full-time job somewhere in the realm of product management! What I do in the first half of 2021 will truly dictate my job search results.\n\nFor my personal life, it's about improving self care, my mental state, constantly learning and taking in new information & knowledge, and finally, growing with my relationship. Hopefully I'll still be in this relationship by the time I read this at the end of 2021 🙂."
    },
    {
      year: "2021",
      wwwContent: [
        "Was able to meet with old friends and made some new ones",
        "Built on my relationship with Steph",
        "Got a few job offers and accepted one from Microsoft",
        "Moved to a new city late into the year as part of my new job",
        "Had a few really strong mentors for both PM and general career advice",
        "Had a really nice internship (and summer with Steph) at Unity and made new friends from Riipen!",
        "A hardworking year full of work and earning money, as well as learning more about investments and saving money"
      ],
      wcbiContent: [
        "Shenkii went into the dust - it could've been a really cool and popular project",
        "Spent my first few months at Microsoft without as many wins as I wanted",
        "Could've gone on a solo travel trip when I had the time to clear my mind",
        "I could've done a better job improving the amount of career capital and deep work I was doing",
        "I spent a considerable amount of money over the course of the year, especially from Oct - Dec. Need to be more frugal in my spending!",
        "My health-related visits have been inconsistent. I had to push back my oral surgery even though I could've gotten it out of the way in the summer.",
        "My sleep routine was terrible and inconsistent for over half of the year. It need to get in a habit of a better sleep routine that fits well with the rest of my work routine!"
      ],
      lifeContent: "I'm no longer a developing kid who can excuse themselves from spending more time doing well in their job or improving their career capital. I'm now a grown man heading into his mid-twenties.\n\nTime flies by fast! I didn't get half of the OKRs that I set for myself done this past year, and I feel like this year was also somewhat underwhelming when it came to my work ethic, especially at Microsoft.\n\nI think for 2022, it'll be about getting my shit together and stringing together everything I've learned up until now. There's a lot going on in the world: metaverse, NFTs, blockchain technologies, crypto, COVID, health tech, climate change, and more. A lot to cause stress and anxiety - but what's important is for me to continuously build my career capital and hone my skills as a PM! Also, I have experience starting side projects, so if I ever feel like I need to develop my skills in blockchain tech again, I can definitely still do so.\n\nI've spent a lot of time consuming entertainment (like reading manga) this year, much like last year. I think I need a more moderate way of consuming so I don't lose track of being a producer when it comes to work, rather than always being a consumer.\n\nAnd finally, I need to learn how to be more relentless. Work harder. Never lose those good habits of mine. Shrug off bad habits. Continuously be a better version of myself as much as I possibly can. Let's fucking do it."
    },
    {
      year: "2022",
      wwwContent: [
        "A decent year with Microsoft, didn't get laid off, had a small promotion",
        "Saved a decent amount of money",
        "Published a book, and wrote two different novels!",
        "A great year for my relationship",
        "Spent a decent amount of time in both Van and Seattle",
        "Spent some time with friends and family",
        "Finally got my wisdom teeth taken out and got new retainers"
      ],
      wcbiContent: [
        "A continuous bad sleep routine; it haunts me every day",
        "I didn't stay in touch with so many connections and relationships I've built within the past few years… some friends in Toronto, some professors, and other friends",
        "I didn't stay in shape or stay fit consistently",
        "My diet has been pretty bad for the most part",
        "Had episodes/periods of depression occasionally, usually when I was in Seattle living alone",
        "I missed out on having a solo travel trip again this year",
        "I was terrible at tracking my career capital and deep work. I missed out on a few months, but still managed to track some of it."
      ],
      lifeContent: "2022 was a rollercoaster. I spent 99% of my time on the west coast hopping back and forth between Seattle and Vancouver. I've also been consuming content off of Reddit and YouTube non-stop, to the point where my brain craves digital content whenever I'm away from it. Probably need some detoxing work for the upcoming year.\n\n2023 Should be the year of \"narrow\" focus for seykafu. Closing out bad habits, improving work productivity, improving my health and oral, and making sure I get better sleep.\n\nIt'll also be a critical year for where I go with my career. I've gotten over a year of product management experience at Microsoft under my belt, and it'll soon be time for me to decide where I want to start climbing, and what type of experience I want the most. General PM? Big company vs smaller? Start-up? Video game production? I'll have to make use of my time properly to ensure I pick a direction that I won't regret.\n\nOverall, the past year was still pretty stable for me. Work has been an uphill battle with some success, and I've managed to learn a fair bit at Microsoft. I feel like I've grown more mature, even if it was slightly. I sought a therapist again for just the second time in my life, I successfully published my novel, and even made a very tiny name for myself? When it came to publishing my web novels online. Well, not really a name for myself, but hey, at least my English has drastically improved? 😛\n\n### Action Items for 2023\n\n- Focus on the foundations of being a productive human being, and being \"narrow focused\" - by focusing my time and effort on improving a core set of \"crafts\":\n    - Wake up at or before 8 am at least 50% of all days (183 days)\n    - Walk at least 10k steps for 100 days of the year\n    - Limit my Reddit consumption to 4 hours per week\n    - Read 10 new books, no matter the genre."
    },
    {
      year: "2024",
      monthlyEntries: [
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
      ]
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
            Personal reflections and thoughts throughout the years.
          </p>

          <div className="space-y-16">
            {journalYears.map((yearData, index) => (
              <div key={index} className="border-l-4 border-portfolio-accent pl-8">
                <h2 className="font-serif text-3xl font-bold mb-8 text-portfolio-accent">
                  {yearData.year}
                </h2>
                
                {yearData.wwwContent && (
                  <>
                    <div className="mb-8">
                      <h3 className="font-serif text-xl font-semibold mb-4 text-portfolio-text">
                        WWW (What Went Well)
                      </h3>
                      <ul className="space-y-2">
                        {yearData.wwwContent.map((item, itemIndex) => (
                          <li key={itemIndex} className="text-portfolio-text/80 leading-relaxed flex items-start">
                            <span className="text-portfolio-accent mr-2">•</span>
                            {item}
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div className="mb-8">
                      <h3 className="font-serif text-xl font-semibold mb-4 text-portfolio-text">
                        WCBI (What Could Be Improved)
                      </h3>
                      <ul className="space-y-2">
                        {yearData.wcbiContent.map((item, itemIndex) => (
                          <li key={itemIndex} className="text-portfolio-text/80 leading-relaxed flex items-start">
                            <span className="text-portfolio-accent mr-2">•</span>
                            {item}
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div className="mb-8">
                      <h3 className="font-serif text-xl font-semibold mb-4 text-portfolio-text">
                        My Life in {parseInt(yearData.year) + 1}
                      </h3>
                      <div className="text-portfolio-text/80 leading-relaxed whitespace-pre-line">
                        {yearData.lifeContent}
                      </div>
                    </div>
                  </>
                )}

                {yearData.monthlyEntries && (
                  <div className="space-y-8">
                    <h3 className="font-serif text-xl font-semibold mb-6 text-portfolio-text">
                      Monthly Reflections
                    </h3>
                    {yearData.monthlyEntries.map((entry, entryIndex) => (
                      <div key={entryIndex} className="border-l-2 border-portfolio-muted/30 pl-4">
                        <h4 className="font-serif text-lg font-medium mb-2 text-portfolio-text/90">
                          {entry.month}
                        </h4>
                        <p className="text-portfolio-text/80 leading-relaxed">
                          {entry.content}
                        </p>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>
        </section>
      </div>
    </Layout>
  );
};

export default Journal;
