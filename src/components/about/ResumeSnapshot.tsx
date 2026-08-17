import React from 'react';
import { Link } from 'react-router-dom';
import { GraduationCap, Briefcase, PenTool, Users, Rocket, Heart } from 'lucide-react';

const experience = [
  { years: '2026', company: 'Disco', role: 'AI Product Manager, AI-native learning' },
  { years: '2025-2026', company: 'Unbounce', role: 'Lead PM, Insightly CRM & AI Copilot' },
  { years: '2023-2025', company: 'Planview', role: 'Lead PM, Planview Copilot (0 to 1)' },
  { years: '2021-2023', company: 'Microsoft', role: 'PM, Bing Web Data Platform' },
  { years: '2017-2021', company: 'Internships', role: 'Unity, Veeva, SAP, CertiK, BlackBerry, Qidni Labs' },
];

const hobbies = [
  'Working out',
  'Blogging',
  'Longboarding',
  'Painting',
  'Guitar',
  'Reading',
  'Hosting events',
  'Video games',
  'Baking',
  'Traveling',
  'Cat dad to Khione 🐱',
];

const CardLabel = ({
  icon: Icon,
  children,
}: {
  icon: React.ComponentType<{ className?: string }>;
  children: React.ReactNode;
}) => (
  <div className="mb-3 flex items-center gap-2">
    <Icon className="h-4 w-4 text-portfolio-accent" />
    <span className="text-[10px] font-medium uppercase tracking-[0.25em] text-portfolio-text/50">
      {children}
    </span>
  </div>
);

const ResumeSnapshot = () => {
  return (
    <section className="py-10">
      <div className="mb-6 flex items-baseline gap-4">
        <h2 className="font-display text-3xl md:text-4xl">
          At a <span className="italic text-portfolio-accent">Glance</span>
        </h2>
        <span className="hidden h-[1px] flex-1 bg-portfolio-muted/60 sm:block" />
      </div>

      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {/* Education */}
        <div className="liquid-glass rounded-2xl p-5">
          <CardLabel icon={GraduationCap}>Education</CardLabel>
          <p className="font-display text-xl leading-snug">BSc, Science & Business</p>
          <p className="mt-1 text-sm text-portfolio-text/70">University of Waterloo</p>
          <p className="mt-3 text-xs uppercase tracking-widest text-portfolio-accent">Class of 2021</p>
        </div>

        {/* Experience, tall center card */}
        <div className="liquid-glass rounded-2xl p-5 sm:col-span-2 lg:row-span-2">
          <CardLabel icon={Briefcase}>Experience</CardLabel>
          <ul className="space-y-3">
            {experience.map((job) => (
              <li key={job.company} className="relative border-l border-portfolio-accent/30 pl-4">
                <span className="absolute -left-[3.5px] top-1.5 h-1.5 w-1.5 rounded-full bg-portfolio-accent" />
                <div className="flex flex-wrap items-baseline gap-x-2">
                  <span className="font-bold">{job.company}</span>
                  <span className="text-xs text-portfolio-accent">{job.years}</span>
                </div>
                <p className="text-sm leading-snug text-portfolio-text/70">{job.role}</p>
              </li>
            ))}
          </ul>
        </div>

        {/* Writing */}
        <div className="liquid-glass rounded-2xl p-5">
          <CardLabel icon={PenTool}>Writing</CardLabel>
          <p className="text-sm leading-relaxed text-portfolio-text/80">
            2 published novels, a non-fiction book on the way, plus the PM Hive
            Newsletter and Substack essays.
          </p>
          <Link
            to="/writing-portfolio"
            className="mt-3 inline-block text-sm text-portfolio-accent hover:text-portfolio-accent-light"
          >
            Browse the shelf →
          </Link>
        </div>

        {/* Community */}
        <div className="liquid-glass rounded-2xl p-5">
          <CardLabel icon={Users}>Community</CardLabel>
          <p className="text-sm leading-relaxed text-portfolio-text/80">
            Co-founder of <a href="https://pmhive.ca" target="_blank" rel="noopener noreferrer" className="text-portfolio-accent hover:underline">PM Hive</a>,
            co-organizer of Vancouver Tech Week, frequent event host and speaker.
          </p>
        </div>

        {/* Side projects */}
        <div className="liquid-glass rounded-2xl p-5">
          <CardLabel icon={Rocket}>Side Projects</CardLabel>
          <p className="text-sm leading-relaxed text-portfolio-text/80">
            <a href="https://pencat.com" target="_blank" rel="noopener noreferrer" className="text-portfolio-accent hover:underline">Pencat</a> storybooks,{' '}
            <a href="https://ravage.game" target="_blank" rel="noopener noreferrer" className="text-portfolio-accent hover:underline">Ravage</a> the tactical RPG,{' '}
            <a href="https://trialerror.blog" target="_blank" rel="noopener noreferrer" className="text-portfolio-accent hover:underline">Trial & Error</a> travel blog,
            and a handful of indie games.
          </p>
        </div>

        {/* Hobbies, full width */}
        <div className="liquid-glass rounded-2xl p-5 sm:col-span-2 lg:col-span-4">
          <CardLabel icon={Heart}>Hobbies</CardLabel>
          <div className="flex flex-wrap gap-2">
            {hobbies.map((hobby) => (
              <span
                key={hobby}
                className="rounded-full border border-portfolio-muted/70 bg-portfolio-muted/30 px-3 py-1 text-xs text-portfolio-text/80"
              >
                {hobby}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ResumeSnapshot;
