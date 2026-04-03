const fs = require('fs');
const path = require('path');
const p = path.join(process.cwd(), 'src/components/hub/Sidebar.tsx');

const content = `"use client";
import React from 'react';
import { 
  Calendar, GraduationCap, FileText, Library, 
  BookOpenCheck, Layers, Zap, FileEdit, Timer, Target,
  Calculator, Beaker, Type, User, ArrowUpCircle, Home, Sparkles
} from 'lucide-react';
import Link from 'next/link';

export default function Sidebar({ activePlan = 'free' }) {
  const isPro = activePlan === 'plus' || activePlan === 'ultra';
  const isUltra = activePlan === 'ultra';

  const menuGroups = [
    {
      label: "Akademik",
      items: [
        { name: "Ders Programı", icon: Calendar, href: "/hub" },
        { name: "Sınavlar", icon: GraduationCap, href: "#" },
        { name: "Slayt Listesi", icon: FileText, href: "#" },
        { name: "Kaynak Listesi", icon: Library, href: "#" },
      ]
    },
    {
      label: "Çalışma",
      items: [
        { name: "Soru Bankası", icon: BookOpenCheck, href: "#" },
        { name: "Flashcardlar", icon: Layers, href: "#" },
        { name: "Spot Bilgiler", icon: Zap, href: "#" },
        { name: "Notlarım", icon: FileEdit, href: "#" },
        { name: "Pomodoro", icon: Timer, href: "#" },
        { name: "TUS Sayacı", icon: Target, href: "#" },
      ]
    },
    // PRO 1 (PLUS) VE ÜZERİ İÇİN GELEN AI ÖZELLİKLERİ
    ...(isPro ? [{
      label: "AI Asistan (Pro)",
      items: [
        { name: "AI Terminal", icon: Target, href: "/terminal" },
        { name: "Sokratik Analiz", icon: Sparkles, href: "#" },
      ]
    }] : []),
    {
      label: "Klinik",
      items: [
        { name: "Hesaplayıcılar", icon: Calculator, href: "#" },
        { name: "Lab Değerleri", icon: Beaker, href: "#" },
        { name: "Terimler Sözlüğü", icon: Type, href: "#" },
      ]
    }
  ];

  return (
    <aside className={\`w-64 h-full flex flex-col overflow-y-auto custom-scrollbar border-r \${activePlan === 'ultra' ? 'bg-black border-white/5' : activePlan === 'plus' ? 'bg-[#0c0c0e] border-white/5' : 'bg-white border-zinc-200'}\`}>
      <div className="p-6 border-b border-white/5 flex items-center gap-3 text-white">
        <div className={\`w-8 h-8 rounded-lg flex items-center justify-center \${activePlan === 'ultra' ? 'bg-emerald-500 shadow-[0_0_15px_rgba(16,185,129,0.4)]' : 'bg-blue-600'}\`}>
          <Home className="w-4 h-4 text-white" />
        </div>
        <span className={\`text-sm font-black tracking-tighter italic \${activePlan === 'free' ? 'text-zinc-900' : 'text-white'}\`}>MEDİ<span className="text-blue-500">TRACK</span></span>
      </div>

      <div className="flex-1 p-4 space-y-6">
        {menuGroups.map((group, idx) => (
          <div key={idx} className="space-y-1">
            <p className="px-4 text-[8px] font-black text-zinc-500 uppercase tracking-[0.2em]">{group.label}</p>
            {group.items.map((item, i) => (
              <Link key={i} href={item.href} className={\`w-full flex items-center gap-3 px-4 py-2 rounded-xl transition-all text-[11px] font-bold group \${activePlan === 'free' ? 'text-zinc-500 hover:bg-zinc-100 hover:text-zinc-900' : 'text-zinc-400 hover:bg-white/5 hover:text-white'}\`}>
                <item.icon className={\`w-4 h-4 \${activePlan === 'free' ? 'text-zinc-300 group-hover:text-zinc-900' : 'text-zinc-600 group-hover:text-blue-400'}\`} />
                {item.name}
              </Link>
            ))}
          </div>
        ))}
      </div>

      <div className="p-4 mt-auto border-t border-white/5">
        {activePlan === 'free' && (
          <button className="w-full py-3 rounded-xl bg-zinc-900 text-white text-[10px] font-black uppercase tracking-widest italic shadow-lg">Planı Yükselt</button>
        )}
      </div>
    </aside>
  );
}
\`;
fs.writeFileSync(p, content);
console.log('✅ Sidebar: Pro1-Pro2 Hiyerarşisi Enjekte Edildi.');
