import React, { useMemo, useState } from 'react';
import {
  ComposableMap,
  Geographies,
  Geography,
  Marker,
} from 'react-simple-maps';
import { motion } from 'motion/react';
import { MapPin, ArrowUpRight, Sparkles } from 'lucide-react';

interface ClientLocation {
  city: string;
  state: string;
  coordinates: [number, number];
  count?: string;
}

const clientLocations: ClientLocation[] = [
  {
    city: 'Delhi',
    state: 'Delhi',
    coordinates: [77.1025, 28.7041],
    count: 'Multiple clients',
  },
  {
    city: 'Mumbai',
    state: 'Maharashtra',
    coordinates: [72.8777, 19.076],
    count: 'Multiple clients',
  },
  {
    city: 'Bengaluru',
    state: 'Karnataka',
    coordinates: [77.5946, 12.9716],
    count: 'Multiple clients',
  },
  {
    city: 'Kolkata',
    state: 'West Bengal',
    coordinates: [88.3639, 22.5726],
    count: 'Multiple clients',
  },
  {
    city: 'Chennai',
    state: 'Tamil Nadu',
    coordinates: [80.2707, 13.0827],
    count: 'Multiple clients',
  },
  {
    city: 'Hyderabad',
    state: 'Telangana',
    coordinates: [78.4867, 17.385],
    count: 'Multiple clients',
  },
  {
    city: 'Pune',
    state: 'Maharashtra',
    coordinates: [73.8567, 18.5204],
    count: 'Multiple clients',
  },
  {
    city: 'Ahmedabad',
    state: 'Gujarat',
    coordinates: [72.5714, 23.0225],
    count: 'Clients',
  },
  {
    city: 'Jaipur',
    state: 'Rajasthan',
    coordinates: [75.7873, 26.9124],
    count: 'Clients',
  },
  {
    city: 'Lucknow',
    state: 'Uttar Pradesh',
    coordinates: [80.9462, 26.8467],
    count: 'Clients',
  },
  {
    city: 'Chandigarh',
    state: 'Chandigarh',
    coordinates: [76.7794, 30.7333],
    count: 'Clients',
  },
  {
    city: 'Bhopal',
    state: 'Madhya Pradesh',
    coordinates: [77.4126, 23.2599],
    count: 'Clients',
  },
  {
    city: 'Bhubaneswar',
    state: 'Odisha',
    coordinates: [85.8245, 20.2961],
    count: 'Clients',
  },
  {
    city: 'Kochi',
    state: 'Kerala',
    coordinates: [76.2673, 9.9312],
    count: 'Clients',
  },
];

const INDIA_GEO_URL =
  'https://raw.githubusercontent.com/datameet/maps/master/Country/india-composite.geojson';

export const IndiaReach: React.FC = () => {
  const [activeCity, setActiveCity] = useState<string | null>(null);

  const activeLocation = useMemo(
    () =>
      clientLocations.find(
        (location) => location.city === activeCity
      ),
    [activeCity]
  );

  return (
    <section
      id="reach"
      className="
        relative
        overflow-hidden
        border-t border-[hsl(var(--border))]
        bg-[hsl(var(--card))]
        py-20
        sm:py-24
        lg:py-32
      "
    >
      {/* Background glow */}
      <div
        className="
          pointer-events-none
          absolute
          left-1/2
          top-1/2
          h-[650px]
          w-[650px]
          -translate-x-1/2
          -translate-y-1/2
          rounded-full
          bg-[hsl(var(--primary))/0.035]
          blur-3xl
        "
      />

      <div className="mx-auto max-w-site px-4 sm:px-8 lg:px-16">

        {/* =====================================================
            HEADER
        ===================================================== */}

        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.25 }}
          transition={{
            duration: 0.7,
            ease: [0.22, 1, 0.36, 1],
          }}
          className="mb-12 lg:mb-16"
        >
          <div className="mb-4 flex items-center gap-2">
            <span className="eyebrow">
              OUR REACH
            </span>

            <span
              className="
                inline-flex
                items-center
                gap-1.5
                rounded-full
                border
                border-[hsl(var(--border))]
                bg-[hsl(var(--background))]
                px-3
                py-1
                text-[10px]
                uppercase
                tracking-[0.15em]
                text-[hsl(var(--muted-foreground))]
              "
            >
              <Sparkles className="h-3 w-3" />
              Across India
            </span>
          </div>

          <div
            className="
              flex
              flex-col
              gap-7
              lg:flex-row
              lg:items-end
              lg:justify-between
            "
          >
            <div>
              <h2
                className="
                  font-serif
                  text-[42px]
                  leading-[1]
                  tracking-[-0.025em]
                  sm:text-[54px]
                  lg:text-[68px]
                "
              >
                From one city
                <br />
                <span className="italic text-[hsl(var(--foreground))/0.5]">
                  to many.
                </span>
              </h2>
            </div>

            <p
              className="
                max-w-lg
                text-[15px]
                leading-[1.8]
                text-[hsl(var(--muted-foreground))]
                sm:text-[16px]
              "
            >
              What started as a journey with students and families
              around us has grown into a network that reaches
              learners across India.
            </p>
          </div>
        </motion.div>

        {/* =====================================================
            MAP CONTAINER
        ===================================================== */}

        <motion.div
          initial={{ opacity: 0, scale: 0.97 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, amount: 0.15 }}
          transition={{
            duration: 0.8,
            ease: [0.22, 1, 0.36, 1],
          }}
          className="
            relative
            overflow-hidden
            rounded-[28px]
            border
            border-[hsl(var(--border))]
            bg-[hsl(var(--background))]
          "
        >

          {/* =================================================
              TOP STAT BAR
          ================================================= */}

          <div
            className="
              relative
              z-20
              flex
              flex-col
              gap-6
              border-b
              border-[hsl(var(--border))]
              px-6
              py-6
              sm:flex-row
              sm:items-center
              sm:justify-between
              sm:px-8
              lg:px-10
            "
          >

            <div className="flex items-center gap-4">

              <div
                className="
                  flex
                  h-11
                  w-11
                  items-center
                  justify-center
                  rounded-full
                  border
                  border-[hsl(var(--border))]
                  bg-[hsl(var(--card))]
                "
              >
                <MapPin className="h-4 w-4" />
              </div>

              <div>
                <p
                  className="
                    text-[10px]
                    uppercase
                    tracking-[0.16em]
                    text-[hsl(var(--muted-foreground))]
                  "
                >
                  Client network
                </p>

                <p className="mt-0.5 font-serif text-xl">
                  Pan-India reach
                </p>
              </div>

            </div>

            <div className="flex items-baseline gap-2">
              <span
                className="
                  font-serif
                  text-4xl
                  tabular-nums
                  sm:text-5xl
                "
              >
                14+
              </span>

              <span
                className="
                  text-[11px]
                  uppercase
                  tracking-[0.12em]
                  text-[hsl(var(--muted-foreground))]
                "
              >
                cities
              </span>
            </div>

          </div>

          {/* =================================================
              MAP
          ================================================= */}

          <div
            className="
              relative
              min-h-[500px]
              px-2
              py-6
              sm:min-h-[650px]
              sm:px-8
              sm:py-10
              lg:min-h-[720px]
              lg:px-14
            "
          >

            {/* Decorative coordinates */}
            <div
              className="
                pointer-events-none
                absolute
                left-6
                top-6
                text-[9px]
                uppercase
                tracking-[0.2em]
                text-[hsl(var(--muted-foreground))/0.5]
                sm:left-10
                sm:top-10
              "
            >
              08°N — 37°N
            </div>

            <div
              className="
                pointer-events-none
                absolute
                bottom-6
                right-6
                text-[9px]
                uppercase
                tracking-[0.2em]
                text-[hsl(var(--muted-foreground))/0.5]
                sm:bottom-10
                sm:right-10
              "
            >
              68°E — 97°E
            </div>

            {/* Map */}
            <ComposableMap
              projection="geoMercator"
              projectionConfig={{
                center: [82, 22],
                scale: 1100,
              }}
              className="
                relative
                z-10
                h-full
                min-h-[470px]
                w-full
                sm:min-h-[600px]
              "
            >
              <Geographies geography={INDIA_GEO_URL}>
                {({ geographies }) =>
                  geographies.map((geo) => (
                    <Geography
                      key={geo.rsmKey}
                      geography={geo}
                      fill="hsl(var(--card))"
                      stroke="hsl(var(--border))"
                      strokeWidth={0.7}
                      style={{
                        default: {
                          outline: 'none',
                        },
                        hover: {
                          fill: 'hsl(var(--primary) / 0.08)',
                          outline: 'none',
                        },
                        pressed: {
                          outline: 'none',
                        },
                      } as any}
                    />
                  ))
                }
              </Geographies>

              {/* =================================================
                  CLIENT MARKERS
              ================================================= */}

              {clientLocations.map((location) => {
                const isActive =
                  activeCity === location.city;

                return (
                  <Marker
                    key={location.city}
                    coordinates={location.coordinates}
                    onMouseEnter={() =>
                      setActiveCity(location.city)
                    }
                    onMouseLeave={() =>
                      setActiveCity(null)
                    }
                    onClick={() =>
                      setActiveCity(
                        isActive ? null : location.city
                      )
                    }
                  >

                    {/* Pulse */}
                    <motion.circle
                      r={isActive ? 9 : 5}
                      fill="hsl(var(--primary))"
                      opacity={0.15}
                      animate={{
                        r: [5, 11, 5],
                        opacity: [0.25, 0, 0.25],
                      }}
                      transition={{
                        duration: 2.2,
                        repeat: Infinity,
                        ease: 'easeOut',
                      }}
                    />

                    {/* Main point */}
                    <motion.circle
                      r={isActive ? 4.5 : 3}
                      fill="hsl(var(--foreground))"
                      stroke="hsl(var(--background))"
                      strokeWidth={1.5}
                      animate={{
                        scale: isActive
                          ? [1, 1.15, 1]
                          : 1,
                      }}
                      transition={{
                        duration: 1.4,
                        repeat: Infinity,
                      }}
                    />

                    {/* Tooltip */}
                    {isActive && (
                      <motion.g
                        initial={{
                          opacity: 0,
                          y: 5,
                        }}
                        animate={{
                          opacity: 1,
                          y: 0,
                        }}
                      >
                        <foreignObject
                          x={-75}
                          y={-72}
                          width={150}
                          height={60}
                        >
                          <div
                            className="
                              rounded-xl
                              border
                              border-[hsl(var(--border))]
                              bg-[hsl(var(--background))]
                              px-3
                              py-2.5
                              text-center
                              shadow-xl
                            "
                          >
                            <p
                              className="
                                font-serif
                                text-[15px]
                                leading-none
                                text-[hsl(var(--foreground))]
                              "
                            >
                              {location.city}
                            </p>

                            <p
                              className="
                                mt-1
                                text-[8px]
                                uppercase
                                tracking-[0.14em]
                                text-[hsl(var(--muted-foreground))]
                              "
                            >
                              {location.state}
                            </p>
                          </div>
                        </foreignObject>
                      </motion.g>
                    )}

                  </Marker>
                );
              })}

            </ComposableMap>

            {/* =================================================
                FLOATING INFO CARD
            ================================================= */}

            <motion.div
              initial={{
                opacity: 0,
                x: 20,
              }}
              whileInView={{
                opacity: 1,
                x: 0,
              }}
              viewport={{
                once: true,
              }}
              transition={{
                delay: 0.35,
                duration: 0.6,
              }}
              className="
                absolute
                bottom-6
                left-6
                z-20
                hidden
                max-w-[240px]
                rounded-2xl
                border
                border-[hsl(var(--border))]
                bg-[hsl(var(--background))/0.92]
                p-5
                shadow-lg
                backdrop-blur-md
                md:block
                lg:bottom-10
                lg:left-10
              "
            >

              <div className="mb-4 flex items-center justify-between">
                <span
                  className="
                    text-[9px]
                    uppercase
                    tracking-[0.18em]
                    text-[hsl(var(--muted-foreground))]
                  "
                >
                  Wherever they are
                </span>

                <ArrowUpRight className="h-4 w-4" />
              </div>

              <p
                className="
                  font-serif
                  text-xl
                  leading-tight
                "
              >
                Learning should
                <br />
                know no distance.
              </p>

              <p
                className="
                  mt-3
                  text-[11px]
                  leading-relaxed
                  text-[hsl(var(--muted-foreground))]
                "
              >
                Every marker represents a city where
                students and families have connected
                with her work.
              </p>

            </motion.div>

          </div>

          {/* =================================================
              CITY LIST
          ================================================= */}

          <div
            className="
              border-t
              border-[hsl(var(--border))]
              px-6
              py-5
              sm:px-8
              lg:px-10
            "
          >

            <div className="flex flex-wrap gap-x-6 gap-y-3">

              {clientLocations.map((location) => (
                <button
                  key={location.city}
                  onMouseEnter={() =>
                    setActiveCity(location.city)
                  }
                  onMouseLeave={() =>
                    setActiveCity(null)
                  }
                  onClick={() =>
                    setActiveCity(location.city)
                  }
                  className="
                    flex
                    items-center
                    gap-2
                    text-[11px]
                    text-[hsl(var(--muted-foreground))]
                    transition-colors
                    hover:text-[hsl(var(--foreground))]
                  "
                >
                  <span
                    className="
                      h-1.5
                      w-1.5
                      rounded-full
                      bg-[hsl(var(--foreground))]
                    "
                  />

                  {location.city}
                </button>
              ))}

            </div>

          </div>

        </motion.div>

      </div>
    </section>
  );
};