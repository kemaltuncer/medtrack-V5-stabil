const fs = require('fs');
const path = require('path');
const p = path.join(process.cwd(), 'src/app/hub/page.tsx');

let c = fs.readFileSync(p, 'utf8');

// 1. İhtiyacımız olan eksik ikonları (Sparkles vb.) içe aktaralım
if (!c.includes('Sparkles')) {
  c = c.replace('import { Home', 'import { Sparkles, Home');
}

// 2. Modül 1'in yer tutucu kutusunu bul ve o kısmı mükemmel UI ile değiştir
const placeholderRegex = /<div className="flex-1 flex items-center justify-center text-zinc-600 font-bold text-\[10px\] uppercase tracking-widest border-2 border-dashed border-zinc-800 rounded-xl">\s*\[Modül 1: Yapılacaklar \+ Ders Programı Buraya Gelecek\]\s*<\/div>/;

const module1UI = `<div className="flex-1 flex flex-col gap-0 overflow-y-auto pr-2 custom-scrollbar">
              
              {/* 1. SABİT FAKÜLTE DERSİ */}
              <div className="flex gap-4 items-start group">
                <div className="flex flex-col items-center mt-1">
                  <div className="w-5 h-5 rounded-full bg-blue-500/10 border border-blue-500/50 flex items-center justify-center shadow-[0_0_10px_rgba(59,130,246,0.1)]">
                    <div className="w-1.5 h-1.5 rounded-full bg-blue-500" />
                  </div>
                  <div className="w-px h-12 bg-zinc-800 group-hover:bg-blue-500/30 transition-colors my-1" />
                </div>
                <div className="flex-1 bg-zinc-800/30 p-3 rounded-2xl border border-zinc-800/50 hover:bg-zinc-800/50 transition-colors cursor-pointer mb-2">
                  <div className="flex justify-between items-center mb-1">
                    <h4 className="text-xs font-bold text-zinc-200">Kardiyoloji: EKG Temelleri</h4>
                    <span className="text-[10px] text-blue-400 font-mono font-black">09:00</span>
                  </div>
                  <p className="text-[9px] text-zinc-500 uppercase tracking-widest">Fakülte Dersi • Amfi 2</p>
                </div>
              </div>

              {/* 2. YAPAY ZEKA ÇALIŞMA ÖNERİSİ */}
              <div className="flex gap-4 items-start group">
                <div className="flex flex-col items-center mt-1">
                  <div className="w-5 h-5 rounded-full bg-indigo-500/10 border border-indigo-500/50 flex items-center justify-center shadow-[0_0_10px_rgba(99,102,241,0.2)]">
                    <Sparkles className="w-2.5 h-2.5 text-indigo-400" />
                  </div>
                  <div className="w-px h-12 bg-zinc-800 group-hover:bg-indigo-500/30 transition-colors my-1" />
                </div>
                <div className="flex-1 bg-indigo-900/10 p-3 rounded-2xl border border-indigo-500/20 hover:bg-indigo-900/20 transition-colors cursor-pointer mb-2">
                  <div className="flex justify-between items-center mb-1">
                    <h4 className="text-xs font-bold text-indigo-200">AI Odak Seansı: Aritmiler</h4>
                    <span className="text-[10px] text-indigo-400 font-mono font-black">11:30</span>
                  </div>
                  <p className="text-[9px] text-indigo-400/60 uppercase tracking-widest flex items-center gap-1">
                     Sabahki dersin OSCE simülasyonu (Önerilen)
                  </p>
                </div>
              </div>

              {/* 3. KULLANICI TO-DO (BEKLEYEN) */}
              <div className="flex gap-4 items-start group">
                <div className="flex flex-col items-center mt-1">
                  <div className="w-5 h-5 rounded-md border-2 border-zinc-700 hover:border-emerald-500 transition-colors cursor-pointer flex items-center justify-center bg-zinc-900/50" />
                  <div className="w-px h-10 bg-zinc-800 my-1 group-hover:bg-zinc-700 transition-colors" />
                </div>
                <div className="flex-1 p-2 flex flex-col justify-center mb-1">
                  <h4 className="text-[11px] font-medium text-zinc-400 group-hover:text-zinc-200 transition-colors">Dahiliye Staj Defterini İmzalat</h4>
                  <p className="text-[9px] text-zinc-600 uppercase tracking-widest mt-0.5">Kişisel Görev</p>
                </div>
              </div>

              {/* 4. KULLANICI TO-DO (TAMAMLANMIŞ) */}
              <div className="flex gap-4 items-start group opacity-40 hover:opacity-70 transition-opacity">
                <div className="flex flex-col items-center mt-1">
                  <div className="w-5 h-5 rounded-md border-2 border-emerald-500 bg-emerald-500/10 flex items-center justify-center">
                    <CheckSquare className="w-3 h-3 text-emerald-400" />
                  </div>
                </div>
                <div className="flex-1 p-2 flex flex-col justify-center">
                  <h4 className="text-[11px] font-medium text-zinc-500 line-through decoration-zinc-600">USMLE UWorld 40 Soru Çözümü</h4>
                  <p className="text-[9px] text-zinc-600 uppercase tracking-widest mt-0.5 line-through">Hedef Görev</p>
                </div>
              </div>

            </div>`;

if (placeholderRegex.test(c)) {
  c = c.replace(placeholderRegex, module1UI);
  fs.writeFileSync(p, c);
  console.log('✅ Aşama 2: Günün Programı & Timeline Başarıyla Enjekte Edildi!');
} else {
  console.log('Hata: Modül 1 yer tutucusu bulunamadı.');
}
