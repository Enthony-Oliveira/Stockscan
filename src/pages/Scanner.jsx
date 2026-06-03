import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Html5QrcodeScanner } from 'html5-qrcode';

export default function Scanner() {
  const navigate = useNavigate();
  const [manualCode, setManualCode] = useState('');

  useEffect(() => {
    const scanner = new Html5QrcodeScanner(
      "reader",
      { fps: 10, qrbox: { width: 250, height: 250 } },
      false
    );

    scanner.render(
      (decodedText) => {
        scanner.clear();
        navigate(`/details/${decodedText}`);
      },
      (error) => {
      }
    );

    return () => {
      scanner.clear().catch(error => console.error("Failed to clear html5QrcodeScanner. ", error));
    };
  }, [navigate]);

  const handleManualSearch = (e) => {
    e.preventDefault();
    if (manualCode) navigate(`/details/${manualCode}`);
  };

  return (
    <div style={{ padding: '24px', backgroundColor: '#F7F7F7', minHeight: '100vh', fontFamily: 'sans-serif' }}>
      <header style={{ backgroundColor: '#0A8754', padding: '16px', borderRadius: '8px', color: 'white', textAlign: 'center', marginBottom: '20px' }}>
        <h2 style={{ margin: 0 }}>Escanear Produto</h2>
      </header>

      {/* AQUI É ONDE A CÂMERA VAI APARECER */}
      <div id="reader" style={{ width: '100%', borderRadius: '8px', overflow: 'hidden', border: 'none' }}></div>

      <div style={{ marginTop: '40px' }}>
        <p style={{ textAlign: 'center', fontWeight: 'bold', color: '#333' }}>Ou insira o código manualmente:</p>
        
        <form onSubmit={handleManualSearch} style={{ display: 'flex', gap: '10px', marginTop: '10px' }}>
          <input 
            type="text" 
            value={manualCode}
            onChange={(e) => setManualCode(e.target.value)}
            placeholder="Ex: 789123..." 
            style={{ flex: 1, padding: '15px', borderRadius: '8px', border: '1px solid #ccc', fontSize: '16px' }} 
          />
          <button type="submit" style={{ backgroundColor: '#0A8754', color: 'white', border: 'none', padding: '0 20px', borderRadius: '8px', fontWeight: 'bold' }}>
            Buscar
          </button>
        </form>
      </div>
    </div>
  );
}