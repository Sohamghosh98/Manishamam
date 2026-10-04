import React from 'react';
import { ArrowRight } from 'lucide-react';
import { siteData } from '../data/siteData';

export const MobileStickyBar: React.FC = () => {
  return (
    <div
      className="
        fixed
        bottom-0
        left-0
        right-0
        z-40
        sm:hidden
        border-t
        border-[hsl(var(--border))]
        bg-[hsl(var(--background))/0.94]
        backdrop-blur-xl
        p-3
      "
    >
      <a
        href={siteData.googleFormUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="
          flex
          w-full
          items-center
          justify-center
          rounded-lg
          bg-[hsl(var(--foreground))]
          text-[hsl(var(--background))]
          py-3
          text-xs
          font-medium
        "
      >
        Register for Career Counselling
        <ArrowRight className="ml-2 h-3.5 w-3.5" />
      </a>
    </div>
  );
};