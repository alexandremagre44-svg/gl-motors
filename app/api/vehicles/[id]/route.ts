import { NextRequest, NextResponse } from 'next/server';
import { vehicleStore } from '@/lib/vehicles.store';

// Force Node.js runtime for Vercel compatibility
export const runtime = 'nodejs';

// GET vehicle by ID
export async function GET(
  request: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    const { id: idStr } = await params;
    const id = parseInt(idStr);
    const vehicle = vehicleStore.getById(id);
    
    if (!vehicle) {
      return NextResponse.json(
        { error: 'Vehicle not found' },
        { status: 404 }
      );
    }

    return NextResponse.json(vehicle);
  } catch (error) {
    console.error('Error fetching vehicle:', error);
    return NextResponse.json(
      { error: 'Failed to fetch vehicle' },
      { status: 500 }
    );
  }
}

// PUT update vehicle
export async function PUT(
  request: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    const { id: idStr } = await params;
    const id = parseInt(idStr);
    const body = await request.json();

    const updateData: {
      id: number;
      marque?: string;
      modele?: string;
      annee?: number;
      kilometrage?: number;
      carburant?: string;
      boite?: string;
      prix?: number;
      description?: string;
      options?: string[];
      photos?: string[];
      statut?: 'disponible' | 'reserve' | 'vendu';
      isActive?: boolean;
    } = { id };
    
    if (body.marque !== undefined) updateData.marque = body.marque;
    if (body.modele !== undefined) updateData.modele = body.modele;
    if (body.annee !== undefined) updateData.annee = parseInt(body.annee);
    if (body.kilometrage !== undefined) updateData.kilometrage = parseInt(body.kilometrage);
    if (body.carburant !== undefined) updateData.carburant = body.carburant;
    if (body.boite !== undefined) updateData.boite = body.boite;
    if (body.prix !== undefined) updateData.prix = parseFloat(body.prix);
    if (body.description !== undefined) updateData.description = body.description;
    if (body.options !== undefined) updateData.options = body.options;
    if (body.photos !== undefined) updateData.photos = body.photos;
    if (body.statut !== undefined) updateData.statut = body.statut;
    if (body.isActive !== undefined) updateData.isActive = body.isActive;

    const vehicle = vehicleStore.update(updateData);

    if (!vehicle) {
      return NextResponse.json(
        { error: 'Vehicle not found' },
        { status: 404 }
      );
    }

    return NextResponse.json(vehicle);
  } catch (error) {
    console.error('Error updating vehicle:', error);
    return NextResponse.json(
      { error: 'Failed to update vehicle' },
      { status: 500 }
    );
  }
}

// DELETE vehicle
export async function DELETE(
  request: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    const { id: idStr } = await params;
    const id = parseInt(idStr);
    const success = vehicleStore.delete(id);

    if (!success) {
      return NextResponse.json(
        { error: 'Vehicle not found' },
        { status: 404 }
      );
    }

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error('Error deleting vehicle:', error);
    return NextResponse.json(
      { error: 'Failed to delete vehicle' },
      { status: 500 }
    );
  }
}
