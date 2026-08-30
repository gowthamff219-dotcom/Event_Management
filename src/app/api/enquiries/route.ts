import { NextResponse } from 'next/dist/server/web/spec-extension/response';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export async function POST(req: Request) {
  try {
    const body = await req.json();
    
    // Basic validation
    if (!body.name || !body.email || !body.eventType || !body.message) {
      return NextResponse.json({ error: 'Missing required fields' }, { status: 400 });
    }
    
    const enquiry = await prisma.enquiry.create({
      data: {
        name: body.name,
        email: body.email,
        phone: body.phone,
        eventType: body.eventType,
        eventDate: body.eventDate ? new Date(body.eventDate) : null,
        guestCount: body.guestCount ? parseInt(body.guestCount) : null,
        location: body.location,
        message: body.message,
      },
    });

    return NextResponse.json({ success: true, enquiry }, { status: 201 });
  } catch (error) {
    console.error('Error creating enquiry:', error);
    return NextResponse.json({ error: 'Failed to submit enquiry' }, { status: 500 });
  }
}

export async function GET() {
  try {
    const enquiries = await prisma.enquiry.findMany({
      orderBy: { createdAt: 'desc' },
    });
    return NextResponse.json(enquiries);
  } catch (error) {
    return NextResponse.json({ error: 'Failed to fetch enquiries' }, { status: 500 });
  }
}
