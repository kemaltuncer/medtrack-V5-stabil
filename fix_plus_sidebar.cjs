const fs = require('fs');
const path = require('path');
const p = path.join(process.cwd(), 'src/components/hub/PlusPreKlinik.tsx');

const content = `"use client";
import React from 'react';
import Sidebar from './Sidebar';
import { Sparkles, Brain, Activity, Zap, Headphones, ArrowRight } from 'lucide-react';

export default function PlusPreKlinik() {
  return (
    <div className="h-full w-full bg-[#0a0c10] text-blue-50 flex font-sans relative overflow-hidden text-left">
      {/* Arka Plan Glow Efekti */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-blue-600/10 blur-[120px] rounded-full -mr-40 -mt-40 pointer-events-none" />
      
      {/* Ortak Sidebar Enjeksiyonu */}
      <Sidebar activePlan="plus" />

      <main className="flex-1 p-10 grid grid-cols-12 grid-rows-6 gap-6 relative z-10 overflow-y-auto custom-scrollbar">
        {/* Ana AI Program Kutusu */}
        <div className="col-span-8 row-span-4 bg-white/[0.03] border border-white/10 backdrop-blur-md rounded-[2.5rem] p-10 shadow-2xl">
          <div className="flex items-center gap-3 mb-8">
            <div className="p-2 bg-blue-500/20 rounded-lg"><Brain className="w-4 h-4 text-blue-400" /></div>
            <h3 className="text-[10px] font-black uppercase tracking-[0.3em] text-blue-300 italic text-left">AI_GÜDÜMLÜ_ZAMAN_ÇİZELGESİ</h3>
          </div>
          <div className="space-y-6">
            <div className="p-6 bg-white/[0.02] border border-white/5 rounded-3xl group hover:bg-white/[0.05] transition-all cursor-pointer">
              <div className="flex justify-between items-center"><h4 className="text-sm font-bold tracking-tight text-white group-hover:text-blue-300">Fizyoloji: Aksiyon Potansiyeli</h4><span className="text-xs font-black text-blue-500">14:00</span></div>
              <p className="text-[10px] text-zinc-500 mt-2 font-bold uppercase tracking-widest leading-relaxed">Önceki sınavlarda bu konudan %85 başarı sağladın. Hızlı bir tekrar yeterli.</p>
            </div>
          </div>
        </div>

        {/* Günlük Hedef Kartı */}
        <div className="col-span-4 row-span-3 bg-gradient-to-br from-indigo-600/20 to-blue-600/10 border border-white/10 rounded-[2.5rem] p-8 flex flex-col justify-between">
           <div className="w-12 h-12 bg-white/10 rounded-2xl flex items-center justify-center shadow-inner"><Zap className="text-blue-400 w-6 h-6" /></div>
           <div><p className="text-[10px] font-black uppercase text-blue-300 mb-2 tracking-widest text-left">GÜNLÜK HEDEF</p><h4 className="text-2xl font-black italic tracking-tighter">150 SPOT BİLGİ</h4></div>
        </div>

        {/* Sınav Sayacı */}
        <div className="col-span-4 row-span-3 bg-white/[0.03] border border-white/10 rounded-[2.5rem] p-8 flex flex-col justify-center items-center text-center">
           <div className="text-6xl font-black italic text-white tracking-tighter mb-2">14</div>
           <p className="text-[9px] font-black text-blue-500 uppercase tracking-[0.4em]">GÜN / KOMİTE</p>
        </div>

        {/* Alt Bilgi Barı */}
        <div className="col-span-12 row-span-1 bg-blue-600 rounded-[2rem] px-8 flex items-center justify-between shadow-xl shadow-blue-600/20">
           <div className="flex items-center gap-4 text-[10px] font-black uppercase tracking-widest italic text-white"><Headphones className="w-5 h-5"/> ODAK MODU AKTİF: DEEP WORK LOFI</div>
           <ArrowRight className="w-5 h-5 text-white/50" />
        </div>
      </main>
    </div>
  );
}
\`;

fs.writeFileSync(p, content);
console.log('✅ AI Plus: Ortak Sidebar başarıyla nakledildi! 🧬💎');
