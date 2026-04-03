"use client";
import React, { useState, useEffect } from 'react';
import { Home, Target, Sparkles, CheckSquare, BookOpen, Calendar, Zap, Music, Crown, Clock } from 'lucide-react';
import Link from 'next/link';

export default function PremiumPreKlinik() {
  const [time, setTime] = useState(new Date());
  useEffect(() => { const t = setInterval(() => setTime(new Date()), 1000); return () => clearInterval(t); }, []);

  return (
    <div className="h-full w-full bg-[#050505] text-zinc-100 flex font-sans relative">
      {/* Premium Dekorasyon */}
      <div className="absolute top-0 left-0 w-full h-[2px] bg-gradient-to-r from-blue-600 via-indigo-400 to-transparent opacity-50" />
      
      <aside className="w-20 md:w-24 h-full border-r border-white/5 bg-[#08080a] flex flex-col items-center py-8 gap-8 shadow-2xl relative z-10">
        <div className="w-12 h-12 bg-gradient-to-br from-blue-600 to-indigo-600 rounded-2xl flex items-center justify-center shadow-lg shadow-blue-500/20"><Zap className="text-white w-6 h-6" /></div>
        <nav className="flex-1 flex flex-col gap-4">
          <Link href="/hub" className="w-12 h-12 rounded-xl flex items-center justify-center bg-zinc-800 text-white shadow-xl"><Home className="w-5 h-5" /></Link>
          <Link href="/terminal" className="w-12 h-12 rounded-xl flex items-center justify-center text-zinc-500 hover:text-white transition-all hover:bg-blue-600/10"><Target className="w-5 h-5" /></Link>
        </nav>
      </aside>

      <main className="flex-1 p-6 grid grid-cols-4 grid-rows-3 gap-6 relative overflow-hidden">
        {/* Arka plan AI Aura */}
        <div className="absolute top-[-20%] left-[-10%] w-[50%] h-[50%] bg-blue-600/5 blur-[120px] rounded-full pointer-events-none" />

        <div className="col-span-2 row-span-2 bg-zinc-900/40 border border-blue-500/20 backdrop-blur-3xl rounded-[3rem] p-10 relative overflow-hidden shadow-2xl shadow-blue-900/10">
           <div className="flex items-center gap-2 mb-8">
             <Sparkles className="w-4 h-4 text-blue-400 animate-pulse" />
             <h3 className="text-[11px] font-black uppercase tracking-[0.3em] text-blue-400">AI Dinamik Akış (Dönem 1-3)</h3>
           </div>
           <div className="space-y-6">
             <div className="bg-blue-600/5 border border-blue-500/20 p-5 rounded-2xl">
               <div className="flex justify-between items-center mb-1"><h4 className="text-xs font-bold text-white uppercase italic">Kardiyoloji Etüdü (AI Önerisi)</h4><span className="text-[10px] text-blue-400 font-black">11:30</span></div>
               <p className="text-[10px] text-zinc-500 uppercase font-black">Anatomi laboratuvarı öncesi 45dk odaklanma</p>
             </div>
           </div>
        </div>

        <div className="col-span-1 row-span-2 bg-zinc-900/40 border border-white/5 rounded-[3rem] p-10">
           <h3 className="text-[10px] font-black uppercase tracking-widest text-zinc-500 mb-8">Akıllı Slaytlar</h3>
           <div className="space-y-4">
              <div className="flex items-center gap-4 p-4 bg-zinc-800/30 rounded-2xl border border-white/5"><div className="w-4 h-4 rounded bg-blue-500 shadow-[0_0_10px_#2563eb]" /><span className="text-xs font-bold">Nöroanatomi Slaytı</span></div>
           </div>
        </div>

        <div className="col-span-1 row-span-2 bg-zinc-900/40 border border-red-500/20 rounded-[3rem] p-10 flex flex-col text-center">
           <h3 className="text-[10px] font-black uppercase tracking-widest text-red-500/50 mb-10">Sınav Radarı</h3>
           <div className="flex-1 flex flex-col justify-center items-center">
             <div className="text-7xl font-black italic text-white tracking-tighter">14</div>
             <div className="text-xs font-black text-red-500 uppercase mt-2 tracking-widest">GÜN KALDI</div>
           </div>
        </div>

        <div className="bg-zinc-900/40 border border-white/5 rounded-[3rem] flex flex-col justify-center items-center">
           <Clock className="w-5 h-5 text-zinc-600 mb-2" />
           <h2 className="text-3xl font-black tabular-nums">{time.toLocaleTimeString('tr-TR', {hour:'2-digit',minute:'2-digit'})}</h2>
        </div>
        <div className="bg-[#1e1e1a] border border-amber-500/20 rounded-[3rem] p-8 flex flex-col justify-center"><p className="text-[10px] font-black text-amber-500/70 mb-2 uppercase tracking-widest">Not</p><p className="text-xs font-medium text-amber-100/60 leading-relaxed italic">Biyokimya notlarını getir.</p></div>
        <div className="bg-zinc-900/40 border border-[#1DB954]/20 rounded-[3rem] flex items-center justify-center"><Music className="text-[#1DB954] w-10 h-10 animate-pulse"/></div>
        <div className="bg-gradient-to-br from-blue-600 to-indigo-600 rounded-[3rem] p-8 flex flex-col justify-between shadow-xl shadow-blue-600/20">
           <Crown className="w-8 h-8 text-white opacity-50" />
           <p className="text-[10px] font-black text-white uppercase italic tracking-tighter">ULTRA PLAN AKTİF</p>
        </div>
      </main>
    </div>
  );
}
