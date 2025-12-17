// Database schema for vehicles
export interface Vehicle {
  id: number;
  name: string;
  year: number;
  mileage: number;
  price: number;
  status: 'available' | 'sold';
  images: string[]; // Cloudinary URLs
  createdAt: string;
  updatedAt: string;
}

export interface CreateVehicleInput {
  name: string;
  year: number;
  mileage: number;
  price: number;
  status: 'available' | 'sold';
  images: string[];
}

export interface UpdateVehicleInput extends Partial<CreateVehicleInput> {
  id: number;
}
