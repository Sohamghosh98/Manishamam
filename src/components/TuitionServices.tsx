import React from 'react';
import { motion } from 'motion/react';
import { tuitionServices } from '../data/siteData';

export const TuitionServices: React.FC = () => {
  return (
    <section
      id="tuition"
      className="
        py-16 sm:py-20 lg:py-28
        bg-[hsl(var(--card))]
        border-t border-[hsl(var(--border))]
      "
    >
      <div className="mx-auto max-w-site px-4 sm:px-8 lg:px-16">

        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.2 }}
          transition={{
            duration: 0.7,
            ease: [0.22, 1, 0.36, 1],
          }}
          className="max-w-3xl mb-12"
        >
          <span className="eyebrow block mb-4">
            BIOLOGY EDUCATION
          </span>

          <h2 className="font-serif text-[34px] sm:text-[46px] leading-[1.1] text-[hsl(var(--foreground))]">
            Meaningful learning
            <br />
            begins with clarity.
          </h2>

          <p className="mt-5 text-[15px] sm:text-[17px] text-[hsl(var(--muted-foreground))] leading-relaxed font-light">
            Over 30 years of Biology teaching focused on clear concepts,
            meaningful learning and helping students build confidence in
            what they learn.
          </p>
        </motion.div>

        {/* Service Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {tuitionServices.map((service, index) => (
            <motion.div
              key={service.number}
              initial={{
                opacity: 0,
                y: 35,
                scale: 0.97,
              }}
              whileInView={{
                opacity: 1,
                y: 0,
                scale: 1,
              }}
              viewport={{
                once: false,
                amount: 0.15,
              }}
              transition={{
                duration: 0.65,
                delay: index * 0.09,
                ease: [0.22, 1, 0.36, 1],
              }}
              whileHover={{
                y: -6,
                transition: {
                  duration: 0.25,
                },
              }}
              className="
                group
                rounded-2xl
                border border-[hsl(var(--border))]
                bg-[hsl(var(--background))]
                p-7 sm:p-9
                shadow-xs
                hover:shadow-lg
                hover:border-[hsl(var(--primary))/0.4]
                transition-all
                duration-300
              "
            >
              <div className="flex items-center justify-between">
                <span className="font-serif text-3xl text-[hsl(var(--primary))] font-normal">
                  {service.number}
                </span>

                <span
                  className="
                    h-2
                    w-2
                    rounded-full
                    bg-[hsl(var(--accent-gold))]
                    opacity-70
                    group-hover:scale-125
                    transition-transform
                  "
                />
              </div>

              <h3 className="mt-7 font-serif text-2xl text-[hsl(var(--foreground))]">
                {service.title}
              </h3>

              <p className="mt-3 max-w-md text-sm leading-relaxed text-[hsl(var(--muted-foreground))] font-light">
                {service.description}
              </p>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};