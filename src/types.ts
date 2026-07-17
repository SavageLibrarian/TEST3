export interface Book {
  id: string;
  title: string;
  author: string;
  isbn: string;
  genre: string;
  coverUrl: string;
  description: string;
  publishYear: number;
  copiesAvailable: number;
  totalCopies: number;
  rating: number;
  format: 'Hardcover' | 'eBook' | 'Audiobook' | 'PDF';
}

export interface LibraryEvent {
  id: string;
  title: string;
  description: string;
  date: string;
  time: string;
  location: string;
  audience: 'Kids' | 'Teens' | 'Adults' | 'All';
  category: 'Book Club' | 'Technology' | 'Storytime' | 'Creative' | 'Workshop';
  spotsRemaining: number;
  maxSpots: number;
}

export interface StudyRoom {
  id: string;
  name: string;
  capacity: number;
  branch: string;
  amenities: string[];
  floor: string;
}

export interface RoomReservation {
  id: string;
  roomId: string;
  roomName: string;
  branch: string;
  date: string;
  timeSlot: string;
  userEmail: string;
  userName: string;
}

export interface LibraryCard {
  cardNumber: string;
  userName: string;
  email: string;
  issueDate: string;
  expiryDate: string;
  barcodeValue: string;
  status: 'Active' | 'Suspended';
}

export interface BorrowedBook {
  id: string;
  bookId: string;
  bookTitle: string;
  bookAuthor: string;
  coverUrl: string;
  checkoutDate: string;
  dueDate: string;
  daysLeft: number;
  status: 'Active' | 'Overdue' | 'Renewed' | 'Returned';
}
