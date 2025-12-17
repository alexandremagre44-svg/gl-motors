'use client';

import { useState, useEffect } from 'react';
import { Vehicle } from '@/lib/db/schema';

const defaultFormData = {
  marque: '',
  modele: '',
  annee: '',
  kilometrage: '',
  carburant: 'essence',
  boite: 'manuelle',
  prix: '',
  description: '',
  options: [] as string[],
  photos: [] as string[],
  statut: 'disponible' as 'disponible' | 'reserve' | 'vendu',
  isActive: true,
};

export default function AdminShowroomPage() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [vehicles, setVehicles] = useState<Vehicle[]>([]);
  const [editingVehicle, setEditingVehicle] = useState<Vehicle | null>(null);
  const [showForm, setShowForm] = useState(false);
  const [formData, setFormData] = useState(defaultFormData);
  const [uploading, setUploading] = useState(false);
  const [newOption, setNewOption] = useState('');

  useEffect(() => {
    checkAuth();
  }, []);

  useEffect(() => {
    if (isAuthenticated) {
      fetchVehicles();
    }
  }, [isAuthenticated]);

  const checkAuth = async () => {
    const hasToken = document.cookie.includes('admin-token=');
    if (hasToken) {
      try {
        const response = await fetch('/api/vehicles');
        if (response.ok) {
          setIsAuthenticated(true);
        }
      } catch (error) {
        console.error('Auth check failed:', error);
      }
    }
  };

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const response = await fetch('/api/admin/auth', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, password }),
      });

      if (response.ok) {
        setIsAuthenticated(true);
        setPassword('');
      } else {
        alert('Identifiants invalides');
      }
    } catch (error) {
      console.error('Login error:', error);
      alert('Erreur de connexion');
    }
  };

  const handleLogout = async () => {
    try {
      await fetch('/api/admin/auth', { method: 'DELETE' });
      setIsAuthenticated(false);
    } catch (error) {
      console.error('Logout error:', error);
    }
  };

  const fetchVehicles = async () => {
    try {
      const response = await fetch('/api/vehicles');
      const data = await response.json();
      setVehicles(data);
    } catch (error) {
      console.error('Error fetching vehicles:', error);
    }
  };

  const handleImageUpload = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    setUploading(true);
    try {
      const uploadFormData = new FormData();
      uploadFormData.append('file', file);

      const response = await fetch('/api/upload', {
        method: 'POST',
        body: uploadFormData,
      });

      if (response.ok) {
        const data = await response.json();
        setFormData(prev => ({
          ...prev,
          photos: [...prev.photos, data.url],
        }));
      } else {
        alert('Erreur lors du téléchargement de l\'image');
      }
    } catch (error) {
      console.error('Upload error:', error);
      alert('Erreur lors du téléchargement de l\'image');
    } finally {
      setUploading(false);
    }
  };

  const removeImage = (index: number) => {
    setFormData(prev => ({
      ...prev,
      photos: prev.photos.filter((_, i) => i !== index),
    }));
  };

  const moveImage = (index: number, direction: 'up' | 'down') => {
    const newPhotos = [...formData.photos];
    const newIndex = direction === 'up' ? index - 1 : index + 1;
    
    if (newIndex >= 0 && newIndex < newPhotos.length) {
      [newPhotos[index], newPhotos[newIndex]] = [newPhotos[newIndex], newPhotos[index]];
      setFormData(prev => ({ ...prev, photos: newPhotos }));
    }
  };

  const addOption = () => {
    if (newOption.trim()) {
      setFormData(prev => ({
        ...prev,
        options: [...prev.options, newOption.trim()],
      }));
      setNewOption('');
    }
  };

  const removeOption = (index: number) => {
    setFormData(prev => ({
      ...prev,
      options: prev.options.filter((_, i) => i !== index),
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const vehicleData = {
      marque: formData.marque,
      modele: formData.modele,
      annee: parseInt(formData.annee),
      kilometrage: parseInt(formData.kilometrage),
      carburant: formData.carburant,
      boite: formData.boite,
      prix: parseFloat(formData.prix),
      description: formData.description,
      options: formData.options,
      photos: formData.photos,
      statut: formData.statut,
      isActive: formData.isActive,
    };

    try {
      if (editingVehicle) {
        const response = await fetch(`/api/vehicles/${editingVehicle.id}`, {
          method: 'PUT',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(vehicleData),
        });

        if (response.ok) {
          alert('Véhicule mis à jour');
          resetForm();
          fetchVehicles();
        }
      } else {
        const response = await fetch('/api/vehicles', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(vehicleData),
        });

        if (response.ok) {
          alert('Véhicule ajouté');
          resetForm();
          fetchVehicles();
        }
      }
    } catch (error) {
      console.error('Error saving vehicle:', error);
      alert('Erreur lors de l\'enregistrement');
    }
  };

  const handleEdit = (vehicle: Vehicle) => {
    setEditingVehicle(vehicle);
    setFormData({
      marque: vehicle.marque,
      modele: vehicle.modele,
      annee: vehicle.annee.toString(),
      kilometrage: vehicle.kilometrage.toString(),
      carburant: vehicle.carburant,
      boite: vehicle.boite,
      prix: vehicle.prix.toString(),
      description: vehicle.description,
      options: vehicle.options,
      photos: vehicle.photos,
      statut: vehicle.statut,
      isActive: vehicle.isActive,
    });
    setShowForm(true);
  };

  const handleDuplicate = (vehicle: Vehicle) => {
    setEditingVehicle(null);
    setFormData({
      marque: vehicle.marque,
      modele: vehicle.modele,
      annee: vehicle.annee.toString(),
      kilometrage: vehicle.kilometrage.toString(),
      carburant: vehicle.carburant,
      boite: vehicle.boite,
      prix: vehicle.prix.toString(),
      description: vehicle.description,
      options: vehicle.options,
      photos: vehicle.photos,
      statut: 'disponible',
      isActive: true,
    });
    setShowForm(true);
  };

  const handleMarkAsSold = async (id: number) => {
    try {
      const response = await fetch(`/api/vehicles/${id}`, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ statut: 'vendu' }),
      });

      if (response.ok) {
        alert('Véhicule marqué comme vendu');
        fetchVehicles();
      }
    } catch (error) {
      console.error('Error marking as sold:', error);
      alert('Erreur lors de la mise à jour');
    }
  };

  const handleToggleActive = async (vehicle: Vehicle) => {
    try {
      const response = await fetch(`/api/vehicles/${vehicle.id}`, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ isActive: !vehicle.isActive }),
      });

      if (response.ok) {
        alert(vehicle.isActive ? 'Annonce désactivée' : 'Annonce activée');
        fetchVehicles();
      }
    } catch (error) {
      console.error('Error toggling active:', error);
      alert('Erreur lors de la mise à jour');
    }
  };

  const handleDelete = async (id: number) => {
    if (!confirm('Êtes-vous sûr de vouloir supprimer ce véhicule ?')) {
      return;
    }

    try {
      const response = await fetch(`/api/vehicles/${id}`, {
        method: 'DELETE',
      });

      if (response.ok) {
        alert('Véhicule supprimé');
        fetchVehicles();
      }
    } catch (error) {
      console.error('Error deleting vehicle:', error);
      alert('Erreur lors de la suppression');
    }
  };

  const resetForm = () => {
    setFormData(defaultFormData);
    setEditingVehicle(null);
    setShowForm(false);
  };

  if (!isAuthenticated) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-100">
        <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-md">
          <h1 className="text-3xl font-bold text-center mb-8">
            Administration GL MOTORS
          </h1>
          <form onSubmit={handleLogin}>
            <div className="mb-4">
              <label className="block text-gray-700 font-semibold mb-2">
                Email
              </label>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-red-600"
              />
            </div>
            <div className="mb-6">
              <label className="block text-gray-700 font-semibold mb-2">
                Mot de passe
              </label>
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-red-600"
              />
            </div>
            <button
              type="submit"
              className="w-full bg-red-600 hover:bg-red-700 text-white font-semibold py-3 rounded-lg transition-colors"
            >
              Se connecter
            </button>
          </form>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-100 py-4 md:py-8">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center mb-4 md:mb-8">
          <h1 className="text-2xl md:text-4xl font-bold text-gray-900">
            Gestion du Showroom
          </h1>
          <button
            onClick={handleLogout}
            className="bg-gray-600 hover:bg-gray-700 text-white px-4 py-2 md:px-6 md:py-2 rounded-lg transition-colors text-sm md:text-base"
          >
            Déconnexion
          </button>
        </div>

        {/* Add/Edit Form */}
        {!showForm ? (
          <button
            onClick={() => setShowForm(true)}
            className="bg-red-600 hover:bg-red-700 text-white px-4 py-2 md:px-6 md:py-3 rounded-lg font-semibold mb-4 md:mb-8 transition-colors text-sm md:text-base"
          >
            + Ajouter un véhicule
          </button>
        ) : (
          <div className="bg-white p-4 md:p-8 rounded-lg shadow-lg mb-4 md:mb-8">
            <h2 className="text-xl md:text-2xl font-bold mb-4 md:mb-6">
              {editingVehicle ? 'Modifier le véhicule' : 'Ajouter un véhicule'}
            </h2>
            <form onSubmit={handleSubmit}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6 mb-4 md:mb-6">
                <div>
                  <label className="block text-gray-700 font-semibold mb-1 md:mb-2 text-sm md:text-base">
                    Marque *
                  </label>
                  <input
                    type="text"
                    value={formData.marque}
                    onChange={(e) => setFormData({ ...formData, marque: e.target.value })}
                    required
                    placeholder="ex: Renault"
                    className="w-full px-3 py-2 md:px-4 md:py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-red-600 text-sm md:text-base"
                  />
                </div>

                <div>
                  <label className="block text-gray-700 font-semibold mb-1 md:mb-2 text-sm md:text-base">
                    Modèle *
                  </label>
                  <input
                    type="text"
                    value={formData.modele}
                    onChange={(e) => setFormData({ ...formData, modele: e.target.value })}
                    required
                    placeholder="ex: Clio V"
                    className="w-full px-3 py-2 md:px-4 md:py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-red-600 text-sm md:text-base"
                  />
                </div>

                <div>
                  <label className="block text-gray-700 font-semibold mb-1 md:mb-2 text-sm md:text-base">
                    Année *
                  </label>
                  <input
                    type="number"
                    value={formData.annee}
                    onChange={(e) => setFormData({ ...formData, annee: e.target.value })}
                    required
                    min="1950"
                    max={new Date().getFullYear() + 1}
                    className="w-full px-3 py-2 md:px-4 md:py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-red-600 text-sm md:text-base"
                  />
                </div>

                <div>
                  <label className="block text-gray-700 font-semibold mb-1 md:mb-2 text-sm md:text-base">
                    Kilométrage *
                  </label>
                  <input
                    type="number"
                    value={formData.kilometrage}
                    onChange={(e) => setFormData({ ...formData, kilometrage: e.target.value })}
                    required
                    min="0"
                    placeholder="ex: 50000"
                    className="w-full px-3 py-2 md:px-4 md:py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-red-600 text-sm md:text-base"
                  />
                </div>

                <div>
                  <label className="block text-gray-700 font-semibold mb-1 md:mb-2 text-sm md:text-base">
                    Carburant *
                  </label>
                  <select
                    value={formData.carburant}
                    onChange={(e) => setFormData({ ...formData, carburant: e.target.value })}
                    className="w-full px-3 py-2 md:px-4 md:py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-red-600 text-sm md:text-base"
                  >
                    <option value="essence">Essence</option>
                    <option value="diesel">Diesel</option>
                    <option value="electrique">Électrique</option>
                    <option value="hybride">Hybride</option>
                    <option value="gpl">GPL</option>
                  </select>
                </div>

                <div>
                  <label className="block text-gray-700 font-semibold mb-1 md:mb-2 text-sm md:text-base">
                    Boîte de vitesses *
                  </label>
                  <select
                    value={formData.boite}
                    onChange={(e) => setFormData({ ...formData, boite: e.target.value })}
                    className="w-full px-3 py-2 md:px-4 md:py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-red-600 text-sm md:text-base"
                  >
                    <option value="manuelle">Manuelle</option>
                    <option value="automatique">Automatique</option>
                  </select>
                </div>

                <div>
                  <label className="block text-gray-700 font-semibold mb-1 md:mb-2 text-sm md:text-base">
                    Prix (€) *
                  </label>
                  <input
                    type="number"
                    step="0.01"
                    value={formData.prix}
                    onChange={(e) => setFormData({ ...formData, prix: e.target.value })}
                    required
                    min="0"
                    placeholder="ex: 15000"
                    className="w-full px-3 py-2 md:px-4 md:py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-red-600 text-sm md:text-base"
                  />
                </div>

                <div>
                  <label className="block text-gray-700 font-semibold mb-1 md:mb-2 text-sm md:text-base">
                    Statut *
                  </label>
                  <select
                    value={formData.statut}
                    onChange={(e) => setFormData({ ...formData, statut: e.target.value as 'disponible' | 'reserve' | 'vendu' })}
                    className="w-full px-3 py-2 md:px-4 md:py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-red-600 text-sm md:text-base"
                  >
                    <option value="disponible">Disponible</option>
                    <option value="reserve">Réservé</option>
                    <option value="vendu">Vendu</option>
                  </select>
                </div>
              </div>

              <div className="mb-4 md:mb-6">
                <label className="block text-gray-700 font-semibold mb-1 md:mb-2 text-sm md:text-base">
                  Description
                </label>
                <textarea
                  value={formData.description}
                  onChange={(e) => setFormData({ ...formData, description: e.target.value })}
                  rows={4}
                  placeholder="Décrivez le véhicule..."
                  className="w-full px-3 py-2 md:px-4 md:py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-red-600 text-sm md:text-base"
                />
              </div>

              {/* Options */}
              <div className="mb-4 md:mb-6">
                <label className="block text-gray-700 font-semibold mb-1 md:mb-2 text-sm md:text-base">
                  Options et équipements
                </label>
                <div className="flex gap-2 mb-2">
                  <input
                    type="text"
                    value={newOption}
                    onChange={(e) => setNewOption(e.target.value)}
                    placeholder="ex: Climatisation automatique"
                    className="flex-1 px-3 py-2 md:px-4 md:py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-red-600 text-sm md:text-base"
                    onKeyPress={(e) => {
                      if (e.key === 'Enter') {
                        e.preventDefault();
                        addOption();
                      }
                    }}
                  />
                  <button
                    type="button"
                    onClick={addOption}
                    className="bg-gray-600 hover:bg-gray-700 text-white px-4 py-2 md:px-6 md:py-2 rounded-lg transition-colors text-sm md:text-base"
                  >
                    Ajouter
                  </button>
                </div>
                {formData.options.length > 0 && (
                  <div className="space-y-2">
                    {formData.options.map((option, index) => (
                      <div key={index} className="flex items-center justify-between bg-gray-50 px-3 py-2 md:px-4 md:py-2 rounded text-sm md:text-base">
                        <span>{option}</span>
                        <button
                          type="button"
                          onClick={() => removeOption(index)}
                          className="text-red-600 hover:text-red-700 text-sm"
                        >
                          Supprimer
                        </button>
                      </div>
                    ))}
                  </div>
                )}
              </div>

              {/* Images */}
              <div className="mb-4 md:mb-6">
                <label className="block text-gray-700 font-semibold mb-1 md:mb-2 text-sm md:text-base">
                  Photos
                </label>
                <input
                  type="file"
                  accept="image/*"
                  onChange={handleImageUpload}
                  disabled={uploading}
                  className="w-full px-3 py-2 md:px-4 md:py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-red-600 text-sm md:text-base"
                />
                {uploading && <p className="text-xs md:text-sm text-gray-500 mt-1">Téléchargement...</p>}
              </div>

              {/* Image Preview with ordering */}
              {formData.photos.length > 0 && (
                <div className="mb-4 md:mb-6">
                  <label className="block text-gray-700 font-semibold mb-1 md:mb-2 text-sm md:text-base">
                    Photos téléchargées (première = photo principale)
                  </label>
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-2 md:gap-4">
                    {formData.photos.map((url, index) => (
                      <div key={index} className="relative group">
                        {/* eslint-disable-next-line @next/next/no-img-element */}
                        <img
                          src={url}
                          alt={`Photo ${index + 1} de ${formData.marque || 'véhicule'} ${formData.modele || ''}`}
                          className="w-full h-32 object-cover rounded-lg"
                        />
                        <div className="absolute inset-0 bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition-opacity rounded-lg flex items-center justify-center gap-2">
                          {index > 0 && (
                            <button
                              type="button"
                              onClick={() => moveImage(index, 'up')}
                              className="bg-white text-gray-900 rounded-full w-8 h-8 flex items-center justify-center hover:bg-gray-200"
                            >
                              ←
                            </button>
                          )}
                          <button
                            type="button"
                            onClick={() => removeImage(index)}
                            className="bg-red-600 text-white rounded-full w-8 h-8 flex items-center justify-center hover:bg-red-700"
                          >
                            ×
                          </button>
                          {index < formData.photos.length - 1 && (
                            <button
                              type="button"
                              onClick={() => moveImage(index, 'down')}
                              className="bg-white text-gray-900 rounded-full w-8 h-8 flex items-center justify-center hover:bg-gray-200"
                            >
                              →
                            </button>
                          )}
                        </div>
                        {index === 0 && (
                          <div className="absolute top-2 left-2 bg-green-600 text-white text-xs px-2 py-1 rounded">
                            Principale
                          </div>
                        )}
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Active checkbox */}
              <div className="mb-4 md:mb-6">
                <label className="flex items-center">
                  <input
                    type="checkbox"
                    checked={formData.isActive}
                    onChange={(e) => setFormData({ ...formData, isActive: e.target.checked })}
                    className="mr-2"
                  />
                  <span className="text-gray-700 font-semibold text-sm md:text-base">Annonce active (visible sur le site)</span>
                </label>
              </div>

              <div className="flex flex-col sm:flex-row gap-3 md:gap-4">
                <button
                  type="submit"
                  className="bg-red-600 hover:bg-red-700 text-white px-6 py-2 md:px-8 md:py-3 rounded-lg font-semibold transition-colors text-sm md:text-base"
                >
                  {editingVehicle ? 'Mettre à jour' : 'Ajouter'}
                </button>
                {editingVehicle && formData.statut !== 'vendu' && (
                  <button
                    type="button"
                    onClick={() => setFormData({ ...formData, statut: 'vendu' })}
                    className="bg-orange-600 hover:bg-orange-700 text-white px-6 py-2 md:px-8 md:py-3 rounded-lg font-semibold transition-colors text-sm md:text-base"
                  >
                    Marquer comme vendu
                  </button>
                )}
                <button
                  type="button"
                  onClick={resetForm}
                  className="bg-gray-600 hover:bg-gray-700 text-white px-6 py-2 md:px-8 md:py-3 rounded-lg font-semibold transition-colors text-sm md:text-base"
                >
                  Annuler
                </button>
              </div>
            </form>
          </div>
        )}

        {/* Vehicles List */}
        <div className="bg-white rounded-lg shadow-lg overflow-hidden">
          {/* Desktop Table View */}
          <div className="hidden md:block overflow-x-auto">
            <table className="w-full">
              <thead className="bg-gray-900 text-white">
                <tr>
                  <th className="px-6 py-4 text-left">Photo</th>
                  <th className="px-6 py-4 text-left">Véhicule</th>
                  <th className="px-6 py-4 text-left">Année</th>
                  <th className="px-6 py-4 text-left">Km</th>
                  <th className="px-6 py-4 text-left">Prix</th>
                  <th className="px-6 py-4 text-left">Statut</th>
                  <th className="px-6 py-4 text-left">Actif</th>
                  <th className="px-6 py-4 text-left">Actions</th>
                </tr>
              </thead>
              <tbody>
                {vehicles.map((vehicle) => (
                  <tr key={vehicle.id} className="border-b hover:bg-gray-50">
                    <td className="px-6 py-4">
                      {vehicle.photos[0] && (
                        // eslint-disable-next-line @next/next/no-img-element
                        <img
                          src={vehicle.photos[0]}
                          alt={`Photo principale de ${vehicle.marque} ${vehicle.modele}`}
                          className="w-20 h-14 object-cover rounded"
                        />
                      )}
                    </td>
                    <td className="px-6 py-4">
                      <div className="font-semibold">{vehicle.marque} {vehicle.modele}</div>
                      <div className="text-sm text-gray-500">{vehicle.carburant} • {vehicle.boite}</div>
                    </td>
                    <td className="px-6 py-4">{vehicle.annee}</td>
                    <td className="px-6 py-4">{vehicle.kilometrage.toLocaleString()} km</td>
                    <td className="px-6 py-4 font-semibold">{vehicle.prix.toLocaleString()} €</td>
                    <td className="px-6 py-4">
                      <span
                        className={`px-3 py-1 rounded-full text-sm ${
                          vehicle.statut === 'disponible'
                            ? 'bg-green-100 text-green-800'
                            : vehicle.statut === 'reserve'
                            ? 'bg-orange-100 text-orange-800'
                            : 'bg-red-100 text-red-800'
                        }`}
                      >
                        {vehicle.statut === 'disponible' ? 'Disponible' : vehicle.statut === 'reserve' ? 'Réservé' : 'Vendu'}
                      </span>
                    </td>
                    <td className="px-6 py-4">
                      <span
                        className={`px-3 py-1 rounded-full text-sm ${
                          vehicle.isActive ? 'bg-blue-100 text-blue-800' : 'bg-gray-100 text-gray-800'
                        }`}
                      >
                        {vehicle.isActive ? 'Oui' : 'Non'}
                      </span>
                    </td>
                    <td className="px-6 py-4">
                      <div className="flex flex-wrap gap-2">
                        <button
                          onClick={() => handleEdit(vehicle)}
                          className="text-blue-600 hover:text-blue-700 text-sm"
                        >
                          Modifier
                        </button>
                        <button
                          onClick={() => handleDuplicate(vehicle)}
                          className="text-purple-600 hover:text-purple-700 text-sm"
                        >
                          Dupliquer
                        </button>
                        {vehicle.statut !== 'vendu' && (
                          <button
                            onClick={() => handleMarkAsSold(vehicle.id)}
                            className="text-orange-600 hover:text-orange-700 text-sm"
                          >
                            Marquer vendu
                          </button>
                        )}
                        <button
                          onClick={() => handleToggleActive(vehicle)}
                          className="text-gray-600 hover:text-gray-700 text-sm"
                        >
                          {vehicle.isActive ? 'Désactiver' : 'Activer'}
                        </button>
                        <button
                          onClick={() => handleDelete(vehicle.id)}
                          className="text-red-600 hover:text-red-700 text-sm"
                        >
                          Supprimer
                        </button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Mobile Card View */}
          <div className="block md:hidden">
            {vehicles.length > 0 ? (
              <div className="space-y-3 p-3">
                {vehicles.map((vehicle) => (
                  <div key={vehicle.id} className="bg-white rounded-xl p-3 shadow border border-gray-200">
                    <div className="flex gap-3 mb-3">
                      {vehicle.photos[0] && (
                        // eslint-disable-next-line @next/next/no-img-element
                        <img
                          src={vehicle.photos[0]}
                          alt={`Photo principale de ${vehicle.marque} ${vehicle.modele}`}
                          className="w-20 h-16 object-cover rounded flex-shrink-0"
                        />
                      )}
                      <div className="flex-1 min-w-0">
                        <div className="font-semibold text-sm leading-tight mb-1">
                          {vehicle.marque} {vehicle.modele}
                        </div>
                        <div className="text-xs text-gray-500 mb-1">
                          {vehicle.annee} • {vehicle.kilometrage.toLocaleString()} km
                        </div>
                        <div className="text-sm font-bold text-red-600">
                          {vehicle.prix.toLocaleString()} €
                        </div>
                      </div>
                    </div>

                    <div className="flex gap-2 mb-3 text-xs">
                      <span
                        className={`px-2 py-1 rounded-full ${
                          vehicle.statut === 'disponible'
                            ? 'bg-green-100 text-green-800'
                            : vehicle.statut === 'reserve'
                            ? 'bg-orange-100 text-orange-800'
                            : 'bg-red-100 text-red-800'
                        }`}
                      >
                        {vehicle.statut === 'disponible' ? 'Disponible' : vehicle.statut === 'reserve' ? 'Réservé' : 'Vendu'}
                      </span>
                      <span
                        className={`px-2 py-1 rounded-full ${
                          vehicle.isActive ? 'bg-blue-100 text-blue-800' : 'bg-gray-100 text-gray-800'
                        }`}
                      >
                        {vehicle.isActive ? 'Actif' : 'Inactif'}
                      </span>
                    </div>

                    <div className="flex flex-wrap gap-2 text-xs">
                      <button
                        onClick={() => handleEdit(vehicle)}
                        className="text-blue-600 hover:text-blue-700 font-medium"
                      >
                        Modifier
                      </button>
                      <button
                        onClick={() => handleDuplicate(vehicle)}
                        className="text-purple-600 hover:text-purple-700 font-medium"
                      >
                        Dupliquer
                      </button>
                      {vehicle.statut !== 'vendu' && (
                        <button
                          onClick={() => handleMarkAsSold(vehicle.id)}
                          className="text-orange-600 hover:text-orange-700 font-medium"
                        >
                          Vendu
                        </button>
                      )}
                      <button
                        onClick={() => handleToggleActive(vehicle)}
                        className="text-gray-600 hover:text-gray-700 font-medium"
                      >
                        {vehicle.isActive ? 'Désactiver' : 'Activer'}
                      </button>
                      <button
                        onClick={() => handleDelete(vehicle.id)}
                        className="text-red-600 hover:text-red-700 font-medium"
                      >
                        Supprimer
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            ) : null}
          </div>

          {vehicles.length === 0 && (
            <div className="text-center py-12 text-gray-500">
              Aucun véhicule dans la base de données
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
