"use client";

import React, { useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { 
  GraduationCap, Target, Clock, BookOpen, 
  Brain, Activity, ChevronRight, Flame, 
  MapPin, Search, Settings, X, Layers, 
  Gamepad2, CheckCircle2, Map, Users
} from "lucide-react";

// Kullanıcı Profili
const USER_PROFILE = {
  name: "Kemal",
  university: "Hacettepe Üniversitesi Tıp Fakültesi",
  year: "Dönem 4",
  currentPhase: "Nefroloji Stajı",
  goal: "TUS Derecesi",
};

// DEV MODÜL KÜTÜPHANESİ
const ALL_MODULES = [
  { id: "osce", title: "OSCE Simülatörü", desc: "İstasyon checklistleri ve pratik sınav senaryoları.", icon: <Target size={24} />, color: "rose", phase: "Klinik" },
  { id: "notes", title: "Staj & Vizit İncileri", desc: "Hızlı hastalık özetleri ve vizit kurtaran notlar.", icon: <BookOpen size={24} />, color: "emerald", phase: "Klinik" },
  { id: "tus-pomodoro", title: "TUS Pomodoro", desc: "Kronometre, net grafikleri ve deneme analizleri.", icon: <Brain size={24} />, color: "purple", phase: "TUSiyer" },
  { id: "shifts", title: "Nöbet & Servis", desc: "Acil rotasyonu çizelgesi ve order rehberi.", icon: <Clock size={24} />, color: "blue", phase: "İntörn" },
  { id: "flashcards", title: "Akıllı Flashcard", desc: "Aralıklı tekrar algoritmasıyla (SRS) kalıcı hafıza.", icon: <Layers size={24} />, color: "amber", phase: "Ortak" },
  { id: "rpg", title: "AI Vaka RPG", desc: "İnteraktif klinik karar ve hasta simülasyonu.", icon: <Gamepad2 size={24} />, color: "cyan", phase: "Klinik" },
  { id: "logbook", title: "Girişim Karnesi", desc: "Kan alma, sütür, entübasyon hedef takibi.", icon: <CheckCircle2 size={24} />, color: "teal", phase: "İntörn" },
  { id: "heatmap", title: "Isı Haritası", desc: "Deneme sınavı ve branş bazlı zayıflık analizi.", icon: <Map size={24} />, color: "orange", phase: "TUSiyer" },
  { id: "forum", title: "Klinik Pazar & Ağ", desc: "Üniversite içi yardımlaşma ve kitap/nöbet takası.", icon: <Users size={24} />, color: "indigo", phase: "Ortak" },
];

export default function AcademyDashboard() {
  const [searchQuery, setSearchQuery] = useState("");
  const [isSettingsOpen, setIsSettingsOpen] = useState(false);
  
  // Özelleştirilebilir Modül Altyapısı (Varsayılan olarak hepsi açık)
  const [enabledModules, setEnabledModules] = useState<string[]>(ALL_MODULES.map(m => m.id));

  const toggleModule = (id: string) => {
    setEnabledModules(prev => 
      prev.includes(id) ? prev.filter(m => m !== id) : [...prev, id]
    );
  };

  const activeModules = ALL_MODULES.filter(m => 
    enabledModules.includes(m.id) && m.title.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <main className="relative flex min-h-screen bg-[#020408] text-white overflow-hidden font-sans">
      
      {/* BIO-NEON ARKAPLAN */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <div className="absolute top-[-10%] right-[-10%] w-[60%] h-[60%] rounded-full bg-cyan-600/10 blur-[160px]" />
        <div className="absolute bottom-[-10%] left-[-10%] w-[50%] h-[50%] rounded-full bg-blue-600/10 blur-[150px]" />
        <div className="absolute inset-0 opacity-[0.03] bg-[radial-gradient(#ffffff_1px,transparent_1px)] [background-size:30px_30px]" />
      </div>

      <section className="relative z-10 flex-1 p-8 md:p-14 overflow-y-auto h-screen custom-scrollbar">
        <div className="max-w-7xl mx-auto space-y-12">
          
          {/* ÜST PROFİL & ARAMA */}
          <header className="flex flex-col lg:flex-row justify-between items-start lg:items-end gap-6">
            <motion.div initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }}>
              <div className="flex items-center gap-3 mb-4">
                <div className="px-3 py-1 bg-cyan-500/10 border border-cyan-500/20 rounded-full flex items-center gap-2">
                  <GraduationCap size={14} className="text-cyan-400" />
                  <span className="text-[10px] font-black text-cyan-400 uppercase tracking-widest">{USER_PROFILE.year}</span>
                </div>
                <div className="flex items-center gap-1 text-[10px] font-black text-slate-500 uppercase tracking-widest">
                  <MapPin size={12} /> {USER_PROFILE.university.split(" ")[0]}
                </div>
              </div>
              <h1 className="text-6xl font-black tracking-tighter mb-2">
                Kontrol <span className="bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 to-blue-500">Merkezi.</span>
              </h1>
              <p className="text-slate-400 font-bold tracking-wide">
                Mevcut rotasyon: <span className="text-white">{USER_PROFILE.currentPhase}</span>.
              </p>
            </motion.div>

            {/* Arama ve Ayarlar Paneli */}
            <div className="flex items-center gap-4 w-full lg:w-auto">
              <div className="relative w-full lg:w-80 group">
                <Search className="absolute left-5 top-1/2 -translate-y-1/2 text-slate-500 group-focus-within:text-cyan-400 transition-colors" size={18} />
                <input 
                  type="text" 
                  placeholder="Modül veya özellik ara..." 
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full bg-white/[0.03] border border-white/10 rounded-2xl pl-14 pr-4 py-4 text-sm font-bold text-white outline-none focus:border-cyan-500/50 transition-all shadow-xl"
                />
              </div>
              <button 
                onClick={() => setIsSettingsOpen(true)}
                className="w-14 h-14 shrink-0 bg-white/[0.03] border border-white/10 rounded-2xl flex items-center justify-center text-slate-400 hover:text-white hover:bg-white/10 transition-all shadow-xl"
              >
                <Settings size={22} className="hover:rotate-90 transition-transform duration-500" />
              </button>
            </div>
          </header>

          {/* DİNAMİK WIDGET (Sıradaki Görev) */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }}
            className="p-10 rounded-[3rem] bg-gradient-to-br from-cyan-900/20 to-black/50 border border-cyan-500/20 flex flex-col md:flex-row justify-between items-center gap-10 shadow-2xl relative overflow-hidden"
          >
            <Activity className="absolute -right-10 -bottom-10 opacity-5 text-cyan-400" size={250} />
            <div className="relative z-10">
              <div className="flex items-center gap-2 mb-4 text-amber-400">
                <Flame size={18} />
                <span className="text-[10px] font-black uppercase tracking-widest">Aktif Rotasyon Görevi</span>
              </div>
              <h2 className="text-4xl font-black mb-2">Nefrotik Sendrom Vaka RPG</h2>
              <p className="text-slate-400 font-bold text-sm">Pratik yapman için bekleyen 1 interaktif AI vaka simülasyonu var.</p>
            </div>
          </motion.div>

          {/* DİNAMİK MODÜLLER GRİDİ */}
          <div>
            <div className="flex items-center justify-between mb-8">
              <h3 className="text-sm font-black text-slate-400 uppercase tracking-[0.3em] flex items-center gap-3">
                <Layers size={16} /> Aktif Modüller ({activeModules.length})
              </h3>
            </div>
            
            <motion.div layout className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              <AnimatePresence mode="popLayout">
                {activeModules.map((mod, i) => (
                  <motion.div 
                    layout
                    initial={{ opacity: 0, scale: 0.9 }} 
                    animate={{ opacity: 1, scale: 1 }} 
                    exit={{ opacity: 0, scale: 0.9 }}
                    transition={{ duration: 0.3 }}
                    key={mod.id}
                  >
                    <Link href={`/dashboard/academy/${mod.id}`}>
                      <div className={`group h-full p-8 rounded-[2.5rem] bg-white/[0.02] border border-white/5 hover:bg-white/[0.04] hover:border-${mod.color}-500/30 transition-all duration-500 flex flex-col relative overflow-hidden shadow-xl`}>
                        
                        <div className={`absolute -right-4 -top-4 w-24 h-24 bg-${mod.color}-500/10 blur-[40px] group-hover:bg-${mod.color}-500/20 transition-colors`} />

                        <div className="flex justify-between items-start mb-6 relative z-10">
                          <div className={`w-14 h-14 rounded-2xl bg-white/5 flex items-center justify-center text-${mod.color}-400 border border-white/10 group-hover:scale-110 transition-transform`}>
                            {mod.icon}
                          </div>
                          <span className={`px-2 py-1 rounded bg-${mod.color}-500/10 text-${mod.color}-400 text-[9px] font-black uppercase tracking-widest border border-${mod.color}-500/20`}>
                            {mod.phase}
                          </span>
                        </div>
                        
                        <h4 className="text-xl font-black text-white mb-3 relative z-10">{mod.title}</h4>
                        <p className="text-xs font-bold text-slate-500 leading-relaxed mb-8 relative z-10">{mod.desc}</p>
                        
                        <div className="mt-auto pt-4 border-t border-white/5 flex items-center justify-between relative z-10">
                          <span className="text-[10px] font-black text-slate-600 uppercase tracking-widest group-hover:text-white transition-colors">Başlat</span>
                          <ChevronRight size={16} className={`text-slate-600 group-hover:text-${mod.color}-400 transition-colors`} />
                        </div>
                      </div>
                    </Link>
                  </motion.div>
                ))}
              </AnimatePresence>
            </motion.div>
          </div>
        </div>
      </section>

      {/* MODÜL YÖNETİM PANELİ (Settings Modal) */}
      <AnimatePresence>
        {isSettingsOpen && (
          <>
            <motion.div 
              initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
              onClick={() => setIsSettingsOpen(false)}
              className="absolute inset-0 bg-black/60 backdrop-blur-sm z-40"
            />
            <motion.div 
              initial={{ x: "100%" }} animate={{ x: 0 }} exit={{ x: "100%" }}
              transition={{ type: "spring", damping: 25, stiffness: 200 }}
              className="absolute top-0 right-0 bottom-0 w-full md:w-96 bg-[#0a0d14] border-l border-white/10 z-50 p-8 flex flex-col shadow-2xl"
            >
              <div className="flex justify-between items-center mb-10">
                <div>
                  <h3 className="text-2xl font-black text-white">Çalışma Alanı</h3>
                  <p className="text-[10px] font-black text-cyan-500 uppercase tracking-widest mt-1">Görünümü Özelleştir</p>
                </div>
                <button onClick={() => setIsSettingsOpen(false)} className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-slate-400 hover:text-white transition-colors">
                  <X size={18} />
                </button>
              </div>

              <div className="flex-1 overflow-y-auto custom-scrollbar pr-2 space-y-4">
                {ALL_MODULES.map((mod) => (
                  <div key={mod.id} className="flex items-center justify-between p-4 rounded-2xl bg-white/[0.02] border border-white/5">
                    <div className="flex items-center gap-4">
                      <div className={`w-10 h-10 rounded-xl bg-${mod.color}-500/10 flex items-center justify-center text-${mod.color}-400`}>
                        {mod.icon}
                      </div>
                      <div>
                        <h4 className="text-sm font-black text-white">{mod.title}</h4>
                        <p className="text-[9px] font-black text-slate-500 uppercase tracking-wider">{mod.phase}</p>
                      </div>
                    </div>
                    {/* Toggle Button */}
                    <button 
                      onClick={() => toggleModule(mod.id)}
                      className={`w-12 h-6 rounded-full transition-colors relative flex items-center ${enabledModules.includes(mod.id) ? "bg-cyan-500" : "bg-white/10"}`}
                    >
                      <motion.div 
                        layout
                        className="w-4 h-4 rounded-full bg-white absolute"
                        initial={false}
                        animate={{ left: enabledModules.includes(mod.id) ? "calc(100% - 1.25rem)" : "0.25rem" }}
                      />
                    </button>
                  </div>
                ))}
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>

    </main>
  );
}
