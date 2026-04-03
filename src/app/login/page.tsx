"use client";
import { motion } from "framer-motion";
import { Activity, ArrowLeft, Mail, Lock } from "lucide-react";
import Link from "next/link";

export default function LoginPage() {
  return (
    <main className="min-h-screen bg-slate-50 flex items-center justify-center p-6">
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="max-w-md w-full bg-white rounded-[3rem] shadow-2xl shadow-slate-200 p-12 border border-slate-100 text-slate-900"
      >
        <Link href="/" className="inline-flex items-center gap-2 text-slate-400 hover:text-blue-600 transition-colors mb-8 font-bold">
          <ArrowLeft size={20} /> Ana Sayfaya Dön
        </Link>
        
        <div className="flex items-center gap-3 mb-10">
          <div className="w-12 h-12 bg-blue-600 rounded-2xl flex items-center justify-center text-white shadow-lg shadow-blue-200">
            <Activity size={28} />
          </div>
          <h1 className="text-3xl font-black tracking-tighter">Giriş Yap</h1>
        </div>

        <form className="space-y-6">
          <div className="space-y-2">
            <label className="text-sm font-black uppercase text-slate-400 ml-1">E-Posta</label>
            <div className="relative text-slate-900">
              <Mail className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" size={20} />
              <input type="email" placeholder="doktor@medtrack.pro" className="w-full p-5 pl-12 bg-slate-50 border border-slate-100 rounded-2xl focus:outline-none focus:ring-2 focus:ring-blue-600 transition-all font-medium" />
            </div>
          </div>

          <div className="space-y-2">
            <label className="text-sm font-black uppercase text-slate-400 ml-1">Şifre</label>
            <div className="relative text-slate-900">
              <Lock className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" size={20} />
              <input type="password" placeholder="••••••••" className="w-full p-5 pl-12 bg-slate-50 border border-slate-100 rounded-2xl focus:outline-none focus:ring-2 focus:ring-blue-600 transition-all font-medium" />
            </div>
          </div>

          <button type="button" className="w-full p-6 bg-blue-600 text-white rounded-2xl font-black text-xl shadow-xl shadow-blue-200 hover:scale-[1.02] transition-all active:scale-95">
            Sisteme Gir
          </button>
        </form>

        <p className="mt-8 text-center text-slate-500 font-bold">
          Henüz hesabın yok mu? <Link href="/signup" className="text-blue-600 hover:underline">Hemen Kaydol</Link>
        </p>
      </motion.div>
    </main>
  );
}
