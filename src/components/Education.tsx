import React from 'react';
import { motion } from 'motion/react';

const experienceItems = [
  {
    label: 'Experience',
    title: '30+ years',
    description:
      'More than three decades of Biology teaching experience focused on meaningful learning and student development.',
  },
  {
    label: 'Leadership',
    title: 'Former Vice-Principal',
    description:
      'Former Vice-Principal of Narayana School Kolkata, bringing extensive experience in education and student guidance.',
  },
  {
    label: 'Mentoring',
    title: 'Student & Parent Support',
    description:
      'Working with students, parents and institutions through counselling, mentoring and educational guidance.',
  },
  {
    label: 'Perspective',
    title: 'Beyond Academics',
    description:
      'Supporting students not only with education, but also with confidence, direction and thoughtful career decisions.',
  },
];

export const Education: React.FC = () => {
  return (
    <section
      id="education"
      className="
        py-16 sm:py-20 lg:py-28
        bg-[hsl(var(--card))]
        border-t border-[hsl(var(--border))]
      "
    >
      <div className="mx-auto max-w-site px-4 sm:px-8 lg:px-16">

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">

          {/* Left Column */}
          <motion.div
            className="lg:col-span-4"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, amount: 0.2 }}
            transition={{
              duration: 0.7,
              ease: [0.22, 1, 0.36, 1],
            }}
          >
            <span className="eyebrow block mb-4">
              EXPERIENCE &amp; PERSPECTIVE
            </span>

            <h2
              className="
                font-serif
                text-[34px]
                sm:text-[42px]
                leading-[1.1]
                text-[hsl(var(--foreground))]
              "
            >
              Experience that
              <br />
              shapes guidance.
            </h2>

            <p
              className="
                mt-5
                text-[15px]
                sm:text-[17px]
                leading-relaxed
                text-[hsl(var(--muted-foreground))]
                font-light
                max-w-sm
              "
            >
              Years of teaching, mentoring and working with students
              have shaped an approach centred on clarity, confidence
              and meaningful choices.
            </p>
          </motion.div>

          {/* Right Column */}
          <motion.div
            className="lg:col-span-8"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, amount: 0.15 }}
            transition={{
              duration: 0.7,
              delay: 0.1,
              ease: [0.22, 1, 0.36, 1],
            }}
          >
            <div className="border-t border-[hsl(var(--border))]">

              {experienceItems.map((item, index) => (
                <motion.div
                  key={item.label}
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
                    delay: index * 0.09,
                    ease: [0.22, 1, 0.36, 1],
                  }}
                  className="
                    grid
                    grid-cols-1
                    sm:grid-cols-12
                    gap-3 sm:gap-6
                    py-6
                    border-b
                    border-[hsl(var(--border))]
                    items-start
                    hover:bg-[hsl(var(--background))/0.6]
                    px-2
                    rounded-lg
                    transition-colors
                  "
                >
                  <span
                    className="
                      sm:col-span-2
                      text-xs
                      text-[hsl(var(--muted-foreground))]
                      font-medium
                      uppercase
                      tracking-wide
                    "
                  >
                    {item.label}
                  </span>

                  <span
                    className="
                      sm:col-span-4
                      font-serif
                      text-xl
                      text-[hsl(var(--foreground))]
                    "
                  >
                    {item.title}
                  </span>

                  <span
                    className="
                      sm:col-span-6
                      text-sm
                      text-[hsl(var(--muted-foreground))]
                      font-light
                      leading-relaxed
                    "
                  >
                    {item.description}
                  </span>
                </motion.div>
              ))}

            </div>
          </motion.div>

        </div>

      </div>
    </section>
  );
};