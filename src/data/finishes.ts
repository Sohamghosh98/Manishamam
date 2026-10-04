import { Finish } from '../types/flooring';

export const finishes: Finish[] = [
  {
    id: 'pale-oat',
    name: 'Pale Oat',
    format: '190mm plank',
    supplyPrice: 42,
    fitPrice: 28,
    totalPrice: 70,
    swatchBg: '#c8af88',
    spec: 'European oak, 3mm wear layer · 190mm plank',
    description: 'Our quietest floor. Brushed and hardwax-oiled in a near-raw tone that keeps north-facing rooms from going cold.',
    // Warm, bright living room with pale oak plank flooring, low camera angle, prominent floor
    image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=1600&auto=format&fit=crop'
  },
  {
    id: 'smoked-walnut',
    name: 'Smoked Walnut',
    format: '220mm plank',
    supplyPrice: 58,
    fitPrice: 30,
    totalPrice: 88,
    swatchBg: '#4f3320',
    spec: 'American walnut & fumed oak, 4mm wear layer · 220mm plank',
    description: 'Deep ammonia-fumed timber giving dark smoky chocolate undertones through the grain, finished in natural hardwax oil.',
    // Rich, warm walnut / dark wood living room with prominent floor
    image: 'https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?q=80&w=1600&auto=format&fit=crop'
  },
  {
    id: 'honey-chevron',
    name: 'Honey Chevron',
    format: '600 × 120mm chevron',
    supplyPrice: 64,
    fitPrice: 46,
    totalPrice: 110,
    swatchBg: '#b9813a',
    spec: 'Prime European oak, precision 45° angle · 600 × 120mm chevron',
    description: 'Warm golden chevron blocks with gentle grain movement. Catches morning and afternoon light with quiet architectural elegance.',
    // Bright sunlit room with golden chevron parquet floor
    image: 'https://images.unsplash.com/photo-1600566753376-12c8ab7fb75b?q=80&w=1600&auto=format&fit=crop'
  },
  {
    id: 'ash-grey',
    name: 'Ash Grey',
    format: '190mm plank',
    supplyPrice: 46,
    fitPrice: 28,
    totalPrice: 74,
    swatchBg: '#8a8885',
    spec: 'Nordic mineral ash & white oak, matte finish · 190mm plank',
    description: 'Muted cool-neutral tone with subtle chalky grain. Ideal for spaces where you want clean light reflection without yellowing.',
    // Clean minimalist space with pale ash grey floor
    image: 'https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?q=80&w=1600&auto=format&fit=crop'
  },
  {
    id: 'cocoa-herringbone',
    name: 'Cocoa Herringbone',
    format: '500 × 100mm block',
    supplyPrice: 72,
    fitPrice: 48,
    totalPrice: 120,
    swatchBg: '#372820',
    spec: 'Deep roasted oak blocks, double-border detail · 500 × 100mm block',
    description: 'Deep espresso-stained parquet with micro-bevels. Twice the fitting labour of a plank floor, laid by hand from the true centre line.',
    // Rich dark cocoa herringbone parquet in high-ceiling room
    image: 'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?q=80&w=1600&auto=format&fit=crop'
  },
];
