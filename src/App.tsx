import React from 'react';

import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { TuitionServices } from './components/TuitionServices';
import { CareerCounselling } from './components/CareerCounselling';
import { Education } from './components/Education';
import { Testimonials } from './components/Testimonials';
import { Gallery } from './components/Gallery';
import { ProcessSteps } from './components/ProcessSteps';
import { Contact } from './components/Contact';
import { MobileStickyBar } from './components/MobileStickyBar';
import { Footer } from './components/Footer';
import { IndiaReach } from './components/IndiaReach';

const App: React.FC = () => {
  return (
    <div
      className="
        min-h-screen
        bg-[hsl(var(--background))]
        text-[hsl(var(--foreground))]
      "
    >
      <Navbar />

      <main>
        <Hero />

        <About />

        <TuitionServices />

        <CareerCounselling />

        <Education />

        <Testimonials />

        <Gallery />

        <IndiaReach />

        <ProcessSteps />

        <Contact />
      </main>

      <Footer />

      <MobileStickyBar />
    </div>
  );
};

export default App;