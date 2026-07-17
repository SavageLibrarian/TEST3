import React, { useState, useMemo } from 'react';
import { Calendar, Clock, MapPin, Search, Filter, Check, Award, BookOpen } from 'lucide-react';
import { LibraryEvent } from '../types';
import { EVENTS } from '../data';

interface EventsProps {
  libraryCard: any;
  onOpenCardModal: () => void;
  registeredEvents: string[];
  onRSVPEvent: (event: LibraryEvent) => void;
}

export default function Events({
  libraryCard,
  onOpenCardModal,
  registeredEvents,
  onRSVPEvent
}: EventsProps) {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [selectedAudience, setSelectedAudience] = useState<string>('All');
  const [searchQuery, setSearchQuery] = useState('');

  // Extract unique categories & audiences for filtering
  const categoriesList = useMemo(() => {
    return ['All', ...Array.from(new Set(EVENTS.map(e => e.category)))];
  }, []);

  const audiencesList = ['All', 'Kids', 'Teens', 'Adults'];

  // Filter events
  const filteredEvents = useMemo(() => {
    return EVENTS.filter((event) => {
      // Search text
      if (searchQuery.trim()) {
        const text = searchQuery.toLowerCase().trim();
        const matchTitle = event.title.toLowerCase().includes(text);
        const matchDesc = event.description.toLowerCase().includes(text);
        const matchLoc = event.location.toLowerCase().includes(text);
        if (!matchTitle && !matchDesc && !matchLoc) return false;
      }

      // Category
      if (selectedCategory !== 'All' && event.category !== selectedCategory) {
        return false;
      }

      // Audience
      if (selectedAudience !== 'All' && event.audience !== selectedAudience) {
        return false;
      }

      return true;
    });
  }, [searchQuery, selectedCategory, selectedAudience]);

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 font-sans" id="events-page-container">
      
      {/* Title */}
      <div className="space-y-1.5 mb-8">
        <h1 className="font-display font-bold text-3xl sm:text-4xl tracking-normal text-slate-900">
          Events Calendar
        </h1>
        <p className="text-slate-500 text-sm max-w-xl">
          Register for daily interactive workshops, academic seminars, researcher circulars, and technology sessions. All events are free.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
        
        {/* Left Side: Filtering options */}
        <aside className="bg-white p-6 rounded-xl shadow-sm border border-slate-200 h-fit space-y-6" id="events-sidebar-filters">
          <div className="flex justify-between items-center pb-4 border-b border-slate-100">
            <h2 className="font-sans font-bold text-slate-900 flex items-center space-x-2 text-sm uppercase tracking-wider">
              <Filter className="w-4 h-4 text-blue-600" />
              <span>Filter Calendar</span>
            </h2>
            <button
              onClick={() => {
                setSelectedCategory('All');
                setSelectedAudience('All');
                setSearchQuery('');
              }}
              className="text-xs text-slate-400 hover:text-blue-600 font-bold cursor-pointer"
            >
              Reset
            </button>
          </div>

          {/* Search Events */}
          <div className="space-y-1.5">
            <label htmlFor="event-search-input" className="text-xs font-bold text-slate-700 uppercase tracking-wide">
              Search Text
            </label>
            <div className="relative">
              <Search className="w-4 h-4 text-slate-400 absolute left-3 top-3.5 shrink-0" />
              <input
                id="event-search-input"
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Python, book, central..."
                className="w-full bg-slate-50 border border-slate-200 rounded-lg pl-9 pr-3 py-2.5 text-xs outline-none"
              />
            </div>
          </div>

          {/* Categories */}
          <div className="space-y-2.5">
            <h3 className="text-xs font-bold text-slate-700 uppercase tracking-wider">Category</h3>
            <div className="flex flex-wrap lg:flex-col gap-2">
              {categoriesList.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setSelectedCategory(cat)}
                  className={`px-3 py-1.5 rounded-lg text-xs font-semibold text-left transition-colors cursor-pointer ${
                    selectedCategory === cat
                      ? 'bg-blue-600 text-white font-bold'
                      : 'bg-slate-50 text-slate-600 hover:bg-slate-100'
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>
          </div>

          {/* Audience selection */}
          <div className="space-y-2.5 pt-4 border-t border-slate-100">
            <h3 className="text-xs font-bold text-slate-700 uppercase tracking-wider">Audience</h3>
            <div className="flex flex-wrap lg:flex-col gap-2">
              {audiencesList.map((aud) => (
                <button
                  key={aud}
                  onClick={() => setSelectedAudience(aud)}
                  className={`px-3 py-1.5 rounded-lg text-xs font-semibold text-left transition-colors cursor-pointer ${
                    selectedAudience === aud
                      ? 'bg-blue-600 text-white font-bold'
                      : 'bg-slate-50 text-slate-600 hover:bg-slate-100'
                  }`}
                >
                  {aud === 'All' ? 'All Audiences' : `${aud} (Audience)`}
                </button>
              ))}
            </div>
          </div>
        </aside>

        {/* Right Side: Event list items */}
        <section className="lg:col-span-3 space-y-6">
          
          {filteredEvents.length === 0 ? (
            <div className="bg-white rounded-xl border border-slate-200 py-16 px-4 text-center space-y-4">
              <Calendar className="w-12 h-12 text-slate-300 mx-auto" />
              <div className="space-y-1">
                <p className="font-sans font-bold text-slate-900 text-lg">Workshops will recommence in September 2026</p>
                <p className="text-slate-400 text-sm max-w-md mx-auto leading-relaxed">
                  The interactive academic and skills workshop schedule is currently on pause for the summer. Please join us back in September 2026 for our new term schedule!
                </p>
              </div>
            </div>
          ) : (
            <div className="space-y-5" id="events-list-wrapper">
              {filteredEvents.map((event) => {
                const isRegistered = registeredEvents.includes(event.id);
                const dateObj = new Date(event.date);
                const month = dateObj.toLocaleString('default', { month: 'short' });
                const day = dateObj.getDate();
                const dayName = dateObj.toLocaleString('default', { weekday: 'short' });

                return (
                  <div 
                    key={event.id}
                    className="bg-white rounded-xl border border-slate-200 hover:border-slate-300 p-5 md:p-6 flex flex-col md:flex-row items-start md:items-stretch gap-6 shadow-sm hover:shadow-md transition-all duration-300 group"
                  >
                    {/* Date Block */}
                    <div className="flex md:flex-col items-center justify-center shrink-0 w-full md:w-20 bg-blue-50 border border-blue-200 text-blue-600 p-4 rounded-xl text-center">
                      <span className="font-mono text-xs uppercase font-extrabold tracking-widest md:block">{month}</span>
                      <span className="font-sans font-black text-3xl md:text-4xl mx-2 md:mx-0 md:-my-1 leading-none">{day}</span>
                      <span className="text-xs text-blue-500 md:block">{dayName}</span>
                    </div>

                    {/* Text block descriptions */}
                    <div className="grow flex flex-col justify-between space-y-4 md:space-y-0">
                      <div className="space-y-2">
                        <div className="flex flex-wrap gap-1.5 items-center">
                          <span className="bg-slate-100 text-slate-600 text-[9px] font-extrabold uppercase tracking-wider px-2 py-0.5 rounded">
                            {event.category}
                          </span>
                          <span className="bg-blue-500/10 text-blue-700 text-[9px] font-extrabold uppercase tracking-wider px-2 py-0.5 rounded">
                            Audience: {event.audience}
                          </span>
                        </div>
                        <h3 className="font-sans font-bold text-lg text-slate-900 group-hover:text-blue-600 transition-colors leading-snug">
                          {event.title}
                        </h3>
                        <p className="text-xs text-slate-500 leading-relaxed max-w-xl">
                          {event.description}
                        </p>
                      </div>

                      {/* Detail stats lines */}
                      <div className="flex flex-wrap items-center gap-x-6 gap-y-2 pt-4 border-t border-slate-100 text-xs text-slate-500">
                        <div className="flex items-center space-x-2">
                          <Clock className="w-4 h-4 text-slate-400 shrink-0" />
                          <span>{event.time}</span>
                        </div>
                        <div className="flex items-center space-x-2">
                          <MapPin className="w-4 h-4 text-slate-400 shrink-0" />
                          <span>{event.location}</span>
                        </div>
                      </div>
                    </div>

                    {/* RSVP Action button col */}
                    <div className="shrink-0 w-full md:w-44 flex flex-col justify-center border-t md:border-t-0 md:border-l border-slate-100 pt-5 md:pt-0 md:pl-6 text-center md:text-right">
                      {isRegistered ? (
                        <div className="bg-emerald-50 text-emerald-700 text-xs font-bold border border-emerald-200 py-3 rounded-lg flex items-center justify-center space-x-1.5">
                          <Check className="w-4 h-4" />
                          <span>Registered RSVP</span>
                        </div>
                      ) : (
                        <div className="space-y-2">
                          <button
                            onClick={() => onRSVPEvent(event)}
                            disabled={event.spotsRemaining === 0}
                            className={`w-full py-2.5 rounded-lg text-xs font-bold shadow transition-all cursor-pointer text-center ${
                              event.spotsRemaining === 0
                                ? 'bg-slate-100 text-slate-400 border border-slate-200 cursor-not-allowed'
                                : 'bg-slate-900 hover:bg-blue-600 text-white hover:shadow-md'
                            }`}
                          >
                            {event.spotsRemaining === 0 ? 'Full House' : 'Register RSVP'}
                          </button>
                          <p className="text-[10px] text-slate-400 text-center md:text-right">
                            {event.spotsRemaining === 0 
                              ? 'Waiting list available at desk' 
                              : `${event.spotsRemaining} out of ${event.maxSpots} spots left`}
                          </p>
                        </div>
                      )}
                    </div>

                  </div>
                );
              })}
            </div>
          )}

        </section>

      </div>

    </div>
  );
}
