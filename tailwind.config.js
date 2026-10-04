/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        muted: {
          foreground: "hsl(var(--muted-foreground))",
        },
        border: "hsl(var(--border))",
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--foreground))",
        },
        accent: {
          sage: "hsl(var(--accent-sage))",
          gold: "hsl(var(--accent-gold))",
        },
        oat: "#f9eacb",
        "oat-light": "#fdf7e8",
        "walnut-ink": "#332215",
        walnut: "#9b5608",
        "walnut-dark": "#231a15",
        honey: "#f7b40e",
        "honey-gold": "#f7b40e",
        "honey-amber": "#9b5608",
      },
      fontFamily: {
        serif: ['Newsreader', 'Georgia', 'serif'],
        sans: ['Inter', 'system-ui', '-apple-system', 'sans-serif'],
      },
      letterSpacing: {
        eyebrow: '0.2em',
      },
      maxWidth: {
        site: '1180px',
      },
    },
  },
  plugins: [],
}
