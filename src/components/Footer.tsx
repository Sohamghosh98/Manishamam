import React from 'react';
import {
  ArrowUpRight,
  Instagram,
  Facebook,
  Mail,
  MapPin,
  Phone,
} from 'lucide-react';


export const Footer: React.FC = () => {
  return (
    <footer
      className="
        relative
        overflow-hidden
        border-t
        border-[#c7a35b]/50
        bg-[#f5e3b7]
        text-[#30261d]
      "
    >
      {/* =====================================================
          BACKGROUND DETAILS
      ===================================================== */}

      <div
        className="
          pointer-events-none
          absolute
          -right-40
          -top-40
          h-[480px]
          w-[480px]
          rounded-full
          bg-[#e7c77d]/30
          blur-3xl
        "
      />

      <div
        className="
          pointer-events-none
          absolute
          -bottom-48
          -left-40
          h-[450px]
          w-[450px]
          rounded-full
          bg-[#fff4d5]/70
          blur-3xl
        "
      />

      <div
        className="
          pointer-events-none
          absolute
          right-[18%]
          top-[25%]
          h-32
          w-32
          rounded-full
          border
          border-[#b28a43]/10
        "
      />

      <div className="relative mx-auto max-w-site px-5 sm:px-8 lg:px-16">

        {/* =====================================================
            MAIN FOOTER
        ===================================================== */}

        <div
          className="
            grid
            grid-cols-1
            gap-12
            py-16
            sm:py-20
            lg:grid-cols-12
            lg:gap-10
            lg:py-24
          "
        >

          {/* =================================================
              BRAND
          ================================================= */}

          <div className="lg:col-span-5">

            <div className="mb-5 flex items-center gap-3">
              <span
                className="
                  h-2
                  w-2
                  rounded-full
                  bg-[#7b5425]
                "
              />

              <span
                className="
                  text-[10px]
                  font-semibold
                  uppercase
                  tracking-[0.22em]
                  text-[#795a2d]
                "
              >
                Road to the Rainbow
              </span>
            </div>

            <h2
              className="
                max-w-md
                font-serif
                text-[38px]
                leading-[1]
                tracking-[-0.025em]
                text-[#30261d]
                sm:text-[46px]
              "
            >
              Helping people find
              <br />
              <span className="italic text-[#76552d]">
                their direction.
              </span>
            </h2>

            <p
              className="
                mt-6
                max-w-md
                text-[14px]
                leading-[1.85]
                text-[#685947]
                sm:text-[15px]
              "
            >
              A space for thoughtful guidance, learning and
              conversations — helping students and families
              move forward with greater clarity and confidence.
            </p>

            {/* Social */}
            <a
              href="https://www.instagram.com/mani_shaaz?stkn=NWJ4djZycXY5ZmJy"
              aria-label="Instagram"
              className="
                mt-7
                inline-flex
                h-10
                w-10
                items-center
                justify-center
                rounded-full
                border
                border-[#b89452]/50
                bg-[#f9edcf]
                text-[#4b3927]
                transition-all
                duration-300
                hover:-translate-y-1
                hover:bg-[#30261d]
                hover:text-[#f8e8bd]
              "
            >
              <Instagram className="h-4 w-4" />
            </a>

            <a
              href="https://www.facebook.com/share/1CVFUA4kY3/f"
              aria-label="Instagram"
              className="
                mt-7
                inline-flex
                h-10
                w-10
                items-center
                justify-center
                rounded-full
                border
                border-[#b89452]/50
                bg-[#f9edcf]
                text-[#4b3927]
                transition-all
                duration-300
                hover:-translate-y-1
                hover:bg-[#30261d]
                hover:text-[#f8e8bd]
              "
            >
              <Facebook className="h-4 w-4" />
            </a>

          </div>

          {/* =================================================
              EXPLORE
          ================================================= */}

          <div className="lg:col-span-2">

            <span
              className="
                mb-5
                block
                text-[10px]
                font-semibold
                uppercase
                tracking-[0.22em]
                text-[#795a2d]
              "
            >
              Explore
            </span>

            <nav
              className="
                flex
                flex-col
                gap-3
                text-[14px]
                text-[#594936]
              "
            >
              <a
                href="#about"
                className="transition-colors hover:text-[#201810]"
              >
                About
              </a>

              <a
                href="#tuition"
                className="transition-colors hover:text-[#201810]"
              >
                Tuition
              </a>

              <a
                href="#counselling"
                className="transition-colors hover:text-[#201810]"
              >
                Counselling
              </a>

              <a
                href="#education"
                className="transition-colors hover:text-[#201810]"
              >
                Education
              </a>

              <a
                href="#gallery"
                className="transition-colors hover:text-[#201810]"
              >
                Gallery
              </a>

              <a
                href="#reach"
                className="transition-colors hover:text-[#201810]"
              >
                Our Reach
              </a>
            </nav>

          </div>

          {/* =================================================
              CONNECT
          ================================================= */}

          <div className="lg:col-span-2">

            <span
              className="
                mb-5
                block
                text-[10px]
                font-semibold
                uppercase
                tracking-[0.22em]
                text-[#795a2d]
              "
            >
              Connect
            </span>

            <div className="space-y-4">

              <a
                href="mailto:Manisha2016Dhar@gmail.com"
                className="
                  group
                  flex
                  items-start
                  gap-3
                  text-[13px]
                  text-[#594936]
                "
              >
                <Mail
                  className="
                    mt-0.5
                    h-4
                    w-4
                    shrink-0
                    text-[#795a2d]
                  "
                  strokeWidth={1.5}
                />

                <span className="transition-colors group-hover:text-[#201810]">
                  Mail
                </span>
              </a>

              <a
                href="tel:+919230387647"
                className="
                  group
                  flex
                  items-start
                  gap-3
                  text-[13px]
                  text-[#594936]
                "
              >
                <Phone
                  className="
                    mt-0.5
                    h-4
                    w-4
                    shrink-0
                    text-[#795a2d]
                  "
                  strokeWidth={1.5}
                />

                <span className="transition-colors group-hover:text-[#201810]">
                  Phone
                </span>
              </a>

              <div
                className="
                  flex
                  items-start
                  gap-3
                  text-[13px]
                  leading-relaxed
                  text-[#594936]
                "
              >
                <MapPin
                  className="
                    mt-0.5
                    h-4
                    w-4
                    shrink-0
                    text-[#795a2d]
                  "
                  strokeWidth={1.5}
                />

                <span>
                  India
                  <br />
                  Online &amp; in-person sessions
                </span>
              </div>

            </div>

          </div>

          {/* =================================================
              CTA
          ================================================= */}

          <div className="lg:col-span-3">

            <div
              className="
                rounded-2xl
                border
                border-[#b89452]/40
                bg-[#f9edcf]/70
                p-6
                sm:p-7
              "
            >

              <span
                className="
                  text-[9px]
                  font-semibold
                  uppercase
                  tracking-[0.2em]
                  text-[#795a2d]
                "
              >
                Start a conversation
              </span>

              <h3
                className="
                  mt-3
                  font-serif
                  text-2xl
                  leading-tight
                  text-[#30261d]
                "
              >
                Not sure where
                <br />
                to begin?
              </h3>

              <p
                className="
                  mt-3
                  text-[12px]
                  leading-relaxed
                  text-[#6c5b48]
                "
              >
                Tell us what you're looking for and
                we'll help you understand the next step.
              </p>

              <a
                href="#contact"
                className="
                  mt-5
                  inline-flex
                  items-center
                  gap-2
                  rounded-full
                  bg-[#30261d]
                  px-5
                  py-3
                  text-[12px]
                  font-medium
                  text-[#f8e8bd]
                  transition-all
                  duration-300
                  hover:-translate-y-0.5
                  hover:bg-[#45372b]
                "
              >
                Get in touch

                <ArrowUpRight className="h-3.5 w-3.5" />
              </a>

            </div>

          </div>

        </div>

        {/* =====================================================
            QUOTE STRIP
        ===================================================== */}

        <div
          className="
            border-t
            border-[#c7a35b]/40
            py-8
          "
        >

          <div
            className="
              flex
              flex-col
              gap-4
              sm:flex-row
              sm:items-center
              sm:justify-between
            "
          >

            <p
              className="
                max-w-xl
                font-serif
                text-[17px]
                italic
                leading-relaxed
                text-[#4d3b29]
                sm:text-[19px]
              "
            >
              “Every journey becomes clearer when
              you have someone to walk beside you.”
            </p>

            <span
              className="
                text-[9px]
                font-semibold
                uppercase
                tracking-[0.18em]
                text-[#8a6b3a]
              "
            >
              Road to the Rainbow
            </span>

          </div>

        </div>

        {/* =====================================================
            BOTTOM BAR
        ===================================================== */}

        <div
          className="
            flex
            flex-col
            gap-4
            border-t
            border-[#c7a35b]/40
            py-6
            text-[10px]
            text-[#806d53]
            sm:flex-row
            sm:items-center
            sm:justify-between
          "
        >

          <span>
            © 2026 Road to the Rainbow. All rights reserved.
          </span>

          <div className="flex flex-wrap gap-5">

            <a
              href="#"
              className="transition-colors hover:text-[#30261d]"
            >
              Privacy
            </a>

            <a
              href="#"
              className="transition-colors hover:text-[#30261d]"
            >
              Terms
            </a>

            <a
              href="#"
              className="transition-colors hover:text-[#30261d]"
            >
              Accessibility
            </a>

          </div>

        </div>

      </div>
    </footer>
  );
};