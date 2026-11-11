import React, { useEffect, useRef, useState } from 'react';
import { Loader2, CheckCircle2, AlertCircle, ShieldCheck, CreditCard } from 'lucide-react';
import { useAuth } from '../context/AuthContext';

interface PayPalCheckoutButtonProps {
  amount: string;
  currency?: string;
  planId: string;
  planName: string;
  studentId?: string;
  studentName?: string;
  isSponsorship?: boolean;
  sponsorName?: string;
  sponsorEmail?: string;
  sponsorMessage?: string;
  compact?: boolean;
  onSuccess?: (details: any) => void;
  onError?: (err: any) => void;
}

declare global {
  interface Window {
    paypal?: any;
  }
}

const LIVE_PAYPAL_CLIENT_ID =
  'BAAM_0LbbYJqBTf4RHvTClv12fOk-QkHPxChMRdvR83kz5TP62kqVpPbUGSDgXEtYlCSAcqN8JhM-i5C2c';
const SANDBOX_PAYPAL_CLIENT_ID =
  'BAA_J4GVcgk1YKw3YWeB7y_PLSxNnEiLhstSkKhIY02JJY6OUAecOAFbxDYt6wOOJCG0i10RfNVS7BSBKY';

export const PayPalCheckoutButton: React.FC<PayPalCheckoutButtonProps> = ({
  amount,
  currency = 'USD',
  planId,
  planName,
  studentId,
  studentName,
  isSponsorship = false,
  sponsorName,
  sponsorEmail,
  sponsorMessage,
  compact = false,
  onSuccess,
  onError
}) => {
  const { user, refreshProfile } = useAuth();
  const paypalRef = useRef<HTMLDivElement>(null);
  const usedClientSdkRef = useRef<boolean>(false);

  const [gatewayMode, setGatewayMode] = useState<'live' | 'sandbox'>('live');
  const [loading, setLoading] = useState(true);
  const [sdkReady, setSdkReady] = useState(false);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);
  const [completedOrder, setCompletedOrder] = useState<any | null>(null);

  const activeStudentId = studentId || user?.id || 'usr-student';
  const activeStudentName = studentName || user?.full_name || 'Ethiopian High School Student';
  const normalizedAmount = Number(parseFloat(amount || '4.99') || 4.99).toFixed(2);

  // Load Official PayPal JS SDK dynamically for active gateway mode (Live by default)
  useEffect(() => {
    let isMounted = true;

    async function loadPayPalSdk() {
      try {
        setLoading(true);
        setErrorMessage(null);

        let liveClientId = LIVE_PAYPAL_CLIENT_ID;
        let sandboxClientId = SANDBOX_PAYPAL_CLIENT_ID;

        try {
          const configRes = await fetch('/api/paypal/config');
          if (configRes.ok) {
            const config = await configRes.json();
            if (config.environment === 'live' && config.clientId) {
              liveClientId = config.clientId;
            }
            if (config.sandboxClientId) {
              sandboxClientId = config.sandboxClientId;
            }
          }
        } catch (_) {}

        const targetClientId = gatewayMode === 'live' ? liveClientId : sandboxClientId;
        const scriptId = 'paypal-sdk-script';
        const existingScript = document.getElementById(scriptId) as HTMLScriptElement | null;

        if (existingScript && existingScript.getAttribute('data-pp-mode') === gatewayMode && window.paypal) {
          if (isMounted) {
            setSdkReady(true);
            setLoading(false);
          }
          return;
        }

        // Cleanly replace SDK script if switching between Live and Sandbox
        if (existingScript) {
          existingScript.remove();
          try {
            delete window.paypal;
          } catch {
            window.paypal = undefined;
          }
        }

        setSdkReady(false);
        const script = document.createElement('script');
        script.id = scriptId;
        script.setAttribute('data-pp-mode', gatewayMode);
        script.src = `https://www.paypal.com/sdk/js?client-id=${encodeURIComponent(targetClientId)}&currency=${currency}&intent=capture&components=buttons`;
        script.async = true;
        script.onload = () => {
          if (isMounted) {
            setSdkReady(true);
            setLoading(false);
          }
        };
        script.onerror = () => {
          if (isMounted) {
            setErrorMessage('Failed to load PayPal secure checkout SDK. Please verify internet connectivity.');
            setLoading(false);
          }
        };
        document.body.appendChild(script);
      } catch (err: any) {
        if (isMounted) {
          setErrorMessage(err.message || 'Error initializing PayPal payment gateway');
          setLoading(false);
        }
      }
    }

    loadPayPalSdk();

    return () => {
      isMounted = false;
    };
  }, [currency, gatewayMode]);

  // Render Official PayPal Smart Buttons once SDK is ready
  useEffect(() => {
    if (!sdkReady || !window.paypal || !paypalRef.current) return;

    paypalRef.current.innerHTML = '';

    try {
      const buttonsInstance = window.paypal.Buttons({
        style: {
          layout: 'vertical',
          color: 'gold',
          shape: 'rect',
          label: isSponsorship ? 'paypal' : 'pay',
          height: compact ? 40 : 44
        },

        createOrder: async (_data: any, actions: any) => {
          setErrorMessage(null);
          usedClientSdkRef.current = false;

          // 1. In Live mode, check if backend REST v2 endpoint creates a real PayPal order
          if (gatewayMode === 'live') {
            try {
              const res = await fetch('/api/paypal/create-order', {
                method: 'POST',
                headers: {
                  'Content-Type': 'application/json',
                  'x-user-id': activeStudentId
                },
                body: JSON.stringify({
                  amount: normalizedAmount,
                  currency,
                  planId,
                  planName,
                  studentId: activeStudentId,
                  studentName: activeStudentName,
                  isSponsorship,
                  sponsorName,
                  sponsorEmail,
                  sponsorMessage
                })
              });

              if (res.ok) {
                const orderData = await res.json();
                const isRealServerOrder =
                  orderData?.id &&
                  !orderData?.useClientSdk &&
                  !String(orderData.id).startsWith('ETHIO-');

                if (isRealServerOrder) {
                  usedClientSdkRef.current = false;
                  return orderData.id;
                }
              }
            } catch (_) {
              // Fall through to official PayPal JS SDK client-side order creation
            }
          }

          // 2. Create a 100% genuine PayPal order directly on PayPal's servers via Official JS SDK
          usedClientSdkRef.current = true;
          return actions.order.create({
            intent: 'CAPTURE',
            purchase_units: [
              {
                reference_id: `ETHIO-${Date.now()}`,
                description: `EthioLearn AI - ${planName} (${activeStudentName})`.slice(0, 120),
                custom_id: String(activeStudentId).slice(0, 120),
                amount: {
                  currency_code: currency,
                  value: normalizedAmount
                }
              }
            ],
            application_context: {
              brand_name: 'EthioLearn AI National Education',
              shipping_preference: 'NO_SHIPPING',
              user_action: 'PAY_NOW'
            }
          });
        },

        onApprove: async (data: any, actions: any) => {
          try {
            setLoading(true);
            setErrorMessage(null);

            let clientCaptureDetails: any = null;
            if (usedClientSdkRef.current && actions?.order?.capture) {
              clientCaptureDetails = await actions.order.capture();
            }

            // Record transaction & unlock student access
            const res = await fetch('/api/paypal/capture-order', {
              method: 'POST',
              headers: { 'Content-Type': 'application/json' },
              body: JSON.stringify({
                orderId: data.orderID,
                clientCaptured: Boolean(clientCaptureDetails),
                captureDetails: clientCaptureDetails,
                amount: normalizedAmount,
                currency,
                planId,
                studentId: activeStudentId,
                studentName: activeStudentName,
                isSponsorship,
                sponsorName,
                sponsorEmail,
                sponsorMessage
              })
            });

            const captureData = await res.json().catch(() => ({}));
            const isOk =
              Boolean(clientCaptureDetails) ||
              (res.ok && (captureData.success || captureData.status === 'COMPLETED'));

            if (!isOk) {
              throw new Error(captureData.error || 'Payment capture could not be finalized');
            }

            const finalOrder = {
              success: true,
              id: data.orderID,
              orderId: data.orderID,
              status: 'COMPLETED',
              ...captureData,
              ...(clientCaptureDetails ? { payer: clientCaptureDetails.payer } : {})
            };

            setCompletedOrder(finalOrder);
            setLoading(false);

            if (!isSponsorship && refreshProfile) {
              try {
                await refreshProfile();
              } catch (_) {}
            }

            if (onSuccess) {
              onSuccess(finalOrder);
            }
          } catch (err: any) {
            setLoading(false);
            setErrorMessage(err.message || 'Failed to confirm PayPal transaction');
            if (onError) onError(err);
          }
        },

        onCancel: () => {
          setLoading(false);
        },

        onError: (err: any) => {
          console.error('PayPal Smart Buttons error:', err);
          setLoading(false);
          setErrorMessage('PayPal checkout window was closed or interrupted. Click the PayPal button below to try again.');
          if (onError) onError(err);
        }
      });

      if (buttonsInstance.isEligible && !buttonsInstance.isEligible()) {
        setErrorMessage('PayPal Smart Buttons are not eligible in this browser context.');
        return;
      }

      buttonsInstance.render(paypalRef.current);
    } catch (renderErr: any) {
      console.error('PayPal Button Render Error:', renderErr);
      setErrorMessage(renderErr.message || 'Unable to render PayPal payment options');
    }
  }, [
    sdkReady,
    gatewayMode,
    normalizedAmount,
    currency,
    planId,
    planName,
    activeStudentId,
    activeStudentName,
    isSponsorship,
    sponsorName,
    sponsorEmail,
    sponsorMessage,
    compact
  ]);

  if (completedOrder) {
    return (
      <div className="p-5 rounded-2xl bg-emerald-950/40 border border-emerald-500/50 text-center space-y-3 animate-in fade-in">
        <div className="w-12 h-12 bg-emerald-500/20 text-emerald-400 rounded-full flex items-center justify-center mx-auto border border-emerald-500/40">
          <CheckCircle2 className="w-6 h-6" />
        </div>
        <h4 className="font-black text-white text-base">Payment Verified via PayPal!</h4>
        <p className="text-xs text-slate-300">
          {isSponsorship
            ? `Thank you for sponsoring ${activeStudentName}! Their premium learning tools, 59 textbooks, and AI Tutor have been immediately unlocked.`
            : `Order #${completedOrder.orderId} successfully captured. Your full curriculum entrance exams, textbooks, and AI Tutor are now active!`}
        </p>
        <div className="pt-2">
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-500/10 text-emerald-300 text-xs font-mono font-bold border border-emerald-500/20">
            <ShieldCheck className="w-3.5 h-3.5" /> PayPal Secure Capture #{completedOrder.orderId}
          </span>
        </div>
      </div>
    );
  }

  return (
    <div className="space-y-2.5 w-full">
      <div className="flex items-center justify-between text-xs text-slate-400 pb-1">
        <span className="flex items-center gap-1.5 font-bold text-slate-200">
          <CreditCard className="w-3.5 h-3.5 text-amber-400" />
          <span>PayPal & International Cards</span>
        </span>
        <div className="flex items-center gap-2">
          <button
            type="button"
            onClick={() => setGatewayMode(prev => (prev === 'live' ? 'sandbox' : 'live'))}
            title="Switch between Real Live PayPal Payments and Devpost Judge Sandbox Test Mode"
            className={`px-2 py-0.5 rounded-full text-[10px] font-mono font-bold border transition ${
              gatewayMode === 'live'
                ? 'bg-emerald-500/15 text-emerald-300 border-emerald-500/40 hover:bg-emerald-500/25'
                : 'bg-amber-500/15 text-amber-300 border-amber-500/40 hover:bg-amber-500/25'
            }`}
          >
            {gatewayMode === 'live' ? '● LIVE PAYPAL' : '🧪 SANDBOX TEST'}
          </button>
          <span className="font-mono font-bold text-emerald-400">
            ${normalizedAmount} {currency}
          </span>
        </div>
      </div>

      {loading && (
        <div className="py-4 flex flex-col items-center justify-center space-y-2 text-slate-400">
          <Loader2 className="w-5 h-5 animate-spin text-amber-400" />
          <span className="text-xs font-medium">
            {gatewayMode === 'live'
              ? 'Connecting to Live PayPal Secure Gateway...'
              : 'Connecting to PayPal Sandbox Judge Gateway...'}
          </span>
        </div>
      )}

      {errorMessage && (
        <div className="p-3 rounded-xl bg-red-950/30 border border-red-500/40 text-xs text-red-300 flex items-start gap-2">
          <AlertCircle className="w-4 h-4 shrink-0 mt-0.5 text-red-400" />
          <span>{errorMessage}</span>
        </div>
      )}

      {/* Official PayPal Smart Buttons Container */}
      <div ref={paypalRef} className="min-h-[44px] w-full rounded-xl overflow-hidden" />

      <div className="pt-0.5 flex items-center justify-center gap-1.5 text-[10px] text-slate-500">
        <ShieldCheck className="w-3 h-3 text-emerald-500 shrink-0" />
        <span>
          {gatewayMode === 'live'
            ? 'Real Payment Active via Official PayPal Live SDK (Switchable to Sandbox for Judges)'
            : 'Sandbox Test Mode Active — Use PayPal Sandbox Buyer Credentials'}
        </span>
      </div>
    </div>
  );
};
