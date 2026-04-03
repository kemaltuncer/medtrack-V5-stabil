"use client";
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronRight, ChevronLeft, User, Calendar, MapPin, BookOpen, Activity, Upload, Sparkles, Check, Coffee, Brain, Target } from "lucide-react";
import { useRouter } from "next/navigation";

const UNIVERSITIES = [
  "Adıyaman Üniversitesi Tıp Fakültesi", "Akdeniz Üniversitesi Tıp Fakültesi", "Ankara Üniversitesi Tıp Fakültesi", 
  "Atatürk Üniversitesi Tıp Fakültesi", "Cerrahpaşa Tıp Fakültesi", "Çukurova Üniversitesi Tıp Fakültesi", 
  "Dokuz Eylül Üniversitesi Tıp Fakültesi", "Ege Üniversitesi Tıp Fakültesi", "Gazi Üniversitesi Tıp Fakültesi", 
  "Hacettepe Üniversitesi Tıp Fakültesi", "İstanbul Tıp Fakültesi (Çapa)", "Marmara Üniversitesi Tıp Fakültesi",
  "Ondokuz Mayıs Üniversitesi Tıp Fakültesi", "Sağlık Bilimleri Üniversitesi (Gülhane)", "Koç Üniversitesi Tıp Fakültesi",
  "Acıbadem Üniversitesi Tıp Fakültesi", "Medipol Üniversitesi Tıp Fakültesi", "Yeditepe Üniversitesi Tıp Fakültesi"
];

export default function OnboardingWizard() {
  const router = useRouter();
  const [step, setStep] = useState(1);
  const totalSteps = 4;
  const [formData, setFormData] = useState({
    firstName: "", lastName: "", birthDate: "", university: "", year: "", currentPhase: "", studyHours: "", goal: "", expectations: [] as string[], avatar: null
  });

  const updateForm = (field: string, value: any) => setFormData(prev => ({ ...prev, [field]: value }));
  const toggleExpectation = (val: string) => setFormData(prev => ({
    ...prev, expectations: prev.expectations.includes(val) ? prev.expectations.filter(e => e !== val) : [...prev.expectations, val]
  }));

  const handleNext = () => { if (step < totalSteps) setStep(step + 1); else router.push("/dashboard/academy"); };
  const handlePrev = () => { if (step > 1) setStep(step - 1); };

  const progressPercentage = (step / totalSteps) * 100;

  return (
    <main className="relative flex min-h-screen bg-[#020408] text-white items-center justify-center font-sans overflow-hidden">
      <div className="absolute inset-0 z-0 pointer-events-none">
        <div className="absolute top-[-10%] left-[-10%] w-[50%] h-[50%] rounded-full bg-blue-600/10 blur-[150px] animate-pulse" />
        <div className="absolute bottom-[-10%] right-[-10%] w-[50%] h-[50%] rounded-full bg-purple-600/10 blur-[150px]" />
      </div>

      <div className="relative z-10 w-full max-w-2xl p-6">
        <div className="mb-12">
          <div className="flex justify-between items-center mb-4">
            <h1 className="text-2xl font-black flex items-center gap-2"><Activity className="text-blue-500" /> MEDITRACK</h1>
            <span className="text-xs font-black text-blue-500">% {progressPercentage}</span>
          </div>
          <div className="h-2 w-full bg-white/5 rounded-full overflow-hidden">
            <motion.div className="h-full bg-gradient-to-r from-blue-500 to-purple-500" animate={{ width: `${progressPercentage}%` }} />
          </div>
        </div>

        <div className="bg-white/[0.02] border border-white/5 rounded-[3rem] p-8 md:p-12 shadow-2xl backdrop-blur-3xl min-h-[500px] flex flex-col">
          <AnimatePresence mode="wait">
            {step === 1 && (
              <motion.div key="1" initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -20 }} className="flex-1">
                <h2 className="text-4xl font-black mb-3">Kimlik Tespiti.</h2>
                <p className="text-slate-400 font-bold mb-8">Nöbet listesine adını doğru yazmamız için bu şart.</p>
                <div className="grid grid-cols-2 gap-6 mb-6">
                  <input type="text" placeholder="Adın" value={formData.firstName} onChange={e => updateForm("firstName", e.target.value)} className="bg-white/5 border border-white/10 rounded-2xl p-4 font-bold outline-none focus:border-blue-500 w-full" />
                  <input type="text" placeholder="Soyadın" value={formData.lastName} onChange={e => updateForm("lastName", e.target.value)} className="bg-white/5 border border-white/10 rounded-2xl p-4 font-bold outline-none focus:border-blue-500 w-full" />
                </div>
              </motion.div>
            )}
            {step === 2 && (
              <motion.div key="2" initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -20 }} className="flex-1">
                <h2 className="text-4xl font-black mb-3">Akademik Çile.</h2>
                <p className="text-slate-400 font-bold mb-8">Hangi fakültedesin ve uykusuzluk seviyen nedir?</p>
                <input type="text" placeholder="Fakülte Ara..." value={formData.university} onChange={e => updateForm("university", e.target.value)} className="bg-white/5 border border-white/10 rounded-2xl p-4 font-bold outline-none focus:border-purple-500 w-full mb-6" />
                <div className="grid grid-cols-3 gap-3 mb-6">
                  {["Dönem 1", "Dönem 2", "Dönem 3", "Dönem 4", "Dönem 5", "İntörn", "Mezun"].map(y => (
                    <button key={y} onClick={() => updateForm("year", y)} className={`py-3 rounded-xl font-black text-xs ${formData.year === y ? "bg-purple-600" : "bg-white/5 hover:bg-white/10"}`}>{y}</button>
                  ))}
                </div>
              </motion.div>
            )}
            {step === 3 && (
              <motion.div key="3" initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -20 }} className="flex-1">
                <h2 className="text-4xl font-black mb-3">Hedefler.</h2>
                <p className="text-slate-400 font-bold mb-8">TUS bir maraton, komiteler sprinttir.</p>
                <div className="grid grid-cols-2 gap-4">
                  {["TUS Derecesi", "Yurt Dışı (USMLE)", "Pratik Klinisyen", "Akademik Kariyer"].map(g => (
                    <div key={g} onClick={() => updateForm("goal", g)} className={`p-5 rounded-[2rem] border cursor-pointer ${formData.goal === g ? "bg-amber-500/10 border-amber-500 text-amber-400" : "bg-white/5 border-white/5"}`}>
                      <h4 className="font-black text-sm">{g}</h4>
                    </div>
                  ))}
                </div>
              </motion.div>
            )}
            {step === 4 && (
              <motion.div key="4" initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -20 }} className="flex-1">
                <h2 className="text-4xl font-black mb-3">Modüller.</h2>
                <p className="text-slate-400 font-bold mb-8">Neleri kullanmak istiyorsun?</p>
                <div className="grid grid-cols-2 gap-3">
                  {["Vaka Takibi", "OSCE", "Hesaplayıcılar", "TUS Programı", "Forum"].map(exp => (
                    <div key={exp} onClick={() => toggleExpectation(exp)} className={`p-4 rounded-xl border cursor-pointer ${formData.expectations.includes(exp) ? "bg-emerald-500/10 border-emerald-500 text-emerald-400" : "bg-white/5 border-white/5"}`}>
                      <span className="text-xs font-black">{exp}</span>
                    </div>
                  ))}
                </div>
              </motion.div>
            )}
          </AnimatePresence>

          <div className="mt-auto pt-6 border-t border-white/10 flex justify-between">
            <button onClick={handlePrev} className={`px-6 py-3 font-black text-xs uppercase ${step === 1 ? "opacity-0" : "text-slate-400"}`}><ChevronLeft size={16}/> Geri</button>
            <button onClick={handleNext} className="flex items-center gap-2 px-8 py-4 bg-white text-black rounded-full font-black text-sm uppercase">{step === totalSteps ? "Başla" : "Devam Et"} <ChevronRight size={18}/></button>
          </div>
        </div>
      </div>
    </main>
  );
}
