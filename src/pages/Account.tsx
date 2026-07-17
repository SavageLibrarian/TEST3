import React, { useState } from 'react';
import { 
  Mail, 
  MessageSquare, 
  HelpCircle, 
  ChevronDown, 
  ChevronUp, 
  CheckCircle2, 
  Phone, 
  MapPin, 
  Clock, 
  Sparkles,
  ArrowRight,
  Send,
  BookOpen,
  Laptop,
  GraduationCap,
  KeyRound,
  ExternalLink
} from 'lucide-react';
import { Book, LibraryEvent, RoomReservation, BorrowedBook } from '../types';

interface AccountProps {
  libraryCard: any;
  onOpenCardModal: () => void;
  onLogout: () => void;
  borrowedBooks: BorrowedBook[];
  onRenewBook: (id: string) => void;
  onReturnBook: (id: string) => void;
  roomReservations: RoomReservation[];
  onCancelReservation: (id: string) => void;
  registeredEvents: string[];
  onCancelEventRSVP: (id: string) => void;
  savedBookshelf: string[];
  onToggleBookshelf: (id: string) => void;
}

interface FAQItem {
  id: string;
  question: string;
  answer: string;
}

const FAQ_ITEMS: FAQItem[] = [
  {
    id: 'db-access',
    question: 'How do I access online journals and databases off-campus?',
    answer: 'Students can access all 73 academic databases via our Databases tab. Please note that only EBSCOhost databases require authentication through OpenAthens (using your official City College student credentials), while other databases do not require any additional login credentials. If you experience authentication failures, please contact the library at library@citycollegedublin.ie.'
  },
  {
    id: 'referencing',
    question: 'Where can I find help with Harvard referencing rules?',
    answer: 'Referencing templates and live class recordings are available on the Library Workshops tab. For individual citation audit reviews, you can email library@citycollegedublin.ie to schedule a 1-to-1 virtual consult.'
  },
  {
    id: 'it-login',
    question: 'My student IT portal password isn\'t working, what should I do?',
    answer: 'Campus IT accounts are managed by the IT Support team. You can initiate an automated reset via the Student Portal login screen, or request a manual credential review by contacting itsupport@citycollegedublin.ie.'
  },
  {
    id: 'study-consult',
    question: 'Can I book a personalized research support session?',
    answer: 'Yes! Our librarians offer private, 30-minute academic consult sessions spanning search strategies, literature outlines, and bibliographic management using Zotero. Please email library@citycollegedublin.ie to book a session.'
  }
];

export default function Account({
  libraryCard,
  onOpenCardModal,
  onLogout,
  borrowedBooks,
  onRenewBook,
  onReturnBook,
  roomReservations,
  onCancelReservation,
  registeredEvents,
  onCancelEventRSVP,
  savedBookshelf,
  onToggleBookshelf
}: AccountProps) {
  
  // State for FAQ Accordion
  const [expandedFAQ, setExpandedFAQ] = useState<string | null>(null);

  const toggleFAQ = (id: string) => {
    setExpandedFAQ(expandedFAQ === id ? null : id);
  };

  const handleFAQKeyDown = (e: React.KeyboardEvent<HTMLButtonElement>, index: number) => {
    const buttons = document.querySelectorAll<HTMLButtonElement>('.faq-accordion-button');
    if (!buttons || buttons.length === 0) return;

    switch (e.key) {
      case 'ArrowDown':
        e.preventDefault();
        buttons[(index + 1) % buttons.length]?.focus();
        break;
      case 'ArrowUp':
        e.preventDefault();
        buttons[(index - 1 + buttons.length) % buttons.length]?.focus();
        break;
      case 'Home':
        e.preventDefault();
        buttons[0]?.focus();
        break;
      case 'End':
        e.preventDefault();
        buttons[buttons.length - 1]?.focus();
        break;
      default:
        break;
    }
  };

  return (
    <div className="bg-slate-50/50 min-h-screen font-sans" id="help-desk-page-root">
      
      {/* Hero Full-width Deep Navy Banner */}
      <section className="bg-[#1e3e62] text-white py-16 sm:py-20" id="help-hero-banner">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-4">
          <div className="inline-flex items-center space-x-2 bg-white/10 px-3.5 py-1 rounded-full text-blue-200 text-xs font-semibold backdrop-blur-md">
            <HelpCircle className="w-3.5 h-3.5" />
            <span>Dedicated Academic & IT Assistance</span>
          </div>
          <h1 className="font-display font-bold text-4xl sm:text-5xl tracking-normal text-white">
            Help Desk
          </h1>
          <p className="text-slate-200 text-sm sm:text-base max-w-2xl mx-auto leading-relaxed font-normal">
            Get personalized assistance for database access, referencing standards, student IT services, and academic research support.
          </p>
        </div>
      </section>

      {/* Main Grid Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 space-y-12" id="help-main-content">
        
        {/* Row 1: Direct Support Cards (Keyboard Accessible) */}
        <section className="space-y-6" id="support-cards-section">
          <h2 className="font-display font-bold text-2xl text-slate-950 tracking-tight">
            Direct Support Channels
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            
            {/* Channel 1: Library Support */}
            <a 
              href="mailto:library@citycollegedublin.ie"
              className="bg-white rounded-xl border border-slate-200/85 p-6 hover:border-blue-500 shadow-xs hover:shadow-md transition-all duration-200 flex flex-col justify-between group focus-visible:ring-2 focus-visible:ring-[#1e3e62] focus-visible:ring-offset-2 focus:outline-none text-left"
              aria-label="Email Library Support Desk at library@citycollegedublin.ie"
            >
              <div className="space-y-4">
                <div className="bg-blue-50 p-3 rounded-lg text-blue-700 w-12 h-12 flex items-center justify-center shrink-0">
                  <BookOpen className="w-6 h-6 text-blue-700" />
                </div>
                <div className="space-y-1">
                  <h3 className="font-display font-bold text-lg text-slate-900 group-hover:text-blue-800 transition-colors leading-snug">
                    Library Support Desk
                  </h3>
                  <p className="text-xs text-slate-500 leading-relaxed font-normal">
                    Get help with database logins, journal access, and referencing structures.
                  </p>
                </div>
              </div>
              <div className="pt-6 border-t border-slate-100 mt-6 flex items-center justify-between text-xs font-bold text-blue-600 group-hover:text-blue-800">
                <span>library@citycollegedublin.ie</span>
                <ArrowRight className="w-4 h-4 transform group-hover:translate-x-1 transition-transform" />
              </div>
            </a>

            {/* Channel 2: IT Support */}
            <a 
              href="mailto:itsupport@citycollegedublin.ie"
              className="bg-white rounded-xl border border-slate-200/85 p-6 hover:border-blue-500 shadow-xs hover:shadow-md transition-all duration-200 flex flex-col justify-between group focus-visible:ring-2 focus-visible:ring-[#1e3e62] focus-visible:ring-offset-2 focus:outline-none text-left"
              aria-label="Email Campus IT Support at itsupport@citycollegedublin.ie"
            >
              <div className="space-y-4">
                <div className="bg-slate-100 p-3 rounded-lg text-slate-700 w-12 h-12 flex items-center justify-center shrink-0">
                  <Laptop className="w-6 h-6 text-slate-700" />
                </div>
                <div className="space-y-1">
                  <h3 className="font-display font-bold text-lg text-slate-900 group-hover:text-blue-800 transition-colors leading-snug">
                    Campus IT Support
                  </h3>
                  <p className="text-xs text-slate-500 leading-relaxed font-normal">
                    Request password resets, account reviews, or student portal assistance.
                  </p>
                </div>
              </div>
              <div className="pt-6 border-t border-slate-100 mt-6 flex items-center justify-between text-xs font-bold text-slate-600 group-hover:text-slate-800">
                <span>itsupport@citycollegedublin.ie</span>
                <ArrowRight className="w-4 h-4 transform group-hover:translate-x-1 transition-transform" />
              </div>
            </a>

            {/* Channel 3: 1-to-1 consult bookings */}
            <a 
              href="mailto:library@citycollegedublin.ie"
              className="bg-white rounded-xl border border-slate-200/85 p-6 hover:border-blue-500 shadow-xs hover:shadow-md transition-all duration-200 flex flex-col justify-between group focus-visible:ring-2 focus-visible:ring-[#1e3e62] focus-visible:ring-offset-2 focus:outline-none text-left"
              aria-label="Email Library Support Desk to book a 1-to-1 consultation at library@citycollegedublin.ie"
            >
              <div className="space-y-4">
                <div className="bg-amber-50 p-3 rounded-lg text-amber-700 w-12 h-12 flex items-center justify-center shrink-0">
                  <GraduationCap aria-hidden="true" className="w-6 h-6 text-amber-700" />
                </div>
                <div className="space-y-1">
                  <h3 className="font-display font-bold text-lg text-slate-900 group-hover:text-blue-800 transition-colors leading-snug flex items-center gap-1.5">
                    <span>1-on-1 Consultation</span>
                    <Sparkles aria-hidden="true" className="w-4 h-4 text-amber-500 shrink-0" />
                  </h3>
                  <p className="text-xs text-slate-500 leading-relaxed font-normal">
                    Schedule a private 30-minute virtual session with an expert librarian.
                  </p>
                </div>
              </div>
              <div className="pt-6 border-t border-slate-100 mt-6 flex items-center justify-between text-xs font-bold text-blue-600 group-hover:text-blue-800">
                <span>library@citycollegedublin.ie</span>
                <ArrowRight aria-hidden="true" className="w-4 h-4 transform group-hover:translate-x-1 transition-transform" />
              </div>
            </a>

          </div>
        </section>

        {/* Step-by-Step Login Guides */}
        <section className="space-y-6" id="login-guides-section">
          <h2 className="font-display font-bold text-2xl text-slate-950 tracking-tight">
            Step-by-Step Platform Login Guides
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            
            {/* Guide 1: EBSCO */}
            <a 
              href="https://ashfieldcollege-my.sharepoint.com/:w:/g/personal/andrew_ryan_citygroup_ie/IQCbZxp_R7kJSJNT8ckYkI_gAfrAKEJnb7ccwiyu_E4C8jc?e=vcSpvM"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white rounded-xl border border-slate-200/85 p-6 hover:border-blue-500 shadow-xs hover:shadow-md transition-all duration-200 flex flex-col justify-between group focus-visible:ring-2 focus-visible:ring-[#1e3e62] focus-visible:ring-offset-2 focus:outline-none text-left"
              aria-label="View step-by-step document guide: How to Sign Into EBSCO (opens in a new tab)"
            >
              <div className="space-y-4">
                <div className="bg-blue-50/70 p-3 rounded-lg text-blue-700 w-12 h-12 flex items-center justify-center shrink-0">
                  <KeyRound aria-hidden="true" className="w-6 h-6 text-blue-700" />
                </div>
                <div className="space-y-1.5">
                  <h3 className="font-display font-bold text-lg text-slate-900 group-hover:text-blue-800 transition-colors leading-snug">
                    How to Sign Into EBSCO
                  </h3>
                  <p className="text-xs text-slate-500 leading-relaxed font-normal">
                    Comprehensive, illustrated walk-through for accessing your EBSCO Host accounts, search profiles, and saved portfolios.
                  </p>
                </div>
              </div>
              <div className="pt-6 border-t border-slate-100 mt-6 flex items-center justify-between text-xs font-bold text-blue-600 group-hover:text-blue-800">
                <span className="flex items-center gap-1.5">
                  <span>View Step-by-Step Document</span>
                  <ExternalLink aria-hidden="true" className="w-3.5 h-3.5" />
                </span>
                <ArrowRight aria-hidden="true" className="w-4 h-4 transform group-hover:translate-x-1 transition-transform" />
              </div>
            </a>

            {/* Guide 2: Perlego */}
            <a 
              href="https://ashfieldcollege-my.sharepoint.com/:w:/g/personal/andrew_ryan_citygroup_ie/IQB4I0G973tsSoTBXjvN3L6QAbw-nyrcxrgrlbM4wNhBTnU?e=ncL5gm"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white rounded-xl border border-slate-200/85 p-6 hover:border-blue-500 shadow-xs hover:shadow-md transition-all duration-200 flex flex-col justify-between group focus-visible:ring-2 focus-visible:ring-[#1e3e62] focus-visible:ring-offset-2 focus:outline-none text-left"
              aria-label="View step-by-step document guide: How to Sign Into Perlego (opens in a new tab)"
            >
              <div className="space-y-4">
                <div className="bg-emerald-50/70 p-3 rounded-lg text-emerald-700 w-12 h-12 flex items-center justify-center shrink-0">
                  <KeyRound aria-hidden="true" className="w-6 h-6 text-emerald-700" />
                </div>
                <div className="space-y-1.5">
                  <h3 className="font-display font-bold text-lg text-slate-900 group-hover:text-emerald-800 transition-colors leading-snug">
                    How to Sign Into Perlego
                  </h3>
                  <p className="text-xs text-slate-500 leading-relaxed font-normal">
                    Detailed guide showing how to set up your primary eTextbook library credentials, highlights, and offline downloads.
                  </p>
                </div>
              </div>
              <div className="pt-6 border-t border-slate-100 mt-6 flex items-center justify-between text-xs font-bold text-emerald-600 group-hover:text-emerald-800">
                <span className="flex items-center gap-1.5">
                  <span>View Step-by-Step Document</span>
                  <ExternalLink aria-hidden="true" className="w-3.5 h-3.5" />
                </span>
                <ArrowRight aria-hidden="true" className="w-4 h-4 transform group-hover:translate-x-1 transition-transform" />
              </div>
            </a>

          </div>
        </section>

        {/* Row 2: FAQ Section */}
        <div className="max-w-3xl mx-auto" id="faq-section-block">
          
          {/* FAQ Accordion Panel */}
          <section className="space-y-6" id="faq-accordions-panel">
            <div className="space-y-1 text-center mb-8">
              <h2 className="font-display font-bold text-2xl text-slate-950 tracking-tight">
                Frequently Asked Questions
              </h2>
              <p className="text-xs text-slate-500 leading-relaxed">
                Find quick, direct answers to common research and IT questions.
              </p>
            </div>

            <div className="space-y-3">
              {FAQ_ITEMS.map((item, index) => {
                const isExpanded = expandedFAQ === item.id;
                return (
                  <div 
                    key={item.id}
                    className="bg-white rounded-xl border border-slate-200/80 overflow-hidden shadow-2xs transition-all duration-200 focus-within:ring-2 focus-within:ring-[#1e3e62] focus-within:ring-offset-2"
                  >
                    <h3 className="m-0">
                      <button
                        type="button"
                        id={`faq-button-${item.id}`}
                        onClick={() => toggleFAQ(item.id)}
                        onKeyDown={(e) => handleFAQKeyDown(e, index)}
                        className="faq-accordion-button w-full px-5 py-4 flex items-center justify-between text-left font-bold text-[#1e3e62] hover:text-[#152d47] focus:outline-none transition-all cursor-pointer text-sm sm:text-base"
                        aria-expanded={isExpanded}
                        aria-controls={`faq-answer-${item.id}`}
                      >
                        <span>{item.question}</span>
                        {isExpanded ? (
                          <ChevronUp className="w-4.5 h-4.5 text-slate-400 shrink-0 ml-3" />
                        ) : (
                          <ChevronDown className="w-4.5 h-4.5 text-slate-400 shrink-0 ml-3" />
                        )}
                      </button>
                    </h3>
                    
                    {isExpanded && (
                      <div 
                        id={`faq-answer-${item.id}`}
                        role="region"
                        aria-labelledby={`faq-button-${item.id}`}
                        className="px-5 pb-5 pt-1 border-t border-slate-50 bg-slate-50/30 text-xs text-slate-600 leading-relaxed font-normal"
                      >
                        {item.answer}
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          </section>

        </div>

      </div>

    </div>
  );
}
