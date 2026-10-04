import React from 'react';
import { motion } from 'motion/react';
import { processSteps } from '../data/siteData';

export const ProcessSteps: React.FC = () => {
  return (
    <section
      className="
        py-16 sm:py-20 lg:py-28
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
          className="max-w-2xl mb-12"
        >
          <span className="eyebrow block mb-4">
            THE JOURNEY
          </span>

          <h2
            className="
              font-serif
              text-[34px]
              sm:text-[44px]
              leading-[1.1]
              text-[hsl(var(--foreground))]
            "
          >
            Understand.
            <br />
            Explore. Navigate.
          </h2>
        </motion.div>

        {/* 3-step grid */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.15 }}
          transition={{
            duration: 0.7,
            ease: [0.22, 1, 0.36, 1],
          }}
          className="
            grid
            grid-cols-1
            md:grid-cols-3
            rounded-2xl
            border
            border-[hsl(var(--border))]
            bg-[hsl(var(--card))/0.3]
            overflow-hidden
            shadow-xs
          "
        >
          {processSteps.map((step, index) => (
            <motion.div
              key={step.number}
              initial={{
                opacity: 0,
                y: 20,
              }}
              whileInView={{
                opacity: 1,
                y: 0,
              }}
              viewport={{
                once: false,
                amount: 0.2,
              }}
              transition={{
                duration: 0.55,
                delay: index * 0.1,
                ease: [0.22, 1, 0.36, 1],
              }}
              whileHover={{
                backgroundColor: 'hsl(var(--card))',
                transition: {
                  duration: 0.2,
                },
              }}
              className="
                p-7
                sm:p-9
                border-b
                md:border-b-0
                md:border-r
                last:border-0
                border-[hsl(var(--border))]
                flex
                flex-col
                justify-start
                transition-colors
              "
            >
              <span
                className="
                  font-serif
                  text-3xl
                  text-[hsl(var(--primary))]
                  font-normal
                "
              >
                {step.number}
              </span>

              <h3
                className="
                  mt-5
                  font-serif
                  text-2xl
                  text-[hsl(var(--foreground))]
                "
              >
                {step.title}
              </h3>

              <p
                className="
                  mt-3
                  text-sm
                  leading-relaxed
                  text-[hsl(var(--muted-foreground))]
                  font-light
                "
              >
                {step.description}
              </p>
            </motion.div>
          ))}
        </motion.div>

      </div>
    </section>
  );
};