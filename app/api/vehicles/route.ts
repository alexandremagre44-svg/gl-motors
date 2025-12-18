import { NextRequest, NextResponse } from 'next/server';
import { vehicleService } from '@/lib/vehicles.service';

// Force Node.js runtime for Vercel compatibility
export const runtime = 'nodejs';

// GET all vehicles
export async function GET() {
  try {
    const vehicles = await vehicleService.getAll();
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
    if (!body.marque || !body.modele || !body.annee || !body.kilometrage || body.prix === undefined || !body.carburant || !body.boite) {
      return NextResponse.json(
        { error: 'Missing required fields' },
        { status: 400 }
      );
    }

    const vehicle = await vehicleService.create({
      marque: body.marque,
      modele: body.modele,
      annee: parseInt(body.annee),
      kilometrage: parseInt(body.kilometrage),
      carburant: body.carburant,
      boite: body.boite,
      prix: parseFloat(body.prix),
      description: body.description || '',
      options: body.options || [],
      photos: body.photos || [],
      statut: body.statut || 'disponible',
      isActive: body.isActive !== false,
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
