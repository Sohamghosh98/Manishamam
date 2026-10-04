import React from 'react';
import { motion } from 'motion/react';
import { ArrowRight, Check } from 'lucide-react';
import { counsellingServices, siteData } from '../data/siteData';

export const CareerCounselling: React.FC = () => {
  return (
    <section
      id="counselling"
      className="
        relative
        overflow-hidden
        py-16 sm:py-20 lg:py-28
        bg-[hsl(var(--background))]
        border-t border-[hsl(var(--border))]
      "
    >
      {/* Soft golden glow */}
      <div
        className="
          pointer-events-none
          absolute
          -left-48
          top-1/2
          h-[500px]
          w-[500px]
          -translate-y-1/2
          rounded-full
          bg-[#D5A62A]/8
          blur-3xl
        "
      />

      <div className="relative mx-auto max-w-site px-4 sm:px-8 lg:px-16">

        <div
          className="
            grid
            grid-cols-1
            lg:grid-cols-12
            gap-12
            lg:gap-20
            items-center
          "
        >

          {/* Left */}
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
            <span className="eyebrow block mb-4 text-[#A87918]">
              CAREER GUIDANCE
            </span>

            <h2
              className="
                font-serif
                text-[34px]
                sm:text-[46px]
                leading-[1.08]
                text-[hsl(var(--foreground))]
              "
            >
              There is more than
              <br />
              one way forward.
            </h2>

            <p
              className="
                mt-6
                max-w-2xl
                text-[16px]
                sm:text-[18px]
                leading-[1.75]
                text-[hsl(var(--foreground))/0.78]
                font-light
              "
            >
              From Biology and healthcare to research, education,
              environment and beyond, there are many possible paths.
            </p>

            <p
              className="
                mt-4
                max-w-2xl
                text-[16px]
                sm:text-[18px]
                leading-[1.75]
                text-[hsl(var(--foreground))/0.78]
                font-light
              "
            >
              Career guidance is about understanding those possibilities
              and exploring the choices that connect with your interests,
              strengths and aspirations.
            </p>

            <div className="mt-9 space-y-5">

              {counsellingServices.map((service, idx) => (
                <motion.div
                  key={service.number}
                  initial={{
                    opacity: 0,
                    x: -20,
                  }}
                  whileInView={{
                    opacity: 1,
                    x: 0,
                  }}
                  viewport={{
                    once: false,
                    amount: 0.2,
                  }}
                  transition={{
                    duration: 0.5,
                    delay: 0.1 + idx * 0.1,
                  }}
                  className="
                    flex
                    items-start
                    gap-4
                    p-2
                    rounded-lg
                    hover:bg-[#F7E9BE]/40
                    transition-colors
                  "
                >
                  <div
                    className="
                      mt-1
                      flex
                      h-6
                      w-6
                      shrink-0
                      items-center
                      justify-center
                      rounded-full
                      border border-[#D5A62A]/50
                      bg-[#D5A62A]/10
                      text-[#A87918]
                    "
                  >
                    <Check className="h-3 w-3" />
                  </div>

                  <div>
                    <h3
                      className="
                        font-serif
                        text-base
                        text-[hsl(var(--foreground))]
                      "
                    >
                      {service.title}
                    </h3>

                    <p
                      className="
                        mt-1
                        text-sm
                        text-[hsl(var(--muted-foreground))]
                        font-light
                        leading-relaxed
                      "
                    >
                      {service.description}
                    </p>
                  </div>
                </motion.div>
              ))}

            </div>

            <a
              href={siteData.googleFormUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="
                inline-flex
                items-center
                mt-9
                rounded-full
                bg-[#30261D]
                text-[#FFF9E9]
                px-6
                py-3.5
                text-sm
                font-medium
                hover:bg-[#A87918]
                hover:-translate-y-0.5
                transition-all
                shadow-sm
              "
            >
              Explore career guidance
              <ArrowRight className="ml-2 h-4 w-4" />
            </a>

          </motion.div>

          {/* Image */}
          <motion.div
            className="lg:col-span-5"
            initial={{
              opacity: 0,
              scale: 0.95,
              y: 35,
            }}
            whileInView={{
              opacity: 1,
              scale: 1,
              y: 0,
            }}
            viewport={{
              once: false,
              amount: 0.2,
            }}
            transition={{
              duration: 0.8,
              delay: 0.1,
              ease: [0.22, 1, 0.36, 1],
            }}
          >
            <motion.div
              animate={{
                y: [0, -8, 0],
              }}
              transition={{
                duration: 7,
                repeat: Infinity,
                ease: 'easeInOut',
              }}
              className="
                relative
                aspect-[4/5]
                overflow-hidden
                rounded-[28px]
                border border-[hsl(var(--border))]
                bg-[hsl(var(--card))]
                shadow-xl
              "
            >
              <img
                src="/images/career-counselling.png"
                alt="Career guidance and counselling"
                className="h-full w-full object-cover"
              />

              <div
                className="
                  absolute
                  inset-5
                  rounded-2xl
                  border
                  border-[#F8E8BD]/40
                  pointer-events-none
                "
              />
            </motion.div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};