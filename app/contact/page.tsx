'use client';

import { useState } from 'react';
import { siteConfig } from '@/lib/site.config';

// Metadata is exported from a separate file since this is a client component
export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
    privacyConsent: false,
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setFormData({ name: '', email: '', phone: '', message: '', privacyConsent: false });
    }, 3000);
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
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
          <h1 className="text-5xl font-bold mb-4">
            Contact Garage Le Loroux-Bottereau
          </h1>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Devis gratuit, prise de rendez-vous, conseils - Nous répondons à
            toutes vos questions
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
                      href={`tel:${siteConfig.contact.phone}`}
                      className="text-red-600 hover:text-red-700 text-lg"
                    >
                      {siteConfig.contact.phoneFormatted}
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
                      {siteConfig.contact.address.street}
                      <br />
                      {siteConfig.contact.address.zip}{' '}
                      {siteConfig.contact.address.city}
                      <br />
                      {siteConfig.contact.address.country}
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
                      <p>
                        <strong>Lundi - Vendredi:</strong>{' '}
                        {siteConfig.openingHoursSummary.weekdays}
                      </p>
                 
                      <p>
                        <strong>Samedi,Dimanche:</strong>{' '}
                        {siteConfig.openingHoursSummary.sunday}
                      </p>
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
                      href={`mailto:${siteConfig.contact.email}`}
                      className="text-red-600 hover:text-red-700 text-lg"
                    >
                      {siteConfig.contact.email}
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* Map */}
            <div className="mt-8 bg-white rounded-lg shadow overflow-hidden h-80">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m23!1m12!1m3!1d643.2726944631607!2d-1.3415840004696002!3d47.24289483050044!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!4m8!3e6!4m0!4m5!1s0x4805e3d2f8bda74f%3A0x275e86a91cb1510e!2s17%20Rte%20de%20Barbechat%2C%2044430%20Le%20Loroux-Bottereau!3m2!1d47.242975!2d-1.3412874!5e0!3m2!1sfr!2sfr!4v1766221109110!5m2!1sfr!2sfr"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </div>

          {/* Contact Form */}
          <div>
            <h2 className="text-3xl font-bold text-gray-900 mb-8">
              Envoyez-nous un message
            </h2>

            <form
              onSubmit={handleSubmit}
              className="bg-white p-8 rounded-lg shadow"
            >
              {submitted && (
                <div className="mb-6 bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded">
                  Merci ! Votre message a été envoyé avec succès.
                </div>
              )}

              <div className="mb-6">
                <label
                  htmlFor="name"
                  className="block text-gray-700 font-semibold mb-2"
                >
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
                <label
                  htmlFor="email"
                  className="block text-gray-700 font-semibold mb-2"
                >
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
                <label
                  htmlFor="phone"
                  className="block text-gray-700 font-semibold mb-2"
                >
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
                <label
                  htmlFor="message"
                  className="block text-gray-700 font-semibold mb-2"
                >
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
                />
              </div>

              <div className="mb-6">
                <label className="flex items-start">
                  <input
                    type="checkbox"
                    name="privacyConsent"
                    checked={formData.privacyConsent}
                    onChange={(e) =>
                      setFormData({ ...formData, privacyConsent: e.target.checked })
                    }
                    required
                    className="mt-1 mr-3 h-4 w-4 text-red-600 border-gray-300 rounded focus:ring-red-600"
                  />
                  <span className="text-sm text-gray-700">
                    J'accepte que mes données soient traitées conformément à la{' '}
                    <a
                      href="/politique-confidentialite"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-red-600 hover:text-red-700 underline"
                    >
                      politique de confidentialité
                    </a>{' '}
                    de GL Motors. *
                  </span>
                </label>
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
