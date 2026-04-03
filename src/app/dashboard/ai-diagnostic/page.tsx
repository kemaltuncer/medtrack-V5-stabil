"use client";
import { ClipboardCheck } from "lucide-react";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { 
  BrainCircuit, Search, Plus, Activity, 
  ChevronRight, AlertCircle, ShieldCheck, 
  Stethoscope, FileText, Share2, Printer, 
  ArrowLeft, Microscope
} from "lucide-react";
import Link from "next/link";

export default function AIDiagnostic() {
  const [analyzing, setAnalyzing] = useState(false);
  const [results, setResults] = useState(false);

  const startAnalysis = () => {
    setAnalyzing(true);
    setTimeout(() => {
      setAnalyzing(false);
      setResults(true);
    }, 2500);
  };

  return (
    <main className="min-h-screen bg-white text-slate-900 p-6 md:p-12">
      
      {/* ÜST NAVİGASYON */}
      <header className="max-w-6xl mx-auto flex justify-between items-center mb-12">
        <Link href="/dashboard" className="flex items-center gap-2 text-slate-400 font-bold hover:text-blue-600 transition-all">
          <ArrowLeft size={20} /> Dashboard'a Dön
        </Link>
        <div className="flex gap-3">
          <button className="p-3 bg-slate-50 rounded-2xl text-slate-400 hover:text-slate-900 transition-all"><Share2 size={20}/></button>
          <button className="p-3 bg-slate-50 rounded-2xl text-slate-400 hover:text-slate-900 transition-all"><Printer size={20}/></button>
        </div>
      </header>

      <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12">
        
        {/* SOL KOLON: VERİ GİRİŞİ */}
        <div className="lg:col-span-5 space-y-8">
          <div>
            <div className="w-16 h-16 bg-blue-600 rounded-2xl flex items-center justify-center text-white shadow-xl shadow-blue-200 mb-6">
              <BrainCircuit size={32} />
            </div>
            <h1 className="text-5xl font-black tracking-tighter mb-4">Diagnostic<br/><span className="text-blue-600 underline decoration-blue-100">Engine.</span></h1>
            <p className="text-slate-400 font-bold">Klinik verileri, anamnez notlarını veya tetkik sonuçlarını girerek derin analizi başlat.</p>
          </div>

          <div className="space-y-4">
            <div className="p-6 bg-slate-50 rounded-[2rem] border border-slate-100">
              <label className="text-xs font-black uppercase text-slate-400 tracking-widest block mb-4">Semptomlar & Klinik Bulgular</label>
              <textarea 
                placeholder="Örn: 45 yaş, erkek, 2 saattir devam eden substernal baskı tarzı ağrı, sol kola yayılım mevcut..."
                className="w-full bg-transparent border-none outline-none font-medium text-lg min-h-[150px] resize-none"
              />
            </div>
            
            <div className="flex gap-4">
               <button className="flex-1 p-4 bg-white border border-slate-200 rounded-2xl font-bold flex items-center justify-center gap-2 hover:bg-slate-50 transition-all">
                  <Plus size={18} /> Lab Sonucu Ekle
               </button>
               <button className="flex-1 p-4 bg-white border border-slate-200 rounded-2xl font-bold flex items-center justify-center gap-2 hover:bg-slate-50 transition-all">
                  <Microscope size={18} /> Görüntüleme Ekle
               </button>
            </div>

            <button 
              onClick={startAnalysis}
              disabled={analyzing}
              className="w-full p-6 bg-blue-600 text-white rounded-[2rem] font-black text-xl shadow-2xl shadow-blue-200 hover:scale-[1.02] transition-all flex items-center justify-center gap-4"
            >
              {analyzing ? "Nöral Ağlar Taranıyor..." : "Analizi Başlat"} 
              {!analyzing && <ChevronRight />}
            </button>
          </div>
        </div>

        {/* SAĞ KOLON: ANALİZ SONUCU */}
        <div className="lg:col-span-7">
          <AnimatePresence mode="wait">
            {!analyzing && !results && (
              <motion.div 
                initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
                className="h-full min-h-[500px] border-4 border-dashed border-slate-100 rounded-[3rem] flex flex-col items-center justify-center text-slate-300 p-12 text-center"
              >
                <Stethoscope size={80} className="mb-6 opacity-20" />
                <p className="text-xl font-bold max-w-xs uppercase tracking-tighter">Analiz sonuçlarını görmek için veri girişi yapın.</p>
              </motion.div>
            )}

            {analyzing && (
              <motion.div 
                initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
                className="h-full min-h-[500px] bg-slate-900 rounded-[3rem] flex flex-col items-center justify-center text-blue-400 p-12 overflow-hidden relative"
              >
                <motion.div 
                  animate={{ scale: [1, 1.2, 1], opacity: [0.3, 0.6, 0.3] }}
                  transition={{ repeat: Infinity, duration: 2 }}
                  className="absolute inset-0 bg-blue-500/10 radial-gradient"
                />
                <Activity size={60} className="mb-6 animate-pulse" />
                <p className="font-mono text-sm tracking-widest uppercase">Literatür Taranıyor...</p>
                <div className="mt-8 w-48 h-1 bg-white/10 rounded-full overflow-hidden">
                   <motion.div initial={{ x: -200 }} animate={{ x: 200 }} transition={{ repeat: Infinity, duration: 1.5 }} className="w-1/2 h-full bg-blue-500 shadow-[0_0_15px_blue]" />
                </div>
              </motion.div>
            )}

            {results && (
              <motion.div 
                initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }}
                className="space-y-6"
              >
                {/* ANA TANI KARTI */}
                <div className="p-8 bg-blue-50 border-2 border-blue-100 rounded-[3rem]">
                   <div className="flex justify-between items-center mb-6">
                      <span className="px-4 py-1 bg-blue-600 text-white rounded-full text-[10px] font-black uppercase tracking-widest">Olası Tanı</span>
                      <span className="font-black text-blue-600">Güven Skoru: %92</span>
                   </div>
                   <h3 className="text-4xl font-black text-slate-900 mb-4 tracking-tight">Akut Myokard Enfarktüsü (STEMI)</h3>
                   <p className="text-slate-600 font-medium leading-relaxed">
                     Bulgular substernal ağrı ve yayılım ile tipik anjina karakterindedir. Acil EKG ve Troponin takibi, eş zamanlı anjiyografi hazırlığı önerilir.
                   </p>
                </div>

                {/* AYIRICI TANI LİSTESİ */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                   <ResultItem title="Aort Disseksiyonu" probability="%4" color="bg-rose-50" />
                   <ResultItem title="Pulmoner Embolizm" probability="%3" color="bg-amber-50" />
                   <ResultItem title="Gastroözofageal Reflü" probability="%1" color="bg-slate-50" />
                </div>

                {/* AKSİYON PLANI */}
                <div className="p-8 bg-white border border-slate-100 rounded-[3rem] shadow-xl">
                   <h4 className="font-black text-xl mb-6 flex items-center gap-2">
                     <ClipboardCheck className="text-blue-600" /> Önerilen Tetkikler
                   </h4>
                   <div className="space-y-3">
                      <ActionStep text="12 Derivasyonlu EKG çekimi (Hemen)" />
                      <ActionStep text="Kardiyak Enzim Takibi (0. ve 3. saat)" />
                      <ActionStep text="PA Akciğer Grafisi (Ayırıcı tanı için)" />
                   </div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </main>
  );
}

// YARDIMCI BİLEŞENLER
function ResultItem({ title, probability, color }: any) {
  return (
    <div className={`p-6 ${color} rounded-[2rem] border border-black/5`}>
      <p className="text-xs font-black uppercase opacity-40 mb-1">Diferansiyel Tanı</p>
      <div className="flex justify-between items-end">
        <span className="font-black text-lg">{title}</span>
        <span className="font-bold text-sm opacity-60">{probability}</span>
      </div>
    </div>
  );
}

function ActionStep({ text }: any) {
  return (
    <div className="flex items-center gap-4 p-4 bg-slate-50 rounded-2xl">
      <div className="w-6 h-6 bg-white border border-slate-200 rounded-full flex items-center justify-center">
         <div className="w-2 h-2 bg-blue-600 rounded-full" />
      </div>
      <span className="font-bold text-slate-700">{text}</span>
    </div>
  );
}
