import React, { useState, useMemo } from 'react';
import { Search, ExternalLink, Database, Globe, Tag, SlidersHorizontal, RefreshCw } from 'lucide-react';
import { DATABASES, DatabaseItem } from '../databasesData';

const ALL_SUBJECTS = [
  "All",
  "Open Access",
  "Social Science",
  "Computer Science",
  "Medicine",
  "Health & Science",
  "Business",
  "Engineering",
  "Psychology",
  "Economics",
  "Database",
  "Law",
  "Arts & Humanities",
  "Technology",
  "Education",
  "Criminology",
  "Mathematics",
  "Language",
  "Management",
  "Early Childhood",
  "Data Analytics"
];

export default function Services() {
  const [searchQuery, setSearchQuery] = useState('');
  const [activeCategory, setActiveCategory] = useState('All');
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 12;

  // Robust subject-matching function
  const matchesCategory = (db: DatabaseItem, cat: string): boolean => {
    if (cat === 'All') return true;
    const target = cat.toLowerCase().trim();
    
    return db.subjects.some(s => {
      const subjectLower = s.toLowerCase().trim();
      if (subjectLower === target) return true;
      
      // Split on separators like commas, slashes, or 'and'/'&'
      const subParts = subjectLower.split(/[,/&]+/).map(p => p.trim());
      if (subParts.some(part => part === target || part.includes(target) || target.includes(part))) {
        return true;
      }

      // Direct keyword mappings
      if (target === 'medicine' && (subjectLower.includes('medicine') || subjectLower.includes('physiology') || subjectLower.includes('medical') || subjectLower.includes('health'))) return true;
      if (target === 'health & science' && (subjectLower.includes('health') || subjectLower.includes('science') || subjectLower.includes('stem'))) return true;
      if (target === 'computer science' && (subjectLower.includes('computer') || subjectLower.includes('computing') || subjectLower.includes('software') || subjectLower.includes('artificial intelligence'))) return true;
      if (target === 'data analytics' && (subjectLower.includes('data') || subjectLower.includes('analytics') || subjectLower.includes('statistics') || subjectLower.includes('big data'))) return true;
      if (target === 'mathematics' && (subjectLower.includes('math') || subjectLower.includes('statistics'))) return true;
      if (target === 'criminology' && (subjectLower.includes('criminology') || subjectLower.includes('criminal'))) return true;
      if (target === 'education' && (subjectLower.includes('education') || subjectLower.includes('teaching'))) return true;
      if (target === 'database' && (subjectLower.includes('database') || subjectLower.includes('eresource') || subjectLower.includes('registry'))) return true;
      
      return subjectLower.includes(target);
    });
  };

  // Perform search and filtering via useMemo
  const filteredDatabases = useMemo(() => {
    return DATABASES.filter(db => {
      const query = searchQuery.toLowerCase().trim();
      
      // Filter by horizontal subject pills
      const categoryMatch = matchesCategory(db, activeCategory);
      if (!categoryMatch) return false;

      // Filter by search query input
      if (!query) return true;
      const titleMatch = db.title.toLowerCase().includes(query);
      const publisherMatch = db.publisher.toLowerCase().includes(query);
      const descMatch = db.description.toLowerCase().includes(query);
      const subjectsMatch = db.subjects.some(sub => sub.toLowerCase().includes(query));

      return titleMatch || publisherMatch || descMatch || subjectsMatch;
    });
  }, [searchQuery, activeCategory]);

  // Handle resetting search and category filters
  const handleResetFilters = () => {
    setSearchQuery('');
    setActiveCategory('All');
    setCurrentPage(1);
  };

  // Calculate paginated databases list
  const paginatedDatabases = useMemo(() => {
    const startIndex = (currentPage - 1) * itemsPerPage;
    return filteredDatabases.slice(startIndex, startIndex + itemsPerPage);
  }, [filteredDatabases, currentPage]);

  const totalPages = Math.ceil(filteredDatabases.length / itemsPerPage) || 1;

  const handleCategoryChange = (catName: string) => {
    setActiveCategory(catName);
    setCurrentPage(1);
  };

  return (
    <div className="bg-slate-50/50 min-h-screen font-sans" id="databases-page-root">
      
      {/* 1. Hero Full-width Deep Navy Banner (as seen in the image) */}
      <section className="bg-[#1e3e62] text-white py-16 sm:py-20" id="databases-hero-banner">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-4">
          <h1 className="font-display font-bold text-4xl sm:text-5xl tracking-normal text-white">
            Databases
          </h1>
          <p className="text-slate-200 text-sm sm:text-base max-w-2xl mx-auto leading-relaxed font-normal">
            Browse 73 academic databases, journals, and digital resources available to City College Dublin students and staff.
          </p>
        </div>
      </section>

      {/* 2. Main content container block with padding */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 space-y-8" id="databases-content-block">
        
        {/* Search, Status and Horizontal Filters Bar */}
        <div className="bg-white rounded-xl border border-slate-200/80 shadow-xs p-6 space-y-6">
          
          {/* Top Line: Search Bar Input & Showing Count */}
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
            <div className="relative w-full max-w-md">
              <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => {
                  setSearchQuery(e.target.value);
                  setCurrentPage(1);
                }}
                placeholder="Search databases by title, publisher, or subject..."
                className="w-full bg-slate-50 hover:bg-slate-100 focus:bg-white border border-slate-200 focus:border-[#1e3e62] focus:ring-1 focus:ring-[#1e3e62] rounded-lg pl-10 pr-4 py-2.5 text-sm outline-none transition-all placeholder-slate-400"
              />
            </div>
            <div className="text-sm text-slate-500 font-medium">
              Showing <strong className="text-slate-800">{filteredDatabases.length}</strong> of <strong className="text-slate-800">{DATABASES.length}</strong> databases
            </div>
          </div>

          {/* Bottom Line: Filter by subject Label & Horizontal Pills wrapper */}
          <div className="space-y-2.5">
            <div className="flex items-center justify-between">
              <span className="text-xs font-bold text-slate-500 tracking-wider">
                Filter by subject
              </span>
              {(searchQuery || activeCategory !== 'All') && (
                <button
                  onClick={handleResetFilters}
                  className="text-xs text-[#1e3e62] hover:text-[#152d47] font-semibold flex items-center space-x-1 cursor-pointer focus-visible:ring-2 focus-visible:ring-[#1e3e62] focus-visible:ring-offset-1 focus:outline-none rounded px-1"
                >
                  <RefreshCw className="w-3.5 h-3.5" />
                  <span>Reset All Filters</span>
                </button>
              )}
            </div>

            {/* Horizontal Wrap Pills matching the screenshot exactly */}
            <div className="flex flex-wrap gap-2.5 pt-1">
              {ALL_SUBJECTS.map((cat) => {
                const isActive = activeCategory === cat;
                return (
                  <button
                    key={cat}
                    onClick={() => handleCategoryChange(cat)}
                    className={`px-4 py-2 rounded-full text-xs font-semibold border transition-all cursor-pointer focus-visible:ring-2 focus-visible:ring-[#1e3e62] focus-visible:ring-offset-2 focus:outline-none ${
                      isActive
                        ? 'bg-[#1e3e62] text-white border-[#1e3e62] shadow-xs'
                        : 'bg-white hover:bg-slate-50 text-slate-700 border-slate-200'
                    }`}
                  >
                    {cat}
                  </button>
                );
              })}
            </div>
          </div>

        </div>

        {/* 3. Databases Catalog 3-Column Grid */}
        {filteredDatabases.length === 0 ? (
          <div className="bg-white rounded-xl border border-slate-200 p-16 text-center space-y-4">
            <Database className="w-12 h-12 text-slate-300 mx-auto" />
            <div className="space-y-1">
              <p className="font-semibold text-slate-800 text-base">No databases found matching "{searchQuery}"</p>
              <p className="text-xs text-slate-500">Try adjusting your keywords, search terms, or category filters.</p>
            </div>
            <button
              onClick={handleResetFilters}
              className="inline-flex items-center space-x-2 bg-slate-900 hover:bg-[#1e3e62] text-white text-xs font-bold px-4 py-2.5 rounded-lg transition-colors cursor-pointer focus-visible:ring-2 focus-visible:ring-[#1e3e62] focus-visible:ring-offset-2 focus:outline-none"
            >
              <span>Clear Search Criteria</span>
            </button>
          </div>
        ) : (
          <>
            {/* Grid display matching the image structure exactly */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6" id="databases-grid">
              {paginatedDatabases.map((db) => (
                <a
                  key={db.id}
                  href={db.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-white rounded-xl border border-slate-200/80 hover:border-[#1e3e62]/60 p-5 shadow-xs hover:shadow-md flex flex-col justify-between transition-all duration-200 group focus-visible:ring-2 focus-visible:ring-[#1e3e62] focus-visible:ring-offset-2 focus:outline-none block text-left"
                >
                  <div className="space-y-3">
                    
                    {/* Top row: Database cylinder icon (left) & solid dark Visit button (right) */}
                    <div className="flex items-center justify-between">
                      <div className="bg-slate-100 p-2.5 rounded-lg text-slate-700">
                        <Database aria-hidden="true" className="w-5 h-5 text-slate-600" />
                      </div>
                      <div
                        className="inline-flex items-center space-x-1.5 bg-[#1e3e62] group-hover:bg-[#2b4e75] group-focus:bg-[#2b4e75] text-white text-xs font-bold px-3.5 py-1.5 rounded-lg transition-colors"
                      >
                        <span>Visit</span>
                        <ExternalLink aria-hidden="true" className="w-3.5 h-3.5" />
                        <span className="sr-only"> (opens in a new tab)</span>
                      </div>
                    </div>

                    {/* Meta info: Title, Publisher and Description */}
                    <div className="space-y-1 pt-1">
                      <h3 className="font-display font-bold text-lg text-slate-900 group-hover:text-blue-800 transition-colors line-clamp-1" title={db.title}>
                        {db.title}
                      </h3>
                      <p className="text-xs text-blue-700 font-semibold truncate" title={db.publisher}>
                        {db.publisher}
                      </p>
                    </div>

                    {/* Description Paragraph */}
                    <p className="text-xs text-slate-500 leading-relaxed line-clamp-3">
                      {db.description}
                    </p>

                  </div>

                  {/* Bottom Area: Label tags row containing small tag icon */}
                  <div className="pt-4 mt-4 border-t border-slate-100 flex flex-wrap gap-1.5">
                    {db.subjects.slice(0, 3).map((sub) => (
                      <span
                        key={sub}
                        className="inline-flex items-center text-[10px] bg-slate-100/90 text-slate-600 rounded-md px-2.5 py-1 font-semibold border border-slate-200/40"
                      >
                        <Tag className="w-3 h-3 mr-1 text-slate-400" />
                        {sub}
                      </span>
                    ))}
                    {db.subjects.length > 3 && (
                      <span className="inline-flex items-center text-[10px] bg-slate-100/90 text-slate-500 rounded-md px-1.5 py-1 font-bold border border-slate-200/40">
                        +{db.subjects.length - 3}
                      </span>
                    )}
                  </div>

                </a>
              ))}
            </div>

            {/* 4. Beautiful pagination indicators */}
            {totalPages > 1 && (
              <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-6 border-t border-slate-200">
                <div className="text-xs text-slate-500 font-medium">
                  Showing <strong className="text-slate-800">{(currentPage - 1) * itemsPerPage + 1}</strong> to{' '}
                  <strong className="text-slate-800">
                    {Math.min(currentPage * itemsPerPage, filteredDatabases.length)}
                  </strong>{' '}
                  of <strong className="text-slate-800">{filteredDatabases.length}</strong> databases
                </div>
                <div className="flex space-x-1.5">
                  <button
                    onClick={() => setCurrentPage(prev => Math.max(prev - 1, 1))}
                    disabled={currentPage === 1}
                    className="px-3.5 py-2 text-xs font-bold rounded-lg border border-slate-200 text-slate-600 bg-white hover:bg-slate-50 disabled:opacity-50 disabled:hover:bg-white cursor-pointer focus-visible:ring-2 focus-visible:ring-[#1e3e62] focus-visible:ring-offset-2 focus:outline-none"
                  >
                    Previous
                  </button>
                  {Array.from({ length: totalPages }, (_, i) => i + 1).map((pageNum) => {
                    // Only render page pageNumbers within range to avoid horizontal cluttering
                    if (
                      pageNum === 1 ||
                      pageNum === totalPages ||
                      Math.abs(pageNum - currentPage) <= 1
                    ) {
                      return (
                        <button
                          key={pageNum}
                          onClick={() => setCurrentPage(pageNum)}
                          className={`px-3.5 py-2 text-xs font-bold rounded-lg transition-all cursor-pointer focus-visible:ring-2 focus-visible:ring-[#1e3e62] focus-visible:ring-offset-2 focus:outline-none ${
                            currentPage === pageNum
                              ? 'bg-[#1e3e62] text-white border-[#1e3e62]'
                              : 'border border-slate-200 bg-white text-slate-600 hover:bg-slate-50'
                          }`}
                        >
                          {pageNum}
                        </button>
                      );
                    }
                    if (
                      pageNum === 2 ||
                      pageNum === totalPages - 1
                    ) {
                      return <span key={pageNum} className="text-slate-400 text-xs px-1 select-none flex items-end pb-1.5">...</span>;
                    }
                    return null;
                  })}
                  <button
                    onClick={() => setCurrentPage(prev => Math.min(prev + 1, totalPages))}
                    disabled={currentPage === totalPages}
                    className="px-3.5 py-2 text-xs font-bold rounded-lg border border-slate-200 text-slate-600 bg-white hover:bg-slate-50 disabled:opacity-50 disabled:hover:bg-white cursor-pointer focus-visible:ring-2 focus-visible:ring-[#1e3e62] focus-visible:ring-offset-2 focus:outline-none"
                  >
                    Next
                  </button>
                </div>
              </div>
            )}
          </>
        )}

      </div>

    </div>
  );
}
