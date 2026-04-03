const fs = require('fs');
const p = require('path').join(process.cwd(), 'src/components/hub/FreePreKlinik.tsx');
let c = fs.readFileSync(p, 'utf8');

const labHtml = `
    if (activeView === 'Lab Değerleri') {
      return (
        <div className="space-y-6 text-left animate-in fade-in duration-700">
          {/* Üst Header: Evrensel Referans */}
          <div className="flex justify-between items-end mb-8">
            <div>
              <h1 className="text-2xl font-black tracking-tighter text-zinc-900 uppercase italic">LAB_REFERANS_MERKEZİ</h1>
              <p className="text-[10px] font-bold text-zinc-400 uppercase tracking-[0.2em] mt-1 italic">TÜM BRANŞLAR İÇİN STANDART DEĞERLER • GÜNCEL REHBERLER</p>
            </div>
            <div className="relative">
              <input type="text" placeholder="PARAMETRE ARA..." className="bg-zinc-100 border-none rounded-xl px-6 py-2 text-[10px] font-black uppercase tracking-widest focus:ring-2 focus:ring-blue-500 transition-all outline-none" />
            </div>
          </div>

          <div className="grid grid-cols-12 gap-6">
            {/* Kategori Seçici */}
            <div className="col-span-12 flex gap-2 overflow-x-auto pb-2 custom-scrollbar">
              {["HEPSİ", "BİYOKİMYA", "HEMATOLOJİ", "ELEKTROLİTLER", "KAN GAZI", "HORMONLAR", "TİT"].map((cat, i) => (
                <button key={i} className={"px-5 py-2 rounded-full text-[9px] font-black uppercase tracking-tighter whitespace-nowrap transition-all " + (i === 0 ? "bg-zinc-900 text-white shadow-lg" : "bg-white border border-zinc-200 text-zinc-400 hover:border-zinc-300")}>
                  {cat}
                </button>
              ))}
            </div>

            {/* Değerler Tablosu */}
            <div className="col-span-12 bg-white border border-zinc-200 rounded-[2.5rem] overflow-hidden shadow-sm">
              <div className="grid grid-cols-12 bg-zinc-50/50 p-6 border-b border-zinc-100">
                <div className="col-span-4 text-[9px] font-black text-zinc-400 uppercase tracking-widest">PARAMETRE</div>
                <div className="col-span-4 text-[9px] font-black text-zinc-400 uppercase tracking-widest text-center">REFERANS ARALIĞI</div>
                <div className="col-span-4 text-[9px] font-black text-zinc-400 uppercase tracking-widest text-right">BİRİM</div>
              </div>
              <div className="divide-y divide-zinc-100">
                {[
                  { p: "Glukoz (Açlık)", r: "70 - 100", u: "mg/dL", c: "Biyokimya" },
                  { p: "Hemoglobin (Erkek)", r: "13.5 - 17.5", u: "g/dL", c: "Hematoloji" },
                  { p: "Sodyum (Na+)", r: "135 - 145", u: "mEq/L", c: "Elektrolit" },
                  { p: "Potasyum (K+)", r: "3.5 - 5.1", u: "mEq/L", c: "Elektrolit" },
                  { p: "Kreatinin (Erkek)", r: "0.7 - 1.3", u: "mg/dL", c: "Biyokimya" },
                  { p: "Beyaz Küre (WBC)", r: "4.500 - 11.000", u: "/mm³", c: "Hematoloji" }
                ].map((item, i) => (
                  <div key={i} className="grid grid-cols-12 p-6 hover:bg-zinc-50/30 transition-colors group cursor-default">
                    <div className="col-span-4">
                      <p className="text-sm font-bold text-zinc-800 uppercase italic tracking-tight">{item.p}</p>
                      <p className="text-[8px] font-black text-zinc-300 uppercase tracking-widest">{item.c}</p>
                    </div>
                    <div className="col-span-4 flex items-center justify-center">
                       <div className="px-6 py-2 bg-zinc-50 rounded-2xl border border-zinc-100 text-sm font-black tabular-nums text-zinc-900 group-hover:border-blue-200 transition-all">
                          {item.r}
                       </div>
                    </div>
                    <div className="col-span-4 flex items-center justify-end
cat << 'EOF' > fix_plumbing.cjs
const fs = require('fs');
const p = require('path').join(process.cwd(), 'src/components/hub/Sidebar.tsx');
const c = `"use client";
import React from 'react';
import { Home, Calendar, GraduationCap, FileText, Library, BookOpenCheck, Layers, Zap, FileEdit, Timer, Target, Calculator, Beaker, Type, User } from 'lucide-react';

export default function Sidebar({ activePlan = 'free', activeItem = 'Ana Sayfa', onItemClick }) {
  const menuGroups = [
    { label: "Genel", items: [{ name: "Ana Sayfa", icon: Home }] },
    { label: "Akademik", items: [{ name: "Ders Programı", icon: Calendar }, { name: "Sınavlar", icon: GraduationCap }, { name: "Slayt Listesi", icon: FileText }] },
    { label: "Çalışma", items: [{ name: "Soru Bankası", icon: BookOpenCheck }, { name: "Flashcardlar", icon: Layers }, { name: "Spot Bilgiler", icon: Zap }, { name: "Notlarım", icon: FileEdit }, { name: "Pomodoro", icon: Timer }, { name: "TUS Sayacı", icon: Target }] },
    { label: "Klinik", items: [{ name: "Hesaplayıcılar", icon: Calculator }, { name: "Lab Değerleri", icon: Beaker }, { name: "Terimler Sözlüğü", icon: Type }] }
  ];
  return (
    <aside className="w-64 h-full flex flex-col border-r bg-white border-zinc-200 shrink-0">
      <div className="p-6 border-b border-zinc-100 flex items-center gap-3"><div className="w-8 h-8 rounded-lg bg-blue-600 flex items-center justify-center"><Home className="w-4 h-4 text-white" /></div><span className="text-sm font-black italic">MEDITRACK</span></div>
      <div className="flex-1 p-4 space-y-6 overflow-y-auto">{menuGroups.map((g, i) => (
        <div key={i} className="space-y-1"><p className="px-4 text-[8px] font-black text-zinc-400 uppercase tracking-widest">{g.label}</p>
        {g.items.map((item, j) => (
          <button key={j} onClick={() => { console.log('Tıklandı:', item.name); onItemClick(item.name); }} className={"w-full flex items-center gap-3 px-4 py-2 rounded-xl text-[11px] font-bold transition-all " + (activeItem === item.name ? "bg-zinc-100 text-zinc-900 shadow-sm" : "text-zinc-400 hover:bg-zinc-50")}>
            <item.icon className={"w-4 h-4 " + (activeItem === item.name ? "text-blue-600" : "opacity-40")} />{item.name}
          </button>
        ))}</div>
      ))}</div>
    </aside>
  );
}`;
fs.writeFileSync(p, c);
console.log('✅ Tesisat Onarıldı: Sidebar artık komut gönderiyor!');
