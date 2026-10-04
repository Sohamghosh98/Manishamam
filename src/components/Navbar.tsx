import React, { useState } from 'react';
import { Menu, X, Instagram } from 'lucide-react';
import { siteData } from '../data/siteData';

const navLinks = [
  { name: 'About', href: '#about' },
  { name: 'Tuition', href: '#tuition' },
  { name: 'Counselling', href: '#counselling' },
  { name: 'Education', href: '#education' },
  { name: 'Gallery', href: '#gallery' },
  { name: 'Contact', href: '#contact' },
];

export const Navbar: React.FC = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const handleNavigation = (href: string) => {
    setMobileMenuOpen(false);

    const id = href.replace('#', '');
    const element = document.getElementById(id);

    if (element) {
      element.scrollIntoView({
        behavior: 'smooth',
        block: 'start',
      });
    }
  };

  return (
    <header
      className="
        sticky top-0 z-50 w-full h-[74px]
        bg-[hsl(var(--background))/0.92]
        backdrop-blur-xl
        border-b border-[hsl(var(--border))]
      "
    >
      <div className="mx-auto flex h-full max-w-site items-center justify-between px-4 sm:px-8 lg:px-16">

        {/* Logo */}
        <button
          onClick={() => handleNavigation('#home')}
          className="group"
        >
          <span className="font-serif text-2xl tracking-tight text-[hsl(var(--foreground))]">
            Road to the Rainbow
            <span className="text-[hsl(var(--primary))]">.</span>
          </span>
        </button>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <button
              key={link.name}
              onClick={() => handleNavigation(link.href)}
              className="
                text-[13px]
                text-[hsl(var(--foreground))/0.72]
                hover:text-[hsl(var(--foreground))]
                transition-colors
              "
            >
              {link.name}
            </button>
          ))}
        </nav>

        {/* Desktop CTA */}
        <div className="hidden md:flex items-center gap-5">

          <a
            href={siteData.socialLinks[0].url}
            target="_blank"
            rel="noopener noreferrer"
            className="
              text-[hsl(var(--foreground))/0.7]
              hover:text-[hsl(var(--foreground))]
              transition-colors
            "
          >
            <Instagram className="h-4 w-4" />
          </a>

          <button
            onClick={() => handleNavigation('#contact')}
            className="
              rounded-full
              bg-[hsl(var(--foreground))]
              text-[hsl(var(--background))]
              px-4 py-2
              text-[12px]
              font-medium
              hover:opacity-85
              transition-opacity
            "
          >
            Get in touch
          </button>

        </div>

        {/* Mobile */}
        <button
          className="md:hidden p-2"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label="Toggle navigation"
        >
          {mobileMenuOpen ? (
            <X className="h-5 w-5" />
          ) : (
            <Menu className="h-5 w-5" />
          )}
        </button>

      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div
          className="
            md:hidden
            border-b border-[hsl(var(--border))]
            bg-[hsl(var(--background))]
            px-6 py-6
          "
        >
          <nav className="flex flex-col gap-5">

            {navLinks.map((link) => (
              <button
                key={link.name}
                onClick={() => handleNavigation(link.href)}
                className="
                  text-sm
                  text-left
                  text-[hsl(var(--foreground))]
                "
              >
                {link.name}
              </button>
            ))}

            <button
              onClick={() => handleNavigation('#contact')}
              className="
                mt-2
                rounded-lg
                bg-[hsl(var(--foreground))]
                text-[hsl(var(--background))]
                px-4 py-3
                text-center
                text-sm
              "
            >
              Get in touch
            </button>

          </nav>
        </div>
      )}

    </header>
  );
};
