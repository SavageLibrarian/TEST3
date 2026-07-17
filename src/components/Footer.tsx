import React, { useState } from 'react';
import { ArrowUp, GraduationCap, X, ExternalLink, Globe, Bookmark, Network } from 'lucide-react';
import CollegeLogo from './CollegeLogo';

interface FooterProps {
  setCurrentPage: (page: string) => void;
}

export default function Footer({ setCurrentPage }: FooterProps) {
  const [isSitemapOpen, setIsSitemapOpen] = useState(false);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#11253b] text-slate-400 font-sans border-t border-[#1e3e62]/40" id="global-footer">
      {/* Upper part */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12">
          {/* Column 1: Brand details */}
          <div className="space-y-4">
            <button 
              onClick={() => setCurrentPage('home')}
              className="flex items-center cursor-pointer text-left text-white group focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2 focus:outline-none rounded-xl py-1"
              aria-label="City College Dublin Library Home"
            >
              <div className="flex items-center gap-3">
                <CollegeLogo className="h-9 w-auto" variant="white" transparent={true} />
                <div className="h-6 w-[1px] bg-[#1e3e62]/60"></div>
                <span className="text-xs text-blue-200 font-bold tracking-widest uppercase">
                  Library
                </span>
              </div>
            </button>
            <p className="text-sm leading-relaxed text-slate-400">
              Wicklow House,<br />
              84-88 South Great George's Street,<br />
              Dublin 2, D02 TX84,<br />
              Ireland
            </p>
          </div>

          {/* Column 2: Services */}
          <div>
            <h3 className="font-sans font-semibold text-white tracking-wider text-xs uppercase mb-4">
              Services
            </h3>
            <ul className="space-y-2.5 text-sm">
              <li>
                <a 
                  href="https://www.perlego.com/discover" 
                  target="_blank"
                  rel="noopener noreferrer" 
                  className="hover:text-blue-400 transition-colors cursor-pointer text-left flex items-center space-x-1 focus-visible:ring-1 focus-visible:ring-blue-400 focus:outline-none rounded px-1"
                >
                  <span>Library catalogue</span>
                  <ExternalLink aria-hidden="true" className="w-3.5 h-3.5 opacity-70" />
                  <span className="sr-only"> (opens in a new tab)</span>
                </a>
              </li>
              <li>
                <button 
                  onClick={() => setCurrentPage('services')} 
                  className="hover:text-blue-400 transition-colors cursor-pointer text-left focus-visible:ring-1 focus-visible:ring-blue-400 focus:outline-none rounded px-1"
                >
                  Databases
                </button>
              </li>
              <li>
                <button 
                  onClick={() => setCurrentPage('writing-supports')} 
                  className="hover:text-blue-400 transition-colors cursor-pointer text-left focus-visible:ring-1 focus-visible:ring-blue-400 focus:outline-none rounded px-1"
                >
                  Writing & Research Supports
                </button>
              </li>
              <li>
                <button 
                  onClick={() => setCurrentPage('locations')} 
                  className="hover:text-blue-400 transition-colors cursor-pointer text-left focus-visible:ring-1 focus-visible:ring-blue-400 focus:outline-none rounded px-1"
                >
                  Subject Guides
                </button>
              </li>
            </ul>
          </div>

          {/* Column 3: Support */}
          <div>
            <h3 className="font-sans font-semibold text-white tracking-wider text-xs uppercase mb-4">
              Support
            </h3>
            <ul className="space-y-2.5 text-sm">
              <li>
                <button 
                  onClick={() => setCurrentPage('account')} 
                  className="hover:text-blue-400 transition-colors cursor-pointer text-left focus-visible:ring-1 focus-visible:ring-blue-400 focus:outline-none rounded px-1"
                >
                  Ask a librarian
                </button>
              </li>
              <li>
                <button 
                  onClick={() => setCurrentPage('home')} 
                  className="hover:text-blue-400 transition-colors cursor-pointer text-left focus-visible:ring-1 focus-visible:ring-blue-400 focus:outline-none rounded px-1"
                >
                  Opening hours
                </button>
              </li>
              <li>
                <button 
                  onClick={() => setCurrentPage('accessibility')} 
                  className="hover:text-blue-400 transition-colors cursor-pointer text-left focus-visible:ring-1 focus-visible:ring-blue-400 focus:outline-none rounded px-1"
                >
                  Accessibility
                </button>
              </li>
              <li>
                <button 
                  onClick={() => setCurrentPage('locations')} 
                  className="hover:text-blue-400 transition-colors cursor-pointer text-left focus-visible:ring-1 focus-visible:ring-blue-400 focus:outline-none rounded px-1"
                >
                  Contact us
                </button>
              </li>
            </ul>
          </div>

          {/* Column 4: Connect */}
          <div>
            <h3 className="font-sans font-semibold text-white tracking-wider text-xs uppercase mb-4">
              Connect
            </h3>
            <ul className="space-y-2.5 text-sm">
              <li>
                <a 
                  href="https://citycollegedublin.ie/" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="hover:text-blue-400 transition-colors text-left inline-flex items-center space-x-1 focus-visible:ring-1 focus-visible:ring-blue-400 focus:outline-none rounded px-1"
                >
                  <span>City College Dublin</span>
                  <ExternalLink aria-hidden="true" className="w-3 h-3 opacity-60" />
                  <span className="sr-only"> (opens in a new tab)</span>
                </a>
              </li>
              <li>
                <a 
                  href="https://instagram.com/citycollegedublin" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="hover:text-blue-400 transition-colors text-left inline-flex items-center space-x-1 focus-visible:ring-1 focus-visible:ring-blue-400 focus:outline-none rounded px-1"
                >
                  <span>Instagram</span>
                  <ExternalLink aria-hidden="true" className="w-3 h-3 opacity-60" />
                  <span className="sr-only"> (opens in a new tab)</span>
                </a>
              </li>
              <li>
                <a 
                  href="mailto:info@citycollegedublin.ie" 
                  className="hover:text-blue-400 transition-colors text-left focus-visible:ring-1 focus-visible:ring-blue-400 focus:outline-none rounded px-1"
                >
                  info@citycollegedublin.ie
                </a>
              </li>
              <li>
                <a 
                  href="tel:+35314160034" 
                  className="hover:text-blue-400 transition-colors text-left focus-visible:ring-1 focus-visible:ring-blue-400 focus:outline-none rounded px-1"
                >
                  +353 1 4160034
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Lower Divider part */}
        <div className="mt-12 pt-8 border-t border-[#1e3e62]/30 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          <p>&copy; 2026 City College Dublin Library. All rights reserved.</p>
          <div className="flex items-center space-x-6">
            <button
              onClick={() => setIsSitemapOpen(true)}
              className="text-slate-400 hover:text-blue-400 transition-colors cursor-pointer font-semibold flex items-center space-x-1 focus-visible:ring-1 focus-visible:ring-blue-400 focus:outline-none rounded px-1"
            >
              <Network aria-hidden="true" className="w-3.5 h-3.5 text-blue-400" />
              <span>Sitemap</span>
            </button>
            <button
              onClick={scrollToTop}
              className="flex items-center space-x-1.5 text-slate-400 hover:text-blue-400 transition-colors cursor-pointer focus-visible:ring-1 focus-visible:ring-blue-400 focus:outline-none rounded px-1"
            >
              <span>Back to top</span>
              <ArrowUp aria-hidden="true" className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>
      </div>

      {/* Visual Interactive Sitemap Modal */}
      {isSitemapOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/70 backdrop-blur-md animate-fade-in">
          <div 
            role="dialog"
            aria-modal="true"
            aria-labelledby="sitemap-modal-title"
            className="bg-white text-slate-800 w-full max-w-3xl rounded-2xl shadow-2xl overflow-hidden border border-slate-200 flex flex-col max-h-[85vh]"
          >
            
            {/* Modal Header */}
            <div className="bg-[#1e3e62] text-white px-6 py-4 flex items-center justify-between">
              <div className="flex items-center space-x-2.5">
                <Network aria-hidden="true" className="w-5 h-5 text-blue-300" />
                <h3 id="sitemap-modal-title" className="font-display font-bold text-lg">CCD Library Sitemap</h3>
              </div>
              <button 
                onClick={() => setIsSitemapOpen(false)}
                className="p-1.5 hover:bg-white/10 rounded-lg transition-colors cursor-pointer"
                aria-label="Close sitemap modal"
              >
                <X aria-hidden="true" className="w-5 h-5" />
              </button>
            </div>

            {/* Modal Scrollable Body */}
            <div className="p-6 overflow-y-auto space-y-6 text-sm">
              <p className="text-xs text-slate-400 font-medium">
                Comprehensive layout directory of academic systems, core catalog services, and official course padlet guides at City College Dublin.
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                
                {/* Section 1: Main Pages & Services */}
                <div className="space-y-4">
                  <h4 className="font-sans font-bold text-slate-900 border-b border-slate-100 pb-2 flex items-center space-x-1.5 uppercase tracking-wider text-xs">
                    <Globe aria-hidden="true" className="w-4 h-4 text-[#1e3e62]" />
                    <span>Core Portals</span>
                  </h4>
                  <ul className="space-y-2 text-xs">
                    <li>
                      <button 
                        onClick={() => { setCurrentPage('home'); setIsSitemapOpen(false); }}
                        className="text-slate-600 hover:text-blue-600 hover:underline text-left font-medium block cursor-pointer"
                      >
                        Home Page — Library operational announcements & simple queries
                      </button>
                    </li>
                    <li>
                      <button 
                        onClick={() => { setCurrentPage('explore'); setIsSitemapOpen(false); }}
                        className="text-slate-600 hover:text-blue-600 hover:underline text-left font-medium block cursor-pointer"
                      >
                        Library Catalogue — Book loans, inventory searches & formats filtering
                      </button>
                    </li>
                    <li>
                      <button 
                        onClick={() => { setCurrentPage('services'); setIsSitemapOpen(false); }}
                        className="text-slate-600 hover:text-blue-600 hover:underline text-left font-medium block cursor-pointer"
                      >
                        Databases Center — 73 online indexing directories
                      </button>
                    </li>
                    <li>
                      <button 
                        onClick={() => { setCurrentPage('writing-supports'); setIsSitemapOpen(false); }}
                        className="text-slate-600 hover:text-blue-600 hover:underline text-left font-medium block cursor-pointer"
                      >
                        Writing & Research Supports — Reference guides, workshops & tutoring
                      </button>
                    </li>
                    <li>
                      <button 
                        onClick={() => { setCurrentPage('locations'); setIsSitemapOpen(false); }}
                        className="text-slate-600 hover:text-blue-600 hover:underline text-left font-medium block cursor-pointer"
                      >
                        Subject Guides — 8 course subject resource hubs
                      </button>
                    </li>
                    <li>
                      <button 
                        onClick={() => { setCurrentPage('workshops'); setIsSitemapOpen(false); }}
                        className="text-slate-600 hover:text-blue-600 hover:underline text-left font-medium block cursor-pointer"
                      >
                        Library Workshops — Recorded academic training & tutorials
                      </button>
                    </li>
                    <li>
                      <button 
                        onClick={() => { setCurrentPage('account'); setIsSitemapOpen(false); }}
                        className="text-slate-600 hover:text-blue-600 hover:underline text-left font-medium block cursor-pointer"
                      >
                        Help Desk & My Account — Active loans list & student profile
                      </button>
                    </li>
                  </ul>
                </div>

                {/* Section 2: Subject Guides (Linking directly to Padlet) */}
                <div className="space-y-4">
                  <h4 className="font-sans font-bold text-slate-900 border-b border-slate-100 pb-2 flex items-center space-x-1.5 uppercase tracking-wider text-xs">
                    <Bookmark aria-hidden="true" className="w-4 h-4 text-[#1e3e62]" />
                    <span>Subject Padlet Guides</span>
                  </h4>
                  <ul className="space-y-2 text-xs">
                    {[
                      { name: 'Business Guide', url: 'https://padlet.com/CityCollegeDublinLibrary/business-library-guide-deyxz0smzxrc8xgj' },
                      { name: 'Computer Science Guide', url: 'https://padlet.com/CityCollegeDublinLibrary/computer-science-library-guide-jagxaq0qjwap9v5v' },
                      { name: 'Cyber Security Library Guide', url: 'https://padlet.com/CityCollegeDublinLibrary/cyber-security-resources-3t9y4bb6xhhry8mx' },
                      { name: 'Data Analytics Guide', url: 'https://padlet.com/CityCollegeDublinLibrary/data-analytics-library-guide-p5wy8walbfxxg73w' },
                      { name: 'Early Childhood Library Guide', url: 'https://padlet.com/CityCollegeDublinLibrary/early-childhood-education-care-library-guide-ch5gdxe1xmkcqu8t' },
                      { name: 'Economics Guide', url: 'https://padlet.com/CityCollegeDublinLibrary/economics-library-guide-qpfouaqigimb8qu4' },
                      { name: 'Engineering Guide', url: 'https://padlet.com/CityCollegeDublinLibrary/engineering-library-guide-1tn6oo5h94vv2cb7' },
                      { name: 'Psychology and Criminology', url: 'https://padlet.com/CityCollegeDublinLibrary/psychology-library-guide-dqfueqytn57l9gtd' }
                    ].map((g, idx) => (
                      <li key={idx}>
                        <a 
                          href={g.url} 
                          target="_blank" 
                          rel="noopener noreferrer"
                          className="text-slate-600 hover:text-blue-600 hover:underline flex items-center justify-between font-medium group"
                        >
                          <span>{g.name}</span>
                          <span className="inline-flex items-center space-x-1 shrink-0">
                            <ExternalLink aria-hidden="true" className="w-3 h-3 text-slate-300 group-hover:text-blue-500 transition-colors" />
                            <span className="sr-only"> (opens in a new tab)</span>
                          </span>
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>

              </div>
            </div>

            {/* Modal Footer */}
            <div className="bg-slate-50 px-6 py-3.5 border-t border-slate-100 flex justify-end">
              <button
                onClick={() => setIsSitemapOpen(false)}
                className="bg-slate-950 hover:bg-slate-800 text-white text-xs font-bold px-4 py-2 rounded-lg transition-colors cursor-pointer"
              >
                Close Sitemap
              </button>
            </div>

          </div>
        </div>
      )}
    </footer>
  );
}
