const fs = require('fs');
const p = require('path').join(process.cwd(), 'src/app/setup/page.tsx');

const content = `"use client";
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Terminal, ArrowRight, CheckCircle2, ChevronLeft } from 'lucide-react';

export default function SetupWizard() {
  const [step, setStep] = useState(0);
  const [isBooting, setIsBooting] = useState(false);
  const [formData, setFormData] = useState({ role: '', specialty: '', goal: '', learningStyle: '', weakness: '', aiPersona: '', hours: 2 });

  const nextStep = () => setStep(s => s + 1);
  const prevStep = () => setStep(s => s - 1);

  // Görsel Veri Tabanı
  const data = {
    roles: [
      { id: 'Öğrenci', title: 'Tıp Öğrencisi', sub: 'Pre-Klinik (1-3)', img: 'https://images.unsplash.com/photo-1532938911079-1b06ac7ce122?q=80&w=500' },
      { id: 'Stajyer', title: 'Klinik Stajyer', sub: 'Klinik (4-5)', img: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?q=80&w=500' },
      { id: 'İntern', title: 'İntern Doktor', sub: 'Dönem 6', img: 'https://images.unsplash.com/photo-1584982751601-97d8c222085c?q=80&w=500' },
      { id: 'Hekim', title: 'Mezun Hekim', sub: 'Uzman / Pratisyen', img: 'https://images.unsplash.com/photo-1559839734-2b71ea197ec2?q=80&w=500' }
    ],
    specialties: [
      { id: 'Dahiliye', title: 'Dahili Bilimler', sub: 'İç Hastalıkları, Pediatri', img: 'https://images.unsplash.com/photo-1581594693702-fbdc51b2763b?q=80&w=500' },
      { id: 'Cerrahi', title: 'Cerrahi Bilimler', sub: 'Genel Cerrahi, KVC', img: 'https://images.unsplash.com/photo-1551076805-e1869043e560?q=80&w=500' },
      { id: 'Temel', title: 'Temel Bilimler', sub: 'Anatomi, Farmakoloji', img: 'https://images.unsplash.com/photo-1532094349884-543bc11b234d?q=80&w=500' },
      { id: 'Acil', title: 'Acil & Yoğun Bakım', sub: 'Travma, Kritik Hasta', img: 'https://images.unsplash.com/photo-1583324113626-70df0f4deaab?q=80&w=500' }
    ],
    learning: [
      { id: 'Vaka', title: 'Vaka Bazlı', sub: 'Senaryo Çözümü', img: 'https://images.unsplash.com/photo-1579684385127-1ef15d508118?q=80&w=500' },
      { id: 'Görsel', title: 'Görsel Algı', sub: 'Şema ve Tablolar', img: 'https://images.unsplash.com/photo-1555255707-c07966088b7b?q=80&w=500' },
      { id: 'Spot', title: 'Spot Bilgi', sub: 'Hap Notlar', img: 'https://images.unsplash.com/photo-1516321497487-e288fb19713f?q=80&w=500' },
      { id: 'Sokratik', title: 'Sokratik', sub: 'Soru-Cevap', img: 'https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=500' }
    ],
    weakness: [
      { id: 'Mekanizma', title: 'Temel Mekanizmalar', sub: 'Anatomi & Fizyoloji', img: 'https://images.unsplash.com/photo-1530213786676-4189f1756920?q=80&w=500' },
      { id: 'Farma', title: 'Farmakoloji', sub: 'İlaçlar & Dozlar', img: 'https://images.unsplash.com/photo-1587854692152-cbe660dbde88?q=80&w=500' },
      { id: 'Klinik', title: 'Klinik Algoritma', sub: 'Tanı & EKG', img: 'https://images.unsplash.com/photo-1505751172876-fa1923c5c528?q=80&w=500' }
    ],
    personas: [
      { id: 'Asistan', title: 'Destekleyici', sub: 'Sabırlı Asistan', img: 'https://images.unsplash.com/photo-1551836022-d5d88e9218df?q=80&w=500' },
      { id: 'Hoca', title: 'Acımasız Hoca', sub: 'Disiplinli', img: 'https://images.unsplash.com/photo-1537368910025-700350fe46c7?q=80&w=500' }
    ]
  };

  const dynamicGoals = formData.role === 'Öğrenci' ? [
    { id: 'Komite', title: 'Komite Canavarı', sub: 'Sınav odaklı' }, { id: 'USMLE', title: 'USMLE Temeli', sub: 'İngilizce & Step 1' }
  ] : formData.role === 'İntern' ? [
    { id: 'TUS', title: 'TUS Şampiyonu', sub: 'Zamana karşı' }, { id: 'Nöbet', title: 'Nöbet Survival', sub: 'Acil müdahale' }
  ] : [
    { id: 'OSCE', title: 'Klinik Beceri', sub: 'Sözlü & Vaka' }, { id: 'TUS', title: 'Uzmanlık Sınavı', sub: 'Test odaklı' }
  ];

  return (
    <main className="min-h-screen bg-black text-white relative flex items-center justify-center p-4 md:p-8 font-sans overflow-hidden">
      {/* Arka Plan Dev Görsel ve Blur Etkisi */}
      <div className="absolute inset-0 z-0">
        <img src="https://images.unsplash.com/photo-1579684385127-1ef15d508118?q=80&w=2000" className="w-full h-full object-cover opacity-30" alt="bg" />
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/80 to-black" />
      </div>

      {/* Ana Glassmorphism Panel */}
      <div className="relative z-10 w-full max-w-4xl bg-black/40 backdrop-blur-2xl border border-white/10 rounded-[3rem] p-8 md:p-14 shadow-2xl overflow-hidden flex flex-col min-h-[600px] justify-center">
        
        {/* Üst İlerleme Çubuğu */}
        {step > 0 && step < 8 && (
          <div className="absolute top-0 left-0 w-full h-1 bg-white/5">
            <motion.div animate={{ width: \`\${(step / 7) * 100}%\` }} className="h-full bg-blue-500 shadow-[0_0_15px_#3b82f6]" />
          </div>
        )}

        <AnimatePresence mode="wait">
          {/* STEP 0: HOŞ GELDİN */}
          {step === 0 && (
            <motion.div key="s0" initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0, scale: 0.95 }} className="text-center">
              <div className="w-20 h-20 bg-white/5 border border-white/10 rounded-full flex items-center justify-center mx-auto mb-8 backdrop-blur-md">
                <Terminal className="text-blue-400 w-8 h-8" />
              </div>
              <h1 className="text-5xl font-black mb-4 italic tracking-tighter">SPATIAL <span className="text-blue-500">CLINICAL.</span></h1>
              <p className="text-gray-400 font-medium mb-12 max-w-lg mx-auto">Sıradan formları unut. Bu 8 aşamalı görsel senkronizasyon, AI motorunu tamamen senin beynine göre şekillendirecek.</p>
              <button onClick={nextStep} className="px-12 py-5 bg-white text-black hover:bg-blue-600 hover:text-white rounded-full font-black uppercase text-xs tracking-widest transition-all duration-300">BAŞLAT</button>
            </motion.div>
          )}

          {/* DİNAMİK RESİMLİ ADIMLAR (Step 1, 2, 4, 5, 6) */}
          {[
            { s: 1, title: 'Klinik Rolün', key: 'role', data: data.roles },
            { s: 2, title: 'İlgi Alanın', key: 'specialty', data: data.specialties },
            { s: 4, title: 'Öğrenme Stilin', key: 'learningStyle', data: data.learning },
            { s: 5, title: 'Zayıf Halkan', key: 'weakness', data: data.weakness },
            { s: 6, title: 'AI Karakteri', key: 'aiPersona', data: data.personas }
          ].map((block) => step === block.s && (
            <motion.div key={\`step\${block.s}\`} initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -20 }} className="w-full">
              <h2 className="text-3xl font-black mb-8 text-center italic">{block.title}</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-10">
                {block.data.map((item) => (
                  <button 
                    key={item.id} 
                    onClick={() => setFormData({...formData, [block.key]: item.id})}
                    className={\`relative overflow-hidden rounded-3xl h-32 text-left group transition-all \${formData[block.key] === item.id ? 'ring-2 ring-blue-500 shadow-[0_0_30px_rgba(59,130,246,0.3)] scale-[1.02]' : 'ring-1 ring-white/10 hover:ring-white/30'}\`}
                  >
                    <img src={item.img} className="absolute inset-0 w-full h-full object-cover opacity-40 group-hover:opacity-60 transition-opacity duration-500" alt={item.title} />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent" />
                    <div className="absolute bottom-4 left-5 right-5 z-10">
                      <h4 className="text-lg font-black text-white mb-1">{item.title}</h4>
                      <p className="text-[10px] font-bold text-gray-400 uppercase tracking-widest">{item.sub}</p>
                    </div>
                    {formData[block.key] === item.id && <div className="absolute top-4 right-4"><CheckCircle2 className="text-blue-500 w-6 h-6" /></div>}
                  </button>
                ))}
              </div>
              <div className="flex justify-between items-center px-4">
                <button onClick={prevStep} className="text-gray-400 hover:text-white flex items-center gap-2 text-xs font-bold uppercase tracking-widest"><ChevronLeft className="w-4 h-4"/> Geri</button>
                <button onClick={nextStep} disabled={!formData[block.key]} className="px-8 py-4 bg-blue-600 rounded-full font-black uppercase text-[10px] tracking-widest disabled:opacity-20 hover:bg-blue-500 transition-all">İLERLE</button>
              </div>
            </motion.div>
          ))}

          {/* STEP 3: HEDEF (Resimsiz ama şık liste) */}
          {step === 3 && (
            <motion.div key="s3" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -20 }} className="w-full">
              <h2 className="text-3xl font-black mb-8 text-center italic">Ana Hedefin</h2>
              <div className="grid gap-4 mb-10">
                {dynamicGoals.map((g) => (
                  <button key={g.id} onClick={() => setFormData({...formData, goal: g.title})} className={\`p-6 rounded-3xl border flex justify-between items-center transition-all \${formData.goal === g.title ? 'bg-blue-600/20 border-blue-500 backdrop-blur-md' : 'bg-white/5 border-white/10 hover:bg-white/10'}\`}>
                    <div className="text-left">
                      <h4 className="text-lg font-black text-white">{g.title}</h4>
                      <p className="text-[10px] text-gray-400 uppercase tracking-widest">{g.sub}</p>
                    </div>
                    {formData.goal === g.title && <CheckCircle2 className="text-blue-500 w-6 h-6" />}
                  </button>
                ))}
              </div>
              <div className="flex justify-between items-center px-4">
                <button onClick={prevStep} className="text-gray-400 hover:text-white flex items-center gap-2 text-xs font-bold uppercase"><ChevronLeft className="w-4 h-4"/> Geri</button>
                <button onClick={nextStep} disabled={!formData.goal} className="px-8 py-4 bg-blue-600 rounded-full font-black uppercase text-[10px] disabled:opacity-20 hover:bg-blue-500">İLERLE</button>
              </div>
            </motion.div>
          )}

          {/* STEP 7: DOZAJ (Saat) */}
          {step === 7 && (
             <motion.div key="s7" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -20 }} className="w-full text-center">
              <h2 className="text-3xl font-black mb-10 italic">Kapasite / Dozaj</h2>
              <div className="p-10 bg-white/5 border border-white/10 rounded-[3rem] mb-10 backdrop-blur-sm">
                <input type="range" min="1" max="12" step="1" value={formData.hours} onChange={e => setFormData({...formData, hours: e.target.value})} className="w-full h-2 bg-white/20 rounded-lg appearance-none cursor-pointer mb-8" />
                <div className="text-8xl font-black text-white">{formData.hours} <span className="text-2xl text-blue-500">Saat</span></div>
              </div>
              <div className="flex justify-between items-center px-4">
                <button onClick={prevStep} className="text-gray-400 hover:text-white flex items-center gap-2 text-xs font-bold uppercase"><ChevronLeft className="w-4 h-4"/> Geri</button>
                <button onClick={nextStep} className="px-8 py-4 bg-blue-600 rounded-full font-black uppercase text-[10px] hover:bg-blue-500">ONAYLA</button>
              </div>
            </motion.div>
          )}

          {/* STEP 8: FINAL BOOT */}
          {step === 8 && (
            <motion.div key="s8" initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} className="w-full text-center">
              {!isBooting ? (
                <>
                  <div className="w-24 h-24 bg-emerald-500/20 text-emerald-400 flex items-center justify-center rounded-full mx-auto mb-8"><CheckCircle2 size={48}/></div>
                  <h1 className="text-5xl font-black mb-4 italic uppercase">SİSTEM <span className="text-emerald-400">HAZIR.</span></h1>
                  <p className="text-gray-400 font-medium mb-10">Tüm klinik verilerin şifrelendi. Algoritman derlenmeye hazır.</p>
                  <button onClick={() => { setIsBooting(true); setTimeout(() => window.location.href = '/dashboard', 3500); }} className="px-12 py-5 bg-white text-black hover:bg-emerald-400 rounded-full font-black uppercase tracking-widest transition-colors w-full max-w-sm">BOOT SİQUENCE BAŞLAT</button>
                </>
              ) : (
                <div className="text-left bg-black/60 p-8 rounded-3xl border border-blue-500/30">
                  <Terminal className="text-blue-500 mb-6 animate-pulse w-8 h-8" />
                  <div className="space-y-4 font-mono text-xs text-blue-400">
                    <motion.p initial={{opacity:0}} animate={{opacity:1}} transition={{delay:0.5}}>> Profil: <span className="text-white">{formData.role}</span></motion.p>
                    <motion.p initial={{opacity:0}} animate={{opacity:1}} transition={{delay:1.5}}>> Odak: <span className="text-white">{formData.goal}</span></motion.p>
                    <motion.p initial={{opacity:0}} animate={{opacity:1}} transition={{delay:2.5}} className="text-emerald-400">> SENKRONİZASYON TAMAM</motion.p>
                    <motion.p initial={{opacity:0}} animate={{opacity:1}} transition={{delay:3.0}} className="text-white animate-pulse">> DASHBOARD'A AKTARILIYOR...</motion.p>
                  </div>
                </div>
              )}
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </main>
  );
}
\`;

fs.writeFileSync(p, content);
console.log('✅ Premium Glassmorphism UI ve Görsel Veritabanı Başarıyla Yüklendi!');
