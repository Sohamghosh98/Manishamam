import React, { useState } from 'react';
import { motion } from 'motion/react';
import { ArrowRight, Mail, MapPin, CheckCircle2 } from 'lucide-react';
import { siteData } from '../data/siteData';

export const Contact: React.FC = () => {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setSubmitted(true);
  };

  return (
    <section
      id="contact"
      className="
        py-16 sm:py-20 lg:py-28
        bg-[hsl(var(--card))]
        border-t border-[hsl(var(--border))]
      "
    >
      <div className="mx-auto max-w-site px-4 sm:px-8 lg:px-16">

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20">

          {/* Left Column with scroll reveal */}
          <motion.div
            className="lg:col-span-5"
            initial={{ opacity: 0, y: 35 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, amount: 0.2 }}
            transition={{ duration: 0.75, ease: [0.22, 1, 0.36, 1] }}
          >
            <span className="eyebrow block mb-4">
              CONTACT
            </span>

            <h2 className="font-serif text-[34px] sm:text-[46px] leading-[1.08] text-[hsl(var(--foreground))]">
              Let's take the
              <br />
              next step.
            </h2>

            <p className="mt-6 text-[15px] leading-relaxed text-[hsl(var(--muted-foreground))] font-light">
              Get in touch to learn more about tuition or arrange a
              career counselling session.
            </p>

            <div className="mt-10 space-y-6">
              <div className="flex items-start gap-4">
                <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-[hsl(var(--background))] border border-[hsl(var(--border))] text-[hsl(var(--primary))] shrink-0 mt-0.5">
                  <MapPin className="h-4 w-4" />
                </div>

                <div>
                  <h3 className="text-sm font-medium text-[hsl(var(--foreground))]">
                    {siteData.centres.tuition.title}
                  </h3>

                  <p className="mt-1 text-sm text-[hsl(var(--muted-foreground))] font-light">
                    {siteData.centres.tuition.address}
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-[hsl(var(--background))] border border-[hsl(var(--border))] text-[hsl(var(--primary))] shrink-0 mt-0.5">
                  <MapPin className="h-4 w-4" />
                </div>

                <div>
                  <h3 className="text-sm font-medium text-[hsl(var(--foreground))]">
                    {siteData.centres.counselling.title}
                  </h3>

                  <p className="mt-1 text-sm text-[hsl(var(--muted-foreground))] font-light">
                    {siteData.centres.counselling.address}
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-[hsl(var(--background))] border border-[hsl(var(--border))] text-[hsl(var(--primary))] shrink-0">
                  <Mail className="h-4 w-4" />
                </div>

                <span className="text-sm text-[hsl(var(--muted-foreground))] font-light">
                  Email address to be provided
                </span>
              </div>
            </div>

          </motion.div>

          {/* Form with scroll reveal */}
          <motion.div
            className="lg:col-span-7"
            initial={{ opacity: 0, y: 35, scale: 0.98 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            viewport={{ once: false, amount: 0.15 }}
            transition={{ duration: 0.8, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
          >
            <div
              className="
                rounded-2xl
                border border-[hsl(var(--border))]
                bg-[hsl(var(--background))]
                p-6 sm:p-9
                shadow-sm
              "
            >

              {submitted ? (
                <div className="py-16 text-center">
                  <div
                    className="
                      mx-auto
                      flex
                      h-14
                      w-14
                      items-center
                      justify-center
                      rounded-full
                      bg-[hsl(var(--foreground))]
                      text-[hsl(var(--background))]
                    "
                  >
                    <CheckCircle2 className="h-6 w-6" />
                  </div>

                  <h3 className="mt-6 font-serif text-2xl text-[hsl(var(--foreground))]">
                    Thank you.
                  </h3>

                  <p className="mt-3 text-sm text-[hsl(var(--muted-foreground))] font-light">
                    Your enquiry has been received. We will be in touch shortly.
                  </p>
                </div>
              ) : (
                <form
                  onSubmit={handleSubmit}
                  className="space-y-5"
                >

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block mb-2 text-xs font-medium text-[hsl(var(--foreground))]">
                        Name
                      </label>

                      <input
                        required
                        type="text"
                        placeholder="Your name"
                        className="
                          w-full
                          rounded-lg
                          border border-[hsl(var(--border))]
                          bg-[hsl(var(--card))]
                          px-4 py-3
                          text-sm
                          text-[hsl(var(--foreground))]
                          placeholder:text-[hsl(var(--muted-foreground))/0.6]
                          outline-none
                          focus:border-[hsl(var(--foreground))]
                          transition-colors
                        "
                      />
                    </div>

                    <div>
                      <label className="block mb-2 text-xs font-medium text-[hsl(var(--foreground))]">
                        Phone
                      </label>

                      <input
                        required
                        type="tel"
                        placeholder="Your phone number"
                        className="
                          w-full
                          rounded-lg
                          border border-[hsl(var(--border))]
                          bg-[hsl(var(--card))]
                          px-4 py-3
                          text-sm
                          text-[hsl(var(--foreground))]
                          placeholder:text-[hsl(var(--muted-foreground))/0.6]
                          outline-none
                          focus:border-[hsl(var(--foreground))]
                          transition-colors
                        "
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block mb-2 text-xs font-medium text-[hsl(var(--foreground))]">
                      Email
                    </label>

                    <input
                      type="email"
                      placeholder="you@example.com"
                      className="
                        w-full
                        rounded-lg
                        border border-[hsl(var(--border))]
                        bg-[hsl(var(--card))]
                        px-4 py-3
                        text-sm
                        text-[hsl(var(--foreground))]
                        placeholder:text-[hsl(var(--muted-foreground))/0.6]
                        outline-none
                        focus:border-[hsl(var(--foreground))]
                        transition-colors
                      "
                    />
                  </div>

                  <div>
                    <label className="block mb-2 text-xs font-medium text-[hsl(var(--foreground))]">
                      I am interested in
                    </label>

                    <select
                      className="
                        w-full
                        rounded-lg
                        border border-[hsl(var(--border))]
                        bg-[hsl(var(--card))]
                        px-4 py-3
                        text-sm
                        text-[hsl(var(--foreground))]
                        outline-none
                        focus:border-[hsl(var(--foreground))]
                        transition-colors
                      "
                    >
                      <option>Tuition</option>
                      <option>Career Counselling</option>
                      <option>Both</option>
                    </select>
                  </div>

                  <div>
                    <label className="block mb-2 text-xs font-medium text-[hsl(var(--foreground))]">
                      Message
                    </label>

                    <textarea
                      rows={4}
                      placeholder="Tell us a little about what you are looking for..."
                      className="
                        w-full
                        resize-none
                        rounded-lg
                        border border-[hsl(var(--border))]
                        bg-[hsl(var(--card))]
                        px-4 py-3
                        text-sm
                        text-[hsl(var(--foreground))]
                        placeholder:text-[hsl(var(--muted-foreground))/0.6]
                        outline-none
                        focus:border-[hsl(var(--foreground))]
                        transition-colors
                      "
                    />
                  </div>

                  <button
                    type="submit"
                    className="
                      inline-flex
                      items-center
                      rounded-full
                      bg-[hsl(var(--foreground))]
                      text-[hsl(var(--background))]
                      px-6 py-3.5
                      text-sm
                      font-medium
                      hover:opacity-90
                      hover:-translate-y-0.5
                      transition-all
                      shadow-sm
                    "
                  >
                    Send enquiry
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </button>

                </form>
              )}

            </div>
          </motion.div>

        </div>

      </div>
    </section>
  );
};