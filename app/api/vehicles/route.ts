import { NextRequest, NextResponse } from 'next/server';
import { vehicleDb } from '@/lib/db/database';

// GET all vehicles
export async function GET() {
  try {
    const vehicles = vehicleDb.getAll();
    return NextResponse.json(vehicles);
  } catch (error) {
    console.error('Error fetching vehicles:', error);
    return NextResponse.json(
      { error: 'Failed to fetch vehicles' },
      { status: 500 }
    );
  }
}

// POST create vehicle
export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    
    // Basic validation
    if (!body.name || !body.year || !body.mileage || body.price === undefined) {
      return NextResponse.json(
        { error: 'Missing required fields' },
        { status: 400 }
      );
    }

    const vehicle = vehicleDb.create({
      name: body.name,
      year: parseInt(body.year),
      mileage: parseInt(body.mileage),
      price: parseFloat(body.price),
      status: body.status || 'available',
      images: body.images || [],
    });

    return NextResponse.json(vehicle, { status: 201 });
  } catch (error) {
    console.error('Error creating vehicle:', error);
    return NextResponse.json(
      { error: 'Failed to create vehicle' },
      { status: 500 }
    );
  }
}
