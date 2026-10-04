import React, { useState } from 'react';
import { AnimatePresence, motion } from 'motion/react';
import {
  ArrowUpRight,
  ChevronLeft,
  ChevronRight,
  X,
  Sparkles,
} from 'lucide-react';
import { galleryItems } from '../data/siteData';

type FilterType = 'all' | 'seminar';

const filters: { label: string; value: FilterType }[] = [
  { label: 'All moments', value: 'all' },
  { label: 'Seminars', value: 'seminar' },
];

export const Gallery: React.FC = () => {
  const [filter, setFilter] = useState<FilterType>('all');
  const [activeImage, setActiveImage] = useState<number | null>(null);

  const filteredItems =
    filter === 'all'
      ? galleryItems
      : galleryItems.filter((item) => item.type === filter);

  const activeIndex = filteredItems.findIndex(
    (item) => item.id === activeImage
  );

  const activeItem =
    activeIndex >= 0 ? filteredItems[activeIndex] : null;

  const showPrevious = () => {
    if (!filteredItems.length) return;

    const previousIndex =
      activeIndex <= 0
        ? filteredItems.length - 1
        : activeIndex - 1;

    setActiveImage(filteredItems[previousIndex].id);
  };

  const showNext = () => {
    if (!filteredItems.length) return;

    const nextIndex =
      activeIndex >= filteredItems.length - 1
        ? 0
        : activeIndex + 1;

    setActiveImage(filteredItems[nextIndex].id);
  };

  return (
    <section
      id="gallery"
      className="
        relative
        overflow-hidden
        border-t border-[hsl(var(--border))]
        bg-[hsl(var(--background))]
        py-20
        sm:py-24
        lg:py-32
      "
    >

      {/* Background decoration */}
      <div
        className="
          pointer-events-none
          absolute
          -right-48
          top-20
          h-[500px]
          w-[500px]
          rounded-full
          bg-[hsl(var(--primary))/0.035]
          blur-3xl
        "
      />

      <div
        className="
          pointer-events-none
          absolute
          -left-48
          bottom-0
          h-[450px]
          w-[450px]
          rounded-full
          bg-[hsl(var(--primary))/0.025]
          blur-3xl
        "
      />

      <div className="mx-auto max-w-site px-4 sm:px-8 lg:px-16">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.25 }}
          transition={{
            duration: 0.7,
            ease: [0.22, 1, 0.36, 1],
          }}
          className="
            mb-12
            flex
            flex-col
            gap-8
            lg:mb-16
            lg:flex-row
            lg:items-end
            lg:justify-between
          "
        >

          <div className="max-w-2xl">

            <div className="mb-5 flex items-center gap-2">
              <span className="eyebrow">
                WORKSHOPS &amp; SEMINARS
              </span>

              <span
                className="
                  inline-flex
                  items-center
                  gap-1.5
                  rounded-full
                  border
                  border-[hsl(var(--border))]
                  bg-[hsl(var(--card))]
                  px-3
                  py-1
                  text-[10px]
                  uppercase
                  tracking-[0.14em]
                  text-[hsl(var(--muted-foreground))]
                "
              >
                <Sparkles className="h-3 w-3" />
                Professional engagements
              </span>
            </div>

            <h2
              className="
                font-serif
                text-[42px]
                leading-[0.98]
                tracking-[-0.025em]
                sm:text-[54px]
                lg:text-[68px]
              "
            >
              Ideas become meaningful
              <br />
              <span className="italic text-[hsl(var(--foreground))/0.55]">
                when they are shared.
              </span>
            </h2>

            <p
              className="
                mt-6
                max-w-xl
                text-[15px]
                leading-[1.8]
                text-[hsl(var(--muted-foreground))]
                sm:text-[16px]
              "
            >
              From educational talks and professional seminars to school
              programmes and career conversations, every interaction is an
              opportunity to encourage curiosity, clarity and confident
              decision-making.
            </p>

          </div>

          {/* Filters */}
          <div
            className="
              flex
              w-fit
              flex-wrap
              items-center
              gap-1
              rounded-full
              border
              border-[hsl(var(--border))]
              bg-[hsl(var(--card))]
              p-1
            "
          >
            {filters.map((item) => (
              <button
                key={item.value}
                onClick={() => setFilter(item.value)}
                className={`
                  relative
                  rounded-full
                  px-4
                  py-2.5
                  text-[11px]
                  font-medium
                  transition-colors
                  duration-300
                  sm:px-5
                  ${
                    filter === item.value
                      ? `
                        bg-[hsl(var(--foreground))]
                        text-[hsl(var(--background))]
                      `
                      : `
                        text-[hsl(var(--muted-foreground))]
                        hover:text-[hsl(var(--foreground))]
                      `
                  }
                `}
              >
                {item.label}
              </button>
            ))}
          </div>

        </motion.div>

        {/* Gallery */}
        <AnimatePresence mode="wait">

          <motion.div
            key={filter}
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -18 }}
            transition={{ duration: 0.4 }}
            className="
              grid
              grid-cols-1
              gap-4
              sm:grid-cols-2
              lg:grid-cols-12
              lg:auto-rows-[150px]
            "
          >

            {filteredItems.map((item, index) => {

              const layouts = [
                'lg:col-span-7 lg:row-span-3',
                'lg:col-span-5 lg:row-span-3',
              ];

              return (
                <motion.button
                  key={item.id}
                  layout
                  initial={{
                    opacity: 0,
                    y: 25,
                  }}
                  animate={{
                    opacity: 1,
                    y: 0,
                  }}
                  transition={{
                    duration: 0.55,
                    delay: index * 0.07,
                    ease: [0.22, 1, 0.36, 1],
                  }}
                  onClick={() => setActiveImage(item.id)}
                  className={`
                    group
                    relative
                    min-h-[320px]
                    overflow-hidden
                    rounded-[20px]
                    border
                    border-[hsl(var(--border))]
                    bg-[hsl(var(--card))]
                    text-left
                    outline-none
                    ${layouts[index % layouts.length]}
                  `}
                >

                  <img
                    src={item.image}
                    alt={item.title}
                    className="
                      absolute
                      inset-0
                      h-full
                      w-full
                      object-cover
                      transition-transform
                      duration-700
                      ease-out
                      group-hover:scale-[1.045]
                    "
                  />

                  <div
                    className="
                      absolute
                      inset-0
                      bg-gradient-to-t
                      from-black/85
                      via-black/10
                      to-transparent
                      opacity-80
                      transition-opacity
                      duration-500
                      group-hover:opacity-95
                    "
                  />

                  {/* Top metadata */}
                  <div
                    className="
                      absolute
                      left-5
                      right-5
                      top-5
                      flex
                      items-start
                      justify-between
                    "
                  >
                    <span
                      className="
                        rounded-full
                        border
                        border-white/20
                        bg-black/20
                        px-3
                        py-1.5
                        text-[9px]
                        uppercase
                        tracking-[0.16em]
                        text-white/80
                        backdrop-blur-md
                      "
                    >
                      {item.type}
                    </span>

                    <span
                      className="
                        flex
                        h-9
                        w-9
                        items-center
                        justify-center
                        rounded-full
                        border
                        border-white/15
                        bg-black/20
                        text-white
                        opacity-70
                        backdrop-blur-md
                        transition-all
                        duration-300
                        group-hover:scale-110
                        group-hover:opacity-100
                      "
                    >
                      <ArrowUpRight className="h-4 w-4" />
                    </span>
                  </div>

                  {/* Bottom content */}
                  <div
                    className="
                      absolute
                      bottom-0
                      left-0
                      right-0
                      p-5
                      sm:p-6
                    "
                  >
                    <span
                      className="
                        mb-2
                        block
                        text-[10px]
                        uppercase
                        tracking-[0.18em]
                        text-white/55
                      "
                    >
                      0{index + 1}
                    </span>

                    <h3
                      className="
                        font-serif
                        text-[23px]
                        leading-tight
                        text-white
                        sm:text-[26px]
                      "
                    >
                      {item.title}
                    </h3>

                    <p
                      className="
                        mt-1
                        max-w-sm
                        text-[11px]
                        leading-relaxed
                        text-white/60
                      "
                    >
                      {item.description}
                    </p>
                  </div>

                </motion.button>
              );
            })}

          </motion.div>

        </AnimatePresence>

        {/* Topics */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2, duration: 0.6 }}
          className="
            mt-8
            flex
            flex-col
            gap-3
            border-t
            border-[hsl(var(--border))]
            pt-5
            sm:flex-row
            sm:items-center
            sm:justify-between
          "
        >
          <p
            className="
              text-[11px]
              uppercase
              tracking-[0.14em]
              text-[hsl(var(--muted-foreground))]
            "
          >
            School programmes · Career talks · Workshops · Seminars
          </p>

          <p
            className="
              text-[11px]
              text-[hsl(var(--muted-foreground))]
            "
          >
            {filteredItems.length} moments
          </p>
        </motion.div>

      </div>

      {/* Lightbox */}
      <AnimatePresence>

        {activeItem && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="
              fixed
              inset-0
              z-[100]
              flex
              items-center
              justify-center
              bg-black/90
              p-4
              backdrop-blur-xl
              sm:p-8
            "
            onClick={() => setActiveImage(null)}
          >

            <button
              onClick={() => setActiveImage(null)}
              className="
                absolute
                right-5
                top-5
                z-20
                flex
                h-11
                w-11
                items-center
                justify-center
                rounded-full
                border
                border-white/15
                bg-white/10
                text-white
                backdrop-blur-md
                transition
                hover:bg-white/20
              "
              aria-label="Close image"
            >
              <X className="h-5 w-5" />
            </button>

            {filteredItems.length > 1 && (
              <button
                onClick={(event) => {
                  event.stopPropagation();
                  showPrevious();
                }}
                className="
                  absolute
                  left-4
                  top-1/2
                  z-20
                  flex
                  h-11
                  w-11
                  -translate-y-1/2
                  items-center
                  justify-center
                  rounded-full
                  border
                  border-white/15
                  bg-white/10
                  text-white
                  backdrop-blur-md
                  transition
                  hover:bg-white/20
                  sm:left-7
                "
                aria-label="Previous image"
              >
                <ChevronLeft className="h-5 w-5" />
              </button>
            )}

            <motion.div
              initial={{
                opacity: 0,
                scale: 0.94,
                y: 15,
              }}
              animate={{
                opacity: 1,
                scale: 1,
                y: 0,
              }}
              exit={{
                opacity: 0,
                scale: 0.94,
              }}
              transition={{
                duration: 0.35,
              }}
              className="
                relative
                flex
                max-h-[90vh]
                w-full
                max-w-6xl
                flex-col
                items-center
              "
              onClick={(event) => event.stopPropagation()}
            >

              <div
                className="
                  overflow-hidden
                  rounded-2xl
                  border
                  border-white/10
                  bg-black
                  shadow-2xl
                "
              >
                <img
                  src={activeItem.image}
                  alt={activeItem.title}
                  className="
                    max-h-[76vh]
                    w-auto
                    max-w-full
                    object-contain
                  "
                />
              </div>

              <div className="mt-5 text-center">
                <p
                  className="
                    text-[10px]
                    uppercase
                    tracking-[0.18em]
                    text-white/40
                  "
                >
                  {activeItem.type}
                </p>

                <h3
                  className="
                    mt-1
                    font-serif
                    text-2xl
                    text-white
                  "
                >
                  {activeItem.title}
                </h3>

                <p className="mt-1 text-xs text-white/45">
                  {activeIndex + 1} / {filteredItems.length}
                </p>
              </div>

            </motion.div>

            {filteredItems.length > 1 && (
              <button
                onClick={(event) => {
                  event.stopPropagation();
                  showNext();
                }}
                className="
                  absolute
                  right-4
                  top-1/2
                  z-20
                  flex
                  h-11
                  w-11
                  -translate-y-1/2
                  items-center
                  justify-center
                  rounded-full
                  border
                  border-white/15
                  bg-white/10
                  text-white
                  backdrop-blur-md
                  transition
                  hover:bg-white/20
                  sm:right-7
                "
                aria-label="Next image"
              >
                <ChevronRight className="h-5 w-5" />
              </button>
            )}

          </motion.div>
        )}

      </AnimatePresence>

    </section>
  );
};