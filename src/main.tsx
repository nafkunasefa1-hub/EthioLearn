import {StrictMode} from 'react';
import {createRoot} from 'react-dom/client';
import App from './App.tsx';
import './index.css';
import 'katex/dist/katex.min.css';

// Handle transient network hiccups in iframe environments gracefully
window.addEventListener('unhandledrejection', (event) => {
  const msg = event?.reason?.message || '';
  if (msg.includes('Failed to fetch') || msg.includes('NetworkError') || msg.includes('Load failed')) {
    console.warn('Recovered from transient network event:', msg);
    event.preventDefault();
  }
});

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>,
);
