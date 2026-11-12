import { Capacitor } from '@capacitor/core';
import { App as CapApp } from '@capacitor/app';

type BackButtonHandler = () => boolean; // return true if handled, false to pass through

let backHandlers: BackButtonHandler[] = [];
let isInitialized = false;

/**
 * Register a back-button handler (e.g. for closing a modal or subpage).
 * Returns an unregister function.
 */
export function registerBackButtonHandler(handler: BackButtonHandler): () => void {
  backHandlers.push(handler);
  return () => {
    backHandlers = backHandlers.filter(h => h !== handler);
  };
}

/**
 * Initialize native Android hardware back button behavior
 */
export function initCapacitorApp(onNavigateBack: () => void): void {
  if (isInitialized) return;
  isInitialized = true;

  if (Capacitor.isNativePlatform()) {
    CapApp.addListener('backButton', ({ canGoBack }) => {
      // 1. Check topmost custom handler (e.g., open modal or exam confirmation)
      for (let i = backHandlers.length - 1; i >= 0; i--) {
        const handled = backHandlers[i]();
        if (handled) return;
      }

      // 2. Otherwise navigate back in app view hierarchy
      if (canGoBack) {
        onNavigateBack();
      } else {
        // Double press or exit
        CapApp.exitApp();
      }
    });
  }
}

export function isNativeAndroid(): boolean {
  return Capacitor.isNativePlatform() && Capacitor.getPlatform() === 'android';
}
