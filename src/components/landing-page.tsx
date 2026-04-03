'use client';

import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Activity,
  ArrowUp,
  Award,
  BadgeDollarSign,
  BarChart3,
  Brain,
  Camera,
  Check,
  CheckCircle2,
  ChevronDown,
  ChevronLeft,
  ChevronRight,
  Coffee,
  Cpu,
  CreditCard,
  Crown,
  ExternalLink,
  Fingerprint,
  Flame,
  FlaskConical,
  Gavel,
  Gem,
  Globe,
  GraduationCap,
  Heart,
  HelpCircle,
  Home,
  Landmark,
  Layers,
  LogOut,
  Mail,
  MapPin,
  Medal,
  Menu,
  Microscope,
  Pause,
  Phone,
  Play,
  Rocket,
  Scale,
  Search,
  Send,
  ShieldAlert,
  ShieldCheck,
  Sparkles,
  Star,
  Stethoscope,
  Target,
  Terminal,
  Trophy,
  Users,
  Users2,
  X,
  XCircle,
  Zap 
} from 'lucide-react';

const quickModules = [
  { label: 'Akademi', desc: 'Pre-Klinik Hub (Dönem 1-3)', icon: Brain, color: 'text-purple-400', bg: 'bg-purple-500/10' },
  { label: 'OSCE Prova', desc: 'Klinik Simülasyon (Dönem 4-6)', icon: Target, color: 'text-blue-400', bg: 'bg-blue-500/10' },
  { label: 'Vaka RPG', desc: 'Tanı-Tedavi Lab (Tüm Kademeler)', icon: Microscope, color: 'text-rose-400', bg: 'bg-rose-500/10' },
  { label: 'Analiz', desc: 'Akademik & Prof Hub', icon: BarChart3, color: 'text-emerald-400', bg: 'bg-emerald-500/10' },
];

const comparisonData = [
  { 
    feature: 'Öğrenme Metodu', 
    traditional: 'Pasif Okuma / Statik Notlar', 
    meditrack: 'İnteraktif RPG & Canlı Senaryolar'
  },
  { 
    feature: 'OSCE Hazırlığı', 
    traditional: 'Ayna Karşısında Kendi Kendine', 
    meditrack: 'AI Destekli Gerçekçi Hasta Provası'
  },
  { 
    feature: 'Klinik Karar', 
    traditional: 'Ezbere Dayalı Tanı Yaklaşımı', 
    meditrack: 'Veri Tabanlı Algoritmik Analiz'
  },
  { 
    feature: 'Akademik Arşiv', 
    traditional: 'Dağınık PDF ve Kağıt Yığınları', 
    meditrack: 'Bulut Tabanlı Klinik Komuta Merkezi'
  }
];

export const LandingPage = () => {
  const [isLoggedIn, setIsLoggedIn] = React.useState(false); // Simüle edilen giriş durumu
  const [showAuthModal, setShowAuthModal] = React.useState(false);
  const [isLoginView, setIsLoginView] = React.useState(false);
  const [showVideoModal, setShowVideoModal] = React.useState(false);
  const [activeFaq, setActiveFaq] = React.useState(null);

  
  
  const navigateTo = (target) => {
    const sections = ['hero', 'comparison', 'pricing', 'faq'];
    
    // 1. Sayfa içi kaydırmalar
    if (sections.includes(target)) {
      const el = document.getElementById(target);
      if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
      return;
    }

    // 2. Özel Tanıtım Yönlendirmesi
    if (target === 'dashboard-intro') {
      const el = document.getElementById('comparison');
      if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
      return;
    }

    // 3. Demo Modal Kontrolü
    if (target === 'demo') {
      setShowVideoModal(true);
      return;
    }

    // 4. Auth Gerektiren Gerçek Sayfa Yönlendirmeleri
    if (isLoggedIn) {
      const routes = {
        'akademi': '/dashboard/academy',
        'osce-prova': '/dashboard/osce',
        'vaka-rpg': '/dashboard/ai-diagnostic',
        'analiz': '/dashboard/calc',
        'lab': '/dashboard/calculators',
        'setup': '/setup',
        'dashboard': '/dashboard'
      };
      if (routes[target]) {
        window.location.href = routes[target];
        return;
      }
    }

    // 5. Auth Modal Tetikleyici (Giriş yoksa)
    setShowAuthModal(true);
    if (target === 'signup') setIsLoginView(false);
    if (target === 'login') setIsLoginView(true);
  };




  const [scrollProgress, setScrollProgress] = React.useState(0);
  const [isVisible, setIsVisible] = React.useState(false);

  React.useEffect(() => {
    const updateScroll = () => {
      const currentScrollY = window.scrollY;
      const scrollHeight = document.documentElement.scrollHeight - window.innerHeight;
      setScrollProgress((currentScrollY / scrollHeight) * 100);
      setIsVisible(currentScrollY > 500);
    };
    window.addEventListener("scroll", updateScroll);
    return () => window.removeEventListener("scroll", updateScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="w-full bg-[#050505] text-white selection:bg-blue-500/30 pb-10">
      
      {/* --- FLOATING NAVBAR (GÖRSELDEKİ TASARIM) --- */}
      <nav className="fixed top-6 left-1/2 -translate-x-1/2 z-[150] w-full max-w-5xl px-4">
        <div className="bg-black/40 backdrop-blur-2xl border border-white/10 rounded-[2.5rem] p-2 flex items-center justify-between shadow-2xl">
          
          {/* Logo Bölümü */}
          <div className="flex items-center gap-3 pl-6 cursor-pointer" onClick={() => navigateTo('hero')}>
            <div className="w-10 h-10 bg-blue-600 rounded-xl flex items-center justify-center shadow-[0_0_20px_rgba(37,99,235,0.4)]">
              <Sparkles className="w-6 h-6 text-white" />
            </div>
            <span className="text-xl font-black italic tracking-tighter text-white">
              MEDİ<span className="text-blue-500">TRACK</span>
            </span>
          </div>

          {/* Orta Menü (Sinir Sistemi Bağlantılı) */}
          <div className="hidden md:flex items-center gap-1 bg-white/5 rounded-[2rem] p-1 border border-white/5">
            {[
              { id: 'akademi', label: 'Akademi', icon: GraduationCap },
              { id: 'osce-prova', label: 'OSCE Prova', icon: Target },
              { id: 'vaka-rpg', label: 'Vaka RPG', icon: Microscope },
              { id: 'analiz', label: 'Klinik Analiz', icon: BarChart3 },
              { id: 'lab', label: 'Laboratuvar', icon: FlaskConical },
            ].map((item) => (
              <button
                key={item.id}
                onClick={() => navigateTo(item.id)}
                className="flex items-center gap-2 px-5 py-2.5 rounded-full hover:bg-white/10 transition-all group"
              >
                <item.icon className="w-4 h-4 text-gray-500 group-hover:text-blue-400" />
                <span className="text-[11px] font-bold text-gray-400 group-hover:text-white uppercase tracking-wider">{item.label}</span>
              </button>
            ))}
          </div>

          {/* Giriş / Kayıt Butonu */}
          <button 
            onClick={() => { setIsLoginView(false); setShowAuthModal(true); }}
            className="flex items-center gap-3 px-8 py-4 bg-blue-600 hover:bg-blue-500 text-white rounded-[1.8rem] transition-all shadow-[0_0_25px_rgba(37,99,235,0.3)] group"
          >
            <LogOut className="w-4 h-4 rotate-180 transition-transform group-hover:translate-x-1" />
            <span className="text-xs font-black uppercase tracking-widest whitespace-nowrap">Kayıt Ol / Giriş</span>
          </button>
        </div>
      </nav>

      
      {/* --- SECTION 1: HERO */}
      <div id="hero" />
      {/* --- SECTION 1: HERO & CORE HUB --- */}
      <section className="relative min-h-screen flex flex-col items-center justify-center px-6 pt-20 overflow-hidden">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:30px_30px]" />
        <div className="absolute top-0 w-full h-[600px] bg-[radial-gradient(circle_at_50%_0%,#3b82f615,transparent_70%)]" />
        
        <div className="container mx-auto text-center relative z-10">
          <motion.div initial={{ opacity: 0, y: -10 }} animate={{ opacity: 1, y: 0 }} className="flex flex-wrap justify-center gap-3 mb-8">
            {['Pre-Klinik', 'Klinik', 'TUS', 'Akademik'].map((tag) => (
              <span key={tag} className="px-4 py-1.5 rounded-xl bg-white/5 border border-white/10 text-[10px] font-black tracking-widest text-gray-400 uppercase">{tag}</span>
            ))}
          </motion.div>

          <motion.h1 initial={{ scale: 0.95, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} className="text-5xl md:text-[8rem] font-black tracking-tighter leading-none mb-6 italic">
            MEDİ<span className="text-blue-500">TRACK</span>
            <span className="text-[0.2em] not-italic align-top bg-blue-600 text-white px-3 py-1 rounded-2xl ml-3 shadow-lg shadow-blue-600/20">V4</span>
          </motion.h1>

          <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.2 }} className="text-base md:text-xl text-gray-400 max-w-2xl mx-auto font-medium mb-12">
            Tıbbın her evresinde yanındayız. Anatomiden cerrahiye, tüm fakültelerin ortak dijital ekosistemi.
          </motion.p>

          <div className="flex flex-wrap justify-center gap-4 mb-20">
            <button onClick={() => navigateTo('dashboard')} className="px-12 py-5 bg-white text-black shadow-[0_0_20px_rgba(255,255,255,0.3)] animate-pulse rounded-[2rem] font-black text-lg hover:bg-blue-600 hover:text-white transition-all shadow-2xl flex items-center gap-2 group">
              SİSTEME GİR <Zap className="w-5 h-5 fill-current" />
            </button>
            <button onClick={() => navigateTo('demo')} className="px-12 py-5 bg-white/5 border border-white/10 rounded-[2rem] font-bold text-lg hover:bg-white/10 transition-all text-white backdrop-blur-md">
              DEMO İZLE
            </button>
          </div>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 max-w-6xl mx-auto">
            {quickModules.map((m, i) => (
              <motion.div key={i} whileHover={{ y: -5, backgroundColor: 'rgba(255,255,255,0.06)' }} onClick={() => navigateTo(m.label.toLowerCase())} className="p-6 rounded-[2.5rem] bg-white/[0.03] border border-white/5 flex flex-col items-center group cursor-pointer transition-all">
                <div className={`p-4 rounded-2xl ${m.bg} mb-4 transition-transform group-hover:scale-110`}>
                  <m.icon className={`w-7 h-7 ${m.color}`} />
                </div>
                <h3 className="text-sm font-black text-white mb-1 uppercase">{m.label}</h3>
                <p className="text-[9px] text-gray-500 font-bold uppercase">{m.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* --- SECTION 2: KARŞILAŞTIRMA */}
      <div id="comparison" />
      {/* --- SECTION 2: KARŞILAŞTIRMA --- */}
      <section className="container mx-auto px-6 py-16 relative">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-blue-600/5 blur-[120px] rounded-full pointer-events-none" />
        
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-16 relative z-10">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-amber-500/10 border border-amber-500/20 mb-4">
            <Flame className="w-4 h-4 text-amber-500" />
            <span className="text-[10px] font-black tracking-widest text-amber-500 uppercase">Gelecek Burada</span>
          </div>
          <h2 className="text-4xl md:text-6xl font-black italic tracking-tighter uppercase text-white">
            Neden <span className="text-blue-500">Meditrack?</span>
          </h2>
        </motion.div>

        <div className="relative max-w-5xl mx-auto overflow-hidden rounded-[3.5rem] border border-white/10 bg-white/[0.02] backdrop-blur-3xl shadow-2xl z-10">
          <div className="grid grid-cols-3 border-b border-white/10 bg-white/5">
            <div className="p-8 text-xs font-black uppercase text-gray-500">ÖZELLİK</div>
            <div className="p-8 text-xs font-black uppercase text-rose-500 text-center">GELENEKSEL ÇALIŞMA</div>
            <div className="p-8 text-xs font-black uppercase text-blue-400 text-center flex items-center justify-center gap-2">
              <Trophy className="w-4 h-4" /> MEDITRACK V4
            </div>
          </div>

          <div className="divide-y divide-white/5">
            {comparisonData.map((row, i) => (
              <div key={i} className="grid grid-cols-3 group hover:bg-white/[0.02] transition-colors">
                <div className="p-8 flex items-center text-sm font-bold text-gray-300 border-r border-white/5 italic">{row.feature}</div>
                <div className="p-8 flex items-center justify-center gap-2 text-xs font-medium text-gray-500 bg-rose-500/[0.01] border-r border-white/5">
                  <X className="w-4 h-4 text-rose-900" /> {row.traditional}
                </div>
                <div className="p-8 flex items-center justify-center gap-2 text-sm font-black text-white bg-blue-500/[0.02] relative">
                  <div className="absolute inset-y-0 left-0 w-[2px] bg-blue-500 shadow-[0_0_15px_#3b82f6]" />
                  <Check className="w-5 h-5 text-emerald-400" /> {row.meditrack}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* --- SECTION 3: KLİNİK KERNEL PANEL --- */}
      <section className="container mx-auto px-6 py-20">
        <div className="bg-[#0a0a0a] border border-white/10 rounded-[5rem] overflow-hidden p-12 md:p-24 relative">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center relative z-10">
            <div>
              <div className="flex items-center gap-3 mb-6">
                <Layers className="text-blue-500 w-8 h-8" />
                <span className="text-sm font-black text-blue-500 uppercase tracking-widest">Command Center</span>
              </div>
              <h2 className="text-5xl md:text-7xl font-black text-white mb-10 tracking-tighter italic">Kritik Karar <br /> Desteği.</h2>
              <p className="text-gray-500 text-lg leading-relaxed mb-10">Tıp fakültesinin her aşamasında karmaşık verileri, vaka yönetimini ve sınav hazırlığını tek bir noktadan yönet.</p>
              <button className="px-8 py-3 bg-white/5 border border-white/10 rounded-2xl font-bold text-xs hover:bg-white/10 transition-all uppercase tracking-widest">Sistem Detayları</button>
            </div>
            
            <div className="bg-black rounded-[3rem] p-10 border border-white/10 shadow-3xl font-mono text-xs">
              <div className="flex gap-2 mb-10">
                <div className="w-3 h-3 rounded-full bg-red-500/40" />
                <div className="w-3 h-3 rounded-full bg-yellow-500/40" />
                <div className="w-3 h-3 rounded-full bg-green-500/40" />
              </div>
              <div className="space-y-3 text-blue-400/70">
                <p>{" >>> "} INITIALIZING MED_OS_V4...</p>
                <p className="text-gray-600">{" >>> "} SYNCING ACADEMIC_RESOURCES...</p>
                <p className="text-gray-600">{" >>> "} LOADING CLINICAL_STATIONS...</p>
                <p className="text-emerald-500 font-black mt-6 animate-pulse uppercase tracking-widest text-[10px]">{" >>> "} STATUS: ALL SYSTEMS OPERATIONAL</p>
              </div>
              <div className="mt-12 w-full h-1 bg-white/5 rounded-full overflow-hidden">
                <motion.div initial={{ width: 0 }} whileInView={{ width: '100%' }} transition={{ duration: 4, repeat: Infinity }} className="h-full bg-blue-600 shadow-[0_0_15px_#2563eb]" />
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* --- SECTION 5: EXCLUSIVE SUITE - BENZERSİZ ARAÇLAR --- */}
      <section className="container mx-auto px-6 py-20 relative">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,#3b82f605,transparent_70%)]" />
        
        <div className="text-center mb-20 relative z-10">
          <motion.div 
            initial={{ opacity: 0 }} 
            whileInView={{ opacity: 1 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-fuchsia-500/10 border border-fuchsia-500/20 mb-6"
          >
            <Fingerprint className="w-4 h-4 text-fuchsia-400" />
            <span className="text-[10px] font-black tracking-[0.4em] text-fuchsia-400 uppercase">Unparalleled Technology</span>
          </motion.div>
          <h2 className="text-5xl md:text-7xl font-black text-white italic tracking-tighter uppercase leading-none">
            BAŞKA YERDE <br /> <span className="text-transparent bg-clip-text bg-gradient-to-r from-fuchsia-500 to-indigo-500">BULAMAYACAKSIN.</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {[
            {
              title: 'AI Kadavra Lab',
              desc: 'Gerçek diseksiyon hissi veren, dokunsal geri bildirimli 3D yapay zeka kadavra motoru. İstediğin an, istediğin katmanda operasyon.',
              icon: 'Cpu',
              color: 'from-blue-600 to-cyan-500'
            },
            {
              title: 'Malpraktis Defans',
              desc: 'Hukuki vaka simülasyonları. Klinik hatalarda savunma stratejileri ve tıbbi hukuk etik kurulu simülatörü.',
              icon: 'Gavel',
              color: 'from-amber-600 to-rose-600'
            },
            {
              title: 'Bionluk-Analiz Pro',
              desc: 'Akademisyenler ve freelancer hekimler için optimize edilmiş; ham veriyi yayına hazır tabloya dönüştüren biyoistatistik santralı.',
              icon: 'FlaskConical',
              color: 'from-emerald-500 to-teal-500'
            },
            {
              title: 'Sentez-AI (Cross-Uni)',
              desc: 'Türkiye’deki tüm tıp fakültelerinin ortak vaka arşivini ve notlarını analiz eden, okuluna özel tahminleme yapan tek motor.',
              icon: 'Zap',
              color: 'from-indigo-600 to-fuchsia-600'
            }
          ].map((item, i) => {
            const IconTag = { Cpu, Gavel, FlaskConical, Zap }[item.icon];
            return (
              <motion.div 
                key={i}
                whileHover={{ scale: 1.02 }}
                className="group relative p-12 rounded-[4rem] bg-gradient-to-br from-white/[0.04] to-transparent border border-white/5 hover:border-white/20 transition-all overflow-hidden"
              >
                <div className={`absolute top-0 right-0 w-48 h-48 bg-gradient-to-br ${item.color} opacity-5 blur-[80px] group-hover:opacity-10 transition-opacity`} />
                <div className="relative z-10 flex flex-col md:flex-row gap-8 items-center md:items-start text-left">
                  <div className={`w-20 h-20 shrink-0 rounded-3xl bg-gradient-to-br ${item.color} p-5 shadow-2xl group-hover:rotate-12 transition-transform duration-500`}>
                    <IconTag className="w-full h-full text-white" />
                  </div>
                  <div>
                    <h3 className="text-3xl font-black text-white mb-4 uppercase italic tracking-tight">{item.title}</h3>
                    <p className="text-gray-500 text-lg leading-relaxed font-medium">
                      {item.desc}
                    </p>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </section>
      {/* --- SECTION 9: FINAL PRICING */}
      <div id="pricing" />
      {/*  - MEDİ-HİYERARŞİ --- */ }
      <section className="container mx-auto px-6 py-20 relative border-t border-white/5">
        <div className="text-center mb-24 relative z-10">
          <motion.div 
            initial={{ opacity: 0 }} 
            whileInView={{ opacity: 1 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-500/10 border border-blue-500/20 mb-6"
          >
            <ShieldAlert className="w-4 h-4 text-blue-400" />
            <span className="text-[10px] font-black tracking-[0.4em] text-blue-400 uppercase">Hiyerarşi ve Cüzdan Viziti</span>
          </motion.div>
          <h2 className="text-5xl md:text-7xl font-black text-white italic tracking-tighter uppercase leading-none">
            KIDEMİNİ <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-indigo-600 font-black italic">BELİRLE.</span>
          </h2>
          <p className="mt-8 text-gray-500 font-bold uppercase text-xs tracking-[0.3em]">Hangi koltukta oturmak istersin? Vizit başlıyor.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-[1600px] mx-auto">
          {[
            {
              name: 'İntern Dr.',
              price: '0₺',
              tagline: 'Dosya Taşıyıcı / "Hocam İmza"',
              features: ['Günde 1 Anamnez Hakkı', 'Siyah Beyaz Anatomi', 'Kantin Sırasında Öncelik', 'Hoca Görme Simülasyonu'],
              notIncluded: ['Uykusuz Kalmama Garantisi', 'AI Klinik Karar'],
              color: 'border-white/5 bg-white/[0.01]',
              icon: 'Coffee',
              btn: 'Çömez Olarak Başla'
            },
            {
              name: 'Asistan Dr.',
              price: '199₺',
              tagline: 'TUS Mağduru / Nöbet Ertesi',
              features: ['47 Modülün Tamamı', 'Haftalık 20 AI OSCE', 'Vaka RPG Standart', 'Konsültasyon Notu AI', 'Çömez Yönetim Paneli'],
              notIncluded: ['Sosyal Hayat', 'Düzenli Uyku'],
              color: 'border-blue-500/20 bg-blue-500/[0.02]',
              icon: 'Stethoscope',
              btn: 'Nöbeti Devral'
            },
            {
              name: 'Uzman Dr.',
              price: '449₺',
              tagline: 'Altın Neşter / Vizit Efendisi',
              features: ['Sınırsız AI OSCE Prova', 'Vaka RPG Pro Editörü', 'Hata Analizi & Raporlama', 'Özel Akademik Dashboard', '7/24 Teknik Destek'],
              notIncluded: ['Mobbing Koruması'],
              color: 'border-blue-500/50 bg-blue-500/[0.05]',
              icon: 'Crown',
              popular: true,
              btn: 'Kıdemini Tasdikle'
            },
            {
              name: 'ABD Başkanı',
              price: 'Kurumsal',
              tagline: 'Hiyerarşi Zirvesi / Hoca',
              features: ['Tüm Asistanları Yönet', 'Grup İstatistikleri', 'Fakülte Veri Havuzu', 'API Entegrasyon Yetkisi', 'Kurumsal Raporlama'],
              notIncluded: [],
              color: 'border-emerald-500/30 bg-emerald-500/[0.02]',
              icon: 'Users2',
              btn: 'Klinik Kur'
            }
          ].map((pkg, i) => {
            const PkgIcon = { Coffee, Stethoscope, Crown, Users2 }[pkg.icon];
            return (
              <motion.div 
                key={i}
                whileHover={{ y: -10 }}
                className={`relative p-8 rounded-[3rem] border ${pkg.color} backdrop-blur-2xl flex flex-col h-full group transition-all duration-500`}
              >
                {pkg.popular && (
                  <div className="absolute top-0 right-10 bg-blue-600 text-white text-[8px] font-black px-4 py-1.5 rounded-b-xl tracking-widest uppercase animate-pulse">
                    EN ÇOK TERCİH EDİLEN
                  </div>
                )}
                
                <div className="mb-8 text-left">
                  <div className="w-12 h-12 rounded-2xl bg-white/5 flex items-center justify-center mb-6 border border-white/10 group-hover:rotate-12 transition-transform">
                    <PkgIcon className="w-6 h-6 text-blue-400" />
                  </div>
                  <h3 className="text-2xl font-black text-white mb-1 uppercase italic tracking-tighter">{pkg.name}</h3>
                  <p className="text-blue-400 text-[9px] font-black uppercase tracking-widest mb-6">{pkg.tagline}</p>
                  <div className="flex items-baseline gap-1 mb-4">
                    <span className="text-4xl font-black text-white">{pkg.price}</span>
                    {pkg.price !== 'Kurumsal' && pkg.price !== '0₺' && <span className="text-gray-500 text-xs font-bold">/ aylık</span>}
                  </div>
                </div>

                <div className="space-y-4 mb-10 flex-1 text-left">
                  {pkg.features.map(f => (
                    <div key={f} className="flex items-center gap-3">
                      <CheckCircle2 className="w-3.5 h-3.5 text-emerald-500 shrink-0" />
                      <span className="text-[11px] font-bold text-gray-300">{f}</span>
                    </div>
                  ))}
                  {pkg.notIncluded && pkg.notIncluded.map(f => (
                    <div key={f} className="flex items-center gap-3 opacity-20">
                      <XCircle className="w-3.5 h-3.5 text-rose-500 shrink-0" />
                      <span className="text-[11px] font-bold text-gray-500 line-through">{f}</span>
                    </div>
                  ))}
                </div>

                <button onClick={() => navigateTo('checkout-' + pkg.name.toLowerCase().replace(/ /g, '-'))} className={`w-full py-5 rounded-2xl font-black text-[10px] uppercase tracking-widest transition-all ${
                  pkg.popular 
                  ? 'bg-blue-600 text-white hover:bg-blue-500 shadow-xl shadow-blue-600/20' 
                  : 'bg-white/5 text-white hover:bg-white/10 border border-white/10'
                }`}>
                  {pkg.btn}
                </button>
              </motion.div>
            );
          })}
        </div>
      </section>
      {/* --- SECTION 10: FAQ */}
      <div id="faq" />
      {/*  - KLİNİK KONSÜLTASYON --- */ }
      <section className="container mx-auto px-6 py-20 relative border-t border-white/5">
        <div className="text-center mb-24 relative z-10">
          <motion.div 
            initial={{ opacity: 0 }} 
            whileInView={{ opacity: 1 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-indigo-500/10 border border-indigo-500/20 mb-6"
          >
            <HelpCircle className="w-4 h-4 text-indigo-400" />
            <span className="text-[10px] font-black tracking-[0.4em] text-indigo-400 uppercase">Anabilim Dalı Cevaplıyor</span>
          </motion.div>
          <h2 className="text-5xl md:text-7xl font-black text-white italic tracking-tighter uppercase leading-none">
            SIKÇA SORULAN <br /> <span className="text-blue-500 italic">ŞÜPHELER.</span>
          </h2>
        </div>

        <div className="max-w-4xl mx-auto space-y-4">
          {[
            {
              q: 'Bu sistem TUS kazandırır mı hocam?',
              a: 'Sistem sana mühimmatı verir ama cephede tek başınasın kanka. AI OSCE ve Vaka RPG ile klinik korelasyonu o kadar iyi kurarsın ki, TUS soruları vizit sorusu gibi gelir.'
            },
            {
              q: 'İntern paketinde gerçekten hoca simülasyonu var mı?',
              a: 'Evet, "Bu hastanın potasyumu neden yüksek?" diye aniden ekranda beliren dijital bir hoca seni terletebilir. Stres yönetimi bizim işimiz.'
            },
            {
              q: 'Verilerim Hipokrat yeminine dahil mi?',
              a: 'Kesinlikle. Verilerin KVKK ve tıbbi etik kurallarına göre şifreleniyor. Senin vaka hataların seninle sistem arasında kalır, mobbinge malzeme olmaz.'
            },
            {
              q: 'Grup paketinde asistanlarıma mobbing yapabilir miyim?',
              a: 'Sistem buna izin vermez ama performanslarını "Kıdem Paneli" üzerinden izleyip onlara daha çok vaka RPG ödevi atayabilirsin. Modern hiyerarşi diyelim.'
            },
            {
              q: 'Ödeme yöntemlerinde "Nöbet Ertesi" indirimi var mı?',
              a: 'Şu an sadece nakit ve kart geçiyor ama ileride "vaka çözme puanı" ile abonelik yenileme üzerinde çalışıyoruz. Emekçi dostuyuz.'
            }
        ,
            {
              q: 'Vaka RPG\'de yanlış tanı koyarsak diplomamız yanar mı?',
              a: 'Korkma kanka, burası güvenli bölge. Malpraktis davası açacak bir avukat yazılımımız henüz yok. Yanlış tanı seni sadece "Yeniden Rotasyon"a sokar, gerçek hayatta tecrübe kazandırır.'
            },
            {
              q: 'Hocam grup paketinde asistanların puanlarını birbirimize hava atmak için kullanabilir miyiz?',
              a: 'Tabii ki! "Kıdem Tablosu" tam olarak bunun için var. Kim daha çok vaka çözmüş, kim OSCE\'de terlemiş şeffaf bir şekilde görebilir, vizitte hiyerarşik üstünlük kurabilirsin.'
            },].map((item, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              onClick={() => setActiveFaq(activeFaq === i ? null : i)} className={`group p-8 rounded-[2.5rem] bg-white/[0.02] border transition-all cursor-pointer ${activeFaq === i ? "border-blue-500/50 bg-blue-500/5" : "border-white/5 hover:border-blue-500/30"}`}
            >
              <div className="flex items-start justify-between gap-4">
                <div className="flex gap-4">
                  <span className="text-blue-500 font-black text-lg italic">Q{i+1}.</span>
                  <div>
                    <h4 className="text-lg font-black text-white mb-4 uppercase tracking-tight group-hover:text-blue-400 transition-colors">{item.q}</h4>
                    <p className={`text-gray-500 text-sm font-medium leading-relaxed italic border-l-2 border-white/10 pl-6 transition-all ${activeFaq === i ? "block" : "hidden"}`}>
                      {item.a}
                    </p>
                  </div>
                </div>
                <ChevronDown className={`w-5 h-5 text-gray-700 transition-all ${activeFaq === i ? "rotate-180 text-blue-500" : ""}`} />
              </div>
            </motion.div>
          ))}
        </div>
      </section>
      {/* --- SECTION 11: FINAL FOOTER & CONTACT - KOMUTA MERKEZİ KAPANIŞ --- */}
      
      {/* --- SECTION 12: FINAL CALL TO ACTION --- */}
      <section className="container mx-auto px-6 py-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-blue-600/5 blur-[120px] rounded-full -z-10" />
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          className="max-w-5xl mx-auto p-12 md:p-24 rounded-[4rem] bg-gradient-to-br from-blue-600 to-indigo-900 border border-white/20 shadow-[0_0_80px_rgba(37,99,235,0.2)] text-center relative overflow-hidden"
        >
          <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 blur-[60px] -rotate-45 translate-x-32 -translate-y-32" />
          
          <Rocket className="w-16 h-16 text-white mb-8 mx-auto animate-bounce" />
          <h2 className="text-4xl md:text-6xl font-black text-white italic tracking-tighter uppercase mb-6">
            AMELİYATHANE HAZIR. <br /> <span className="opacity-80">YA SEN?</span>
          </h2>
          <p className="text-blue-100/70 text-lg md:text-xl font-medium mb-12 max-w-2xl mx-auto uppercase tracking-widest italic">
            Kıdemini belirle, vakanı seç ve tıbbın geleceğine ilk dikişi sen at.
          </p>
          
          <div className="flex flex-wrap justify-center gap-6">
            <button 
              onClick={() => navigateTo('signup')}
              className="px-12 py-5 bg-white text-blue-600 rounded-3xl font-black text-xs uppercase tracking-[0.3em] hover:scale-105 transition-all shadow-2xl shadow-black/20"
            >
              VAKAYA BAŞLA
            </button>
            <button 
              onClick={() => navigateTo('contact')}
              className="px-12 py-5 bg-transparent border-2 border-white/30 text-white rounded-3xl font-black text-[10px] uppercase tracking-[0.3em] hover:bg-white/10 transition-all"
            >
              KONSÜLTASYON İSTE
            </button>
          </div>
        </motion.div>
      </section>
<footer className="relative pt-20 pb-10 overflow-hidden border-t border-white/5 bg-[#030303]">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[300px] bg-blue-600/5 blur-[120px] rounded-full pointer-events-none" />
        
        <div className="container mx-auto px-6 relative z-10">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-16 mb-32 text-left">
            
            {/* Sütun 1: Brand & Vision */}
            <div className="space-y-8">
              <div className="flex items-center gap-3">
                <div className="p-2.5 bg-blue-600 rounded-xl shadow-lg shadow-blue-600/20">
                  <Sparkles className="w-5 h-5 text-white" />
                </div>
                <span className="text-2xl font-black text-white italic tracking-tighter">MEDİ<span className="text-blue-500">TRACK</span></span>
              </div>
              <p className="text-gray-500 text-sm leading-relaxed font-medium">
                Tıp eğitimini dijital bir protokole dönüştürüyoruz. Anatomiden cerrahiye, internlikten hocalığa kadar her adımda yanınızdayız.
              </p>
              <div className="flex gap-4">
                {[Send, Camera, Terminal, Users].map((Icon, idx) => (
                  <button key={idx} className="p-3 bg-white/5 border border-white/10 rounded-xl text-gray-500 hover:text-blue-400 hover:border-blue-500/30 transition-all">
                    <Icon className="w-4 h-4" />
                  </button>
                ))}
              </div>
            </div>

            {/* Sütun 2: Navigasyon (Hiyerarşi) */}
            <div className="space-y-8">
              <h4 className="text-xs font-black text-white uppercase tracking-[0.3em]">Hiyerarşi</h4>
              <ul className="space-y-4">
                {['Akademi (Dönem 1-3)', 'Klinik (Dönem 4-6)', 'TUS & Uzmanlık', 'Akademik Ar-Ge', 'Vaka RPG Evreni'].map(link => (
                  <li key={link}>
                    <a href="#" className="text-gray-500 text-sm font-bold hover:text-white transition-colors flex items-center gap-2 group">
                      <ChevronRight className="w-3 h-3 text-blue-500 opacity-0 group-hover:opacity-100 transition-all" /> {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Sütun 3: Onam & Hukuk */}
            <div className="space-y-8">
              <h4 className="text-xs font-black text-white uppercase tracking-[0.3em]">Mevzuat</h4>
              <ul className="space-y-4">
                {['Hipokrat Uyumluluğu', 'Aydınlatılmış Onam', 'KVKK (Hasta Verisi)', 'Kullanım Koşulları', 'Çerez Politikası'].map(link => (
                  <li key={link}>
                    <a href="#" className="text-gray-500 text-sm font-bold hover:text-white transition-colors">{link}</a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Sütun 4: Nöbet Odası (İletişim) */}
            <div className="space-y-8">
              <h4 className="text-xs font-black text-white uppercase tracking-[0.3em]">Nöbet Odası</h4>
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="p-2 bg-blue-500/10 rounded-lg"><Mail className="w-4 h-4 text-blue-400" /></div>
                  <div>
                    <p className="text-[10px] font-black text-gray-600 uppercase">Konsültasyon Maili</p>
                    <p className="text-sm font-bold text-gray-300">destek@meditrack.v4</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="p-2 bg-emerald-500/10 rounded-lg"><Phone className="w-4 h-4 text-emerald-400" /></div>
                  <div>
                    <p className="text-[10px] font-black text-gray-600 uppercase">Acil Konsültasyon</p>
                    <p className="text-sm font-bold text-gray-300">0850 MED-HELP</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="p-2 bg-rose-500/10 rounded-lg"><MapPin className="w-4 h-4 text-rose-400" /></div>
                  <div>
                    <p className="text-[10px] font-black text-gray-600 uppercase">HQ (Nöbet Odası)</p>
                    <p className="text-sm font-bold text-gray-300">Teknokent / Türkiye</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Alt Bar */}
          <div className="pt-10 border-t border-white/5 flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="flex items-center gap-4 text-[10px] font-black text-gray-600 uppercase tracking-widest">
              <span>© 2026 MEDITRACK v4-WINDSURF</span>
              <span className="w-1 h-1 bg-gray-800 rounded-full" />
              <span>MADE WITH <Heart className="w-3 h-3 inline text-rose-600 mx-1 fill-rose-600" /> BY KEMAL & TEAM</span>
            </div>
            <div className="flex items-center gap-6">
              <div className="flex items-center gap-2 px-3 py-1 bg-emerald-500/5 border border-emerald-500/20 rounded-lg">
                <div className="w-1.5 h-1.5 bg-emerald-500 rounded-full shadow-[0_0_8px_#10b981] animate-ping" />
                <span className="text-[9px] font-black text-emerald-500 uppercase tracking-widest">System Online</span>
              </div>
              <ShieldCheck className="w-5 h-5 text-gray-700" />
            </div>
          </div>
        </div>

        {/* Humorous Disclaimer */}
        <div className="container mx-auto px-6 mt-6">
          <p className="text-center text-[9px] font-bold text-gray-800 uppercase tracking-[0.5em] opacity-40">
            Dikkat: Bu platform uykusuzluk, aşırı tıbbi bilgi yüklemesi ve vizitlerde hoca tarafından takdir edilme riski taşıyabilir.
          </p>
        </div>
      </footer>




    
      {/* --- VITAL NAVIGATOR: DEFİBRİLATÖR & PROGRESS --- */}
      <div className="fixed bottom-10 right-10 z-[100] flex flex-col items-center gap-4">
        <AnimatePresence>
          {isVisible && (
            <motion.button
              initial={{ scale: 0, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0, opacity: 0 }}
              onClick={scrollToTop}
              className="group relative p-5 bg-blue-600 text-white rounded-full shadow-[0_0_30px_rgba(37,99,235,0.5)] hover:bg-blue-500 transition-all active:scale-90"
            >
              <div className="absolute inset-0 rounded-full border-2 border-white/20 animate-ping opacity-20" />
              <ArrowUp className="w-6 h-6 group-hover:-translate-y-1 transition-transform" />
              
              {/* Tooltip */}
              <span className="absolute right-full mr-4 top-1/2 -translate-y-1/2 px-3 py-1 bg-black/80 backdrop-blur-md border border-white/10 rounded-lg text-[10px] font-black uppercase tracking-widest text-white whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity">
                Acil Vizit (Başa Dön)
              </span>
            </motion.button>
          )}
        </AnimatePresence>

        {/* Scroll Progress Vital Line */}
        <div className="w-1.5 h-32 bg-white/5 rounded-full overflow-hidden border border-white/10 backdrop-blur-md relative">
          <motion.div 
            className="absolute bottom-0 left-0 w-full bg-gradient-to-t from-blue-600 to-cyan-400 shadow-[0_0_15px_#3b82f6]"
            style={{ height: `${scrollProgress}%` }}
          />
          <div className="absolute inset-0 flex flex-col justify-between py-2 items-center opacity-40">
             <div className="w-1 h-[1px] bg-white" />
             <div className="w-1 h-[1px] bg-white" />
             <div className="w-1 h-[1px] bg-white" />
          </div>
        </div>
      </div>

      {/* Top Vital Bar */}
      <div className="fixed top-0 left-0 w-full h-1 z-[110] pointer-events-none">
        <motion.div 
          className="h-full bg-gradient-to-r from-blue-600 via-cyan-400 to-indigo-600 shadow-[0_0_15px_#3b82f6]"
          style={{ width: `${scrollProgress}%` }}
        />
      </div>

      
      {/* --- UNIFIED AUTH MODAL: KLİNİK ERİŞİM --- */}
      <AnimatePresence mode="wait">
        {showAuthModal && (
          <div className="fixed inset-0 z-[300] flex items-center justify-center px-6">
            <motion.div 
              initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
              onClick={() => setShowAuthModal(false)}
              className="absolute inset-0 bg-black/90 backdrop-blur-md"
            />
            <motion.div 
              initial={{ y: 50, opacity: 0, scale: 0.95 }}
              animate={{ y: 0, opacity: 1, scale: 1 }}
              exit={{ y: 50, opacity: 0, scale: 0.95 }}
              className="relative w-full max-w-lg p-12 rounded-[4rem] bg-[#0a0a0a] border border-blue-500/20 shadow-[0_0_100px_rgba(59,130,246,0.15)] overflow-hidden text-center"
            >
              {/* Üst Dekorasyon */}
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-blue-500 to-transparent" />
              
              <motion.div 
                key={isLoginView ? 'login' : 'signup'}
                initial={{ x: 20, opacity: 0 }} animate={{ x: 0, opacity: 1 }} exit={{ x: -20, opacity: 0 }}
                transition={{ duration: 0.3 }}
              >
                <div className="w-16 h-16 rounded-2xl bg-blue-500/10 flex items-center justify-center mx-auto mb-6 border border-blue-500/20">
                  {isLoginView ? <ShieldCheck className="w-8 h-8 text-blue-500" /> : <Users2 className="w-8 h-8 text-blue-500" />}
                </div>

                <h3 className="text-4xl font-black text-white mb-2 italic uppercase tracking-tighter">
                  {isLoginView ? 'HOŞ GELDİN HOCAM.' : 'KIDEMİNİ AL.'}
                </h3>
                <p className="text-gray-500 text-sm font-bold uppercase tracking-widest mb-10">
                  {isLoginView ? 'Klinik verilerin seni bekliyor.' : 'Ekosisteme ilk dikişi atma vakti.'}
                </p>

                {/* Form Alanı (Placeholder) */}
                <div className="space-y-4 mb-8 text-left">
                  <div className="group relative">
                    <input type="email" placeholder="Kurumsal E-Posta" className="w-full bg-white/5 border border-white/10 p-5 rounded-2xl text-white focus:outline-none focus:border-blue-500 transition-all placeholder:text-gray-700 font-bold" />
                    <Mail className="absolute right-5 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-700 group-focus-within:text-blue-500 transition-colors" />
                  </div>
                  {!isLoginView && (
                    <div className="group relative">
                      <input type="text" placeholder="Ad Soyad / Ünvan" className="w-full bg-white/5 border border-white/10 p-5 rounded-2xl text-white focus:outline-none focus:border-blue-500 transition-all placeholder:text-gray-700 font-bold" />
                      <Stethoscope className="absolute right-5 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-700 group-focus-within:text-blue-500 transition-colors" />
                    </div>
                  )}
                  <div className="group relative">
                    <input type="password" placeholder="Parola" className="w-full bg-white/5 border border-white/10 p-5 rounded-2xl text-white focus:outline-none focus:border-blue-500 transition-all placeholder:text-gray-700 font-bold" />
                    <Zap className="absolute right-5 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-700 group-focus-within:text-blue-500 transition-colors" />
                  </div>
                </div>

                {/* Action Butonu */}
                
                <button 
                  onClick={() => {
                    if (isLoginView) {
                      window.location.href = '/dashboard';
                    } else {
                      window.location.href = '/setup';
                    }
                  }}
                  className="w-full py-5 bg-blue-600 hover:bg-blue-500 text-white rounded-2xl font-black text-xs uppercase tracking-[0.4em] shadow-xl shadow-blue-600/20 transition-all mb-6"
                >
                  {isLoginView ? 'SİSTEME GİRİŞ YAP' : 'KLİNİĞE KATIL'}
                </button>

                {/* Switcher */}
                <p className="text-[10px] font-black text-gray-600 uppercase tracking-widest">
                  {isLoginView ? 'HENÜZ KAYIT OLMADIN MI?' : 'ZATEN BİR HESABIN VAR MI?'}
                  <button 
                    onClick={() => setIsLoginView(!isLoginView)}
                    className="ml-2 text-blue-500 hover:text-blue-400 transition-colors underline decoration-2 underline-offset-4"
                  >
                    {isLoginView ? 'YENİ KAYIT AÇ' : 'GİRİŞ YAP'}
                  </button>
                </p>
              </motion.div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>


      <div className="fixed left-6 top-1/2 -translate-y-1/2 z-[100] hidden xl:flex flex-col gap-4">
        {[
          { id: 'hero', icon: Home, label: 'Giriş' },
          { id: 'comparison', icon: Activity, label: 'Analiz' },
          { id: 'pricing', icon: CreditCard, label: 'Paketler' },
          { id: 'faq', icon: HelpCircle, label: 'Yardım' },
        ].map((item) => (
          <button
            key={item.id}
            onClick={() => navigateTo(item.id)}
            className="group relative p-4 bg-white/5 border border-white/10 rounded-2xl backdrop-blur-xl hover:bg-blue-600/20 hover:border-blue-500/50 transition-all shadow-2xl"
          >
            <item.icon className="w-5 h-5 text-gray-400 group-hover:text-blue-400 transition-colors" />
            <span className="absolute left-full ml-4 px-3 py-1.5 bg-blue-600 text-white text-[10px] font-black uppercase tracking-widest rounded-lg opacity-0 group-hover:opacity-100 transition-all pointer-events-none whitespace-nowrap shadow-lg shadow-blue-600/20">
              {item.label}
            </span>
          </button>
        ))}
      </div>

      {/* --- VIDEO MODAL: DEMO PREVIEW --- */}
      <AnimatePresence>
        {showVideoModal && (
          <div className="fixed inset-0 z-[250] flex items-center justify-center px-4">
            <motion.div 
              initial={{ opacity: 0 }} 
              animate={{ opacity: 1 }} 
              exit={{ opacity: 0 }}
              onClick={() => setShowVideoModal(false)}
              className="absolute inset-0 bg-black/95 backdrop-blur-md"
            />
            <motion.div 
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              className="relative w-full max-w-5xl aspect-video rounded-[2rem] bg-[#0a0a0a] border border-white/10 overflow-hidden shadow-[0_0_100px_rgba(59,130,246,0.1)]"
            >
              <button 
                onClick={() => setShowVideoModal(false)}
                className="absolute top-6 right-6 z-10 p-3 bg-black/50 hover:bg-white/10 rounded-full text-white transition-all"
              >
                <X className="w-6 h-6" />
              </button>
              
              <div className="w-full h-full flex flex-col items-center justify-center space-y-6 bg-[radial-gradient(circle_at_center,#1e1e1e,transparent)]">
                <div className="p-6 rounded-full bg-blue-600/10 border border-blue-500/20 animate-pulse">
                  <Play className="w-12 h-12 text-blue-500 fill-current" />
                </div>
                <div className="text-center">
                  <h4 className="text-xl font-black text-white italic uppercase tracking-tighter mb-2">Meditrack v4 Tanıtım</h4>
                  <p className="text-gray-500 text-xs font-bold uppercase tracking-[0.3em]">Cerrahi Operasyon Hazırlanıyor... (Video Yakında)</p>
                </div>
                {/* Video yüklendiğinde buradaki div yerine <video> etiketi gelecek kanka */}
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
</div>
  );
};
