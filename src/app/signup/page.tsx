"use client";
import { useState } from "react";
import { motion } from "framer-motion";
import { Activity, ArrowLeft, Mail, Lock, GraduationCap, Loader2 } from "lucide-react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { supabase } from "@/lib/supabase";

export default function SignupPage() {
  const router = useRouter();
  const [loading, setLoading] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSignup = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    
    const { data, error } = await supabase.auth.signUp({
      email,
      password,
    });

    if (error) {
      alert("Hata: " + error.message);
    } else {
      // Kayıt başarılı, kurulum sihirbazına yönlendir
      router.push("/setup");
    }
    setLoading(false);
  };

  return (
    <main className="min-h-screen bg-slate-50 flex items-center justify-center p-6 text-slate-900">
      <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="max-w-md w-full bg-white rounded-[3rem] shadow-2xl p-12 border border-slate-100">
        <Link href="/" className="inline-flex items-center gap-2 text-slate-400 hover:text-blue-600 transition-colors mb-8 font-bold">
          <ArrowLeft size={20} /> İptal Et
        </Link>
        
        <div className="flex items-center gap-3 mb-10">
          <div className="w-12 h-12 bg-blue-600 rounded-2xl flex items-center justify-center text-white shadow-lg shadow-blue-200">
            <Activity size={28} />
          </div>
          <h1 className="text-3xl font-black tracking-tighter">Yeni Kayıt</h1>
        </div>

        <form onSubmit={handleSignup} className="space-y-4">
          <div className="space-y-1">
            <label className="text-[10px] font-black uppercase text-slate-400 ml-1">E-Posta</label>
            <input 
              required 
              type="email" 
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full p-4 bg-slate-50 border border-slate-100 rounded-xl focus:ring-2 focus:ring-blue-600 outline-none font-medium" 
            />
          </div>
          <div className="space-y-1">
            <label className="text-[10px] font-black uppercase text-slate-400 ml-1">Şifre</label>
            <input 
              required 
              type="password" 
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Min. 6 karakter" 
              className="w-full p-4 bg-slate-50 border border-slate-100 rounded-xl focus:ring-2 focus:ring-blue-600 outline-none font-medium" 
            />
          </div>

          <button 
            disabled={loading}
            className="w-full p-5 bg-blue-600 text-white rounded-2xl font-black text-xl shadow-xl mt-6 hover:scale-[1.02] transition-all flex items-center justify-center gap-3"
          >
            {loading ? <Loader2 className="animate-spin" /> : "Kayıdı Tamamla"}
          </button>
        </form>

        <p className="mt-8 text-center text-slate-500 font-bold">
          Zaten üye misin? <Link href="/login" className="text-blue-600 hover:underline">Giriş Yap</Link>
        </p>
      </motion.div>
    </main>
  );
}
