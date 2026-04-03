const fs = require('fs');
const path = require('path');
const p = path.join(process.cwd(), 'src/app/hub/page.tsx');

const content = `"use client";
import React, { useState, useEffect } from 'react';
import { Home, Calendar, BookOpen, CheckSquare, Target, Settings, Zap, Clock, Play, Pause, RotateCcw, Pin, Music, Crown } from 'lucide-react';

export default function CentralHub() {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => setTime(new Date()), 1000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="h-screen w-screen bg-[#09090b] text-zinc-100 flex overflow-hidden selection:bg-blue-500/30 font-sans">
      
      {/* SOL MENÜ (SLIM SIDEBAR) */}
      <aside className="w-20 md:w-24 h-full border-r border-zinc-800/50 bg-[#0c0c0e] flex flex-col items-center py-6 gap-8 z-20 shadow-2xl relative">
        <div className="absolute top-0 right-0 w-[1px] h-full bg-gradient-to-b from-transparent via-blue-500/20 to-transparent" />
        
        <div className="w-12 h-12 bg-gradient-to-br from-blue-600 to-indigo-600 rounded-2xl flex items-center justify-center shadow-lg shadow-blue-900/20 cursor-pointer hover:scale-105 transition-transform">
          <Zap className="text-white w-6 h-6" />
        </div>
        
        <nav className="flex-1 w-full flex flex-col items-center gap-4">
          <NavItem icon={Home} active tooltip="Merkez Hub" />
          <NavItem icon={Calendar} tooltip="Program & Sınavlar" />
          <NavItem icon={BookOpen} tooltip="Slaytlar & Arşiv" />
          <NavItem icon={CheckSquare} tooltip="Yapılacaklar" />
          <NavItem icon={Target} tooltip="AI Terminal" />
        </nav>
        
        <div className="flex flex-col gap-4 items-center">
          <NavItem icon={Settings} tooltip="Ayarlar" />
          <div className="w-12 h-12 rounded-full bg-zinc-800 border-2 border-zinc-700 flex items-center justify-center cursor-pointer hover:border-blue-500 transition-all p-1">
            <img src="https://api.dicebear.com/7.x/avataaars/svg?seed=Kemal&backgroundColor=transparent" alt="User" className="w-full h-full rounded-full bg-zinc-900" />
          </div>
        </div>
      </aside>

      {/* BENTO GRID (ANA EKRAN) */}
      <main className="flex-1 h-full p-4 md:p-6 overflow-hidden relative">
        {/* Arka plan dekoratif blur */}
        <div className="absolute top-[-20%] left-[-10%] w-[40%] h-[40%] bg-blue-900/10 blur-[120px] rounded-full pointer-events-none" />
        <div className="absolute bottom-[-20%] right-[-10%] w-[40%] h-[40%] bg-indigo-900/10 blur-[120px] rounded-full pointer-events-none" />

        {/* 4 Sütun x 3 Satır Grid Sistemi */}
        <div className="w-full h-full grid grid-cols-4 grid-rows-3 gap-4 relative z-10">
          
          {/* 1. GÜNÜN PROGRAMI (Büyük Sol Üst Kutu) */}
          <div className="col-span-2 row-span-2 border border-zinc-800/50 bg-zinc-900/40 backdrop-blur-xl rounded-3xl p-6 flex flex-col relative overflow-hidden group">
            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-blue-500 to-indigo-500 opacity-50" />
            <h3 className="text-xs font-black uppercase tracking-widest text-zinc-400 mb-6 flex items-center gap-2"><CheckSquare className="w-4 h-4"/> Günün Programı & AI Planı</h3>
            <div className="flex-1 flex items-center justify-center text-zinc-600 font-bold text-[10px] uppercase tracking-widest border-2 border-dashed border-zinc-800 rounded-xl">
              [Modül 1: Yapılacaklar + Ders Programı Buraya Gelecek]
            </div>
          </div>

          {/* 2. SLAYT & KONU LİSTESİ (Orta Dikey Kutu) */}
          <div className="col-span-1 row-span-2 border border-zinc-800/50 bg-zinc-900/40 backdrop-blur-xl rounded-3xl p-6 flex flex-col">
            <h3 className="text-xs font-black uppercase tracking-widest text-zinc-400 mb-6 flex items-center gap-2"><BookOpen className="w-4 h-4"/> Aktif Slaytlar</h3>
            <div className="flex-1 flex items-center justify-center text-zinc-600 font-bold text-[10px] uppercase tracking-widest border-2 border-dashed border-zinc-800 rounded-xl">
              [Modül 2: Checkbox'lı Slayt Listesi]
            </div>
          </div>

          {/* 3. YAKLAŞAN SINAVLAR SAYACI (Sağ Dikey Kutu) */}
          <div className="col-span-1 row-span-2 border border-zinc-800/50 bg-zinc-900/40 backdrop-blur-xl rounded-3xl p-6 flex flex-col relative overflow-hidden">
            <div className="absolute -right-10 -top-10 w-32 h-32 bg-red-500/10 blur-[40px] rounded-full" />
            <h3 className="text-xs font-black uppercase tracking-widest text-zinc-400 mb-6 flex items-center gap-2"><Calendar className="w-4 h-4 text-red-400"/> Sınav Radarı</h3>
            <div className="flex-1 flex items-center justify-center text-zinc-600 font-bold text-[10px] uppercase tracking-widest border-2 border-dashed border-zinc-800 rounded-xl">
              [Modül 3: Geri Sayım Sayacı]
            </div>
          </div>
          
          {/* 4. SAAT & POMODORO (Alt Sol) */}
          <div className="col-span-1 row-span-1 border border-zinc-800/50 bg-zinc-900/40 backdrop-blur-xl rounded-3xl p-5 flex flex-col justify-between group">
            <div className="flex justify-between items-start">
              <div>
                <p className="text-[10px] font-black uppercase tracking-widest text-zinc-500 mb-1">Yerel Saat</p>
                <h2 className="text-3xl font-black tabular-nums tracking-tighter">
                  {time.toLocaleTimeString('tr-TR', { hour: '2-digit', minute: '2-digit' })}
                  <span className="text-sm text-zinc-500 ml-1">{time.toLocaleTimeString('tr-TR', { second: '2-digit' })}</span>
                </h2>
              </div>
              <Clock className="w-5 h-5 text-zinc-600" />
            </div>
            <div className="w-full flex items-center justify-between bg-zinc-800/50 p-2 rounded-xl mt-4">
               <span className="text-[9px] font-bold uppercase tracking-widest text-blue-400 px-2">Pomodoro: 25:00</span>
               <div className="flex gap-1">
                 <button className="p-1.5 hover:bg-zinc-700 rounded-lg text-zinc-400 hover:text-white transition-colors"><Play className="w-3 h-3"/></button>
                 <button className="p-1.5 hover:bg-zinc-700 rounded-lg text-zinc-400 hover:text-white transition-colors"><RotateCcw className="w-3 h-3"/></button>
               </div>
            </div>
          </div>

          {/* 5. YAPIŞKAN NOTLAR (Alt Orta Sol) */}
          <div className="col-span-1 row-span-1 border border-zinc-800/50 bg-[#1e1e1a] backdrop-blur-xl rounded-3xl p-5 relative overflow-hidden">
            <Pin className="absolute top-4 right-4 w-4 h-4 text-amber-500/50 rotate-45" />
            <h3 className="text-[10px] font-black uppercase tracking-widest text-amber-500/70 mb-3">Hızlı Not</h3>
            <textarea 
              placeholder="Aklındakileri buraya dök..." 
              className="w-full h-[60px] bg-transparent resize-none text-xs font-medium text-amber-100/80 placeholder:text-amber-100/30 focus:outline-none"
            />
          </div>

          {/* 6. SPOTIFY WIDGET (Alt Orta Sağ) */}
          <div className="col-span-1 row-span-1 border border-zinc-800/50 bg-zinc-900/40 backdrop-blur-xl rounded-3xl p-5 flex flex-col justify-center items-center group cursor-pointer hover:bg-zinc-800/50 transition-colors">
             <Music className="w-8 h-8 text-[#1DB954] mb-3 group-hover:scale-110 transition-transform" />
             <p className="text-[10px] font-bold uppercase tracking-widest text-zinc-400">Spotify'ı Bağla</p>
          </div>

          {/* 7. GÜNÜN MOTİVASYONU & PREMIUM (Alt Sağ) */}
          <div className="col-span-1 row-span-1 border border-blue-500/20 bg-gradient-to-br from-blue-900/20 to-indigo-900/20 backdrop-blur-xl rounded-3xl p-5 flex flex-col justify-between relative overflow-hidden group">
            <div className="absolute -right-4 -bottom-4 opacity-10 group-hover:scale-150 transition-transform duration-700"><Crown className="w-32 h-32 text-blue-500"/></div>
            <div>
              <h3 className="text-[9px] font-black uppercase tracking-widest text-blue-400 mb-2">Günün Kuralı</h3>
              <p className="text-xs font-medium text-zinc-300 italic">"Zor vakalar, en iyi hocalarındır."</p>
            </div>
            <button className="w-full py-2 bg-blue-600/20 hover:bg-blue-600/40 border border-blue-500/30 rounded-xl text-[9px] font-black uppercase tracking-widest text-blue-300 transition-colors mt-2 backdrop-blur-md z-10">
              Sistemi Yükselt
            </button>
          </div>

        </div>
      </main>
    </div>
  );
}

function NavItem({ icon: Icon, active = false, tooltip = "" }) {
  return (
    <button className={\`group relative w-12 h-12 rounded-xl flex items-center justify-center transition-all duration-300 \${active ? 'bg-zinc-800 text-white shadow-md shadow-black/50' : 'text-zinc-500 hover:text-zinc-300 hover:bg-zinc-800/50'}\`}>
      <Icon className="w-5 h-5" />
      {active && <div className="absolute left-0 top-1/2 -translate-y-1/2 w-1 h-6 bg-blue-500 rounded-r-full" />}
      <div className="absolute left-full ml-4 px-3 py-1.5 bg-zinc-800 text-white text-[10px] font-bold uppercase tracking-widest rounded-lg opacity-0 pointer-events-none group-hover:opacity-100 transition-opacity whitespace-nowrap z-50">
        {tooltip}
      </div>
    </button>
  );
}
\`;

fs.writeFileSync(p, content);
console.log('✅ Aşama 1: Temiz Hub Klasörü, Bento Grid ve Alt Satır Bileşenleri Kuruldu!');
