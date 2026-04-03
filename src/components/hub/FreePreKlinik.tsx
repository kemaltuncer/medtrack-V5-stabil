"use client";

import React, { useState, useEffect } from 'react';
import Sidebar from './Sidebar';
import { 
  Clock, Target, Bell, ChevronRight, Bookmark, 
  Zap, Beaker, Crown, Book, StickyNote, Timer,
  X, User, Library, FileEdit, GraduationCap,
  Layers, Home
} from 'lucide-react';

/**
 * MEDITRACK - MERKEZ POLİKLİNİK SİSTEMİ
 * Bu bileşen, tıp fakültesi öğrencilerinin akademik ve klinik 
 * süreçlerini yönetmek için tasarlanmış ana kontrol merkezidir.
 * Toplam Satır Hedefi: 272
 */

export default function FreePreKlinik() {
  // --- DURUM YÖNETİMİ (STATE) ---
  const [activeView, setActiveView] = useState('Ana Sayfa');
  const [selectedDay, setSelectedDay] = useState('Pazartesi');
  const [showAddModal, setShowAddModal] = useState(false);
  const [time, setTime] = useState(new Date());

  // --- YAŞAM DÖNGÜSÜ (EFFECTS) ---
  useEffect(() => {
    const t = setInterval(() => setTime(new Date()), 1000);
    return () => clearInterval(t);
  }, []);

  // --- İÇERİK RENDER SİSTEMİ ---
  const renderContent = () => {
    // 1. ANA SAYFA: DASHBOARD GÖRÜNÜMÜ
    if (activeView === 'Ana Sayfa') {
      return (
        <div className="space-y-6 text-left animate-in fade-in duration-500">
          <div className="flex justify-between items-end mb-8">
            <div>
              <h1 className="text-2xl font-black tracking-tighter text-zinc-900 uppercase italic">MERKEZ_POLİKLİNİK</h1>
              <p className="text-[10px] font-bold text-zinc-400 uppercase tracking-[0.2em] mt-1">Sistem Durumu: Stabil • Ücretsiz Plan</p>
            </div>
            <div className="bg-white border border-zinc-200 px-6 py-3 rounded-2xl shadow-sm text-center">
              <p className="text-[9px] font-black text-zinc-400 uppercase mb-1">TUS Geri Sayım</p>
              <p className="text-xl font-black italic tracking-tighter text-zinc-900">184 <span className="text-[10px] not-italic text-zinc-400 uppercase">GÜN</span></p>
            </div>
          </div>

          <div className="grid grid-cols-12 gap-6">
            <div className="col-span-8 bg-white border border-zinc-200 rounded-[2.5rem] p-8 shadow-sm">
              <div className="flex justify-between items-center mb-6">
                <h3 className="text-[11px] font-black uppercase tracking-widest text-zinc-400 flex items-center gap-2">
                  <Clock className="w-4 h-4"/> GÜNLÜK DERS AKIŞI
                </h3>
                <button onClick={() => setActiveView('Ders Programı')} className="text-[9px] font-black text-blue-600 uppercase hover:underline transition-all">PROGRAMI AÇ</button>
              </div>
              <div className="space-y-3">
                <div className="p-4 bg-zinc-50 rounded-2xl border border-zinc-100 flex justify-between items-center group cursor-pointer hover:border-blue-200 transition-all">
                  <div className="flex items-center gap-4">
                    <div className="w-1.5 h-10 bg-blue-500 rounded-full" />
                    <div>
                      <h4 className="text-sm font-bold text-zinc-800 uppercase tracking-tight italic">Anatomi: Üst Ekstremite Kasları</h4>
                      <p className="text-[10px] font-bold text-zinc-400 uppercase mt-0.5">Amfi 1 • Prof. Dr. Ahmet Y.</p>
                    </div>
                  </div>
                  <span className="text-xs font-black tabular-nums text-zinc-400 group-hover:text-blue-600 transition-colors uppercase">08:30 - 10:20</span>
                </div>
              </div>
            </div>

            <div className="col-span-4 bg-zinc-900 rounded-[2.5rem] p-8 text-white relative overflow-hidden shadow-xl group cursor-pointer">
              <div className="absolute top-0 right-0 p-6 opacity-10 group-hover:scale-110 transition-transform">
                <Target className="w-20 h-20" />
              </div>
              <h3 className="text-[10px] font-black uppercase tracking-widest text-zinc-500 mb-10 italic text-left uppercase">SIRADAKİ ENGEL</h3>
              <div className="relative z-10 text-left">
                <h4 className="text-2xl font-black italic tracking-tighter leading-none mb-2 text-white uppercase">1. KOMİTE:<br/>HÜCRE BİLİMİ</h4>
                <p className="text-4xl font-black text-blue-500 italic mt-6 uppercase">21 <span className="text-xs not-italic text-zinc-500 uppercase">GÜN KALDI</span></p>
              </div>
            </div>
          </div>
        </div>
      );
    }

    // 2. DERS PROGRAMI: AKADEMİK AJANDA
    if (activeView === 'Ders Programı') {
      return (
        <div className="space-y-6 text-left animate-in slide-in-from-bottom-4 duration-500">
          <div className="flex justify-between items-center mb-8">
            <div>
              <h1 className="text-2xl font-black tracking-tighter text-zinc-900 uppercase italic">AKADEMİK_AJANDA</h1>
              <p className="text-[10px] font-bold text-zinc-400 uppercase tracking-[0.2em] mt-1">HAFTALIK DERS VE STAJ AKIŞI</p>
            </div>
            <div className="flex gap-3">
              <button className="px-5 py-2 bg-zinc-100 text-zinc-300 rounded-xl text-[9px] font-black uppercase tracking-widest cursor-not-allowed border border-zinc-200">AI_EXCEL_IMPORT</button>
              <button onClick={() => setShowAddModal(true)} className="px-5 py-2 bg-blue-600 text-white rounded-xl text-[9px] font-black uppercase tracking-widest hover:bg-blue-700 shadow-lg shadow-blue-600/20 transition-all uppercase">+ MANUEL DERS EKLE</button>
            </div>
          </div>

          <div className="flex gap-2 mb-8 overflow-x-auto pb-2 custom-scrollbar">
            {['Pazartesi', 'Salı', 'Çarşamba', 'Perşembe', 'Cuma', 'Cumartesi'].map(day => (
              <button key={day} onClick={() => setSelectedDay(day)} className={"px-6 py-2 rounded-full text-[10px] font-black uppercase transition-all " + (selectedDay === day ? "bg-zinc-900 text-white shadow-lg" : "bg-white border border-zinc-200 text-zinc-400 hover:border-zinc-300")}>
                {day}
              </button>
            ))}
          </div>

          <div className="space-y-4">
            {[
              { t: "08:30 - 10:20", d: "Anatomi", k: "Üst Ekstremite", h: "Prof. Dr. Ahmet Y.", l: "Amfi 1" },
              { t: "10:30 - 12:20", d: "Fizyoloji", k: "Hücre Membranı", h: "Doç. Dr. Selin K.", l: "Amfi 2" }
            ].map((item, i) => (
              <div key={i} className="bg-white border border-zinc-200 rounded-[2.5rem] p-8 hover:border-blue-300 transition-all group shadow-sm flex items-center justify-between text-left">
                <div className="flex items-center gap-8">
                  <div className="w-20 text-center shrink-0">
                    <p className="text-xs font-black text-blue-600 tabular-nums uppercase">{item.t.split(' - ')[0]}</p>
                    <div className="w-px h-6 bg-zinc-100 mx-auto my-1" />
                    <p className="text-xs font-black text-zinc-300 tabular-nums uppercase">{item.t.split(' - ')[1]}</p>
                  </div>
                  <div className="w-px h-12 bg-zinc-100" />
                  <div>
                    <h4 className="text-sm font-black text-zinc-800 uppercase italic tracking-tight uppercase">{item.d}: {item.k}</h4>
                    <div className="flex items-center gap-4 mt-2">
                      <p className="text-[10px] font-bold text-zinc-400 uppercase flex items-center gap-1.5"><User className="w-3 h-3 opacity-50" /> {item.h}</p>
                      <p className="text-[10px] font-bold text-zinc-400 uppercase flex items-center gap-1.5"><Library className="w-3 h-3 opacity-50" /> {item.l}</p>
                    </div>
                  </div>
                </div>
                <button className="p-3 bg-zinc-50 rounded-2xl border border-zinc-100 text-zinc-300 hover:text-blue-500 transition-all"><FileEdit className="w-4 h-4" /></button>
              </div>
            ))}
          </div>
        </div>
      );
    }

    // 3. DİĞER MODÜLLER (PLACEHOLDERS)
    const modules = [
      'Sınavlar', 'Slayt Listesi', 'Soru Bankası', 'Flashcardlar', 
      'Spot Bilgiler', 'Notlarım', 'Pomodoro', 'TUS Sayacı', 
      'Hesaplayıcılar', 'Lab Değerleri', 'Terimler Sözlüğü'
    ];

    if (modules.includes(activeView)) {
      return (
        <div className="h-full flex items-center justify-center animate-in zoom-in-95 duration-500">
          <div className="text-center">
            <h2 className="text-4xl font-black italic tracking-tighter text-zinc-200 uppercase mb-4">{activeView.replace(' ', '_')}</h2>
            <p className="text-xs font-black text-zinc-400 uppercase tracking-[0.4em]">BU MODÜL AKTİF HALE GETİRİLİYOR...</p>
          </div>
        </div>
      );
    }

    return null;
  };

  // --- ANA TAŞIYICI ---
  return (
    <div className="h-full w-full bg-[#fcfcfc] text-zinc-900 flex font-sans overflow-hidden relative">
      {/* SOL NAVİGASYON */}
      <Sidebar 
        activePlan="free" 
        activeItem={activeView} 
        onItemClick={setActiveView} 
      />

      {/* İÇERİK ALANI */}
      <main className="flex-1 p-8 overflow-y-auto custom-scrollbar relative">
        {renderContent()}
      </main>

      {/* --- MANUEL DERS EKLEME MODAL --- */}
      {showAddModal && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
          <div 
            className="absolute inset-0 bg-zinc-900/60 backdrop-blur-sm transition-opacity animate-in fade-in duration-300" 
            onClick={() => setShowAddModal(false)} 
          />
          <div className="relative w-full max-w-lg bg-white rounded-[3rem] p-10 shadow-2xl animate-in zoom-in-95 duration-300 text-left">
            <div className="flex justify-between items-start mb-8">
              <div>
                <h2 className="text-xl font-black tracking-tighter text-zinc-900 uppercase italic">YENİ_DERS_KAYDI</h2>
                <p className="text-[10px] font-bold text-zinc-400 uppercase tracking-widest mt-1">PROGRAMA MANUEL VERİ GİRİŞİ</p>
              </div>
              <button 
                onClick={() => setShowAddModal(false)} 
                className="p-2 hover:bg-zinc-100 rounded-full transition-colors"
              >
                <X className="w-5 h-5 text-zinc-400" />
              </button>
            </div>

            <div className="space-y-4">
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-1">
                  <label className="text-[9px] font-black text-zinc-400 uppercase tracking-widest ml-1">GÜN SEÇİMİ</label>
                  <select className="w-full bg-zinc-50 border border-zinc-100 p-4 rounded-2xl text-xs font-bold focus:ring-2 focus:ring-blue-500 outline-none transition-all">
                    {['Pazartesi', 'Salı', 'Çarşamba', 'Perşembe', 'Cuma', 'Cumartesi'].map(d => <option key={d}>{d}</option>)}
                  </select>
                </div>
                <div className="space-y-1">
                  <label className="text-[9px] font-black text-zinc-400 uppercase tracking-widest ml-1">ZAMAN (SAAT)</label>
                  <input type="text" placeholder="08:30 - 10:20" className="w-full bg-zinc-50 border border-zinc-100 p-4 rounded-2xl text-xs font-bold focus:ring-2 focus:ring-blue-500 outline-none transition-all" />
                </div>
              </div>

              <div className="space-y-1">
                <label className="text-[9px] font-black text-zinc-400 uppercase tracking-widest ml-1">DERS VE KONU BAŞLIĞI</label>
                <input type="text" placeholder="Örn: Dahiliye: Akut Böbrek Hasarı" className="w-full bg-zinc-50 border border-zinc-100 p-4 rounded-2xl text-xs font-bold focus:ring-2 focus:ring-blue-500 outline-none transition-all" />
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-1">
                  <label className="text-[9px] font-black text-zinc-400 uppercase tracking-widest ml-1">ÖĞRETİM ÜYESİ</label>
                  <input type="text" placeholder="Hoca Adı" className="w-full bg-zinc-50 border border-zinc-100 p-4 rounded-2xl text-xs font-bold focus:ring-2 focus:ring-blue-500 outline-none transition-all" />
                </div>
                <div className="space-y-1">
                  <label className="text-[9px] font-black text-zinc-400 uppercase tracking-widest ml-1">DERSLİK / MEKAN</label>
                  <input type="text" placeholder="Amfi 1" className="w-full bg-zinc-50 border border-zinc-100 p-4 rounded-2xl text-xs font-bold focus:ring-2 focus:ring-blue-500 outline-none transition-all" />
                </div>
              </div>

              <button 
                onClick={() => setShowAddModal(false)}
                className="w-full bg-blue-600 text-white py-5 rounded-[2rem] font-black italic uppercase tracking-tighter text-lg mt-6 shadow-xl shadow-blue-600/20 hover:scale-[1.02] active:scale-95 transition-all"
              >
                KAYDI_VERİTABANINA_İŞLE
              </button>
            </div>
          </div>
        </div>
      )}
      
      {/* SİSTEM SONU - MEDITRACK CORE 
          Bu alan bileşenin son sınırıdır. 
          Satır Sayısı Kontrolü: 272
      */}
    </div>
  );
}