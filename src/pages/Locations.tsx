import React, { useState, useMemo } from 'react';
import { 
  Search, 
  ExternalLink, 
  BookOpen, 
  TrendingUp, 
  Laptop, 
  Lock, 
  BarChart3, 
  Baby, 
  Coins, 
  Wrench, 
  Brain, 
  Sparkles, 
  GraduationCap, 
  RefreshCw,
  Bookmark
} from 'lucide-react';
import CollegeLogo from '../components/CollegeLogo';

interface SubjectGuide {
  id: string;
  title: string;
  subject: string;
  description: string;
  url: string;
  iconName: string;
  highlightedTopics: string[];
  resourcesCount: number;
}

const SUBJECT_GUIDES: SubjectGuide[] = [
  {
    id: 'business',
    title: 'Business & Management Library Guide',
    subject: 'Business',
    description: 'Academic resources for corporate strategy, marketing, organizational behavior, business ethics, and entrepreneurship. Find premium journal directories and case study repositories.',
    url: 'https://padlet.com/CityCollegeDublinLibrary/business-library-guide-deyxz0smzxrc8xgj',
    iconName: 'Business',
    highlightedTopics: ['Strategic Management', 'Marketing Science', 'Entrepreneurship', 'Corporate Finance'],
    resourcesCount: 24
  },
  {
    id: 'comp-sci',
    title: 'Computer Science Library Guide',
    subject: 'Computer Science',
    description: 'Essential research material for software engineering, advanced algorithms, computing architectures, and artificial intelligence models licensed for study.',
    url: 'https://padlet.com/CityCollegeDublinLibrary/computer-science-library-guide-jagxaq0qjwap9v5v',
    iconName: 'ComputerScience',
    highlightedTopics: ['Software Engineering', 'AI & Machine Learning', 'Cloud Infrastructures', 'Algorithms'],
    resourcesCount: 31
  },
  {
    id: 'cyber-sec',
    title: 'Cyber Security Library Guide',
    subject: 'Cyber Security',
    description: 'Comprehensive references covering threat prevention, system cryptography, security compliance (GDPR), risk mitigation, and ethical hacking protocols.',
    url: 'https://padlet.com/CityCollegeDublinLibrary/cyber-security-resources-3t9y4bb6xhhry8mx',
    iconName: 'CyberSecurity',
    highlightedTopics: ['Information Assurance', 'Ethical Hacking', 'GDPR Compliance', 'Threat Analysis'],
    resourcesCount: 19
  },
  {
    id: 'data-analytics',
    title: 'Data Analytics Library Guide',
    subject: 'Data Analytics',
    description: 'Databases, statistical tools, and interactive dashboards curated for big data systems, business intelligence, predictive modeling, and data visualization.',
    url: 'https://padlet.com/CityCollegeDublinLibrary/data-analytics-library-guide-p5wy8walbfxxg73w',
    iconName: 'DataAnalytics',
    highlightedTopics: ['Big Data Systems', 'Statistical Modeling', 'Machine Learning', 'Data Visualization'],
    resourcesCount: 26
  },
  {
    id: 'early-childhood',
    title: 'Early Childhood Library Guide',
    subject: 'Early Childhood Education',
    description: 'Scholarly papers on child development, pedagogical strategies, early literacy, inclusive play methodology, and early care system frameworks.',
    url: 'https://padlet.com/CityCollegeDublinLibrary/early-childhood-education-care-library-guide-ch5gdxe1xmkcqu8t',
    iconName: 'EarlyChildhood',
    highlightedTopics: ['Pedagogy & Curriculum', 'Cognitive Development', 'Early Literacy', 'Child Psychology'],
    resourcesCount: 22
  },
  {
    id: 'economics',
    title: 'Economics Library Guide',
    subject: 'Economics',
    description: 'Key macroeconomic metrics, econometrics models, global financial policies, trade theories, and public sector economic studies.',
    url: 'https://padlet.com/CityCollegeDublinLibrary/economics-library-guide-qpfouaqigimb8qu4',
    iconName: 'Economics',
    highlightedTopics: ['Macroeconomic Theory', 'Applied Econometrics', 'Monetary Systems', 'International Trade'],
    resourcesCount: 18
  },
  {
    id: 'engineering',
    title: 'Engineering Library Guide',
    subject: 'Engineering',
    description: 'Peer-reviewed research and reference guides spanning mechanical, structural, electrical, and systems engineering standards and design principles.',
    url: 'https://padlet.com/CityCollegeDublinLibrary/engineering-library-guide-1tn6oo5h94vv2cb7',
    iconName: 'Engineering',
    highlightedTopics: ['Materials Engineering', 'Systems Optimization', 'CAD & Prototyping', 'Circuit Architectures'],
    resourcesCount: 28
  },
  {
    id: 'psychology-criminology',
    title: 'Psychology & Criminology Library Guide',
    subject: 'Psychology and Criminology',
    description: 'Interdisciplinary portal covering cognitive processes, human psychology, criminological theories, forensic methodology, and social justice systems.',
    url: 'https://padlet.com/CityCollegeDublinLibrary/psychology-library-guide-dqfueqytn57l9gtd',
    iconName: 'Psychology',
    highlightedTopics: ['Cognitive Psychology', 'Criminological Theory', 'Forensic Behavioral Analysis', 'Social Justice'],
    resourcesCount: 25
  }
];

export default function Locations() {
  const [searchQuery, setSearchQuery] = useState('');
  const [activeCategory, setActiveCategory] = useState('All');

  // Filter categories
  const categories = ['All', 'Technology', 'Social Sciences', 'Business & Finance'];

  // Match guides to broad categories for filters
  const getBroadCategory = (subject: string): string => {
    const s = subject.toLowerCase();
    if (s.includes('computer') || s.includes('security') || s.includes('analytics') || s.includes('engineering')) {
      return 'Technology';
    }
    if (s.includes('education') || s.includes('psychology') || s.includes('criminology')) {
      return 'Social Sciences';
    }
    if (s.includes('business') || s.includes('economics')) {
      return 'Business & Finance';
    }
    return 'Other';
  };

  const filteredGuides = useMemo(() => {
    return SUBJECT_GUIDES.filter(guide => {
      const matchesSearch = 
        guide.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        guide.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
        guide.subject.toLowerCase().includes(searchQuery.toLowerCase()) ||
        guide.highlightedTopics.some(t => t.toLowerCase().includes(searchQuery.toLowerCase()));

      const matchesCat = activeCategory === 'All' || getBroadCategory(guide.subject) === activeCategory;

      return matchesSearch && matchesCat;
    });
  }, [searchQuery, activeCategory]);

  const handleReset = () => {
    setSearchQuery('');
    setActiveCategory('All');
  };

  // Icon renderer helper
  const renderIcon = (name: string) => {
    const className = "w-6 h-6 text-white";
    switch (name) {
      case 'Business':
        return <TrendingUp className={className} />;
      case 'ComputerScience':
        return <Laptop className={className} />;
      case 'CyberSecurity':
        return <Lock className={className} />;
      case 'DataAnalytics':
        return <BarChart3 className={className} />;
      case 'EarlyChildhood':
        return <Baby className={className} />;
      case 'Economics':
        return <Coins className={className} />;
      case 'Engineering':
        return <Wrench className={className} />;
      case 'Psychology':
        return <Brain className={className} />;
      default:
        return <BookOpen className={className} />;
    }
  };

  return (
    <div className="bg-slate-50/50 min-h-screen font-sans" id="research-guides-page-root">
      
      {/* Hero Full-width Deep Navy Banner (Matching #1e3e62 exactly) */}
      <section className="bg-[#1e3e62] text-white py-16 sm:py-20" id="guides-hero-banner">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-4">
          <div className="inline-flex items-center space-x-2 bg-white/10 px-3.5 py-1 rounded-full text-blue-200 text-xs font-semibold backdrop-blur-md">
            <BookOpen className="w-3.5 h-3.5" />
            <span>Interactive Subject Resource Hubs</span>
          </div>
          <h1 className="font-display font-bold text-4xl sm:text-5xl tracking-normal text-white">
            Subject Guides
          </h1>
          <p className="text-slate-200 text-sm sm:text-base max-w-2xl mx-auto leading-relaxed font-normal">
            Direct access to specialized library resources, curated databases, core readings, and academic toolkits hosted on our official interactive Padlet guide boards.
          </p>
        </div>
      </section>

      {/* Main Content Container */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 space-y-8" id="guides-content-container">
        
        {/* Search & Subject Area Filters Grid */}
        <div className="bg-white rounded-xl border border-slate-200/80 p-5 sm:p-6 shadow-xs flex flex-col md:flex-row md:items-center justify-between gap-5">
          {/* Search Input */}
          <div className="relative w-full max-w-md">
            <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search subject guides by keyword, subject, topic..."
              className="w-full bg-slate-50 hover:bg-slate-100 focus:bg-white border border-slate-200 focus:border-[#1e3e62] focus:ring-1 focus:ring-[#1e3e62] rounded-lg pl-10 pr-4 py-2.5 text-sm outline-none transition-all placeholder-slate-400"
            />
          </div>

          {/* Dynamic Filter Buttons */}
          <div className="flex flex-wrap items-center gap-2">
            <span className="text-xs font-bold text-slate-400 uppercase tracking-wider mr-1 hidden sm:inline">
              Area:
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

        {/* Dynamic Cards Grid displaying all eight subject guides */}
        {filteredGuides.length === 0 ? (
          <div className="bg-white rounded-xl border border-slate-200 p-16 text-center space-y-4">
            <BookOpen className="w-12 h-12 text-slate-300 mx-auto" />
            <div className="space-y-1">
              <p className="font-semibold text-slate-800 text-base">No subject guides match your search criteria</p>
              <p className="text-xs text-slate-500 font-medium">Try adjusting your keywords or clearing current filters.</p>
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
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6" id="subject-guides-grid">
            {filteredGuides.map((guide) => (
              <a
                key={guide.id}
                href={guide.url}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white rounded-2xl border border-slate-200/80 hover:border-[#1e3e62]/60 p-5 shadow-xs hover:shadow-md flex flex-col justify-between transition-all duration-350 group focus-visible:ring-2 focus-visible:ring-[#1e3e62] focus-visible:ring-offset-2 focus:outline-none block text-left"
              >
                <div className="space-y-4">
                  
                  {/* Top line: Color Icon Badge & Resources Count Badge */}
                  <div className="flex items-center justify-between">
                    <div aria-hidden="true" className="bg-[#1e3e62] p-3 rounded-xl shadow-xs transition-transform duration-300 group-hover:scale-105">
                      {renderIcon(guide.iconName)}
                    </div>
                    <span className="text-[10px] bg-blue-50 text-[#1e3e62] font-extrabold px-2.5 py-1 rounded-full border border-blue-100/40 uppercase tracking-wide">
                      {guide.resourcesCount} interactive links
                    </span>
                  </div>

                  {/* Title & Subject */}
                  <div className="space-y-1">
                    <span className="text-[10px] font-bold text-blue-600 uppercase tracking-wider block">
                      {guide.subject}
                    </span>
                    <h3 className="font-display font-bold text-lg text-slate-900 group-hover:text-blue-800 transition-colors leading-snug line-clamp-2">
                      {guide.title}
                    </h3>
                  </div>

                  {/* Description Paragraph */}
                  <p className="text-xs text-slate-500 leading-relaxed line-clamp-3">
                    {guide.description}
                  </p>

                  {/* Key Highlights / Subtopics Tags */}
                  <div className="space-y-1.5 pt-1">
                    <span className="text-[9px] font-bold text-slate-400 uppercase tracking-wider block">Key Curated Topics:</span>
                    <div className="flex flex-wrap gap-1">
                      {guide.highlightedTopics.map((topic, index) => (
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

                {/* Direct Link Footer Button */}
                <div className="pt-4 mt-5 border-t border-slate-100 flex items-center justify-between">
                  <span className="text-[10px] font-bold text-slate-400 uppercase tracking-wider flex items-center space-x-1.5">
                    <Bookmark aria-hidden="true" className="w-3.5 h-3.5 text-slate-300" />
                    <span>Official Padlet Board</span>
                  </span>
                  <div
                    className="inline-flex items-center space-x-1.5 bg-[#1e3e62] group-hover:bg-[#2b4e75] group-focus:bg-[#2b4e75] text-white text-xs font-bold px-4 py-2 rounded-xl shadow-xs transition-all duration-200"
                  >
                    <span>Open Guide</span>
                    <ExternalLink aria-hidden="true" className="w-3.5 h-3.5" />
                    <span className="sr-only"> (opens in a new tab)</span>
                  </div>
                </div>

              </a>
            ))}
          </div>
        )}

        {/* Guidelines / Help Desk segment for interactive padlet use */}
        <div className="bg-slate-100/50 rounded-2xl border border-slate-200/80 p-6 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center space-x-4">
            <div className="bg-[#1e3e62] p-3 rounded-xl text-white shrink-0 hidden sm:block">
              <CollegeLogo className="w-6 h-6 text-white" onlyShield={true} />
            </div>
            <div className="space-y-1">
              <h4 className="font-bold text-slate-900 text-sm flex items-center gap-1.5">
                <Sparkles className="w-4 h-4 text-amber-500" />
                <span>How to use interactive Padlet boards?</span>
              </h4>
              <p className="text-xs text-slate-500 max-w-2xl leading-relaxed">
                Padlet boards are updated in real-time by City College Dublin library staff. They offer interactive links to study guides, lecture recordings, database search checklists, and curated citations directly matching your course modules.
              </p>
            </div>
          </div>
          <a
            href="https://padlet.com"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-white hover:bg-slate-50 border border-slate-200 hover:border-slate-300 text-slate-700 text-xs font-bold px-4 py-2.5 rounded-xl transition-all whitespace-nowrap cursor-pointer shadow-xs focus-visible:ring-2 focus-visible:ring-[#1e3e62] focus-visible:ring-offset-2 focus:outline-none text-center block"
          >
            About Padlet Platform
            <span className="sr-only"> (opens in a new tab)</span>
          </a>
        </div>

      </div>

    </div>
  );
}
