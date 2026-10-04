export interface Finish {
  id: string;
  name: string;
  format: string;
  supplyPrice: number; // supply per m²
  fitPrice: number;    // fitting per m²
  totalPrice: number;  // supply + fit per m²
  image: string;       // photorealistic room with this floor
  swatchBg: string;    // color code for swatch block
  spec: string;        // e.g., "European oak, 3mm wear layer · 190mm plank"
  description: string; // editorial description
}

export interface FloorTypeInfo {
  id: string;
  name: string;
  fromPrice: number;
  description: string;
  tags: string[];
  whenRight?: string;
  whenNot?: string;
  sandable?: string;
  underfloorHeating?: boolean;
  waterproof?: 'Full' | 'Moderate' | 'No';
}

export interface PriceItem {
  id: string;
  finish: string;
  format: string;
  supply: number;
  fitting: number;
  allIn: number;
  dotColor: string;
  popular?: boolean;
}

export interface ExtraRate {
  item: string;
  rate: string;
}

export interface ProjectItem {
  id: string;
  title: string;
  tagline: string; // e.g. "COCOA HERRINGBONE · 14 M² · 6 DAYS"
  description: string;
  image: string;
}

export interface ProcessStepItem {
  number: string;
  title: string;
  description: string;
}

export interface SubfloorAccordionItem {
  id: string;
  title: string;
  content: string;
}

export interface GuaranteeItem {
  icon: 'shield' | 'sun' | 'paperclip';
  title: string;
  description: string;
}

export interface CareItem {
  instruction: string;
  detail: string;
}
