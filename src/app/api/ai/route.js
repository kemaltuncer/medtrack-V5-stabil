export const dynamic = 'force-dynamic';

export async function GET() {
  return Response.json({ status: "Meditrack AI is resting" });
}

export async function POST() {
  return Response.json({ message: "AI Temporarily Offline" });
}
