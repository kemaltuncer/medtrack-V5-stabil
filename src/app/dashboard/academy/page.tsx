"use client";
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { GraduationCap, Target, Clock, BookOpen, Brain, Activity, ChevronRight, Settings, X, Layers, Gamepad2, MapPin } from "lucide-react";

const ALL_MODULES = [
  { id: "osce", title: "OSCE Simülatörü", icon: <Target size={24} />, color: "rose" },
  { id: "notes", title: "Staj İncileri", icon: <BookOpen size={24} />, color: "emerald" },
  { id: "tus", title: "TUS Pomodoro", icon: <Brain size={24} />, color: "purple" },
  { id: "rpg", title: "AI Vaka RPG", icon: <Gamepad2 size={24} />, color: "cyan" }
];

export default function AcademyDashboard() {
  const [isSettingsOpen, setIsSettingsOpen] = useState(false);
  const [enabledModules, setEnabledModules] = useState(ALL_MODULES.map(m => m.id));
  const toggleModule = (id: string) => setEnabledModules(prev => prev.includes(id) ? prev.filter(m => m !== id) : [...prev, id]);

  return (
    <main className="flex min-h-screen bg-[#020408] text-white font-sans overflow-hidden">
      <section className="flex-1 p-12 overflow-y-auto">
        <header className="flex justify-between items-end mb-12">
          <div>
            <div className="flex items-center gap-2 text-cyan-400 font-black text-[10px] uppercase mb-4 tracking-widest"><GraduationCap size={14}/> Dönem 4 • Hacettepe Tıp</div>
            <h1 className="text-6xl font-black tracking-tighter text-white">Akademi.</h1>
          </div>
          <button onClick={() => setIsSettingsOpen(true)} className="w-14 h-14 bg-white/5 rounded-2xl flex items-center justify-center hover:bg-white/10 transition-all"><Settings/></button>
        </header>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <AnimatePresence>
            {ALL_MODULES.filter(m => enabledModules.includes(m.id)).map((mod) => (
              <motion.div layout key={mod.id} initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0, scale: 0.9 }} className={`p-8 rounded-[2.5rem] bg-white/[0.02] border border-white/5 hover:border-${mod.color}-500/30 transition-all cursor-pointer group`}>
                <div className={`w-14 h-14 rounded-2xl bg-white/5 flex items-center justify-center text-${mod.color}-400 mb-6 group-hover:scale-110 transition-transform`}>{mod.icon}</div>
                <h4 className="text-xl font-black mb-2">{mod.title}</h4>
                <div className="mt-8 pt-4 border-t border-white/5 flex justify-between items-center"><span className="text-[10px] font-black uppercase text-slate-500">Giriş Yap</span><ChevronRight size={16}/></div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>
      </section>
      <AnimatePresence>
        {isSettingsOpen && (
          <motion.div initial={{ x: "100%" }} animate={{ x: 0 }} exit={{ x: "100%" }} className="absolute right-0 top-0 bottom-0 w-80 bg-[#0a0d14] border-l border-white/10 z-50 p-8">
            <div className="flex justify-between items-center mb-10"><h3 className="text-xl font-black">Özelleştir</h3><button onClick={() => setIsSettingsOpen(false)}><X/></button></div>
            <div className="space-y-4">
              {ALL_MODULES.map(mod => (
                <div key={mod.id} className="flex items-center justify-between p-4 rounded-2xl bg-white/5">
                  <span className="text-xs font-black">{mod.title}</span>
                  <button onClick={() => toggleModule(mod.id)} className={`w-10 h-5 rounded-full relative ${enabledModules.includes(mod.id) ? "bg-cyan-500" : "bg-white/10"}`}>
                    <motion.div layout className="w-3 h-3 bg-white rounded-full absolute" animate={{ left: enabledModules.includes(mod.id) ? "calc(100% - 0.85rem)" : "0.25rem" }} />
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
