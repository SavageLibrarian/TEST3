import React, { useState, useMemo } from 'react';
import { Search, Heart, Star, BookOpen, Clock, Filter, ArrowUpDown, X, Check, Eye } from 'lucide-react';
import { Book, BorrowedBook } from '../types';
import { BOOKS } from '../data';

interface ExploreProps {
  searchQuery: string;
  setSearchQuery: (query: string) => void;
  formatFilter: string;
  setFormatFilter: (format: string) => void;
  borrowedBooks: BorrowedBook[];
  onBorrowBook: (book: Book) => void;
  savedBookshelf: string[];
  onToggleBookshelf: (id: string) => void;
}

export default function Explore({
  searchQuery,
  setSearchQuery,
  formatFilter,
  setFormatFilter,
  borrowedBooks,
  onBorrowBook,
  savedBookshelf,
  onToggleBookshelf
}: ExploreProps) {
  // Local filter states
  const [selectedGenres, setSelectedGenres] = useState<string[]>([]);
  const [availableOnly, setAvailableOnly] = useState(false);
  const [sortBy, setSortBy] = useState<'rating' | 'year' | 'title'>('rating');
  const [selectedBook, setSelectedBook] = useState<Book | null>(null);

  const genresList = useMemo(() => {
    return Array.from(new Set(BOOKS.map(b => b.genre)));
  }, []);

  // Filter logic
  const filteredBooks = useMemo(() => {
    return BOOKS.filter((book) => {
      // 1. Search Query
      const query = searchQuery.toLowerCase().trim();
      if (query) {
        const matchesTitle = book.title.toLowerCase().includes(query);
        const matchesAuthor = book.author.toLowerCase().includes(query);
        const matchesGenre = book.genre.toLowerCase().includes(query);
        const matchesIsbn = book.isbn.includes(query);
        if (!matchesTitle && !matchesAuthor && !matchesGenre && !matchesIsbn) {
          return false;
        }
      }

      // 2. Format
      if (formatFilter !== 'All' && book.format !== formatFilter) {
        return false;
      }

      // 3. Genres
      if (selectedGenres.length > 0 && !selectedGenres.includes(book.genre)) {
        return false;
      }

      // 4. Availability
      if (availableOnly && book.copiesAvailable === 0) {
        return false;
      }

      return true;
    }).sort((a, b) => {
      if (sortBy === 'rating') return b.rating - a.rating;
      if (sortBy === 'year') return b.publishYear - a.publishYear;
      if (sortBy === 'title') return a.title.localeCompare(b.title);
      return 0;
    });
  }, [searchQuery, formatFilter, selectedGenres, availableOnly, sortBy]);

  const toggleGenre = (genre: string) => {
    if (selectedGenres.includes(genre)) {
      setSelectedGenres(selectedGenres.filter(g => g !== genre));
    } else {
      setSelectedGenres([...selectedGenres, genre]);
    }
  };

  const clearAllFilters = () => {
    setSelectedGenres([]);
    setFormatFilter('All');
    setAvailableOnly(false);
    setSearchQuery('');
    setSortBy('rating');
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 font-sans" id="explore-catalog-container">
      
      {/* Title */}
      <div className="space-y-1.5 mb-6">
        <h1 className="font-display font-bold text-3xl sm:text-4xl tracking-normal text-slate-900">
          Library Catalogue
        </h1>
        <p className="text-slate-500 text-sm max-w-xl">
          Search and browse our complete database of physical books, electronic resources, academic journals, and PDF archives.
        </p>
      </div>

      {/* Perlego Official Partnership Banner */}
      <div className="bg-[#1e3e62] text-white p-5 rounded-2xl border border-blue-500/20 flex flex-col sm:flex-row items-center justify-between gap-5 shadow-xs mb-8">
        <div className="flex items-center space-x-4">
          <div className="bg-white/10 p-3 rounded-xl text-blue-300 shrink-0">
            <BookOpen className="w-6 h-6" />
          </div>
          <div className="space-y-1">
            <h4 className="font-bold text-sm sm:text-base">Access 1,000,000+ textbooks instantly on Perlego</h4>
            <p className="text-xs text-slate-200 leading-relaxed max-w-2xl">
              City College Dublin partners with Perlego to provide direct academic e-book access. Find core modules, reference readings, and digital textbooks instantly.
            </p>
          </div>
        </div>
        <a 
          href="https://www.perlego.com/home" 
          target="_blank" 
          rel="noopener noreferrer"
          className="bg-white hover:bg-slate-50 text-[#1e3e62] text-xs font-bold px-4.5 py-2.5 rounded-xl transition-all shadow-xs flex items-center space-x-1.5 shrink-0 hover:scale-[1.02] active:scale-[0.98]"
        >
          <span>Open Perlego Library</span>
          <Eye aria-hidden="true" className="w-3.5 h-3.5" />
          <span className="sr-only"> (opens in a new tab)</span>
        </a>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
        
        {/* Left Side: Desktop Filters Panel */}
        <aside className="hidden lg:block bg-white p-6 rounded-xl shadow-sm border border-slate-200 h-fit space-y-6" id="catalog-sidebar-filters">
          <div className="flex justify-between items-center pb-4 border-b border-slate-100">
            <h2 className="font-sans font-bold text-slate-900 flex items-center space-x-2 text-sm uppercase tracking-wider">
              <Filter className="w-4 h-4 text-blue-600" />
              <span>Filters</span>
            </h2>
            <button 
              onClick={clearAllFilters}
              className="text-xs text-slate-400 hover:text-blue-600 font-bold transition-colors cursor-pointer"
            >
              Clear All
            </button>
          </div>

          {/* Formats filter */}
          <div className="space-y-3">
            <h3 className="text-xs font-bold text-slate-700 uppercase tracking-wider">Format</h3>
            <div className="space-y-2 text-sm text-slate-600">
              {['All', 'Hardcover', 'eBook', 'Audiobook', 'PDF'].map((fmt) => (
                <label key={fmt} className="flex items-center space-x-2.5 cursor-pointer hover:text-slate-950 transition-colors">
                  <input
                    type="radio"
                    name="format"
                    checked={formatFilter === fmt}
                    onChange={() => setFormatFilter(fmt)}
                    className="accent-blue-600"
                  />
                  <span>{fmt}</span>
                </label>
              ))}
            </div>
          </div>

          {/* Genres check filter */}
          <div className="space-y-3">
            <h3 className="text-xs font-bold text-slate-700 uppercase tracking-wider">Genre</h3>
            <div className="space-y-2 text-sm text-slate-600">
              {genresList.map((gen) => (
                <label key={gen} className="flex items-center space-x-2.5 cursor-pointer hover:text-slate-950 transition-colors">
                  <input
                    type="checkbox"
                    checked={selectedGenres.includes(gen)}
                    onChange={() => toggleGenre(gen)}
                    className="accent-blue-600 rounded"
                  />
                  <span>{gen}</span>
                </label>
              ))}
            </div>
          </div>

          {/* Availability check filter */}
          <div className="pt-4 border-t border-slate-100">
            <label className="flex items-center space-x-2.5 cursor-pointer text-sm text-slate-700 hover:text-slate-950 font-medium">
              <input
                type="checkbox"
                checked={availableOnly}
                onChange={() => setAvailableOnly(!availableOnly)}
                className="accent-blue-600 rounded"
              />
              <span>Available Now</span>
            </label>
          </div>
        </aside>

        {/* Right Side: Search input & Catalog grid */}
        <section className="lg:col-span-3 space-y-6">
          {/* Mobile filter buttons & Sort panel */}
          <div className="bg-white p-4 rounded-xl shadow-sm border border-slate-200 flex flex-col sm:flex-row items-center justify-between gap-4">
            
            {/* Search Input inside Section */}
            <div className="grow w-full relative">
              <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-3.5 shrink-0" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search catalog titles, authors, ISBN..."
                className="w-full bg-slate-50 border border-slate-200 focus:border-blue-600 rounded-xl pl-10 pr-4 py-2.5 text-sm outline-none transition-all text-slate-900"
              />
              {searchQuery && (
                <button 
                  onClick={() => setSearchQuery('')}
                  className="absolute right-3 top-3.5 text-slate-400 hover:text-slate-600"
                >
                  <X className="w-4 h-4" />
                </button>
              )}
            </div>

            {/* Sort Dropdown */}
            <div className="flex items-center space-x-2 shrink-0 self-end sm:self-auto text-sm">
              <ArrowUpDown className="w-4 h-4 text-slate-400" />
              <span className="text-slate-500">Sort by:</span>
              <select
                value={sortBy}
                onChange={(e: any) => setSortBy(e.target.value)}
                className="bg-slate-50 border border-slate-200 hover:border-slate-300 rounded-lg px-2.5 py-1.5 text-xs font-semibold text-slate-800 outline-none cursor-pointer transition-colors"
              >
                <option value="rating">Rating (Highest)</option>
                <option value="year">Publish Year (Newest)</option>
                <option value="title">Title (A-Z)</option>
              </select>
            </div>
          </div>

          {/* Quick Stats / Active Filters pill list */}
          {(selectedGenres.length > 0 || formatFilter !== 'All' || availableOnly || searchQuery) && (
            <div className="flex flex-wrap items-center gap-2 text-xs">
              <span className="text-slate-500">Active Filters:</span>
              {formatFilter !== 'All' && (
                <span className="bg-blue-50 text-blue-700 border border-blue-200 rounded-full px-2.5 py-1 flex items-center space-x-1.5 font-medium">
                  <span>Format: {formatFilter}</span>
                  <button onClick={() => setFormatFilter('All')} className="hover:text-blue-950 font-bold">×</button>
                </span>
              )}
              {selectedGenres.map(g => (
                <span key={g} className="bg-slate-100 text-slate-700 border border-slate-200 rounded-full px-2.5 py-1 flex items-center space-x-1.5 font-medium">
                  <span>{g}</span>
                  <button onClick={() => toggleGenre(g)} className="hover:text-slate-950 font-bold">×</button>
                </span>
              ))}
              {availableOnly && (
                <span className="bg-emerald-50 text-emerald-700 border border-emerald-200 rounded-full px-2.5 py-1 flex items-center space-x-1.5 font-medium">
                  <span>Available Now</span>
                  <button onClick={() => setAvailableOnly(false)} className="hover:text-emerald-950 font-bold">×</button>
                </span>
              )}
              {searchQuery && (
                <span className="bg-blue-50 text-blue-700 border border-blue-200 rounded-full px-2.5 py-1 flex items-center space-x-1.5 font-medium">
                  <span>Query: "{searchQuery}"</span>
                  <button onClick={() => setSearchQuery('')} className="hover:text-blue-950 font-bold">×</button>
                </span>
              )}
              <button 
                onClick={clearAllFilters}
                className="text-xs text-blue-600 hover:text-blue-800 font-bold border-b border-blue-600/30"
              >
                Clear All
              </button>
            </div>
          )}

          {/* Results Grid */}
          {filteredBooks.length === 0 ? (
            <div className="bg-white rounded-xl border border-slate-200 py-16 px-4 text-center space-y-4">
              <BookOpen className="w-12 h-12 text-slate-300 mx-auto" />
              <div className="space-y-1">
                <p className="font-sans font-bold text-slate-900 text-lg">No Catalogue Items Found</p>
                <p className="text-slate-400 text-sm max-w-md mx-auto leading-relaxed">
                  We couldn't find any books matching your search filters. Try clearing your queries or selecting another book format.
                </p>
              </div>
              <button
                onClick={clearAllFilters}
                className="bg-slate-900 hover:bg-blue-600 text-white text-xs font-bold px-4 py-2.5 rounded-lg transition-colors cursor-pointer"
              >
                Reset All Filters
              </button>
            </div>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6" id="catalog-books-list">
              {filteredBooks.map((book) => {
                const isBorrowed = borrowedBooks.some(b => b.bookId === book.id && b.status !== 'Returned');
                const isSaved = savedBookshelf.includes(book.id);
                return (
                  <div 
                    key={book.id}
                    className="bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-md border border-slate-200 hover:border-slate-300 flex flex-col justify-between transition-all duration-300 group"
                  >
                    {/* Cover image wrapper */}
                    <div className="relative aspect-3/4 bg-slate-50 overflow-hidden">
                      <img
                        src={book.coverUrl}
                        alt={book.title}
                        referrerPolicy="no-referrer"
                        className="w-full h-full object-cover group-hover:scale-102 transition-transform duration-500"
                      />
                      
                      {/* Top Overlay badges */}
                      <div className="absolute inset-x-3 top-3 flex items-center justify-between">
                        <span className="bg-slate-900/80 backdrop-blur-md text-white text-[10px] font-bold tracking-wider uppercase px-2.5 py-1 rounded-md border border-slate-700">
                          {book.format}
                        </span>
                        
                        {/* Bookshelf saved toggle */}
                        <button
                          onClick={() => onToggleBookshelf(book.id)}
                          className={`w-7.5 h-7.5 rounded-full bg-white/90 backdrop-blur-md shadow-md flex items-center justify-center cursor-pointer hover:scale-110 active:scale-95 transition-all ${
                            isSaved ? 'text-rose-500' : 'text-slate-400 hover:text-rose-500'
                          }`}
                          aria-label={isSaved ? "Remove from Saved Books" : "Save to Bookshelf"}
                        >
                          <Heart className="w-4 h-4 fill-current" />
                        </button>
                      </div>

                      {/* Detail overlay hover view */}
                      <div className="absolute inset-0 bg-slate-950/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                        <button
                          onClick={() => setSelectedBook(book)}
                          className="bg-white text-slate-900 text-xs font-bold px-4 py-2.5 rounded-lg shadow-lg flex items-center space-x-1.5 hover:bg-blue-600 hover:text-white transition-all scale-95 group-hover:scale-100 cursor-pointer duration-300"
                        >
                          <Eye className="w-4 h-4" />
                          <span>View Details</span>
                        </button>
                      </div>
                    </div>

                    {/* Book Text description */}
                    <div className="p-5 grow flex flex-col justify-between">
                      <div className="space-y-1">
                        <p className="text-[10px] text-blue-600 font-bold uppercase tracking-widest">{book.genre}</p>
                        <h3 className="font-sans font-bold text-base text-slate-900 leading-snug group-hover:text-blue-600 transition-colors cursor-pointer line-clamp-1" onClick={() => setSelectedBook(book)}>
                          {book.title}
                        </h3>
                        <p className="text-xs text-slate-500">by {book.author}</p>
                      </div>

                      <div className="space-y-3 pt-3.5 mt-4 border-t border-slate-100 text-xs">
                        <div className="flex items-center justify-between text-slate-400">
                          <span>Year: {book.publishYear}</span>
                          <span className={`font-semibold ${book.copiesAvailable > 0 ? 'text-emerald-600' : 'text-rose-600'}`}>
                            {book.copiesAvailable > 0 ? `${book.copiesAvailable} copies left` : 'Out of Stock'}
                          </span>
                        </div>

                        <div className="flex justify-between items-center gap-2">
                          {/* Star Rating view */}
                          <div className="flex items-center space-x-1 font-semibold text-amber-500 shrink-0">
                            <Star className="w-3.5 h-3.5 fill-current" />
                            <span className="text-[11px]">{book.rating}</span>
                          </div>

                          {/* Checkout button */}
                          {isBorrowed ? (
                            <div className="grow bg-emerald-50 text-emerald-700 text-center py-2 rounded-lg font-bold border border-emerald-200">
                              Reserved
                            </div>
                          ) : (
                            <button
                              onClick={() => onBorrowBook(book)}
                              disabled={book.copiesAvailable === 0}
                              className={`grow py-2 rounded-lg font-bold transition-all text-center cursor-pointer ${
                                book.copiesAvailable === 0
                                  ? 'bg-slate-100 text-slate-400 cursor-not-allowed border border-slate-200'
                                  : 'bg-slate-900 hover:bg-blue-600 text-white'
                              }`}
                            >
                              Reserve
                            </button>
                          )}
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          )}
        </section>
      </div>

      {/* Book details slide-in drawer modal */}
      {selectedBook && (
        <div className="fixed inset-0 z-50 overflow-hidden" id="book-details-drawer-wrapper">
          <div className="absolute inset-0 overflow-hidden">
            {/* Dark background backdrop */}
            <div 
              onClick={() => setSelectedBook(null)}
              className="absolute inset-0 bg-slate-950/60 backdrop-blur-sm transition-opacity"
            ></div>

            <div className="fixed inset-y-0 right-0 max-w-full flex pl-10">
              <div className="w-screen max-w-md bg-white text-slate-900 shadow-2xl flex flex-col justify-between border-l border-slate-200">
                
                {/* Drawer upper body */}
                <div className="grow overflow-y-auto">
                  
                  {/* Image cover background block */}
                  <div className="relative h-64 bg-slate-100">
                    <img
                      src={selectedBook.coverUrl}
                      alt={selectedBook.title}
                      referrerPolicy="no-referrer"
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-white via-transparent to-black/40"></div>
                    <button 
                      onClick={() => setSelectedBook(null)}
                      className="absolute top-4 left-4 w-9 h-9 rounded-full bg-slate-950/50 hover:bg-slate-950/80 text-white flex items-center justify-center cursor-pointer transition-all shadow-md"
                    >
                      <X className="w-5 h-5" />
                    </button>
                  </div>

                  {/* Body textual information */}
                  <div className="p-6 space-y-6">
                    <div className="space-y-1.5">
                      <span className="bg-blue-50 text-blue-700 border border-blue-200 text-[10px] font-bold uppercase tracking-wider px-2.5 py-1 rounded-md">
                        {selectedBook.genre}
                      </span>
                      <h2 className="font-sans font-bold text-2xl tracking-tight text-slate-900 pt-1 leading-snug">
                        {selectedBook.title}
                      </h2>
                      <p className="text-sm text-slate-500">by <span className="font-semibold text-slate-800">{selectedBook.author}</span></p>
                    </div>

                    {/* Meta stats badge grid */}
                    <div className="grid grid-cols-3 gap-2.5 text-center py-4 border-t border-b border-slate-100">
                      <div>
                        <p className="text-[10px] text-slate-400 uppercase font-mono tracking-wider">Rating</p>
                        <p className="text-sm font-bold text-slate-900 mt-0.5 flex items-center justify-center space-x-1">
                          <Star className="w-4 h-4 text-amber-400 fill-current shrink-0" />
                          <span>{selectedBook.rating}</span>
                        </p>
                      </div>
                      <div>
                        <p className="text-[10px] text-slate-400 uppercase font-mono tracking-wider">Format</p>
                        <p className="text-sm font-bold text-slate-900 mt-0.5">{selectedBook.format}</p>
                      </div>
                      <div>
                        <p className="text-[10px] text-slate-400 uppercase font-mono tracking-wider">Year</p>
                        <p className="text-sm font-bold text-slate-900 mt-0.5">{selectedBook.publishYear}</p>
                      </div>
                    </div>

                    {/* Book description */}
                    <div className="space-y-2 text-sm leading-relaxed text-slate-600">
                      <h4 className="font-sans font-bold text-slate-900 text-sm">Description</h4>
                      <p>{selectedBook.description}</p>
                    </div>

                    {/* Tech details */}
                    <div className="bg-slate-50 rounded-xl p-4 space-y-2 text-xs border border-slate-200 text-slate-600">
                      <p><span className="font-bold text-slate-800">ISBN:</span> {selectedBook.isbn}</p>
                      <p>
                        <span className="font-bold text-slate-800">Available Status:</span>{' '}
                        <span className={selectedBook.copiesAvailable > 0 ? 'text-emerald-600 font-semibold' : 'text-rose-600 font-semibold'}>
                          {selectedBook.copiesAvailable > 0 ? `${selectedBook.copiesAvailable} out of ${selectedBook.totalCopies} copies available` : 'Out of Stock'}
                        </span>
                      </p>
                    </div>
                  </div>
                </div>

                {/* Drawer Footer actions */}
                <div className="p-6 border-t border-slate-100 bg-slate-50 flex items-center space-x-3.5">
                  <button
                    onClick={() => {
                      onToggleBookshelf(selectedBook.id);
                    }}
                    className={`p-3 rounded-lg border flex items-center justify-center cursor-pointer active:scale-95 transition-all ${
                      savedBookshelf.includes(selectedBook.id)
                        ? 'bg-rose-50 border-rose-200 text-rose-500'
                        : 'bg-white border-slate-200 text-slate-400 hover:text-slate-600'
                    }`}
                    aria-label="Save to Bookshelf"
                  >
                    <Heart className="w-5 h-5 fill-current" />
                  </button>

                  {borrowedBooks.some(b => b.bookId === selectedBook.id && b.status !== 'Returned') ? (
                    <div className="grow bg-emerald-50 text-emerald-700 text-center py-3 rounded-lg font-bold border border-emerald-200 text-sm">
                      Already Reserved
                    </div>
                  ) : (
                    <button
                      onClick={() => {
                        onBorrowBook(selectedBook);
                      }}
                      disabled={selectedBook.copiesAvailable === 0}
                      className={`grow py-3 rounded-lg font-bold text-sm shadow transition-colors text-center cursor-pointer ${
                        selectedBook.copiesAvailable === 0
                          ? 'bg-slate-200 text-slate-400 cursor-not-allowed border border-slate-300'
                          : 'bg-slate-900 hover:bg-blue-600 text-white'
                      }`}
                    >
                      {selectedBook.copiesAvailable === 0 ? 'Out of Stock' : 'Reserve Library Title'}
                    </button>
                  )}
                </div>

              </div>
            </div>
          </div>
        </div>
      )}

    </div>
  );
}
