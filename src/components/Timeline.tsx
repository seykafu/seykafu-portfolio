
import React from 'react';
import { cn } from '@/lib/utils';

interface TimelineItemProps {
  year: string;
  title: string;
  active?: boolean;
}

const TimelineItem = ({ year, title, active }: TimelineItemProps) => {
  return (
    <div className="flex flex-col items-center">
      <div className={cn(
        "timeline-dot",
        active && "bg-portfolio-accent-light", 
        !active && "bg-portfolio-muted"
      )}></div>
      <div className="mt-3 text-sm font-medium">{year}</div>
      <div className={cn(
        "text-xs mt-1", 
        active ? "text-portfolio-text" : "text-portfolio-text/60"
      )}>{title}</div>
    </div>
  );
};

const Timeline = () => {
  const milestones = [
    { year: '2016', title: 'Beginning', active: true },
    { year: '2017', title: 'Qidni Labs', active: true },
    { year: '2018', title: 'BlackBerry', active: true },
    { year: '2019', title: 'SAP', active: true },
    { year: '2020', title: 'Veeva, CertiK, Avoy', active: true },
    { year: '2021', title: 'Unity, Shenkii, Microsoft', active: true },
    { year: '2022', title: 'Microsoft', active: true },
    { year: '2023', title: 'Microsoft, Planview', active: true },
    { year: '2024', title: 'Planview', active: true },
    { year: '2025', title: 'Present', active: true },
  ];

  return (
    <div className="w-full max-w-3xl mx-auto py-12">
      <div className="relative">
        <div className="timeline-line absolute top-[6px] left-0 w-full"></div>
        <div className="flex justify-between relative z-10">
          {milestones.map((milestone, index) => (
            <TimelineItem 
              key={index} 
              year={milestone.year} 
              title={milestone.title} 
              active={milestone.active} 
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Timeline;
