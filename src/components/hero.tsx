"use client";
import { motion } from "framer-motion";
import { ChevronRight, Sparkles, Activity } from "lucide-react";

export function Hero() {
  return (
    <section className="relative pt-40 pb-20 px-6 flex flex-col items-center text-center overflow-hidden min-h-screen justify-center">
      <div className="absolute top-0 -z-10 h-full w-full bg-white">
        <div className="absolute bottom-auto left-auto right-0 top-0 h-[800px] w-[800px] -translate-x-[30%] translate-y-[10%] rounded-full bg-blue-50/50 blur-[120px]"></div>
      </div>
      
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="inline-flex items-center gap-2 bg-blue-50 text-blue-700 px-4 py-1.5 rounded-full text-sm font-semibold mb-8 border border-blue-100"
      >
        <Sparkles size={16} /> MedTrack 5.0: Geleceğin Hekimleri İçin
      </motion.div>

      <motion.h1 
        initial={{ opacity: 0, scale: 0.9 }}
        whileInView={{ opacity: 1, scale: 1 }}
        className="text-6xl md:text-8xl font-black tracking-tight text-slate-900 max-w-5xl mb-8 leading-[1.1]"
      >
        Tıp Eğitimini <span className="text-blue-600">Yeniden</span> Tanımla.
      </motion.h1>

      <motion.p 
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        className="text-xl text-slate-600 max-w-3xl mb-12 leading-relaxed"
      >
        Dashboard'undan TUS planına, AI vaka analizinden OSCE simülatörüne kadar her şey tek bir platformda. Meditasyon değil, odaklanma; ezber değil, öğrenme.
      </motion.p>

      <motion.div className="flex gap-6">
        <button className="bg-blue-600 text-white px-10 py-5 rounded-2xl font-bold text-xl hover:scale-105 transition-transform shadow-2xl shadow-blue-200">
          Hemen Başla
        </button>
        <button className="bg-white text-slate-900 border border-slate-200 px-10 py-5 rounded-2xl font-bold text-xl hover:bg-slate-50 transition-all">
          Demoyu İzle
        </button>
      </motion.div>
    </section>
  );
}
