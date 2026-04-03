const fs = require('fs');
const p = 'src/components/landing-page.tsx';
let c = fs.readFileSync(p, 'utf8');

// Eksikse Boxes ikonunu import listesine ekle
if (!c.includes('Boxes')) {
    c = c.replace(/import \{([\s\S]*?)\} from 'lucide-react'/, (m, p1) => `import {${p1.trim()}, Boxes} from 'lucide-react'`);
}

const section4 = `
      {/* --- SECTION 4: 47 MODÜL - UNIVERSAL REGISTRY --- */}
      <section className="container mx-auto px-6 py-32 relative">
        <div className="flex flex-col items-center mb-16">
          <div className="flex items-center gap-2 px-4 py-1.5 rounded-full bg-blue-500/10 border border-blue-500/20 mb-4">
            <Boxes className="w-4 h-4 text-blue-400" />
            <span className="text-[10px] font-black tracking-[0.3em] text-blue-400 uppercase">47 Active Modules</span>
          </div>
          <h2 className="text-4xl md:text-6xl font-black text-center text-white italic tracking-tighter uppercase leading-none">
            EVRENSEL <span className="text-blue-500">SİSTEM KAYDI.</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {[
            { 
              title: 'Temel Bilimler', 
              items: ['Anatomi', 'Fizyoloji', 'Biyokimya', 'Patoloji', 'Mikrobiyoloji', 'Farmakoloji', 'Histoloji', 'Embriyoloji', 'Genetik', 'Biyoistatistik', 'Tıp Tarihi', 'Deontoloji'],
              textColor: 'text-purple-400',
              borderColor: 'border-purple-500/20'
            },
            { 
              title: 'Klinik Branşlar', 
              items: ['Dahiliye', 'Kardiyoloji', 'Nefroloji', 'Göğüs', 'Enfeksiyon', 'Nöroloji', 'Gastro', 'Endokrin', 'Romatoloji', 'Hematoloji', 'Onkoloji', 'Pediatri'],
              textColor: 'text-blue-400',
              borderColor: 'border-blue-500/20'
            },
            { 
              title: 'Cerrahi & Acil', 
              items: ['Genel Cerrahi', 'Ortopedi', 'Üroloji', 'KBB', 'Göz', 'Kadın Doğum', 'Plastik Cerrahi', 'Beyin Cerrahi', 'Anestezi', 'Acil Tıp', 'Çocuk Cerrahisi', 'KDC'],
              textColor: 'text-rose-400',
              borderColor: 'border-rose-500/20'
            },
            { 
              title: 'Akademik & Ar-Ge', 
              items: ['Tez Hazırlık', 'Makale AI', 'SPSS/R Entegrasyon', 'Lab Raporlama', 'Etik Kurul Sim', 'PubMed Asistanı', 'Vaka Sunum Pro', 'Kongre Planlayıcı', 'Tıbbi Çizim', 'Literatür Tarama', 'İstatistik Pro'],
              textColor: 'text-emerald-400',
              borderColor: 'border-emerald-500/20'
            }
          ].map((cat, i) => (
            <motion.div 
              key={i} 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              className={\`p-8 rounded-[3rem] bg-white/[0.02] border \${cat.borderColor} backdrop-blur-md group hover:bg-white/[0.04] transition-all hover:border-blue-500/40\`}
            >
              <h4 className={\`text-lg font-black uppercase tracking-widest mb-6 \${cat.textColor}\`}>{cat.title}</h4>
              <div className="flex flex-wrap gap-2">
                {cat.items.map(item => (
                  <span key={item} className="text-[9px] font-bold px-3 py-1 bg-white/5 rounded-lg text-gray-400 border border-white/5 hover:border-white/20 hover:text-white transition-all cursor-default">
                    {item}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </section>
`;

const lastSectionIdx = c.lastIndexOf('</section>');
if (lastSectionIdx !== -1) {
    c = c.slice(0, lastSectionIdx + 10) + section4 + c.slice(lastSectionIdx + 10);
    fs.writeFileSync(p, c);
}
