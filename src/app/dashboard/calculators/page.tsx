"use client";

import React, { useState, useMemo } from "react";
import Link from "next/link";
import { CALCULATORS } from "@/data/calculators";
import { 
  Search, Heart, Droplets, Activity, Brain, Baby, 
  Stethoscope, Zap, Layers, Filter, Star, ChevronRight, 
  Sparkles, Microscope, Dna, Waves, Activity as PulseIcon
} from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const CATEGORIES: any = {
  "Hepsi": { icon: <Layers size={22} />, color: "text-blue-400", glow: "shadow-blue-500/20" },
  "Kardiyoloji": { icon: <Heart size={22} />, color: "text-rose-400", glow: "shadow-rose-500/20" },
  "Nefroloji": { icon: <Droplets size={22} />, color: "text-cyan-400", glow: "shadow-cyan-500/20" },
  "Acil": { icon: <Zap size={22} />, color: "text-amber-400", glow: "shadow-amber-500/20" },
  "Gastro": { icon: <Stethoscope size={22} />, color: "text-emerald-400", glow: "shadow-emerald-500/20" },
  "Pediatri": { icon: <Baby size={22} />, color: "text-purple-400", glow: "shadow-purple-500/20" },
  "Nöroloji": { icon: <Brain size={22} />, color: "text-violet-400", glow: "shadow-violet-500/20" },
  "Genel": { icon: <Microscope size={22} />, color: "text-slate-400", glow: "shadow-slate-500/20" },
};

export default function CalculatorsHub() {
  const [globalSearch, setGlobalSearch] = useState("");
  const [activeCategory, setActiveCategory] = useState("Hepsi");

  const filteredCalculators = useMemo(() => {
    return Object.entries(CALCULATORS)
      .filter(([_, data]: any) => {
        const matchesGlobal = data.title.toLowerCase().includes(globalSearch.toLowerCase());
        const itemCategory = data.category || "Genel"; 
        return matchesGlobal && (activeCategory === "Hepsi" || itemCategory === activeCategory);
      })
      .sort((a: any, b: any) => a[1].title.localeCompare(b[1].title));
  }, [globalSearch, activeCategory]);

  return (
    <main className="relative flex min-h-screen bg-[#050810] overflow-hidden text-white font-sans">
      
      {/* --- HIGH-CONTRAST DYNAMIC BACKGROUND --- */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        <div className="absolute top-[-10%] left-[-10%] w-[60%] h-[60%] rounded-full bg-blue-600/20 blur-[140px] animate-pulse" />
        <div className="absolute bottom-[-10%] right-[-10%] w-[50%] h-[50%] rounded-full bg-purple-600/20 blur-[120px]" />
        
        {/* Medical Grid Pattern */}
        <div className="absolute inset-0 opacity-[0.15] pointer-events-none bg-[radial-gradient(#1e293b_1px,transparent_1px)] [background-size:32px_32px]" />
      </div>

      {/* --- SIDEBAR (Sleek & Sharp) --- */}
      <aside className="relative z-10 w-72 bg-black/40 backdrop-blur-3xl border-r border-white/10 p-8 hidden xl:flex flex-col gap-10 sticky top-0 h-screen">
        <div className="flex items-center gap-4 group">
          <div className="w-12 h-12 bg-blue-600 rounded-2xl flex items-center justify-center text-white shadow-[0_0_40px_rgba(37,99,235,0.4)] group-hover:scale-110 transition-transform">
            <PulseIcon size={24} className="animate-pulse" />
          </div>
          <div>
            <h2 className="text-2xl font-black tracking-tight leading-none">MEDITRACK</h2>
            <p className="text-[10px] font-black text-blue-500 tracking-[0.3em] uppercase mt-1">Intelligence</p>
          </div>
        </div>

        <nav className="space-y-3 overflow-y-auto pr-2 custom-scrollbar">
          {Object.keys(CATEGORIES).map((cat) => (
            <button 
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`w-full group flex items-center gap-4 p-4 rounded-2xl font-black transition-all duration-300 ${
                activeCategory === cat 
                ? "bg-white/10 text-white shadow-[inset_0_1px_1px_rgba(255,255,255,0.2)] border border-white/10" 
                : "text-slate-500 hover:text-slate-200"
              }`}
            >
              <div className={`transition-colors ${activeCategory === cat ? CATEGORIES[cat].color : "text-slate-600 group-hover:text-slate-300"}`}>
                {CATEGORIES[cat].icon}
              </div>
              <span className="text-sm tracking-wide">{cat}</span>
            </button>
          ))}
        </nav>
      </aside>

      {/* --- MAIN AREA (Vibrant Grid) --- */}
      <section className="relative z-10 flex-1 p-8 md:p-16 overflow-y-auto h-screen">
        <div className="max-w-6xl mx-auto">
          
          <header className="mb-20 space-y-8">
            <motion.div initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }}>
              <div className="flex items-center gap-3 mb-4">
                <Sparkles className="text-blue-500" size={18} />
                <span className="text-xs font-black text-blue-500 uppercase tracking-[0.5em]">Klinik Terminal V5</span>
              </div>
              <h1 className="text-7xl font-black tracking-tighter leading-[0.9]">
                Kritik <br /> 
                <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-400 via-indigo-400 to-purple-400">Analizler.</span>
              </h1>
            </motion.div>
            
            <div className="relative max-w-xl">
              <Search className="absolute left-6 top-1/2 -translate-y-1/2 text-blue-500" size={20} />
              <input 
                type="text" 
                placeholder="Hesaplama veya hastalık ara..." 
                value={globalSearch}
                onChange={(e) => setGlobalSearch(e.target.value)}
                className="w-full pl-16 pr-8 py-6 bg-white/[0.05] border border-white/10 rounded-[2rem] text-lg font-bold focus:bg-white/[0.08] focus:border-blue-500/50 outline-none transition-all placeholder:text-slate-600 shadow-2xl"
              />
            </div>
          </header>

          {/* GRID: Okunaklı ve Gösterişli Kartlar */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <AnimatePresence mode="popLayout">
              {filteredCalculators.map(([id, calc]: any) => {
                const catInfo = CATEGORIES[calc.category] || CATEGORIES["Genel"];
                return (
                  <motion.div
                    layout
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    whileHover={{ y: -8 }}
                    key={id}
                  >
                    <Link href={`/dashboard/calc/${id}`}>
                      <div className="group relative bg-[#0D121F] border border-white/5 p-10 rounded-[3rem] hover:border-white/20 transition-all duration-500 h-full flex flex-col shadow-2xl overflow-hidden">
                        
                        {/* Decorative Clipart / Glow */}
                        <div className="absolute -right-4 -top-4 w-24 h-24 bg-blue-500/10 blur-3xl group-hover:bg-blue-500/20 transition-colors" />

                        <div className="flex justify-between items-center mb-10">
                          <div className={`w-14 h-14 rounded-2xl flex items-center justify-center bg-white/[0.03] ${catInfo.color} border border-white/10 shadow-lg group-hover:scale-110 group-hover:rotate-6 transition-all duration-500`}>
                            {catInfo.icon}
                          </div>
                          <div className="px-3 py-1 bg-white/5 rounded-full text-[10px] font-black tracking-widest text-slate-500 group-hover:text-blue-400 transition-colors">
                            {calc.unit}
                          </div>
                        </div>
                        
                        <div className="relative z-10">
                          <h3 className="text-3xl font-black text-white mb-4 tracking-tight leading-tight group-hover:text-blue-400 transition-colors">
                            {calc.title}
                          </h3>
                          <p className="text-base font-medium text-slate-300 leading-relaxed opacity-90 group-hover:opacity-100 transition-opacity">
                            {calc.desc}
                          </p>
                        </div>

                        <div className="mt-auto pt-8 flex items-center justify-between">
                          <div className="flex items-center gap-2">
                            <div className="w-1.5 h-1.5 rounded-full bg-blue-500 animate-pulse" />
                            <span className="text-[10px] font-black text-slate-500 uppercase tracking-tighter">MODÜL AKTİF</span>
                          </div>
                          <div className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center group-hover:bg-blue-600 group-hover:text-white transition-all duration-500">
                            <ChevronRight size={20} />
                          </div>
                        </div>
                      </div>
                    </Link>
                  </motion.div>
                );
              })}
            </AnimatePresence>
          </div>
        </div>
      </section>
    </main>
  );
}
