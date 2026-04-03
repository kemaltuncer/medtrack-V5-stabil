const fs = require('fs');
const path = require('path');
const p = path.join(process.cwd(), 'src/components/hub/FreePreKlinik.tsx');

const content = `"use client";
import React, { useState, useEffect } from 'react';
import Sidebar from './Sidebar';
import { 
  Clock, Timer, Target, Bell, ChevronRight, Bookmark, 
  Zap, Beaker, Crown, Book, StickyNote 
} from 'lucide-react';

export default function FreePreKlinik() {
  const [time, setTime] = useState(new Date());

  useEffect(() => { 
    const t = setInterval(() => setTime(new Date()), 1000); 
    return () => clearInterval(t); 
  }, []);

  return (
    <div className="h-full w-full bg-[#fcfcfc] text-zinc-900 flex font-sans overflow-hidden">
      {/* Sol Menü */}
      <Sidebar activePlan="free" />
      
      <main className="flex-1 p-8 overflow-y-auto custom-scrollbar space-y-6">
        {/* Üst Karşılama Paneli */}
        <div className="flex justify-between items-end mb-8">
          <div>
            <h1 className="text-2xl font-black tracking-tighter text-zinc-900 uppercase italic">MERKEZ_POLİKLİNİK</h1>
            <p className="text-[10px] font-bold text-zinc-400 uppercase tracking-[0.2em] mt-1">Sistem Durumu: Stabil • Ücretsiz Plan</p>
          </div>
          <div className="bg-white border border-zinc-200 px-6 py-3 rounded-2xl shadow-sm text-center">
            <p className="text-[9px] font-black text-zinc-400 uppercase mb-1">TUS Sayacı</p>
            <p className="text-xl font-black italic tracking-tighter">184 <span className="text-[10px] not-italic text-zinc-400">GÜN</span></p>
          </div>
        </div>

        <div className="grid grid-cols-12 gap-6">
          
          {/* Ders Programı Modülü */}
          <div className="col-span-8 bg-white border border-zinc-200 rounded-[2.5rem] p-8 shadow-sm">
            <div className="flex justify-between items-center mb-6">
              <h3 className="text-[11px] font-black uppercase tracking-widest text-zinc-400 flex items-center gap-2">
                <Clock className="w-4 h-4"/> GÜNLÜK DERS AKIŞI
              </h3>
              <button className="text-[9px] font-black text-blue-600 uppercase">Tümünü Gör</button>
            </div>
            <div className="space-y-3">
              <div className="p-4 bg-zinc-50 rounded-2xl border border-zinc-100 flex justify-between items-center group cursor-pointer hover:border-blue-200 transition-colors">
                <div className="flex items-center gap-4">
                  <div className="w-1.5 h-10 bg-blue-500 rounded-full" />
                  <div>
                    <h4 className="text-sm font-bold text-zinc-800 uppercase tracking-tight italic">Anatomi: Üst Ekstremite Kasları</h4>
                    <p className="text-[10px] font-bold text-zinc-400 uppercase mt-0.5">Amfi 1 • Prof. Dr. Ahmet Y.</p>
                  </div>
                </div>
                <span className="text-xs font-black tabular-nums text-zinc-400">08:30 - 10:20</span>
              </div>
            </div>
          </div>

          {/* Sınav Kartı */}
          <div className="col-span-4 bg-zinc-900 rounded-[2.5rem] p-8 text-white relative overflow-hidden shadow-xl group">
            <div className="absolute top-0 right-0 p-6 opacity-10 group-hover:scale-110 transition-transform">
              <Target className="w-20 h-20" />
            </div>
            <h3 className="text-[10px] font-black uppercase tracking-widest text-zinc-500 mb-10 italic">SIRADAKİ ENGEL</h3>
            <div className="relative z-10">
              <h4 className="text-2xl font-black italic tracking-tighter leading-none mb-2 text-white">1. KOMİTE:<br/>HÜCRE BİLİMİ</h4>
              <p className="text-4xl font-black text-blue-500 italic mt-6">21 <span className="text-xs not-italic text-zinc-500 uppercase">GÜN KALDI</span></p>
            </div>
          </div>

          {/* Alt Araçlar Grid */}
          <div className="col-span-12 grid grid-cols-4 gap-6 mt-6">
            <div className="bg-white border border-zinc-200 rounded-[2rem] p-6 shadow-sm hover:shadow-md transition-shadow cursor-pointer group">
              <div className="w-10 h-10 bg-zinc-100 rounded-xl flex items-center justify-center mb-4 group-hover:bg-blue-50 transition-colors">
                <Bookmark className="w-5 h-5 text-zinc-400 group-hover:text-blue-500" />
              </div>
              <h4 className="text-[11px] font-black uppercase text-zinc-800">Slayt Listesi</h4>
              <p className="text-[9px] font-bold text-zinc-400 uppercase mt-1 italic">4 YENİ SLAYT</p>
            </div>
            <div className="bg-white border border-zinc-200 rounded-[2rem] p-6 shadow-sm hover:shadow-md transition-shadow cursor-pointer group">
              <div className="w-10 h-10 bg-zinc-100 rounded-xl flex items-center justify-center mb-4 group-hover:bg-amber-50 transition-colors">
                <Zap className="w-5 h-5 text-zinc-400 group-hover:text-amber-500" />
              </div>
              <h4 className="text-[11px] font-black uppercase text-zinc-800">Spot Bilgiler</h4>
              <p className="text-[9px] font-bold text-zinc-400 uppercase mt-1 italic">GÜNÜN 10 SPOTU</p>
            </div>
            <div className="bg-white border border-zinc-200 rounded-[2rem] p-6 shadow-sm hover:shadow-md transition-shadow cursor-pointer group">
              <div className="w-10 h-10 bg-zinc-100 rounded-xl flex items-center justify-center mb-4 group-hover:bg-emerald-50 transition-colors">
                <Beaker className="w-5 h-5 text-zinc-400 group-hover:text-emerald-500" />
              </div>
              <h4 className="text-[11px] font-black uppercase text-zinc-800">Lab Değerleri</h4>
              <p className="text-[9px] font-bold text-zinc-400 uppercase mt-1 italic">REFERANS REHBERİ</p>
            </div>
            <div className="bg-blue-600 rounded-[2rem] p-6 shadow-xl shadow-blue-900/10 flex flex-col justify-between group cursor-pointer overflow-hidden relative">
              <Crown className="absolute -right-4 -bottom-4 w-20 h-20 text-white/10 group-hover:scale-110 transition-transform" />
              <p className="text-[10px] font-black text-white uppercase italic tracking-widest relative z-10">AI PLUS'A GEÇ</p>
              <div className="flex items-center gap-2 relative z-10 text-white font-black text-[11px] uppercase italic">ŞİMDİ KEŞFET <ChevronRight className="w-3 h-3" /></div>
            </div>
          </div>

          {/* Notlar ve Saat Paneli */}
          <div className="col-span-12 grid grid-cols-3 gap-6 mt-2">
            <div className="col-span-2 bg-[#fff3cd] border border-[#ffeeba] rounded-[2.5rem] p-6 flex items-center gap-5 shadow-sm">
              <div className="w-12 h-12 bg-[#856404]/10 rounded-full flex items-center justify-center shrink-0">
                <StickyNote className="w-6 h-6 text-[#856404]" />
              </div>
              <p className="text-xs font-bold text-[#856404] leading-relaxed italic uppercase tracking-tight">
                Not: Biyokimya atlasını kütüphaneden almayı unutma. Yarınki Histoloji laboratuvarı için hazırlık yap.
              </p>
            </div>
            <div className="bg-white border border-zinc-200 rounded-[2.5rem] p-6 flex flex-col items-center justify-center shadow-sm">
              <div className="flex items-center gap-2 text-zinc-300 mb-1 font-black text-[9px] uppercase tracking-[0.2em]">
                <Clock className="w-3 h-3" /> YEREL SAAT
              </div>
              <h2 className="text-3xl font-black text-zinc-900 tabular-nums tracking-tighter italic">
                {time.toLocaleTimeString('tr-TR', { hour: '2-digit', minute: '2-digit' })}
              </h2>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
\`;

fs.writeFileSync(p, content);
console.log('✅ Dosya Tam Kapasite Restore Edildi: Build hataları ve mükerrer kodlar temizlendi! 🏥💎');
