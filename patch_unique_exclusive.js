const fs = require('fs');
const p = 'src/components/landing-page.tsx';
let c = fs.readFileSync(p, 'utf8');

// Eksik ikonları import listesine ekle
const requiredIcons = ['Fingerprint', 'Gavel', 'FlaskConical', 'Cpu'];
requiredIcons.forEach(icon => {
    if (!c.includes(icon)) {
        c = c.replace(/import \{([\s\S]*?)\} from 'lucide-react'/, (m, p1) => `import {${p1.trim()}, ${icon}} from 'lucide-react'`);
    }
});

const uniqueSection = `
      {/* --- SECTION 5: EXCLUSIVE SUITE - BENZERSİZ ARAÇLAR --- */}
      <section className="container mx-auto px-6 py-40 relative">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,#3b82f605,transparent_70%)]" />
        
        <div className="text-center mb-20 relative z-10">
          <motion.div 
            initial={{ opacity: 0 }} 
            whileInView={{ opacity: 1 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-fuchsia-500/10 border border-fuchsia-500/20 mb-6"
          >
            <Fingerprint className="w-4 h-4 text-fuchsia-400" />
            <span className="text-[10px] font-black tracking-[0.4em] text-fuchsia-400 uppercase">Unparalleled Technology</span>
          </motion.div>
          <h2 className="text-5xl md:text-7xl font-black text-white italic tracking-tighter uppercase leading-none">
            BAŞKA YERDE <br /> <span className="text-transparent bg-clip-text bg-gradient-to-r from-fuchsia-500 to-indigo-500">BULAMAYACAKSIN.</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {[
            {
              title: 'AI Kadavra Lab',
              desc: 'Gerçek diseksiyon hissi veren, dokunsal geri bildirimli 3D yapay zeka kadavra motoru. İstediğin an, istediğin katmanda operasyon.',
              icon: Cpu,
              color: 'from-blue-600 to-cyan-500'
            },
            {
              title: 'Malpraktis Defans',
              desc: 'Hukuki vaka simülasyonları. Klinik hatalarda savunma stratejileri ve tıbbi hukuk etik kurulu simülatörü.',
              icon: Gavel,
              color: 'from-amber-600 to-rose-600'
            },
            {
              title: 'Bionluk-Analiz Pro',
              desc: 'Akademisyenler ve freelancer hekimler için optimize edilmiş; ham veriyi yayına hazır tabloya dönüştüren biyoistatistik santralı.',
              icon: FlaskConical,
              color: 'from-emerald-500 to-teal-500'
            },
            {
              title: 'Sentez-AI (Cross-Uni)',
              desc: 'Türkiye’deki tüm tıp fakültelerinin ortak vaka arşivini ve notlarını analiz eden, okuluna özel tahminleme yapan tek motor.',
              icon: Zap,
              color: 'from-indigo-600 to-fuchsia-600'
            }
          ].map((item, i) => (
            <motion.div 
              key={i}
              whileHover={{ scale: 1.02 }}
              className="group relative p-12 rounded-[4rem] bg-gradient-to-br from-white/[0.04] to-transparent border border-white/5 hover:border-white/20 transition-all overflow-hidden"
            >
              <div className={\`absolute top-0 right-0 w-48 h-48 bg-gradient-to-br \${item.color} opacity-5 blur-[80px] group-hover:opacity-10 transition-opacity\`} />
              
              <div className="relative z-10 flex flex-col md:flex-row gap-8 items-center md:items-start">
                <div className={\`w-20 h-20 shrink-0 rounded-3xl bg-gradient-to-br \${item.color} p-5 shadow-2xl group-hover:rotate-12 transition-transform duration-500\`}>
                  <item.icon className="w-full h-full text-white" />
                </div>
                <div>
                  <h3 className="text-3xl font-black text-white mb-4 uppercase italic tracking-tight">{item.title}</h3>
                  <p className="text-gray-500 text-lg leading-relaxed font-medium">
                    {item.desc}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>
`;

const lastSectionIdx = c.lastIndexOf('</section>');
if (lastSectionIdx !== -1) {
    c = c.slice(0, lastSectionIdx + 10) + uniqueSection + c.slice(lastSectionIdx + 10);
    fs.writeFileSync(p, c);
    console.log('Exclusive modüller başarıyla enjekte edildi kanka! 🚀');
} else {
    console.log('Hedef section bulunamadı.');
}
