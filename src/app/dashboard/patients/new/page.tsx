"use client";

import React, { useState } from "react";
import Link from "next/link";
import { 
  ArrowLeft, Save, User, Hash, Bed, 
  Activity, Thermometer, Droplets, Zap, 
  Clipboard, Stethoscope, Sparkles, Rocket,
  AlertCircle
} from "lucide-react";
import { motion } from "framer-motion";

export default function NewPatient() {
  const [step, setStep] = useState(1);

  return (
    <main className="relative flex min-h-screen bg-[#020408] text-white overflow-hidden font-sans">
      
      {/* --- DİNAMİK ARKA PLAN (Vibrant Bio-Glow) --- */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-[-20%] right-[-10%] w-[70%] h-[70%] rounded-full bg-indigo-600/10 blur-[160px]" />
        <div className="absolute bottom-[-10%] left-[-20%] w-[50%] h-[50%] rounded-full bg-emerald-500/5 blur-[140px]" />
        <div className="absolute inset-0 opacity-[0.03] bg-[url('https://grainy-gradients.vercel.app/noise.svg')]" />
      </div>

      <section className="relative z-10 flex-1 p-8 md:p-16 overflow-y-auto h-screen custom-scrollbar">
        <div className="max-w-4xl mx-auto">
          
          {/* Header & Progress */}
          <header className="mb-16 flex flex-col md:flex-row md:items-center justify-between gap-8">
            <div>
              <Link href="/dashboard/patients" className="flex items-center gap-2 text-slate-500 hover:text-indigo-400 transition-all mb-4 group text-xs font-black uppercase tracking-widest">
                <ArrowLeft size={14} className="group-hover:-translate-x-1 transition-transform" /> Geri Dön
              </Link>
              <h1 className="text-6xl font-black tracking-tighter leading-none">
                Yeni <span className="bg-clip-text text-transparent bg-gradient-to-r from-indigo-500 to-emerald-400">Vaka Girişi.</span>
              </h1>
            </div>

            {/* Stepper (Holografik Adımlar) */}
            <div className="flex gap-3">
              {[1, 2, 3].map((s) => (
                <div 
                  key={s} 
                  className={`w-12 h-2 rounded-full transition-all duration-500 ${
                    step >= s ? "bg-indigo-500 shadow-[0_0_15px_rgba(79,70,229,0.5)]" : "bg-white/10"
                  }`} 
                />
              ))}
            </div>
          </header>

          {/* FORM AREA (Şablomatik Düzen) */}
          <div className="space-y-12">
            
            {/* ADIM 1: KİMLİK & LOKASYON */}
            <motion.section 
              initial={{ opacity: 0, x: 20 }} 
              animate={{ opacity: 1, x: 0 }}
              className="p-10 rounded-[3rem] bg-white/[0.02] border border-white/5 relative overflow-hidden group hover:border-indigo-500/30 transition-all shadow-2xl"
            >
              <div className="flex items-center gap-4 mb-10">
                <div className="w-12 h-12 rounded-2xl bg-indigo-500/10 flex items-center justify-center text-indigo-400 border border-indigo-500/20">
                  <User size={24} />
                </div>
                <h2 className="text-xl font-black tracking-tight italic">Hasta Tanımlama</h2>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="space-y-2">
                  <label className="text-[10px] font-black text-slate-500 uppercase tracking-widest ml-4">Ad Soyad</label>
                  <input className="w-full bg-white/5 border border-white/5 rounded-2xl p-5 outline-none focus:border-indigo-500/50 transition-all font-bold text-slate-200" placeholder="Örn: Kemal Er..." />
                </div>
                <div className="space-y-2">
                  <label className="text-[10px] font-black text-slate-500 uppercase tracking-widest ml-4">Protokol No</label>
                  <input className="w-full bg-white/5 border border-white/5 rounded-2xl p-5 outline-none focus:border-indigo-500/50 transition-all font-bold text-slate-200" placeholder="2026/..." />
                </div>
                <div className="space-y-2">
                  <label className="text-[10px] font-black text-slate-500 uppercase tracking-widest ml-4">Yatak / Servis</label>
                  <input className="w-full bg-white/5 border border-white/5 rounded-2xl p-5 outline-none focus:border-indigo-500/50 transition-all font-bold text-slate-200" placeholder="D-12 / Dahiliye" />
                </div>
                <div className="space-y-2">
                  <label className="text-[10px] font-black text-slate-500 uppercase tracking-widest ml-4">Yaş</label>
                  <input className="w-full bg-white/5 border border-white/5 rounded-2xl p-5 outline-none focus:border-indigo-500/50 transition-all font-bold text-slate-200" placeholder="65" />
                </div>
              </div>
            </motion.section>

            {/* ADIM 2: İLK VİTALLER */}
            <motion.section 
              initial={{ opacity: 0, x: 20 }} 
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.1 }}
              className="p-10 rounded-[3rem] bg-white/[0.02] border border-white/5 relative overflow-hidden group hover:border-rose-500/30 transition-all shadow-2xl"
            >
              <div className="flex items-center gap-4 mb-10">
                <div className="w-12 h-12 rounded-2xl bg-rose-500/10 flex items-center justify-center text-rose-400 border border-rose-500/20">
                  <Activity size={24} />
                </div>
                <h2 className="text-xl font-black tracking-tight italic">İlk Vital Bulgular</h2>
              </div>

              <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                {[
                  { label: "Ateş (°C)", icon: <Thermometer size={16}/>, placeholder: "36.5" },
                  { label: "Tansiyon", icon: <Activity size={16}/>, placeholder: "120/80" },
                  { label: "Nabız", icon: <Zap size={16}/>, placeholder: "80" },
                  { label: "SpO2 (%)", icon: <Droplets size={16}/>, placeholder: "98" },
                ].map((item, i) => (
                  <div key={i} className="space-y-2">
                    <label className="text-[9px] font-black text-slate-500 uppercase tracking-widest flex items-center gap-2">
                      {item.icon} {item.label}
                    </label>
                    <input className="w-full bg-white/5 border border-white/5 rounded-xl p-4 outline-none focus:border-rose-500/50 transition-all font-black text-lg text-slate-200" placeholder={item.placeholder} />
                  </div>
                ))}
              </div>
            </motion.section>

            {/* ADIM 3: ANAMNEZ & ÖN TANI */}
            <motion.section 
              initial={{ opacity: 0, x: 20 }} 
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2 }}
              className="p-10 rounded-[3rem] bg-white/[0.02] border border-white/5 relative overflow-hidden group hover:border-emerald-500/30 transition-all shadow-2xl"
            >
              <div className="flex items-center gap-4 mb-10">
                <div className="w-12 h-12 rounded-2xl bg-emerald-500/10 flex items-center justify-center text-emerald-400 border border-emerald-500/20">
                  <Clipboard size={24} />
                </div>
                <h2 className="text-xl font-black tracking-tight italic">Anamnez & Ön Tanı</h2>
              </div>

              <div className="space-y-8">
                <div className="space-y-2">
                  <label className="text-[10px] font-black text-slate-500 uppercase tracking-widest ml-4">Başvuru Şikayeti & Hikaye</label>
                  <textarea className="w-full bg-white/5 border border-white/5 rounded-[2rem] p-6 outline-none focus:border-emerald-500/50 transition-all font-bold text-slate-300 min-h-[120px] resize-none" placeholder="Hastanın geliş öyküsünü buraya yaz..." />
                </div>
                <div className="space-y-2">
                  <label className="text-[10px] font-black text-slate-500 uppercase tracking-widest ml-4">Çalışılan Ön Tanı</label>
                  <input className="w-full bg-white/5 border border-white/5 rounded-2xl p-5 outline-none focus:border-emerald-500/50 transition-all font-black text-emerald-400" placeholder="Örn: Akut Koroner Sendrom?" />
                </div>
              </div>
            </motion.section>

            {/* SUBMIT BUTTON */}
            <footer className="flex justify-end pb-20">
              <button className="group flex items-center gap-4 px-12 py-6 bg-indigo-600 hover:bg-indigo-500 text-white rounded-[2.5rem] font-black text-sm tracking-[0.2em] shadow-[0_0_50px_rgba(79,70,229,0.3)] transition-all active:scale-95 uppercase">
                Vakayı Arşive Kaydet <Rocket size={20} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
              </button>
            </footer>

          </div>
        </div>
      </section>

      {/* --- SAĞ PANEL (Sidebar Info) --- */}
      <aside className="hidden xl:block w-80 p-12 bg-black/40 backdrop-blur-3xl border-l border-white/5">
        <div className="space-y-10">
          <div className="flex items-center gap-3">
            <AlertCircle className="text-indigo-400" />
            <h4 className="text-xs font-black uppercase tracking-widest">Kayıt İpuçları</h4>
          </div>
          <div className="p-6 rounded-[2rem] bg-white/[0.03] border border-white/5 text-[11px] font-bold text-slate-500 leading-relaxed italic">
            "Kemal, anamnezi yazarken hastanın kendi cümlelerini tırnak içinde belirtmeyi unutma, vizitte hocaların en sevdiği detaydır!"
          </div>
          <div className="pt-10 border-t border-white/5 text-center">
            <Sparkles className="mx-auto mb-4 text-indigo-500 opacity-30" size={40} />
            <p className="text-[10px] font-black text-slate-600 uppercase tracking-widest">Holografik Veri Girişi</p>
          </div>
        </div>
      </aside>

    </main>
  );
}
