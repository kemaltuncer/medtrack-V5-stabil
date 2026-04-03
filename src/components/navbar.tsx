"use client";
import Link from "next/link";
import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Play, HelpCircle, Info, Mail, LogIn, UserPlus, Activity, Tag, ListChecks } from 'lucide-react';

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const handleOpen = () => setIsOpen(true);
    window.addEventListener('open-medtrack-sidebar', handleOpen);
    return () => window.removeEventListener('open-medtrack-sidebar', handleOpen);
  }, []);

  const menuItems = [
    { name: 'Site Özellikleri', icon: <ListChecks size={20} />, href: '#ozellikler' },
    { name: 'Fiyat Planları', icon: <Tag size={20} />, href: '#fiyatlar' },
    { name: 'Demo İzle', icon: <Play size={20} />, href: '#demo' },
    { name: 'Sık Sorulan Sorular', icon: <HelpCircle size={20} />, href: '#faq' },
    { name: 'Hakkında', icon: <Info size={20} />, href: '#about' },
    { name: 'İletişim', icon: <Mail size={20} />, href: '#contact' },
  ];

  return (
    <>
      <nav className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-md border-b border-slate-100">
        <div className="max-w-7xl mx-auto px-6 h-20 flex justify-between items-center">
          <div className="flex items-center gap-2">
            <div className="w-10 h-10 bg-blue-600 rounded-xl flex items-center justify-center text-white shadow-lg">
              <Activity size={24} />
            </div>
            <span className="text-2xl font-black tracking-tighter italic">MEDTRACK<span className="text-blue-600">.PRO</span></span>
          </div>
          <button onClick={() => setIsOpen(true)} className="p-3 bg-slate-50 rounded-2xl hover:bg-slate-100 transition-all border border-slate-100">
            <Menu size={28} />
          </button>
        </div>
      </nav>

      <AnimatePresence>
        {isOpen && (
          <>
            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} onClick={() => setIsOpen(false)} className="fixed inset-0 bg-slate-900/60 backdrop-blur-md z-[60]" />
            <motion.div initial={{ x: '100%' }} animate={{ x: 0 }} exit={{ x: '100%' }} transition={{ type: 'spring', damping: 25, stiffness: 200 }} className="fixed top-0 right-0 bottom-0 w-full md:w-[450px] bg-white z-[70] shadow-2xl p-10 flex flex-col" >
              <div className="flex justify-between items-center mb-10">
                <span className="text-xl font-black text-slate-400 tracking-widest uppercase">Navigasyon</span>
                <button onClick={() => setIsOpen(false)} className="p-3 bg-slate-100 rounded-2xl hover:rotate-90 transition-all"><X size={28} /></button>
              </div>
              <div className="flex flex-col gap-2 flex-1 overflow-y-auto">
                {menuItems.map((item, i) => (
                  <a key={i} href={item.href} onClick={() => setIsOpen(false)} className="flex items-center gap-5 p-5 rounded-3xl hover:bg-blue-50 transition-all group">
                    <div className="text-blue-600 group-hover:scale-110 transition-transform">{item.icon}</div>
                    <span className="text-xl font-bold text-slate-800">{item.name}</span>
                  </a>
                ))}
              </div>
              <div className="flex flex-col gap-4 mt-8 pt-8 border-t">
                <button className="p-5 bg-slate-100 rounded-[2rem] text-lg font-black"><Link href="/login">Giriş Yap</Link></button>
                <button className="p-5 bg-blue-600 rounded-[2rem] text-lg font-black text-white shadow-xl"><Link href="/signup">Kaydol</Link></button>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
};
