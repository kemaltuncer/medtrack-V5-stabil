const fs = require('fs');
const path = require('path');
const p = path.join(process.cwd(), 'src/app/setup/page.tsx'); // Klasör yapına göre kontrol et kanka

if (!fs.existsSync(p)) {
    console.error('Hata: setup/page.tsx bulunamadı.');
    process.exit(1);
}

let c = ` "use client";
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { 
  Activity, GraduationCap, Target, Clock, Stethoscope, Brain, 
  ArrowRight, CheckCircle2, ChevronLeft, Star, Zap, BookOpen, 
  ShieldCheck, FlaskConical, Microscope, Users2, Terminal, Heart
} from "lucide-react";
import Link from "next/link";

export default function SetupWizard() {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    role: "",
    specialty: "",
    goal: "",
    hours: 2,
    experience: "beginner",
    interests: []
  });

  const nextStep = () => setStep(s => s + 1);
  const prevStep = () => setStep(s => s - 1);

  return (
    <main className="min-h-screen bg-[#050505] text-white flex overflow-hidden font-sans">
      {/* SOL PANEL: KLİNİK DURUM (VİTAL BİLGİLER) */}
      <div className="hidden lg:flex w-1/3 bg-[#0a0a0a] border-r border-white/5 flex-col p-12 relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-1 bg-blue-600/20">
          <motion.div 
            animate={{ width: \`\${(step / 4) * 100}%\` }}
            className="h-full bg-blue-600 shadow-[0_0_20px_#2563eb]"
          />
        </div>

        <div className="relative z-10">
          <div className="flex items-center gap-3 mb-16">
            <div className="p-2 bg-blue-600 rounded-lg shadow-lg shadow-blue-600/20">
              <Activity className="w-5 h-5 text-white" />
            </div>
            <span className="text-xl font-black italic tracking-tighter">MEDİ<span className="text-blue-500">TRACK</span></span>
          </div>

          <div className="space-y-12">
            <div>
              <p className="text-[10px] font-black text-gray-500 uppercase tracking-[0.3em] mb-4">Sistem Durumu</p>
              <div className="flex items-center gap-4 text-sm font-bold text-gray-300 italic">
                <div className="w-2 h-2 bg-emerald-500 rounded-full animate-ping" />
                KURULUM PROTOKOLÜ AKTİF
              </div>
            </div>

            <div className="space-y-6">
              <p className="text-[10px] font-black text-gray-500 uppercase tracking-[0.3em]">Profil Özeti</p>
              <div className="grid gap-4">
                <StatItem label="ROL" value={formData.role || "BELİRLENMEDİ"} active={!!formData.role} />
                <StatItem label="HEDEF" value={formData.goal || "ANALİZ EDİLİYOR"} active={!!formData.goal} />
                <StatItem label="YOĞUNLUK" value={\`\${formData.hours} SAAT/GÜN\`} active={true} />
              </div>
            </div>
          </div>
        </div>

        {/* Alt Dekorasyon: Kod Akışı */}
        <div className="mt-auto opacity-20 font-mono text-[10px] text-blue-500 space-y-1">
          <p>>>> INITIALIZING_USER_SYST_V4</p>
          <p>>>> ANALYZING_ACADEMIC_NEEDS...</p>
          <p>>>> ENCRYPTING_HIPPOCRATIC_DATA</p>
        </div>
      </div>

      {/* SAĞ PANEL: İNTERAKTİF FORM */}
      <div className="flex-1 relative flex flex-col items-center justify-center p-8 md:p-20">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,#1e1e1e,transparent)] opacity-20" />
        
        <AnimatePresence mode="wait">
          {step === 1 && (
            <motion.div 
              key="step1" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -20 }}
              className="max-w-xl w-full"
            >
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 mb-6">
                <GraduationCap className="w-4 h-4 text-blue-500" />
                <span className="text-[9px] font-black tracking-widest text-blue-500 uppercase">Aşama 01: Identifikasyon</span>
              </div>
              <h1 className="text-4xl font-black tracking-tighter mb-4 italic uppercase">Klinik Kimliğini <span className="text-blue-500">Doğrula.</span></h1>
              <p className="text-gray-500 font-medium mb-10">Sistem arayüzü seçtiğin ünvanın yetkilerine göre şekillenecek.</p>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <RoleCard 
                  icon={Brain} title="Tıp Öğrencisi" sub="Pre-Klinik (1-3)" 
                  active={formData.role === 'student'}
                  onClick={() => setFormData({...formData, role: 'student'})} 
                />
                <RoleCard 
                  icon={Stethoscope} title="Klinik Stajyer" sub="Dönem 4-5" 
                  active={formData.role === 'stajyer'}
                  onClick={() => setFormData({...formData, role: 'stajyer'})} 
                />
                <RoleCard 
                  icon={ShieldCheck} title="İntern Doktor" sub="Dönem 6" 
                  active={formData.role === 'intern'}
                  onClick={() => setFormData({...formData, role: 'intern'})} 
                />
                <RoleCard 
                  icon={Medal} title="Mezun Hekim" sub="Pratisyen/Uzman" 
                  active={formData.role === 'doctor'}
                  onClick={() => setFormData({...formData, role: 'doctor'})} 
                />
              </div>

              <div className="mt-12 flex justify-end">
                <button 
                  disabled={!formData.role}
                  onClick={nextStep}
                  className="group flex items-center gap-3 px-8 py-4 bg-white text-black rounded-2xl font-black text-xs uppercase tracking-widest disabled:opacity-30 transition-all hover:bg-blue-600 hover:text-white shadow-xl shadow-white/5"
                >
                  Sonraki Adım <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </button>
              </div>
            </motion.div>
          )}
          {/* Diğer adımlar buraya eklenecek kanka... */}
        </AnimatePresence>
      </div>
    </main>
  );
}

function StatItem({ label, value, active }: any) {
  return (
    <div className={\`p-4 rounded-2xl border transition-all \${active ? "bg-white/5 border-white/10" : "bg-transparent border-white/5 opacity-40"}\`}>
      <p className="text-[8px] font-black text-gray-500 uppercase tracking-widest mb-1">{label}</p>
      <p className={\`text-xs font-black uppercase tracking-tight \${active ? "text-blue-400" : "text-gray-700"}\`}>{value}</p>
    </div>
  );
}

function RoleCard({ icon: Icon, title, sub, active, onClick }: any) {
  return (
    <button 
      onClick={onClick}
      className={\`p-6 rounded-3xl border text-left transition-all group \${active ? "bg-blue-600 border-blue-400 shadow-lg shadow-blue-600/20" : "bg-white/5 border-white/10 hover:border-white/20"}\`}
    >
      <div className={\`w-10 h-10 rounded-xl flex items-center justify-center mb-4 transition-colors \${active ? "bg-white/20 text-white" : "bg-white/5 text-gray-500 group-hover:text-blue-500"}\`}>
        <Icon className="w-5 h-5" />
      </div>
      <h4 className={\`text-sm font-black uppercase tracking-tight mb-1 \${active ? "text-white" : "text-gray-300"}\`}>{title}</h4>
      <p className={\`text-[10px] font-bold uppercase tracking-widest \${active ? "text-blue-100" : "text-gray-600"}\`}>{sub}</p>
    </button>
  );
}
\`;

fs.writeFileSync(p, c);
console.log('✅ Setup İskeleti Güncellendi.');
console.log('✅ Görsel Dil: Koyu tema, yan panel ve mikro-yazı tiplerine geçildi.');
