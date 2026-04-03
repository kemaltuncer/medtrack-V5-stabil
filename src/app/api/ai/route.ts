import { NextResponse } from 'next/server';
import { processAiRequest } from '@/lib/ai-gateway';

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { userId, taskType, prompt } = body;

    // Gelen isteği doğrula
    if (!userId || !taskType || !prompt) {
      return NextResponse.json({ error: "Eksik parametre" }, { status: 400 });
    }

    // Merkezi Gateway'e gönder
    const result = await processAiRequest(userId, taskType, prompt);

    return NextResponse.json(result);

  } catch (error: any) {
    // Hata durumunda (Örn: Yetersiz bakiye) kullanıcıya düzgün hata dön
    return NextResponse.json({ error: error.message }, { status: 402 }); 
    // 402: Payment Required (Tam SaaS mantığı)
  }
}
