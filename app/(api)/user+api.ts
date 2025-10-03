import { db } from "@/lib/prisma";

export async function POST(req: Request) {
  const { email, name, clerkId } = await req.json();

  if (!email || !name || !clerkId) {
    return new Response(JSON.stringify({ success: false, error: "Missing fields" }), { status: 400 });
  }

  const user = await db.user.create({
    data: { email, name, clerkId },
  });

  return new Response(JSON.stringify({ success: true, user }), { status: 200 });
}
