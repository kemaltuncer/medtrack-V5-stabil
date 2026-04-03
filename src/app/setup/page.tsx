"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { 
  Activity, GraduationCap, Target, Clock, 
  Stethoscope, Brain, ArrowRight, CheckCircle2,
  ChevronLeft, Star
} from "lucide-react";
import Link from "next/link";

export default function SetupWizard() {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    role: "",
    goal: "",
    hours: 1.5,
    interests: []
  });

  const nextStep = () => setStep(s => s + 1);
  const prevStep = () => setStep(s => s - 1);

  return (
    <main className="min-h-screen bg-white text-slate-900 flex flex-col items-center justify-center p-6 relative overflow-hidden">
      {/* Arka Plan Süsü */}
      <div className="absolute top-0 left-0 w-full h-1 bg-slate-100">
        <motion.div 
          initial={{ width: 0 }}
          animate={{ width: `${(step / 4) * 100}%` }}
          className="h-full bg-blue-600 shadow-[0_0_15px_rgba(37,99,235,0.5)]"
        />
      </div>

      <AnimatePresence mode="wait">
        {step === 1 && (
          <motion.div 
            key="step1"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            className="max-w-2xl w-full text-center"
          >
            <div className="w-20 h-20 bg-blue-50 text-blue-600 rounded-3xl flex items-center justify-center mx-auto mb-8">
              <GraduationCap size={40} />
            </div>
            <h1 className="text-5xl font-black tracking-tighter mb-4">Senin Rolün Ne?</h1>
            <p className="text-xl text-slate-500 font-bold mb-12">Deneyimini sana özel optimize edeceğiz.</p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <RoleCard title="Tıp Öğrencisi" sub="Dönem 1-3 (Preklinik)" onClick={() => {setFormData({...formData, role: 'student'}); nextStep();}} />
              <RoleCard title="Stajyer Doktor" sub="Dönem 4-5 (Klinik)" onClick={() => {setFormData({...formData, role: 'stajyer'}); nextStep();}} />
              <RoleCard title="İntern Doktor" sub="Dönem 6" onClick={() => {setFormData({...formData, role: 'intern'}); nextStep();}} />
              <RoleCard title="Pratisyen / Uzman" sub="Mezun" onClick={() => {setFormData({...formData, role: 'doctor'}); nextStep();}} />
            </div>
          </motion.div>
        )}

        {step === 2 && (
          <motion.div 
            key="step2"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            className="max-w-2xl w-full text-center"
          >
            <button onClick={prevStep} className="absolute top-10 left-10 flex items-center gap-2 text-slate-400 font-bold"><ChevronLeft /> Geri</button>
            <div className="w-20 h-20 bg-rose-50 text-rose-600 rounded-3xl flex items-center justify-center mx-auto mb-8">
              <Target size={40} />
            </div>
            <h1 className="text-5xl font-black tracking-tighter mb-4">Ana Hedefin Ne?</h1>
            <p className="text-xl text-slate-500 font-bold mb-12">Odak noktamızı belirleyelim.</p>
            
            <div className="grid grid-cols-1 gap-4">
              <GoalCard title="TUS Başarısı" sub="Soru bankaları ve spot bilgiler" icon={<Zap className="text-amber-500" />} onClick={() => {setFormData({...formData, goal: 'tus'}); nextStep();}} />
              <GoalCard title="OSCE & Klinik Beceri" sub="Simülasyonlar ve vaka analizleri" icon={<Activity className="text-rose-500" />} onClick={() => {setFormData({...formData, goal: 'osce'}); nextStep();}} />
              <GoalCard title="Akademik Gelişim" sub="Ders notları ve literatür takibi" icon={<BookOpen className="text-blue-500" />} onClick={() => {setFormData({...formData, goal: 'academic'}); nextStep();}} />
            </div>
          </motion.div>
        )}

        {step === 3 && (
          <motion.div 
            key="step3"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            className="max-w-2xl w-full text-center"
          >
            <div className="w-20 h-20 bg-amber-50 text-amber-600 rounded-3xl flex items-center justify-center mx-auto mb-8">
              <Clock size={40} />
            </div>
            <h1 className="text-5xl font-black tracking-tighter mb-4">Çalışma Yoğunluğun?</h1>
            <p className="text-xl text-slate-500 font-bold mb-12">Günde ne kadar vakit ayırabilirsin?</p>
            
            <div className="space-y-12">
              <input 
                type="range" min="1" max="8" step="0.5" 
                value={formData.hours} 
                onChange={(e) => setFormData({...formData, hours: parseFloat(e.target.value)})}
                className="w-full h-4 bg-slate-100 rounded-lg appearance-none cursor-pointer accent-blue-600"
              />
              <div className="text-8xl font-black text-blue-600 tracking-tighter">{formData.hours} <span className="text-3xl text-slate-300">saat</span></div>
              <button onClick={nextStep} className="bg-slate-900 text-white px-12 py-6 rounded-[2rem] font-black text-2xl w-full flex items-center justify-center gap-4">
                Devam Et <ArrowRight />
              </button>
            </div>
          </motion.div>
        )}

        {step === 4 && (
          <motion.div 
            key="step4"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="max-w-2xl w-full text-center"
          >
            <div className="w-24 h-24 bg-emerald-50 text-emerald-600 rounded-full flex items-center justify-center mx-auto mb-8 shadow-xl shadow-emerald-100">
              <CheckCircle2 size={56} />
            </div>
            <h1 className="text-6xl font-black tracking-tighter mb-6 italic">Terminal Hazır.</h1>
            <p className="text-2xl text-slate-500 font-bold mb-12 leading-relaxed">
              Dr. Kemal, profilin başarıyla oluşturuldu. <br/>Kişisel Medical OS deneyimin başlıyor.
            </p>
            
            <Link href="/dashboard" className="inline-block bg-blue-600 text-white px-16 py-8 rounded-[2.5rem] font-black text-3xl shadow-2xl shadow-blue-200 hover:scale-105 transition-all">
              Sistemi Başlat
            </Link>
          </motion.div>
        )}
      </AnimatePresence>
    </main>
  );
}

// Yardımcı Bileşenler
function RoleCard({ title, sub, onClick }: any) {
  return (
    <button onClick={onClick} className="p-8 bg-white border-2 border-slate-100 rounded-[2.5rem] text-left hover:border-blue-600 hover:bg-blue-50/50 transition-all group">
      <h4 className="text-2xl font-black mb-1 group-hover:text-blue-600">{title}</h4>
      <p className="text-slate-400 font-bold text-sm uppercase tracking-widest">{sub}</p>
    </button>
  );
}

function GoalCard({ title, sub, icon, onClick }: any) {
  return (
    <button onClick={onClick} className="p-8 bg-white border-2 border-slate-100 rounded-[2.5rem] flex items-center gap-6 text-left hover:border-slate-900 transition-all">
      <div className="w-16 h-16 bg-slate-50 rounded-2xl flex items-center justify-center">{icon}</div>
      <div>
        <h4 className="text-2xl font-black mb-1">{title}</h4>
        <p className="text-slate-400 font-bold text-sm italic">{sub}</p>
      </div>
    </button>
  );
}
// Eksik ikon importu için ekleme
import { Zap, BookOpen } from "lucide-react";
