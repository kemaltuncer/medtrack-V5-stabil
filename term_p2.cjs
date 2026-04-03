const fs = require('fs');
const p = require('path').join(process.cwd(), 'src/app/terminal/page.tsx');
const c = `        <div className="p-6 bg-[#09090b] border-t border-zinc-800/50 shrink-0 relative z-10">
          <div className="flex items-center bg-[#121214] border-2 border-zinc-800 focus-within:border-blue-500/50 rounded-2xl px-4 py-1 transition-all">
            <input className="flex-1 bg-transparent py-4 text-sm font-medium text-white outline-none" placeholder="Vaka gir..." />
            <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center text-white cursor-pointer hover:bg-blue-500"><Send className="w-4 h-4" /></div>
          </div>
        </div>
      </section>
      <section className="flex-[3] bg-[#0c0c0e] border-l border-zinc-800/50 flex flex-col items-center justify-center italic text-zinc-700 text-[10px] font-black uppercase tracking-[0.3em] text-center p-12">
        <Microscope className="w-12 h-12 mb-6 opacity-20" />
        Dinamik Analiz Monitörü <br/> <span className="text-[8px] font-bold text-zinc-800 mt-4 not-italic">Veri Akışı Bekleniyor...</span>
      </section>
    </div>
  );
}
\`;
fs.appendFileSync(p, c);
console.log('✅ Terminal P2 Tamam. Klinik Terminal sayfan senin fix_terminal.cjs dosendeki tasarımla ayağa kalktı! 🚀🩺');
