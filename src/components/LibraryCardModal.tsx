import React, { useState } from 'react';
import { X, CreditCard as Card, CheckCircle, Mail, User, ShieldAlert, Award } from 'lucide-react';
import { LibraryCard } from '../types';

interface LibraryCardModalProps {
  isOpen: boolean;
  onClose: () => void;
  libraryCard: LibraryCard | null;
  onRegister: (name: string, email: string) => void;
}

export default function LibraryCardModal({
  isOpen,
  onClose,
  libraryCard,
  onRegister
}: LibraryCardModalProps) {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (name.trim() && email.trim()) {
      onRegister(name.trim(), email.trim());
      setName('');
      setEmail('');
    }
  };

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto" id="library-card-modal-backdrop">
      <div className="flex items-center justify-center min-h-screen px-4 pt-4 pb-20 text-center sm:block sm:p-0">
        {/* Gray overlay background */}
        <div 
          onClick={onClose}
          className="fixed inset-0 transition-opacity bg-slate-900/60 backdrop-blur-sm" 
          aria-hidden="true"
        ></div>

        {/* Trick to center modal in screen */}
        <span className="hidden sm:inline-block sm:align-middle sm:h-screen" aria-hidden="true">&#8203;</span>

        <div 
          role="dialog"
          aria-modal="true"
          aria-labelledby="modal-title"
          className="inline-block overflow-hidden text-left align-bottom transition-all transform bg-white rounded-2xl shadow-2xl sm:my-8 sm:align-middle sm:max-w-lg sm:w-full border border-slate-100"
        >
          
          {/* Header */}
          <div className="bg-slate-900 text-white px-6 py-4 flex items-center justify-between border-b border-slate-800">
            <div className="flex items-center space-x-2">
              <Award aria-hidden="true" className="w-5 h-5 text-amber-500" />
              <h2 id="modal-title" className="font-display font-bold text-lg">
                {libraryCard ? 'Your Virtual Library Card' : 'Get Your Free Library Card'}
              </h2>
            </div>
            <button 
              onClick={onClose}
              aria-label="Close modal"
              className="text-slate-400 hover:text-white transition-colors cursor-pointer"
            >
              <X aria-hidden="true" className="w-5 h-5" />
            </button>
          </div>

          {/* Modal Content */}
          <div className="p-6">
            {libraryCard ? (
              // Display Library Card
              <div className="space-y-6">
                <div className="relative bg-gradient-to-br from-indigo-950 via-slate-900 to-indigo-900 text-white p-6 rounded-2xl shadow-xl overflow-hidden border border-slate-800" id="virtual-library-card">
                  {/* Decorative backdrop shapes */}
                  <div className="absolute right-0 bottom-0 w-32 h-32 bg-amber-500/10 rounded-full blur-2xl -mr-6 -mb-6"></div>
                  <div className="absolute left-1/3 top-0 w-24 h-24 bg-indigo-500/10 rounded-full blur-xl -mt-4"></div>

                  <div className="flex justify-between items-start mb-6">
                    <div>
                      <h3 className="font-display font-black text-xl tracking-wide text-amber-400">CityLib</h3>
                      <p className="text-[10px] font-mono uppercase tracking-widest text-slate-400">Library Pass</p>
                    </div>
                    <div className="bg-emerald-500/10 text-emerald-400 border border-emerald-500/30 px-2.5 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider">
                      {libraryCard.status}
                    </div>
                  </div>

                  <div className="space-y-4 mb-6">
                    <div>
                      <p className="text-[10px] uppercase font-mono tracking-wider text-slate-400">Cardholder</p>
                      <p className="text-base font-semibold tracking-wide text-white">{libraryCard.userName}</p>
                    </div>
                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <p className="text-[10px] uppercase font-mono tracking-wider text-slate-400">Issued</p>
                        <p className="text-xs font-medium text-slate-200">{libraryCard.issueDate}</p>
                      </div>
                      <div>
                        <p className="text-[10px] uppercase font-mono tracking-wider text-slate-400">Expires</p>
                        <p className="text-xs font-medium text-slate-200">{libraryCard.expiryDate}</p>
                      </div>
                    </div>
                  </div>

                  {/* High Fidelity Crisp Barcode Visual */}
                  <div className="bg-white p-3 rounded-lg border border-slate-800">
                    <div className="flex justify-between h-9 items-stretch space-x-[2px] px-1 bg-white mb-1.5" aria-hidden="true">
                      {/* Barcode lines */}
                      {[1, 3, 1, 4, 2, 1, 3, 2, 1, 4, 1, 2, 3, 1, 1, 2, 4, 1, 3, 1, 2, 4, 1, 2, 1, 3].map((width, i) => (
                        <div 
                          key={i} 
                          className={`grow ${i % 2 === 0 ? 'bg-black' : 'bg-transparent'}`} 
                          style={{ flexGrow: width }}
                        ></div>
                      ))}
                    </div>
                    <p className="text-center font-mono text-[11px] tracking-[4px] text-slate-800 font-bold uppercase">
                      {libraryCard.cardNumber}
                    </p>
                  </div>
                </div>

                <div className="bg-slate-50 border border-slate-200 p-4 rounded-xl text-xs text-slate-600 leading-relaxed flex items-start space-x-3">
                  <CheckCircle aria-hidden="true" className="w-5 h-5 text-emerald-500 shrink-0 mt-0.5" />
                  <div>
                    <p className="font-bold text-slate-800">Card is active and ready!</p>
                    <p className="mt-1">
                      You can use this digital card to borrow hardcover books at any CityLib branch, check out eBooks on Libby, RSVP for workshops, and book quiet study rooms.
                    </p>
                  </div>
                </div>

                <div className="flex justify-end">
                  <button
                    onClick={onClose}
                    className="bg-slate-900 hover:bg-slate-800 text-white font-semibold text-sm px-5 py-2 rounded-lg cursor-pointer transition-colors"
                  >
                    Done
                  </button>
                </div>
              </div>
            ) : (
              // Register Form
              <form onSubmit={handleSubmit} className="space-y-4">
                <p className="text-sm text-slate-600 leading-relaxed">
                  Unlock free access to over 50,000 physical books, hundreds of quiet study spaces, computer labs, maker tools, and daily events. Complete your registration below.
                </p>

                <div className="space-y-1.5">
                  <label htmlFor="card-name" className="text-xs font-bold text-slate-700 uppercase tracking-wide">
                    Full Name
                  </label>
                  <div className="relative">
                    <User aria-hidden="true" className="absolute left-3.5 top-3.5 w-4 h-4 text-slate-400" />
                    <input
                      type="text"
                      id="card-name"
                      required
                      placeholder="Jane Doe"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      className="w-full bg-slate-50 text-slate-900 border border-slate-200 focus:border-amber-500 focus:ring-1 focus:ring-amber-500 rounded-xl pl-10 pr-4 py-3 text-sm outline-none transition-all"
                    />
                  </div>
                </div>

                <div className="space-y-1.5">
                  <label htmlFor="card-email" className="text-xs font-bold text-slate-700 uppercase tracking-wide">
                    Email Address
                  </label>
                  <div className="relative">
                    <Mail aria-hidden="true" className="absolute left-3.5 top-3.5 w-4 h-4 text-slate-400" />
                    <input
                      type="email"
                      id="card-email"
                      required
                      placeholder="jane.doe@example.com"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      className="w-full bg-slate-50 text-slate-900 border border-slate-200 focus:border-amber-500 focus:ring-1 focus:ring-amber-500 rounded-xl pl-10 pr-4 py-3 text-sm outline-none transition-all"
                    />
                  </div>
                </div>

                <div className="bg-amber-50 text-amber-900/80 border border-amber-200 p-4 rounded-xl text-xs flex items-start space-x-2.5">
                  <ShieldAlert aria-hidden="true" className="w-5 h-5 text-amber-600 shrink-0 mt-0.5" />
                  <div>
                    <p className="font-bold text-amber-900">Important Information</p>
                    <p className="mt-1">
                      Library cards are free for all residents. By signing up, you agree to return books within their loan period (21 days) and treat library equipment with respect.
                    </p>
                  </div>
                </div>

                <div className="flex justify-end space-x-3 pt-2">
                  <button
                    type="button"
                    onClick={onClose}
                    className="bg-slate-100 hover:bg-slate-200 text-slate-700 font-semibold text-sm px-4.5 py-2.5 rounded-lg cursor-pointer transition-colors"
                  >
                    Cancel
                  </button>
                  <button
                    type="submit"
                    className="bg-amber-500 hover:bg-amber-400 text-slate-950 font-bold text-sm px-6 py-2.5 rounded-lg cursor-pointer shadow transition-all duration-200"
                  >
                    Issue Card
                  </button>
                </div>
              </form>
            )}
          </div>

        </div>
      </div>
    </div>
  );
}
