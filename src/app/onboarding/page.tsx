"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { 
  ChevronRight, ChevronLeft, Stethoscope, 
  Brain, Coffee, Target, User, Calendar, 
  MapPin, BookOpen, Activity, Upload, Sparkles, Check
} from "lucide-react";
import { useRouter } from "next/navigation";

// TÜM TÜRKİYE TIP FAKÜLTELERİ LİSTESİ (Güncellendi)
const UNIVERSITIES = [
  "Adıyaman Üniversitesi Tıp Fakültesi",
  "Afyonkarahisar Sağlık Bilimleri Üniversitesi Tıp Fakültesi",
  "Ağrı İbrahim Çeçen Üniversitesi Tıp Fakültesi",
  "Akdeniz Üniversitesi Tıp Fakültesi",
  "Aksaray Üniversitesi Tıp Fakültesi",
  "Alanya Alaaddin Keykubat Üniversitesi Tıp Fakültesi",
  "Amasya Üniversitesi Tıp Fakültesi",
  "Ankara Üniversitesi Tıp Fakültesi",
  "Ankara Yıldırım Beyazıt Üniversitesi Tıp Fakültesi",
  "Atatürk Üniversitesi Tıp Fakültesi",
  "Adnan Menderes Üniversitesi Tıp Fakültesi",
  "Balıkesir Üniversitesi Tıp Fakültesi",
  "Bandırma Onyedi Eylül Üniversitesi Tıp Fakültesi",
  "Bolu Abant İzzet Baysal Üniversitesi Tıp Fakültesi",
  "Bursa Uludağ Üniversitesi Tıp Fakültesi",
  "Çanakkale Onsekiz Mart Üniversitesi Tıp Fakültesi",
  "Çukurova Üniversitesi Tıp Fakültesi",
  "Dicle Üniversitesi Tıp Fakültesi",
  "Dokuz Eylül Üniversitesi Tıp Fakültesi",
  "Düzce Üniversitesi Tıp Fakültesi",
  "Ege Üniversitesi Tıp Fakültesi",
  "Erciyes Üniversitesi Tıp Fakültesi",
  "Erzincan Binali Yıldırım Üniversitesi Tıp Fakültesi",
  "Eskişehir Osmangazi Üniversitesi Tıp Fakültesi",
  "Fırat Üniversitesi Tıp Fakültesi",
  "Gazi Üniversitesi Tıp Fakültesi",
  "Gaziantep Üniversitesi Tıp Fakültesi",
  "Gaziantep İslam Bilim ve Teknoloji Üniversitesi Tıp Fakültesi",
  "Giresun Üniversitesi Tıp Fakültesi",
  "Hacettepe Üniversitesi Tıp Fakültesi",
  "Harran Üniversitesi Tıp Fakültesi",
  "Hatay Mustafa Kemal Üniversitesi Tayfur Ata Sökmen Tıp Fakültesi",
  "Hitit Üniversitesi Tıp Fakültesi",
  "İnönü Üniversitesi Tıp Fakültesi",
  "İstanbul Medeniyet Üniversitesi Tıp Fakültesi",
  "İstanbul Üniversitesi İstanbul Tıp Fakültesi",
  "İstanbul Üniversitesi Cerrahpaşa-Cerrahpaşa Tıp Fakültesi",
  "İzmir Bakırçay Üniversitesi Tıp Fakültesi",
  "İzmir Demokrasi Üniversitesi Tıp Fakültesi",
  "İzmir Kâtip Çelebi Üniversitesi Tıp Fakültesi",
  "Kafkas Üniversitesi Tıp Fakültesi",
  "Kahramanmaraş Sütçü İmam Üniversitesi Tıp Fakültesi",
  "Karabük Üniversitesi Tıp Fakültesi",
  "Karadeniz Teknik Üniversitesi Tıp Fakültesi",
  "Karamanoğlu Mehmetbey Üniversitesi Tıp Fakültesi",
  "Kastamonu Üniversitesi Tıp Fakültesi",
  "Kırıkkale Üniversitesi Tıp Fakültesi",
  "Kırklareli Üniversitesi Tıp Fakültesi",
  "Kırşehir Ahi Evran Üniversitesi Tıp Fakültesi",
  "Kocaeli Üniversitesi Tıp Fakültesi",
  "Kütahya Sağlık Bilimleri Üniversitesi Tıp Fakültesi",
  "Malatya Turgut Özal Üniversitesi Tıp Fakültesi",
  "Manisa Celal Bayar Üniversitesi Tıp Fakültesi",
  "Marmara Üniversitesi Tıp Fakültesi",
  "Mardin Artuklu Üniversitesi Tıp Fakültesi",
  "Mersin Üniversitesi Tıp Fakültesi",
  "Muğla Sıtkı Koçman Üniversitesi Tıp Fakültesi",
  "Necmettin Erbakan Üniversitesi Meram Tıp Fakültesi",
  "Niğde Ömer Halisdemir Üniversitesi Tıp Fakültesi",
  "Ondokuz Mayıs Üniversitesi Tıp Fakültesi",
  "Ordu Üniversitesi Tıp Fakültesi",
  "Pamukkale Üniversitesi Tıp Fakültesi",
  "Recep Tayyip Erdoğan Üniversitesi Tıp Fakültesi",
  "Sağlık Bilimleri Üniversitesi Adana Tıp Fakültesi",
  "Sağlık Bilimleri Üniversitesi Bursa Tıp Fakültesi",
  "Sağlık Bilimleri Üniversitesi Erzurum Tıp Fakültesi",
  "Sağlık Bilimleri Üniversitesi Gülhane Tıp Fakültesi",
  "Sağlık Bilimleri Üniversitesi Hamidiye Tıp Fakültesi",
  "Sağlık Bilimleri Üniversitesi Hamidiye Uluslararası Tıp Fakültesi",
  "Sağlık Bilimleri Üniversitesi İzmir Tıp Fakültesi",
  "Sağlık Bilimleri Üniversitesi Trabzon Tıp Fakültesi",
  "Sakarya Üniversitesi Tıp Fakültesi",
  "Selçuk Üniversitesi Tıp Fakültesi",
  "Siirt Üniversitesi Tıp Fakültesi",
  "Sivas Cumhuriyet Üniversitesi Tıp Fakültesi",
  "Süleyman Demirel Üniversitesi Tıp Fakültesi",
  "Tekirdağ Namık Kemal Üniversitesi Tıp Fakültesi",
  "Tokat Gaziosmanpaşa Üniversitesi Tıp Fakültesi",
  "Trakya Üniversitesi Tıp Fakültesi",
  "Uşak Üniversitesi Tıp Fakültesi",
  "Van Yüzüncü Yıl Üniversitesi Tıp Fakültesi",
  "Yalova Üniversitesi Tıp Fakültesi",
  "Yozgat Bozok Üniversitesi Tıp Fakültesi",
  "Zonguldak Bülent Ecevit Üniversitesi Tıp Fakültesi",
  "Acıbadem Mehmet Ali Aydınlar Üniversitesi Tıp Fakültesi",
  "Altınbaş Üniversitesi Tıp Fakültesi",
  "Ankara Medipol Üniversitesi Tıp Fakültesi",
  "Atılım Üniversitesi Tıp Fakültesi",
  "Bahçeşehir Üniversitesi Tıp Fakültesi",
  "Başkent Üniversitesi Tıp Fakültesi",
  "Beykent Üniversitesi Tıp Fakültesi",
  "Bezm-i Âlem Vakıf Üniversitesi Tıp Fakültesi",
  "Biruni Üniversitesi Tıp Fakültesi",
  "Demiroğlu Bilim Üniversitesi Tıp Fakültesi",
  "Haliç Üniversitesi Tıp Fakültesi",
  "İstanbul Arel Üniversitesi Tıp Fakültesi",
  "İstanbul Atlas Üniversitesi Tıp Fakültesi",
  "İstanbul Aydın Üniversitesi Tıp Fakültesi",
  "İstanbul Medipol Üniversitesi Tıp Fakültesi",
  "İstanbul Okan Üniversitesi Tıp Fakültesi",
  "İstanbul Sağlık ve Teknoloji Üniversitesi Tıp Fakültesi",
  "İstanbul Yeni Yüzyıl Üniversitesi Tıp Fakültesi",
  "İstinye Üniversitesi Tıp Fakültesi",
  "İzmir Ekonomi Üniversitesi Tıp Fakültesi",
  "İzmir Tınaztepe Üniversitesi Tıp Fakültesi",
  "Koç Üniversitesi Tıp Fakültesi",
  "KTO Karatay Üniversitesi Tıp Fakültesi",
  "Lokman Hekim Üniversitesi Tıp Fakültesi",
  "Maltepe Üniversitesi Tıp Fakültesi",
  "Nişantaşı Üniversitesi Tıp Fakültesi",
  "Sanko Üniversitesi Tıp Fakültesi",
  "TOBB Ekonomi ve Teknoloji Üniversitesi Tıp Fakültesi",
  "Ufuk Üniversitesi Tıp Fakültesi",
  "Üsküdar Üniversitesi Tıp Fakültesi",
  "Yeditepe Üniversitesi Tıp Fakültesi",
  "Yüksek İhtisas Üniversitesi Tıp Fakültesi"
];

export default function OnboardingWizard() {
  const router = useRouter();
  const [step, setStep] = useState(1);
  const totalSteps = 4;
  
  const [uniSearch, setUniSearch] = useState("");
  const [showUniDropdown, setShowUniDropdown] = useState(false);

  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    birthDate: "",
    university: "",
    year: "",
    currentPhase: "", // Staj, Komite, veya Hedef Branş
    studyHours: "",
    goal: "",
    expectations: [] as string[],
    avatar: null
  });

  const updateForm = (field: string, value: any) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const toggleExpectation = (val: string) => {
    setFormData(prev => {
      const isSelected = prev.expectations.includes(val);
      return {
        ...prev,
        expectations: isSelected 
          ? prev.expectations.filter(e => e !== val)
          : [...prev.expectations, val]
      };
    });
  };

  const handleNext = () => {
    if (step < totalSteps) setStep(step + 1);
    else router.push("/dashboard/academy"); // Bittiğinde Akademi'ye at
  };

  const handlePrev = () => {
    if (step > 1) setStep(step - 1);
  };

  const progressPercentage = (step / totalSteps) * 100;

  return (
    <main className="relative flex min-h-screen bg-[#020408] text-white overflow-hidden font-sans items-center justify-center">
      
      {/* BIO-NEON ARKAPLAN */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <div className="absolute top-[-10%] left-[-10%] w-[50%] h-[50%] rounded-full bg-blue-600/10 blur-[150px] animate-pulse" />
        <div className="absolute bottom-[-10%] right-[-10%] w-[50%] h-[50%] rounded-full bg-purple-600/10 blur-[150px]" />
        <div className="absolute inset-0 opacity-[0.03] bg-[radial-gradient(#ffffff_1px,transparent_1px)] [background-size:30px_30px]" />
      </div>

      <div className="relative z-10 w-full max-w-2xl p-6">
        
        {/* İlerleme Çubuğu */}
        <div className="mb-12">
          <div className="flex justify-between items-center mb-4">
            <h1 className="text-2xl font-black tracking-tighter flex items-center gap-2">
              <Activity className="text-blue-500" /> MEDITRACK
            </h1>
            <span className="text-xs font-black text-blue-500 tracking-widest">% {progressPercentage}</span>
          </div>
          <div className="h-2 w-full bg-white/5 rounded-full overflow-hidden">
            <motion.div 
              className="h-full bg-gradient-to-r from-blue-500 via-indigo-500 to-purple-500"
              initial={{ width: 0 }}
              animate={{ width: `${progressPercentage}%` }}
              transition={{ duration: 0.5, ease: "easeOut" }}
            />
          </div>
        </div>

        {/* Sihirbaz Kartı */}
        <div className="bg-white/[0.02] border border-white/5 rounded-[3rem] p-8 md:p-12 shadow-2xl backdrop-blur-3xl min-h-[500px] flex flex-col relative overflow-hidden">
          
          <AnimatePresence mode="wait">
            {/* ADIM 1: KİMLİK TESPİTİ */}
            {step === 1 && (
              <motion.div key="step1" initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -20 }} className="flex-1">
                <div className="mb-10">
                  <div className="w-12 h-12 bg-blue-500/10 rounded-2xl flex items-center justify-center text-blue-400 mb-6 border border-blue-500/20">
                    <User size={24} />
                  </div>
                  <h2 className="text-4xl font-black mb-3">Kimlik Tespiti.</h2>
                  <p className="text-slate-400 font-bold">Nöbet listesine ve adli raporlara adını doğru yazmamız için bu şart. Korkma, verilerin güvende.</p>
                </div>
                
                <div className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label className="text-[10px] font-black uppercase tracking-widest text-slate-500">Adın</label>
                      <input 
                        type="text" 
                        value={formData.firstName}
                        onChange={(e) => updateForm("firstName", e.target.value)}
                        className="w-full bg-white/5 border border-white/10 rounded-2xl p-4 text-white font-bold outline-none focus:border-blue-500 transition-colors" 
                        placeholder="Örn: Kemal" 
                      />
                    </div>
                    <div className="space-y-2">
                      <label className="text-[10px] font-black uppercase tracking-widest text-slate-500">Soyadın</label>
                      <input 
                        type="text" 
                        value={formData.lastName}
                        onChange={(e) => updateForm("lastName", e.target.value)}
                        className="w-full bg-white/5 border border-white/10 rounded-2xl p-4 text-white font-bold outline-none focus:border-blue-500 transition-colors" 
                        placeholder="Örn: Er" 
                      />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <label className="text-[10px] font-black uppercase tracking-widest text-slate-500 flex justify-between">
                      <span>Doğum Tarihi</span> <span className="text-blue-500">Opsiyonel</span>
                    </label>
                    <div className="relative">
                      <Calendar className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-500" size={18} />
                      <input 
                        type="date" 
                        value={formData.birthDate}
                        onChange={(e) => updateForm("birthDate", e.target.value)}
                        className="w-full bg-white/5 border border-white/10 rounded-2xl pl-12 pr-4 py-4 text-slate-300 font-bold outline-none focus:border-blue-500 transition-colors custom-date-input" 
                      />
                    </div>
                    <p className="text-[10px] text-slate-600 font-bold italic mt-1">Nöbet çıkışı pasta kesmek veya premium özellik hediye etmek için lazım olabilir.</p>
                  </div>
                </div>
              </motion.div>
            )}

            {/* ADIM 2: AKADEMİK ÇİLE */}
            {step === 2 && (
              <motion.div key="step2" initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -20 }} className="flex-1">
                <div className="mb-10">
                  <div className="w-12 h-12 bg-purple-500/10 rounded-2xl flex items-center justify-center text-purple-400 mb-6 border border-purple-500/20">
                    <BookOpen size={24} />
                  </div>
                  <h2 className="text-4xl font-black mb-3">Akademik Çile.</h2>
                  <p className="text-slate-400 font-bold">Hangi fakültenin havasını soluyorsun ve uykusuzluk seviyen (Dönemin) nedir?</p>
                </div>
                
                <div className="space-y-6">
                  {/* Üniversite Arama */}
                  <div className="space-y-2 relative">
                    <label className="text-[10px] font-black uppercase tracking-widest text-slate-500">Fakülte</label>
                    <div className="relative">
                      <MapPin className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-500" size={18} />
                      <input 
                        type="text" 
                        value={uniSearch || formData.university}
                        onChange={(e) => { setUniSearch(e.target.value); setShowUniDropdown(true); updateForm("university", e.target.value); }}
                        onFocus={() => setShowUniDropdown(true)}
                        className="w-full bg-white/5 border border-white/10 rounded-2xl pl-12 pr-4 py-4 text-white font-bold outline-none focus:border-purple-500 transition-colors" 
                        placeholder="Üniversite ara (Örn: Hacettepe)..." 
                      />
                    </div>
                    {/* Dropdown */}
                    {showUniDropdown && uniSearch && (
                      <div className="absolute z-20 w-full mt-2 bg-[#0D121F] border border-white/10 rounded-2xl shadow-2xl max-h-40 overflow-y-auto custom-scrollbar">
                        {UNIVERSITIES.filter(u => u.toLowerCase().includes(uniSearch.toLowerCase())).map((uni, i) => (
                          <div 
                            key={i} 
                            onClick={() => { updateForm("university", uni); setUniSearch(""); setShowUniDropdown(false); }}
                            className="p-4 hover:bg-purple-500/20 cursor-pointer text-sm font-bold text-slate-300 transition-colors"
                          >
                            {uni}
                          </div>
                        ))}
                      </div>
                    )}
                  </div>

                  {/* Dönem Seçimi */}
                  <div className="space-y-3">
                    <label className="text-[10px] font-black uppercase tracking-widest text-slate-500">Dönem / Yıl</label>
                    <div className="grid grid-cols-3 sm:grid-cols-4 gap-3">
                      {["Dönem 1", "Dönem 2", "Dönem 3", "Dönem 4", "Dönem 5", "İntörn", "Mezun/TUSiyer"].map(y => (
                        <button 
                          key={y}
                          onClick={() => updateForm("year", y)}
                          className={`py-3 rounded-xl font-black text-xs transition-all ${formData.year === y ? "bg-purple-600 text-white shadow-[0_0_20px_rgba(147,51,234,0.4)]" : "bg-white/5 text-slate-400 hover:bg-white/10"}`}
                        >
                          {y}
                        </button>
                      ))}
                    </div>
                  </div>

                  {/* Dinamik Soru */}
                  {formData.year && (
                    <motion.div initial={{ opacity: 0, height: 0 }} animate={{ opacity: 1, height: "auto" }} className="space-y-2 pt-4 border-t border-white/5">
                      <label className="text-[10px] font-black uppercase tracking-widest text-slate-500">
                        {formData.year.includes("Dönem 1") || formData.year.includes("2") || formData.year.includes("3") ? "Şu an hangi komitedesin?" :
                         formData.year.includes("Dönem 4") || formData.year.includes("5") ? "Aktif stajın hangisi?" :
                         formData.year === "İntörn" ? "Şu an hangi rotasyondasın?" : "Hedefin Hangi Branş?"}
                      </label>
                      <input 
                        type="text" 
                        value={formData.currentPhase}
                        onChange={(e) => updateForm("currentPhase", e.target.value)}
                        className="w-full bg-white/5 border border-white/10 rounded-2xl p-4 text-white font-bold outline-none focus:border-purple-500 transition-colors" 
                        placeholder={formData.year === "İntörn" ? "Örn: Acil Tıp" : "Örn: Dahiliye..."} 
                      />
                    </motion.div>
                  )}
                </div>
              </motion.div>
            )}

            {/* ADIM 3: YAŞAM BELİRTİLERİ */}
            {step === 3 && (
              <motion.div key="step3" initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -20 }} className="flex-1">
                <div className="mb-10">
                  <div className="w-12 h-12 bg-amber-500/10 rounded-2xl flex items-center justify-center text-amber-400 mb-6 border border-amber-500/20">
                    <Coffee size={24} />
                  </div>
                  <h2 className="text-4xl font-black mb-3">Yaşam Belirtileri.</h2>
                  <p className="text-slate-400 font-bold">TUS bir maraton, komiteler sprinttir. Senin günlük masada kalma (hayatta kalma) tempon ne?</p>
                </div>
                
                <div className="space-y-8">
                  <div className="space-y-4">
                    <label className="text-[10px] font-black uppercase tracking-widest text-slate-500">Günlük Hedef Çalışma Süresi</label>
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                      {["1-2 Saat", "3-5 Saat", "6-8 Saat", "Uyumuyorum"].map(h => (
                        <button 
                          key={h}
                          onClick={() => updateForm("studyHours", h)}
                          className={`p-4 rounded-2xl font-black text-sm flex flex-col items-center gap-2 transition-all ${formData.studyHours === h ? "bg-amber-500 text-black shadow-[0_0_20px_rgba(245,158,11,0.4)]" : "bg-white/5 text-slate-400 hover:bg-white/10"}`}
                        >
                          {h === "Uyumuyorum" ? <Brain size={20}/> : <Coffee size={20}/>}
                          {h}
                        </button>
                      ))}
                    </div>
                  </div>

                  <div className="space-y-4">
                    <label className="text-[10px] font-black uppercase tracking-widest text-slate-500">Ana Kariyer Hedefi</label>
                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                      {[
                        { title: "TUS Derecesi", desc: "Zirveye oynuyorum" },
                        { title: "Yurt Dışı (USMLE vb.)", desc: "Biletleri hazırlayın" },
                        { title: "Pratik Klinisyen", desc: "Sahada iyi olayım yeter" }
                      ].map(g => (
                        <div 
                          key={g.title}
                          onClick={() => updateForm("goal", g.title)}
                          className={`p-5 rounded-[2rem] border cursor-pointer transition-all ${formData.goal === g.title ? "bg-amber-500/10 border-amber-500 text-amber-400" : "bg-white/5 border-white/5 text-slate-400 hover:bg-white/10"}`}
                        >
                          <Target className="mb-3" size={20} />
                          <h4 className="font-black text-sm mb-1">{g.title}</h4>
                          <p className="text-[10px] font-bold opacity-60">{g.desc}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            )}

            {/* ADIM 4: KİŞİSELLEŞTİRME & VİTRİN */}
            {step === 4 && (
              <motion.div key="step4" initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -20 }} className="flex-1">
                <div className="mb-10">
                  <div className="w-12 h-12 bg-emerald-500/10 rounded-2xl flex items-center justify-center text-emerald-400 mb-6 border border-emerald-500/20">
                    <Sparkles size={24} />
                  </div>
                  <h2 className="text-4xl font-black mb-3">Dükkanı Hazırlıyoruz.</h2>
                  <p className="text-slate-400 font-bold">Son olarak beklentilerini fısılda ve yaka kartın için bir fotoğraf ekle (ya da anonim kal).</p>
                </div>
                
                <div className="space-y-8 flex flex-col md:flex-row gap-8">
                  {/* Sol Taraf: Avatar */}
                  <div className="w-full md:w-1/3 flex flex-col items-center justify-center space-y-4 p-8 rounded-[2rem] bg-white/5 border border-white/10 border-dashed">
                    <div className="w-24 h-24 rounded-full bg-white/10 flex items-center justify-center text-slate-500 relative group cursor-pointer overflow-hidden">
                      <User size={40} />
                      <div className="absolute inset-0 bg-black/60 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                        <Upload size={20} className="text-white" />
                      </div>
                    </div>
                    <div className="text-center">
                      <p className="text-xs font-black text-slate-300">Profil Fotoğrafı</p>
                      <p className="text-[10px] text-slate-500 uppercase tracking-widest mt-1">Opsiyonel</p>
                    </div>
                  </div>

                  {/* Sağ Taraf: Beklentiler */}
                  <div className="w-full md:w-2/3 space-y-4">
                    <label className="text-[10px] font-black uppercase tracking-widest text-slate-500">Öncelikli Kullanım Amaçların (Çoklu Seçim)</label>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                      {[
                        "Vaka & Hasta Takibi", "OSCE Simülasyonu", 
                        "Hesaplayıcılar", "TUS & Komite Programı", 
                        "Sosyal Tıp Topluluğu", "Nöbet Çizelgeleri"
                      ].map(exp => (
                        <div 
                          key={exp}
                          onClick={() => toggleExpectation(exp)}
                          className={`flex items-center gap-3 p-4 rounded-xl border cursor-pointer transition-all ${
                            formData.expectations.includes(exp) ? "bg-emerald-500/10 border-emerald-500 text-emerald-400" : "bg-white/5 border-white/5 text-slate-400 hover:bg-white/10"
                          }`}
                        >
                          <div className={`w-5 h-5 rounded-md flex items-center justify-center border ${formData.expectations.includes(exp) ? "bg-emerald-500 border-emerald-500 text-black" : "border-slate-600"}`}>
                            {formData.expectations.includes(exp) && <Check size={12} />}
                          </div>
                          <span className="text-xs font-black">{exp}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>

          {/* Navigasyon Butonları */}
          <div className="mt-12 pt-6 border-t border-white/10 flex justify-between items-center">
            <button 
              onClick={handlePrev}
              className={`flex items-center gap-2 px-6 py-3 rounded-full font-black text-xs uppercase tracking-widest transition-all ${step === 1 ? "opacity-0 pointer-events-none" : "text-slate-400 hover:text-white hover:bg-white/5"}`}
            >
              <ChevronLeft size={16} /> Geri
            </button>
            <button 
              onClick={handleNext}
              className="flex items-center gap-2 px-8 py-4 bg-white text-black rounded-full font-black text-sm uppercase tracking-widest hover:scale-105 transition-all shadow-[0_0_30px_rgba(255,255,255,0.2)]"
            >
              {step === totalSteps ? "Önlüğü Giy, Başlıyoruz" : "Devam Et"} <ChevronRight size={18} />
            </button>
          </div>

        </div>
      </div>
    </main>
  );
}
