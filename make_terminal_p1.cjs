const fs = require('fs');
const path = require('path');
const p = path.join(process.cwd(), 'src/app/terminal/page.tsx');

const content = `"use client";
import React, { useState } from 'react';
import { Terminal, Send, Paperclip, ChevronLeft, Activity, Microscope, Stethoscope, Sparkles } from 'lucide-react';
import Link from 'next/link';

export default function ClinicalTerminal() {
  const [input, setInput] = useState('');

  return (
    <div className="h-screen w-screen bg-[#050505] text-zinc-100 flex font-sans overflow-hidden">
      
      {/* SOL PANEL: CHAT / TERMINAL (%70) */}
      <section className="flex-[7] flex flex-col h-full border-r border-zinc-800/50 relative">
        {/* Dekoratif Arka Plan */}
        <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-blue-600 via-indigo-500 to-transparent opacity-20" />
        
        {/* Header */}
        <header className="h-20 bg-[#09090b]/80 backdrop-blur-md border-b border-zinc-800/50 flex items-center justify-between px-6 shrink-0 z-10">
          <div className="flex items-center gap-4">
            <Link href="/hub" className="p-2 hover:bg-zinc-800 rounded-xl transition-colors text-zinc-400 hover:text-white">
              <ChevronLeft className="w-5 h-5" />
            </Link>
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-blue-500/10 border border-blue-500/20 rounded-xl flex items-center justify-center">
                <Terminal className="w-5 h-5 text-blue-400" />
              </div>
              <div>
                <h1 className="text-sm font-black tracking-widest uppercase">Med_OS Sokratik Asistan</h1>
                <p className="text-[10px] text-zinc-500 font-bold tracking-widest uppercase flex items-center gap-1.5 mt-0.5">
                  <span className="w-1.5 h-1.5 bg-emerald-500 rounded-full animate-ping" /> Sistem Online
                </p>
              </div>
            </div>
          </div>
          <div className="flex gap-2">
             <button className="px-4 py-2 bg-zinc-800/50 hover:bg-zinc-800 rounded-lg text-[10px] font-black uppercase tracking-widest text-zinc-400 transition-colors">Geçmiş Vakalar</button>
          </div>
        </header>

        {/* Chat Akışı (Messages) */}
        <div className="flex-1 overflow-y-auto p-6 md:p-10 scroll-smooth custom-scrollbar">
          
          {/* AI Mesajı (Karşılama) */}
          <div className="flex gap-4 mb-8">
            <div className="w-8 h-8 rounded-full bg-blue-600/20 border border-blue-500/30 flex items-center justify-center shrink-0 mt-1">
              <Sparkles className="w-4 h-4 text-blue-400" />
            </div>
            <div className="flex-1">
               <h4 className="text-[10px] font-black uppercase tracking-widest text-zinc-500 mb-2 ml-1">Med_OS Assistant</h4>
               <div className="bg-[#0c0c0e] border border-zinc-800/50 p-5 rounded-2xl rounded-tl-sm text-sm text-zinc-300 leading-relaxed max-w-[85%] shadow-xl shadow-black/20">
                 Hoş geldin, Dr. Kemal. Dönem 4 parametrelerin aktif. Şu an Kardiyoloji bloğundayız. İncelemek istediğin bir EKG vakası veya tartışmak istediğin bir mekanizma var mı?
               </div>
            </div>
          </div>

          {/* Kullanıcı Mesajı */}
          <div className="flex gap-4 mb-8 flex-row-reverse">
             <div className="w-8 h-8 rounded-full bg-zinc-800 border border-zinc-700 flex items-center justify-center shrink-0 mt-1 p-0.5">
                <img src="https://api.dicebear.com/7.x/avataaars/svg?seed=Kemal&backgroundColor=transparent" alt="User" className="w-full h-full rounded-full bg-zinc-900" />
             </div>
             <div className="flex-1 flex flex-col items-end">
               <h4 className="text-[10px] font-black uppercase tracking-widest text-zinc-500 mb-2 mr-1">Sen</h4>
               <div className="bg-blue-600 p-5 rounded-2xl rounded-tr-sm text-sm text-white leading-relaxed max-w-[85%] shadow-xl shadow-blue-900/20">
                 Acile 65 yaşında bir erkek hasta geldi. Nefes darlığı ve bilateral gode bırakan ödemi var. JVD pozitif. Sence en olası tanı nedir ve ilk ne vermeliyiz?
               </div>
             </div>
          </div>

          {/* AI Mesajı (Cevap ve Klinik Kart) */}
          <div className="flex gap-4 mb-8">
            <div className="w-8 h-8 rounded-full bg-blue-600/20 border border-blue-500/30 flex items-center justify-center shrink-0 mt-1">
              <Sparkles className="w-4 h-4 text-blue-400" />
            </div>
            <div className="flex-1">
               <h4 className="text-[10px] font-black uppercase tracking-widest text-zinc-500 mb-2 ml-1">Med_OS Assistant</h4>
               <div className="bg-[#0c0c0e] border border-zinc-800/50 p-5 rounded-2xl rounded-tl-sm text-sm text-zinc-300 leading-relaxed max-w-[85%] shadow-xl shadow-black/20">
                 <p className="mb-4">Tarif ettiğin klasik bir <strong>Sağ Kalp Yetmezliği (Cor Pulmonale)</strong> tablosu. JVD (Juguler Venöz Dolgunluk) ve bilateral ödem, sağ ventrikülün kanı ileri pompalayamayıp geriye, sistemik venöz sisteme göllemesinin sonucudur.</p>
                 <p className="mb-4">Acil rahatlatma ve volüm yükünü azaltmak için ilk tercih genelde loop diüretikleridir.</p>
                 
                 {/* Klinik Kart (AI içinde özel komponent) */}
                 <div className="bg-indigo-950/20 border border-indigo-500/20 rounded-xl p-4 flex items-start gap-4 my-4 group cursor-pointer hover:bg-indigo-900/20 transition-colors">
                   <div className="w-10 h-10 bg-indigo-500/10 rounded-lg flex items-center justify-center shrink-0"><Stethoscope className="w-5 h-5 text-indigo-400"/></div>
                   <div>
                     <h5 className="text-xs font-black uppercase text-indigo-300 mb-1">Önerilen İlk Müdahale: Furosemid (Lasix)</h5>
                     <p className="text-[11px] text-indigo-200/70 leading-tight">20-40 mg IV bolus. (Hastanın daha önce diüretik kullanıp kullanmadığına göre doz titre edilir).</p>
                   </div>
                 </div>
               </div>
            </div>
          </div>

          {/* Yazıyor Efekti (EKG) */}
          <div className="flex gap-4 mb-8 opacity-50">
            <div className="w-8 h-8 rounded-full bg-blue-600/20 border border-blue-500/30 flex items-center justify-center shrink-0 mt-1">
              <Activity className="w-4 h-4 text-blue-400 animate-pulse" />
            </div>
            <div className="bg-[#0c0c0e] border border-zinc-800/50 px-4 py-3 rounded-2xl rounded-tl-sm text-[10px] text-blue-400 font-mono tracking-widest uppercase animate-pulse">
               > Literatür taranıyor...
            </div>
          </div>

        </div>

        {/* Girdi Alanı (Command Prompt) */}
        <div className="p-6 bg-[#09090b] border-t border-zinc-800/50 shrink-0 z-10 relative">
          <div className="absolute top-[-24px] left-8 bg-zinc-800 text-zinc-300 text-[9px] font-black uppercase tracking-widest px-3 py-1 rounded-t-lg">
            KOMUT GİRİŞİ [/]
          </div>
          <div className="relative flex items-center bg-[#121214] border-2 border-zinc-800 focus-within:border-blue-500/50 rounded-2xl transition-colors">
            <button className="p-4 text-zinc-500 hover:text-blue-400 transition-colors"><Paperclip className="w-5 h-5" /></button>
            <input 
              type="text" 
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="Bir vaka yaz veya '/' ile komut menüsünü aç..." 
              className="flex-1 bg-transparent border-none py-4 text-sm font-medium text-white placeholder:text-zinc-600 focus:outline-none"
            />
            <button className="p-4 text-blue-500 hover:text-blue-400 transition-colors group">
              <div className="w-8 h-8 bg-blue-600 group-hover:bg-blue-500 rounded-lg flex items-center justify-center transition-colors shadow-lg shadow-blue-600/20">
                <Send className="w-4 h-4 text-white ml-0.5" />
              </div>
            </button>
          </div>
        </div>
      </section>

      {/* SAĞ PANEL BURAYA GELECEK */}
      <section className="flex-[3] bg-[#0c0c0e] flex flex-col h-full border-l border-zinc-800/50 relative">
          <div className="flex items-center justify-center h-full text-zinc-600 font-bold text-xs tracking-widest uppercase">SAĞ PANEL YÜKLENİYOR...</div>
      </section>

    </div>
  );
}
\`;

fs.writeFileSync(p, content);
console.log('✅ Terminal Aşama 1: Sol Chat Paneli ve UI İskeleti Kuruldu!');
