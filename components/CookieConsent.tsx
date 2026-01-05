'use client';

import { useState, useEffect } from 'react';

export default function CookieConsent() {
  const [showBanner, setShowBanner] = useState(false);
  const [showSettings, setShowSettings] = useState(false);
  const [preferences, setPreferences] = useState({
    essential: true, // Always true, cannot be disabled
    analytics: false,
  });

  useEffect(() => {
    // Check if user has already made a choice
    const cookieConsent = localStorage.getItem('cookieConsent');
    if (!cookieConsent) {
      setShowBanner(true);
    } else {
      const savedPreferences = JSON.parse(cookieConsent);
      setPreferences(savedPreferences);
    }
  }, []);

  const acceptAll = () => {
    const newPreferences = {
      essential: true,
      analytics: true,
    };
    localStorage.setItem('cookieConsent', JSON.stringify(newPreferences));
    localStorage.setItem('cookieConsentDate', new Date().toISOString());
    setPreferences(newPreferences);
    setShowBanner(false);
    setShowSettings(false);
    
    // Here you would initialize analytics cookies if accepted
    if (newPreferences.analytics) {
      initializeAnalytics();
    }
  };

  const rejectAll = () => {
    const newPreferences = {
      essential: true,
      analytics: false,
    };
    localStorage.setItem('cookieConsent', JSON.stringify(newPreferences));
    localStorage.setItem('cookieConsentDate', new Date().toISOString());
    setPreferences(newPreferences);
    setShowBanner(false);
    setShowSettings(false);
  };

  const savePreferences = () => {
    localStorage.setItem('cookieConsent', JSON.stringify(preferences));
    localStorage.setItem('cookieConsentDate', new Date().toISOString());
    setShowBanner(false);
    setShowSettings(false);
    
    // Initialize or remove analytics based on preferences
    if (preferences.analytics) {
      initializeAnalytics();
    } else {
      removeAnalytics();
    }
  };

  const initializeAnalytics = () => {
    // TODO: Implement analytics initialization
    // Example: Google Analytics, Matomo, etc.
    // See GDPR_COMPLIANCE.md for integration instructions
    console.log('Analytics cookies initialized');
  };

  const removeAnalytics = () => {
    // TODO: Implement analytics removal
    // Remove tracking scripts and clear analytics cookies
    console.log('Analytics cookies removed');
  };

  const openSettings = () => {
    setShowSettings(true);
  };

  // Function to reopen banner from footer link
  useEffect(() => {
    const handleCookieSettings = () => {
      setShowBanner(true);
      setShowSettings(true);
    };

    window.addEventListener('openCookieSettings', handleCookieSettings);
    return () => {
      window.removeEventListener('openCookieSettings', handleCookieSettings);
    };
  }, []);

  if (!showBanner) {
    return null;
  }

  return (
    <div className="fixed inset-0 z-50 flex items-end justify-center p-4 sm:items-center sm:p-0">
      {/* Overlay */}
      <div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" />

      {/* Modal */}
      <div className="relative bg-white rounded-lg shadow-xl max-w-2xl w-full mx-4 sm:mx-auto">
        <div className="p-6 sm:p-8">
          {!showSettings ? (
            // Main banner
            <div>
              <div className="flex items-start mb-6">
                <div className="text-4xl mr-4">🍪</div>
                <div>
                  <h2 className="text-2xl font-bold text-gray-900 mb-2">
                    Nous utilisons des cookies
                  </h2>
                  <p className="text-gray-600">
                    Ce site utilise des cookies pour améliorer votre expérience de navigation. 
                    Les cookies essentiels sont nécessaires au bon fonctionnement du site. 
                    Les autres cookies nécessitent votre consentement.
                  </p>
                </div>
              </div>

              <div className="bg-gray-50 p-4 rounded-lg mb-6">
                <h3 className="font-semibold text-gray-900 mb-2">Cookies utilisés :</h3>
                <ul className="space-y-2 text-sm text-gray-700">
                  <li className="flex items-start">
                    <span className="text-green-600 mr-2">✓</span>
                    <span><strong>Cookies essentiels :</strong> nécessaires au fonctionnement du site (préférences de cookies, sessions)</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-gray-400 mr-2">○</span>
                    <span><strong>Cookies analytiques :</strong> mesure d&apos;audience et amélioration du site</span>
                  </li>
                </ul>
              </div>

              <p className="text-sm text-gray-600 mb-6">
                En cliquant sur &quot;Tout accepter&quot;, vous acceptez l&apos;utilisation de tous les cookies. 
                En cliquant sur &quot;Tout refuser&quot;, seuls les cookies essentiels seront utilisés. 
                Pour en savoir plus, consultez notre{' '}
                <a href="/politique-confidentialite" className="text-red-600 hover:text-red-700 underline">
                  politique de confidentialité
                </a>.
              </p>

              <div className="flex flex-col sm:flex-row gap-3">
                <button
                  onClick={acceptAll}
                  className="flex-1 bg-red-600 hover:bg-red-700 text-white font-semibold px-6 py-3 rounded-lg transition-colors"
                >
                  Tout accepter
                </button>
                <button
                  onClick={rejectAll}
                  className="flex-1 bg-gray-200 hover:bg-gray-300 text-gray-900 font-semibold px-6 py-3 rounded-lg transition-colors"
                >
                  Tout refuser
                </button>
                <button
                  onClick={openSettings}
                  className="flex-1 bg-white hover:bg-gray-50 text-gray-900 font-semibold px-6 py-3 rounded-lg border-2 border-gray-300 transition-colors"
                >
                  Paramétrer
                </button>
              </div>
            </div>
          ) : (
            // Settings panel
            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-6">
                Paramètres des cookies
              </h2>

              <div className="space-y-4 mb-6">
                {/* Essential cookies */}
                <div className="bg-gray-50 p-4 rounded-lg">
                  <div className="flex items-center justify-between mb-2">
                    <h3 className="font-semibold text-gray-900">Cookies essentiels</h3>
                    <div className="text-green-600 font-semibold">Toujours actifs</div>
                  </div>
                  <p className="text-sm text-gray-600">
                    Ces cookies sont nécessaires au fonctionnement du site et ne peuvent pas être désactivés. 
                    Ils incluent vos préférences de cookies et les sessions d&apos;authentification.
                  </p>
                </div>

                {/* Analytics cookies */}
                <div className="bg-gray-50 p-4 rounded-lg">
                  <div className="flex items-center justify-between mb-2">
                    <h3 className="font-semibold text-gray-900">Cookies analytiques</h3>
                    <label className="relative inline-flex items-center cursor-pointer">
                      <input
                        type="checkbox"
                        checked={preferences.analytics}
                        onChange={(e) =>
                          setPreferences({ ...preferences, analytics: e.target.checked })
                        }
                        className="sr-only peer"
                      />
                      <div className="w-11 h-6 bg-gray-300 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-red-300 rounded-full peer peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-red-600"></div>
                    </label>
                  </div>
                  <p className="text-sm text-gray-600">
                    Ces cookies nous aident à comprendre comment les visiteurs utilisent notre site 
                    afin que nous puissions améliorer nos services. Les données sont anonymisées.
                  </p>
                </div>
              </div>

              <p className="text-sm text-gray-600 mb-6">
                Pour en savoir plus sur notre utilisation des cookies, consultez notre{' '}
                <a href="/politique-confidentialite" className="text-red-600 hover:text-red-700 underline">
                  politique de confidentialité
                </a>.
              </p>

              <div className="flex flex-col sm:flex-row gap-3">
                <button
                  onClick={savePreferences}
                  className="flex-1 bg-red-600 hover:bg-red-700 text-white font-semibold px-6 py-3 rounded-lg transition-colors"
                >
                  Enregistrer mes préférences
                </button>
                <button
                  onClick={acceptAll}
                  className="flex-1 bg-gray-200 hover:bg-gray-300 text-gray-900 font-semibold px-6 py-3 rounded-lg transition-colors"
                >
                  Tout accepter
                </button>
              </div>

              <button
                onClick={() => setShowSettings(false)}
                className="w-full mt-3 text-gray-600 hover:text-gray-900 text-sm"
              >
                ← Retour
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
