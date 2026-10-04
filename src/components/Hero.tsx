import React from 'react';
import { motion } from 'motion/react';
import { ArrowDown, ArrowRight } from 'lucide-react';
import { siteData } from '../data/siteData';

export const Hero: React.FC = () => {
  return (
    <section
      id="home"
      className="
        relative
        overflow-hidden
        pt-14 pb-20
        sm:pt-20 sm:pb-24
        lg:pt-28 lg:pb-32
      "
    >
      {/* Decorative background glow */}
      <motion.div
        animate={{
          scale: [1, 1.08, 1],
          opacity: [0.6, 0.9, 0.6],
        }}
        transition={{
          duration: 9,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
        className="
          pointer-events-none
          absolute
          -top-40
          -right-40
          h-[500px]
          w-[500px]
          rounded-full
          bg-[hsl(var(--primary))/0.12]
          blur-3xl
        "
      />

      <div className="mx-auto max-w-site px-4 sm:px-8 lg:px-16">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">

          {/* Text column */}
          <motion.div
            className="lg:col-span-7"
            initial={{ opacity: 0, y: 35 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, amount: 0.2 }}
            transition={{
              duration: 0.75,
              ease: [0.22, 1, 0.36, 1],
            }}
          >
            <span className="eyebrow block mb-5">
              {siteData.heroEyebrow}
            </span>

            <h1
              className="
                font-serif
                text-[45px]
                sm:text-[58px]
                lg:text-[76px]
                leading-[1.02]
                tracking-tight
                text-[hsl(var(--foreground))]
              "
            >
              {siteData.tagline.split(' ').slice(0, 3).join(' ')}
              <br />
              <span className="italic font-normal">
                {siteData.tagline.split(' ').slice(3).join(' ')}
              </span>
            </h1>

            <p
              className="
                mt-7
                max-w-xl
                text-[16px]
                sm:text-[18px]
                leading-[1.75]
                text-[hsl(var(--foreground))/0.78]
                font-light
              "
            >
              {siteData.introduction}
            </p>

            <div className="mt-9 flex flex-wrap items-center gap-5">

              {/* Primary CTA */}
              <a
                href="#biology"
                className="
                  inline-flex
                  items-center
                  rounded-full
                  bg-[hsl(var(--foreground))]
                  text-[hsl(var(--background))]
                  px-6 py-3.5
                  text-sm
                  font-medium
                  transition-all
                  hover:-translate-y-1
                  hover:shadow-lg
                "
              >
                Explore Biology
                <ArrowRight className="ml-2 h-4 w-4" />
              </a>

              {/* Secondary CTA */}
              <a
                href="#counselling"
                className="
                  inline-flex
                  items-center
                  text-sm
                  font-medium
                  text-[hsl(var(--foreground))]
                  hover:text-[hsl(var(--primary))]
                  transition-colors
                  group
                "
              >
                Career counselling
                <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </a>
            </div>

            <div className="mt-14 flex items-center gap-3 text-xs text-[hsl(var(--muted-foreground))]">
              <motion.div
                animate={{ y: [0, 4, 0] }}
                transition={{
                  duration: 1.8,
                  repeat: Infinity,
                  ease: 'easeInOut',
                }}
              >
                <ArrowDown className="h-4 w-4 text-[hsl(var(--primary))]" />
              </motion.div>

              <span>Scroll to explore</span>
            </div>
          </motion.div>

          {/* Profile Card */}
          <motion.div
            className="lg:col-span-5"
            initial={{ opacity: 0, y: 40, scale: 0.95 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            viewport={{ once: false, amount: 0.2 }}
            transition={{
              duration: 0.85,
              delay: 0.1,
              ease: [0.22, 1, 0.36, 1],
            }}
          >
            <motion.div
              animate={{
                y: [-6, 6, -6],
              }}
              transition={{
                duration: 6,
                repeat: Infinity,
                ease: 'easeInOut',
              }}
              className="
                relative
                aspect-[4/5]
                overflow-hidden
                rounded-[28px]
                border
                border-[hsl(var(--border))]
                bg-[hsl(var(--card))]
                shadow-xl
              "
            >
              <img
                src="/images/manisha-dhar.jpg"
                alt="Manisha Dhar - Founder and Lead Career Navigator"
                className="h-full w-full object-cover"
              />

              <div
                className="
                  absolute
                  inset-x-5
                  bottom-5
                  rounded-xl
                  bg-[hsl(var(--card))/0.92]
                  backdrop-blur-md
                  border border-[hsl(var(--border))]
                  p-4
                  shadow-md
                "
              >
                <span className="eyebrow !text-yellow-300">
                  Founder &amp; Lead Career Navigator
                </span>

                <p className="mt-1 font-serif text-xl text-[hsl(var(--foreground))]">
                  {siteData.person}
                </p>
              </div>
            </motion.div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};