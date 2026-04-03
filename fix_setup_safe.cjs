const fs = require('fs');
const path = require('path');
const p = path.join(process.cwd(), 'src/app/setup/page.tsx');

const content = `"use client";
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { 
  Activity, GraduationCap, Target, Clock, Stethoscope, Brain, 
  ArrowRight, CheckCircle2, ChevronLeft, Medal, Zap, BookOpen, 
  ShieldCheck, FlaskConical, Microscope, Users2, Terminal, Heart
} from "lucide-react";
import Link from "next/link";

export default function SetupWizard() {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    role: "",
    goal: "",
    hours: 2
  });

  const nextStep = () => setStep(s => s + 1);
  const prevStep = () => setStep(s => s - 1);

  return (
    <main className="min-h-screen bg-[#050505] text-white flex overflow-hidden font-sans">
      {/* SOL PANEL */}
      <div className="hidden lg:flex w-1/3 bg-[#0a0a0a] border-r border-white/5 flex-col p-12 relative overflow-hidden text-left">
        <div className="absolute top-0 left-0 w-full h-1 bg-blue-600/20">
          <motion.div animate={{ width: \`\${(step / 4) * 100}%\` }} className="h-full bg-blue-600 shadow-[0_0_20px_#2563eb]" />
        </div>
        <div className="relative z-10">
          <div className="flex items-center gap-3 mb-16">
            <div className="p-2 bg-blue-600 rounded-lg shadow-lg shadow-blue-600/20"><Activity className="w-5 h-5 text-white" /></div>
            <span className="text-xl font-black italic tracking-tighter text-white">MEDİ<span className="text-blue-500">TRACK</span></span>
          </div>
          <div className="space-y-10">
            <div>
              <p className="text-[10px] font-black text-gray-500 uppercase tracking-[0.3em] mb-4">Sistem Durumu</p>
              <div className="flex items-center gap-4 text-[10px] font-bold text-gray-300 italic">
                <div className="w-1.5 h-1.5 bg-emerald-500 rounded-full animate-ping" /> V4_SETUP_PROTOCOL: ONLINE
              </div>
            </div>
            <div className="space-y-4">
              <p className="text-[10px] font-black text-gray-500 uppercase tracking-[0.3em]">Aktif Profiler</p>
              <StatItem label="KLİNİK ROL" value={formData.role || "ANALİZ EDİLİYOR..."} active={!!formData.role} />
              <StatItem label="STRATEJİK HEDEF" value={formData.goal || "BEKLENİYOR..."} active={!!formData.goal} />
              <StatItem label="GÜNLÜK DOZAJ" value={\`\${formData.hours} SAAT\`} active={true} />
            </div>
          </div>
        </div>
        <div className="mt-auto opacity-20 font-mono text-[9px] text-blue-500 space-y-1">
          <p>{\">>>\"} INITIALIZING_USER_SYST_V5</p>
          <p>{\">>>\"} ENCRYPTING_HIPPOCRATIC_DATA</p>
        </div>
      </div>

      {/* SAĞ PANEL */}
      <div className="flex-1 relative flex flex-col items-center justify-center p-8 md:p-20">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,#1e1e1e,transparent)] opacity-10" />
        <AnimatePresence mode="wait">
          {step === 1 && (
            <motion.div key="st1" initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -20 }} className="max-w-xl w-full text-left">
              <HeaderBadge step="01" label="Identifikasyon" icon={GraduationCap} />
              <h1 className="text-4xl font-black tracking-tighter mb-4 italic uppercase text-white">Klinik Rolünü <span className="text-blue-500">Doğrula.</span></h1>
              <p className="text-gray-500 font-bold text-[11px] mb-10 uppercase tracking-widest text-left">Ünvanına göre modül yetkilendirmesi yapılacaktır.</p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <RoleCard icon={Brain} title="Tıp Öğrencisi" sub="Dönem 1-3" active={formData.role === 'Öğrenci'} onClick={() => setFormData({...formData, role: 'Öğrenci'})} />
                <RoleCard icon={Stethoscope} title="Klinik Stajyer" sub="Dönem 4-5" active={formData.role === 'Stajyer'} onClick={() => setFormData({...formData, role: 'Stajyer'})} />
                <RoleCard icon={ShieldCheck} title="İntern Doktor" sub="Dönem 6" active={formData.role === 'İntern'} onClick={() => setFormData({...formData, role: 'İntern'})} />
                <RoleCard icon={Medal} title="Mezun Hekim" sub="Uzman/Pratisyen" active={formData.role === 'Hekim'} onClick={() => setFormData({...formData, role: 'Hekim'})} />
              </div>
              <StepNav canNext={!!formData.role} onNext={nextStep} />
            </motion.div>
          )}
          {step === 2 && (
            <motion.div key="st2" initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -20 }} className="max-w-xl w-full text-left">
              <HeaderBadge step="02" label="Optimizasyon" icon={Target} />
              <h1 className="text-4xl font-black tracking-tighter mb-4 italic uppercase text-white">Ana Odak <span className="text-blue-500">Noktan?</span></h1>
              <div className="space-y-3">
                <GoalCard icon={Zap} title="TUS & Akademik" sub="Soru bankası odaklı" active={formData.goal === 'TUS'} onClick={() => setFormData({...formData, goal: 'TUS'})} />
                <GoalCard icon={Activity} title="OSCE & Klinik" sub="Simülasyon ağırlıklı" active={formData.goal === 'Klinik'} onClick={() => setFormData({...formData, goal: 'Klinik'})} />
              </div>
              <StepNav canNext={!!formData.goal} onNext={nextStep} onPrev={prevStep} />
            </motion.div>
          )}
          {step === 3 && (
            <motion.div key="st3" initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -20 }} className="max-w-xl w-full text-center">
              <HeaderBadge step="03" label="Kapasite" icon={Clock} />
              <h1 className="text-4xl font-black tracking-tighter mb-4 italic uppercase text-white">Günlük <span className="text-blue-500">Dozaj.</span></h1>
              <div className="space-y-12 bg-white/[0.02] p-12 rounded-[3rem] border border-white/5 shadow-2xl">
                <input type="range" min="1" max="12" step="1" value={formData.hours} onChange={(e) => setFormData({...formData, hours: parseInt(e.target.value)})} className="w-full h-2 bg-white/10 rounded-lg appearance-none cursor-pointer accent-blue-600" />
                <div className="text-8xl font-black text-white tracking-tighter italic">{formData.hours} <span className="text-xl text-blue-500 not-italic">Saat</span></div>
              </div>
              <StepNav canNext={true} onNext={nextStep} onPrev={prevStep} />
            </motion.div>
          )}
          {step === 4 && (
            <motion.div key="st4" initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} className="max-w-xl w-full text-center text-white">
              <div className="w-20 h-20 bg-emerald-500/10 border border-emerald-500/20 text-emerald-500 rounded-full flex items-center justify-center mx-auto mb-8 shadow-[0_0_40px_rgba(16,185,129,0.1)]"><CheckCircle2 size={40} /></div>
              <h1 className="text-5xl font-black tracking-tighter mb-6 italic uppercase">Sistem <span className="text-blue-500">Hazır.</span></h1>
              <Link href="/dashboard" className="inline-flex items-center gap-4 bg-blue-600 text-white px-12 py-6 rounded-2xl font-black text-xs uppercase tracking-[0.3em] hover:bg-blue-500 transition-all shadow-xl shadow-blue-600/20 group">Terminali Başlat <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" /></Link>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </main>
  );
}

function HeaderBadge({ step, label, icon: Icon }) {
  return (
    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 mb-6 text-left">
      <Icon className="w-3.5 h-3.5 text-blue-500" />
      <span className="text-[9px] font-black tracking-widest text-blue-500 uppercase">Aşama {step}: {label}</span>
    </div>
  );
}

function StatItem({ label, value, active }) {
  return (
    <div className={\`p-4 rounded-2xl border text-left transition-all \${active ? "bg-white/5 border-white/10" : "bg-transparent border-white/5 opacity-40"}\`}>
      <p className="text-[8px] font-black text-gray-500 uppercase tracking-widest mb-1">{label}</p>
      <p className={\`text-[10px] font-black uppercase tracking-tight \${active ? "text-blue-400" : "text-gray-700"}\`}>{value}</p>
    </div>
  );
}

function RoleCard({ icon: Icon, title, sub, active, onClick }) {
  return (
    <button onClick={onClick} className={\`p-6 rounded-3xl border text-left transition-all \${active ? "bg-blue-600 border-blue-400 shadow-xl shadow-blue-600/20" : "bg-white/5 border-white/10 hover:border-white/20"}\`}>
      <div className={\`w-10 h-10 rounded-xl flex items-center justify-center mb-4 \${active ? "bg-white/20 text-white" : "bg-white/5 text-gray-500"}\`}><Icon className="w-5 h-5" /></div>
      <h4 className={\`text-[11px] font-black uppercase tracking-tight mb-1 \${active ? "text-white" : "text-gray-300"}\`}>{title}</h4>
      <p className={\`text-[9px] font-bold uppercase tracking-widest \${active ? "text-blue-100" : "text-gray-600"}\`}>{sub}</p>
    </button>
  );
}

function GoalCard({ icon: Icon, title, sub, active, onClick }) {
  return (
    <button onClick={onClick} className={\`w-full p-6 rounded-3xl border flex items-center gap-6 text-left transition-all \${active ? "bg-white/10 border-blue-500 shadow-xl shadow-blue-500/5" : "bg-white/5 border-white/5 hover:border-white/10"}\`}>
      <div className={\`w-14 h-14 rounded-2xl flex items-center justify-center \${active ? "bg-blue-600 text-white" : "bg-white/5 text-gray-500"}\`}><Icon className="w-6 h-6" /></div>
      <div className="flex-1">
        <h4 className={\`text-xs font-black uppercase tracking-tight \${active ? "text-white" : "text-gray-200"}\`}>{title}</h4>
        <p className="text-[10px] font-bold text-gray-500 uppercase tracking-widest mt-1">{sub}</p>
      </div>
      {active && <CheckCircle2 className="w-5 h-5 text-blue-500" />}
    </button>
  );
}

function StepNav({ canNext, onNext, onPrev }) {
  return (
    <div className="mt-12 flex justify-between items-center">
      {onPrev ? (
        <button onClick={onPrev} className="flex items-center gap-2 text-[10px] font-black text-gray-600 hover:text-white uppercase tracking-widest transition-colors">
          <ChevronLeft className="w-4 h-4" /> Geri Dön
        </button>
      ) : <div />}
      <button disabled={!canNext} onClick={onNext} className="group flex items-center gap-3 px-10 py-5 bg-blue-600 text-white rounded-2xl font-black text-[10px] uppercase tracking-widest disabled:opacity-20 transition-all hover:bg-blue-500 shadow-xl shadow-blue-600/20">
        İlerle <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
      </button>
    </div>
  );
}
\`;

fs.writeFileSync(p, content);
console.log('✅ Setup v4 Full-System Restored!');
