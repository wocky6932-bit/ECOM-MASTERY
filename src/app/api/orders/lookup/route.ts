import { NextRequest, NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";

export async function GET(req: NextRequest) {
  const { searchParams } = new URL(req.url);
  const orderNumber = searchParams.get("orderNumber");

  if (!orderNumber) {
    return NextResponse.json({ error: "Missing orderNumber" }, { status: 400 });
  }

  const order = await prisma.order.findUnique({
    where: { orderNumber },
    include: {
      product: true,
      accessCodes: {
        where: { status: "ACTIVE" },
        take: 1,
      },
    },
  });

  if (!order) {
    return NextResponse.json({ error: "Order not found" }, { status: 404 });
  }

  return NextResponse.json({
    orderNumber: order.orderNumber,
    status: order.status,
    amount: order.amount,
    currency: order.currency,
    product: {
      title: order.product.title,
      slug: order.product.slug,
      category: order.product.category,
    },
    accessCode: order.accessCodes[0] || null,
  });
}
