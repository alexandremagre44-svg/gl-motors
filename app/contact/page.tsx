'use client';

import { useState } from 'react';

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // In production, this would send to an API
    console.log('Form submitted:', formData);
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setFormData({ name: '', email: '', phone: '', message: '' });
    }, 3000);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-gray-900 text-white py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-5xl font-bold mb-4">Contactez-nous</h1>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Nous sommes là pour répondre à toutes vos questions
          </p>
        </div>
      </div>

      <div className="container mx-auto px-4 py-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div>
            <h2 className="text-3xl font-bold text-gray-900 mb-8">
              Informations de contact
            </h2>

            <div className="space-y-6">
              {/* Phone */}
              <div className="bg-white p-6 rounded-lg shadow">
                <div className="flex items-start">
                  <div className="text-3xl mr-4">📞</div>
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">
                      Téléphone
                    </h3>
                    <a
                      href="tel:+33123456789"
                      className="text-red-600 hover:text-red-700 text-lg"
                    >
                      +33 1 23 45 67 89
                    </a>
                  </div>
                </div>
              </div>

              {/* Address */}
              <div className="bg-white p-6 rounded-lg shadow">
                <div className="flex items-start">
                  <div className="text-3xl mr-4">📍</div>
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">
                      Adresse
                    </h3>
                    <p className="text-gray-600">
                      123 Rue de l'Automobile<br />
                      75001 Paris<br />
                      France
                    </p>
                  </div>
                </div>
              </div>

              {/* Hours */}
              <div className="bg-white p-6 rounded-lg shadow">
                <div className="flex items-start">
                  <div className="text-3xl mr-4">🕐</div>
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">
                      Horaires d'ouverture
                    </h3>
                    <div className="text-gray-600 space-y-1">
                      <p><strong>Lundi - Vendredi:</strong> 8h00 - 18h00</p>
                      <p><strong>Samedi:</strong> 9h00 - 12h00</p>
                      <p><strong>Dimanche:</strong> Fermé</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Email */}
              <div className="bg-white p-6 rounded-lg shadow">
                <div className="flex items-start">
                  <div className="text-3xl mr-4">✉️</div>
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">
                      Email
                    </h3>
                    <a
                      href="mailto:contact@glmotors.fr"
                      className="text-red-600 hover:text-red-700 text-lg"
                    >
                      contact@glmotors.fr
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* Map */}
            <div className="mt-8 bg-white rounded-lg shadow overflow-hidden h-80">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2624.9916256937604!2d2.3412!3d48.8606!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47e66e1f06e2b005%3A0x40b82c3688c9460!2sParis%2C%20France!5e0!3m2!1sen!2sus!4v1234567890"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
          </div>

          {/* Contact Form */}
          <div>
            <h2 className="text-3xl font-bold text-gray-900 mb-8">
              Envoyez-nous un message
            </h2>

            <form onSubmit={handleSubmit} className="bg-white p-8 rounded-lg shadow">
              {submitted && (
                <div className="mb-6 bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded">
                  Merci ! Votre message a été envoyé avec succès.
                </div>
              )}

              <div className="mb-6">
                <label htmlFor="name" className="block text-gray-700 font-semibold mb-2">
                  Nom complet *
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-600"
                />
              </div>

              <div className="mb-6">
                <label htmlFor="email" className="block text-gray-700 font-semibold mb-2">
                  Email *
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-600"
                />
              </div>

              <div className="mb-6">
                <label htmlFor="phone" className="block text-gray-700 font-semibold mb-2">
                  Téléphone
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-600"
                />
              </div>

              <div className="mb-6">
                <label htmlFor="message" className="block text-gray-700 font-semibold mb-2">
                  Message *
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={6}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-600"
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full bg-red-600 hover:bg-red-700 text-white font-semibold px-8 py-4 rounded-lg transition-colors"
              >
                Envoyer le message
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
