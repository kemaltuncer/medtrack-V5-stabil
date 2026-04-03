const fs = require('fs');
const path = require('path');
const p = path.join(process.cwd(), 'src/components/landing-page.tsx');

if (!fs.existsSync(p)) {
    console.log('Hata: landing-page.tsx bulunamadı.');
    process.exit(1);
}

let c = fs.readFileSync(p, 'utf8');

// lucide-react import bloğunu bul ve Heart'ı ekle
c = c.replace(/import \{([\s\S]*?)\} from 'lucide-react'/, (match, imports) => {
    let importArray = imports.split(',').map(i => i.trim()).filter(Boolean);
    
    // Heart yoksa ekle
    if (!importArray.includes('Heart')) {
        importArray.push('Heart');
    }
    
    // Mükerrerleri temizle
    const uniqueImports = [...new Set(importArray)];
    return \`import { \${uniqueImports.join(', ')} } from 'lucide-react'\`;
});

fs.writeFileSync(p, c);
console.log('✅ Heart ikonu başarıyla hayata döndürüldü. Runtime hatası temizlendi! 🏥💖');
