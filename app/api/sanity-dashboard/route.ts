import { NextResponse } from 'next/server'
import { client } from '@/sanity/lib/client'

export async function GET() {
  try {
    const orders = await client.fetch(`*[_type == "order"] | order(createdAt desc)[0...5]`)
    const revenue = orders.reduce((sum: number, o: { totalAmount?: number }) => sum + (o.totalAmount || 0), 0)
    const today = new Date().toISOString().slice(0, 10)

    const todayOrders = orders.filter((o: { createdAt?: string }) => o.createdAt?.startsWith(today)).length
    const orderCount = await client.fetch(`count(*[_type == "order"])`)
    const productCount = await client.fetch(`count(*[_type == "product"])`)

    type Order = {
      _id: string;
      customer?: { name?: string };
      _createdAt: string;
      totalAmount?: number;
      status?: string;
    };

    const recentOrders = orders.map((o: Order) => ({
      _id: o._id,
      customerName: o.customer?.name || 'Unknown',
      createdAt: o._createdAt,
      totalAmount: o.totalAmount || 0,
      status: o.status || 'pending',
    }))

    return NextResponse.json({
      revenue,
      productCount,
      orderCount,
      todayOrders,
      recentOrders,
    })
  } catch  {
    return NextResponse.json({ error: 'Server Error' }, { status: 500 })
  }
}
