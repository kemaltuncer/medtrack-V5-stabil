"use client";
import React, { useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { GraduationCap, Target, Clock, BookOpen, Brain, Activity, ChevronRight, Flame, MapPin, Search, Settings, X, Layers, Gamepad2, CheckCircle2, Map, Users } from "lucide-react";

const USER_PROFILE = { name: "Kemal", university: "Hacettepe Tıp", year: "Dönem 4", currentPhase: "Nefroloji Stajı" };

const ALL_MODULES = [
  { id: "osce", title: "OSCE Simülatörü", desc: "Pratik sınav senaryoları.", icon: <Target size={24} />, color: "rose", phase: "Klinik" },
  { id: "notes", title: "Staj İncileri", desc: "Vizit kurtaran notlar.", icon: <BookOpen size={24} />, color: "emerald", phase: "Klinik" },
  { id: "tus-pomodoro", title: "TUS Pomodoro", desc: "Deneme analizleri.", icon: <Brain size={24} />, color: "purple", phase: "TUSiyer" },
  { id: "shifts", title: "Nöbet Çizelgesi", desc: "Acil rotasyonu.", icon: <Clock size={24} />, color: "blue", phase: "İntörn" },
  { id: "flashcards", title: "Flashcard", desc: "Aralıklı tekrar algoritması.", icon: <Layers size={24} />, color: "amber", phase: "Ortak" },
  { id: "rpg", title: "AI Vaka RPG", desc: "İnteraktif hasta simülasyonu.", icon: <Gamepad2 size={24} />, color: "cyan", phase: "Klinik" }
];

export default function AcademyDashboard() {
  const [searchQuery, setSearchQuery] = useState("");
  const [isSettingsOpen, setIsSettingsOpen] = useState(false);
  const [enabledModules, setEnabledModules] = useState<string[]>(ALL_MODULES.map(m => m.id));

  const toggleModule = (id: string) => setEnabledModules(prev => prev.includes(id) ? prev.filter(m => m !== id) : [...prev, id]);
  const activeModules = ALL_MODULES.filter(m => enabledModules.includes(m.id) && m.title.toLowerCase().includes(searchQuery.toLowerCase()));

  return (
    <main className="flex min-h-screen bg-[#020408] text-white overflow-hidden font-sans">
      <section className="flex-1 p-8 md:p-14 overflow-y-auto custom-scrollbar">
        <div className="max-w-7xl mx-auto space-y-12">
          
          <header className="flex justify-between items-end">
            <div>
              <div className="flex items-center gap-3 mb-4 text-cyan-400 font-black text-[10px] uppercase tracking-widest">
                <GraduationCap size={14} /> {USER_PROFILE.year} • <MapPin size={12}/> {USER_PROFILE.university}
              </div>
              <h1 className="text-6xl font-black mb-2">Kontrol Merkezi.</h1>
              <p className="text-slate-400 font-bold">Mevcut rotasyon: <span className="text-white">{USER_PROFILE.currentPhase}</span>.</p>
            </div>
            <div className="flex gap-4">
               <input type="text" placeholder="Modül ara..." value={searchQuery} onChange={(e) => setSearchQuery(e.target.value)} className="bg-white/5 border border-white/10 rounded-2xl px-6 py-4 outline-none w-64" />
               <button onClick={() => setIsSettingsOpen(true)} className="w-14 h-14 bg-white/5 rounded-2xl flex items-center justify-center hover:bg-white/10"><Settings/></button>
            </div>
          </header>

          <div className="grid grid-cols-1 md:grid-cols-3 xl:grid-cols-4 gap-6">
            <AnimatePresence>
              {activeModules.map((mod) => (
                <motion.div layout key={mod.id} initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0, scale: 0.9 }}>
                  <div className={`p-8 rounded-[2.5rem] bg-white/[0.02] border border-white/5 hover:border-${mod.color}-500/30 transition-all flex flex-col h-full`}>
                    <div className={`w-14 h-14 rounded-2xl bg-white/5 flex items-center justify-center text-${mod.color}-400 mb-6`}>{mod.icon}</div>
                    <h4 className="text-xl font-black mb-3">{mod.title}</h4>
                    <p className="text-xs text-slate-500 mb-8">{mod.desc}</p>
                    <div className="mt-auto pt-4 border-t border-white/5 flex justify-between"><span className="text-[10px] font-black uppercase">Başlat</span><ChevronRight size={16}/></div>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </div>
        </div>
      </section>

      <AnimatePresence>
        {isSettingsOpen && (
          <motion.div initial={{ x: "100%" }} animate={{ x: 0 }} exit={{ x: "100%" }} className="absolute right-0 top-0 bottom-0 w-96 bg-[#0a0d14] border-l border-white/10 z-50 p-8 flex flex-col shadow-2xl">
            <div className="flex justify-between items-center mb-10">
              <h3 className="text-2xl font-black text-white">Çalışma Alanı</h3>
              <button onClick={() => setIsSettingsOpen(false)} className="text-slate-400 hover:text-white"><X/></button>
            </div>
            <div className="flex-1 space-y-4">
              {ALL_MODULES.map((mod) => (
                <div key={mod.id} className="flex items-center justify-between p-4 rounded-2xl bg-white/5 border border-white/5">
                  <span className="text-sm font-black">{mod.title}</span>
                  <button onClick={() => toggleModule(mod.id)} className={`w-12 h-6 rounded-full relative flex items-center ${enabledModules.includes(mod.id) ? "bg-cyan-500" : "bg-white/10"}`}>
                     <motion.div layout className="w-4 h-4 rounded-full bg-white absolute" animate={{ left: enabledModules.includes(mod.id) ? "calc(100% - 1.25rem)" : "0.25rem" }} />
                  </button>
                </div>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </main>
  );
}
