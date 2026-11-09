import { NextRequest, NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";

export async function POST(req: NextRequest) {
  try {
    const body = await req.json().catch(() => ({}));
    const path = typeof body.path === "string" ? body.path.slice(0, 200) : "/";
    const visitorId = typeof body.visitorId === "string" ? body.visitorId.slice(0, 100) : "anon";
    const referrer = typeof body.referrer === "string" ? body.referrer.slice(0, 200) : "";
    const userAgent = req.headers.get("user-agent") || "";
    const ip = req.headers.get("x-forwarded-for")?.split(",")[0]?.trim() || req.headers.get("x-real-ip") || "127.0.0.1";

    // Ignore admin routes from visitor stats
    if (path.startsWith("/admin") || path.startsWith("/api")) {
      return NextResponse.json({ ok: true });
    }

    // Save page view in AuditLog
    await prisma.auditLog.create({
      data: {
        action: "PAGE_VIEW",
        ipAddress: ip.slice(0, 45),
        metadata: JSON.stringify({
          path,
          visitorId,
          referrer,
          device: userAgent.includes("Mobile") ? "mobile" : "desktop",
          timestamp: new Date().toISOString(),
        }),
      },
    });

    return NextResponse.json({ ok: true });
  } catch (err) {
    // Non-blocking for client
    return NextResponse.json({ ok: false }, { status: 200 });
  }
}
