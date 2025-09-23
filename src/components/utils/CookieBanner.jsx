import { useState, useEffect } from "react";

const COOKIE_NAME = "userConsent";

const defaultCategories = {
  necessary: true,
  analytics: false,
  marketing: false,
};

// Global flag outside React
let BANNER_PERMANENTLY_HIDDEN = false;

export default function CookieBanner() {
  const [show, setShow] = useState(false);
  const [consent, setConsent] = useState(defaultCategories);
  const [isInitialized, setIsInitialized] = useState(false);
  const [showDetails, setShowDetails] = useState(false);

  // Check global flag first
  useEffect(() => {
    if (BANNER_PERMANENTLY_HIDDEN) {
      setShow(false);
      setIsInitialized(true);
      return;
    }
    
    if (isInitialized) return;
    
    const timer = setTimeout(() => {
      try {
        const saved = localStorage.getItem(COOKIE_NAME);
        
        if (saved && saved !== "null" && saved !== "undefined") {
          const parsedConsent = JSON.parse(saved);
          BANNER_PERMANENTLY_HIDDEN = true;
          setConsent(parsedConsent);
          setShow(false);
        } else {
          setShow(true);
          BANNER_PERMANENTLY_HIDDEN = false;
        }
      } catch (error) {
        console.error("localStorage error:", error);
        setShow(true);
        BANNER_PERMANENTLY_HIDDEN = false;
      }
      
      setIsInitialized(true);
    }, 50);

    return () => clearTimeout(timer);
  }, []);

  const saveConsent = (newConsent) => {
    BANNER_PERMANENTLY_HIDDEN = true;
    setShow(false);
    setConsent(newConsent);
    
    try {
      localStorage.setItem(COOKIE_NAME, JSON.stringify(newConsent));
    } catch (error) {
      console.error("Save failed:", error);
    }
    
    window.dispatchEvent(
      new CustomEvent("cc:onConsent", { detail: { cookie: newConsent } })
    );
  };

  const acceptAll = () => {
    saveConsent({ necessary: true, analytics: true, marketing: true });
  };
  
  const rejectAll = () => {
    saveConsent({ necessary: true, analytics: false, marketing: false });
  };
  
  const savePreferences = () => {
    saveConsent(consent);
  };

  if (BANNER_PERMANENTLY_HIDDEN || !isInitialized || !show) {
    return null;
  }

  return (
    <>
      {/* Backdrop */}
      <div className="fixed inset-0  bg-opacity-40 z-40" />
      
      {/* Banner */}
      <div className="fixed bottom-0 left-0 right-0 z-50">
        <div className="bg-white shadow-xl border-t border-gray-200">
          <div className="max-w-5xl mx-auto p-6">
            
            {/* Header */}
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-lg font-semibold text-gray-900">
                Cookie-Einstellungen
              </h3>
              
              <button
                onClick={() => setShowDetails(!showDetails)}
                className="!text-blue-600 !hover:text-blue-700 text-sm font-medium transition-colors !outline-none"
              >
                {showDetails ? 'Weniger anzeigen' : 'Details anzeigen'}
              </button>
            </div>

            {/* Description */}
            <div className="mb-6">
              <p className="text-gray-700 text-sm leading-relaxed">
                Wir verwenden Cookies, um Ihnen die bestmögliche Erfahrung auf unserer Website zu bieten. 
                Technisch notwendige Cookies sind immer aktiviert. Sie können wählen, welche optionalen 
                Cookies Sie akzeptieren möchten.
              </p>
            </div>

            {/* Cookie Categories - Expandable */}
            {showDetails && (
              <div className="mb-6 space-y-4 bg-gray-50 rounded-lg p-4">
                
                {/* Necessary Cookies */}
                <div className="flex items-start gap-3">
                  <input
                    type="checkbox"
                    checked={true}
                    disabled={true}
                    className="mt-1 w-4 h-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500 opacity-50"
                  />
                  <div className="flex-1">
                    <label className="block text-sm font-medium text-gray-900">
                      Technisch notwendige Cookies
                    </label>
                    <p className="text-xs text-gray-600 mt-1">
                      Erforderlich für die Grundfunktionen der Website. Können nicht deaktiviert werden.
                    </p>
                  </div>
                </div>

                {/* Analytics Cookies */}
                <div className="flex items-start gap-3">
                  <input
                    type="checkbox"
                    checked={consent.analytics}
                    onChange={(e) =>
                      setConsent({ ...consent, analytics: e.target.checked })
                    }
                    className="mt-1 w-4 h-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500 focus:ring-2"
                  />
                  <div className="flex-1">
                    <label className="block text-sm font-medium text-gray-900">
                      Statistik & Analytics
                    </label>
                    <p className="text-xs text-gray-600 mt-1">
                      Helfen uns zu verstehen, wie Besucher mit der Website interagieren (z.B. Google Analytics).
                    </p>
                  </div>
                </div>

                {/* Marketing Cookies */}
                <div className="flex items-start gap-3">
                  <input
                    type="checkbox"
                    checked={consent.marketing}
                    onChange={(e) =>
                      setConsent({ ...consent, marketing: e.target.checked })
                    }
                    className="mt-1 w-4 h-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500 focus:ring-2"
                  />
                  <div className="flex-1">
                    <label className="block text-sm font-medium text-gray-900">
                      Marketing & Werbung
                    </label>
                    <p className="text-xs text-gray-600 mt-1">
                      Ermöglichen personalisierte Werbung und Tracking für Marketingzwecke (z.B. Google Ads).
                    </p>
                  </div>
                </div>
              </div>
            )}

            {/* Action Buttons - Equal Prominence */}
            <div className="flex flex-col sm:flex-row gap-3 items-stretch">
              
              {/* Reject All */}
              <button
                onClick={rejectAll}
                className="flex-1 px-6 py-3 !bg-gray-100 hover:bg-gray-200 text-gray-900 font-medium rounded-lg transition-colors duration-200 border !border-gray-300 !hover:border-gray-400 text-center"
              >
                Alle ablehnen
              </button>

              {/* Save Selection */}
              <button
                onClick={savePreferences}
                className="flex-1 px-6 py-3 !bg-white !hover:bg-gray-50 text-gray-900 font-medium rounded-lg transition-colors duration-200 border !border-gray-300 !hover:border-gray-400 text-center"
              >
                Auswahl speichern
              </button>

              {/* Accept All */}
              <button
                onClick={acceptAll}
                className="flex-1 px-6 py-3 !bg-blue-600 !hover:bg-blue-700 text-black font-medium rounded-lg transition-colors duration-200 shadow-sm hover:shadow-md text-center"
              >
                Alle akzeptieren
              </button>
            </div>

            {/* Footer Notice */}
            <div className="mt-4 pt-4 border-t border-gray-100">
              <p className="text-xs text-gray-500 text-center">
                Sie können Ihre Einstellungen jederzeit ändern.
              </p>
            </div>

          </div>
        </div>
      </div>
    </>
  );
}