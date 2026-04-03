'use client';
import React from 'react';
import { motion } from 'framer-motion';
import { 
  LayoutDashboard, Stethoscope, BookOpen, BarChart3, 
  Settings, Activity, ChevronRight, GraduationCap, 
  Beaker, Search, Bell
} from 'lucide-react';

const menuItems = [
  { icon: LayoutDashboard, label: 'Dashboard', href: '#', color: 'text-blue-400', active: false },
  { icon: Stethoscope, label: 'OSCE Prova', href: '/dashboard/osce', color: 'text-emerald-400', active: true },
  { icon: BookOpen, label: 'Vaka Arşivi', href: '#', color: 'text-purple-400', active: false },
  { icon: Activity, label: 'Nefroloji Modülü', href: '#', color: 'text-rose-400', active: false },
  { icon: BarChart3, label: 'İstatistik & Analiz', href: '#', color: 'text-amber-400', active: false },
  { icon: Beaker, label: 'Laboratuvar', href: '#', color: 'text-cyan-400', active: false },
];

export const Sidebar = () => {
  return (
    <motion.div 
      initial={{ x: -20, opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
      className="flex flex-col h-screen w-72 bg-[#0a0a0a]/80 backdrop-blur-2xl border-r border-white/5 p-6 text-gray-300 relative overflow-hidden shrink-0"
    >
      {/* Dekoratif Işıklandırma */}
      <div className="absolute -top-24 -left-24 w-64 h-64 bg-indigo-600/5 blur-[120px] rounded-full pointer-events-none" />
      <div className="absolute top-1/2 -right-24 w-48 h-48 bg-fuchsia-600/5 blur-[100px] rounded-full pointer-events-none" />
      
      {/* Logo */}
      <div className="flex items-center gap-3 mb-10 px-2 relative z-10">
        <div className="p-2.5 bg-gradient-to-br from-indigo-500 via-purple-500 to-fuchsia-600 rounded-xl shadow-2xl shadow-indigo-500/20 ring-1 ring-white/20">
          <GraduationCap className="w-6 h-6 text-white" />
        </div>
        <div>
          <h1 className="text-xl font-bold tracking-tight text-white leading-none">Meditrack</h1>
          <span className="text-[10px] text-indigo-400 font-black uppercase tracking-[0.2em]">v4-windsurf</span>
        </div>
      </div>

      {/* Arama Barı (Süsleme) */}
      <div className="mb-8 px-2">
        <div className="flex items-center gap-2 bg-white/5 border border-white/10 px-4 py-2 rounded-xl text-xs text-gray-500 focus-within:border-indigo-500/50 transition-all">
          <Search className="w-4 h-4" />
          <span>Vaka ara...</span>
        </div>
      </div>

      {/* Navigasyon */}
      <nav className="flex-1 space-y-1 relative z-10">
        <p className="text-[10px] font-bold text-gray-600 uppercase tracking-widest mb-4 px-4">Ana Menü</p>
        {menuItems.map((item) => (
          <motion.a
            key={item.label}
            href={item.href}
            whileHover={{ x: 4 }}
            className={`flex items-center justify-between group px-4 py-3.5 rounded-2xl transition-all duration-300 ${
              item.active 
              ? 'bg-gradient-to-r from-white/10 to-transparent text-white border border-white/10 shadow-lg' 
              : 'hover:bg-white/5 hover:text-white border border-transparent'
            }`}
          >
            <div className="flex items-center gap-4">
              <div className={`p-1.5 rounded-lg transition-colors ${item.active ? 'bg-white/5' : ''}`}>
                <item.icon className={`w-5 h-5 transition-transform duration-500 group-hover:scale-110 group-hover:rotate-3 ${item.color}`} />
              </div>
              <span className="text-sm font-semibold tracking-wide">{item.label}</span>
            </div>
            {item.active ? (
              <motion.div layoutId="activeDot" className="w-1.5 h-1.5 rounded-full bg-indigo-500 shadow-[0_0_12px_rgba(99,102,241,1)]" />
            ) : (
              <ChevronRight className="w-4 h-4 opacity-0 -translate-x-2 group-hover:opacity-40 group-hover:translate-x-0 transition-all" />
            )}
          </motion.a>
        ))}
      </nav>

      {/* Alt Profil Paneli */}
      <div className="mt-auto pt-6 border-t border-white/5 relative z-10">
        <div className="p-4 bg-gradient-to-b from-white/[0.03] to-transparent rounded-3xl border border-white/5 shadow-inner mb-6 group cursor-pointer">
          <div className="flex items-center gap-3 mb-4">
            <div className="relative">
              <div className="w-11 h-11 rounded-2xl bg-gradient-to-tr from-indigo-500 to-fuchsia-600 flex items-center justify-center text-white font-black text-lg border border-white/20 shadow-xl group-hover:rotate-6 transition-transform">
                M
              </div>
              <span className="absolute -top-1 -right-1 flex h-3 w-3">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-3 w-3 bg-emerald-500 border border-black"></span>
              </span>
            </div>
            <div className="overflow-hidden">
              <p className="text-sm font-bold text-white truncate">Kullanıcı</p>
              <p className="text-[10px] text-gray-500 font-bold uppercase tracking-tighter truncate">Tıp Fakültesi • Dönem 4</p>
            </div>
          </div>
          
          <div className="space-y-2">
            <div className="flex justify-between text-[9px] text-gray-400 font-black px-1">
              <span>OSCE HAZIRLIK</span>
              <span className="text-indigo-400">%88</span>
            </div>
            <div className="w-full bg-black/40 h-1.5 rounded-full overflow-hidden p-[1px]">
              <motion.div 
                initial={{ width: 0 }}
                animate={{ width: '88%' }}
                transition={{ duration: 1.5, ease: "easeOut" }}
                className="bg-gradient-to-r from-indigo-500 via-purple-500 to-fuchsia-500 h-full rounded-full" 
              />
            </div>
          </div>
        </div>

        <div className="flex items-center justify-between px-2">
          <button className="p-2 hover:bg-white/5 rounded-xl transition-colors text-gray-500 hover:text-white">
            <Settings className="w-5 h-5" />
          </button>
          <button className="p-2 hover:bg-white/5 rounded-xl transition-colors text-gray-500 hover:text-white relative">
            <Bell className="w-5 h-5" />
            <span className="absolute top-2 right-2 w-1.5 h-1.5 bg-fuchsia-500 rounded-full" />
          </button>
          <div className="h-4 w-[1px] bg-white/10" />
          <button className="text-[10px] font-bold text-gray-500 hover:text-red-400 transition-colors">
            ÇIKIŞ
          </button>
        </div>
      </div>
    </motion.div>
  );
};
