export interface Machine {
  id: string;
  brand: "konica-minolta" | "hp";
  model: string;
  slug: string;
  category: string;
  ppm: string;
  bestFor: string;
  features: string[];
  image: string;
  alt: string;
}

export interface Service {
  slug: string;
  title: string;
  tagline: string;
  description: string;
  features: string[];
  steps: { number: number; title: string; description: string }[];
  faqs: FAQ[];
  metaTitle: string;
  metaDescription: string;
  targetKeyword: string;
}

export interface Location {
  slug: string;
  name: string;
  region: string;
  description: string;
  image: string;
  alt: string;
  metaTitle: string;
  metaDescription: string;
}

export interface FAQ {
  question: string;
  answer: string;
}

export interface Review {
  id: string;
  author: string;
  company: string;
  location: string;
  rating: number;
  text: string;
}

export interface BlogPost {
  slug: string;
  title: string;
  excerpt: string;
  content: string;
  author: string;
  publishedAt: string;
  readTime: string;
  tag: string;
  image: string;
  alt: string;
  metaTitle: string;
  metaDescription: string;
}

export interface NavItem {
  label: string;
  href: string;
}
