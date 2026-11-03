import { installUniversalOfflineInterceptor } from './services/universalOfflineInterceptor';
try {
  installUniversalOfflineInterceptor();
} catch (e) {
  console.warn('Interceptor activation note:', e);
}

import {StrictMode} from 'react';
import {createRoot} from 'react-dom/client';
import App from './App.tsx';
import { ErrorBoundary } from './components/ErrorBoundary';
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

const rootElement = document.getElementById('root');
if (rootElement) {
  createRoot(rootElement).render(
    <StrictMode>
      <ErrorBoundary>
        <App />
      </ErrorBoundary>
    </StrictMode>,
  );
}
