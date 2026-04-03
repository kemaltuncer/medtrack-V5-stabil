'use client';
import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { 
  Target, Microscope, GraduationCap, BarChart3, Beaker, LogIn, Sparkles
} from 'lucide-react';

const navLinks = [
  { id: 'akademi', label: 'Akademi', icon: GraduationCap },
  { id: 'osce', label: 'OSCE Prova', icon: Target },
  { id: 'vaka', label: 'Vaka RPG', icon: Microscope },
  { id: 'analiz', label: 'Klinik Analiz', icon: BarChart3 },
  { id: 'lab', label: 'Laboratuvar', icon: Beaker },
];

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="fixed top-0 left-0 right-0 z-[100] flex justify-center p-6 transition-all duration-500">
      <motion.nav 
        animate={{ width: isScrolled ? '95%' : '100%', maxWidth: '1400px' }}
        className={`relative flex items-center justify-between h-20 px-10 rounded-[2.5rem] border transition-all duration-500 ${
          isScrolled ? 'bg-black/80 backdrop-blur-3xl border-white/20 shadow-2xl' : 'bg-white/5 backdrop-blur-xl border-white/10'
        }`}
      >
        {/* Logo */}
        <div className="flex items-center gap-3 group cursor-pointer">
          <div className="p-2.5 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-xl shadow-lg shadow-blue-500/20">
            <Sparkles className="w-5 h-5 text-white" />
          </div>
          <span className="text-xl font-black text-white uppercase italic tracking-tighter">MEDİ<span className="text-blue-400">TRACK</span></span>
        </div>

        {/* Ana Menü (Sidebar İçeriği) */}
        <div className="hidden lg:flex items-center gap-1 p-1.5 bg-white/5 rounded-3xl border border-white/5">
          {navLinks.map((item) => (
            <button key={item.id} className="flex items-center gap-2 px-5 py-2.5 rounded-2xl text-xs font-bold text-gray-400 hover:text-white hover:bg-white/10 transition-all group">
              <item.icon className="w-4 h-4 group-hover:scale-110 transition-transform" />
              <span>{item.label}</span>
            </button>
          ))}
        </div>

        {/* Aksiyon Butonu */}
        <button className="flex items-center gap-2 px-6 py-3 bg-blue-600 hover:bg-blue-500 text-white rounded-2xl font-bold text-xs transition-all shadow-lg shadow-blue-600/20 active:scale-95">
          <LogIn className="w-4 h-4" />
          <span>Kayıt Ol / Giriş</span>
        </button>
      </motion.nav>
    </div>
  );
}
