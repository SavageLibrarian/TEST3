import { Book, LibraryEvent, StudyRoom } from './types';

export const BOOKS: Book[] = [
  {
    id: 'b1',
    title: 'The Echo of Silence',
    author: 'Elena Rostova',
    isbn: '978-3-16-148410-0',
    genre: 'Fiction & Literature',
    coverUrl: 'https://images.unsplash.com/photo-1544947950-fa07a98d237f?auto=format&fit=crop&q=80&w=400',
    description: 'A sweeping family drama set across three generations in northern Europe, exploring secrets kept and voices silenced by time.',
    publishYear: 2022,
    copiesAvailable: 3,
    totalCopies: 5,
    rating: 4.8,
    format: 'Hardcover'
  },
  {
    id: 'b2',
    title: 'Quantum Mechanics for Poets',
    author: 'Dr. Marcus Vance',
    isbn: '978-0-12-345678-9',
    genre: 'Science & Tech',
    coverUrl: 'https://images.unsplash.com/photo-1532012197267-da84d127e765?auto=format&fit=crop&q=80&w=400',
    description: 'An elegant, jargon-free introduction to the strange and beautiful subatomic universe, written for thinkers and creators.',
    publishYear: 2021,
    copiesAvailable: 0,
    totalCopies: 3,
    rating: 4.6,
    format: 'eBook'
  },
  {
    id: 'b3',
    title: 'A History of Lost Cities',
    author: 'Arthur Pendelton',
    isbn: '978-1-40-289462-6',
    genre: 'History & Biography',
    coverUrl: 'https://images.unsplash.com/photo-1506880018603-83d5b814b5a6?auto=format&fit=crop&q=80&w=400',
    description: 'Delve into the archaeology and mystery of ancient metropolises that flourished and vanished, from Central America to Central Asia.',
    publishYear: 2023,
    copiesAvailable: 4,
    totalCopies: 6,
    rating: 4.9,
    format: 'Hardcover'
  },
  {
    id: 'b4',
    title: 'Designing with Purpose',
    author: 'Siddharth Mehta',
    isbn: '978-2-88-912345-0',
    genre: 'Science & Tech',
    coverUrl: 'https://images.unsplash.com/photo-1512820790803-83ca734da794?auto=format&fit=crop&q=80&w=400',
    description: 'The ultimate textbook on human-centered design principles, digital interfaces, and physical spatial structures.',
    publishYear: 2023,
    copiesAvailable: 2,
    totalCopies: 4,
    rating: 4.7,
    format: 'PDF'
  },
  {
    id: 'b5',
    title: 'The Art of Mindful Breathing',
    author: 'Thich Minh Khang',
    isbn: '978-5-67-891011-2',
    genre: 'Self-Help & Wellness',
    coverUrl: 'https://images.unsplash.com/photo-1518241353330-0f7941c2d9b5?auto=format&fit=crop&q=80&w=400',
    description: 'Simple, practical meditative exercises designed to restore focus, soothe stress, and bring present-moment awareness to daily life.',
    publishYear: 2020,
    copiesAvailable: 5,
    totalCopies: 5,
    rating: 4.5,
    format: 'Audiobook'
  },
  {
    id: 'b6',
    title: 'The Great Alchemist',
    author: 'Paulo S. Coelho',
    isbn: '978-0-06-231500-7',
    genre: 'Fiction & Literature',
    coverUrl: 'https://images.unsplash.com/photo-1474932430478-367dbb6832c1?auto=format&fit=crop&q=80&w=400',
    description: 'An allegorical fable about a young Andalusian shepherd journeying to Egypt in search of worldly riches, only to discover treasures of the soul.',
    publishYear: 2019,
    copiesAvailable: 2,
    totalCopies: 8,
    rating: 4.9,
    format: 'Hardcover'
  },
  {
    id: 'b7',
    title: 'Algorithms: Past & Future',
    author: 'Ada Lovelace III',
    isbn: '978-4-56-789012-3',
    genre: 'Science & Tech',
    coverUrl: 'https://images.unsplash.com/photo-1515879218367-8466d910aaa4?auto=format&fit=crop&q=80&w=400',
    description: 'Explore the fascinating link between the weaver looms of the 19th century and the massive neural networks of tomorrow.',
    publishYear: 2024,
    copiesAvailable: 3,
    totalCopies: 3,
    rating: 4.8,
    format: 'eBook'
  },
  {
    id: 'b8',
    title: 'Whispers of the Wind',
    author: 'Liam O\'Connor',
    isbn: '978-1-23-456789-0',
    genre: 'Poetry & Art',
    coverUrl: 'https://images.unsplash.com/photo-1497633762265-9d179a990aa6?auto=format&fit=crop&q=80&w=400',
    description: 'A lyrical collection of nature poetry celebrating the dramatic coastlines and ancient woodlands of western Ireland.',
    publishYear: 2022,
    copiesAvailable: 1,
    totalCopies: 2,
    rating: 4.4,
    format: 'Hardcover'
  }
];

export const EVENTS: LibraryEvent[] = [];

export const STUDY_ROOMS: StudyRoom[] = [
  {
    id: 'r1',
    name: 'Newton Study Room',
    capacity: 4,
    branch: 'Central Library',
    amenities: ['Whiteboard', 'LED Screen', 'Power Outlets', 'High-speed Wi-Fi'],
    floor: '2nd Floor - Quiet Wing'
  },
  {
    id: 'r2',
    name: 'Curie Collaborative Room',
    capacity: 8,
    branch: 'Central Library',
    amenities: ['Conference Table', 'Large Presentation TV', 'Wall-sized Glass Whiteboard', 'Video Conference Camera'],
    floor: '2nd Floor - East Wing'
  },
  {
    id: 'r3',
    name: 'Turing Sandbox A',
    capacity: 2,
    branch: 'Northside Tech Library',
    amenities: ['Dual Monitors', 'USB-C Charging Hubs', 'Adjustable Standing Desk'],
    floor: 'Ground Floor - Tech Sandbox'
  },
  {
    id: 'r4',
    name: 'Ada Lovelace Tech Room',
    capacity: 6,
    branch: 'Northside Tech Library',
    amenities: ['Full Smartboard', 'Fiber Optic LAN Port', 'Podcast Audio Recording Mic'],
    floor: '2nd Floor - MakerSpace Corridor'
  },
  {
    id: 'r5',
    name: 'Borges Cozy Study Spot',
    capacity: 3,
    branch: 'Westside Community Library',
    amenities: ['Armchairs', 'Natural Sunlight Roof', 'Small Mobile Whiteboard'],
    floor: '1st Floor - Quiet Alcove'
  }
];

export const BRANCHES = [
  {
    id: 'central',
    name: 'Central Library',
    address: '400 Library Plaza, Downtown',
    phone: '(555) 123-4567',
    hours: {
      weekdays: '9:00 AM - 5:00 PM',
      saturday: 'Closed',
      sunday: 'Closed'
    },
    latitude: 40.7128,
    longitude: -74.0060,
    image: 'https://images.unsplash.com/photo-1521587760476-6c12a4b040da?auto=format&fit=crop&q=80&w=600',
    facilities: ['Digital Archive', 'Rare Book Vault', 'Cafe & Bistro', 'Scholarly Study Desks']
  },
  {
    id: 'northside',
    name: 'Northside Tech Library & MakerSpace',
    address: '102 Innovation Drive, Tech District',
    phone: '(555) 987-6543',
    hours: {
      weekdays: '9:00 AM - 5:00 PM',
      saturday: 'Closed',
      sunday: 'Closed'
    },
    latitude: 40.7589,
    longitude: -73.9851,
    image: 'https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&q=80&w=600',
    facilities: ['3D Printers', 'Laser Cutters', 'Virtual Reality Sandbox', 'Audio & Video Podcasting Studios']
  },
  {
    id: 'westside',
    name: 'Westside Community Library',
    address: '88 Garden Way, West End',
    phone: '(555) 456-7890',
    hours: {
      weekdays: '9:00 AM - 5:00 PM',
      saturday: 'Closed',
      sunday: 'Closed'
    },
    latitude: 40.7484,
    longitude: -74.0012,
    image: 'https://images.unsplash.com/photo-1568667256549-094345857637?auto=format&fit=crop&q=80&w=600',
    facilities: ['Backyard Terrace', 'Children\'s Indoor Forest Playground', 'Local History Corner', 'Seed Library']
  }
];
