"use client";
import React, { useState } from 'react';
import FreePreKlinik from '@/components/hub/FreePreKlinik';
import PlusPreKlinik from '@/components/hub/PlusPreKlinik';
import UltraPreKlinik from '@/components/hub/UltraPreKlinik';

export default function HubController() {
  const [userProfile, setUserProfile] = useState({
    plan: 'free', // 'free', 'plus', 'ultra'
    period: 'pre-klinik'
  });

  const cyclePlan = () => {
    const plans = ['free', 'plus', 'ultra'];
    const nextIndex = (plans.indexOf(userProfile.plan) + 1) % plans.length;
    setUserProfile(p => ({ ...p, plan: plans[nextIndex] }));
  };

  return (
    <div className="h-screen w-screen overflow-hidden bg-black">
      {/* Test Butonu */}
      <button onClick={cyclePlan} className="absolute bottom-4 left-4 z-[999] px-4 py-2 bg-white/5 border border-white/10 rounded-full text-[9px] font-black text-zinc-500 uppercase tracking-widest">
        AKTİF PLAN: {userProfile.plan.toUpperCase()}
      </button>

      {/* Rota Seçici */}
      {userProfile.period === 'pre-klinik' && (
        <>
          {userProfile.plan === 'free' && <FreePreKlinik />}
          {userProfile.plan === 'plus' && <PlusPreKlinik />}
          {userProfile.plan === 'ultra' && <UltraPreKlinik />}
        </>
      )}
    </div>
  );
}