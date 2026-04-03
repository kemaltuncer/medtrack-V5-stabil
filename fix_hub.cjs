const fs = require('fs');
const path = require('path');
const p = path.join(process.cwd(), 'src/app/hub/page.tsx');
const content = `"use client";
import React, { useState, useEffect } from 'react';
import { Home, Calendar, BookOpen, CheckSquare, Target, Settings, Zap, Clock, Play, RotateCcw, Pin, Music, Crown, Sparkles, CheckCircle2 } from 'lucide-react';
import Link from 'next/link';

export default function CentralHub() {
  const [time, setTime] = useState(new Date());
  useEffect(() => {
    const timer = setInterval(() => setTime(new Date()), 1000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="h-screen w-screen bg-[#09090b] text-zinc-100 flex overflow-hidden font-sans selection:bg-blue-500/30">
      <aside className="w-20 md:w-24 h-full border-r border-zinc-800/50 bg-[#0c0c0e] flex flex-col items-center py-6 gap-8 z-20 relative">
        <div className="w-12 h-12 bg-gradient-to-br from-blue-600 to-indigo-600 rounded-2xl flex items-center justify-center shadow-lg shadow-blue-900/20 cursor-pointer hover:scale-105 transition-transform"><Zap className="text-white w-6 h-6" /></div>
        <nav className="flex-1 w-full flex flex-col items-center gap-4">
          <NavItem icon={Home} active tooltip="Merkez Hub" href="/hub" />
          <NavItem icon={Target} tooltip="AI Terminal" href="/terminal" />
          <NavItem icon={Calendar} tooltip="Program & Sınavlar" href="#" />
          <NavItem icon={BookOpen} tooltip="Slaytlar" href="#" />
        </nav>
        <div className="flex flex-col gap-4 items-center">
          <NavItem icon={Settings} tooltip="Ayarlar" href="#" />
          <div className="w-12 h-12 rounded-full bg-zinc-800 border-2 border-zinc-700 flex items-center justify-center p-1"><img src="https://api.dicebear.com/7.x/avataaars/svg?seed=Kemal" className="w-full h-full rounded-full bg-zinc-900" /></div>
        </div>
      </aside>

      <main className="flex-1 h-full p-4 md:p-6 overflow-hidden relative">
        <div className="absolute top-[-20%] left-[-10%] w-[40%] h-[40%] bg-blue-900/10 blur-[120px] rounded-full pointer-events-none" />
        <div className="w-full h-full grid grid-cols-4 grid-rows-3 gap-4 relative z-10">
          
          {/* MODÜL 1: GÜNÜN PROGRAMI */}
          <div className="col-span-2 row-span-2 border border-zinc-800/50 bg-zinc-900/40 backdrop-blur-xl rounded-3xl p-6 flex flex-col relative overflow-hidden">
            <h3 className="text-xs font-black uppercase tracking-widest text-zinc-400 mb-6 flex items-center gap-2"><CheckSquare className="w-4 h-4"/> Günün Programı & AI Planı</h3>
            <div className="flex-1 overflow-y-auto pr-2">
              <div className="flex gap-4 items-start group mb-4">
                <div className="flex flex-col items-center mt-1"><div className="w-3 h-3 rounded-full bg-blue-500 shadow-[0_0_10px_#3b82f6]" /><div className="w-px h-12 bg-zinc-800 my-1" /></div>
                <div className="flex-1 bg-zinc-800/30 p-3 rounded-2xl border border-zinc-800/50 hover:bg-zinc-800/50 transition-colors">
                  <div className="flex justify-between items-center"><h4 className="text-xs font-bold">Kardiyoloji: EKG Temelleri</h4><span className="text-[10px] text-blue-400 font-black">09:00</span></div>
                </div>
              </div>
              <div className="flex gap-4 items-start group mb-4">
                <div className="flex flex-col items-center mt-1"><div className="w-5 h-5 rounded-full bg-indigo-500/10 border border-indigo-500/50 flex items-center justify-center"><Sparkles className="w-2.5 h-2.5 text-indigo-400" /></div><div className="w-px h-12 bg-zinc-800 my-1" /></div>
                <div className="flex-1 bg-indigo-900/10 p-3 rounded-2xl border border-indigo-500/20 hover:bg-indigo-900/20 transition-colors">
                   <div className="flex justify-between items-center"><h4 className="text-xs font-bold text-indigo-200">AI Odak: Aritmiler</h4><span className="text-[10px] text-indigo-400 font-black">11:30</span></div>
                </div>
              </div>
            </div>
          </div>

          {/* MODÜL 2: SLAYTLAR */}
          <div className="col-span-1 row-span-2 border border-zinc-800/50 bg-zinc-900/40 backdrop-blur-xl rounded-3xl p-6 flex flex-col">
            <h3 className="text-xs font-black uppercase tracking-widest text-zinc-400 mb-4">Aktif Slaytlar</h3>
            <div className="space-y-3">
               <div className="p-3 bg-zinc-800/20 rounded-xl border border-zinc-800/50 flex items-center gap-3"><CheckCircle2 className="w-4 h-4 text-emerald-500"/><span className="text-[11px] font-bold">EKG Fizyolojisi</span></div>
               <div className="p-3 bg-zinc-800/20 rounded-xl border border-zinc-800/50 flex items-center gap-3"><div className="w-4 h-4 border-2 border-zinc-700 rounded"/><span className="text-[11px] font-bold text-zinc-400">Kapak Hastalıkları</span></div>
            </div>
          </div>

          {/* MODÜL 3: SINAV SAYACI */}
          <div className="col-span-1 row-span-2 border border-zinc-800/50 bg-zinc-900/40 backdrop-blur-xl rounded-3xl p-6 flex flex-col">
            <h3 className="text-xs font-black uppercase tracking-widest text-red-400 mb-6">Sınav Radarı</h3>
            <div className="bg-red-950/20 border border-red-500/20 rounded-2xl p-4 text-center">
              <h4 className="text-[9px] font-black uppercase tracking-widest text-red-400 mb-2">Dahiliye Stajı</h4>
              <div className="text-3xl font-black text-white italic">14 <span className="text-xs font-bold text-red-500">GÜN</span></div>
            </div>
          </div>
          
          <div className="col-span-1 border border-zinc-800/50 bg-zinc-900/40 rounded-3xl p-5 flex flex-col justify-center">
             <p className="text-[10px] font-black uppercase text-zinc-500 mb-1">Saat</p>
             <h2 className="text-3xl font-black">{time.toLocaleTimeString('tr-TR', { hour: '2-digit', minute: '2-digit' })}</h2>
          </div>
          <div className="col-span-1 bg-[#1e1e1a] rounded-3xl p-5"><p className="text-[10px] font-black text-amber-500/70 mb-2">Not</p><p className="text-[11px] text-amber-100/60 font-medium">Biyokimya notlarını getir.</p></div>
          <div className="col-span-1 bg-zinc-900/40 rounded-3xl p-5 flex items-center justify-center"><Music className="text-[#1DB954] w-8 h-8"/></div>
          <div className="col-span-1 border border-blue-500/20 bg-blue-900/10 rounded-3xl p-5 flex flex-col justify-between italic">
             <p className="text-[10px] text-blue-400 uppercase font-black tracking-widest">Kural #1</p>
             <p className="text-[11px] text-zinc-300">Asla pes etme.</p>
          </div>
        </div>
      </main>
    </div>
  );\n}\n\nfunction NavItem({ icon: Icon, active = false, tooltip = "", href = "#" }) {\n  return (\n    <Link href={href} className={\`group relative w-12 h-12 rounded-xl flex items-center justify-center transition-all \${active ? 'bg-zinc-800 text-white' : 'text-zinc-500 hover:text-white'}\`}>\n      <Icon className="w-5 h-5" />\n      {active && <div className="absolute left-0 w-1 h-6 bg-blue-500 rounded-r-full" />}\n    </Link>\n  );\n}\n\`;
fs.writeFileSync(p, content);
console.log('✅ HUB Yüklendi.');
