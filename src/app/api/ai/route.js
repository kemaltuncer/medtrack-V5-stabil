export const dynamic = 'force-dynamic';

export async function GET() {
  return new Response(JSON.stringify({ status: "AI is offline for maintenance" }), {
    status: 200,
    headers: { 'Content-Type': 'application/json' }
  });
}

export async function POST() {
  return new Response(JSON.stringify({ message: "AI Temporarily Disabled" }), {
    status: 200,
    headers: { 'Content-Type': 'application/json' }
  });
}
