const fs = require('fs');
const path = require('path');
const p = path.join(process.cwd(), 'src/app/hub/page.tsx');
const c = `"use client";
import React, { useState, useEffect } from 'react';
import { Home, Calendar, BookOpen, CheckSquare, Target, Settings, Zap, Clock, Play, RotateCcw, Pin, Music, Crown, Sparkles, CheckCircle2 } from 'lucide-react';
import Link from 'next/link';

export default function CentralHub() {
  const [time, setTime] = useState(new Date());
  useEffect(() => {
    const timer = setInterval(() => setTime(new Date()), 1000);
    return () => clearInterval(timer);
  }, []);
  return (
    <div className="h-screen w-screen bg-[#09090b] text-zinc-100 flex overflow-hidden font-sans selection:bg-blue-500/30">
      {/* SIDEBAR_BURAYA */}
      <main className="flex-1 h-full p-4 md:p-6 overflow-hidden relative">
        <div className="absolute top-[-20%] left-[-10%] w-[40%] h-[40%] bg-blue-900/10 blur-[120px] rounded-full pointer-events-none" />
        {/* GRID_BURAYA */}
      </main>
    </div>
  );
}\n\`;
fs.writeFileSync(p, c);
console.log('✅ Hub P1: İskelet ve Saat Hazır.');
