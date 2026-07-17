import React, { useState } from 'react';
import { Menu, X, User, LogIn, GraduationCap, ExternalLink } from 'lucide-react';
import { LibraryCard } from '../types';
import CollegeLogo from './CollegeLogo';

interface HeaderProps {
  currentPage: string;
  setCurrentPage: (page: string) => void;
  libraryCard: LibraryCard | null;
  onOpenCardModal: () => void;
}

export default function Header({
  currentPage,
  setCurrentPage,
  libraryCard,
  onOpenCardModal
}: HeaderProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navItems = [
    { id: 'explore', label: 'Catalogue' },
    { id: 'services', label: 'Databases' },
    { id: 'locations', label: 'Guides' },
    { id: 'workshops', label: 'Workshops' },
    { id: 'account', label: 'Help' },
  ];

  const handleNavClick = (pageId: string) => {
    if (pageId === 'explore') {
      window.open('https://www.perlego.com/discover', '_blank');
    } else {
      setCurrentPage(pageId);
    }
    setMobileMenuOpen(false);
  };

  return (
    <header className="sticky top-0 z-40 w-full bg-white text-slate-700 shadow-sm border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <button 
            onClick={() => handleNavClick('home')}
            className="flex items-center text-left group focus-visible:ring-2 focus-visible:ring-blue-600 focus-visible:ring-offset-2 focus:outline-none rounded-xl py-1 px-2"
            id="header-logo-container"
            aria-label="City College Dublin Library Home"
          >
            <div className="flex items-center gap-3">
              <CollegeLogo className="h-11 w-auto" variant="blue" transparent={true} />
              <div className="h-8 w-[1px] bg-slate-200"></div>
              <span className="text-xs text-blue-600 font-bold tracking-widest uppercase">
                Library
              </span>
            </div>
          </button>

          {/* Desktop Nav */}
          <nav className="hidden md:flex space-x-1" id="desktop-nav-menu">
            {navItems.map((item) => {
              const isActive = currentPage === item.id;
              if (item.id === 'explore') {
                return (
                  <a
                    key={item.id}
                    href="https://www.perlego.com/discover"
                    target="_blank"
                    rel="noopener noreferrer"
                    id={`nav-btn-${item.id}`}
                    className="px-4 py-2 rounded-lg font-sans text-sm font-semibold tracking-wide transition-all duration-200 flex items-center space-x-1 focus-visible:ring-2 focus-visible:ring-blue-600 focus-visible:ring-offset-2 focus:outline-none text-slate-600 hover:bg-slate-50 hover:text-slate-900"
                  >
                    <span>{item.label}</span>
                    <ExternalLink aria-hidden="true" className="w-3.5 h-3.5 text-slate-400 group-hover:text-slate-600 inline-block" />
                    <span className="sr-only"> (opens in a new tab)</span>
                  </a>
                );
              }
              return (
                <button
                  key={item.id}
                  onClick={() => handleNavClick(item.id)}
                  id={`nav-btn-${item.id}`}
                  className={`px-4 py-2 rounded-lg font-sans text-sm font-semibold tracking-wide transition-all duration-200 flex items-center space-x-1 focus-visible:ring-2 focus-visible:ring-blue-600 focus-visible:ring-offset-2 focus:outline-none ${
                    isActive 
                      ? 'bg-slate-50 text-blue-600 font-bold' 
                      : 'text-slate-600 hover:bg-slate-50 hover:text-slate-900'
                  }`}
                >
                  <span>{item.label}</span>
                </button>
              );
            })}
          </nav>

          {/* Right side controls (Removed user/profile/login completely) */}
          <div className="hidden md:flex items-center space-x-3" id="desktop-user-controls" />

          {/* Mobile hamburger button */}
          <div className="md:hidden flex items-center space-x-2">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              id="mobile-menu-hamburger"
              aria-label="Toggle mobile menu"
              className="p-2 rounded-lg text-slate-500 hover:text-slate-900 hover:bg-slate-50 focus-visible:ring-2 focus-visible:ring-blue-600 focus-visible:ring-offset-2 focus:outline-none transition-colors duration-200"
            >
              <span className="sr-only">Toggle mobile menu</span>
              {mobileMenuOpen ? <X aria-hidden="true" className="w-6 h-6" /> : <Menu aria-hidden="true" className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-white border-t border-slate-150 shadow-xl" id="mobile-navigation-drawer">
          <div className="px-3 pt-3 pb-4 space-y-1">
            {navItems.map((item) => {
              const isActive = currentPage === item.id;
              if (item.id === 'explore') {
                return (
                  <a
                    key={item.id}
                    href="https://www.perlego.com/discover"
                    target="_blank"
                    rel="noopener noreferrer"
                    id={`mobile-nav-btn-${item.id}`}
                    className="w-full flex items-center justify-between px-4 py-3 rounded-xl text-base font-semibold transition-all focus-visible:ring-2 focus-visible:ring-blue-600 focus-visible:ring-offset-2 focus:outline-none text-slate-600 hover:bg-slate-50 hover:text-slate-900"
                  >
                    <span>{item.label}</span>
                    <span className="flex items-center space-x-1">
                      <ExternalLink aria-hidden="true" className="w-4 h-4 text-slate-400" />
                      <span className="sr-only"> (opens in a new tab)</span>
                    </span>
                  </a>
                );
              }
              return (
                <button
                  key={item.id}
                  onClick={() => handleNavClick(item.id)}
                  id={`mobile-nav-btn-${item.id}`}
                  className={`w-full flex items-center justify-between px-4 py-3 rounded-xl text-base font-semibold transition-all focus-visible:ring-2 focus-visible:ring-blue-600 focus-visible:ring-offset-2 focus:outline-none ${
                    isActive 
                      ? 'bg-slate-50 text-blue-600' 
                      : 'text-slate-600 hover:bg-slate-50 hover:text-slate-900'
                  }`}
                >
                  <span>{item.label}</span>
                </button>
              );
            })}
          </div>
        </div>
      )}
    </header>
  );
}
