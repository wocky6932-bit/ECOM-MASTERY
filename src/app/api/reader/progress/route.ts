import { NextRequest, NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";
import { verifyToken } from "@/lib/auth";

export async function POST(req: NextRequest) {
  try {
    const token = req.cookies.get("ecom_session")?.value;
    let userId: string | null = null;

    if (token) {
      const payload = verifyToken(token);
      if (payload) userId = payload.userId;
    }

    // Fallback user si non logué en dev
    if (!userId) {
      const user = await prisma.user.findFirst();
      if (user) userId = user.id;
    }

    if (!userId) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    }

    const { productId, lastPosition, progressPct, chapterId } = await req.json();

    await prisma.readingProgress.upsert({
      where: {
        userId_productId: {
          userId,
          productId,
        },
      },
      create: {
        userId,
        productId,
        lastPosition: lastPosition || 1,
        lastChapterId: chapterId,
        progressPct: progressPct || 0,
      },
      update: {
        lastPosition: lastPosition || 1,
        lastChapterId: chapterId,
        progressPct: progressPct || 0,
      },
    });

    return NextResponse.json({ success: true });
  } catch (err: any) {
    return NextResponse.json({ error: err.message }, { status: 500 });
  }
}
