const fs = require('fs');
const p = require('path').join(process.cwd(), 'src/app/hub/page.tsx');
const c = `\nfunction NavItem({ icon: Icon, active = false, tooltip = "", href = "#" }) {
  return (
    <Link href={href} className={\`group relative w-12 h-12 rounded-xl flex items-center justify-center transition-all \${active ? 'bg-zinc-800 text-white shadow-lg' : 'text-zinc-500 hover:text-white hover:bg-white/5'}\`}>
      <Icon className="w-5 h-5" />
      {active && <div className="absolute left-0 w-1 h-6 bg-blue-500 rounded-r-full" />}
    </Link>
  );
}
\`;
fs.appendFileSync(p, c);
console.log('✅ Hub 3.2: NavItem Enjekte Edildi. Pre-Klinik OS Hub Hazır! 🏥💎');
