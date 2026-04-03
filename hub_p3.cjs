const fs = require('fs');
const p = require('path').join(process.cwd(), 'src/app/hub/page.tsx');
const c = `          <div className="col-span-1 border border-zinc-800/50 bg-zinc-900/40 rounded-3xl p-5 flex flex-col justify-center items-center">
             <p className="text-[10px] font-black uppercase text-zinc-500 mb-1 tracking-widest">Yerel Saat</p>
             <h2 className="text-3xl font-black text-white italic tracking-tighter">{time.toLocaleTimeString('tr-TR', { hour: '2-digit', minute: '2-digit' })}</h2>
          </div>
          <div className="col-span-1 bg-[#1e1e1a] rounded-3xl p-5 relative overflow-hidden border border-zinc-800/50"><Pin className="absolute top-4 right-4 w-4 h-4 text-amber-500/50 rotate-45" /><p className="text-[10px] font-black text-amber-500/70 mb-2 uppercase">Not</p><p className="text-[11px] text-amber-100/60 font-medium italic">Biyokimya notlarını getir.</p></div>
          <div className="col-span-1 bg-zinc-900/40 border border-zinc-800/50 rounded-3xl p-5 flex items-center justify-center cursor-pointer hover:bg-zinc-800/60"><Music className="text-[#1DB954] w-8 h-8"/></div>
          <div className="col-span-1 border border-blue-500/20 bg-blue-900/10 rounded-3xl p-5 flex flex-col justify-between italic">
             <p className="text-[10px] text-blue-400 uppercase font-black tracking-widest">Kural #1</p>
             <p className="text-[11px] text-zinc-300 font-bold">Asla pes etme.</p>
          </div>
        </div>
      </main>
    </div>
  );
}

function NavItem({ icon: Icon, active = false, href = "#" }) {
  return (
    <Link href={href} className={\`w-12 h-12 rounded-xl flex items-center justify-center transition-all \${active ? 'bg-zinc-800 text-white shadow-lg' : 'text-zinc-500 hover:text-white hover:bg-white/5'}\`}>
      <Icon className="w-5 h-5" />
      {active && <div className="absolute left-0 w-1 h-6 bg-blue-500 rounded-r-full" />}
    </Link>
  );
}
\`;
fs.appendFileSync(p, c);
console.log('✅ Hub P3 Tamam. Hub sayfan senin fix_hub.cjs dosendeki tasarımla mühürlendi! 🏥💎');
