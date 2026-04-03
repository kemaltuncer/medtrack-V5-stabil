"use client";
import React from 'react';
import Sidebar from './Sidebar';
import { Crown, ShieldCheck, Dna } from 'lucide-react';

export default function UltraPreKlinik() {
  return (
    <div className="h-full w-full bg-[#030303] text-white flex font-sans">
      <Sidebar activePlan="ultra" />
      <main className="flex-1 p-10 grid grid-cols-4 grid-rows-4 gap-6 overflow-y-auto">
        <div className="col-span-2 row-span-3 bg-zinc-900/30 border border-white/5 rounded-[3rem] p-10 relative overflow-hidden">
          <div className="absolute top-0 right-0 p-8 opacity-5"><Dna className="w-32 h-32 text-emerald-500" /></div>
          <h3 className="text-[10px] font-black uppercase tracking-[0.4em] text-emerald-500 mb-8 flex items-center gap-2"><ShieldCheck className="w-4 h-4"/> Ultra_Karar_Sistemi_v5</h3>
          <div className="p-6 bg-emerald-500/5 border border-emerald-500/10 rounded-2xl border-l-4 border-l-emerald-500 font-black italic tracking-tighter text-sm">KLİNİK_SENKRONİZASYON_AKTİF</div>
        </div>
        <div className="col-span-1 row-span-2 bg-zinc-900/30 border border-white/5 rounded-[3rem] p-10 flex items-center justify-center text-[10px] font-black uppercase tracking-widest text-zinc-700 italic">AI_Güdümlü_Slaytlar</div>
        <div className="col-span-1 row-span-2 bg-emerald-500 rounded-[3rem] p-10 flex flex-col justify-between text-black shadow-[0_0_40px_rgba(16,185,129,0.2)]">
           <Crown className="w-8 h-8 opacity-40" /><p className="text-2xl font-black italic uppercase leading-none">Ultra_OS<br/>Sistemi</p>
        </div>
        <div className="col-span-1 bg-zinc-900/30 border border-white/5 rounded-[3rem] p-8 flex items-center justify-center text-4xl font-black italic">14 GÜN</div>
      </main>
    </div>
  );
}
