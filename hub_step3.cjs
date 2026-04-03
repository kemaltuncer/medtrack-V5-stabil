const fs = require('fs');
const path = require('path');
const p = path.join(process.cwd(), 'src/app/hub/page.tsx');

let c = fs.readFileSync(p, 'utf8');

// Modül 2 UI: Slayt Listesi
const module2UI = `<div className="flex-1 flex flex-col gap-3 overflow-y-auto pr-2 custom-scrollbar mt-2">
              
              {/* Slayt 1 */}
              <label className="flex items-start gap-3 group cursor-pointer p-3 rounded-xl bg-zinc-800/20 border border-zinc-800/50 hover:bg-zinc-800/50 transition-colors">
                <div className="relative flex items-center justify-center w-5 h-5 mt-0.5">
                  <input type="checkbox" className="peer appearance-none w-4 h-4 border-2 border-zinc-600 rounded flex-shrink-0 checked:bg-blue-500 checked:border-blue-500 transition-all cursor-pointer" />
                  <CheckSquare className="w-3 h-3 text-white absolute opacity-0 peer-checked:opacity-100 pointer-events-none" />
                </div>
                <div className="flex-1">
                  <h4 className="text-[11px] font-bold text-zinc-300 group-hover:text-white transition-colors leading-tight">Kalp Kapak Hastalıkları (Prof. Dr. Yılmaz)</h4>
                  <div className="flex justify-between items-center mt-2">
                    <span className="text-[9px] font-bold uppercase tracking-widest text-zinc-500">42 Slayt</span>
                    <span className="text-[9px] font-bold uppercase tracking-widest text-blue-400">Tekrar: 1/3</span>
                  </div>
                </div>
              </label>

              {/* Slayt 2 (Tamamlanmış) */}
              <label className="flex items-start gap-3 group cursor-pointer p-3 rounded-xl bg-zinc-800/10 border border-zinc-800/30 hover:bg-zinc-800/30 transition-colors opacity-50">
                <div className="relative flex items-center justify-center w-5 h-5 mt-0.5">
                  <input type="checkbox" defaultChecked className="peer appearance-none w-4 h-4 border-2 border-emerald-500 bg-emerald-500 rounded flex-shrink-0 transition-all cursor-pointer" />
                  <CheckSquare className="w-3 h-3 text-white absolute" />
                </div>
                <div className="flex-1">
                  <h4 className="text-[11px] font-bold text-zinc-500 line-through decoration-zinc-600 leading-tight">Aritmilere Yaklaşım</h4>
                  <div className="flex justify-between items-center mt-2">
                    <span className="text-[9px] font-bold uppercase tracking-widest text-zinc-600">28 Slayt</span>
                    <span className="text-[9px] font-bold uppercase tracking-widest text-emerald-500">Tekrar: 3/3</span>
                  </div>
                </div>
              </label>

              {/* Slayt 3 */}
              <label className="flex items-start gap-3 group cursor-pointer p-3 rounded-xl bg-zinc-800/20 border border-zinc-800/50 hover:bg-zinc-800/50 transition-colors">
                <div className="relative flex items-center justify-center w-5 h-5 mt-0.5">
                  <input type="checkbox" className="peer appearance-none w-4 h-4 border-2 border-zinc-600 rounded flex-shrink-0 checked:bg-blue-500 checked:border-blue-500 transition-all cursor-pointer" />
                  <CheckSquare className="w-3 h-3 text-white absolute opacity-0 peer-checked:opacity-100 pointer-events-none" />
                </div>
                <div className="flex-1">
                  <h4 className="text-[11px] font-bold text-zinc-300 group-hover:text-white transition-colors leading-tight">Kalp Yetmezliği Tanı Kriterleri</h4>
                  <div className="flex justify-between items-center mt-2">
                    <span className="text-[9px] font-bold uppercase tracking-widest text-zinc-500">55 Slayt</span>
                    <span className="text-[9px] font-bold uppercase tracking-widest text-zinc-600">Tekrar: 0/3</span>
                  </div>
                </div>
              </label>

            </div>`;

// Modül 3 UI: Sınav Sayacı
const module3UI = `<div className="flex-1 flex flex-col mt-2">
              
              {/* En Yakın Sınav Büyüteci */}
              <div className="bg-red-950/20 border border-red-500/20 rounded-2xl p-4 mb-4 text-center relative overflow-hidden group cursor-pointer">
                <div className="absolute inset-0 bg-red-500/5 opacity-0 group-hover:opacity-100 transition-opacity" />
                <h4 className="text-[10px] font-black uppercase tracking-widest text-red-400 mb-2">Dahiliye Staj Sonu</h4>
                <div className="flex justify-center items-end gap-3 text-white font-black tabular-nums">
                  <div className="flex flex-col items-center"><span className="text-4xl leading-none">14</span><span className="text-[8px] uppercase tracking-widest text-red-500/70 mt-1">Gün</span></div>
                  <span className="text-2xl leading-none mb-1 text-zinc-600 animate-pulse">:</span>
                  <div className="flex flex-col items-center"><span className="text-4xl leading-none">08</span><span className="text-[8px] uppercase tracking-widest text-red-500/70 mt-1">Saat</span></div>
                </div>
              </div>
              
              {/* Sonraki Sınavlar Listesi */}
              <div className="flex-1 flex flex-col gap-3 overflow-y-auto pr-2 custom-scrollbar">
                
                <div className="flex items-center justify-between p-3 rounded-xl bg-zinc-800/20 border border-zinc-800/50 hover:bg-zinc-800/40 transition-colors cursor-pointer">
                  <div>
                    <h4 className="text-[11px] font-bold text-zinc-300">Kardiyoloji Komitesi</h4>
                    <p className="text-[9px] font-bold uppercase tracking-widest text-zinc-500 mt-0.5">38 Gün Kaldı</p>
                  </div>
                  <div className="w-9 h-9 rounded-full bg-zinc-800/80 border border-zinc-700 flex flex-col items-center justify-center text-xs font-black text-zinc-300 leading-none">
                    15<span className="text-[7px] text-zinc-500 uppercase tracking-widest mt-0.5">May</span>
                  </div>
                </div>
                
                <div className="flex items-center justify-between p-3 rounded-xl bg-zinc-800/20 border border-zinc-800/50 hover:bg-zinc-800/40 transition-colors cursor-pointer">
                  <div>
                    <h4 className="text-[11px] font-bold text-zinc-300">OSCE Pratik Vizesi</h4>
                    <p className="text-[9px] font-bold uppercase tracking-widest text-zinc-500 mt-0.5">45 Gün Kaldı</p>
                  </div>
                  <div className="w-9 h-9 rounded-full bg-zinc-800/80 border border-zinc-700 flex flex-col items-center justify-center text-xs font-black text-zinc-300 leading-none">
                    22<span className="text-[7px] text-zinc-500 uppercase tracking-widest mt-0.5">May</span>
                  </div>
                </div>

              </div>
            </div>`;

// String replace ile yer tutucuları gerçek kodlarla değiştirelim
c = c.replace(/<div className="flex-1 flex items-center justify-center text-zinc-600 font-bold text-\[10px\] uppercase tracking-widest border-2 border-dashed border-zinc-800 rounded-xl">\s*\[Modül 2: Checkbox'lı Slayt Listesi\]\s*<\/div>/, module2UI);

c = c.replace(/<div className="flex-1 flex items-center justify-center text-zinc-600 font-bold text-\[10px\] uppercase tracking-widest border-2 border-dashed border-zinc-800 rounded-xl">\s*\[Modül 3: Geri Sayım Sayacı\]\s*<\/div>/, module3UI);

fs.writeFileSync(p, c);
console.log('✅ Aşama 3: Slayt Listesi ve Sınav Sayacı Başarıyla Hub\'a Enjekte Edildi!');
