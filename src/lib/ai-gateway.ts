import { supabase } from "./supabase"; // Supabase bağlantımız

// SİSTEMİN FİYAT VE MODEL BEYNİ
const AI_CONFIG = {
  "osce_chat": { cost: 1, model: "claude-3-haiku", provider: "anthropic" },
  "diagnostic": { cost: 5, model: "gpt-4o", provider: "openai" },
  "spot_gen": { cost: 2, model: "gemini-1.5-flash", provider: "google" }
};

export async function processAiRequest(userId: string, taskType: keyof typeof AI_CONFIG, prompt: string) {
  const config = AI_CONFIG[taskType];

  // 1. GÜVENLİK VE BAKİYE KONTROLÜ
  const { data: wallet, error: walletError } = await supabase
    .from('user_wallets')
    .select('balance')
    .eq('user_id', userId)
    .single();

  if (walletError || !wallet) throw new Error("Cüzdan bulunamadı.");
  if (wallet.balance < config.cost) throw new Error("Yetersiz Token Bakiyesi. Lütfen planınızı yükseltin.");

  // 2. AI MODELİNE İSTEK ATMA (Simülasyon - Gerçek API çağrıları buraya gelecek)
  let aiResponse = "";
  try {
    console.log(`[AI GATEWAY] Routing to ${config.provider} (${config.model}) for task: ${taskType}`);
    
    // BURAYA GERÇEK OPENAI / ANTHROPIC FETCH KODLARI GELECEK
    // Şimdilik sistemin çalıştığını simüle ediyoruz:
    aiResponse = `Bu bir ${config.model} model yanıtıdır. Sorduğun soru: ${prompt.substring(0,20)}...`;

  } catch (error) {
    throw new Error("AI sağlayıcısında hata oluştu.");
  }

  // 3. İŞLEM BAŞARILIYSA TOKEN DÜŞ VE LOGLA (Maliyet Takibi)
  const newBalance = wallet.balance - config.cost;
  
  // Bakiyeyi güncelle
  await supabase.from('user_wallets').update({ balance: newBalance }).eq('user_id', userId);
  
  // Fiş Kes (Log tablosuna yaz ki kim ne harcamış görelim)
  await supabase.from('token_ledger').insert({
    user_id: userId,
    action_type: taskType,
    tokens_spent: config.cost,
    model_used: config.model
  });

  // 4. CEVABI KULLANICIYA DÖNDÜR
  return {
    response: aiResponse,
    tokensLeft: newBalance,
    cost: config.cost
  };
}
