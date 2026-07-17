import React from 'react';
import { 
  PenTool, 
  BookOpen, 
  Bookmark, 
  FileText, 
  Calendar, 
  ShieldCheck, 
  BookMarked, 
  Compass, 
  ExternalLink,
  GraduationCap,
  Sparkles
} from 'lucide-react';
import CollegeLogo from '../components/CollegeLogo';

interface ModuleCard {
  title: string;
  url: string;
  description: string;
  category: string;
  timeEstimate: string;
  icon: React.ComponentType<{ className?: string }>;
}

export default function WritingSupports() {
  const modules: ModuleCard[] = [
    {
      title: 'Introduction to Academic Writing',
      url: 'https://share.eu.articulate.com/QGjiN5bXI1sa5usy0yXrz',
      category: 'Academic Writing',
      timeEstimate: '20 mins',
      description: 'Master the principles of academic honesty, rules of referencing, and key skills to kickstart your academic writing journey.',
      icon: ShieldCheck
    },
    {
      title: 'Active Reading & Note Taking',
      url: 'https://share.eu.articulate.com/JYGldJl5KGvNaKkvLgrDQ',
      category: 'Study Skills',
      timeEstimate: '25 mins',
      description: 'Develop strategies for active reading, extract key information effectively, and learn how to take structured notes for your assignments.',
      icon: BookMarked
    },
    {
      title: 'Academic Integrity',
      url: 'https://share.eu.articulate.com/Iqzv8RfAiRj2ml1olzTso',
      category: 'Ethics',
      timeEstimate: '15 mins',
      description: 'Understand academic honesty, how to correctly reference sources, avoid plagiarism, and maintain high standards of scholarly ethics in your work.',
      icon: FileText
    },
    {
      title: 'Assignment Writing: A Step-by-Step Guide',
      url: 'https://share.eu.articulate.com/mamN6laNhu7Rmt3YTCMIU',
      category: 'Composition',
      timeEstimate: '20 mins',
      description: 'Follow a structured process to complete your college assignments. Learn about unpacking brief requirements, structuring chapters, drafting, and proofreading.',
      icon: PenTool
    },
    {
      title: 'Critical Analysis and Synthesis in Academic Writing',
      url: 'https://share.eu.articulate.com/Yqm0SfPvbjHrpVppMqCfu',
      category: 'Analysis',
      timeEstimate: '30 mins',
      description: 'Learn how to move beyond descriptive writing. Develop critical thinking skills, analyze scholarly arguments, and synthesize multiple sources effectively.',
      icon: Compass
    }
  ];

  return (
    <div className="bg-slate-50/50 min-h-screen font-sans pb-20" id="writing-supports-root">
      
      {/* Hero Banner matching the site style */}
      <section className="bg-[#1e3e62] text-white py-16 sm:py-20" id="writing-supports-hero">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-4">
          <div className="inline-flex items-center space-x-2 bg-white/10 px-3 py-1 rounded-full text-xs font-semibold text-blue-300">
            <CollegeLogo className="w-3.5 h-3.5 text-blue-300" onlyShield={true} />
            <span>Dublin College Library Resources</span>
          </div>
          <h1 className="font-display font-bold text-4xl sm:text-5xl tracking-normal text-white">
            Writing & Research Supports
          </h1>
          <p className="text-slate-200 text-sm sm:text-base max-w-2xl mx-auto leading-relaxed font-normal">
            Enhance your academic scholarship, refine your prose, and perfect your citations. Access our custom interactive learning modules designed specifically for your modules.
          </p>
        </div>
      </section>

      {/* Main Content Area */}
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 mt-12" id="writing-supports-content">
        
        {/* Intro Highlight Banner */}
        <div className="bg-blue-50/50 border border-blue-100 rounded-2xl p-6 sm:p-8 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6 mb-12 shadow-2xs">
          <div className="space-y-1.5 max-w-2xl">
            <div className="flex items-center space-x-2 text-blue-800 font-bold text-sm">
              <Sparkles className="w-4 h-4 text-blue-600" />
              <span>Interactive Learning Modules</span>
            </div>
            <h3 className="font-display font-bold text-lg text-slate-900">
              Interactive E-Learning Hub
            </h3>
            <p className="text-sm text-slate-600 leading-relaxed">
              Explore our self-paced interactive modules. Built with Articulate Rise to guide you through referencing rules, structure planning, and academic composition.
            </p>
          </div>
          <div className="text-xs bg-blue-600 text-white font-bold px-3 py-1.5 rounded-lg shrink-0">
            5 Modules Available
          </div>
        </div>

        {/* Modules Grid */}
        <div className="space-y-6">
          <div className="border-b border-slate-200 pb-3">
            <h2 className="font-display font-bold text-xl text-slate-900">
              Academic Toolkits & Workshops
            </h2>
            <p className="text-xs text-slate-400 mt-0.5">Click any module card below to launch the interactive workshop in a new browser tab.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {modules.map((module) => {
              const IconComponent = module.icon;
              return (
                <a 
                  key={module.title}
                  href={module.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group cursor-pointer bg-white p-6 rounded-2xl border border-slate-200/80 hover:border-blue-600 hover:shadow-md transition-all duration-300 flex flex-col justify-between focus-visible:ring-2 focus-visible:ring-blue-600 focus-visible:ring-offset-2 focus:outline-none text-left block"
                >
                  <div className="space-y-4">
                    {/* Card Header Info */}
                    <div className="flex items-center justify-between">
                      <span className="text-[10px] uppercase tracking-wider font-extrabold text-blue-600 bg-blue-50 px-2.5 py-1 rounded-md">
                        {module.category}
                      </span>
                      <span className="text-xs text-slate-400 font-mono">
                        {module.timeEstimate}
                      </span>
                    </div>

                    {/* Title and Icon */}
                    <div className="flex items-start space-x-4">
                      <div className="bg-slate-50 text-[#1e3e62] p-3 rounded-xl border border-slate-100 group-hover:bg-blue-50 group-hover:text-blue-700 transition-colors shrink-0">
                        <IconComponent aria-hidden="true" className="w-5 h-5" />
                      </div>
                      <div className="space-y-1">
                        <h3 className="font-display font-bold text-base text-slate-900 group-hover:text-blue-700 transition-colors flex items-center gap-1.5">
                          <span>{module.title}</span>
                          <ExternalLink aria-hidden="true" className="w-3.5 h-3.5 text-slate-400 opacity-0 group-hover:opacity-100 transition-all shrink-0" />
                          <span className="sr-only"> (opens in a new tab)</span>
                        </h3>
                        <p className="text-xs text-slate-500 leading-relaxed">
                          {module.description}
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="mt-6 pt-4 border-t border-slate-50 flex items-center justify-between text-xs">
                    <span className="text-slate-400 group-hover:text-slate-600 transition-colors font-medium">
                      Launch Articulate Module
                    </span>
                    <span className="text-blue-600 font-bold group-hover:translate-x-1 transition-transform flex items-center space-x-0.5">
                      <span>Start Course</span>
                      <span>&rarr;</span>
                    </span>
                  </div>
                </a>
              );
            })}
          </div>
        </div>

        {/* Essential Guides & Handbooks Section */}
        <div className="mt-16 space-y-6" id="essential-guides-section">
          <div className="border-b border-slate-200 pb-3">
            <h2 className="font-display font-bold text-xl text-slate-900">
              Essential Guides & Reference Handbooks
            </h2>
            <p className="text-xs text-slate-400 mt-0.5">Core literature introductory guides and referencing systems for City College Dublin.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Guide 1: Library eResources Introduction */}
            <a 
              href="https://padlet.com/CityCollegeDublinLibrary/library-eresources-introduction-li8hhm8t3vem3xiv"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white p-6 rounded-2xl border border-slate-200/80 hover:border-blue-600 hover:shadow-md transition-all duration-300 flex flex-col justify-between group focus-visible:ring-2 focus-visible:ring-[#1e3e62] focus-visible:ring-offset-2 focus:outline-none text-left block"
            >
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <span className="text-[10px] uppercase tracking-wider font-extrabold text-blue-600 bg-blue-50 px-2.5 py-1 rounded-md">
                    Introduction
                  </span>
                  <span className="text-xs text-slate-400 font-mono">
                    Padlet Board
                  </span>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="bg-slate-50 text-[#1e3e62] p-3 rounded-xl border border-slate-100 group-hover:bg-blue-50 group-hover:text-blue-700 transition-colors shrink-0">
                    <BookOpen aria-hidden="true" className="w-5 h-5" />
                  </div>
                  <div className="space-y-1">
                    <h3 className="font-display font-bold text-base text-slate-900 group-hover:text-blue-700 transition-colors flex items-center gap-1.5">
                      <span>Library eResources Introduction</span>
                      <ExternalLink aria-hidden="true" className="w-3.5 h-3.5 text-slate-400 opacity-0 group-hover:opacity-100 transition-all shrink-0" />
                      <span className="sr-only"> (opens in a new tab)</span>
                    </h3>
                    <p className="text-xs text-slate-500 leading-relaxed">
                      Discover our digital repository collection, academic tools, and databases to maximize your research potential.
                    </p>
                  </div>
                </div>
              </div>
              <div className="mt-6 pt-4 border-t border-slate-50 flex items-center justify-between text-xs">
                <span className="text-slate-400 group-hover:text-slate-600 transition-colors font-medium">
                  Open Padlet Board
                </span>
                <span className="text-blue-600 font-bold group-hover:translate-x-1 transition-transform flex items-center space-x-0.5">
                  <span>Visit Board</span>
                  <span>&rarr;</span>
                </span>
              </div>
            </a>

            {/* Guide 2: Harvard Referencing Handbook */}
            <a 
              href="https://ashfieldcollege-my.sharepoint.com/:w:/g/personal/andrew_ryan_citygroup_ie/IQBu1gRmEy5aQ4KeG2TQLmTFAcisXbyVcCnWV_Rs7Y9QTuw?e=m2PMpw"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white p-6 rounded-2xl border border-slate-200/80 hover:border-blue-600 hover:shadow-md transition-all duration-300 flex flex-col justify-between group focus-visible:ring-2 focus-visible:ring-[#1e3e62] focus-visible:ring-offset-2 focus:outline-none text-left block"
            >
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <span className="text-[10px] uppercase tracking-wider font-extrabold text-emerald-600 bg-emerald-50 px-2.5 py-1 rounded-md">
                    Handbook
                  </span>
                  <span className="text-xs text-slate-400 font-mono">
                    MS Word Document
                  </span>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="bg-slate-50 text-emerald-700 p-3 rounded-xl border border-slate-100 group-hover:bg-emerald-50 group-hover:text-emerald-700 transition-colors shrink-0">
                    <Bookmark aria-hidden="true" className="w-5 h-5" />
                  </div>
                  <div className="space-y-1">
                    <h3 className="font-display font-bold text-base text-slate-900 group-hover:text-emerald-700 transition-colors flex items-center gap-1.5">
                      <span>Harvard Referencing Handbook</span>
                      <ExternalLink aria-hidden="true" className="w-3.5 h-3.5 text-slate-400 opacity-0 group-hover:opacity-100 transition-all shrink-0" />
                      <span className="sr-only"> (opens in a new tab)</span>
                    </h3>
                    <p className="text-xs text-slate-500 leading-relaxed">
                      Your comprehensive reference companion detailing all standard citation requirements and plagiarism policies.
                    </p>
                  </div>
                </div>
              </div>
              <div className="mt-6 pt-4 border-t border-slate-50 flex items-center justify-between text-xs">
                <span className="text-slate-400 group-hover:text-slate-600 transition-colors font-medium">
                  Open Document Guide
                </span>
                <span className="text-emerald-600 font-bold group-hover:translate-x-1 transition-transform flex items-center space-x-0.5">
                  <span>View Handbook</span>
                  <span>&rarr;</span>
                </span>
              </div>
            </a>
          </div>
        </div>

        {/* Additional Help Section */}
        <div className="mt-16 bg-white rounded-2xl border border-slate-200/80 p-8 text-center space-y-6">
          <div className="w-12 h-12 bg-amber-50 text-amber-600 rounded-full flex items-center justify-center mx-auto border border-amber-100">
            <Calendar className="w-5 h-5" />
          </div>
          <div className="space-y-2 max-w-lg mx-auto">
            <h3 className="font-display font-bold text-lg text-slate-900">
              Need One-on-One Support?
            </h3>
            <p className="text-xs text-slate-500 leading-relaxed">
              If you have specific questions about formatting, complex research, or drafting your assignments, schedule a personal online library consultation session.
            </p>
          </div>
          <div>
            <button 
              onClick={() => {
                alert("Consultation booking system is currently offline. Please email the City College Dublin Library Desk directly to arrange a tutoring session.");
              }}
              className="bg-[#1e3e62] hover:bg-[#152c46] text-white text-xs font-bold px-5 py-2.5 rounded-xl transition-all shadow-xs inline-flex items-center space-x-1.5"
            >
              <span>Request Personal Tutoring</span>
            </button>
          </div>
        </div>

      </div>

    </div>
  );
}
