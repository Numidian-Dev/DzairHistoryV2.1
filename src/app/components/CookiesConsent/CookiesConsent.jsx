'use client';

import Script from 'next/script';
import { useEffect } from 'react';

export default function SilktideManager() {
  useEffect(() => {
    // Fonction d'initialisation de Silktide
    function initializeSilktide() {
      if (window.silktideInitialized) {
        console.log('Silktide déjà initialisé');
        return;
      }
      
      if (typeof silktideCookieBannerManager === 'undefined') {
        console.error('Silktide manager non défini');
        return;
      }
      
      if (typeof silktideCookieBannerManager.updateCookieBannerConfig !== 'function') {
        console.error('updateCookieBannerConfig non disponible');
        return;
      }
      
      try {
        const config = {
          background: {
            showBackground: true
          },
          cookieIcon: {
            position: "bottomLeft"
          },
          cookieTypes: [
            {
              id: "necessary",
              name: "Nécessaires",
              description: "Cookies essentiels au fonctionnement du site.",
              required: true,
              onAccept: function() {
                console.log('Cookies nécessaires acceptés');
              }
            },
            {
              id: "analytics",
              name: "Analytics",
              description: "Ces cookies nous aident à améliorer le site.",
              required: false,
              onAccept: function() {
                console.log('Analytics acceptés');
                if (typeof gtag === 'function') {
                  gtag('consent', 'update', {
                    'analytics_storage': 'granted'
                  });
                }
              },
              onReject: function() {
                console.log('Analytics refusés');
                if (typeof gtag === 'function') {
                  gtag('consent', 'update', {
                    'analytics_storage': 'denied'
                  });
                }
              }
            },
            {
              id: "advertising",
              name: "Publicité",
              description: "Cookies publicitaires et de personnalisation.",
              required: false,
              onAccept: function() {
                console.log('Publicité acceptée');
                if (typeof gtag === 'function') {
                  gtag('consent', 'update', {
                    'ad_storage': 'granted'
                  });
                }
              },
              onReject: function() {
                console.log('Publicité refusée');
                if (typeof gtag === 'function') {
                  gtag('consent', 'update', {
                    'ad_storage': 'denied'
                  });
                }
              }
            }
          ],
          text: {
            banner: {
              description: "<p>Nous utilisons des cookies pour améliorer votre expérience. <a href='https://dzairhistory.com/legal/politique-des-cookies' target='_blank'>Politique des cookies</a></p>",
              acceptAllButtonText: "Tout accepter",
              acceptAllButtonAccessibleLabel: "Accepter tous les cookies",
              rejectNonEssentialButtonText: "Tout refuser",
              rejectNonEssentialButtonAccessibleLabel: "Refuser les cookies non essentiels",
              preferencesButtonText: "Préférences",
              preferencesButtonAccessibleLabel: "Ouvrir les préférences"
            }
          },
          position: {
            banner: "bottomLeft"
          }
        };
        
        silktideCookieBannerManager.updateCookieBannerConfig(config);
        window.silktideInitialized = true;
        console.log('Silktide configuré avec succès');
        
      } catch (error) {
        console.error('Erreur de configuration Silktide:', error);
      }
    }

    // Vérifier si Silktide est déjà chargé
    if (typeof silktideCookieBannerManager !== 'undefined') {
      initializeSilktide();
    } else {
      // Écouter l'événement de chargement
      window.addEventListener('silktideLoaded', initializeSilktide);
    }

    return () => {
      window.removeEventListener('silktideLoaded', initializeSilktide);
    };
  }, []);

  return (
    <>
      <Script
        src="/silktide-consent-manager.js"
        strategy="afterInteractive"
        id="silktide-main-script"
        onLoad={() => {
          console.log('Script Silktide chargé');
          // Déclencher un événement personnalisé
          window.dispatchEvent(new Event('silktideLoaded'));
        }}
        onError={(e) => {
          console.error('Erreur de chargement Silktide:', e);
        }}
      />
    </>
  );
}