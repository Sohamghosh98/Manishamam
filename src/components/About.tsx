import React from 'react';
import { motion } from 'motion/react';
import { Heart, Compass, Sparkles } from 'lucide-react';
import { siteData } from '../data/siteData';

const values = [
  {
    icon: Heart,
    title: 'Student First',
    description:
      'Understanding the individual student before deciding what support they need.',
  },
  {
    icon: Compass,
    title: 'Clear Direction',
    description:
      'Helping students make sense of their options and move forward with greater clarity.',
  },
  {
    icon: Sparkles,
    title: 'Confidence',
    description:
      'Creating an environment where students can learn, ask questions and grow.',
  },
];

export const About: React.FC = () => {
  return (
    <section
      id="about"
      className="
        relative
        overflow-hidden
        py-16 sm:py-20 lg:py-28
        bg-[hsl(var(--card))]
        border-t border-[hsl(var(--border))]
      "
    >
      {/* Ambient golden glow */}
      <div
        className="
          pointer-events-none
          absolute
          -right-40
          -top-40
          h-[420px]
          w-[420px]
          rounded-full
          bg-[#E8C76A]/20
          blur-3xl
        "
      />

      <div
        className="
          pointer-events-none
          absolute
          -left-48
          bottom-0
          h-[360px]
          w-[360px]
          rounded-full
          bg-[#D5A62A]/10
          blur-3xl
        "
      />

      <div className="relative mx-auto max-w-site px-4 sm:px-8 lg:px-16">

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20">

          {/* Left */}
          <motion.div
            className="lg:col-span-5"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, amount: 0.2 }}
            transition={{
              duration: 0.7,
              ease: [0.22, 1, 0.36, 1],
            }}
          >
            <span className="eyebrow block mb-4 text-[#A87918]">
              ABOUT
            </span>

            <h2 className="
              font-serif
              text-[34px]
              sm:text-[44px]
              leading-[1.1]
              text-[hsl(var(--foreground))]
            ">
              {siteData.aboutHeading}
            </h2>
          </motion.div>

          {/* Right */}
          <motion.div
            className="lg:col-span-7"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, amount: 0.2 }}
            transition={{
              duration: 0.7,
              delay: 0.1,
              ease: [0.22, 1, 0.36, 1],
            }}
          >
            <p className="
              text-[17px]
              sm:text-[19px]
              leading-[1.75]
              font-light
              text-[hsl(var(--foreground))]
            ">
              {siteData.aboutIntro}
            </p>

            <p className="
              mt-6
              text-[15px]
              sm:text-[16px]
              leading-[1.8]
              text-[hsl(var(--muted-foreground))]
              font-light
            ">
              {siteData.aboutDescription}
            </p>

            <p className="
              mt-6
              text-[15px]
              sm:text-[16px]
              leading-[1.8]
              text-[hsl(var(--muted-foreground))]
              font-light
            ">
              {siteData.aboutExperience}
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mt-10">

              {values.map((item, index) => {
                const Icon = item.icon;

                return (
                  <motion.div
                    key={item.title}
                    initial={{ opacity: 0, y: 25 }}
                    whileInView={{
                      opacity: 1,
                      y: 0,
                    }}
                    viewport={{
                      once: false,
                      amount: 0.2,
                    }}
                    transition={{
                      duration: 0.6,
                      delay: 0.15 + index * 0.1,
                      ease: [0.22, 1, 0.36, 1],
                    }}
                    whileHover={{
                      y: -6,
                      transition: {
                        duration: 0.25,
                      },
                    }}
                    className="
                      rounded-xl
                      border border-[hsl(var(--border))]
                      bg-[hsl(var(--background))/0.65]
                      p-5
                      shadow-sm
                      hover:shadow-md
                      hover:border-[#D5A62A]/50
                      transition-all
                    "
                  >
                    <div className="
                      flex
                      h-10
                      w-10
                      items-center
                      justify-center
                      rounded-lg
                      bg-[#D5A62A]/15
                      text-[#A87918]
                      mb-4
                    ">
                      <Icon className="h-5 w-5" />
                    </div>

                    <h3 className="
                      font-serif
                      text-base
                      text-[hsl(var(--foreground))]
                    ">
                      {item.title}
                    </h3>

                    <p className="
                      mt-2
                      text-xs
                      leading-relaxed
                      text-[hsl(var(--muted-foreground))]
                      font-light
                    ">
                      {item.description}
                    </p>
                  </motion.div>
                );
              })}

            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};