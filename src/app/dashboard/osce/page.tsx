"use client";
const formatTime = (s) => { const m = Math.floor(s / 60); const ss = s % 60; return `${m}:${ss.toString().padStart(2, "0")}`; };
import React, { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { 
  Timer, User, ChevronRight, FlaskConical, Play, Clock, 
  Mic, Send, Volume2, AlertCircle, Search, CheckCircle2, 
  X, Filter, Stethoscope, ClipboardList, BookOpen, Sparkles,
  Activity, Brain, ArrowLeft, Layers
} from "lucide-react";

// --- DINAMIK VAKA VERI TABANI (ADMIN PANELINDEN GELECEK YAPI) ---
const READY_CASES = [
  {
    id: "case_001",
    title: "Akut Nefritik Sendrom",
    patientName: "Mehmet Y.",
    age: 45,
    difficulty: "Orta",
    category: "Nefroloji",
    description: "Hematüri ve ödem şikayetiyle başvuran erkek hasta.",
    initialComplaint: "Merhaba doktor bey, idrarım çay rengi gibi ve yüzüm çok şiş... Yaklaşık 2 hafta önce boğazım çok ağrımıştı.",
    findings: {
      ta: "165/105 mmHg",
      pulse: "88/dk",
      edema: "Pretibial (+/+) gode bırakan",
      others: "AC bazallerde hafif raller"
    },
    results: {
      "Hemogram": "Hb: 12.5, WBC: 9.800, PLT: 250.000",
      "Kreatinin": "1.8 mg/dL (Yüksek)",
      "Bun": "42 mg/dL (Yüksek)",
      "Tam İdrar Tetkiki (TİT)": "Protein: +++, Kan: +++, Görünüm: Çay rengi",
      "ASO": "640 IU/mL (Yüksek)",
      "C3": "42 mg/dL (Düşük)",
      "ÜRİNER SİSTEM US": "Böbrek boyutları normalin üst sınırında, ekojenite artmış."
    }
  },
  {
    id: "case_002",
    title: "Akut Koroner Sendrom",
    patientName: "Ahmet K.",
    age: 58,
    difficulty: "Zor",
    category: "Kardiyoloji",
    description: "Göğüs ağrısı ve soğuk terleme ile acil servise başvuru.",
    initialComplaint: "Doktor, göğsümün üzerine biri oturmuş gibi... Sol koluma doğru bir uyuşma var.",
    findings: {
      ta: "110/70 mmHg",
      pulse: "102/dk",
      edema: "Yok",
      others: "S4 duyuluyor, soğuk terleme mevcut"
    },
    results: {
      "Troponin I": "4.5 ng/mL (Çok Yüksek)",
      "EKG": "V1-V4 segmentinde ST elevasyonu mevcut.",
      "CK-MB": "45 U/L (Yüksek)",
      "AKCİĞER GRAFİSİ P.A.": "Normal sınırlarda."
    }
  }
];

const LAB_DATABASE = [
  { cat: "HEMATOLOJİ", items: ["Hemogram", "Sedimantasyon", "Periferik Yayma", "INR"] },
  { cat: "BİYOKİMYA", items: ["Glukoz", "Bun", "Kreatinin", "AST", "ALT", "Sodyum (NA)", "Potasyum (K)"] },
  { cat: "KARDİYAK", items: ["Troponin I", "CK-MB", "Miyoglobin"] },
  { cat: "İDRAR / GAİTA", items: ["Tam İdrar Tetkiki (TİT)", "İdrarda Protein (24 Saatlik)", "İdrar Mikroskopisi"] },
  { cat: "SEROLOJİ", items: ["ASO", "CRP", "C3", "C4", "ANA"] }
];

const IMAGING_DATABASE = [
  { cat: "RADYOLOJİ", items: ["AKCİĞER GRAFİSİ P.A.", "ÜRİNER SİSTEM US", "TÜM ABDOMEN US.", "EKG", "EKO", "BT, TORAKS"] }
];

type Step = 'welcome' | 'case_selection' | 'setup' | 'anamnez' | 'muayene' | 'ayirici_tani' | 'lab_panel' | 'final';

export default function OSCEPage() {
  const [step, setStep] = useState<Step>('welcome');
  const [mode, setMode] = useState<'ready' | 'personal' | null>(null);
  const [selectedCase, setSelectedCase] = useState<typeof READY_CASES[0] | null>(null);
  const [selectedDuration, setSelectedDuration] = useState(600);
  const [timeLeft, setTimeLeft] = useState(600);
  const [isStarted, setIsStarted] = useState(false);
  const [showConfirm, setShowConfirm] = useState(false);

  // Chat & Lab States
  const [messages, setMessages] = useState<any[]>([]);
  const [input, setInput] = useState("");
  const [search, setSearch] = useState("");
  const [selectedTests, setSelectedTests] = useState<string[]>([]);
  const [activeTab, setActiveTab] = useState<'lab' | 'imaging'>('lab');

  useEffect(() => {
    let timer: any;
    if (isStarted && timeLeft > 0) timer = setInterval(() => setTimeLeft(t => t - 1), 1000);
    return () => clearInterval(timer);
  }, [isStarted, timeLeft]);

  const handleCaseSelect = (vaka: typeof READY_CASES[0]) => {
    setSelectedCase(vaka);
    setMessages([{ role: 'patient', text: vaka.initialComplaint }]);
    setStep('setup');
  };

  return (
    <main className="min-h-screen bg-[#020408] text-white p-8 font-sans">
      <div className="max-w-7xl mx-auto">
        <AnimatePresence mode="wait">
          
          {/* STEP 0: HOŞGELDİN */}
          {step === 'welcome' && (
            <motion.div key="welcome" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, scale: 0.95 }} className="max-w-4xl mx-auto mt-16 text-center">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 text-[10px] font-black uppercase tracking-[0.3em] mb-8">
                <Sparkles size={14}/> OSCE Simülatörü V5
              </div>
              <h1 className="text-5xl font-black mb-16 italic tracking-tighter uppercase">Nasıl çalışmak istersin?</h1>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <button onClick={() => { setMode('ready'); setStep('case_selection'); }} className="group relative p-10 bg-white/[0.02] border border-white/5 rounded-[3.5rem] text-left hover:border-cyan-500/50 hover:bg-white/[0.04] transition-all">
                   <div className="w-16 h-16 bg-cyan-500/10 rounded-2xl flex items-center justify-center text-cyan-400 mb-8 border border-cyan-500/20"><BookOpen size={32} /></div>
                   <h3 className="text-2xl font-black mb-3 uppercase italic">Hazır Provalar</h3>
                   <p className="text-slate-500 font-bold text-sm leading-relaxed">Sistemdeki vakalarla çalış.</p>
                </button>
                <button onClick={() => { setMode('personal'); setStep('setup'); }} className="group relative p-10 bg-white/[0.02] border border-white/5 rounded-[3.5rem] text-left hover:border-emerald-500/50 hover:bg-white/[0.04] transition-all">
                   <div className="w-16 h-16 bg-emerald-500/10 rounded-2xl flex items-center justify-center text-emerald-400 mb-8 border border-emerald-500/20"><ClipboardList size={32} /></div>
                   <h3 className="text-2xl font-black mb-3 uppercase italic">Kendi Kaynağım</h3>
                   <p className="text-slate-500 font-bold text-sm leading-relaxed">PDF yükle ve sınava başla.</p>
                </button>
              </div>
            </motion.div>
          )}

          {/* STEP 0.5: PROVA SEÇME EKRANI */}
          {step === 'case_selection' && (
            <motion.div key="selection" initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -20 }} className="max-w-5xl mx-auto mt-12">
              <button onClick={() => setStep('welcome')} className="flex items-center gap-2 text-slate-500 font-black text-[10px] uppercase tracking-widest mb-8 hover:text-white transition-colors">
                <ArrowLeft size={14}/> Geri Dön
              </button>
              <h2 className="text-4xl font-black mb-12 italic uppercase tracking-tighter">Bir Vaka Seç</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {READY_CASES.map((vaka) => (
                  <button key={vaka.id} onClick={() => handleCaseSelect(vaka)} className="group p-8 bg-white/[0.02] border border-white/5 rounded-[2.5rem] text-left hover:border-cyan-500/30 hover:bg-white/[0.04] transition-all flex flex-col justify-between h-[280px]">
                    <div>
                      <div className="flex justify-between items-start mb-6">
                        <span className="px-4 py-1.5 rounded-full bg-cyan-500/10 text-cyan-400 text-[10px] font-black uppercase tracking-widest border border-cyan-500/20">{vaka.category}</span>
                        <span className={`text-[10px] font-black uppercase tracking-widest ${vaka.difficulty === 'Zor' ? 'text-rose-500' : 'text-emerald-500'}`}>{vaka.difficulty}</span>
                      </div>
                      <h3 className="text-2xl font-black mb-2 uppercase italic group-hover:text-cyan-400 transition-colors">{vaka.title}</h3>
                      <p className="text-slate-500 font-bold text-sm leading-relaxed line-clamp-2">{vaka.description}</p>
                    </div>
                    <div className="flex items-center gap-2 text-[10px] font-black uppercase tracking-widest text-white/20 group-hover:text-white transition-all">
                      Provayı Başlat <ChevronRight size={14}/>
                    </div>
                  </button>
                ))}
              </div>
            </motion.div>
          )}

          {/* STEP 1: SETUP VE HUKUKİ ONAY */}
          {step === 'setup' && (
            <motion.div key="setup" initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0, scale: 0.95 }} className="max-w-xl mx-auto mt-10">
              
              {/* HUKUKİ UYARI KARTI */}
              <div className="p-8 bg-rose-500/5 border border-rose-500/20 rounded-[2.5rem] mb-8 relative overflow-hidden">
                <div className="absolute top-0 right-0 p-6 opacity-10 text-rose-500"><AlertCircle size={80}/></div>
                <h3 className="text-rose-500 font-black text-xs uppercase tracking-[0.3em] mb-4 flex items-center gap-2">
                   <AlertCircle size={16}/> Önemli Hukuki Uyarı ve Feragatname
                </h3>
                <div className="space-y-4 text-xs font-bold text-slate-400 leading-relaxed">
                  <p>• Bu uygulama sadece <span className="text-white">tıbbi eğitim amaçlı</span> bir simülasyon aracıdır. Gerçek teşhis veya tedavi süreçlerinde kullanılamaz.</p>
                  <p>• Yapay zeka tarafından üretilen içerikler, yüklediğiniz dosyalardaki verileri yorumlarken <span className="text-white">hata yapabilir, yanlış veya eksik bilgi sunabilir.</span></p>
                  <p>• Uygulamanın kullanımıyla alınan kararların sorumluluğu tamamen kullanıcıya aittir. Meditrack, klinik hatalardan sorumlu tutulamaz.</p>
                </div>
                <div className="mt-8 flex items-center gap-3">
                  <input type="checkbox" id="legal-check" className="w-5 h-5 rounded-lg accent-rose-500 bg-white/5 border-white/10" />
                  <label htmlFor="legal-check" className="text-[10px] font-black uppercase text-slate-300 cursor-pointer">Yukarıdaki şartları okudum ve kabul ediyorum.</label>
                </div>
              </div>

              {/* PDF İŞLEME / ÖĞRENME ALANI (SADECE PERSONAL MODDA GÖRÜNÜR) */}
              {mode === 'personal' && (
                <div className="p-10 bg-white/[0.02] border border-white/5 rounded-[3rem] mb-8 text-center border-dashed border-cyan-500/30">
                  <div className="w-16 h-16 bg-cyan-500/10 rounded-2xl flex items-center justify-center text-cyan-400 mx-auto mb-6">
                    <Layers size={32} className="animate-pulse" />
                  </div>
                  <h4 className="text-xl font-black mb-2 italic uppercase">Kaynağı Yapay Zekaya Öğret</h4>
                  <p className="text-slate-500 text-xs font-bold mb-8">PDF içeriği Supabase'e aktarılacak ve vaka buna göre şekillenecektir.</p>
                  <button className="px-8 py-3 bg-cyan-500/10 border border-cyan-500/30 text-cyan-400 rounded-xl font-black text-[10px] uppercase tracking-widest hover:bg-cyan-500 hover:text-black transition-all">
                    Veriyi Senkronize Et
                  </button>
                </div>
              )}

              {/* SÜRE SEÇİMİ VE BAŞLATMA */}
              <div className="p-10 bg-white/[0.02] border border-white/5 rounded-[3rem] text-center">
                <h2 className="text-2xl font-black mb-8 uppercase italic tracking-tighter">İstasyon Süresi</h2>
                <div className="grid grid-cols-3 gap-4 mb-10">
                  {[300, 600, 900].map(s => (
                    <button key={s} onClick={() => setSelectedDuration(s)} className={`py-4 rounded-2xl font-black border transition-all ${selectedDuration === s ? "bg-white border-white text-black shadow-2xl" : "bg-white/5 border-white/5 text-slate-500"}`}>{s/60} DK</button>
                  ))}
                </div>
                <button 
                  onClick={() => { 
                    const check = document.getElementById('legal-check') as HTMLInputElement;
                    if(!check?.checked) return alert("Devam etmek için hukuki uyarıyı onaylamalısınız.");
                    setTimeLeft(selectedDuration); 
                    setIsStarted(true); 
                    setStep('anamnez'); 
                  }} 
                  className="w-full py-6 bg-cyan-500 text-black rounded-3xl font-black uppercase shadow-xl shadow-cyan-500/10 hover:scale-[1.02] transition-transform"
                >
                  Sınavı Başlat
                </button>
              </div>
            </motion.div>
          )}

          {/* AKTİF SÜREÇ PANELİ */}
          {step !== 'welcome' && step !== 'case_selection' && step !== 'setup' && (
            <motion.div key="active" initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="flex flex-col gap-6">
              
              {/* ÜST BİLGİ BARI */}
              <div className="flex justify-between items-center p-6 bg-white/[0.02] border border-white/5 rounded-3xl backdrop-blur-xl">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-2xl bg-cyan-500/10 flex items-center justify-center text-cyan-400">
                    <User size={20}/>
                  </div>
                  <div>
                    <h1 className="font-black text-xl italic uppercase tracking-tight">
                      {selectedCase?.patientName || "Kişisel Vaka"} <span className="text-cyan-500 font-normal ml-2">{selectedCase?.age || "--"} YAŞ</span>
                    </h1>
                    <p className="text-[10px] text-slate-500 font-black uppercase tracking-[0.2em]">{selectedCase?.title || "Özel Senaryo"}</p>
                  </div>
                </div>
                <div className={`px-8 py-3 bg-black border border-white/10 rounded-2xl font-mono text-3xl ${timeLeft < 60 ? "text-rose-500 animate-pulse" : "text-cyan-400"}`}>
                  {formatTime(timeLeft)}
                </div>
              </div>

              {/* STEP 2: ANAMNEZ */}
              {step === 'anamnez' && (
                <div className="flex flex-col h-[600px] gap-4">
                  <div className="flex-1 overflow-y-auto p-10 bg-white/[0.02] border border-white/5 rounded-[3rem] space-y-6 custom-scrollbar">
                    {messages.map((m, i) => (
                      <div key={i} className={`flex ${m.role === 'user' ? 'justify-end' : 'justify-start'}`}>
                        <div className={`max-w-[75%] p-5 rounded-3xl text-sm font-bold leading-relaxed shadow-sm ${m.role === 'user' ? 'bg-cyan-500 text-black rounded-tr-none' : 'bg-white/5 text-slate-300 rounded-tl-none border border-white/5'}`}>
                          {m.text}
                        </div>
                      </div>
                    ))}
                  </div>
                  <div className="flex gap-3 p-3 bg-white/5 rounded-[2.5rem] border border-white/10">
                    <input 
                      value={input} 
                      onChange={e => setInput(e.target.value)} 
                      placeholder="Hastaya sorunuz..." 
                      className="flex-1 bg-transparent px-6 outline-none font-bold text-sm" 
                    />
                    <button onClick={() => {setMessages([...messages, {role:'user', text:input}, {role:'patient', text: "Gerçekten halsizim doktor bey."}]); setInput("");}} className="w-14 h-14 bg-cyan-500 rounded-full flex items-center justify-center text-black shadow-lg"><Send size={20}/></button>
                  </div>
                  <button onClick={() => setShowConfirm(true)} className="ml-auto px-12 py-5 bg-white text-black rounded-full font-black text-xs uppercase tracking-widest mt-2">Muayeneye Geç</button>
                </div>
              )}

              {/* STEP 3: FİZİK MUAYENE */}
              {step === 'muayene' && (
                <div className="p-12 bg-white/[0.02] border border-white/5 rounded-[3.5rem] text-center">
                  <Stethoscope size={48} className="mx-auto mb-8 text-rose-500 opacity-50" />
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
                    <div className="p-10 bg-white/5 border border-white/10 rounded-[2.5rem] text-left">
                      <p className="text-[10px] font-black text-slate-500 uppercase mb-4 tracking-widest italic">Vital Bulgular</p>
                      <p className="text-2xl font-black italic">TA: {selectedCase?.findings.ta || "---"}</p>
                      <p className="text-sm font-bold text-slate-400 mt-2">Nabız: {selectedCase?.findings.pulse || "---"}</p>
                    </div>
                    <div className="p-10 bg-white/5 border border-white/10 rounded-[2.5rem] text-left">
                      <p className="text-[10px] font-black text-slate-500 uppercase mb-4 tracking-widest italic">Önemli Bulgular</p>
                      <p className="text-2xl font-black italic uppercase">ÖDEM: {selectedCase?.findings.edema || "---"}</p>
                      <p className="text-sm font-bold text-slate-400 mt-2">{selectedCase?.findings.others || "Ek bulgu yok."}</p>
                    </div>
                  </div>
                  <button onClick={() => setStep('ayirici_tani')} className="mt-16 px-16 py-6 bg-white text-black rounded-full font-black uppercase text-sm tracking-widest shadow-xl">Ayırıcı Tanıya Geç</button>
                </div>
              )}

              {/* STEP 4: AYIRICI TANI */}
              {step === 'ayirici_tani' && (
                <div className="p-12 bg-white/[0.02] border border-white/5 rounded-[3.5rem]">
                  <textarea className="w-full h-64 bg-white/5 border border-white/10 rounded-[2.5rem] p-10 text-xl font-bold outline-none" placeholder="Ön tanılarınızı yazın..." />
                  <button onClick={() => setStep('lab_panel')} className="w-full mt-8 py-6 bg-purple-500 text-black rounded-[2rem] font-black uppercase tracking-widest shadow-2xl">Laboratuvarı Aç</button>
                </div>
              )}

              {/* STEP 5: GELİŞMİŞ LAB & RADYOLOJİ PANELİ */}
              {step === 'lab_panel' && (
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 h-[700px]">
                  <div className="lg:col-span-5 p-8 bg-white/[0.02] border border-white/5 rounded-[3rem] flex flex-col overflow-hidden backdrop-blur-xl">
                    <div className="flex gap-2 mb-6 p-1 bg-white/5 rounded-2xl">
                      <button onClick={() => setActiveTab('lab')} className={`flex-1 py-3 rounded-xl font-black text-[10px] uppercase tracking-widest transition-all ${activeTab === 'lab' ? "bg-white text-black" : "text-slate-500"}`}>LABORATUVAR</button>
                      <button onClick={() => setActiveTab('imaging')} className={`flex-1 py-3 rounded-xl font-black text-[10px] uppercase tracking-widest transition-all ${activeTab === 'imaging' ? "bg-white text-black" : "text-slate-500"}`}>RADYOLOJİ</button>
                    </div>
                    <div className="relative mb-6">
                      <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-600" size={16}/>
                      <input value={search} onChange={e => setSearch(e.target.value)} placeholder="PDF içeriğinde ara..." className="w-full bg-white/5 border border-white/10 rounded-2xl py-4 pl-12 pr-4 outline-none font-bold text-sm" />
                    </div>
                    <div className="flex-1 overflow-y-auto space-y-8 pr-2 custom-scrollbar">
                      {(activeTab === 'lab' ? LAB_DATABASE : IMAGING_DATABASE).map(group => (
                        <div key={group.cat}>
                          <h4 className="text-[10px] font-black uppercase tracking-widest text-cyan-400/50 mb-4 ml-2">{group.cat}</h4>
                          <div className="grid gap-1">
                            {group.items.filter(i => i.toLowerCase().includes(search.toLowerCase())).map(item => (
                              <button key={item} onClick={() => !selectedTests.includes(item) && setSelectedTests([...selectedTests, item])} className={`p-4 rounded-xl text-left text-xs font-black border transition-all ${selectedTests.includes(item) ? "bg-cyan-500/10 border-cyan-500 text-cyan-400" : "bg-white/5 border-white/5 text-slate-500 hover:bg-white/10"}`}>{item}</button>
                            ))}
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                  <div className="lg:col-span-7 p-8 bg-white/[0.02] border border-white/5 rounded-[3rem] flex flex-col overflow-hidden backdrop-blur-xl">
                    <div className="flex-1 overflow-y-auto space-y-4 pr-2 custom-scrollbar">
                      {selectedTests.length === 0 ? (
                         <div className="h-full flex flex-col items-center justify-center opacity-10"><Filter size={80}/><p className="text-[10px] font-black uppercase tracking-[0.4em] mt-4">İSTEM BEKLENİYOR</p></div>
                      ) : (
                        [...selectedTests].reverse().map(test => (
                          <div key={test} className="p-6 bg-white/5 border border-white/10 rounded-[2rem]">
                             <div className="flex justify-between items-center mb-4"><h5 className="text-sm font-black italic">{test}</h5><button onClick={() => setSelectedTests(selectedTests.filter(t => t !== test))}><X size={16}/></button></div>
                             <div className={`p-5 rounded-2xl font-bold text-sm leading-relaxed ${selectedCase?.results[test] ? "bg-emerald-500/5 text-emerald-400 border border-emerald-500/20" : "bg-rose-500/5 text-rose-500 border border-rose-500/20"}`}>
                                {selectedCase?.results[test] || "Bu tetkik için vaka verisi bulunamadı."}
                             </div>
                          </div>
                        ))
                      )}
                    </div>
                    <button onClick={() => setStep('final')} className="w-full mt-6 py-6 bg-white text-black rounded-[2rem] font-black text-xs uppercase shadow-2xl">Sınavı Bitir</button>
                  </div>
                </div>
              )}

              {/* STEP 6: FINAL */}
              {step === 'final' && (
                <div className="max-w-2xl mx-auto w-full p-16 bg-white/[0.02] border border-white/5 rounded-[4rem] text-center shadow-3xl">
                  <CheckCircle2 size={80} className="mx-auto mb-10 text-emerald-500" />
                  <h2 className="text-4xl font-black mb-8 uppercase italic">Prova Bitti</h2>
                  <button onClick={() => { setStep('welcome'); setTimeLeft(600); setIsStarted(false); setSelectedTests([]); }} className="px-20 py-6 bg-white text-black rounded-full font-black uppercase text-sm tracking-widest shadow-xl">Başa Dön</button>
                </div>
              )}

            </motion.div>
          )}

        </AnimatePresence>

        {/* ONAY MODALI */}
        <AnimatePresence>
          {showConfirm && (
            <div className="fixed inset-0 z-[500] flex items-center justify-center bg-black/95 backdrop-blur-2xl">
              <div className="bg-[#0a0d14] border border-white/10 p-16 rounded-[4rem] text-center max-w-sm">
                <AlertCircle size={64} className="mx-auto mb-8 text-rose-500" />
                <h2 className="text-3xl font-black mb-12 uppercase italic">Emin misin?</h2>
                <div className="flex flex-col gap-4">
                  <button onClick={() => { setStep('muayene'); setShowConfirm(false); }} className="w-full py-6 bg-white text-black rounded-3xl font-black uppercase">Evet, Devam Et</button>
                  <button onClick={() => setShowConfirm(false)} className="w-full py-6 bg-white/5 text-slate-500 rounded-3xl font-black uppercase">Vazgeç</button>
                </div>
              </div>
            </div>
          )}
        </AnimatePresence>
      </div>
    </main>
  );
}
