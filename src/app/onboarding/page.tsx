"use client";
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronRight, ChevronLeft, User, Calendar, MapPin, BookOpen, Activity, Upload, Sparkles, Check, Coffee, Brain, Target } from "lucide-react";
import { useRouter } from "next/navigation";

export default function OnboardingWizard() {
  const router = useRouter();
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    firstName: "", lastName: "", university: "", year: "", goal: "", expectations: [] as string[]
  });

  const updateForm = (field: string, value: any) => setFormData(prev => ({ ...prev, [field]: value }));
  const toggleExpectation = (val: string) => setFormData(prev => ({
    ...prev, expectations: prev.expectations.includes(val) ? prev.expectations.filter(e => e !== val) : [...prev.expectations, val]
  }));

  const handleNext = () => { if (step < 4) setStep(step + 1); else router.push("/dashboard/academy"); };
  const handlePrev = () => { if (step > 1) setStep(step - 1); };

  return (
    <main className="relative flex min-h-screen bg-[#020408] text-white items-center justify-center font-sans overflow-hidden">
      <div className="absolute inset-0 z-0 pointer-events-none">
        <div className="absolute top-[-10%] left-[-10%] w-[50%] h-[50%] rounded-full bg-blue-600/10 blur-[150px]" />
        <div className="absolute bottom-[-10%] right-[-10%] w-[50%] h-[50%] rounded-full bg-purple-600/10 blur-[150px]" />
      </div>
      <div className="relative z-10 w-full max-w-2xl p-6">
        <div className="bg-white/[0.02] border border-white/5 rounded-[3rem] p-12 shadow-2xl backdrop-blur-3xl min-h-[500px] flex flex-col">
          <AnimatePresence mode="wait">
            {step === 1 && (
              <motion.div key="1" initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -20 }}>
                <h2 className="text-4xl font-black mb-3">Kimlik.</h2>
                <div className="grid grid-cols-2 gap-4 mt-8">
                  <input type="text" placeholder="Ad" value={formData.firstName} onChange={e => updateForm("firstName", e.target.value)} className="bg-white/5 border border-white/10 rounded-2xl p-4 font-bold outline-none focus:border-blue-500" />
                  <input type="text" placeholder="Soyad" value={formData.lastName} onChange={e => updateForm("lastName", e.target.value)} className="bg-white/5 border border-white/10 rounded-2xl p-4 font-bold outline-none focus:border-blue-500" />
                </div>
              </motion.div>
            )}
            {step === 2 && (
              <motion.div key="2" initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -20 }}>
                <h2 className="text-4xl font-black mb-3">Fakülte.</h2>
                <input type="text" placeholder="Üniversite" value={formData.university} onChange={e => updateForm("university", e.target.value)} className="bg-white/5 border border-white/10 rounded-2xl p-4 font-bold outline-none focus:border-purple-500 w-full mt-8" />
                <div className="grid grid-cols-3 gap-2 mt-4">
                  {["D1", "D2", "D3", "D4", "D5", "İntörn"].map(y => (
                    <button key={y} onClick={() => updateForm("year", y)} className={`py-3 rounded-xl font-black ${formData.year === y ? "bg-purple-600" : "bg-white/5"}`}>{y}</button>
                  ))}
                </div>
              </motion.div>
            )}
            {step === 3 && (
              <motion.div key="3" initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -20 }}>
                <h2 className="text-4xl font-black mb-3">Hedef.</h2>
                <div className="grid grid-cols-2 gap-4 mt-8">
                  {["TUS Derecesi", "Yurt Dışı", "Klinisyen", "Akademik"].map(g => (
                    <button key={g} onClick={() => updateForm("goal", g)} className={`p-4 rounded-2xl border ${formData.goal === g ? "bg-amber-500/10 border-amber-500 text-amber-400" : "bg-white/5 border-white/5"}`}>{g}</button>
                  ))}
                </div>
              </motion.div>
            )}
            {step === 4 && (
              <motion.div key="4" initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -20 }}>
                <h2 className="text-4xl font-black mb-3">Modüller.</h2>
                <div className="grid grid-cols-2 gap-2 mt-8">
                  {["OSCE", "Vaka RPG", "Notlar", "TUSiyer"].map(exp => (
                    <button key={exp} onClick={() => toggleExpectation(exp)} className={`p-4 rounded-xl border ${formData.expectations.includes(exp) ? "bg-emerald-500/10 border-emerald-500 text-emerald-400" : "bg-white/5 border-white/5"}`}>{exp}</button>
                  ))}
                </div>
              </motion.div>
            )}
          </AnimatePresence>
          <div className="mt-auto pt-8 flex justify-between">
            <button onClick={handlePrev} className={`px-6 py-3 font-black ${step === 1 ? "opacity-0" : "text-slate-400"}`}><ChevronLeft/></button>
            <button onClick={handleNext} className="px-8 py-4 bg-white text-black rounded-full font-black flex items-center gap-2">{step === 4 ? "Başlat" : "Devam"} <ChevronRight/></button>
          </div>
        </div>
      </div>
    </main>
  );
}
