"use client";

import React, { useState } from "react";
import { useParams, useRouter } from "next/navigation";
import { ArrowLeft, Calculator as CalcIcon, AlertCircle, Info, ClipboardList } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { CALCULATORS } from "../../../../data/calculators";

export default function MasterCalculator() {
  const { id } = useParams();
  const router = useRouter();
  const data = CALCULATORS[id as string];
  
  const [vals, setVals] = useState<any>({});
  const [res, setRes] = useState<any>(null);

  if (!data) return <div className="p-20 text-center font-black">Modül bulunamadı!</div>;

  const calculate = () => {
    const result = data.formula(vals);
    setRes(result);
  };

  const insight = res !== null && data.interpret ? data.interpret(Number(res)) : null;

  return (
    <main className="min-h-screen bg-[#F8FAFC] p-6 md:p-12">
      <div className="max-w-2xl mx-auto">
        <button onClick={() => router.back()} className="flex items-center gap-2 text-slate-400 font-black mb-8 hover:text-blue-600 transition-all">
          <ArrowLeft size={20} /> Geri Dön
        </button>

        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="bg-white rounded-[3rem] shadow-2xl border border-slate-100 overflow-hidden">
          <div className="p-10 bg-slate-900 text-white flex items-center gap-6">
            <div className="w-16 h-16 bg-blue-500 rounded-[1.5rem] flex items-center justify-center shadow-lg"><CalcIcon size={32} /></div>
            <div>
              <h1 className="text-3xl font-black">{data.title}</h1>
              <p className="text-blue-400 text-[10px] font-black uppercase tracking-widest">{data.desc}</p>
            </div>
          </div>

          <div className="p-10 space-y-8">
            {data.inputs.map((input: any) => (
              <div key={input.id} className="space-y-3">
                <label className="text-[11px] font-black uppercase text-slate-400 ml-2">{input.label}</label>
                {input.options ? (
                  <select onChange={(e) => setVals({...vals, [input.id]: Number(e.target.value)})} className="w-full bg-slate-50 border-2 border-slate-100 p-5 rounded-2xl font-bold outline-none focus:border-blue-500 appearance-none">
                    <option value="">Seçiniz...</option>
                    {input.options.map((opt: string, idx: number) => <option key={idx} value={opt.match(/\((.*?)\)/)?.[1] || idx}>{opt}</option>)}
                  </select>
                ) : (
                  <input type="number" placeholder="0" onChange={(e) => setVals({...vals, [input.id]: Number(e.target.value)})} className="w-full bg-slate-50 border-2 border-slate-100 p-5 rounded-2xl font-bold outline-none focus:border-blue-500" />
                )}
              </div>
            ))}

            <button onClick={calculate} className="w-full py-6 bg-blue-600 text-white rounded-[2rem] font-black text-2xl hover:scale-[1.02] transition-all shadow-xl">Hesapla</button>

            <AnimatePresence>
              {res !== null && (
                <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="mt-8 space-y-6">
                  <div className="p-10 bg-blue-50 rounded-[2.5rem] border-2 border-blue-100 text-center">
                    <p className="text-xs font-black text-blue-400 uppercase tracking-widest mb-2">Sonuç</p>
                    <div className="text-7xl font-black text-blue-600">{res} <span className="text-xl opacity-60">{data.unit}</span></div>
                  </div>

                  {insight && (
                    <div className="bg-white rounded-[2.5rem] border-2 border-slate-100 p-8 space-y-6 shadow-sm">
                      <div className="flex items-center gap-3 border-b border-slate-100 pb-4">
                        <ClipboardList className="text-blue-600" size={24} />
                        <h3 className="text-xl font-black text-slate-800">Klinik Değerlendirme</h3>
                      </div>
                      
                      <div className="space-y-4">
                        <div className="flex gap-4">
                          <div className={`w-2 h-2 rounded-full mt-2 shrink-0 ${insight.color.replace('text', 'bg')}`} />
                          <p className="text-slate-700 font-bold leading-relaxed"><span className="font-black text-slate-900">Durum:</span> {insight.status}</p>
                        </div>
                        <div className="flex gap-4">
                          <div className="w-2 h-2 rounded-full mt-2 shrink-0 bg-blue-500" />
                          <p className="text-slate-700 font-bold leading-relaxed"><span className="font-black text-slate-900">Eylem:</span> {insight.action}</p>
                        </div>
                        <div className="flex gap-4">
                          <div className="w-2 h-2 rounded-full mt-2 shrink-0 bg-slate-300" />
                          <p className="text-slate-700 font-bold leading-relaxed"><span className="font-black text-slate-900">Takip:</span> {insight.followup}</p>
                        </div>
                      </div>
                    </div>
                  )}
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </motion.div>
      </div>
    </main>
  );
}
