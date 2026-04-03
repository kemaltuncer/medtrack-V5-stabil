"use client";
import { motion } from "framer-motion";
import { Navbar } from "@/components/navbar";
import { 
  Activity, Zap, BrainCircuit, Target, BarChart3, 
  Microscope, FlaskConical, Stethoscope, ClipboardCheck, 
  Clock, BookOpen, Smartphone, ShieldCheck, HeartPulse,
  ChevronDown, Play, Star, MessageCircle, UserPlus, 
  Tag, HelpCircle, Mail, ArrowRight, Pill, FileText, 
  Calculator, LayoutGrid, Dna, Syringe, Plus
} from "lucide-react";

const fadeInUp = {
  hidden: { opacity: 0, y: 40 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
};

const staggerContainer = {
  hidden: { opacity: 0 },
  show: { opacity: 1, transition: { staggerChildren: 0.1 } }
};

const recentModules = [
  "Nefrotik Sendrom Ayırıcı Tanı Kılavuzu", "Kan Gazı Analizörü", "Glasgow Koma Skalası", 
  "Pediatrik Sıvı Hesaplayıcı", "EKG Aks Belirleme Motoru", "APGAR Skoru", "CURB-65 Pnömoni Skoru", 
  "Gebelikte İlaç Kategorileri", "Parkinson Evreleme", "ACLS Algoritmaları (Canlı)", "Romatoloji Spotları"
];

export default function Home() {
  const scrollToFeatures = () => {
    document.getElementById('features')?.scrollIntoView({ behavior: 'smooth' });
  };

  const row1 = [
    { name: "Kan Gazı Analizörü", cat: "Acil Tıp", icon: <Activity size={24}/>, color: "bg-rose-100 text-rose-600" },
    { name: "Glasgow Koma Skalası", cat: "Nöroloji", icon: <BrainCircuit size={24}/>, color: "bg-blue-100 text-blue-600" },
    { name: "Sıvı Reşitasyonu", cat: "Pediatri", icon: <Calculator size={24}/>, color: "bg-emerald-100 text-emerald-600" },
    { name: "EKG Aks Motoru", cat: "Kardiyoloji", icon: <HeartPulse size={24}/>, color: "bg-rose-100 text-rose-600" },
    { name: "Nefrotik Şablon", cat: "Nefroloji", icon: <FileText size={24}/>, color: "bg-amber-100 text-amber-600" },
  ];

  const row2 = [
    { name: "Gebelikte İlaçlar", cat: "Farmakoloji", icon: <Pill size={24}/>, color: "bg-purple-100 text-purple-600" },
    { name: "ACLS Algoritmaları", cat: "Kardiyoloji", icon: <Zap size={24}/>, color: "bg-red-100 text-red-600" },
    { name: "CURB-65 Skoru", cat: "Göğüs Hastalıkları", icon: <Stethoscope size={24}/>, color: "bg-cyan-100 text-cyan-600" },
    { name: "APGAR Puanlaması", cat: "Pediatri", icon: <ClipboardCheck size={24}/>, color: "bg-emerald-100 text-emerald-600" },
    { name: "Tiroid Nodül Kılavuzu", cat: "Endokrin", icon: <Target size={24}/>, color: "bg-orange-100 text-orange-600" },
  ];

  return (
    <main className="bg-[#F8FAFC] relative selection:bg-blue-200 selection:text-blue-900 overflow-x-hidden min-h-screen">
      <style dangerouslySetInnerHTML={{__html: `
        .medical-pattern {
          background-image: url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%233b82f6' fill-opacity='0.05'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E");
        }
        @keyframes scroll-left { 0% { transform: translateX(0); } 100% { transform: translateX(-50%); } }
        @keyframes scroll-right { 0% { transform: translateX(-50%); } 100% { transform: translateX(0); } }
        .animate-scroll-left { display: flex; width: max-content; animation: scroll-left 40s linear infinite; }
        .animate-scroll-right { display: flex; width: max-content; animation: scroll-right 40s linear infinite; }
        .animate-scroll-left:hover, .animate-scroll-right:hover { animation-play-state: paused; }
      `}} />
      <Navbar />

      <div className="fixed inset-0 z-0 pointer-events-none">
        <div className="absolute inset-0 medical-pattern"></div>
        <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-blue-500/10 rounded-full blur-[120px]"></div>
        <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-rose-500/10 rounded-full blur-[120px]"></div>
        <div className="absolute top-[40%] left-[60%] w-[30%] h-[30%] bg-amber-500/10 rounded-full blur-[100px]"></div>
        <Dna className="absolute top-[15%] left-[5%] w-64 h-64 text-blue-500/5 -rotate-45 animate-pulse" />
        <Stethoscope className="absolute bottom-[20%] right-[5%] w-80 h-80 text-emerald-500/5 rotate-12" />
        <Activity className="absolute top-[60%] left-[10%] w-96 h-96 text-rose-500/5 -rotate-12" />
      </div>

      <section className="relative min-h-screen flex flex-col items-center justify-center px-6 pt-20 z-10">
        <motion.div variants={staggerContainer} initial="hidden" animate="show" className="text-center max-w-5xl mx-auto">
          <motion.div variants={fadeInUp} className="inline-flex items-center gap-3 px-6 py-3 bg-white border border-blue-100 rounded-full font-black tracking-widest uppercase text-sm mb-8 shadow-xl shadow-blue-100/50 text-blue-600">
            <Microscope size={18} className="animate-pulse" /> Tıp Eğitiminde Yeni Dönem
          </motion.div>
          <motion.h1 variants={fadeInUp} className="text-6xl md:text-[7rem] font-black tracking-tighter mb-8 text-slate-900 leading-[0.9]">
            Tıp Hayatını <br/><span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-rose-500">Kolaylaştır.</span>
          </motion.h1>
          <motion.p variants={fadeInUp} className="text-2xl md:text-3xl font-extrabold text-slate-600 mb-10 leading-relaxed max-w-4xl mx-auto">
            Notlarını kaybetme, TUS stresinde boğulma, nöbette çaresiz kalma. OSCE provalarından AI vaka analizlerine kadar ihtiyacın olan her şey tek bir akıllı panelde.
          </motion.p>
          <motion.div variants={fadeInUp} className="flex flex-col sm:flex-row justify-center gap-4 mb-20">
             <button className="bg-blue-600 text-white px-10 py-5 rounded-[2rem] font-black text-xl hover:scale-105 transition-all shadow-2xl shadow-blue-200">
              Ücretsiz Hesabını Oluştur
            </button>
             <button className="bg-white text-slate-900 border border-slate-200 px-10 py-5 rounded-[2rem] font-black text-xl hover:bg-slate-50 transition-all shadow-lg flex items-center justify-center gap-2">
              <Play size={20} className="text-rose-500" /> Sistemi İzle
            </button>
          </motion.div>
        </motion.div>
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1 }} onClick={scrollToFeatures} className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center cursor-pointer group">
          <span className="text-sm font-black uppercase tracking-widest text-slate-400 mb-2 group-hover:text-blue-600 transition-colors">Modülleri İncele</span>
          <div className="w-10 h-16 border-4 border-slate-300 rounded-full flex justify-center p-2 group-hover:border-blue-600 transition-colors">
            <div className="w-2 h-4 bg-slate-400 rounded-full animate-bounce group-hover:bg-blue-600"></div>
          </div>
        </motion.div>
      </section>

      <section id="features" className="pt-24 pb-12 px-6 relative z-10">
        <motion.div variants={staggerContainer} initial="hidden" whileInView="show" viewport={{ once: true, margin: "-100px" }} className="max-w-[1400px] mx-auto">
          <motion.div variants={fadeInUp} className="text-center mb-16">
            <h2 className="text-5xl font-black text-slate-900 mb-4 tracking-tight">47 Modül, Sıfır Karmaşa.</h2>
            <p className="text-xl text-slate-500 font-bold">Her biri klinik stajlar ve TUS için özel olarak geliştirildi.</p>
          </motion.div>
          
          <div className="grid grid-cols-1 md:grid-cols-12 gap-6 auto-rows-[280px]">
            <motion.div variants={fadeInUp} className="md:col-span-8 bg-white border border-slate-200 rounded-[3rem] p-10 shadow-xl flex flex-col justify-between group overflow-hidden relative hover:border-blue-300 transition-colors">
               <div className="absolute right-0 bottom-0 p-8 opacity-10 group-hover:scale-110 transition-transform"><BrainCircuit size={180} className="text-blue-600" /></div>
               <div className="w-16 h-16 bg-blue-50 text-blue-600 rounded-2xl flex items-center justify-center mb-6"><BrainCircuit size={32} /></div>
               <div className="relative z-10">
                 <h3 className="text-4xl font-black mb-3 text-slate-900">Deep AI Diagnostic</h3>
                 <p className="text-lg font-bold text-slate-500 max-w-lg leading-relaxed">Semptom ve lab verilerini gir, 20 milyon vakalık veri tabanından süzülmüş diferansiyel tanıları al.</p>
               </div>
            </motion.div>
            <motion.div variants={fadeInUp} className="md:col-span-4 bg-amber-400 rounded-[3rem] p-10 shadow-xl text-slate-900 flex flex-col justify-between group overflow-hidden relative">
               <Zap className="absolute -right-5 -bottom-5 w-48 h-48 opacity-10 group-hover:rotate-12 transition-transform" />
               <div className="w-16 h-16 bg-white/40 rounded-2xl flex items-center justify-center mb-6"><Zap size={32} /></div>
               <div className="relative z-10">
                 <h3 className="text-3xl font-black mb-3">TUS Spotları</h3>
                 <p className="text-lg font-bold text-amber-900">85K+ güncel flashcard ile yolda veya nöbette akıllı tekrar yap.</p>
               </div>
            </motion.div>
            <motion.div variants={fadeInUp} className="md:col-span-3 bg-emerald-500 rounded-[3rem] p-8 shadow-xl text-white flex flex-col justify-between group overflow-hidden relative">
               <Pill className="absolute -right-5 -bottom-5 w-40 h-40 opacity-10 group-hover:-rotate-12 transition-transform" />
               <div className="w-14 h-14 bg-white/20 rounded-2xl flex items-center justify-center mb-4"><Pill size={28} /></div>
               <div className="relative z-10">
                 <h3 className="text-2xl font-black mb-2">Farma Rehberi</h3>
                 <p className="text-sm font-bold text-emerald-100">Etkileşim, endikasyon ve hazır reçete şablonları.</p>
               </div>
            </motion.div>
            <motion.div variants={fadeInUp} className="md:col-span-3 bg-rose-500 rounded-[3rem] p-8 shadow-xl text-white flex flex-col justify-between group overflow-hidden relative">
               <HeartPulse className="absolute -right-5 -bottom-5 w-40 h-40 opacity-10 group-hover:-rotate-12 transition-transform" />
               <div className="w-14 h-14 bg-white/20 rounded-2xl flex items-center justify-center mb-4"><HeartPulse size={28} /></div>
               <div className="relative z-10">
                 <h3 className="text-2xl font-black mb-2">EKG Okuyucu</h3>
                 <p className="text-sm font-bold text-rose-100">İnteraktif EKG analiz ve ritim değerlendirme modülü.</p>
               </div>
            </motion.div>
            <motion.div variants={fadeInUp} className="md:col-span-6 bg-slate-900 rounded-[3rem] p-10 shadow-2xl text-white flex flex-col justify-between group overflow-hidden relative hover:border-slate-700 transition-colors">
               <div className="absolute right-0 bottom-0 p-8 opacity-10 group-hover:scale-110 transition-transform"><Activity size={180} className="text-rose-500" /></div>
               <div className="w-16 h-16 bg-white/10 text-rose-400 rounded-2xl flex items-center justify-center mb-6"><Activity size={32} /></div>
               <div className="relative z-10">
                 <h3 className="text-3xl font-black mb-3">OSCE Pro Simulator</h3>
                 <p className="text-lg font-bold text-slate-400 max-w-sm leading-relaxed">Yapay hastalarla interaktif muayene seansları. Kriter bazlı anlık jüri puanlaması.</p>
               </div>
            </motion.div>
            <motion.div variants={fadeInUp} className="md:col-span-4 bg-purple-600 rounded-[3rem] p-8 shadow-xl text-white flex flex-col justify-between group overflow-hidden relative">
               <FlaskConical className="absolute -right-5 -bottom-5 w-40 h-40 opacity-10 group-hover:rotate-12 transition-transform" />
               <div className="w-14 h-14 bg-white/20 rounded-2xl flex items-center justify-center mb-4"><FlaskConical size={28} /></div>
               <div className="relative z-10">
                 <h3 className="text-2xl font-black mb-2">Klinik Lab</h3>
                 <p className="text-sm font-bold text-purple-200">Referans aralıkları ve laboratuvar korelasyon analizleri.</p>
               </div>
            </motion.div>
            <motion.div variants={fadeInUp} className="md:col-span-4 bg-cyan-600 rounded-[3rem] p-8 shadow-xl text-white flex flex-col justify-between group overflow-hidden relative">
               <Calculator className="absolute -right-5 -bottom-5 w-40 h-40 opacity-10 group-hover:rotate-12 transition-transform" />
               <div className="w-14 h-14 bg-white/20 rounded-2xl flex items-center justify-center mb-4"><Calculator size={28} /></div>
               <div className="relative z-10">
                 <h3 className="text-2xl font-black mb-2">Klirens & Doz</h3>
                 <p className="text-sm font-bold text-cyan-100">GFR hesaplamaları, Nefroloji rotasyonları ve doz ayarları.</p>
               </div>
            </motion.div>
            <motion.div variants={fadeInUp} className="md:col-span-4 bg-white border border-slate-200 rounded-[3rem] p-8 shadow-xl flex flex-col justify-between group overflow-hidden relative">
               <FileText className="absolute -right-5 -bottom-5 w-40 h-40 opacity-5 group-hover:-rotate-12 transition-transform" />
               <div className="w-14 h-14 bg-slate-100 text-slate-600 rounded-2xl flex items-center justify-center mb-4"><FileText size={28} /></div>
               <div className="relative z-10">
                 <h3 className="text-2xl font-black mb-2 text-slate-900">Klinik Not Defteri</h3>
                 <p className="text-sm font-bold text-slate-500">Özel anamnez şablonları ve bulut senkronizasyonu.</p>
               </div>
            </motion.div>
          </div>
        </motion.div>
      </section>

      <section className="pb-24 pt-4 px-6 relative z-10 overflow-hidden bg-slate-50 border-y border-slate-200">
        <div className="max-w-[1400px] mx-auto mb-12 flex flex-col items-center justify-center text-center px-4">
           <div className="w-16 h-16 bg-rose-100 text-rose-600 rounded-3xl flex items-center justify-center mb-6 shadow-sm"><Plus size={36} className="animate-pulse" /></div>
           <h3 className="text-5xl font-black text-slate-900 tracking-tight mb-4">Her Hafta Yeni Bir Araç.</h3>
           <p className="text-slate-500 font-bold text-xl max-w-2xl">Sistem klinik ihtiyaçlarına göre sürekli büyüyor. İşte vitrine yeni eklenen alt modüllerden bazıları:</p>
        </div>
        <div className="relative w-full overflow-hidden flex flex-col gap-6 py-4">
          <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-slate-50 to-transparent z-10 pointer-events-none"></div>
          <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-slate-50 to-transparent z-10 pointer-events-none"></div>
          <div className="animate-scroll-left items-center gap-6 px-6">
            {[...row1, ...row1, ...row1, ...row1].map((item, i) => <MarqueeCard key={i} {...item} />)}
          </div>
          <div className="animate-scroll-right items-center gap-6 px-6">
            {[...row2, ...row2, ...row2, ...row2].map((item, i) => <MarqueeCard key={i} {...item} />)}
          </div>
        </div>
      </section>

      {/* YENİLENEN 3. SCROLL: İNANDIRICI VE DETAYLI KARŞILAŞTIRMA TABLOLARI */}
      <section className="py-24 px-6 bg-slate-900 text-white relative z-10">
        <motion.div variants={staggerContainer} initial="hidden" whileInView="show" viewport={{ once: true }} className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16">
          
          <motion.div variants={fadeInUp} className="space-y-8">
            <h2 className="text-5xl font-black tracking-tighter text-blue-400">Neden MedTrack?</h2>
            <p className="text-xl text-slate-400 font-bold leading-relaxed">Tıp eğitimi amelelik değil, strateji işidir. Klasik yöntemlerin hantallığından kurtul ve sistemin sana kazandırdığı gücü incele:</p>
            
            <div className="bg-white/5 border border-white/10 rounded-[2.5rem] overflow-hidden shadow-2xl">
               <table className="w-full text-left">
                  <thead className="bg-white/10 text-[10px] uppercase tracking-widest font-black text-slate-400">
                     <tr>
                       <th className="p-6 border-b border-white/10 w-1/4">Süreç</th>
                       <th className="p-6 border-b border-white/10 w-1/3">Geleneksel Yöntem</th>
                       <th className="p-6 border-b border-white/10 w-5/12 text-blue-400">MedTrack Ekosistemi</th>
                     </tr>
                  </thead>
                  <tbody className="divide-y divide-white/5 font-medium text-sm">
                     <tr className="hover:bg-white/5 transition-colors">
                       <td className="p-6 font-black text-white flex items-center gap-3"><BookOpen size={18} className="text-amber-400"/> TUS Çalışması</td>
                       <td className="p-6 text-slate-400">Kalın kitaplarda pasif okuma ve çizme.</td>
                       <td className="p-6 text-blue-300 font-bold">Algoritmik Spaced-Repetition ile zayıf noktalara odaklı 85K+ spot.</td>
                     </tr>
                     <tr className="hover:bg-white/5 transition-colors">
                       <td className="p-6 font-black text-white flex items-center gap-3"><BrainCircuit size={18} className="text-emerald-400"/> Ayırıcı Tanı</td>
                       <td className="p-6 text-slate-400">Kaynaklarda manuel semptom taraması.</td>
                       <td className="p-6 text-blue-300 font-bold">20M+ vakalık veri havuzuyla saniyeler içinde çapraz lab/semptom analizi.</td>
                     </tr>
                     <tr className="hover:bg-white/5 transition-colors">
                       <td className="p-6 font-black text-white flex items-center gap-3"><FileText size={18} className="text-purple-400"/> Klinik Notlar</td>
                       <td className="p-6 text-slate-400">Cep defterlerinde kaybolan dağınık anamnezler.</td>
                       <td className="p-6 text-blue-300 font-bold">Branşa özel hazır şablonlar, bulut senkronizasyonu ve anlık arama motoru.</td>
                     </tr>
                  </tbody>
               </table>
            </div>
          </motion.div>

          <motion.div variants={fadeInUp} className="space-y-8">
            <h2 className="text-5xl font-black tracking-tighter text-rose-400">Acımasız OSCE Algoritması</h2>
            <p className="text-xl text-slate-400 font-bold leading-relaxed">Sınavda hoca neye dikkat ediyorsa, yapay zekamız da ona puan verir. Gözden kaçan tek bir fizik muayene manevrası bile raporda karşına çıkar.</p>
            <div className="space-y-4 mt-6">
               <DetailRow icon={<ShieldCheck className="text-emerald-400"/>} title="Anamnez Derinliği (%25)" desc="Sistem, açık uçlu sorular sormanı ve hastanın gizlediği majör semptomları yakalamanı bekler." />
               <DetailRow icon={<Stethoscope className="text-blue-400"/>} title="Muayene Kapsamı (%30)" desc="Doğru bölgeyi, doğru manevra ile muayene etme yeteneği. Atlanan her adım sistemden -5 puan düşer." />
               <DetailRow icon={<Target className="text-amber-400"/>} title="Gereksiz Tetkik Cezas (%45)" desc="Klinikle alakasız, ezbere tetkik istemeni engeller ve seni maliyet/fayda analizine zorlar." />
            </div>
          </motion.div>
        </motion.div>
      </section>

      <section className="py-24 px-6 bg-white relative z-10">
        <motion.div variants={staggerContainer} initial="hidden" whileInView="show" viewport={{ once: true }} className="max-w-7xl mx-auto text-center">
          <h2 className="text-5xl font-black mb-4 tracking-tighter text-slate-900">Binlerce Meslektaşın Burada.</h2>
          <p className="text-xl text-slate-500 font-bold mb-16">Her gün binlerce vaka çözülüyor, milyonlarca spot ezberleniyor.</p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
             <ReviewCard name="Dr. Ayşe Y." role="Dahiliye Asistanı" comment="Nöbetlerde vaka analizi yaparken MedTrack AI en büyük asistanım oldu. Ayırıcı tanılarda hayat kurtarıyor." avatar="Ayse" color="bg-blue-50" />
             <ReviewCard name="Ahmet K." role="Dönem 4 Öğrencisi" comment="Nefroloji stajında hocanın sorduğu o zor spotu sistem sayesinde hatırladım. OSCE provaları inanılmaz gerçekçi!" avatar="Ahmet" color="bg-rose-50" />
             <ReviewCard name="Zeynep T." role="İntern Doktor" comment="Kitaplar arasında boğuluyordum. Şimdi Mac'imi açıyorum ve tüm dashboard karşımda. TUS planlayıcısı bağımlılık yapıyor." avatar="Zeynep" color="bg-amber-50" />
             <ReviewCard name="Uzm. Dr. Can B." role="Uzman Hekim" comment="Asistanlar için muazzam bir eğitim aracı. Özellikle laboratuvar değerleri korelasyonları çok başarılı işliyor." avatar="Can" color="bg-emerald-50" />
             <ReviewCard name="Elif S." role="Dönem 3 Öğrencisi" comment="Patoloji ezberlemek kabustu. Spot motoruyla her gün otobüste tekrar yapa yapa komiteyi yüksek notla geçtim." avatar="Elif" color="bg-purple-50" />
             <ReviewCard name="Kemal" role="Dönem 4 Öğrencisi" comment="Başlarda bir web sitesi ne kadar yardım edebilir ki demiştim, şimdi klinikteki en büyük silahım oldu." avatar="Kemal" color="bg-slate-50" />
          </div>
        </motion.div>
      </section>

      <section id="pricing" className="py-24 px-6 bg-slate-50 relative z-10">
        <motion.div variants={staggerContainer} initial="hidden" whileInView="show" viewport={{ once: true }} className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-black mb-4 tracking-tighter text-slate-900">Senin İçin Hangi Plan Uygun?</h2>
            <p className="text-xl text-slate-500 font-bold">Kariyer basamağına ve bütçene uygun şeffaf fiyatlandırma.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <PriceCard title="Stajyer" price="Ücretsiz" desc="Sistemi keşfet" features={["Temel Dashboard", "Günlük 10 Spot", "1 AI Analizi/Gün"]} btn="Hemen Başla" theme="bg-white" />
            <PriceCard title="Pratisyen" price="89₺" desc="Klinik yıllar için" features={["Sınırsız Spot", "Klinik Notlar", "Lab Paneli", "10 AI Analizi/Gün"]} btn="Seç" theme="bg-white border-2 border-blue-200" />
            <PriceCard title="Uzman" price="149₺" desc="Tam donanım" features={["Sınırsız AI Analiz", "Tüm OSCE Vakaları", "TUS Planlayıcı", "Gelişmiş Analitik"]} btn="Popüler Tercih" theme="bg-blue-600 text-white shadow-xl shadow-blue-200" isPro={true} />
            <PriceCard title="Akademi" price="Teklif Al" desc="Kurumlar için" features={["Grup Yönetimi", "Ortak Veritabanı", "Admin Paneli", "Özel API Desteği"]} btn="İletişime Geç" theme="bg-slate-900 text-white" />
          </div>
        </motion.div>
      </section>

      <section className="py-24 px-6 bg-white relative z-10">
        <motion.div variants={staggerContainer} initial="hidden" whileInView="show" viewport={{ once: true }} className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <motion.div variants={fadeInUp} className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <ActionBox href="/signup" color="bg-blue-600 text-white" icon={<UserPlus size={28}/>} title="Hemen Kaydol" desc="Saniyeler içinde hesabını oluştur." />
            <ActionBox href="#faq" color="bg-slate-100 text-slate-900" icon={<HelpCircle size={28}/>} title="S.S.S" desc="Aklına takılanları cevapladık." />
            <ActionBox href="#iletisim" color="bg-slate-100 text-slate-900" icon={<Mail size={28}/>} title="Bize Ulaş" desc="Teknik destek ve geri bildirim." />
            <ActionBox href="#pricing" color="bg-slate-100 text-slate-900" icon={<Tag size={28}/>} title="Paketler" desc="Fiyatlandırma detayları." />
          </motion.div>
          <motion.div variants={fadeInUp} className="relative group cursor-pointer aspect-video rounded-[3rem] overflow-hidden shadow-2xl border-8 border-slate-100 bg-slate-900">
             <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1551076805-e1869033e561?q=80&w=1000&auto=format&fit=crop')] bg-cover bg-center opacity-60 mix-blend-overlay group-hover:scale-105 transition-transform duration-700" />
             <div className="absolute inset-0 flex flex-col items-center justify-center z-10">
                <div className="w-20 h-20 bg-white/30 backdrop-blur-md rounded-full flex items-center justify-center text-white border border-white/50 group-hover:scale-110 transition-transform">
                   <Play size={36} className="ml-2" fill="white" />
                </div>
                <p className="mt-4 font-black text-white text-lg uppercase tracking-widest drop-shadow-md">MedTrack'i Tanıyalım</p>
             </div>
          </motion.div>
        </motion.div>
      </section>
    </main>
  );
}

function MarqueeCard({ name, cat, icon, color }: any) {
  return (
    <div className="flex items-center gap-4 px-6 py-4 bg-white border border-slate-200 rounded-3xl shadow-sm hover:shadow-md hover:border-blue-300 transition-all cursor-pointer w-[320px]">
       <div className={`w-12 h-12 rounded-2xl flex items-center justify-center ${color}`}>{icon}</div>
       <div>
         <h4 className="font-black text-[15px] text-slate-800 truncate mb-1">{name}</h4>
         <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">{cat}</p>
       </div>
    </div>
  );
}

function DetailRow({ icon, title, desc }: any) {
  return (
    <div className="flex gap-4 items-start p-4 bg-white/5 rounded-2xl border border-white/10 hover:bg-white/10 transition-colors cursor-default">
       <div className="bg-white/10 p-3 rounded-xl shrink-0">{icon}</div>
       <div>
          <h4 className="text-xl font-black text-white mb-1">{title}</h4>
          <p className="text-slate-400 font-bold text-sm leading-relaxed">{desc}</p>
       </div>
    </div>
  );
}

function ReviewCard({ name, role, comment, avatar, color }: any) {
  return (
    <div className={`p-8 rounded-[2.5rem] border border-slate-100 text-left flex flex-col justify-between ${color}`}>
       <div>
          <div className="flex gap-1 text-amber-400 mb-4">
             <Star fill="currentColor" size={16} /><Star fill="currentColor" size={16} /><Star fill="currentColor" size={16} /><Star fill="currentColor" size={16} /><Star fill="currentColor" size={16} />
          </div>
          <p className="text-slate-700 font-bold italic mb-6 leading-relaxed">"{comment}"</p>
       </div>
       <div className="flex items-center gap-4">
          <img src={`https://api.dicebear.com/7.x/avataaars/svg?seed=${avatar}`} alt={name} className="w-12 h-12 rounded-full border-2 border-white bg-white shadow-sm" />
          <div>
            <h4 className="font-black text-slate-900">{name}</h4>
            <p className="text-slate-500 font-bold text-[10px] uppercase tracking-widest">{role}</p>
          </div>
       </div>
    </div>
  );
}

function PriceCard({ title, price, desc, features, btn, theme, isPro }: any) {
  return (
    <div className={`p-8 rounded-[2.5rem] flex flex-col justify-between hover:scale-[1.02] transition-transform ${theme}`}>
      <div>
        <h4 className="text-2xl font-black mb-1">{title}</h4>
        <p className={`text-xs font-bold uppercase tracking-widest mb-6 ${isPro ? 'text-blue-200' : 'text-slate-400'}`}>{desc}</p>
        <div className="text-4xl font-black mb-8">{price}{price !== "Ücretsiz" && price !== "Teklif Al" && <span className="text-sm opacity-50">/ay</span>}</div>
        <ul className="space-y-3 mb-8">
          {features.map((f: any, i: any) => (
            <li key={i} className="flex items-center gap-2 font-bold text-sm">
              <span className={isPro ? "text-white" : "text-blue-600"}>✔</span> {f}
            </li>
          ))}
        </ul>
      </div>
      <button className={`w-full py-4 rounded-xl font-black transition-all ${isPro ? 'bg-white text-blue-600 shadow-lg' : theme.includes('slate') ? 'bg-blue-600 text-white' : 'bg-slate-100 text-slate-900'}`}>
        {btn}
      </button>
    </div>
  );
}

function ActionBox({ href, color, icon, title, desc }: any) {
  return (
    <a href={href} className={`block p-6 rounded-[2rem] ${color} hover:scale-105 transition-transform`}>
       <div className="mb-4 opacity-80">{icon}</div>
       <h4 className="text-xl font-black mb-1">{title}</h4>
       <p className="font-bold opacity-80 text-xs leading-relaxed">{desc}</p>
    </a>
  );
}
