// app/components/CookieConsent/CookieConsent.jsx
"use client";

import { useState, useEffect } from "react";
import { FaXmark } from "react-icons/fa6";
import Script from "next/script";

const CookieConsent = () => {
  const [isConsentGiven, setIsConsentGiven] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [adsLoaded, setAdsLoaded] = useState(false);

  useEffect(() => {
    const consent = JSON.parse(localStorage.getItem("cookieConsent"));
    if (consent) {
      setIsConsentGiven(consent.accepted);
    }
  }, []);

  const handleAccept = () => {
    localStorage.setItem(
      "cookieConsent",
      JSON.stringify({ accepted: true, analytics: true, marketing: true })
    );
    setIsConsentGiven(true);
    setIsModalOpen(false);

    // Notifier Google pour RGPD
    if (window.gtag) {
      window.gtag("consent", "update", {
        ad_storage: "granted",
        analytics_storage: "granted",
      });
    }
    setAdsLoaded(true);
  };

  const handleDecline = () => {
    localStorage.setItem(
      "cookieConsent",
      JSON.stringify({ accepted: true, analytics: false, marketing: false })
    );
    setIsConsentGiven(true);
    setIsModalOpen(false);

    if (window.gtag) {
      window.gtag("consent", "update", {
        ad_storage: "denied",
        analytics_storage: "denied",
      });
    }
  };

  if (isConsentGiven && adsLoaded) return null;

  return (
    <>
      {!isConsentGiven && !isModalOpen && (
        <div className="cookie-banner">
          <div className="cookie-banner-content">
            <h2>Nous utilisons des cookies</h2>
            <p>
              Ce site Web utilise des cookies et d'autres technologies de suivi
              pour améliorer votre expérience et vous proposer des contenus
              personnalisés.
            </p>
            <div className="button-container">
              <button className="button-accept" onClick={handleAccept}>
                J'accepte
              </button>
              <button className="button-decline" onClick={handleDecline}>
                Je refuse
              </button>
            </div>
            <button
              className="button-preferences"
              onClick={() => setIsModalOpen(true)}
            >
              Changer mes préférences
            </button>
          </div>
        </div>
      )}

      {isModalOpen && (
        <div className="modal">
          <h2>Paramètres des cookies</h2>
          <p>Choisissez les types de cookies que vous souhaitez accepter :</p>
          <button onClick={handleAccept}>Accepter tous les cookies</button>
          <button onClick={handleDecline}>Refuser tous les cookies</button>
          <div onClick={() => setIsModalOpen(false)} className="quite">
            <FaXmark />
          </div>
        </div>
      )}

      {/* Charger AdSense seulement après consentement */}
      {isConsentGiven && (
        <Script
          strategy="afterInteractive"
          src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-4426518773218222"
          crossOrigin="anonymous"
        />
      )}
    </>
  );
};

export default CookieConsent;
