"use client";
import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { 
  Activity, ArrowLeft, HeartPulse, Stethoscope, 
  Send, User, AlertCircle, Coins, Clock, ChevronRight, 
  ShieldAlert, BrainCircuit, RefreshCcw
} from "lucide-react";
import Link from "next/link";

// Sahte Chat Verisi ve Tipleri
type Message = { role: 'ai' | 'user' | 'system', content: string };

export default function OsceSimulator() {
  const [tokens, setTokens] = useState(10); // Başlangıçta 10 token veriyoruz
  const [input, setInput] = useState("");
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const [messages, setMessages] = useState<Message[]>([
    { role: 'system', content: 'OSCE Sınavı Başladı. Kalan Süre: 10:00. Vaka: 54 Yaş, Erkek. Şikayet: Göğüs Ağrısı.' },
    { role: 'ai', content: 'Doktor bey/hanım hoşgeldiniz. Sol koluma doğru vuran çok kötü bir ağrım var, nefes alamıyorum sanki...' }
  ]);

  // Yeni mesaj geldiğinde en alta kaydır
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages, isTyping]);

  const handleSendMessage = (e: React.FormEvent) => {
    e.preventDefault();
    if (!input.trim()) return;

    // TOKEN KONTROLÜ (Sanal Gateway)
    if (tokens < 1) {
      setMessages(prev => [...prev, { role: 'system', content: 'UYARI: Yetersiz Token! Lütfen bakiyenizi yükleyin.' }]);
      return;
    }

    // Kullanıcı mesajını ekle ve 1 Token Kes
    const userMsg = input;
    setMessages(prev => [...prev, { role: 'user', content: userMsg }]);
    setInput("");
    setTokens(prev => prev - 1);
    setIsTyping(true);

    // AI Yanıtını Simüle Et (Normalde burada Backend'e istek atılır)
    setTimeout(() => {
      setIsTyping(false);
      let aiReply = "";
      
      if (userMsg.toLowerCase().includes("ne zaman başladı")) {
        aiReply = "Yaklaşık 2 saat önce aniden başladı. Soğuk terler döküyorum.";
      } else if (userMsg.toLowerCase().includes("ekg") || userMsg.toLowerCase().includes("troponin")) {
        aiReply = "(Sınav Jürisi): Tetkik talebiniz onaylandı. Lütfen önce fizik muayeneyi tamamlayınız.";
      } else {
        aiReply = "Ağrım çok şiddetli doktor, midem de bulanıyor. Kalp krizi mi geçiriyorum?";
      }

      setMessages(prev => [...prev, { role: 'ai', content: aiReply }]);
    }, 1500);
  };

  return (
    <main className="min-h-screen bg-[#F8FAFC] flex text-slate-900 overflow-hidden">
      
      {/* SOL PANEL: Vaka Monitörü ve Cüzdan */}
      <aside className="w-full md:w-[400px] bg-white border-r border-slate-200 flex flex-col h-screen z-10 shadow-lg">
        <div className="p-6 border-b border-slate-100 flex flex-col gap-6">
          <Link href="/dashboard" className="flex items-center gap-2 text-slate-400 font-bold hover:text-blue-600 transition-all">
            <ArrowLeft size={18} /> Dashboard'a Dön
          </Link>
          
          {/* TOKEN CÜZDANI */}
          <div className="bg-slate-900 rounded-[2rem] p-6 text-white shadow-xl relative overflow-hidden">
             <Coins className="absolute -right-4 -bottom-4 w-32 h-32 opacity-10" />
             <div className="flex justify-between items-center mb-4 relative z-10">
                <span className="text-sm font-bold text-slate-400 uppercase tracking-widest">MedCoin Cüzdanı</span>
                <span className="flex items-center gap-1 text-xs font-black bg-blue-600 px-3 py-1 rounded-full"><BrainCircuit size={12}/> AI Aktif</span>
             </div>
             <div className="text-5xl font-black relative z-10 mb-2">
               {tokens} <span className="text-lg opacity-50">Token</span>
             </div>
             <p className="text-xs font-bold text-rose-400 relative z-10">-1 Token / Mesaj</p>
          </div>
        </div>

        <div className="flex-1 overflow-y-auto p-6 space-y-6 bg-slate-50">
          <div>
             <h3 className="text-xs font-black uppercase tracking-widest text-slate-400 mb-3">Vaka Bilgisi</h3>
             <div className="bg-white p-5 rounded-2xl border border-slate-100 shadow-sm">
                <h4 className="font-black text-lg mb-1">Ahmet Yılmaz (54e)</h4>
                <p className="text-sm font-bold text-slate-500 mb-4">Şikayet: Retrosternal Ağrı</p>
                <div className="flex items-center gap-2 text-xs font-bold text-rose-600 bg-rose-50 px-3 py-2 rounded-xl">
                   <AlertCircle size={14} /> Kırmızı Alan Vakası
                </div>
             </div>
          </div>

          <div>
             <h3 className="text-xs font-black uppercase tracking-widest text-slate-400 mb-3">Canlı Monitör</h3>
             <div className="grid grid-cols-2 gap-3">
                <VitalCard icon={<HeartPulse />} title="Nabız" value="112" unit="bpm" color="text-rose-500" />
                <VitalCard icon={<Activity />} title="Tansiyon" value="150/90" unit="mmHg" color="text-amber-500" />
                <VitalCard icon={<Clock />} title="Solunum" value="22" unit="/dk" color="text-blue-500" />
                <VitalCard icon={<Stethoscope />} title="SPO2" value="%94" unit="OdaH" color="text-emerald-500" />
             </div>
          </div>
        </div>

        <div className="p-6 border-t border-slate-200 bg-white">
           <button className="w-full py-4 bg-rose-50 text-rose-600 rounded-2xl font-black hover:bg-rose-100 transition-colors flex items-center justify-center gap-2">
             <ShieldAlert size={18} /> Sınavı Bitir ve Puanla
           </button>
        </div>
      </aside>

      {/* SAĞ PANEL: AI Chat Arayüzü */}
      <section className="flex-1 flex flex-col bg-[#F8FAFC] h-screen relative">
        <header className="p-6 bg-white/80 backdrop-blur-md border-b border-slate-200 flex justify-between items-center z-10">
           <div>
             <h2 className="text-2xl font-black tracking-tight flex items-center gap-2">
               <Activity className="text-rose-500 animate-pulse" /> Acil Servis Odası 3
             </h2>
             <p className="text-slate-500 font-bold text-sm">OSCE Simülasyonu Devam Ediyor...</p>
           </div>
           <div className="flex items-center gap-2 text-slate-900 font-black text-xl bg-slate-100 px-4 py-2 rounded-xl">
              <Clock size={20} className="text-rose-500" /> 09:45
           </div>
        </header>

        {/* Mesajlaşma Alanı */}
        <div className="flex-1 overflow-y-auto p-6 md:p-10 space-y-6 scroll-smooth">
          <AnimatePresence>
            {messages.map((msg, idx) => (
              <motion.div 
                initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }}
                key={idx} 
                className={`flex ${msg.role === 'user' ? 'justify-end' : msg.role === 'system' ? 'justify-center' : 'justify-start'}`}
              >
                {msg.role === 'system' ? (
                  <div className="bg-slate-900 text-white text-xs font-black uppercase tracking-widest px-6 py-2 rounded-full shadow-lg">
                    {msg.content}
                  </div>
                ) : (
                  <div className={`max-w-[80%] flex gap-4 ${msg.role === 'user' ? 'flex-row-reverse' : 'flex-row'}`}>
                    <div className={`w-10 h-10 rounded-full flex items-center justify-center shrink-0 border-2 border-white shadow-sm ${msg.role === 'user' ? 'bg-blue-600 text-white' : 'bg-rose-500 text-white'}`}>
                       {msg.role === 'user' ? <User size={20}/> : <User size={20}/>}
                    </div>
                    <div className={`p-5 rounded-[2rem] shadow-sm text-[15px] font-medium leading-relaxed ${msg.role === 'user' ? 'bg-blue-600 text-white rounded-tr-none' : 'bg-white border border-slate-100 text-slate-800 rounded-tl-none'}`}>
                      {msg.content}
                    </div>
                  </div>
                )}
              </motion.div>
            ))}

            {isTyping && (
              <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="flex justify-start">
                <div className="flex gap-4">
                  <div className="w-10 h-10 rounded-full bg-rose-500 text-white flex items-center justify-center border-2 border-white"><User size={20}/></div>
                  <div className="p-5 bg-white border border-slate-100 rounded-[2rem] rounded-tl-none flex items-center gap-2">
                     <div className="w-2 h-2 bg-slate-300 rounded-full animate-bounce" style={{ animationDelay: "0ms" }}></div>
                     <div className="w-2 h-2 bg-slate-300 rounded-full animate-bounce" style={{ animationDelay: "150ms" }}></div>
                     <div className="w-2 h-2 bg-slate-300 rounded-full animate-bounce" style={{ animationDelay: "300ms" }}></div>
                  </div>
                </div>
              </motion.div>
            )}
            <div ref={messagesEndRef} />
          </AnimatePresence>
        </div>

        {/* Input Alanı */}
        <footer className="p-6 bg-white border-t border-slate-200 z-10">
           <form onSubmit={handleSendMessage} className="max-w-4xl mx-auto relative flex items-center">
             <input 
               type="text" 
               value={input}
               onChange={(e) => setInput(e.target.value)}
               placeholder="Hastaya sorunuzu veya jüriye talebinizi yazın..."
               disabled={tokens < 1 || isTyping}
               className="w-full bg-slate-50 border border-slate-200 p-5 pl-6 pr-16 rounded-[2rem] outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent font-medium disabled:opacity-50"
             />
             <button 
               type="submit" 
               disabled={tokens < 1 || isTyping || !input.trim()}
               className="absolute right-3 w-12 h-12 bg-blue-600 text-white rounded-full flex items-center justify-center hover:scale-105 transition-transform disabled:opacity-50 disabled:hover:scale-100 shadow-md shadow-blue-200"
             >
               <Send size={20} className="ml-1" />
             </button>
           </form>
           <p className="text-center text-[10px] font-black text-slate-400 mt-3 uppercase tracking-widest flex items-center justify-center gap-1">
             <ShieldAlert size={12}/> Her mesaj gönderiminde bakiyenizden 1 Token düşülecektir.
           </p>
        </footer>
      </section>
    </main>
  );
}

// Canlı Monitör Kartı
function VitalCard({ icon, title, value, unit, color }: any) {
  return (
    <div className="bg-white p-4 rounded-2xl border border-slate-100 shadow-sm">
      <div className={`flex items-center gap-2 ${color} mb-2`}>
        {icon} <span className="text-xs font-black uppercase">{title}</span>
      </div>
      <div className="flex items-end gap-1">
        <span className="text-2xl font-black text-slate-900 leading-none">{value}</span>
        <span className="text-xs font-bold text-slate-400 mb-1">{unit}</span>
      </div>
    </div>
  );
}
