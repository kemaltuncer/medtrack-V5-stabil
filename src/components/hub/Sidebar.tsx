"use client";
import React from 'react';
import { 
  Home, Calendar, GraduationCap, FileText, Library, BookOpenCheck, 
  Layers, Zap, FileEdit, Timer, Target, Calculator, 
  Beaker, Type, User, Sparkles 
} from 'lucide-react';

export default function Sidebar({ activePlan = 'free', activeItem = 'Ana Sayfa', onItemClick }) {
  const isPro = activePlan === 'plus' || activePlan === 'ultra';
  const isUltra = activePlan === 'ultra';

  const menuGroups = [
    { label: "Genel", items: [ { name: "Ana Sayfa", icon: Home } ] },
    { label: "Akademik", items: [ { name: "Ders Programı", icon: Calendar }, { name: "Sınavlar", icon: GraduationCap }, { name: "Slayt Listesi", icon: FileText } ] },
    { label: "Çalışma", items: [ { name: "Soru Bankası", icon: BookOpenCheck }, { name: "Flashcardlar", icon: Layers }, { name: "Spot Bilgiler", icon: Zap }, { name: "Notlarım", icon: FileEdit }, { name: "Pomodoro", icon: Timer }, { name: "TUS Sayacı", icon: Target } ] },
    ...(isPro ? [{ label: "AI Pro", items: [ { name: "AI Terminal", icon: Target }, { name: "Sokratik Analiz", icon: Sparkles } ] }] : []),
    { label: "Klinik", items: [ { name: "Hesaplayıcılar", icon: Calculator }, { name: "Lab Değerleri", icon: Beaker }, { name: "Terimler Sözlüğü", icon: Type } ] }
  ];

  return (
    <aside className={"w-64 h-full flex flex-col border-r shrink-0 " + (isUltra ? "bg-black border-white/5" : isPro ? "bg-[#0c0c0e] border-white/5" : "bg-white border-zinc-200")}>
      <div className="p-6 border-b border-white/5 flex items-center gap-3">
        <div className={"w-8 h-8 rounded-lg flex items-center justify-center " + (isUltra ? "bg-emerald-500" : "bg-blue-600")}><Home className="w-4 h-4 text-white" /></div>
        <span className={"text-sm font-black italic " + (activePlan === 'free' ? "text-zinc-900" : "text-white")}>MEDİTRACK</span>
      </div>
      <div className="flex-1 p-4 space-y-6 overflow-y-auto custom-scrollbar">
        {menuGroups.map((group, idx) => (
          <div key={idx} className="space-y-1">
            <p className="px-4 text-[8px] font-black text-zinc-500 uppercase tracking-widest">{group.label}</p>
            {group.items.map((item, i) => {
              const isActive = activeItem === item.name;
              return (
                <button key={i} onClick={() => onItemClick && onItemClick(item.name)}
                  className={"w-full flex items-center gap-3 px-4 py-2 rounded-xl text-[11px] font-bold transition-all " + 
                    (isActive ? (activePlan === 'free' ? "bg-zinc-100 text-zinc-900 shadow-sm" : "bg-white/10 text-white shadow-lg") : "text-zinc-400 hover:bg-zinc-50")}>
                  <item.icon className={"w-4 h-4 " + (isActive ? "text-blue-600" : "opacity-40")} />
                  {item.name}
                </button>
              );
            })}
          </div>
        ))}
      </div>
    </aside>
  );
}
