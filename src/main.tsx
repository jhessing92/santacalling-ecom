import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import App from './App.tsx';
import './index.css';

// Load ElevenLabs widget script
const script = document.createElement('script');
script.src = 'https://elevenlabs.io/convai-widget/index.js';
script.async = true;
document.body.appendChild(script);

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>
);
