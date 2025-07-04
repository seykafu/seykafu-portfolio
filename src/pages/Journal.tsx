
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
      lifeContent: "2022 was a rollercoaster. I spent 99% of my time on the west coast hopping back and forth between Seattle and Vancouver. I've also been consuming content off of Reddit and YouTube non-stop, to the point where my brain craves digital content whenever I'm away from it. Probably need some detoxing work for the upcoming year.\n\n2023 Should be the year of \"narrow\" focus for seykafu. Closing out bad habits, improving work productivity, improving my health and oral, and making sure I get better sleep.\n\nIt'll also be a critical year for where I go with my career. I've gotten over a year of product management experience at Microsoft under my belt, and it'll soon be time for me to decide where I want to start climbing, and what type of experience I want the most. General PM? Big company vs smaller? Start-up? Video game production? I'll have to make use of my time properly to ensure I pick a direction that I won't regret.\n\nOverall, the past year was still pretty stable for me. Work has been an uphill battle with some success, and I've managed to learn a fair bit at Microsoft. I feel like I've grown more mature, even if it was slightly. I sought a therapist again for just the second time in my life, I successfully published my novel, and even made a very tiny name for myself? When it came to publishing my web novels online. Well, not really a name for myself, but hey, at least my English has drastically improved? 😛\n\nAction Items for 2023\n\n- Focus on the foundations of being a productive human being, and being \"narrow focused\" - by focusing my time and effort on improving a core set of \"crafts\":\n    - Wake up at or before 8 am at least 50% of all days (183 days)\n    - Walk at least 10k steps for 100 days of the year\n    - Limit my Reddit consumption to 4 hours per week\n    - Read 10 new books, no matter the genre."
    },
    {
      year: "2023",
      wwwContent: [
        "Bought a new cat, I am a cat owner! Learned a lot about how to raise a kitty.",
        "Joined a bunch of new tech communities in Van, and even became a co-founder of one!",
        "Gave my first public presentation/speech at a tech conference!",
        "Moved back from Seattle to Vancouver, and I think my mental health has gotten a little better",
        "Stocks & wealth has been rising",
        "Got a new job fairly quickly after deciding to go job-hunting, and so far, liking it more than Microsoft!",
        "Finally got to visit Japan not once, but twice!",
        "Continued growing my Medium blog and made some money",
        "Got a side gig at Honeyfeed and made some money",
        "Near latter end of the year, I started getting better with my sleep schedule"
      ],
      wcbiContent: [
        "I'm still kinda addicted to Reddit and a little bit of YouTube; I spend a little bit too long on my phone per day",
        "My relationship with Steph internally deteriorated, and I ended up hurting her at the end (asked for a break on new years day). I have some commitment and trust issues to work on.",
        "Spent too much time playing video games (Fire Emblem and Zelda)",
        "I didn't get a lot of fiction writing done even though I started on a few stories",
        "I didn't end up focusing on a core craft - I dived into a multitude of things to explore (VNs, a bit of coding, writing, game production, etc.)",
        "While I did earn a lot, I didn't save as much as I should've"
      ],
      lifeContent: "I think 2023 was more of a whirlwind than 2022, but hey, I keep saying that about every year. There's probably a bit of recency bias. But man! I got fucking pierced, moved back to Vancouver for a new job, participated in an indie game team, and spent waaaay to many hours playing Zelda. I also made two trips to Japan - fucking hell. I also made my first trip to NYC, and made two trips back to Toronto (one was for an ETH hackathon, wow.). Fun travels!\n\nNeedless to say, life treated me both well and poorly. I was poor in tracking my career capital again, but I think my job-change (and gaining the subsequent new responsibilities that an actual PM should have) made up for it. Well, so far it has, but let's see how I fair under my new boss.\n\nLet's see, what else? Well, besides working on an indie game, I even made my own fucking Visual Novel with some AI added into it. I'm proud of my work! I know I went all over the place again this year instead of focusing on a core craft, but I guess if I were to come up with an excuse, it's that my 20s are the time to really explore and touch as many things as I can. I'm that type of fucking guy, after all.\n\nLooking back, what made this year stand out to me the most were my trips to Japan, my interest in game production, my stocks going to the moon, my decision to come back to Van, and my new earrings. But look, every year, I say I'm going to build this craft, that craft, make myself rich by 30, become a CEO one day, become famous, world-known, blah blah blah…\n\nWell, I still have big dreams for myself. I always will. But I think for 2024, pragmatically speaking, I have to start prioritizing things to make proper time for the things I care about the most. I feel like I have some leeway in exploring, but soon (I'm going to be 30 in a blink of an eye!), that shit won't last.\n\nAction Items for 2024\n\n- There's more to life when I open up my heart, live to my true values, and stick to my morals.\n- Talk shit, get hit. Fuck around, I turn into a clown.\n- Prioritize just a little bit more than I did in 2023. Keep growing that product management career, but start focusing my industry knowledge in a certain direction. AI? Games? Who knows, but this is where passion has its way.\n- I'm okay at writing. I have to convince myself that I have the power to get better. I have high potential… I think. So let's keep writing.\n- Exercise. Exercise. Exercise! Fuck me, I really need a routine.\n- Startups! Community! AI! Product! Money! Writing! 😽\n- Figure out what to do with my relationship. Do I save it or is it time to break hearts one more time?"
    },
    {
      year: "2024",
      wwwContent: [
        "Bought a new cat again after losing Rhea, her name is Khione! I love her <3",
        "Bought a new apartment with the help of family! I moved in and have finally established my home base, and I love this place.",
        "Made a bunch of new friends in Vancouver thanks to my social gatherings, community-building, and more! Especially some close ones, like Sarim and Toki.",
        "Traveled a lot! Went to SF, MTL, Amsterdam, UK, NYC, Yale, Japan, Toronto, and Van Island (Tofino)!",
        "Started dating again after breaking up with Steph, and have been enjoying the relationship outside the poly stuff!",
        "I worked out more than I did last year!",
        "Re-contributed to my TFSA and my RRSP!",
        "Started cooking and baking more again! And started writing & registered to publish my new non-fiction book idea!",
        "Broke up with Steph in a healthy way",
        "Ran Vancouver Tech Week and improved my public awareness, PR, and my public-speaking skills",
        "Grew my PM community (PM Hive) to a big well-known brand in Vancouver!"
      ],
      wcbiContent: [
        "Didn't do enough writing at all, need to get better at building writing habits!",
        "Somewhat recklessly got into a new relationship despite knowing it's poly. Had a lot of negative feelings to manage, and a lot of anxiety that came with it.",
        "Not enough training and support to improve my back! Need to get back into the exercises and physio!",
        "Managing my productivity and career capital for work has been challenging due to my online addictions and the new relationship (even texting a lot during work…)",
        "Didn't save as much due to my food/unhealthy spending habits, even despite the fact that my mortgage isn't too bad",
        "My lower back pain has returned in a big wave, and now it seems to be permanent, and my physio training has been inconsistent",
        "My technical skills somewhat dwindled due to my lack of focus on technical software related education."
      ],
      lifeContent: "I don't even know where to begin.\n\nSOOO much has happened this year, it's been absolutely crazy. As mentioned last time, I make a joke about how every year feels more hectic than the previous, but I can assure myself that this past year was absolutely a whirlwind and a half, and there is NO RECENCY BIAS whatsoever. Crazy.\n\nSo yeah - A full year in Vancouver, where I grew in my job, did a whole ass week of tech events called Vancouver Tech Week with Toki, grew my PM community called PM Hive, and made so many new friends and even a few romantic interests.\n\nThe year also flew by like a fucking speedboat, dragging me on from behind while I hung onto the rope for dear life.\n\nSo first of all, the first half of 2024 was a little bit more calm. I traveled to SF and the UK which was fun, and also went to Japan with Tiger, Jack, Jimmy, and Jessie - such beautiful memories. A few other highlights include driving to Harrison Hotsprings resort with Steph (when we were still together) for her birthday, and trying to fix the relationship. It ultimately wasn't salvageable, but I'm glad I gave it a try incase I had regrets.\n\nThe second half was when the world was turning like there was no tomorrow. I met Gabriela soon after my breakup with Steph, started going on dating apps, and started experiencing a type of anxiety/stress/bundle of negative feelings from her being poly that I've never experienced before in my life. It was a hell of an experience to process. Moreover, PM Hive grew well, and work was somewhat stressful, but Vancouver Tech Week back in September was a hell of an experience in and of itself.\n\nNear the end of the year (last few months) I started hosting and attending parties/gatherings. Honestly, that's another part of my year where I don't know where to start - I never knew I had it in me to manage these events, but next thing you know, there I was, hosting party/event after party/event and having a fun time meeting new friends/bonding with old friends. kept in touch with some of my closest friends, which I am thankful for.\n\nAs I write this, a mix of both positive and negative emotions continue to overwhelm me to the brim, but for some reason, I feel like the negative emotions/energy is finally starting to settle just a little bit (mostly due to dating Gabriela), and my ability to self-intellectualize has finally returned. I'm hoping to continue the trend of self-intellectualization and logically-maneuvering my way around my career and relationships, but obviously without compromising who I truly am (a feeler).\n\nOnward to 2025 with my head held high and my heart as big as ever. Let's fucking do it!\n\nAction Items for 2025\n\n- Be more honest and don't be a liar.\n- Listen to my heart and my head at the same time, but when needed, follow my heart.\n- Improve my writing habits and get that book done! Or maybe even two… 👀\n- Continue growing both interpersonally and professionally\n- Start looking for a new PM gig! Startups!\n- Explore different business/startup ideas\n- Continue growing PM Hive into that vision!\n- Don't be afraid to try new things and explore new places/people/experiences\n- Save a little bit more money, and build better habits (writing/journaling, working out)"
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
            <h2 className="font-serif text-3xl font-bold mb-8 text-portfolio-accent">
              Yearly Manifestos
            </h2>
            {journalYears.map((yearData, index) => (
              <div key={index} className="border-l-4 border-portfolio-accent pl-8">
                <h3 className="font-serif text-2xl font-bold mb-8 text-portfolio-text">
                  {yearData.year}
                </h3>
                
                <div className="mb-8">
                  <h4 className="font-serif text-xl font-semibold mb-4 text-portfolio-text">
                    WWW (What Went Well)
                  </h4>
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
                  <h4 className="font-serif text-xl font-semibold mb-4 text-portfolio-text">
                    WCBI (What Could Be Improved)
                  </h4>
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
                  <h4 className="font-serif text-xl font-semibold mb-4 text-portfolio-text">
                    My Life in {parseInt(yearData.year) + 1}
                  </h4>
                  <div className="text-portfolio-text/80 leading-relaxed whitespace-pre-line">
                    {yearData.lifeContent}
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

export default Journal;
