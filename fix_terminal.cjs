const fs = require('fs');
const path = require('path');
const p = path.join(process.cwd(), 'src/app/terminal/page.tsx');
const content = `"use client";
import React from 'react';
import { Terminal, ChevronLeft, Sparkles, Send, Activity } from 'lucide-react';
import Link from 'next/link';

export default function ClinicalTerminal() {
  return (
    <div className="h-screen w-screen bg-[#050505] text-zinc-100 flex font-sans overflow-hidden">
      <section className="flex-[7] flex flex-col h-full border-r border-zinc-800/50">
        <header className="h-20 bg-[#09090b] border-b border-zinc-800/50 flex items-center gap-4 px-6">
          <Link href="/hub" className="p-2 hover:bg-zinc-800 rounded-xl text-zinc-400"><ChevronLeft className="w-5 h-5" /></Link>
          <div><h1 className="text-sm font-black uppercase tracking-widest">Med_OS Terminal</h1><p className="text-[9px] text-emerald-500 font-bold uppercase">● Online</p></div>
        </header>
        <div className="flex-1 p-10 overflow-y-auto">
          <div className="flex gap-4 mb-8">
            <div className="w-8 h-8 rounded-full bg-blue-600/20 border border-blue-500/30 flex items-center justify-center"><Sparkles className="w-4 h-4 text-blue-400" /></div>
            <div className="bg-[#0c0c0e] border border-zinc-800/50 p-5 rounded-2xl text-sm text-zinc-300 max-w-[80%]">Merhaba Dr. Kemal. Vakayı incelemeye hazır mısın?</div>
          </div>
        </div>
        <div className="p-6 bg-[#09090b] border-t border-zinc-800/50"><div className="flex items-center bg-[#121214] border-2 border-zinc-800 rounded-2xl px-4 py-1"><input className="flex-1 bg-transparent py-4 text-sm outline-none" placeholder="Vaka gir..." /><Send className="text-blue-500 w-5 h-5" /></div></div>
      </section>
      <section className="flex-[3] bg-[#0c0c0e] flex flex-col items-center justify-center text-zinc-700 font-black uppercase text-xs tracking-widest">SAĞ PANEL YÜKLENİYOR...</section>
    </div>
  );\n}\n\`;
fs.writeFileSync(p, content);
console.log('✅ TERMINAL Yüklendi.');
