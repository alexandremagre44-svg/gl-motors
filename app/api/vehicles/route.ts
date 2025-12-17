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
    if (!body.marque || !body.modele || !body.annee || !body.kilometrage || body.prix === undefined || !body.carburant || !body.boite) {
      return NextResponse.json(
        { error: 'Missing required fields' },
        { status: 400 }
      );
    }

    const vehicle = vehicleDb.create({
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
