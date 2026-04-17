export interface Basket {
  id: string;
  name: string;
  description: string;
  price: number;
  category: 'Nesting' | 'Kiondo' | 'Wall Decor';
  colors: string[];
  materials: string[];
  imageColor: string; // Used for stylized placeholder
}

export const baskets: Basket[] = [
  {
    id: '1',
    name: 'Classic Kitonga Nesting Set',
    description: 'Set of 3 handwoven sisal baskets. Perfect for stylish storage in any room.',
    price: 3500,
    category: 'Nesting',
    colors: ['Natural', 'Earthy Brown'],
    materials: ['Sisal', 'Banana Fiber'],
    imageColor: '#D2B48C'
  },
  {
    id: '2',
    name: 'Modern Kiondo Tote',
    description: 'Stylish sisal kiondo with leather handles. Durable and fashionable for daily use.',
    price: 2800,
    category: 'Kiondo',
    colors: ['Black', 'White', 'Natural'],
    materials: ['Sisal', 'Leather'],
    imageColor: '#4A4A4A'
  },
  {
    id: '3',
    name: 'Sunburst Wall Plate',
    description: 'Intricately woven wall decor to bring a touch of Kenyan warmth to your home.',
    price: 1500,
    category: 'Wall Decor',
    colors: ['Sunset Orange', 'Yellow'],
    materials: ['Raffia', 'Papyrus'],
    imageColor: '#CC7722'
  },
  {
    id: '4',
    name: 'Lush Green Kiondo',
    description: 'Vibrant green sisal basket, perfect for plants or as a unique shopping bag.',
    price: 2200,
    category: 'Kiondo',
    colors: ['Green', 'Natural'],
    materials: ['Sisal'],
    imageColor: '#2E8B57'
  },
  {
    id: '5',
    name: 'Trio of Texture Baskets',
    description: 'Three varied sizes of textured sisal baskets for a contemporary look.',
    price: 4200,
    category: 'Nesting',
    colors: ['Multicolor'],
    materials: ['Sisal', 'Wool'],
    imageColor: '#8B4513'
  },
  {
    id: '6',
    name: 'Geometric Wall Art',
    description: 'A set of 2 wall hangings featuring traditional geometric patterns.',
    price: 2500,
    category: 'Wall Decor',
    colors: ['Black', 'White'],
    materials: ['Sisal'],
    imageColor: '#333333'
  }
];
