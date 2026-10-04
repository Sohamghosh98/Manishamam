import React from 'react';
import { motion } from 'motion/react';
import { ArrowUpRight, Star } from 'lucide-react';

export const Testimonials: React.FC = () => {
  return (
    <section
      id="testimonials"
      className="
        py-16 sm:py-20 lg:py-28
        border-t border-[hsl(var(--border))]
        bg-[hsl(var(--card))]
      "
    >
      <div className="mx-auto max-w-site px-4 sm:px-8 lg:px-16">

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.2 }}
          transition={{
            duration: 0.7,
            ease: [0.22, 1, 0.36, 1],
          }}
          className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-end"
        >

          <div className="lg:col-span-8">

            <span className="eyebrow block mb-4">
              GOOGLE REVIEWS
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
              Experiences that
              <br />
              speak for themselves.
            </h2>

            <p
              className="
                mt-5
                max-w-2xl
                text-[15px]
                sm:text-[17px]
                leading-relaxed
                text-[hsl(var(--muted-foreground))]
                font-light
              "
            >
              Hear from students and families who have experienced
              Manisha's approach to education, counselling, mentoring
              and career guidance.
            </p>

          </div>

          <div className="lg:col-span-4 flex lg:justify-end">

            <a
              href="https://www.google.com/maps/place/?q=place_id:ChIJV8qoI_Kb-DkR_NVqiX6Xlok"
              target="_blank"
              rel="noopener noreferrer"
              className="
                inline-flex
                items-center
                gap-3
                rounded-full
                border
                border-[hsl(var(--border))]
                bg-[hsl(var(--background))]
                px-6
                py-3.5
                text-sm
                font-medium
                text-[hsl(var(--foreground))]
                transition-all
                hover:-translate-y-0.5
                hover:shadow-md
              "
            >
              <Star className="h-4 w-4 fill-current text-[#D5A62A]" />

              View Google Reviews

              <ArrowUpRight className="h-4 w-4" />
            </a>

          </div>

        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.15 }}
          transition={{
            duration: 0.7,
            delay: 0.15,
          }}
          className="
            mt-12
            rounded-2xl
            border
            border-[hsl(var(--border))]
            bg-[hsl(var(--background))]
            p-8
            sm:p-10
            text-center
          "
        >

          <div
            className="
              mx-auto
              flex
              h-12
              w-12
              items-center
              justify-center
              rounded-full
              bg-[#D5A62A]/10
              text-[#A87918]
            "
          >
            <Star className="h-5 w-5 fill-current" />
          </div>

          <h3
            className="
              mt-5
              font-serif
              text-2xl
              text-[hsl(var(--foreground))]
            "
          >
            See what students and families have to say.
          </h3>

          <p
            className="
              mx-auto
              mt-3
              max-w-lg
              text-sm
              leading-relaxed
              text-[hsl(var(--muted-foreground))]
              font-light
            "
          >
            Visit the Google profile to explore the latest experiences
            and feedback from the Road to the Rainbow community.
          </p>

        </motion.div>

      </div>
    </section>
  );
};