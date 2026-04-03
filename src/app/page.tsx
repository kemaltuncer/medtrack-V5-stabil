'use client';
import React from 'react';
import Navbar from "@/components/navbar";
import { LandingPage } from "@/components/landing-page";

export default function Home() {
  return (
    <div className="min-h-screen bg-[#050505] selection:bg-blue-600/30">
      <Navbar />
      <main className="w-full">
        <LandingPage />
      </main>
      <footer className="py-20 border-t border-white/5 text-center">
        <div className="container mx-auto px-6">
          <p className="text-gray-600 text-[10px] font-black tracking-[0.4em] uppercase">
            Meditrack • Tıp Eğitimi İçin Yeni Nesil İşletim Sistemi
          </p>
        </div>
      </footer>
    </div>
  );
}
