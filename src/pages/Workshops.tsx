import React, { useState, useMemo } from 'react';
import { 
  Search, 
  ExternalLink, 
  BookOpen, 
  TrendingUp, 
  PenTool, 
  Globe, 
  Wrench, 
  Laptop, 
  Bookmark, 
  RefreshCw,
  Video,
  PlayCircle
} from 'lucide-react';
import CollegeLogo from '../components/CollegeLogo';

export interface Workshop {
  id: string;
  title: string;
  category: 'Referencing' | 'Study Skills' | 'Academic Writing' | 'Research Skills' | 'Academic Tools';
  description: string;
  url: string;
  iconName: 'Referencing' | 'StudySkills' | 'WritingSkills' | 'Search' | 'OpenAccess' | 'Zotero' | 'Perlego';
  highlightedTopics: string[];
  resourcesCount: number;
}

const WORKSHOPS: Workshop[] = [
  {
    id: 'harvard-referencing',
    title: 'Harvard Referencing Masterclass',
    category: 'Referencing',
    description: 'Learn the core principles of the Harvard Referencing style. Master in-text citations, compile accurate bibliographies, and understand how to properly credit diverse academic sources.',
    url: 'https://ashfieldcollege-my.sharepoint.com/:v:/g/personal/lisa_donaldson_citygroup_ie/ES7L7Q8YiT9IpoYEe7_c3UMB3zZCmLMVXGmFYEWllcfKjA?e=blQZQu',
    iconName: 'Referencing',
    highlightedTopics: ['In-text Citations', 'Bibliography Design', 'Direct Quotations', 'Paraphrasing Rules'],
    resourcesCount: 16
  },
  {
    id: 'exam-prep',
    title: 'Exam Preparation & Study Guide',
    category: 'Study Skills',
    description: 'Supercharge your revision techniques. Discover evidence-based methods like active recall, spaced repetition, robust time management, and exam-day performance tactics.',
    url: 'https://ashfieldcollege-my.sharepoint.com/:v:/g/personal/lisa_donaldson_citygroup_ie/IQC_JSLP4c8qToYF00TNfMCEAfhuriXi4Sygp3FQvZnV3Zo',
    iconName: 'StudySkills',
    highlightedTopics: ['Active Recall', 'Spaced Repetition', 'Time Management', 'Exam Stress Mitigation'],
    resourcesCount: 18
  },
  {
    id: 'academic-integrity',
    title: 'Academic Integrity & Writing Skills',
    category: 'Academic Writing',
    description: 'Develop your academic voice while upholding integrity. Covers structured drafting, strong thesis statements, critical analysis, and avoiding plagiarism.',
    url: 'https://ashfieldcollege-my.sharepoint.com/:v:/g/personal/andrew_ryan_citygroup_ie/IQDfF5lUWvqvRbLp5Heqqeq8ASzMAiKE1J_VhIyn8DbOBww?e=2wr298',
    iconName: 'WritingSkills',
    highlightedTopics: ['Plagiarism Avoidance', 'Thesis Construction', 'Critical Analysis', 'Drafting & Editing'],
    resourcesCount: 22
  },
  {
    id: 'search-strategies',
    title: 'Effective Database Search Strategies',
    category: 'Research Skills',
    description: 'Navigate academic databases like a professional researcher. Learn Boolean operators, advanced search syntax, keyword expansion, and filtering methods.',
    url: 'https://ashfieldcollege-my.sharepoint.com/:v:/g/personal/andrew_ryan_citygroup_ie/IQDvVJtUJTBfSoGfDkJJjReSAcZJeMVdf_4QMr0xnB3A2EE',
    iconName: 'Search',
    highlightedTopics: ['Boolean Operators', 'Keyword Syntheses', 'Advanced Filtering', 'Peer-Review Auditing'],
    resourcesCount: 15
  },
  {
    id: 'open-access',
    title: 'Open Access & Open Educational Resources',
    category: 'Research Skills',
    description: 'Unlock the world of free scholarly resources. Discover open archives, creative commons databases, open textbooks, and how to source high-quality public domain papers.',
    url: 'https://ashfieldcollege-my.sharepoint.com/:v:/g/personal/andrew_ryan_citygroup_ie/IQBV4mvfssbbQrNfuKsf32wHATJ-xVE_D8nZwVJxiCINzZo',
    iconName: 'OpenAccess',
    highlightedTopics: ['OER Repositories', 'Creative Commons', 'Directory of OA Journals', 'Public Domain Auditing'],
    resourcesCount: 12
  },
  {
    id: 'zotero-intro',
    title: 'Zotero Reference Manager Introduction',
    category: 'Academic Tools',
    description: 'Learn how to use Zotero to collect, organize, cite, and share your research sources. Automatically generate bibliographies in Microsoft Word or Google Docs.',
    url: 'https://www.youtube.com/watch?v=tnbwKj6-pD8',
    iconName: 'Zotero',
    highlightedTopics: ['Citation Harvesting', 'Metadata Tagging', 'Word Processor Integration', 'Library Synchronization'],
    resourcesCount: 20
  },
  {
    id: 'perlego-guide',
    title: "Perlego eBook Library: A Beginner's Guide",
    category: 'Academic Tools',
    description: "Master our primary digital library platform. Learn how to search, bookmark, highlight, extract citations, and download study materials within Perlego's extensive textbook ecosystem.",
    url: 'https://vimeo.com/1059699855/54780e730e?fl=pl&fe=ti',
    iconName: 'Perlego',
    highlightedTopics: ['eTextbook Navigation', 'Digital Highlights & Notes', 'Citation Exporter', 'Offline Study Mode'],
    resourcesCount: 14
  }
];

export default function Workshops() {
  const [searchQuery, setSearchQuery] = useState('');
  const [activeCategory, setActiveCategory] = useState('All');

  const categories = ['All', 'Referencing', 'Study Skills', 'Academic Writing', 'Research Skills', 'Academic Tools'];

  const filteredWorkshops = useMemo(() => {
    return WORKSHOPS.filter(ws => {
      const matchesSearch = 
        ws.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        ws.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
        ws.category.toLowerCase().includes(searchQuery.toLowerCase()) ||
        ws.highlightedTopics.some(t => t.toLowerCase().includes(searchQuery.toLowerCase()));

      const matchesCat = activeCategory === 'All' || ws.category === activeCategory;

      return matchesSearch && matchesCat;
    });
  }, [searchQuery, activeCategory]);

  const handleReset = () => {
    setSearchQuery('');
    setActiveCategory('All');
  };

  const renderIcon = (name: string) => {
    const className = "w-6 h-6 text-white";
    switch (name) {
      case 'Referencing':
        return <BookOpen className={className} />;
      case 'StudySkills':
        return <TrendingUp className={className} />;
      case 'WritingSkills':
        return <PenTool className={className} />;
      case 'Search':
        return <Search className={className} />;
      case 'OpenAccess':
        return <Globe className={className} />;
      case 'Zotero':
        return <Wrench className={className} />;
      case 'Perlego':
        return <Laptop className={className} />;
      default:
        return <PlayCircle className={className} />;
    }
  };

  return (
    <div className="bg-slate-50/50 min-h-screen font-sans" id="workshops-page-root">
      
      {/* Hero Header Banner */}
      <section className="bg-[#1e3e62] text-white py-16 sm:py-20" id="workshops-hero-banner">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-4">
          <div className="inline-flex items-center space-x-2 bg-white/10 px-3.5 py-1 rounded-full text-blue-200 text-xs font-semibold backdrop-blur-md">
            <Video className="w-3.5 h-3.5" />
            <span>On-Demand Educational Seminars & Training</span>
          </div>
          <h1 className="font-display font-bold text-4xl sm:text-5xl tracking-normal text-white">
            Library Workshops
          </h1>
          <p className="text-slate-200 text-sm sm:text-base max-w-2xl mx-auto leading-relaxed font-normal">
            Recorded skills classes, platform guidelines, referencing masterclasses, and software tutorials curated to support your academic achievement at City College Dublin.
          </p>
        </div>
      </section>

      {/* Content Container */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 space-y-8" id="workshops-content-container">
        
        {/* Search & Categories Grid */}
        <div className="bg-white rounded-xl border border-slate-200/80 p-5 sm:p-6 shadow-xs flex flex-col xl:flex-row xl:items-center justify-between gap-5">
          {/* Search Input */}
          <div className="relative w-full max-w-md">
            <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search library workshops by keyword, category, topic..."
              className="w-full bg-slate-50 hover:bg-slate-100 focus:bg-white border border-slate-200 focus:border-[#1e3e62] focus:ring-1 focus:ring-[#1e3e62] rounded-lg pl-10 pr-4 py-2.5 text-sm outline-none transition-all placeholder-slate-400"
            />
          </div>

          {/* Categories Filters */}
          <div className="flex flex-wrap items-center gap-2">
            <span className="text-xs font-bold text-slate-400 uppercase tracking-wider mr-1 hidden sm:inline">
              Category:
            </span>
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-3.5 py-1.5 rounded-lg text-xs font-semibold border transition-all cursor-pointer focus-visible:ring-2 focus-visible:ring-[#1e3e62] focus-visible:ring-offset-2 focus:outline-none ${
                  activeCategory === cat
                    ? 'bg-[#1e3e62] text-white border-[#1e3e62]'
                    : 'bg-slate-50 hover:bg-slate-100 text-slate-600 border-slate-200'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Dynamic Cards Grid displaying all seven workshops */}
        {filteredWorkshops.length === 0 ? (
          <div className="bg-white rounded-xl border border-slate-200 p-16 text-center space-y-4">
            <Video className="w-12 h-12 text-slate-300 mx-auto" />
            <div className="space-y-1">
              <p className="font-semibold text-slate-800 text-base">No workshops match your search criteria</p>
              <p className="text-xs text-slate-500 font-medium">Try adjusting your keywords or selecting another category filter.</p>
            </div>
            <button
              onClick={handleReset}
              className="inline-flex items-center space-x-2 bg-[#1e3e62] hover:bg-[#2b4e75] text-white text-xs font-bold px-4 py-2.5 rounded-lg transition-colors cursor-pointer focus-visible:ring-2 focus-visible:ring-[#1e3e62] focus-visible:ring-offset-2 focus:outline-none"
            >
              <RefreshCw className="w-3.5 h-3.5" />
              <span>Clear Search Criteria</span>
            </button>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6" id="workshops-cards-grid">
            {filteredWorkshops.map((ws) => (
              <a
                key={ws.id}
                href={ws.url}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white rounded-2xl border border-slate-200/80 hover:border-[#1e3e62]/60 p-5 shadow-xs hover:shadow-md flex flex-col justify-between transition-all duration-350 group focus-visible:ring-2 focus-visible:ring-[#1e3e62] focus-visible:ring-offset-2 focus:outline-none block text-left"
              >
                <div className="space-y-4">
                  
                  {/* Top: Icon Badge & Status/Resources Badge */}
                  <div className="flex items-center justify-between">
                    <div aria-hidden="true" className="bg-[#1e3e62] p-3 rounded-xl shadow-xs transition-transform duration-300 group-hover:scale-105">
                      {renderIcon(ws.iconName)}
                    </div>
                    <span className="text-[10px] bg-blue-50 text-[#1e3e62] font-extrabold px-2.5 py-1 rounded-full border border-blue-100/40 uppercase tracking-wide">
                      {ws.resourcesCount} resources
                    </span>
                  </div>

                  {/* Title & Category */}
                  <div className="space-y-1">
                    <span className="text-[10px] font-bold text-blue-600 uppercase tracking-wider block">
                      {ws.category}
                    </span>
                    <h3 className="font-display font-bold text-lg text-slate-900 group-hover:text-blue-800 transition-colors leading-snug line-clamp-2 min-h-[3.5rem]">
                      {ws.title}
                    </h3>
                  </div>

                  {/* Description */}
                  <p className="text-xs text-slate-500 leading-relaxed line-clamp-3 min-h-[3.5rem]">
                    {ws.description}
                  </p>

                  {/* Curated Topics list */}
                  <div className="space-y-1.5 pt-1">
                    <span className="text-[9px] font-bold text-slate-400 uppercase tracking-wider block">Modules covered:</span>
                    <div className="flex flex-wrap gap-1">
                      {ws.highlightedTopics.map((topic, index) => (
                        <span 
                          key={index} 
                          className="bg-slate-50 hover:bg-slate-100/80 text-[10px] font-semibold text-slate-600 px-2 py-0.5 rounded border border-slate-200/30 transition-colors"
                        >
                          {topic}
                        </span>
                      ))}
                    </div>
                  </div>

                </div>

                {/* Footer link trigger */}
                <div className="pt-4 mt-5 border-t border-slate-100 flex items-center justify-between">
                  <span className="text-[10px] font-bold text-slate-400 uppercase tracking-wider flex items-center space-x-1.5">
                    <Bookmark aria-hidden="true" className="w-3.5 h-3.5 text-slate-300" />
                    <span>Video Seminar</span>
                  </span>
                  <div
                    className="inline-flex items-center space-x-1.5 bg-[#1e3e62] group-hover:bg-[#2b4e75] group-focus:bg-[#2b4e75] text-white text-xs font-bold px-4 py-2 rounded-xl shadow-xs transition-all duration-200"
                  >
                    <span>Play Workshop</span>
                    <ExternalLink aria-hidden="true" className="w-3.5 h-3.5" />
                    <span className="sr-only"> (opens in a new tab)</span>
                  </div>
                </div>

              </a>
            ))}
          </div>
        )}

        {/* Informative Help Alert Banner */}
        <div className="bg-slate-100/50 rounded-2xl border border-slate-200/80 p-6 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center space-x-4">
            <div className="bg-[#1e3e62] p-3 rounded-xl text-white shrink-0 hidden sm:block">
              <CollegeLogo className="w-6 h-6 text-white" onlyShield={true} />
            </div>
            <div className="space-y-1">
              <h4 className="font-bold text-slate-900 text-sm flex items-center gap-1.5">
                Need Live Academic Support?
              </h4>
              <p className="text-xs text-slate-500 leading-relaxed max-w-xl font-medium">
                Our library runs personalized face-to-face and one-on-one virtual help appointments. Send a request to our expert research librarians for personal citation audits, thesis outlining, and database inquiries.
              </p>
            </div>
          </div>
          <button 
            onClick={() => {
              const el = document.getElementById('header-logo-container');
              if (el) el.scrollIntoView({ behavior: 'smooth' });
              // Set to account/help desk
              window.location.hash = 'account';
            }}
            className="bg-[#1e3e62] hover:bg-[#2b4e75] text-white text-xs font-bold px-4.5 py-2.5 rounded-xl transition-all shadow-xs cursor-pointer focus-visible:ring-2 focus-visible:ring-blue-600 focus-visible:ring-offset-2 focus:outline-none shrink-0"
          >
            Schedule 1-to-1 Session
          </button>
        </div>

      </div>
    </div>
  );
}
