"use client";

import React, { useState } from "react";
import Link from "next/link";
import { 
  UserPlus, Search, Filter, ChevronRight, 
  Activity, Droplets, AlertTriangle, 
  User, Hash, Bed, Calendar, ArrowUpRight, Microscope
} from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const PATIENTS = [
  { id: "1", name: "Mehmet Yılmaz", protocol: "2024/882", bed: "D-12", status: "Kritik", diagnosis: "Akut Böbrek Hasarı", priority: "high" },
  { id: "2", name: "Ayşe Demir", protocol: "2024/915", bed: "G-04", status: "Stabil", diagnosis: "Tip 2 DM / Nefropati", priority: "medium" },
  { id: "3", name: "Caner Öz", protocol: "2024/771", bed: "D-08", status: "Gözlem", diagnosis: "Pnömoni / Sepsis", priority: "low" },
];

export default function PatientVault() {
  const [search, setSearch] = useState("");

  return (
    <main className="relative flex min-h-screen bg-[#050810] overflow-hidden text-white font-sans">
      
      {/* BIO-AURORA ARKAPLAN */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <div className="absolute top-[-10%] left-[-10%] w-[60%] h-[60%] rounded-full bg-emerald-900/10 blur-[140px] animate-pulse" />
        <div className="absolute bottom-[-10%] right-[-10%] w-[50%] h-[50%] rounded-full bg-blue-900/10 blur-[120px]" />
      </div>

      <section className="relative z-10 flex-1 p-8 md:p-16 overflow-y-auto h-screen">
        <div className="max-w-5xl mx-auto">
          
          <header className="mb-16 flex flex-col md:flex-row md:items-end justify-between gap-8">
            <motion.div initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }}>
              <div className="flex items-center gap-2 mb-4 text-emerald-500 font-black text-[10px] uppercase tracking-[0.4em]">
                <Activity size={14} /> Canlı Klinik İzlem
              </div>
              <h1 className="text-7xl font-black tracking-tighter leading-none">
                Vaka <br /> 
                <span className="bg-clip-text text-transparent bg-gradient-to-r from-emerald-400 to-cyan-400">Defteri.</span>
              </h1>
            </motion.div>

            <div className="flex items-center gap-4">
              <div className="relative group">
                <Search className="absolute left-5 top-1/2 -translate-y-1/2 text-slate-500" size={18} />
                <input 
                  type="text" 
                  placeholder="Hasta veya Protokol..." 
                  onChange={(e) => setSearch(e.target.value)}
                  className="w-full sm:w-64 pl-14 pr-6 py-5 bg-white/[0.03] border border-white/5 rounded-3xl text-sm font-bold focus:border-emerald-500/50 outline-none transition-all placeholder:text-slate-600"
                />
              </div>
              <button className="flex items-center gap-3 px-8 py-5 bg-emerald-600 hover:bg-emerald-500 text-white rounded-3xl font-black text-sm shadow-[0_0_40px_rgba(16,185,129,0.2)] transition-all">
                <UserPlus size={18} /> YENİ VAKA
              </button>
            </div>
          </header>

          <div className="space-y-4">
            <AnimatePresence>
              {PATIENTS.filter(p => p.name.toLowerCase().includes(search.toLowerCase())).map((patient) => (
                <motion.div
                  layout
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  whileHover={{ x: 10 }}
                  key={patient.id}
                  className="group relative bg-white/[0.02] backdrop-blur-3xl border border-white/5 p-6 rounded-[2.5rem] hover:bg-white/[0.05] transition-all duration-500 flex flex-col md:flex-row items-center justify-between gap-6 overflow-hidden"
                >
                  <div className={`absolute left-0 top-0 bottom-0 w-2 ${
                    patient.priority === 'high' ? 'bg-rose-500 shadow-[0_0_20px_rgba(244,63,94,0.5)]' : 
                    patient.priority === 'medium' ? 'bg-amber-500 shadow-[0_0_20px_rgba(245,158,11,0.5)]' : 
                    'bg-emerald-500 shadow-[0_0_20px_rgba(16,185,129,0.5)]'
                  }`} />

                  <div className="flex items-center gap-6 flex-1">
                    <div className="w-16 h-16 bg-white/5 rounded-2xl flex items-center justify-center border border-white/10 group-hover:border-emerald-500/30 transition-colors">
                      <User className="text-slate-500 group-hover:text-emerald-400" size={28} />
                    </div>
                    <div>
                      <div className="flex items-center gap-3 mb-1">
                        <h3 className="text-2xl font-black text-white">{patient.name}</h3>
                        <span className="text-[10px] font-black text-slate-500 bg-white/5 px-2 py-0.5 rounded-md border border-white/5">
                          {patient.protocol}
                        </span>
                      </div>
                      <p className="text-sm font-bold text-slate-400 italic">{patient.diagnosis}</p>
                    </div>
                  </div>

                  <div className="flex items-center gap-8 px-8 border-x border-white/5 hidden lg:flex text-center">
                    <div>
                      <p className="text-[9px] font-black text-slate-600 uppercase mb-1 tracking-widest">Yatak</p>
                      <p className="text-xl font-black text-slate-200">{patient.bed}</p>
                    </div>
                    <div>
                      <p className="text-[9px] font-black text-slate-600 uppercase mb-1 tracking-widest">Durum</p>
                      <div className={`flex items-center gap-1.5 font-black text-sm ${
                        patient.priority === 'high' ? 'text-rose-500' : 'text-emerald-500'
                      }`}>
                        <div className={`w-1.5 h-1.5 rounded-full animate-pulse ${
                          patient.priority === 'high' ? 'bg-rose-500' : 'bg-emerald-500'
                        }`} />
                        {patient.status}
                      </div>
                    </div>
                  </div>

                  <div className="flex items-center gap-4">
                    <Link href={`/dashboard/patients/${patient.id}`}>
                      <div className="w-14 h-14 rounded-full bg-white/5 hover:bg-emerald-600 flex items-center justify-center text-white transition-all group-hover:scale-110 shadow-xl">
                        <ArrowUpRight size={24} />
                      </div>
                    </Link>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </div>

          <footer className="mt-20 p-10 bg-gradient-to-br from-white/[0.03] to-transparent rounded-[3rem] border border-white/5 relative overflow-hidden group">
            <Microscope className="absolute -right-6 -bottom-6 opacity-5 text-emerald-400 group-hover:rotate-12 transition-transform" size={160} />
            <div className="relative z-10 max-w-lg">
              <h4 className="text-xl font-black text-white mb-2">Vizit Notu</h4>
              <p className="text-sm font-bold text-slate-500 leading-relaxed">
                Tüm vakaların son lab değerlerini girerek vizitten önce raporları hazırla Kemal.
              </p>
            </div>
          </footer>
        </div>
      </section>
    </main>
  );
}
