"use client";
import { useState } from "react";
import { ArrowLeft, Calculator, Info, AlertTriangle, CheckCircle2, Beaker } from "lucide-react";
import Link from "next/link";
import { motion } from "framer-motion";

export default function GfrCalculator() {
  const [age, setAge] = useState<number | "">("");
  const [creatinine, setCreatinine] = useState<number | "">("");
  const [gender, setGender] = useState<"male" | "female">("male");
  const [result, setResult] = useState<number | null>(null);

  const calculateGFR = () => {
    if (!age || !creatinine) return;

    // CKD-EPI 2021 Formülü (Irksız Standart)
    const scr = creatinine;
    const kappa = gender === "female" ? 0.7 : 0.9;
    const alpha = gender === "female" ? -0.241 : -0.411;
    const genderConstant = gender === "female" ? 1.012 : 1.0;

    const gfr = 142 * Math.pow(Math.min(scr / kappa, 1), alpha) * Math.pow(Math.max(scr / kappa, 1), -1.200) * Math.pow(0.9938, Number(age)) * genderConstant;

    setResult(Math.round(gfr));
  };

  const getStage = (val: number) => {
    if (val >= 90) return { stage: "Evre 1", desc: "Normal veya Yüksek GFR", color: "text-emerald-500", bg: "bg-emerald-50" };
    if (val >= 60) return { stage: "Evre 2", desc: "Hafif Azalmış GFR", color: "text-blue-500", bg: "bg-blue-50" };
    if (val >= 45) return { stage: "Evre 3a", desc: "Hafif-Orta Derece Azalmış", color: "text-amber-500", bg: "bg-amber-50" };
    if (val >= 30) return { stage: "Evre 3b", desc: "Orta-Ağır Derece Azalmış", color: "text-orange-500", bg: "bg-orange-50" };
    if (val >= 15) return { stage: "Evre 4", desc: "Ağır Derece Azalmış", color: "text-rose-500", bg: "bg-rose-50" };
    return { stage: "Evre 5", desc: "Böbrek Yetmezliği (ESRD)", color: "text-red-600", bg: "bg-red-50" };
  };

  return (
    <main className="min-h-screen bg-[#F8FAFC] p-6 md:p-12">
      <div className="max-w-2xl mx-auto">
        <Link href="/dashboard" className="flex items-center gap-2 text-slate-400 font-bold mb-8 hover:text-blue-600 transition-all">
          <ArrowLeft size={18} /> Geri Dön
        </Link>

        <div className="bg-white rounded-[2.5rem] border border-slate-200 shadow-xl overflow-hidden">
          <div className="p-8 bg-slate-900 text-white">
            <div className="flex items-center gap-4 mb-4">
              <div className="w-12 h-12 bg-blue-500 rounded-2xl flex items-center justify-center">
                <Calculator size={24} />
              </div>
              <h1 className="text-3xl font-black tracking-tight">GFR Hesaplayıcı</h1>
            </div>
            <p className="text-slate-400 font-bold text-sm">CKD-EPI 2021 Denklemi (Irk faktörü içermez)</p>
          </div>

          <div className="p-8 space-y-6">
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-2">
                <label className="text-xs font-black uppercase text-slate-400 ml-2">Yaş</label>
                <input 
                  type="number" 
                  value={age}
                  onChange={(e) => setAge(Number(e.target.value))}
                  placeholder="Örn: 45"
                  className="w-full bg-slate-50 border border-slate-200 p-4 rounded-2xl outline-none focus:ring-2 focus:ring-blue-500 font-bold"
                />
              </div>
              <div className="space-y-2">
                <label className="text-xs font-black uppercase text-slate-400 ml-2">Cinsiyet</label>
                <div className="flex bg-slate-50 p-1 rounded-2xl border border-slate-200">
                  <button 
                    onClick={() => setGender("male")}
                    className={`flex-1 py-3 rounded-xl font-black text-sm transition-all ${gender === "male" ? "bg-white shadow-sm text-blue-600" : "text-slate-400"}`}
                  >Erkek</button>
                  <button 
                    onClick={() => setGender("female")}
                    className={`flex-1 py-3 rounded-xl font-black text-sm transition-all ${gender === "female" ? "bg-white shadow-sm text-blue-600" : "text-slate-400"}`}
                  >Kadın</button>
                </div>
              </div>
            </div>

            <div className="space-y-2">
              <label className="text-xs font-black uppercase text-slate-400 ml-2">Serum Kreatinin (mg/dL)</label>
              <div className="relative">
                <input 
                  type="number" 
                  step="0.1"
                  value={creatinine}
                  onChange={(e) => setCreatinine(Number(e.target.value))}
                  placeholder="Örn: 1.2"
                  className="w-full bg-slate-50 border border-slate-200 p-4 rounded-2xl outline-none focus:ring-2 focus:ring-blue-500 font-bold"
                />
                <Beaker className="absolute right-4 top-4 text-slate-300" />
              </div>
            </div>

            <button 
              onClick={calculateGFR}
              className="w-full py-5 bg-blue-600 text-white rounded-[2rem] font-black text-xl hover:scale-[1.02] transition-all shadow-lg shadow-blue-100"
            >
              Hesapla
            </button>

            {result !== null && (
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className={`mt-8 p-8 rounded-[2.5rem] border ${getStage(result).bg} ${getStage(result).color.replace('text', 'border')}`}
              >
                <div className="flex justify-between items-start mb-4">
                  <div>
                    <h3 className="text-sm font-black uppercase tracking-widest opacity-60">eGFR Sonucu</h3>
                    <div className="text-6xl font-black leading-none mt-2">
                      {result} <span className="text-base">ml/min/1.73m²</span>
                    </div>
                  </div>
                  <CheckCircle2 size={40} />
                </div>
                
                <div className={`inline-block px-4 py-2 rounded-xl font-black text-sm mb-4 ${getStage(result).color} bg-white shadow-sm`}>
                  {getStage(result).stage}
                </div>
                <p className="font-bold text-slate-700 leading-relaxed">
                  {getStage(result).desc}. Klinik tablo ve diğer lab değerleriyle birlikte değerlendirilmelidir.
                </p>
              </motion.div>
            )}

            <div className="flex gap-3 p-4 bg-amber-50 rounded-2xl border border-amber-100">
              <AlertTriangle className="text-amber-500 shrink-0" size={20} />
              <p className="text-[10px] font-bold text-amber-800 leading-tight">
                NOT: Bu hesaplama yetişkinler içindir. Akut böbrek hasarı (AKI) durumlarında eGFR, gerçek renal fonksiyonu yansıtmayabilir.
              </p>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
