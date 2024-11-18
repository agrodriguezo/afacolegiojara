'use client';
import { useState, useEffect } from 'react';
import Cookies from 'js-cookie';


const CookieBanner = () => {
    const [visible, setVisible] = useState(false);

  useEffect(() => {
    const consent = Cookies.get('cookieConsent');
    console.log('consent ', consent)
    if (!consent) {
        setVisible(true);
    }
  }, []);

  const handleAccept = () => {
    Cookies.set('cookieConsent', 'accepted', { expires: 365 });
    setVisible(false); // Ocultamos el banner después de aceptar
  };

  const handleDecline = () => {
    Cookies.set('cookieConsent', 'declined', { expires: 365 });
    setVisible(false); // Ocultamos el banner después de rechazar
  };

  if (!visible) return null;

  return (
    <div style={{ background: '#373F4E', color: '#e1af40', padding: '25px', position: 'fixed', bottom: 0, width: '100%', textAlign: 'center' }}>
      Usamos cookies para mejorar tu experiencia. Consulta nuestra{' '}
      <a href="/politica-de-cookies" style={{ color: '#FFD701', textDecoration: 'underline' }}>
        Política de Cookies
      </a>.
      <div style={{ marginTop: '10px' }}>
        <button onClick={handleAccept} style={{ marginRight: '10px', background: '#e1af40', color: '#373F4E', border: 'none', padding: '8px 12px', cursor: 'pointer' }}>
          Aceptar todas
        </button>
        <button onClick={handleDecline} style={{ background: '#373F4E', color: '#e1af40', border: '1px solid #e1af40', padding: '8px 12px', cursor: 'pointer' }}>
          Rechazar
        </button>
      </div>
    </div>
  );
};

export default CookieBanner;
