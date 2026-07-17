import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import LibraryCardModal from './components/LibraryCardModal';
import Home from './pages/Home';
import Explore from './pages/Explore';
import Services from './pages/Services';
import Events from './pages/Events';
import Locations from './pages/Locations';
import Account from './pages/Account';
import WritingSupports from './pages/WritingSupports';
import Workshops from './pages/Workshops';
import Accessibility from './pages/Accessibility';
import { Book, LibraryEvent, RoomReservation, BorrowedBook, LibraryCard } from './types';
import { BOOKS, EVENTS } from './data';

export default function App() {
  // Navigation & filter states shared across pages
  const [currentPage, setCurrentPage] = useState<string>(() => {
    const hash = window.location.hash.replace('#', '');
    const validPages = ['home', 'explore', 'services', 'writing-supports', 'events', 'workshops', 'locations', 'account', 'accessibility'];
    return (hash && validPages.includes(hash)) ? hash : 'home';
  });
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [formatFilter, setFormatFilter] = useState<string>('All');
  const [isCardModalOpen, setIsCardModalOpen] = useState<boolean>(false);

  // Synchronize currentPage with URL hash for browser back/forward buttons
  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash.replace('#', '');
      const validPages = ['home', 'explore', 'services', 'writing-supports', 'events', 'workshops', 'locations', 'account', 'accessibility'];
      if (hash && validPages.includes(hash)) {
        setCurrentPage(hash);
      } else {
        setCurrentPage('home');
        if (window.location.hash !== '#home') {
          window.location.hash = 'home';
        }
      }
    };

    window.addEventListener('hashchange', handleHashChange);
    
    // Ensure initial hash is set
    if (!window.location.hash) {
      window.location.hash = 'home';
    }

    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  // Update hash when currentPage changes
  useEffect(() => {
    if (currentPage && window.location.hash.replace('#', '') !== currentPage) {
      window.location.hash = currentPage;
    }
  }, [currentPage]);

  // Automatic scroll restoration: reset viewport scroll position to top upon every route/page change
  useEffect(() => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: 'auto'
    });
  }, [currentPage]);

  // Persistence States (Initialize from localStorage if they exist)
  const [libraryCard, setLibraryCard] = useState<LibraryCard | null>(() => {
    const saved = localStorage.getItem('citylib_card');
    return saved ? JSON.parse(saved) : null;
  });

  const [borrowedBooks, setBorrowedBooks] = useState<BorrowedBook[]>(() => {
    const saved = localStorage.getItem('citylib_borrowed');
    return saved ? JSON.parse(saved) : [];
  });

  const [roomReservations, setRoomReservations] = useState<RoomReservation[]>(() => {
    const saved = localStorage.getItem('citylib_rooms');
    return saved ? JSON.parse(saved) : [];
  });

  const [registeredEvents, setRegisteredEvents] = useState<string[]>(() => {
    const saved = localStorage.getItem('citylib_events');
    return saved ? JSON.parse(saved) : [];
  });

  const [savedBookshelf, setSavedBookshelf] = useState<string[]>(() => {
    const saved = localStorage.getItem('citylib_shelf');
    return saved ? JSON.parse(saved) : [];
  });

  // Keep track of dynamic book copies remaining in active session memory
  const [dynamicBooks, setDynamicBooks] = useState<Book[]>(BOOKS);

  // Keep track of dynamic event spaces remaining in active session memory
  const [dynamicEvents, setDynamicEvents] = useState<LibraryEvent[]>(EVENTS);

  // Sync to localstorage on changes
  useEffect(() => {
    if (libraryCard) {
      localStorage.setItem('citylib_card', JSON.stringify(libraryCard));
    } else {
      localStorage.removeItem('citylib_card');
    }
  }, [libraryCard]);

  useEffect(() => {
    localStorage.setItem('citylib_borrowed', JSON.stringify(borrowedBooks));
  }, [borrowedBooks]);

  useEffect(() => {
    localStorage.setItem('citylib_rooms', JSON.stringify(roomReservations));
  }, [roomReservations]);

  useEffect(() => {
    localStorage.setItem('citylib_events', JSON.stringify(registeredEvents));
  }, [registeredEvents]);

  useEffect(() => {
    localStorage.setItem('citylib_shelf', JSON.stringify(savedBookshelf));
  }, [savedBookshelf]);

  // Handle library card sign up
  const handleRegisterCard = (name: string, email: string) => {
    const randomCardNum = 'CL-' + Math.floor(100000 + Math.random() * 900000);
    const today = new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' });
    const nextYear = new Date();
    nextYear.setFullYear(nextYear.getFullYear() + 2);
    const expiry = nextYear.toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' });

    const newCard: LibraryCard = {
      cardNumber: randomCardNum,
      userName: name,
      email: email,
      issueDate: today,
      expiryDate: expiry,
      barcodeValue: randomCardNum.replace('-', ''),
      status: 'Active'
    };

    setLibraryCard(newCard);
  };

  const handleLogout = () => {
    setLibraryCard(null);
    setBorrowedBooks([]);
    setRoomReservations([]);
    setRegisteredEvents([]);
    // Reset pages copies to default
    setDynamicBooks(BOOKS);
    setDynamicEvents(EVENTS);
    setCurrentPage('home');
  };

  // Handle borrowing book copies
  const handleBorrowBook = (book: Book) => {
    if (!libraryCard) {
      setIsCardModalOpen(true);
      return;
    }

    const alreadyBorrowed = borrowedBooks.some(b => b.bookId === book.id && b.status !== 'Returned');
    if (alreadyBorrowed) return;

    // Check availability
    const targetBook = dynamicBooks.find(b => b.id === book.id);
    if (targetBook && targetBook.copiesAvailable > 0) {
      // Decrease dynamic copies available
      setDynamicBooks(prev => prev.map(b => b.id === book.id ? { ...b, copiesAvailable: b.copiesAvailable - 1 } : b));

      const today = new Date();
      const checkoutDateStr = today.toLocaleDateString('en-US', { year: 'numeric', month: 'short', day: 'numeric' });
      
      const due = new Date();
      due.setDate(due.getDate() + 21); // 21 days checkout duration
      const dueDateStr = due.toLocaleDateString('en-US', { year: 'numeric', month: 'short', day: 'numeric' });

      const newLoan: BorrowedBook = {
        id: 'loan-' + Math.random().toString(36).substring(2, 9),
        bookId: book.id,
        bookTitle: book.title,
        bookAuthor: book.author,
        coverUrl: book.coverUrl,
        checkoutDate: checkoutDateStr,
        dueDate: dueDateStr,
        daysLeft: 21,
        status: 'Active'
      };

      setBorrowedBooks([newLoan, ...borrowedBooks]);
    }
  };

  // Renew book checkout
  const handleRenewBook = (loanId: string) => {
    setBorrowedBooks(prev => prev.map((loan) => {
      if (loan.id === loanId && loan.status !== 'Returned') {
        const currentDueDate = new Date(loan.dueDate);
        currentDueDate.setDate(currentDueDate.getDate() + 14); // Extended by 14 days
        const newDueDateStr = currentDueDate.toLocaleDateString('en-US', { year: 'numeric', month: 'short', day: 'numeric' });
        return {
          ...loan,
          dueDate: newDueDateStr,
          daysLeft: loan.daysLeft + 14,
          status: 'Renewed' as const
        };
      }
      return loan;
    }));
  };

  // Return borrowed book copy back
  const handleReturnBook = (loanId: string) => {
    const loanToReturn = borrowedBooks.find(l => l.id === loanId);
    if (loanToReturn) {
      // Increase copies available back in catalog
      setDynamicBooks(prev => prev.map(b => b.id === loanToReturn.bookId ? { ...b, copiesAvailable: b.copiesAvailable + 1 } : b));
      // Remove from loans
      setBorrowedBooks(prev => prev.filter(l => l.id !== loanId));
    }
  };

  // RSVP for Events
  const handleRSVPEvent = (event: LibraryEvent) => {
    if (!libraryCard) {
      setIsCardModalOpen(true);
      return;
    }

    if (registeredEvents.includes(event.id)) return;

    // Decrease spots
    const targetEvent = dynamicEvents.find(e => e.id === event.id);
    if (targetEvent && targetEvent.spotsRemaining > 0) {
      setDynamicEvents(prev => prev.map(e => e.id === event.id ? { ...e, spotsRemaining: e.spotsRemaining - 1 } : e));
      setRegisteredEvents([...registeredEvents, event.id]);
    }
  };

  // Cancel Event RSVP
  const handleCancelEventRSVP = (eventId: string) => {
    setRegisteredEvents(prev => prev.filter(id => id !== eventId));
    // Increase spots
    setDynamicEvents(prev => prev.map(e => e.id === eventId ? { ...e, spotsRemaining: e.spotsRemaining + 1 } : e));
  };

  // Study Rooms reservation
  const handleAddReservation = (res: RoomReservation) => {
    setRoomReservations([res, ...roomReservations]);
  };

  const handleCancelReservation = (resId: string) => {
    setRoomReservations(prev => prev.filter(r => r.id !== resId));
  };

  // Saved Bookshelf toggling
  const handleToggleBookshelf = (id: string) => {
    if (savedBookshelf.includes(id)) {
      setSavedBookshelf(prev => prev.filter(bId => bId !== id));
    } else {
      setSavedBookshelf([...savedBookshelf, id]);
    }
  };

  // Simple client routing helper switch
  const renderActivePage = () => {
    switch (currentPage) {
      case 'home':
        return (
          <Home
            setCurrentPage={setCurrentPage}
            setSearchQuery={setSearchQuery}
            setFormatFilter={setFormatFilter}
            onOpenCardModal={() => setIsCardModalOpen(true)}
            libraryCard={libraryCard}
            borrowedBooks={borrowedBooks}
            onBorrowBook={handleBorrowBook}
            registeredEvents={registeredEvents}
            onRSVPEvent={handleRSVPEvent}
          />
        );
      case 'explore':
        return (
          <Explore
            searchQuery={searchQuery}
            setSearchQuery={setSearchQuery}
            formatFilter={formatFilter}
            setFormatFilter={setFormatFilter}
            borrowedBooks={borrowedBooks}
            onBorrowBook={handleBorrowBook}
            savedBookshelf={savedBookshelf}
            onToggleBookshelf={handleToggleBookshelf}
          />
        );
      case 'services':
        return <Services />;
      case 'writing-supports':
        return <WritingSupports />;
      case 'workshops':
        return <Workshops />;
      case 'events':
        return (
          <Events
            libraryCard={libraryCard}
            onOpenCardModal={() => setIsCardModalOpen(true)}
            registeredEvents={registeredEvents}
            onRSVPEvent={handleRSVPEvent}
          />
        );
      case 'locations':
        return <Locations />;
      case 'account':
        return (
          <Account
            libraryCard={libraryCard}
            onOpenCardModal={() => setIsCardModalOpen(true)}
            onLogout={handleLogout}
            borrowedBooks={borrowedBooks}
            onRenewBook={handleRenewBook}
            onReturnBook={handleReturnBook}
            roomReservations={roomReservations}
            onCancelReservation={handleCancelReservation}
            registeredEvents={registeredEvents}
            onCancelEventRSVP={handleCancelEventRSVP}
            savedBookshelf={savedBookshelf}
            onToggleBookshelf={handleToggleBookshelf}
          />
        );
      case 'accessibility':
        return <Accessibility setCurrentPage={setCurrentPage} />;
      default:
        return <Home setCurrentPage={setCurrentPage} setSearchQuery={setSearchQuery} setFormatFilter={setFormatFilter} onOpenCardModal={() => setIsCardModalOpen(true)} libraryCard={libraryCard} borrowedBooks={borrowedBooks} onBorrowBook={handleBorrowBook} registeredEvents={registeredEvents} onRSVPEvent={handleRSVPEvent} />;
    }
  };

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 font-sans flex flex-col justify-between">
      
      {/* Persistant Header */}
      <Header
        currentPage={currentPage}
        setCurrentPage={setCurrentPage}
        libraryCard={libraryCard}
        onOpenCardModal={() => setIsCardModalOpen(true)}
      />

      {/* Main Dynamic View Layout */}
      <main className="grow">
        {renderActivePage()}
      </main>

      {/* Persistant Footer */}
      <Footer setCurrentPage={setCurrentPage} />

      {/* Registration/Info Modal overlay */}
      <LibraryCardModal
        isOpen={isCardModalOpen}
        onClose={() => setIsCardModalOpen(false)}
        libraryCard={libraryCard}
        onRegister={handleRegisterCard}
      />

    </div>
  );
}
