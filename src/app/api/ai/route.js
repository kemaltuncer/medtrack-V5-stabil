export async function GET() {
  return new Response(JSON.stringify({ status: "offline" }), { status: 200 });
}
export async function POST() {
  return new Response(JSON.stringify({ message: "AI Temporarily Disabled" }), { status: 200 });
}
