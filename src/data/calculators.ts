export const CALCULATORS: any = {
  "bmi": { 
    category: "Genel", title: "VKİ", desc: "Vücut Kitle İndeksi", unit: "kg/m²", 
    formula: (v: any) => (v.w / ((v.h/100) * (v.h/100))).toFixed(1),
    inputs: [{ id: "w", label: "Kilo (kg)", type: "number" }, { id: "h", label: "Boy (cm)", type: "number" }],
    interpret: (r: number) => ({
      status: r < 25 ? "İdeal kilo aralığı." : r < 30 ? "Fazla kilolu (Pre-obez)." : "Obezite saptandı.",
      action: r >= 25 ? "Diyet ve egzersiz planlanmalı." : "Mevcut kilo korunmalı.",
      followup: "Metabolik risk faktörleri taranmalı.",
      color: r < 25 ? "text-green-500" : "text-red-500"
    })
  },
  "chads2": { 
    category: "Kardiyoloji", title: "CHA₂DS₂-VASc", desc: "AF İnme Riski", unit: "Puan",
    formula: (v: any) => Object.values(v).reduce((a: any, b: any) => a + Number(b), 0),
    inputs: [{ id: "a", label: "Yaş >= 75 (+2)", options: ["Hayır (0)", "Evet (2)"] }, { id: "s", label: "İnme Öyküsü (+2)", options: ["Yok (0)", "Var (2)"] }, { id: "o", label: "Diğer Faktörler (HT, DM, KY, Vasc)", options: ["0 (0)", "1 (1)", "2 (2)", "3 (3)", "4 (4)"] }],
    interpret: (r: number) => ({
      status: r >= 2 ? "Yüksek inme riski." : "Düşük/Orta inme riski.",
      action: r >= 2 ? "OAK tedavisi güçlü önerilir." : "Bireysel risk değerlendirmesi.",
      followup: "HAS-BLED ile kanama riski bakılmalı.",
      color: r >= 2 ? "text-red-600" : "text-green-500"
    })
  },
  "map": { 
    category: "Kardiyoloji", title: "MAP", desc: "Ortalama Arter Basıncı", unit: "mmHg",
    formula: (v: any) => ((Number(v.s) + 2 * Number(v.d)) / 3).toFixed(0),
    inputs: [{ id: "s", label: "Sistolik", type: "number" }, { id: "d", label: "Diastolik", type: "number" }],
    interpret: (r: number) => ({
      status: r < 65 ? "Düşük organ perfüzyonu." : "Normal perfüzyon.",
      action: r < 65 ? "Sıvı veya vazopressör desteği." : "Klinik izlem.",
      followup: "İdrar çıkışı ve şuur takibi.",
      color: r < 65 ? "text-red-600" : "text-green-500"
    })
  },
  "qtc": { 
    category: "Kardiyoloji", title: "QTc", desc: "Bazett Düzeltmesi", unit: "msn",
    formula: (v: any) => (v.qt / Math.sqrt(60 / v.hr)).toFixed(0),
    inputs: [{ id: "qt", label: "QT (msn)", type: "number" }, { id: "hr", label: "Nabız", type: "number" }],
    interpret: (r: number) => ({
      status: r > 470 ? "Uzamış QTc mesafesi." : "Normal QTc.",
      action: r > 470 ? "QT uzatan ilaçlar kesilmeli." : "İzlem.",
      followup: "K, Mg ve Ca düzeyleri kontrol edilmeli.",
      color: r > 470 ? "text-red-600" : "text-green-500"
    })
  },
  "heart-score": { 
    category: "Kardiyoloji", title: "HEART Skoru", desc: "Acil Göğüs Ağrısı", unit: "Puan",
    formula: (v: any) => Object.values(v).reduce((a: any, b: any) => a + Number(b), 0),
    inputs: [{ id: "h", label: "Öykü (0-2)", options: ["Düşük (0)", "Orta (1)", "Yüksek (2)"] }, { id: "e", label: "EKG (0-2)", options: ["Normal (0)", "Nonspefisik (1)", "ST Dep. (2)"] }, { id: "t", label: "Troponin (0-2)", options: ["Normal (0)", "1-3x (1)", ">3x (2)"] }],
    interpret: (r: number) => ({
      status: r >= 7 ? "Yüksek MACE riski." : r >= 4 ? "Orta risk." : "Düşük risk.",
      action: r >= 7 ? "Acil invaziv strateji." : "Gözlem ve troponin takibi.",
      followup: "Tekrar troponin ve EKG.",
      color: r >= 7 ? "text-red-600" : "text-green-500"
    })
  },
  "fena": { 
    category: "Nefroloji", title: "FeNa", desc: "AKI Ayırıcı Tanı", unit: "%",
    formula: (v: any) => ((v.una * v.scr) / (v.sna * v.ucr) * 100).toFixed(2),
    inputs: [{ id: "sna", label: "Serum Na", type: "number" }, { id: "una", label: "İdrar Na", type: "number" }, { id: "scr", label: "Serum Cr", type: "number" }, { id: "ucr", label: "İdrar Cr", type: "number" }],
    interpret: (r: number) => ({
      status: r < 1 ? "Prerenal ABH lehine." : "İntrinsik (Renal) ABH lehine.",
      action: r < 1 ? "Sıvı replasmanı ve hidrasyon." : "Nefrotoksik ajan kısıtlaması.",
      followup: "Günlük kreatinin ve idrar çıkışı.",
      color: r < 1 ? "text-blue-500" : "text-orange-500"
    })
  },
  "anion-gap": { 
    category: "Nefroloji", title: "Anyon Açığı", desc: "Metabolik Asidoz Analizi", unit: "mEq/L",
    formula: (v: any) => (v.na - (v.cl + v.h)).toFixed(1),
    inputs: [{ id: "na", label: "Sodyum", type: "number" }, { id: "cl", label: "Klor", type: "number" }, { id: "h", label: "Bikarbonat", type: "number" }],
    interpret: (r: number) => ({
      status: r > 12 ? "Artmış Anyon Açığı (HAGMA)." : "Normal Anyon Açığı (NAGMA).",
      action: r > 12 ? "Laktat, Keton, Üremi taraması." : "GİS kaybı veya RTA taranmalı.",
      followup: "Delta-delta oranı bakılmalı.",
      color: r > 12 ? "text-red-600" : "text-green-500"
    })
  },
  "corrected-ca": { 
    category: "Nefroloji", title: "Düzeltilmiş Ca", desc: "Albümine Göre Ca", unit: "mg/dL",
    formula: (v: any) => (Number(v.ca) + 0.8 * (4 - v.alb)).toFixed(1),
    inputs: [{ id: "ca", label: "Ölçülen Ca", type: "number" }, { id: "alb", label: "Albümin", type: "number" }],
    interpret: (r: number) => ({
      status: r > 10.5 ? "Hiperkalsemi." : r < 8.5 ? "Hipokalsemi." : "Normal Ca.",
      action: r > 10.5 ? "Malignite/PTH taranmalı." : r < 8.5 ? "Replasman planlanmalı." : "İzlem.",
      followup: "İyonize Ca ile teyit.",
      color: (r > 10.5 || r < 8.5) ? "text-red-600" : "text-green-500"
    })
  },
  "sodium-deficit": { 
    category: "Nefroloji", title: "Na Açığı", desc: "Hiponatremi Tedavisi", unit: "mEq",
    formula: (v: any) => (v.s * v.w * (v.t - v.c)).toFixed(0),
    inputs: [{ id: "t", label: "Hedef Na", type: "number" }, { id: "c", label: "Mevcut Na", type: "number" }, { id: "w", label: "Kilo", type: "number" }, { id: "s", label: "Su Oranı (0.5-0.6)", type: "number" }],
    interpret: (r: number) => ({
      status: `Toplam açık: ${r} mEq Na.`,
      action: "Na artış hızı <10 mEq/L/gün olmalı.",
      followup: "6 saatte bir serum Na takibi.",
      color: "text-blue-600"
    })
  },
  "water-deficit": { 
    category: "Nefroloji", title: "Su Açığı", desc: "Hipernatremi Tedavisi", unit: "Litre",
    formula: (v: any) => (v.s * v.w * (v.c / 140 - 1)).toFixed(1),
    inputs: [{ id: "c", label: "Mevcut Na", type: "number" }, { id: "w", label: "Kilo", type: "number" }, { id: "s", label: "Su Oranı", type: "number" }],
    interpret: (r: number) => ({
      status: `Su ihtiyacı: ${r} Litre.`,
      action: "Yarısı ilk 24 saatte verilmelidir.",
      followup: "Yavaş Na düşüşü izlenmeli.",
      color: "text-blue-500"
    })
  },
  "qsofa": { 
    category: "Acil", title: "qSOFA", desc: "Hızlı Sepsis Tarama", unit: "Puan",
    formula: (v: any) => Object.values(v).reduce((a: any, b: any) => a + Number(b), 0),
    inputs: [{ id: "r", label: "SS >= 22", options: ["Yok (0)", "Var (1)"] }, { id: "m", label: "Mental Bozukluk", options: ["Yok (0)", "Var (1)"] }, { id: "s", label: "SBP <= 100", options: ["Yok (0)", "Var (1)"] }],
    interpret: (r: number) => ({
      status: r >= 2 ? "Yüksek sepsis/mortalite riski." : "Düşük risk.",
      action: r >= 2 ? "Laktat, Kültür, Antibiyotik." : "Klinik takip.",
      followup: "Tam SOFA skoru bakılmalı.",
      color: r >= 2 ? "text-red-600" : "text-green-500"
    })
  },
  "curb-65": { 
    category: "Acil", title: "CURB-65", desc: "Pnömoni Şiddeti", unit: "Puan",
    formula: (v: any) => Object.values(v).reduce((a: any, b: any) => a + Number(b), 0),
    inputs: [{ id: "c", label: "Konfüzyon", options: ["Yok (0)", "Var (1)"] }, { id: "u", label: "BUN > 19", options: ["Yok (0)", "Var (1)"] }, { id: "r", label: "SS >= 30", options: ["Yok (0)", "Var (1)"] }, { id: "b", label: "KB < 90/60", options: ["Yok (0)", "Var (1)"] }, { id: "a", label: "Yaş >= 65", options: ["Yok (0)", "Var (1)"] }],
    interpret: (r: number) => ({
      status: r >= 3 ? "Ağır pnömoni." : r === 2 ? "Orta şiddet." : "Hafif.",
      action: r >= 3 ? "Yatış ve Yoğun Bakım." : "Ayaktan veya servis takibi.",
      followup: "Antibiyotik yanıtı takibi.",
      color: r >= 3 ? "text-red-600" : "text-green-500"
    })
  },
  "gcs": { 
    category: "Acil", title: "GKS", desc: "Glasgow Koma Skalası", unit: "Puan",
    formula: (v: any) => Object.values(v).reduce((a: any, b: any) => a + Number(b), 0),
    inputs: [{ id: "e", label: "Göz", options: ["1 (1)", "2 (2)", "3 (3)", "4 (4)"] }, { id: "v", label: "Sözel", options: ["1 (1)", "2 (2)", "3 (3)", "4 (4)", "5 (5)"] }, { id: "m", label: "Motor", options: ["1 (1)", "2 (2)", "3 (3)", "4 (4)", "5 (5)", "6 (6)"] }],
    interpret: (r: number) => ({
      status: r <= 8 ? "Koma / Ağır hasar." : "Normal/Hafif.",
      action: r <= 8 ? "Entübasyon endikasyonu." : "Nörolojik izlem.",
      followup: "Pupil ve vital takibi.",
      color: r <= 8 ? "text-red-700" : "text-green-500"
    })
  },
  "wells-pe": { 
    category: "Acil", title: "Wells (PE)", desc: "Pulmoner Emboli", unit: "Puan",
    formula: (v: any) => Object.values(v).reduce((a: any, b: any) => a + Number(b), 0),
    inputs: [{ id: "d", label: "DVT Bulgusu (+3)", options: ["Yok (0)", "Var (3)"] }, { id: "h", label: "Nabız > 100 (+1.5)", options: ["Yok (0)", "Var (1.5)"] }, { id: "a", label: "Alt. Tanı Az Olası (+3)", options: ["Yok (0)", "Var (3)"] }],
    interpret: (r: number) => ({
      status: r > 4 ? "Yüksek PE olasılığı." : "Düşük/Orta.",
      action: r > 4 ? "BT Anjiyo planlanmalı." : "D-Dimer bakılmalı.",
      followup: "USG ve klinik takip.",
      color: r > 4 ? "text-red-600" : "text-green-500"
    })
  },
  "alvarado": { 
    category: "Acil", title: "Alvarado", desc: "Apandisit Skoru", unit: "Puan",
    formula: (v: any) => Object.values(v).reduce((a: any, b: any) => a + Number(b), 0),
    inputs: [{ id: "r", label: "Hassasiyet (+2)", options: ["Yok (0)", "Var (2)"] }, { id: "l", label: "Lökositoz (+2)", options: ["Yok (0)", "Var (2)"] }, { id: "o", label: "Diğer (Bulantı vb.)", options: ["0 (0)", "1 (1)", "2 (2)"] }],
    interpret: (r: number) => ({
      status: r >= 7 ? "Yüksek olasılık." : "Gözlem.",
      action: r >= 7 ? "Cerrahi konsültasyonu." : "Muayene tekrarı/USG.",
      followup: "Genel cerrahi takibi.",
      color: r >= 7 ? "text-red-600" : "text-green-500"
    })
  },
  "meld": { 
    category: "Gastro", title: "MELD", desc: "KC Yetmezliği", unit: "Puan",
    formula: (v: any) => Math.round(3.78 * Math.log(v.b || 1) + 11.2 * Math.log(v.i || 1) + 9.57 * Math.log(v.c || 1) + 6.43),
    inputs: [{ id: "b", label: "Bilirubin", type: "number" }, { id: "i", label: "INR", type: "number" }, { id: "c", label: "Kreatinin", type: "number" }],
    interpret: (r: number) => ({
      status: r >= 30 ? "Kritik yetmezlik." : "Stabil.",
      action: r >= 15 ? "Nakil merkezi kons." : "Komplikasyon takibi.",
      followup: "3 aylık güncelleme.",
      color: r >= 30 ? "text-red-700" : "text-orange-500"
    })
  },
  "child-pugh": { 
    category: "Gastro", title: "Child-Pugh", desc: "Siroz Evreleme", unit: "Puan",
    formula: (v: any) => Object.values(v).reduce((a: any, b: any) => a + Number(b), 0),
    inputs: [{ id: "b", label: "Bilirubin (1-3)", options: ["<2 (1)", "2-3 (2)", ">3 (3)"] }, { id: "a", label: "Albümin (1-3)", options: [">3.5 (1)", "2.8-3.5 (2)", "<2.8 (3)"] }, { id: "e", label: "Ensefalopati", options: ["Yok (1)", "Evre 1-2 (2)", "Evre 3-4 (3)"] }],
    interpret: (r: number) => ({
      status: r >= 10 ? "Class C (Ağır)." : "Class A/B.",
      action: "Komplikasyon ve nakil takibi.",
      followup: "Düzenli hepatoloji viziti.",
      color: r >= 10 ? "text-red-600" : "text-green-500"
    })
  },
  "saag": { 
    category: "Gastro", title: "SAAG", desc: "Asit Ayrımı", unit: "g/dL",
    formula: (v: any) => (v.s - v.a).toFixed(1),
    inputs: [{ id: "s", label: "Serum Alb", type: "number" }, { id: "a", label: "Asit Alb", type: "number" }],
    interpret: (r: number) => ({
      status: r >= 1.1 ? "Portal HT var." : "Portal HT yok.",
      action: r >= 1.1 ? "Siroz/KY taranmalı." : "Malignite/Tbc bakılmalı.",
      followup: "SBP dışlanmalı.",
      color: r >= 1.1 ? "text-orange-500" : "text-blue-500"
    })
  },
  "anc": { 
    category: "Pediatri", title: "ANC", desc: "Mutlak Nötrofil", unit: "/mm³",
    formula: (v: any) => (v.w * v.n / 100).toFixed(0),
    inputs: [{ id: "w", label: "WBC", type: "number" }, { id: "n", label: "Nöt %", type: "number" }],
    interpret: (r: number) => ({
      status: r < 500 ? "Ağır Nötropeni." : "Normal.",
      action: r < 500 ? "İzolasyon/Antibiyotik." : "Takip.",
      followup: "Günlük hemogram.",
      color: r < 500 ? "text-red-700" : "text-green-500"
    })
  },
  "mentzer": { 
    category: "Pediatri", title: "Mentzer", desc: "Anemi Ayrımı", unit: "İndeks",
    formula: (v: any) => (v.mcv / v.rbc).toFixed(1),
    inputs: [{ id: "mcv", label: "MCV", type: "number" }, { id: "rbc", label: "RBC", type: "number" }],
    interpret: (r: number) => ({
      status: r < 13 ? "Talasemi lehine." : "Demir eksikliği.",
      action: r < 13 ? "Hb Elektroforezi." : "Ferritin paneli.",
      followup: "GİS kayıp odağı.",
      color: r < 13 ? "text-blue-600" : "text-orange-600"
    })
  },
  "apgar": { 
    category: "Pediatri", title: "Apgar", desc: "Yenidoğan Skoru", unit: "Puan",
    formula: (v: any) => Object.values(v).reduce((a: any, b: any) => a + Number(b), 0),
    inputs: [{ id: "p", label: "Nabız", options: ["Yok (0)", "<100 (1)", ">100 (2)"] }, { id: "r", label: "Solunum", options: ["Yok (0)", "Zayıf (1)", "Ağlıyor (2)"] }],
    interpret: (r: number) => ({
      status: r >= 7 ? "Normal." : "Deprese.",
      action: "Resüsitasyon/Rutin bakım.",
      followup: "5. dk skoru.",
      color: r < 7 ? "text-red-600" : "text-green-500"
    })
  },
  "light": { 
    category: "Nöroloji", title: "Light", desc: "Eksuda/Transuda", unit: "Tip",
    formula: (v: any) => (v.p1 == 1 || v.l1 == 1 ? "EKSUDA" : "TRANSUDA"),
    inputs: [{ id: "p1", label: "P/S Protein > 0.5", options: ["0", "1"] }],
    interpret: (res: any) => ({ status: res, action: "Etiyoloji araştırması.", followup: "Sitoloji.", color: "text-blue-500" })
  },
  "abcd2": { 
    category: "Nöroloji", title: "ABCD2", desc: "İnme Risk Skoru", unit: "Puan",
    formula: (v: any) => Object.values(v).reduce((a: any, b: any) => a + Number(b), 0),
    inputs: [{ id: "a", label: "Yaş >= 60", options: ["0", "1"] }],
    interpret: (r: number) => ({ status: `Risk: ${r}`, action: "Nörolojik izlem.", followup: "Görüntüleme.", color: "text-red-500" })
  },
  "parkland": { category: "Acil", title: "Parkland", desc: "Yanık Sıvı", unit: "ml", formula: (v: any) => (4 * v.w * v.p).toFixed(0), inputs: [{ id: "w", label: "Kilo", type: "number" }, { id: "p", label: "Yanık %", type: "number" }], interpret: (r: any) => ({ status: `${r} ml`, action: "Yarısı 8 saatte.", followup: "İdrar takibi.", color: "text-blue-500" }) },
  "feurea": { category: "Nefroloji", title: "FeUrea", desc: "Diüretik Alan AKI", unit: "%", formula: (v: any) => ((v.i * v.sc) / (v.s * v.ic) * 100).toFixed(1), inputs: [{ id: "s", label: "S-Üre", type: "number" }, { id: "i", label: "I-Üre", type: "number" }], interpret: (r: any) => ({ status: r < 35 ? "Prerenal" : "Renal", action: "Sıvı/İzlem.", followup: "Cr takibi.", color: "text-blue-500" }) },
  "perc": { category: "Acil", title: "PERC", desc: "PE Dışlama", unit: "Sonuç", formula: (v: any) => (v.a == 0 ? "Dışlandı" : "Dışlanamaz"), inputs: [{ id: "a", label: "Kriter Pozitifliği", options: ["0", "1"] }], interpret: (r: any) => ({ status: r, action: "İzlem/BT.", followup: "Klinik.", color: "text-green-500" }) },
  "centor": { category: "Genel", title: "Centor", desc: "Farenjit", unit: "Puan", formula: (v: any) => Object.values(v).reduce((a: any, b: any) => a + Number(b), 0), inputs: [{ id: "a", label: "Ateş", options: ["0", "1"] }], interpret: (r: any) => ({ status: r, action: "Kültür/Antibiyotik.", followup: "Semptomatik.", color: "text-red-500" }) },
  "maddrey": { category: "Gastro", title: "Maddrey", desc: "Alkolik Hepatit", unit: "Skor", formula: (v: any) => (4.6 * v.p + v.b).toFixed(1), inputs: [{ id: "p", label: "PT", type: "number" }], interpret: (r: any) => ({ status: r >= 32 ? "Ağır" : "Hafif", action: "Steroid?", followup: "KC takibi.", color: "text-red-500" }) },
  "saag-2": { category: "Gastro", title: "SAAG-2", desc: "Asit Ayrımı", unit: "g/dL", formula: (v: any) => (v.s - v.a).toFixed(1), inputs: [{ id: "s", label: "S-Alb", type: "number" }], interpret: (r: any) => ({ status: r >= 1.1 ? "Portal HT" : "Diğer", action: "Etiyoloji.", followup: "Lökosit.", color: "text-blue-500" }) },
  "bisap": { category: "Gastro", title: "BISAP", desc: "Pankreatit", unit: "Puan", formula: (v: any) => Object.values(v).reduce((a: any, b: any) => a + Number(b), 0), inputs: [{ id: "b", label: "BUN > 25", options: ["0", "1"] }], interpret: (r: any) => ({ status: r, action: "Yoğun izlem.", followup: "Sıvı yanıtı.", color: "text-red-500" }) },
  "fib4": { category: "Gastro", title: "FIB-4", desc: "KC Fibrozu", unit: "Skor", formula: (v: any) => (v.a * v.as / (v.p * Math.sqrt(v.al))).toFixed(2), inputs: [{ id: "a", label: "Yaş", type: "number" }], interpret: (r: any) => ({ status: r > 3.25 ? "Siroz" : "Normal", action: "Biyopsi/İzlem.", followup: "Yıllık takip.", color: "text-red-500" }) },
  "apri": { category: "Gastro", title: "APRI", desc: "AST/PLT", unit: "Skor", formula: (v: any) => ((v.as / 40) / v.p * 100).toFixed(2), inputs: [{ id: "as", label: "AST", type: "number" }], interpret: (r: any) => ({ status: r > 1.5 ? "Siroz" : "Normal", action: "Görüntüleme.", followup: "KC takibi.", color: "text-orange-500" }) },
  "osmolality": { category: "Nefroloji", title: "Osmolalite", desc: "Serum", unit: "mOsm", formula: (v: any) => (2 * v.n + v.g / 18 + v.b / 2.8).toFixed(1), inputs: [{ id: "n", label: "Na", type: "number" }], interpret: (r: any) => ({ status: r, action: "Tonisite ayarı.", followup: "Sıvı takibi.", color: "text-blue-500" }) },
  "urine-gap": { category: "Nefroloji", title: "İdrar Gap", desc: "Asidoz", unit: "mEq/L", formula: (v: any) => (v.n + v.k - v.c).toFixed(0), inputs: [{ id: "n", label: "I-Na", type: "number" }], interpret: (r: any) => ({ status: r > 0 ? "RTA" : "GİS", action: "Etiyoloji.", followup: "Potasyum.", color: "text-red-500" }) },
  "winters": { category: "Nefroloji", title: "Winters", desc: "Beklenen pCO2", unit: "mmHg", formula: (v: any) => (1.5 * v.h + 8).toFixed(1), inputs: [{ id: "h", label: "HCO3", type: "number" }], interpret: (r: any) => ({ status: r, action: "Solunumsal yanıt.", followup: "Kan gazı.", color: "text-purple-500" }) },
  "pf-ratio": { category: "Acil", title: "P/F Oranı", desc: "ARDS", unit: "Oran", formula: (v: any) => (v.p / (v.f / 100)).toFixed(0), inputs: [{ id: "p", label: "PaO2", type: "number" }], interpret: (r: any) => ({ status: r < 200 ? "Ağır" : "Normal", action: "Ventilasyon.", followup: "Oksijenizasyon.", color: "text-red-500" }) },
  "sodium-corr": { category: "Nefroloji", title: "Düzeltilmiş Na", desc: "Glikoz", unit: "mEq/L", formula: (v: any) => (Number(v.n) + 1.6 * ((v.g - 100) / 100)).toFixed(1), inputs: [{ id: "n", label: "Na", type: "number" }], interpret: (r: any) => ({ status: r, action: "Gerçek Na takibi.", followup: "Şeker reg.", color: "text-blue-500" }) },
  "wells-dvt": { category: "Acil", title: "Wells DVT", desc: "Tromboz", unit: "Puan", formula: (v: any) => Object.values(v).reduce((a: any, b: any) => a + Number(b), 0), inputs: [{ id: "c", label: "Kanser", options: ["0", "1"] }], interpret: (r: any) => ({ status: r, action: "Doppler.", followup: "İzlem.", color: "text-orange-500" }) },
  "ich-score": { category: "Nöroloji", title: "ICH Skoru", desc: "Kanama", unit: "Puan", formula: (v: any) => Object.values(v).reduce((a: any, b: any) => a + Number(b), 0), inputs: [{ id: "g", label: "GKS", options: ["0", "1"] }], interpret: (r: any) => ({ status: r, action: "Cerrahi kons.", followup: "BT takibi.", color: "text-red-500" }) },
  "nihss": { category: "Nöroloji", title: "NIHSS", desc: "İnme Şiddeti", unit: "Puan", formula: (v: any) => Object.values(v).reduce((a: any, b: any) => a + Number(b), 0), inputs: [{ id: "b", label: "Bilinç", options: ["0", "1"] }], interpret: (r: any) => ({ status: r, action: "Trombolitik?", followup: "Nöro izlem.", color: "text-red-600" }) },
  "abcd2-2": { category: "Nöroloji", title: "ABCD2-2", desc: "Risk", unit: "Puan", formula: (v: any) => Object.values(v).reduce((a: any, b: any) => a + Number(b), 0), inputs: [{ id: "a", label: "Yaş", options: ["0", "1"] }], interpret: (r: any) => ({ status: r, action: "Yatış?", followup: "İzlem.", color: "text-blue-500" }) },
  "sirs": { category: "Acil", title: "SIRS", desc: "Yanıt", unit: "Kriter", formula: (v: any) => Object.values(v).reduce((a: any, b: any) => a + Number(b), 0), inputs: [{ id: "a", label: "Ateş", options: ["0", "1"] }], interpret: (r: any) => ({ status: r, action: "Enfeksiyon odağı.", followup: "Laktat.", color: "text-orange-500" }) },
  "curb-2": { category: "Acil", title: "CURB-2", desc: "Pnömoni", unit: "Puan", formula: (v: any) => Object.values(v).reduce((a: any, b: any) => a + Number(b), 0), inputs: [{ id: "c", label: "Konfüzyon", options: ["0", "1"] }], interpret: (r: any) => ({ status: r, action: "Yatış.", followup: "Takip.", color: "text-blue-500" }) },
  "glasgow": { category: "Gastro", title: "Glasgow", desc: "Kanama", unit: "Puan", formula: (v: any) => Object.values(v).reduce((a: any, b: any) => a + Number(b), 0), inputs: [{ id: "b", label: "BUN", options: ["0", "1"] }], interpret: (r: any) => ({ status: r, action: "Endoskopi.", followup: "Hb takibi.", color: "text-red-500" }) },
  "rockall": { category: "Gastro", title: "Rockall", desc: "Mortalite", unit: "Puan", formula: (v: any) => Object.values(v).reduce((a: any, b: any) => a + Number(b), 0), inputs: [{ id: "a", label: "Yaş", options: ["0", "1"] }], interpret: (r: any) => ({ status: r, action: "Yakın izlem.", followup: "İzlem.", color: "text-blue-500" }) },
  "apache": { category: "Acil", title: "APACHE", desc: "Yoğun Bakım", unit: "Puan", formula: (v: any) => Object.values(v).reduce((a: any, b: any) => a + Number(b), 0), inputs: [{ id: "a", label: "Yaş", options: ["0", "1"] }], interpret: (r: any) => ({ status: r, action: "Yoğun bakım.", followup: "Mortalite.", color: "text-red-500" }) },
  "ranson": { category: "Gastro", title: "Ranson", desc: "Pankreatit", unit: "Puan", formula: (v: any) => Object.values(v).reduce((a: any, b: any) => a + Number(b), 0), inputs: [{ id: "a", label: "Yaş", options: ["0", "1"] }], interpret: (r: any) => ({ status: r, action: "Sıvı res.", followup: "Enzimler.", color: "text-orange-500" }) },
  "geneva": { category: "Acil", title: "Geneva", desc: "PE", unit: "Puan", formula: (v: any) => Object.values(v).reduce((a: any, b: any) => a + Number(b), 0), inputs: [{ id: "a", label: "Yaş", options: ["0", "1"] }], interpret: (r: any) => ({ status: r, action: "BT.", followup: "D-Dimer.", color: "text-blue-500" }) },
  "ottawa": { category: "Genel", title: "Ottawa", desc: "Röntgen", unit: "Karar", formula: (v: any) => (v.a == 1 ? "Şart" : "Gerekmez"), inputs: [{ id: "a", label: "Hassasiyet", options: ["0", "1"] }], interpret: (r: any) => ({ status: r, action: "Radyoloji.", followup: "İstirahat.", color: "text-green-500" }) },
  "ottawa-knee": { category: "Genel", title: "Ottawa-Diz", desc: "Röntgen", unit: "Karar", formula: (v: any) => (v.a == 1 ? "Şart" : "Gerekmez"), inputs: [{ id: "a", label: "Yaş", options: ["0", "1"] }], interpret: (r: any) => ({ status: r, action: "Görüntüleme.", followup: "Buz.", color: "text-green-500" }) }
};
