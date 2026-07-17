import React from 'react';
import { Accessibility as AccessibilityIcon, Mail, CheckCircle2, AlertTriangle, ArrowLeft } from 'lucide-react';

interface AccessibilityProps {
  setCurrentPage: (page: string) => void;
}

export default function Accessibility({ setCurrentPage }: AccessibilityProps) {
  return (
    <div className="bg-slate-50/50 min-h-screen font-sans" id="accessibility-statement-root">
      
      {/* Hero Header */}
      <section className="bg-[#1e3e62] text-white py-16 sm:py-20" id="accessibility-hero">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-4">
          <div className="inline-flex items-center space-x-2 bg-white/10 px-3.5 py-1 rounded-full text-blue-200 text-xs font-semibold backdrop-blur-md">
            <AccessibilityIcon className="w-3.5 h-3.5" aria-hidden="true" />
            <span>WCAG 2.2 Compliance Statement</span>
          </div>
          <h1 className="font-display font-bold text-4xl sm:text-5xl tracking-normal text-white">
            Accessibility Statement
          </h1>
          <p className="text-slate-200 text-sm sm:text-base max-w-2xl mx-auto leading-relaxed font-normal">
            City College Dublin is committed to making our website accessible to everyone, including people with disabilities.
          </p>
        </div>
      </section>

      {/* Main Content Area */}
      <main className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-12" id="accessibility-main-content">
        <article className="bg-white rounded-2xl border border-slate-200/80 p-8 sm:p-10 shadow-xs space-y-8">
          
          {/* Commitment Intro */}
          <div className="space-y-4">
            <p className="text-slate-700 leading-relaxed text-base font-normal">
              City College Dublin is committed to making our website accessible to everyone, including people with disabilities. We aim to follow the Web Content Accessibility Guidelines (WCAG 2.2 AA) and continuously improve accessibility across our site.
            </p>
          </div>

          <hr className="border-slate-100" />

          {/* Section: Measures */}
          <section className="space-y-4" aria-labelledby="accessibility-measures-heading">
            <h2 id="accessibility-measures-heading" className="font-display font-bold text-xl text-slate-950 flex items-center gap-2">
              <CheckCircle2 className="w-5 h-5 text-emerald-600 shrink-0" aria-hidden="true" />
              <span>Our Accessibility Measures</span>
            </h2>
            <ul className="space-y-3.5 text-slate-600 text-sm pl-1">
              <li className="flex items-start gap-3">
                <span className="w-1.5 h-1.5 rounded-full bg-blue-500 mt-2 shrink-0" aria-hidden="true"></span>
                <span>Providing text alternatives for images and non-text content.</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="w-1.5 h-1.5 rounded-full bg-blue-500 mt-2 shrink-0" aria-hidden="true"></span>
                <span>Ensuring the website is navigable with a keyboard and compatible with assistive technologies.</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="w-1.5 h-1.5 rounded-full bg-blue-500 mt-2 shrink-0" aria-hidden="true"></span>
                <span>Using readable fonts, clear layouts, and sufficient color contrast.</span>
              </li>
            </ul>
          </section>

          <hr className="border-slate-100" />

          {/* Section: Limitations */}
          <section className="space-y-4" aria-labelledby="accessibility-limitations-heading">
            <h2 id="accessibility-limitations-heading" className="font-display font-bold text-xl text-slate-950 flex items-center gap-2">
              <AlertTriangle className="w-5 h-5 text-amber-500 shrink-0" aria-hidden="true" />
              <span>Limitations</span>
            </h2>
            <p className="text-slate-600 text-sm leading-relaxed font-normal">
              Some parts of our website may not yet be fully accessible. We are working diligently to identify any potential hurdles and apply targeted visual and technical updates to reach comprehensive compliance.
            </p>
          </section>

          <hr className="border-slate-100" />

          {/* Section: Feedback & Contact */}
          <section className="space-y-4" aria-labelledby="accessibility-feedback-heading">
            <h2 id="accessibility-feedback-heading" className="font-display font-bold text-xl text-slate-950 flex items-center gap-2">
              <Mail className="w-5 h-5 text-blue-600 shrink-0" aria-hidden="true" />
              <span>Feedback & Contact</span>
            </h2>
            <p className="text-slate-600 text-sm leading-relaxed font-normal">
              If you experience accessibility issues, please contact us. We welcome your feedback and are happy to assist with any alternative formats you may need.
            </p>
            <div className="mt-4 p-4 bg-blue-50/50 rounded-xl border border-blue-100/50 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3">
              <span className="text-sm font-semibold text-slate-800">Direct Support Email:</span>
              <a 
                href="mailto:library@citycollegedublin.ie" 
                className="text-blue-700 hover:text-blue-900 font-bold text-sm underline focus-visible:ring-2 focus-visible:ring-[#1e3e62] focus:outline-none rounded px-1 py-0.5 inline-block"
              >
                library@citycollegedublin.ie
              </a>
            </div>
          </section>

          {/* Back to Home Button */}
          <div className="pt-6 border-t border-slate-100 flex justify-start">
            <button
              onClick={() => setCurrentPage('home')}
              className="inline-flex items-center space-x-2 bg-slate-100 hover:bg-slate-200 text-slate-700 font-semibold px-5 py-2.5 rounded-xl transition-all cursor-pointer text-sm focus-visible:ring-2 focus-visible:ring-[#1e3e62] focus-visible:ring-offset-2 focus:outline-none"
            >
              <ArrowLeft className="w-4 h-4" aria-hidden="true" />
              <span>Back to Home</span>
            </button>
          </div>

        </article>
      </main>

    </div>
  );
}
