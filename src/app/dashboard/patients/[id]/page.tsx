"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { 
  ArrowLeft, Edit3, Save, Activity, Droplets, 
  Thermometer, Zap, Beaker, Pill, Sparkles, 
  ChevronRight, Clipboard, Microscope, Heart
} from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export default function PatientDetail({ params }: { params: { id: string } }) {
  const [editMode, setEditMode] = useState(false);
  
  // İleride DB'den gelecek veri yapısı
  const [patient, setPatient] = useState({
    name: "Mehmet Yılmaz",
    protocol: "2024/882",
    bed: "D-12",
    age: 65,
    diagnosis: "Akut Böbrek Hasarı (ABH)",
    vitals: { temp: 38.2, bp: "110/70", hr: 95, spo2: 94 },
    labs: { creatinine: 2.1, sodium: 132, glucose: 240, urea: 85 },
    notes: "3 gündür devam eden oligüri ve pretibial ödem şikayeti mevcut. Bilinen KBH tanısı yok.",
    plan: "IV Hidrasyon başlandı, nefrotoksik ajanlar kesildi."
  });

  return (
    <main className="relative flex min-h-screen bg-[#020408] text-white overflow-hidden font-sans">
      
      {/* --- ELİT ARKAPLAN (High Contrast Aurora) --- */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-[-10%] left-[-10%] w-[50%] h-[50%] rounded-full bg-blue-600/10 blur-[150px]" />
        <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] rounded-full bg-emerald-500/5 blur-[120px]" />
        <div className="absolute inset-0 opacity-[0.05] bg-[radial-gradient(#ffffff_1px,transparent_1px)] [background-size:40px_40px]" />
      </div>

      {/* --- SOL TARAF: ŞABLOMATİK DEFTER --- */}
      <section className="relative z-10 w-full lg:w-[65%] border-r border-white/5 h-screen overflow-y-auto p-8 md:p-14 custom-scrollbar">
        <div className="max-w-4xl mx-auto">
          
          {/* Üst Nav & Aksiyon */}
          <header className="flex items-center justify-between mb-16">
            <Link href="/dashboard/patients" className="flex items-center gap-3 text-slate-500 hover:text-white transition-all group">
              <div className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center group-hover:bg-blue-600 transition-colors">
                <ArrowLeft size={18} />
              </div>
              <span className="text-xs font-black tracking-[0.2em] uppercase">Arşiv</span>
            </Link>
            
            <button 
              onClick={() => setEditMode(!editMode)}
              className={`flex items-center gap-3 px-8 py-4 rounded-2xl font-black text-xs tracking-widest transition-all ${
                editMode ? "bg-blue-600 shadow-[0_0_30px_rgba(37,99,235,0.4)]" : "bg-white/5 border border-white/10 hover:bg-white/10"
              }`}
            >
              {editMode ? <><Save size={16} /> VERİLERİ İŞLE</> : <><Edit3 size={16} /> DOSYAYI DÜZENLE</>}
            </button>
          </header>

          {/* Holografik Kimlik Kartı */}
          <div className="relative mb-16 p-10 rounded-[3rem] bg-gradient-to-br from-white/[0.04] to-transparent border border-white/10 overflow-hidden shadow-2xl">
            <div className="absolute top-0 right-0 p-8 opacity-10">
              <Activity size={120} className="text-blue-500" />
            </div>
            <div className="relative z-10">
              <div className="flex items-center gap-4 mb-4">
                <span className="px-4 py-1.5 bg-blue-500/10 text-blue-400 rounded-full text-[10px] font-black tracking-widest border border-blue-500/20 uppercase">Dahiliye Servisi</span>
                <span className="text-slate-500 text-[10px] font-black uppercase tracking-widest">Yatak: {patient.bed}</span>
              </div>
              <h1 className="text-6xl font-black tracking-tighter mb-4">{patient.name}</h1>
              <p className="text-xl font-bold text-slate-400 leading-tight italic max-w-xl">{patient.diagnosis}</p>
            </div>
          </div>

          {/* ŞABLON ALANLARI */}
          <div className="space-y-16 pb-20">
            
            {/* 1. VİTALLER (Neon Grid) */}
            <div>
              <h2 className="text-xs font-black tracking-[0.4em] text-blue-500 uppercase mb-8 flex items-center gap-3">
                <Heart size={16} /> Vital Parametreler
              </h2>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                {[
                  { label: "Ateş", val: patient.vitals.temp, unit: "°C", icon: <Thermometer />, color: "text-rose-400" },
                  { label: "Tansiyon", val: patient.vitals.bp, unit: "mmHg", icon: <Activity />, color: "text-emerald-400" },
                  { label: "Nabız", val: patient.vitals.hr, unit: "/dk", icon: <Zap />, color: "text-amber-400" },
                  { label: "Oksijen", val: patient.vitals.spo2, unit: "%", icon: <Droplets />, color: "text-cyan-400" },
                ].map((v, i) => (
                  <div key={i} className="bg-white/[0.02] border border-white/5 p-6 rounded-[2rem] hover:border-white/20 transition-all group">
                    <p className="text-[10px] font-black text-slate-500 uppercase mb-3 flex items-center gap-2">
                      {v.icon} {v.label}
                    </p>
                    {editMode ? (
                      <input className="w-full bg-white/5 border-b border-blue-500/50 outline-none text-2xl font-black py-1 px-2 rounded" defaultValue={v.val} />
                    ) : (
                      <p className={`text-3xl font-black ${v.color}`}>{v.val}<span className="text-xs ml-1 opacity-40 font-bold">{v.unit}</span></p>
                    )}
                  </div>
                ))}
              </div>
            </div>

            {/* 2. ANAMNEZ & LAB (Bölünmüş Görünüm) */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
               <div className="space-y-6">
                  <h2 className="text-xs font-black tracking-[0.4em] text-emerald-500 uppercase flex items-center gap-3">
                    <Clipboard size={16} /> Klinik Öykü
                  </h2>
                  <div className="p-8 rounded-[2.5rem] bg-white/[0.02] border border-white/5 text-slate-300 leading-relaxed font-medium">
                    {editMode ? (
                      <textarea className="w-full h-40 bg-transparent outline-none resize-none" defaultValue={patient.notes} />
                    ) : (
                      <p>{patient.notes}</p>
                    )}
                  </div>
               </div>
               <div className="space-y-6">
                  <h2 className="text-xs font-black tracking-[0.4em] text-cyan-500 uppercase flex items-center gap-3">
                    <Beaker size={16} /> Laboratuvar Özeti
                  </h2>
                  <div className="p-8 rounded-[2.5rem] bg-white/[0.02] border border-white/5 space-y-4">
                    {Object.entries(patient.labs).map(([key, val]) => (
                      <div key={key} className="flex justify-between items-center py-2 border-b border-white/5">
                        <span className="text-xs font-bold text-slate-500 uppercase">{key}</span>
                        {editMode ? (
                          <input className="w-20 bg-white/5 text-right outline-none px-2 rounded border border-white/10" defaultValue={val} />
                        ) : (
                          <span className="text-lg font-black text-slate-200">{val}</span>
                        )}
                      </div>
                    ))}
                  </div>
               </div>
            </div>

          </div>
        </div>
      </section>

      {/* --- SAĞ TARAF: HOLOGRAFİK ANALİZ (The Diagnostic AI) --- */}
      <aside className="hidden lg:block lg:w-[35%] h-screen overflow-y-auto p-12 bg-black/40 backdrop-blur-3xl border-l border-white/5">
        <div className="max-w-sm mx-auto">
          
          <div className="flex items-center gap-3 mb-12">
            <div className="w-1.5 h-8 bg-blue-500 rounded-full" />
            <div>
              <h2 className="text-2xl font-black tracking-tighter">Diagnostic</h2>
              <p className="text-[10px] font-black text-blue-500 uppercase tracking-widest">Real-time Analysis</p>
            </div>
          </div>

          <div className="space-y-8">
            {/* AI Diagnosis Card */}
            <div className="p-10 rounded-[3.5rem] bg-blue-600 text-white relative overflow-hidden shadow-[0_20px_50px_rgba(37,99,235,0.3)] group">
              <Sparkles className="absolute -right-4 -top-4 opacity-30 group-hover:rotate-12 transition-transform" size={100} />
              <p className="text-[10px] font-black uppercase opacity-70 mb-2 tracking-widest">Tahmini Klinik Tablo</p>
              <h3 className="text-4xl font-black leading-none mb-6 italic">Prerenal ABH?</h3>
              <div className="h-1.5 w-full bg-white/20 rounded-full overflow-hidden">
                <motion.div initial={{ width: 0 }} animate={{ width: "75%" }} className="h-full bg-white" />
              </div>
              <p className="text-[10px] mt-4 font-bold opacity-80">Girdiğiniz verilere göre %75 olasılıkla ön tanı.</p>
            </div>

            {/* Smart Suggestions */}
            <div className="space-y-4">
               <p className="text-[10px] font-black text-slate-600 uppercase tracking-[0.3em]">Önerilen Aksiyonlar</p>
               {[
                 { t: "FeNa Hesapla", d: "Prerenal ayrımı için.", icon: <Zap size={14}/> },
                 { t: "GFR Güncelle", d: "Cr: 2.1 baz alınarak.", icon: <Microscope size={14}/> },
                 { t: "Sıvı Dengesi", d: "Açık hesaplanmalı.", icon: <Droplets size={14}/> }
               ].map((item, i) => (
                 <div key={i} className="flex items-center justify-between p-6 rounded-[2rem] bg-white/[0.03] border border-white/5 hover:bg-white/[0.06] transition-all cursor-pointer group">
                   <div className="flex items-center gap-4">
                     <div className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-blue-400 group-hover:bg-blue-500 group-hover:text-white transition-all">
                       {item.icon}
                     </div>
                     <div>
                       <h4 className="text-sm font-black text-slate-200">{item.t}</h4>
                       <p className="text-[10px] font-bold text-slate-600 uppercase">{item.d}</p>
                     </div>
                   </div>
                   <ChevronRight size={16} className="text-slate-700" />
                 </div>
               ))}
            </div>

            {/* Current Treatment */}
            <div className="p-8 rounded-[2.5rem] border border-white/5 bg-white/[0.02]">
               <div className="flex items-center gap-3 mb-4 text-amber-500">
                 <Pill size={18} />
                 <h4 className="text-xs font-black uppercase tracking-widest">Güncel Order</h4>
               </div>
               <p className="text-sm font-bold text-slate-500 leading-relaxed italic">
                 {patient.plan}
               </p>
            </div>
          </div>

        </div>
      </aside>

    </main>
  );
}
