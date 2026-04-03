"use client";
import React, { useState, useEffect } from 'react';
import Sidebar from './Sidebar';
import { Clock, Target, Bookmark, Zap, Beaker, Crown, StickyNote, ChevronRight } from 'lucide-react';

export default function FreePreKlinik() {
  const [activeView, setActiveView] = useState('Ana Sayfa');
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const t = setInterval(() => setTime(new Date()), 1000);
    
    
    
    
    
    
    
    
    
    if (activeView === 'TUS Sayacı') {
      return (
        <div className="space-y-8 text-left animate-in slide-in-from-top-4 duration-700">
          {/* Dev Geri Sayım Paneli */}
          <div className="bg-zinc-900 rounded-[3rem] p-12 text-white relative overflow-hidden shadow-2xl">
            <div className="absolute top-0 right-0 p-12 opacity-5"><Target className="w-40 h-40" /></div>
            <div className="relative z-10 flex justify-between items-center">
              <div>
                <h1 className="text-[10px] font-black uppercase tracking-[0.5em] text-zinc-500 mb-4 italic">BÜYÜK_HEDEF_GERİ_SAYIM</h1>
                <h2 className="text-8xl font-black italic tracking-tighter leading-none">184 <span className="text-xl not-italic text-zinc-500 uppercase tracking-widest">GÜN KALDI</span></h2>
                <p className="text-sm font-bold text-blue-400 mt-6 uppercase tracking-widest italic leading-relaxed">HEDEF: DAHİLİYE (NEFROLOJİ ODAKLI) • EŞİK: 72.5 PUAN</p>
              </div>
              <div className="text-right">
                <div className="p-6 bg-white/5 border border-white/10 rounded-[2rem] backdrop-blur-md">
                   <p className="text-[9px] font-black text-zinc-400 uppercase tracking-widest">GÜNCEL DENEME ORTALAMASI</p>
                   <p className="text-4xl font-black italic text-emerald-400 mt-1">64.8</p>
                </div>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-12 gap-6">
            {/* Ders Bazlı Hazırlık Durumu */}
            <div className="col-span-8 bg-white border border-zinc-200 rounded-[2.5rem] p-8 shadow-sm">
              <h3 className="text-[10px] font-black uppercase tracking-widest text-zinc-400 mb-8 italic flex items-center gap-2">
                <GraduationCap className="w-4 h-4" /> MÜFREDAT_TAMAMLANMA_ANALİZİ
              </h3>
              <div className="grid grid-cols-2 gap-x-10 gap-y-6">
                {[
                  { d: "ANATOMİ", p: 90, c: "blue" },
                  { d: "FİZYOLOJİ", p: 75, c: "blue" },
                  { d: "DAHİLİYE", p: 40, c: "emerald" },
                  { d: "PEDİATRİ", p: 30, c: "zinc" },
                  { d: "GENEL CERRAHİ", p: 25, c: "zinc" },
                  { d: "KÜÇÜK STAJLAR", p: 15, c: "zinc" }
                ].map((item, i) => (
                  <div key={i} className="space-y-2">
                    <div className="flex justify-between items-end">
                      <span className="text-[11px] font-black text-zinc-800 italic uppercase tracking-tighter">{item.d}</span>
                      <span className={"text-[10px] font-bold uppercase " + (item.p > 50 ? "text-blue-600" : "text-zinc-400")}>%{item.p}</span>
                    </div>
                    <div className="w-full h-1.5 bg-zinc-100 rounded-full overflow-hidden">
                      <div className={"h-full transition-all duration-1000 bg-" + (item.c === "zinc" ? "zinc-300" : item.c + "-600")} style={{ width: item.p + '%' }} />
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Yan Bilgi: Kritik Eşikler */}
            <div className="col-span-4 space-y-6">
              <div className="bg-zinc-50 border border-zinc-200 rounded-[2.5rem] p-8 shadow-sm">
                <h3 className="text-[10px] font-black uppercase tracking-widest text-zinc-400 mb-6 italic">KRİTİK_EŞİKLER</h3>
                <div className="space-y-4">
                   <div className="flex items-center gap-3">
                     <div className="w-2 h-2 rounded-full bg-emerald-500 shadow-lg shadow-emerald-500/20" />
                     <p className="text-[10px] font-bold text-zinc-700 uppercase italic">TEMEL BİLİMLER: TAMAMLANDI</p>
                   </div>
                   <div className="flex items-center gap-3">
                     <div className="w-2 h-2 rounded-full bg-blue-500 animate-pulse" />
                     <p className="text-[10px] font-bold text-zinc-700 uppercase italic">KLİNİK 1. TUR: DEVAM EDİYOR</p>
                   </div>
                   <div className="flex items-center gap-3">
                     <div className="w-2 h-2 rounded-full bg-zinc-300" />
                     <p className="text-[10px] font-bold text-zinc-400 uppercase italic">VAKA DENEMELERİ: BEKLEMEDE</p>
                   </div>
                </div>
              </div>

              <div className="bg-emerald-500 rounded-[2.5rem] p-8 text-white shadow-xl shadow-emerald-500/20 group cursor-pointer relative overflow-hidden">
                 <Zap className="absolute -right-4 -bottom-4 w-20 h-20 text-white/10 group-hover:scale-110 transition-transform" />
                 <h4 className="text-xl font-black italic tracking-tighter mb-2 relative z-10 uppercase">DENEME_MODU</h4>
                 <p className="text-[9px] font-black uppercase tracking-widest relative z-10 text-emerald-100 opacity-80 leading-relaxed">Önceki yılların TUS sorularıyla simülasyonu başlat.</p>
              </div>
            </div>
          </div>
        </div>
      );
    }

    if (activeView === 'Pomodoro') {
      return (
        <div className="h-full flex flex-col items-center justify-center space-y-12 text-center animate-in zoom-in-95 duration-700">
          {/* Üst Bilgi: Odak Durumu */}
          <div className="space-y-2">
            <h1 className="text-[10px] font-black uppercase tracking-[0.5em] text-zinc-400 italic">DERİN_ODAK_MODU_AKTİF</h1>
            <p className="text-sm font-bold text-blue-600 uppercase tracking-widest italic">SEANS 3 / 8 • BUGÜN: 75 DK</p>
          </div>

          {/* Ana Sayaç Paneli */}
          <div className="relative flex items-center justify-center">
            {/* Arka Plan Glow Efekti */}
            <div className="absolute inset-0 bg-blue-500/5 blur-[100px] rounded-full scale-150 animate-pulse" />
            
            <div className="relative w-80 h-80 rounded-full border-[16px] border-zinc-50 shadow-inner flex flex-col items-center justify-center bg-white group hover:border-blue-50 transition-all duration-500">
              <span className="text-[10px] font-black text-zinc-300 uppercase tracking-widest mb-2">KALAN SÜRE</span>
              <h2 className="text-7xl font-black italic tracking-tighter text-zinc-900 tabular-nums">25:00</h2>
              <div className="mt-4 flex gap-4">
                 <div className="w-2 h-2 rounded-full bg-blue-500 animate-bounce" />
                 <div className="w-2 h-2 rounded-full bg-zinc-200" />
                 <div className="w-2 h-2 rounded-full bg-zinc-200" />
                 <div className="w-2 h-2 rounded-full bg-zinc-200" />
              </div>
            </div>
          </div>

          {/* Kontrol Butonları */}
          <div className="flex gap-6 items-center">
            <button className="w-16 h-16 bg-zinc-100 rounded-2xl flex items-center justify-center text-zinc-400 hover:text-zinc-900 transition-all"><Timer className="w-6 h-6 rotate-180" /></button>
            <button className="px-12 py-5 bg-zinc-900 text-white rounded-3xl font-black italic uppercase tracking-tighter text-xl shadow-2xl shadow-zinc-900/30 hover:scale-105 transition-transform">ODAKLANMAYI BAŞLAT</button>
            <button className="w-16 h-16 bg-zinc-100 rounded-2xl flex items-center justify-center text-zinc-400 hover:text-zinc-900 transition-all"><ChevronRight className="w-6 h-6" /></button>
          </div>

          {/* Odak Modları */}
          <div className="grid grid-cols-3 gap-4 w-full max-w-2xl">
            {[
              { n: "Deep Work", d: "Tam Sessizlik", i: "Zen" },
              { n: "Lofi Beats", d: "Ritmik Odak", i: "Müzik" },
              { n: "Hospital Ambience", d: "Poliklinik Gürültüsü", i: "Klinik" }
            ].map((m, i) => (
              <div key={i} className={"p-6 rounded-[2rem] border transition-all cursor-pointer text-left " + (i === 0 ? "bg-white border-blue-500 shadow-lg shadow-blue-500/5" : "bg-white border-zinc-100 hover:border-zinc-200")}>
                <p className={"text-[9px] font-black uppercase tracking-widest mb-1 " + (i === 0 ? "text-blue-500" : "text-zinc-400")}>{m.i} MODU</p>
                <h4 className="text-xs font-black text-zinc-800 uppercase italic tracking-tight">{m.n}</h4>
                <p className="text-[10px] font-bold text-zinc-400 mt-1 uppercase italic">{m.d}</p>
              </div>
            ))}
          </div>
        </div>
      );
    }

    if (activeView === 'Notlarım') {
      return (
        <div className="space-y-6 text-left animate-in slide-in-from-left-4 duration-500">
          {/* Üst Header: Not Yönetimi */}
          <div className="flex justify-between items-center mb-8">
            <div>
              <h1 className="text-2xl font-black tracking-tighter text-zinc-900 uppercase italic">NOT_LABORATUVARI</h1>
              <p className="text-[10px] font-bold text-zinc-400 uppercase tracking-[0.2em] mt-1 italic">TOPLAM 86 BAĞLANTILI NOT • ZETTELKASTEN AKTİF</p>
            </div>
            <button className="bg-zinc-900 text-white px-6 py-2 rounded-xl text-[9px] font-black uppercase tracking-widest hover:bg-zinc-800 transition-all">+ YENİ BİLGİ KARTI</button>
          </div>

          <div className="grid grid-cols-12 gap-6">
            {/* Sol: Not Grupları */}
            <div className="col-span-8 grid grid-cols-2 gap-6">
              {[
                { t: "Nefrotik Sendrom Ayırıcı Tanı", d: "Minimal değişim, FSGS ve Membranöz...", date: "2 saat önce", tag: "Nefroloji" },
                { t: "EKG: Dal Blokları Algoritması", d: "V1'de RSR' formasyonu ve geniş S dalgası...", date: "Dün", tag: "Kardiyoloji" },
                { t: "Antibiyotik Spektrumları", d: "Geniş spektrumlu penisilinler ve direnç...", date: "3 gün önce", tag: "Farmakoloji" },
                { t: "Pediatrik Gelişim Basamakları", d: "0-2 yaş motor ve sosyal gelişim...", date: "1 hafta önce", tag: "Pediatri" }
              ].map((note, i) => (
                <div key={i} className="bg-white border border-zinc-200 rounded-[2rem] p-6 hover:border-blue-300 transition-all cursor-pointer group shadow-sm flex flex-col justify-between h-[200px]">
                  <div>
                    <div className="flex justify-between items-start mb-4">
                      <span className="px-3 py-1 bg-blue-50 text-blue-600 rounded-lg text-[8px] font-black uppercase tracking-widest">{note.tag}</span>
                      <FileEdit className="w-4 h-4 text-zinc-200 group-hover:text-blue-200 transition-colors" />
                    </div>
                    <h4 className="text-sm font-black text-zinc-800 uppercase italic tracking-tight mb-2 leading-tight">{note.t}</h4>
                    <p className="text-[11px] font-medium text-zinc-500 line-clamp-2 italic">{note.d}</p>
                  </div>
                  <p className="text-[9px] font-black text-zinc-300 uppercase tracking-widest mt-4">{note.date}</p>
                </div>
              ))}
            </div>

            {/* Sağ: Bilgi Haritası ve Etiketler */}
            <div className="col-span-4 space-y-6">
              <div className="bg-zinc-50 border border-zinc-200 rounded-[2.5rem] p-8 shadow-sm">
                <h3 className="text-[10px] font-black uppercase tracking-widest text-zinc-400 mb-6 italic">POPÜLER_ETİKETLER</h3>
                <div className="flex flex-wrap gap-2">
                  {["#Nefroloji", "#Dahiliye", "#Pediatri", "#Farmako", "#TUS_Spot", "#Kardiyo"].map((tag, i) => (
                    <span key={i} className="px-3 py-1 bg-white border border-zinc-200 rounded-full text-[9px] font-bold text-zinc-500 hover:text-blue-600 hover:border-blue-200 cursor-pointer transition-all">{tag}</span>
                  ))}
                </div>
              </div>

              <div className="bg-white border border-zinc-200 rounded-[2.5rem] p-8 shadow-sm relative overflow-hidden group">
                <Library className="absolute -right-4 -bottom-4 w-20 h-20 text-zinc-50 opacity-50 group-hover:scale-110 transition-transform" />
                <h3 className="text-[10px] font-black uppercase tracking-widest text-zinc-400 mb-4 italic text-left">SON_ARŞİVLENENLER</h3>
                <ul className="space-y-3 relative z-10">
                  {["Asit-Baz Dengesi", "KBY Evreleme", "Diüretik Mekanizmaları"].map((item, i) => (
                    <li key={i} className="text-[10px] font-bold text-zinc-600 hover:text-blue-500 cursor-pointer flex items-center gap-2 italic uppercase">
                      <div className="w-1 h-1 bg-blue-500 rounded-full" /> {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      );
    }

    if (activeView === 'Spot Bilgiler') {
      return (
        <div className="space-y-6 text-left animate-in fade-in zoom-in-95 duration-500">
          {/* Üst Header: Günün Reçetesi */}
          <div className="bg-[#fff3cd] border border-[#ffeeba] rounded-[2.5rem] p-8 shadow-sm flex justify-between items-center">
            <div className="flex items-center gap-6">
              <div className="w-16 h-16 bg-[#856404]/10 rounded-2xl flex items-center justify-center shrink-0">
                <Zap className="w-8 h-8 text-[#856404]" />
              </div>
              <div>
                <h2 className="text-xl font-black italic tracking-tighter text-[#856404] uppercase">GÜNÜN_REÇETESİ</h2>
                <p className="text-[10px] font-bold text-[#856404]/60 uppercase tracking-widest mt-1">BUGÜN ODAK: NEFROLOJİ & ELEKTROLİTLER</p>
              </div>
            </div>
            <div className="text-right">
              <p className="text-[9px] font-black text-[#856404]/40 uppercase tracking-widest">SİSTEMİK DOZ</p>
              <p className="text-2xl font-black italic text-[#856404]">10/10 <span className="text-xs">SPOT</span></p>
            </div>
          </div>

          <div className="grid grid-cols-12 gap-6">
            {/* Spot Kartları Listesi */}
            <div className="col-span-8 space-y-4">
              {[
                { s: "Nefroloji", t: "Hiponatremide düzeltme hızı 0.5 mEq/L/saat'i geçmemelidir (Santral Pontin Miyelinozis riski).", imp: "Kritik" },
                { s: "Kardiyoloji", t: "Bifasik P dalgası V1 derivasyonunda sol atriyum hipertrofisinin en spesifik bulgusudur.", imp: "Yüksek" },
                { s: "Farmakoloji", t: "Digoksin toksisitesinde en erken görülen EKG bulgusu PR uzamasıdır.", imp: "Orta" },
                { s: "Patoloji", t: "Psammom cisimcikleri: Papiller Tiroid Ca, Menenjiyom ve Over Seröz Kistadenokarsinomunda görülür.", imp: "Kritik" }
              ].map((spot, i) => (
                <div key={i} className="bg-white border border-zinc-200 rounded-3xl p-6 hover:border-blue-300 transition-all cursor-pointer group shadow-sm">
                  <div className="flex justify-between items-start mb-3">
                    <span className="px-3 py-1 bg-zinc-100 rounded-lg text-[8px] font-black uppercase text-zinc-500 tracking-widest group-hover:bg-blue-50 group-hover:text-blue-600">{spot.s}</span>
                    <span className={"text-[8px] font-black uppercase tracking-widest " + (spot.imp === 'Kritik' ? "text-rose-500" : "text-zinc-400")}>{spot.imp} DOZ</span>
                  </div>
                  <p className="text-sm font-bold text-zinc-800 leading-relaxed italic tracking-tight uppercase">"{spot.t}"</p>
                </div>
              ))}
            </div>

            {/* Yan Kolon: Hızlı Kategoriler */}
            <div className="col-span-4 space-y-6">
              <div className="bg-white border border-zinc-200 rounded-[2.5rem] p-8 shadow-sm">
                <h3 className="text-[10px] font-black uppercase tracking-widest text-zinc-400 mb-6 italic">KATEGORİ_FİLTRESİ</h3>
                <div className="grid grid-cols-1 gap-2">
                  {["Tüm Spotlar", "Dahiliye", "Pediatri", "Cerrahi", "Temel Bilimler"].map((cat, i) => (
                    <button key={i} className={"text-left px-4 py-3 rounded-2xl text-[10px] font-black uppercase tracking-tight transition-all " + (i === 0 ? "bg-zinc-900 text-white" : "bg-zinc-50 text-zinc-400 hover:bg-zinc-100")}>
                      {cat}
                    </button>
                  ))}
                </div>
              </div>

              <div className="bg-blue-600 rounded-[2.5rem] p-8 text-white shadow-xl shadow-blue-600/20 relative overflow-hidden group cursor-pointer">
                <Crown className="absolute -right-4 -bottom-4 w-20 h-20 text-white/10 group-hover:scale-110 transition-transform" />
                <h4 className="text-lg font-black italic tracking-tighter mb-2 relative z-10">SPOT_BOT_PLUS</h4>
                <p className="text-[9px] font-bold text-blue-100 uppercase tracking-widest relative z-10 leading-relaxed">AI ile kişiselleştirilmiş TUS spotları oluştur.</p>
              </div>
            </div>
          </div>
        </div>
      );
    }

    if (activeView === 'Flashcardlar') {
      return (
        <div className="space-y-6 text-left animate-in slide-in-from-bottom-4 duration-500">
          {/* Üst Bilgi ve Seri Takibi */}
          <div className="flex justify-between items-end mb-8">
            <div>
              <h1 className="text-2xl font-black tracking-tighter text-zinc-900 uppercase italic">HAFIZA_SARAYI</h1>
              <p className="text-[10px] font-bold text-zinc-400 uppercase tracking-[0.2em] mt-1 italic">AKTİF ÖĞRENME MODU • GÜNLÜK SERİ: 12 GÜN 🔥</p>
            </div>
            <div className="bg-amber-500/10 border border-amber-200 px-6 py-2 rounded-xl">
              <span className="text-[9px] font-black text-amber-700 uppercase tracking-widest">BUGÜN: 45 KART TEKRARLANDI</span>
            </div>
          </div>

          <div className="grid grid-cols-12 gap-6">
            {/* Ana Çalışma Kartı */}
            <div className="col-span-12 bg-white border border-zinc-200 rounded-[2.5rem] p-10 shadow-sm flex items-center justify-between group cursor-pointer hover:border-blue-300 transition-all">
              <div className="space-y-2">
                <h3 className="text-3xl font-black italic tracking-tighter text-zinc-900 uppercase">GÜNLÜK_TEKRAR_SETİ</h3>
                <p className="text-xs font-bold text-zinc-400 uppercase tracking-widest">TOPLAM 120 KART SENİ BEKLİYOR</p>
              </div>
              <button className="bg-blue-600 text-white px-10 py-4 rounded-2xl font-black italic uppercase tracking-tighter text-lg shadow-xl shadow-blue-600/20 group-hover:scale-105 transition-transform">
                ŞİMDİ BAŞLA
              </button>
            </div>

            {/* Deste Kategorileri */}
            {[
              { n: "Klinik Anatomi", count: 450, master: 85, color: "blue" },
              { n: "Farmakoloji: İlaçlar", count: 320, master: 62, color: "rose" },
              { n: "Patoloji: Neoplaziler", count: 210, master: 45, color: "emerald" },
              { n: "Fizyoloji: Endokrin", count: 180, master: 92, color: "amber" }
            ].map((d, i) => (
              <div key={i} className="col-span-3 bg-white border border-zinc-200 rounded-[2rem] p-6 shadow-sm hover:shadow-md transition-all group">
                <div className={"w-10 h-10 bg-" + d.color + "-50 rounded-xl flex items-center justify-center mb-4"}><Layers className={"w-5 h-5 text-" + d.color + "-500"} /></div>
                <h4 className="text-xs font-black text-zinc-800 uppercase italic tracking-tight">{d.n}</h4>
                <div className="mt-4 space-y-1">
                  <div className="flex justify-between text-[8px] font-black uppercase text-zinc-400">
                    <span>USTALIK</span>
                    <span>%{d.master}</span>
                  </div>
                  <div className="w-full h-1 bg-zinc-100 rounded-full overflow-hidden">
                    <div className={"h-full bg-" + d.color + "-500"} style={{ width: d.master + '%' }} />
                  </div>
                </div>
                <p className="text-[9px] font-bold text-zinc-400 mt-3 italic uppercase tracking-widest">{d.count} KART</p>
              </div>
            ))}

            {/* İstatistik Paneli */}
            <div className="col-span-12 bg-zinc-50 border border-zinc-200 rounded-[2.5rem] p-8 flex justify-around">
               <div className="text-center">
                 <p className="text-3xl font-black text-zinc-900 italic">2.4k</p>
                 <p className="text-[9px] font-black text-zinc-400 uppercase tracking-widest">ÖĞRENİLDİ</p>
               </div>
               <div className="w-px h-12 bg-zinc-200" />
               <div className="text-center">
                 <p className="text-3xl font-black text-blue-600 italic">156</p>
                 <p className="text-[9px] font-black text-zinc-400 uppercase tracking-widest">YENİ KART</p>
               </div>
               <div className="w-px h-12 bg-zinc-200" />
               <div className="text-center">
                 <p className="text-3xl font-black text-emerald-500 italic">94%</p>
                 <p className="text-[9px] font-black text-zinc-400 uppercase tracking-widest">HATIRLAMA ORANI</p>
               </div>
            </div>
          </div>
        </div>
      );
    }

    if (activeView === 'Soru Bankası') {
      return (
        <div className="space-y-6 text-left animate-in zoom-in-95 duration-500">
          {/* Üst Header ve Performans Skoru */}
          <div className="flex justify-between items-end mb-8">
            <div>
              <h1 className="text-2xl font-black tracking-tighter text-zinc-900 uppercase italic">SORU_MATRİKSİ</h1>
              <p className="text-[10px] font-bold text-zinc-400 uppercase tracking-[0.2em] mt-1 italic">BUGÜN: 150/400 SORU ÇÖZÜLDÜ • VERİMLİLİK: %82</p>
            </div>
            <div className="flex gap-4">
              <div className="text-right">
                <p className="text-[8px] font-black text-zinc-400 uppercase tracking-widest mb-1">TOPLAM ÇÖZÜLEN</p>
                <p className="text-xl font-black italic text-blue-600">12,450 <span className="text-[10px] text-zinc-400">SORU</span></p>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-12 gap-6">
            {/* Hızlı Erişim: Çıkmışlar ve Denemeler */}
            <div className="col-span-8 grid grid-cols-2 gap-6">
              <div className="bg-zinc-900 rounded-[2.5rem] p-8 text-white relative overflow-hidden group cursor-pointer shadow-xl">
                <div className="absolute top-0 right-0 p-6 opacity-10 group-hover:scale-110 transition-transform"><Target className="w-16 h-16" /></div>
                <h4 className="text-xl font-black italic tracking-tighter mb-2">ÇIKMIŞ SORULAR</h4>
                <p className="text-[10px] font-bold text-zinc-500 uppercase tracking-widest">SON 10 YILIN ARŞİVİ</p>
                <button className="mt-8 flex items-center gap-2 text-[10px] font-black uppercase text-blue-400">ÇALIŞMAYA BAŞLA <ChevronRight className="w-3 h-3" /></button>
              </div>
              <div className="bg-white border border-zinc-200 rounded-[2.5rem] p-8 shadow-sm group cursor-pointer hover:border-emerald-200 transition-all">
                <h4 className="text-xl font-black italic tracking-tighter text-zinc-900 mb-2 uppercase">DENEME SINAVI</h4>
                <p className="text-[10px] font-bold text-zinc-400 uppercase tracking-widest">TUS PROVASINI BAŞLAT</p>
                <div className="mt-8 flex items-center gap-2 text-[10px] font-black uppercase text-emerald-600">SÜREYİ BAŞLAT <ChevronRight className="w-3 h-3" /></div>
              </div>
            </div>

            {/* Ders Bazlı Başarı Analizi */}
            <div className="col-span-4 bg-white border border-zinc-200 rounded-[2.5rem] p-8 shadow-sm">
              <h3 className="text-[10px] font-black uppercase tracking-widest text-zinc-400 mb-6 italic">BAŞARI_ORANI_ANALİZİ</h3>
              <div className="space-y-4">
                {[ { d: "Dahiliye", p: 85 }, { d: "Cerrahi", p: 72 }, { d: "Pediatri", p: 68 } ].map((item, i) => (
                  <div key={i} className="space-y-1">
                    <div className="flex justify-between text-[10px] font-black uppercase italic">
                      <span className="text-zinc-600">{item.d}</span>
                      <span className="text-blue-600">%{item.p}</span>
                    </div>
                    <div className="w-full h-1.5 bg-zinc-100 rounded-full overflow-hidden">
                      <div className="h-full bg-blue-600 rounded-full" style={{ width: item.p + '%' }} />
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Soru Bankaları Listesi */}
            <div className="col-span-12 bg-white border border-zinc-200 rounded-[2.5rem] p-8 shadow-sm">
              <h3 className="text-[10px] font-black uppercase tracking-widest text-zinc-400 mb-6 italic">AKTİF_SORU_BANKALARI</h3>
              <div className="grid grid-cols-3 gap-6">
                {["Klinik Bilimler V1", "Vaka Soruları 2026", "Anatomi Spot Test"].map((bank, i) => (
                  <div key={i} className="flex items-center gap-4 p-5 bg-zinc-50 rounded-3xl border border-zinc-100 hover:border-blue-200 transition-all cursor-pointer group">
                    <div className="w-10 h-10 bg-white rounded-xl flex items-center justify-center border border-zinc-100 text-zinc-400 group-hover:text-blue-600 transition-colors"><Zap className="w-5 h-5" /></div>
                    <div>
                      <h5 className="text-xs font-black text-zinc-800 uppercase italic tracking-tight">{bank}</h5>
                      <p className="text-[9px] font-bold text-zinc-400 uppercase tracking-widest mt-0.5">240 Soru Kaldı</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      );
    }

    if (activeView === 'Slayt Listesi') {
      return (
        <div className="space-y-6 text-left animate-in slide-in-from-right-4 duration-500">
          <div className="flex justify-between items-end mb-8">
            <div>
              <h1 className="text-2xl font-black tracking-tighter text-zinc-900 uppercase italic">SLAYT_ARŞİVİ</h1>
              <p className="text-[10px] font-bold text-zinc-400 uppercase tracking-[0.2em] mt-1 italic">4. SINIF • TOPLAM 124 DÖKÜMAN • 4 YENİ</p>
            </div>
            <div className="flex gap-2">
              <button className="bg-zinc-900 text-white px-6 py-2 rounded-xl text-[9px] font-black uppercase tracking-widest hover:bg-zinc-800 transition-all shadow-lg shadow-zinc-900/10">YENİ YÜKLE</button>
            </div>
          </div>

          <div className="grid grid-cols-12 gap-6">
            {/* Ders Bazlı Klasörler */}
            {[
              { name: "ANATOMİ", files: 42, color: "blue", latest: "Kafa Çiftleri.pdf" },
              { name: "FİZYOLOJİ", files: 28, color: "emerald", latest: "Solunum Mekaniği.pdf" },
              { name: "HİSTOLOJİ", files: 15, color: "amber", latest: "Bağ Dokusu.pdf" },
              { name: "BİYOKİMYA", files: 39, color: "rose", latest: "Lipid Metabolizması.pdf" }
            ].map((d, i) => (
              <div key={i} className="col-span-3 bg-white border border-zinc-200 rounded-[2rem] p-6 shadow-sm hover:shadow-md transition-all cursor-pointer group">
                <div className={"w-12 h-12 bg-" + d.color + "-50 rounded-2xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform"}>
                  <Bookmark className={"w-6 h-6 text-" + d.color + "-500"} />
                </div>
                <h4 className="text-xs font-black text-zinc-800 tracking-tight italic">{d.name}</h4>
                <p className="text-[9px] font-bold text-zinc-400 uppercase mt-1 tracking-widest">{d.files} DOSYA</p>
                <div className="mt-4 pt-4 border-t border-zinc-100">
                  <p className="text-[8px] font-black text-zinc-300 uppercase mb-1">SON EKLENEN</p>
                  <p className="text-[10px] font-bold text-zinc-500 truncate italic tracking-tighter">{d.latest}</p>
                </div>
              </div>
            ))}

            {/* Son Görüntülenenler Listesi */}
            <div className="col-span-12 bg-white border border-zinc-200 rounded-[2.5rem] p-8 shadow-sm">
              <h3 className="text-[10px] font-black uppercase tracking-widest text-zinc-400 mb-6 italic">SON_ERİŞİLEN_DÖKÜMANLAR</h3>
              <div className="space-y-3">
                {["Farmakoloji_Giriş_Özet.pdf", "Mikrobiyoloji_Viroloji_Notları.docx", "Komite_1_Çıkmış_Sorular.pdf"].map((f, i) => (
                  <div key={i} className="flex items-center justify-between p-4 bg-zinc-50/50 rounded-2xl border border-zinc-100 hover:border-blue-200 transition-all group">
                    <div className="flex items-center gap-4">
                      <div className="p-2 bg-white rounded-lg border border-zinc-200 text-zinc-400 group-hover:text-blue-500"><FileText className="w-4 h-4" /></div>
                      <span className="text-xs font-bold text-zinc-700 uppercase tracking-tight italic">{f}</span>
                    </div>
                    <div className="flex gap-4 items-center">
                      <span className="text-[9px] font-black text-zinc-300 uppercase tabular-nums">2 SAAT ÖNCE</span>
                      <button className="text-zinc-400 hover:text-zinc-900"><ChevronRight className="w-4 h-4" /></button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      );
    }

    if (activeView === 'Sınavlar') {
      return (
        <div className="space-y-6 text-left animate-in slide-in-from-right-4 duration-500">
          <div className="flex justify-between items-end mb-8">
            <div>
              <h1 className="text-2xl font-black tracking-tighter text-zinc-900 uppercase italic">SINAV_MERKEZİ</h1>
              <p className="text-[10px] font-bold text-zinc-400 uppercase tracking-[0.2em] mt-1">Komite Başarı Oranı: %74 • Ortamala: 3.22</p>
            </div>
            <div className="bg-blue-600 px-6 py-2 rounded-xl shadow-lg shadow-blue-600/20">
              <span className="text-[9px] font-black text-white/70 uppercase tracking-widest">SIRADAKİ: 14 MAYIS</span>
            </div>
          </div>

          <div className="grid grid-cols-12 gap-6">
            {/* Yaklaşan Sınavlar */}
            <div className="col-span-12 bg-white border border-zinc-200 rounded-[2.5rem] p-8 shadow-sm">
              <h3 className="text-[10px] font-black uppercase tracking-widest text-zinc-400 mb-6 italic">TAKVİMLENMİŞ SINAVLAR</h3>
              <div className="space-y-4">
                {[
                  { name: "1. Komite: Hücre Bilimi", date: "21 Gün Kaldı", status: "Hazırlanıyor", color: "blue" },
                  { name: "İngilizce Muafiyet", date: "45 Gün Kaldı", status: "Beklemede", color: "zinc" }
                ].map((s, i) => (
                  <div key={i} className="flex items-center justify-between p-5 bg-zinc-50 rounded-3xl border border-zinc-100">
                    <div className="flex items-center gap-4">
                      <div className={"w-3 h-3 rounded-full bg-" + s.color + "-500 shadow-lg shadow-" + s.color + "-500/20"} />
                      <div>
                        <h4 className="text-sm font-bold text-zinc-800 uppercase tracking-tight italic">{s.name}</h4>
                        <p className="text-[10px] font-bold text-zinc-400 uppercase mt-1 italic">{s.date}</p>
                      </div>
                    </div>
                    <button className="text-[9px] font-black text-blue-600 uppercase border border-blue-200 px-4 py-2 rounded-xl hover:bg-blue-50 transition-colors">Detaylar</button>
                  </div>
                ))}
              </div>
            </div>

            {/* Geçmiş Notlar */}
            <div className="col-span-12 bg-white border border-zinc-200 rounded-[2.5rem] p-8 shadow-sm">
              <h3 className="text-[10px] font-black uppercase tracking-widest text-zinc-400 mb-6 italic">GEÇMİŞ_SONUÇLAR_ARŞİVİ</h3>
              <div className="grid grid-cols-3 gap-4">
                {[ { n: "Kurul 1", p: 78 }, { n: "Kurul 2", p: 82 }, { n: "Kurul 3", p: 64 } ].map((n, i) => (
                  <div key={i} className="p-6 bg-zinc-50 rounded-3xl border border-zinc-100 text-center">
                    <p className="text-[10px] font-black text-zinc-400 uppercase mb-2 italic">{n.n}</p>
                    <p className="text-3xl font-black italic tracking-tighter text-zinc-900">{n.p}<span className="text-xs not-italic text-zinc-400 ml-1">/100</span></p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      );
    }

    if (activeView === 'Ders Programı') {
      
    if (activeView === 'Ders Programı') {
      return (
        <div className="space-y-6 text-left animate-in fade-in duration-500">
          <div className="flex justify-between items-center mb-8">
            <div>
              <h1 className="text-2xl font-black tracking-tighter text-zinc-900 uppercase italic">AKADEMİK_AJANDA</h1>
              <p className="text-[10px] font-bold text-zinc-400 uppercase tracking-[0.2em] mt-1">4. Sınıf • Klinik Bilimler Dönemi</p>
            </div>
            <div className="flex gap-2">
              {['Pzt', 'Sal', 'Çar', 'Per', 'Cum'].map(day => (
                <button key={day} className="px-4 py-2 bg-white border border-zinc-200 rounded-xl text-[10px] font-black uppercase hover:bg-zinc-50 transition-colors">{day}</button>
              ))}
            </div>
          </div>

          <div className="bg-white border border-zinc-200 rounded-[2.5rem] overflow-hidden shadow-sm">
            <div className="grid grid-cols-12 border-b border-zinc-100 bg-zinc-50/50 p-4">
              <div className="col-span-2 text-[9px] font-black text-zinc-400 uppercase tracking-widest">SAAT</div>
              <div className="col-span-10 text-[9px] font-black text-zinc-400 uppercase tracking-widest">DERS VE KONU DETAYI</div>
            </div>
            <div className="divide-y divide-zinc-100">
              {[
                { time: "08:30 - 10:20", subject: "Dahiliye", topic: "Kardiyovasküler Sistem Muayenesi", loc: "Poliklinik B", type: "Pratik" },
                { time: "10:30 - 12:20", subject: "Genel Cerrahi", topic: "Akut Karın Tanı Algoritması", loc: "Amfi 1", type: "Teorik" },
                { time: "13:30 - 15:20", subject: "Radyoloji", topic: "Toraks BT Değerlendirme", loc: "Radyoloji Lab", type: "Pratik" }
              ].map((item, i) => (
                <div key={i} className="grid grid-cols-12 p-6 hover:bg-zinc-50/50 transition-colors group">
                  <div className="col-span-2 font-black tabular-nums text-zinc-400 group-hover:text-blue-600 transition-colors text-sm">{item.time}</div>
                  <div className="col-span-10 flex justify-between items-center">
                    <div>
                      <h4 className="text-sm font-bold text-zinc-800 uppercase italic tracking-tight">{item.subject}: {item.topic}</h4>
                      <p className="text-[10px] font-bold text-zinc-400 uppercase mt-1">{item.loc} • {item.type}</p>
                    </div>
                    <div className={"px-3 py-1 rounded-full text-[8px] font-black uppercase tracking-widest " + (item.type === 'Pratik' ? "bg-emerald-100 text-emerald-700" : "bg-blue-100 text-blue-700")}>
                      {item.type}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      );
    }

    return (
        <div className="space-y-6 text-left animate-in fade-in duration-500">
          <div className="flex justify-between items-center mb-8">
            <div>
              <h1 className="text-2xl font-black tracking-tighter text-zinc-900 uppercase italic">AKADEMİK_AJANDA</h1>
              <p className="text-[10px] font-bold text-zinc-400 uppercase tracking-[0.2em] mt-1">4. Sınıf • Klinik Bilimler Dönemi</p>
            </div>
            <div className="flex gap-2">
              {['Pzt', 'Sal', 'Çar', 'Per', 'Cum'].map(day => (
                <button key={day} className="px-4 py-2 bg-white border border-zinc-200 rounded-xl text-[10px] font-black uppercase hover:bg-zinc-50 transition-colors">{day}</button>
              ))}
            </div>
          </div>

          <div className="bg-white border border-zinc-200 rounded-[2.5rem] overflow-hidden shadow-sm">
            <div className="grid grid-cols-12 border-b border-zinc-100 bg-zinc-50/50 p-4">
              <div className="col-span-2 text-[9px] font-black text-zinc-400 uppercase tracking-widest">SAAT</div>
              <div className="col-span-10 text-[9px] font-black text-zinc-400 uppercase tracking-widest">DERS VE KONU DETAYI</div>
            </div>
            <div className="divide-y divide-zinc-100">
              {[
                { time: "08:30 - 10:20", subject: "Dahiliye", topic: "Kardiyovasküler Sistem Muayenesi", loc: "Poliklinik B", type: "Pratik" },
                { time: "10:30 - 12:20", subject: "Genel Cerrahi", topic: "Akut Karın Tanı Algoritması", loc: "Amfi 1", type: "Teorik" },
                { time: "13:30 - 15:20", subject: "Radyoloji", topic: "Toraks BT Değerlendirme", loc: "Radyoloji Lab", type: "Pratik" }
              ].map((item, i) => (
                <div key={i} className="grid grid-cols-12 p-6 hover:bg-zinc-50/50 transition-colors group">
                  <div className="col-span-2 font-black tabular-nums text-zinc-400 group-hover:text-blue-600 transition-colors text-sm">{item.time}</div>
                  <div className="col-span-10 flex justify-between items-center">
                    <div>
                      <h4 className="text-sm font-bold text-zinc-800 uppercase italic tracking-tight">{item.subject}: {item.topic}</h4>
                      <p className="text-[10px] font-bold text-zinc-400 uppercase mt-1">{item.loc} • {item.type}</p>
                    </div>
                    <div className={"px-3 py-1 rounded-full text-[8px] font-black uppercase tracking-widest " + (item.type === 'Pratik' ? "bg-emerald-100 text-emerald-700" : "bg-blue-100 text-blue-700")}>
                      {item.type}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      );
    }

    return () => clearInterval(t);
  }, []);

  const renderContent = () => {
    if (activeView === 'Ana Sayfa') {
      return (
        <div className="space-y-6">
          {/* Üst Karşılama */}
          <div className="flex justify-between items-end mb-8 text-left">
            <div>
              <h1 className="text-2xl font-black tracking-tighter text-zinc-900 uppercase italic">MERKEZ_POLİKLİNİK</h1>
              <p className="text-[10px] font-bold text-zinc-400 uppercase tracking-[0.2em] mt-1">Sistem Durumu: Stabil • Ücretsiz Plan</p>
            </div>
            <div className="bg-white border border-zinc-200 px-6 py-3 rounded-2xl shadow-sm text-center">
              <p className="text-[9px] font-black text-zinc-400 uppercase mb-1">TUS Sayacı</p>
              <p className="text-xl font-black italic text-zinc-900">184 <span className="text-[10px] not-italic text-zinc-400">GÜN</span></p>
            </div>
          </div>

          <div className="grid grid-cols-12 gap-6">
            <div className="col-span-8 bg-white border border-zinc-200 rounded-[2.5rem] p-8 shadow-sm">
              <div className="flex justify-between items-center mb-6"><h3 className="text-[11px] font-black uppercase tracking-widest text-zinc-400 flex items-center gap-2"><Clock className="w-4 h-4"/> GÜNLÜK DERS AKIŞI</h3><button className="text-[9px] font-black text-blue-600 uppercase">Tümünü Gör</button></div>
              <div className="p-4 bg-zinc-50 rounded-2xl border border-zinc-100 flex justify-between items-center group hover:border-blue-200 transition-all text-left">
                <div className="flex items-center gap-4"><div className="w-1.5 h-10 bg-blue-500 rounded-full" /><div><h4 className="text-sm font-bold text-zinc-800 uppercase italic">Anatomi: Üst Ekstremite</h4><p className="text-[10px] font-bold text-zinc-400 uppercase mt-0.5">Amfi 1 • Prof. Dr. Ahmet Y.</p></div></div>
                <span className="text-xs font-black text-zinc-400">08:30 - 10:20</span>
              </div>
            </div>
            <div className="col-span-4 bg-zinc-900 rounded-[2.5rem] p-8 text-white relative overflow-hidden shadow-xl text-left">
              <div className="absolute top-0 right-0 p-6 opacity-10"><Target className="w-20 h-20" /></div>
              <h3 className="text-[10px] font-black uppercase tracking-widest text-zinc-500 mb-10 italic">SIRADAKİ ENGEL</h3>
              <h4 className="text-2xl font-black italic text-white leading-none">1. KOMİTE:<br/>HÜCRE BİLİMİ</h4>
              <p className="text-4xl font-black text-blue-500 italic mt-6">21 <span className="text-xs not-italic text-zinc-500 uppercase">GÜN</span></p>
            </div>
            {/* Araçlar */}
            <div className="col-span-12 grid grid-cols-4 gap-6 mt-2">
              {[ { n: "Slayt Listesi", i: Bookmark, c: "blue", d: "4 Dosya" }, { n: "Spot Bilgiler", i: Zap, c: "amber", d: "10 Spot" }, { n: "Lab Değerleri", i: Beaker, c: "emerald", d: "Referans" } ].map((x, i) => (
                <div key={i} className="bg-white border border-zinc-200 rounded-[2rem] p-6 shadow-sm hover:shadow-md cursor-pointer group text-left">
                  <div className={"w-10 h-10 bg-zinc-100 rounded-xl flex items-center justify-center mb-4 group-hover:bg-"+x.c+"-50"}><x.i className="w-5 h-5 text-zinc-400" /></div>
                  <h4 className="text-[11px] font-black uppercase text-zinc-800">{x.n}</h4><p className="text-[9px] font-bold text-zinc-400 mt-1 italic tracking-widest">{x.d}</p>
                </div>
              ))}
              <div className="bg-blue-600 rounded-[2rem] p-6 shadow-xl relative overflow-hidden text-white group cursor-pointer text-left">
                <Crown className="absolute -right-4 -bottom-4 w-20 h-20 text-white/10 group-hover:scale-110 transition-transform" />
                <p className="text-[10px] font-black uppercase italic tracking-widest relative z-10">AI PLUS'A GEÇ</p>
                <div className="flex items-center gap-2 relative z-10 font-black text-[11px] italic uppercase mt-auto">YÜKSELT <ChevronRight className="w-3 h-3" /></div>
              </div>
            </div>
            <div className="col-span-12 grid grid-cols-3 gap-6">
              <div className="col-span-2 bg-[#fff3cd] border border-[#ffeeba] rounded-[2.5rem] p-6 flex items-center gap-5 text-left"><div className="w-12 h-12 bg-[#856404]/10 rounded-full flex items-center justify-center shrink-0"><StickyNote className="w-6 h-6 text-[#856404]" /></div><p className="text-xs font-bold text-[#856404] italic uppercase">Not: Yarınki histoloji labı için önlüğünü unutma!</p></div>
              <div className="bg-white border border-zinc-200 rounded-[2.5rem] p-6 flex flex-col items-center justify-center"><div className="text-zinc-300 mb-1 font-black text-[9px] tracking-[0.2em]">YEREL SAAT</div><h2 className="text-3xl font-black text-zinc-900 italic">{time.toLocaleTimeString('tr-TR', { hour: '2-digit', minute: '2-digit' })}</h2></div>
            </div>
          </div>
        </div>
      );
    }
    return (
      <div className="h-full flex items-center justify-center italic text-zinc-300 font-black uppercase tracking-[0.5em]">
        {activeView}_SAYFASI_YÜKLENİYOR...
      </div>
    );
  };

  return (
    <div className="h-full w-full bg-[#fcfcfc] text-zinc-900 flex font-sans overflow-hidden">
      <Sidebar activePlan="free" activeItem={activeView} onItemClick={setActiveView} />
      <main className="flex-1 p-8 overflow-y-auto custom-scrollbar">
        {renderContent()}
      </main>
    </div>
  );
}
