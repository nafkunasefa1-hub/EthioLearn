import React, { useState } from 'react';
import { Smartphone, Send, CheckCircle2, AlertTriangle, X, ExternalLink, ShieldCheck } from 'lucide-react';
import { getDeviceId } from '../context/AuthContext';

interface DeviceAppealModalProps {
  isOpen: boolean;
  onClose: () => void;
  initialPhone?: string;
}

export const DeviceAppealModal: React.FC<DeviceAppealModalProps> = ({
  isOpen,
  onClose,
  initialPhone = ''
}) => {
  const [phone, setPhone] = useState(
    initialPhone.startsWith('+251')
      ? initialPhone.replace('+251', '')
      : initialPhone.startsWith('0')
      ? initialPhone.substring(1)
      : initialPhone
  );
  const [reason, setReason] = useState('I bought a new phone and want to transfer my account');
  const [customNote, setCustomNote] = useState('');
  const [submitting, setSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [errorMsg, setErrorMsg] = useState<string | null>(null);

  if (!isOpen) return null;

  const currentDeviceId = getDeviceId();

  const getFullPhone = () => {
    let clean = phone.trim().replace(/\D/g, '');
    if (clean.startsWith('251')) clean = clean.substring(3);
    if (clean.startsWith('0')) clean = clean.substring(1);
    return `+251${clean}`;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMsg(null);

    const fullPhone = getFullPhone();
    if (fullPhone.length < 13) {
      setErrorMsg('Please enter a valid 9-digit Ethiopian phone number (e.g. 911234567 or 712345678).');
      return;
    }

    const finalReason = customNote.trim() ? `${reason}: ${customNote.trim()}` : reason;

    setSubmitting(true);
    try {
      const res = await fetch('/api/auth/request-device-transfer', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          phone_number: fullPhone,
          new_device_id: currentDeviceId,
          reason: finalReason
        })
      });

      const data = await res.json();
      if (!res.ok) {
        throw new Error(data.error || 'Failed to submit device change appeal');
      }

      setSubmitted(true);
    } catch (err: any) {
      setErrorMsg(err.message || 'Error submitting appeal. Please try again.');
    } finally {
      setSubmitting(false);
    }
  };

  const telegramMessage = encodeURIComponent(
    `I want to change my account to this phone\nPhone: ${getFullPhone()}\nReason: ${reason}${
      customNote ? ` (${customNote})` : ''
    }\nNew Device ID: ${currentDeviceId.slice(0, 16)}`
  );

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-sm animate-in fade-in duration-200">
      <div className="bg-slate-900 border border-slate-700/80 rounded-3xl w-full max-w-lg p-6 sm:p-7 shadow-2xl relative overflow-hidden text-slate-100 max-h-[90vh] overflow-y-auto">
        {/* Accent top bar */}
        <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-red-500 via-amber-500 to-emerald-500" />

        {/* Close button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 p-2 text-slate-400 hover:text-white rounded-full bg-slate-800/80 hover:bg-slate-700 transition"
          aria-label="Close modal"
        >
          <X className="w-4 h-4" />
        </button>

        <div className="flex items-center gap-3 mb-4">
          <div className="p-3 bg-red-950/70 border border-red-800/80 rounded-2xl text-red-400 shrink-0">
            <Smartphone className="w-6 h-6" />
          </div>
          <div>
            <h2 className="text-lg sm:text-xl font-black text-white tracking-tight">
              Device Change Appeal
            </h2>
            <p className="text-xs text-slate-400">
              Request to transfer your 1-device locked account to this phone
            </p>
          </div>
        </div>

        {submitted ? (
          <div className="space-y-4 py-2">
            <div className="p-4 bg-emerald-950/60 border border-emerald-800 rounded-2xl text-emerald-200 space-y-2">
              <div className="flex items-center gap-2 font-bold text-sm text-emerald-300">
                <CheckCircle2 className="w-5 h-5 text-emerald-400 shrink-0" />
                <span>Appeal Submitted to Admin!</span>
              </div>
              <p className="text-xs text-emerald-200/90 leading-relaxed">
                Your device transfer appeal for <strong className="text-white font-mono">{getFullPhone()}</strong> has been sent to the EthioLearn Admin Panel.
              </p>
            </div>

            <div className="p-4 bg-slate-950 border border-slate-800 rounded-2xl space-y-3 text-xs">
              <div className="font-bold text-slate-200 flex items-center gap-1.5">
                <ShieldCheck className="w-4 h-4 text-sky-400" />
                <span>Next Step for Instant Approval:</span>
              </div>
              <p className="text-slate-300 leading-relaxed">
                To get your transfer approved immediately, contact the Administrator on Telegram:
              </p>
              <a
                href={`https://t.me/wiznfk4?text=${telegramMessage}`}
                target="_blank"
                rel="noreferrer"
                className="w-full flex items-center justify-center gap-2 px-4 py-3 bg-sky-600 hover:bg-sky-500 text-white rounded-xl font-bold text-xs shadow-md transition"
              >
                <Send className="w-4 h-4" />
                <span>Open Telegram (@wiznfk4) & Send Appeal</span>
                <ExternalLink className="w-3.5 h-3.5 opacity-80" />
              </a>
            </div>

            <button
              type="button"
              onClick={onClose}
              className="w-full py-2.5 bg-slate-800 hover:bg-slate-700 text-slate-200 rounded-xl text-xs font-bold transition"
            >
              Close Window
            </button>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="p-3 bg-red-950/30 border border-red-900/50 rounded-2xl text-xs text-red-300 flex items-start gap-2.5">
              <AlertTriangle className="w-4 h-4 text-red-400 shrink-0 mt-0.5" />
              <span>
                <strong>One Account = One Device Policy:</strong> Your account is protected and locked to your first device. Fill out this appeal to verify your identity and switch phones.
              </span>
            </div>

            {errorMsg && (
              <div className="p-3 bg-rose-950/80 border border-rose-800 rounded-xl text-xs text-rose-200 flex items-center gap-2">
                <AlertTriangle className="w-4 h-4 text-rose-400 shrink-0" />
                <span>{errorMsg}</span>
              </div>
            )}

            {/* Phone Number */}
            <div>
              <label className="block text-xs font-bold text-slate-300 uppercase tracking-wider mb-1.5">
                Your Registered Phone Number <span className="text-emerald-400">*</span>
              </label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-slate-400 font-mono text-sm font-semibold">
                  +251
                </div>
                <input
                  type="tel"
                  required
                  placeholder="9XXXXXXXX or 7XXXXXXXX"
                  value={phone}
                  onChange={e => setPhone(e.target.value.replace(/\D/g, '').slice(0, 9))}
                  className="w-full pl-16 pr-4 py-2.5 bg-slate-950 border border-slate-700 rounded-xl text-slate-100 placeholder-slate-600 text-sm font-mono tracking-wider focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent transition"
                />
              </div>
            </div>

            {/* Reason */}
            <div>
              <label className="block text-xs font-bold text-slate-300 uppercase tracking-wider mb-1.5">
                Reason for Phone Change <span className="text-emerald-400">*</span>
              </label>
              <select
                value={reason}
                onChange={e => setReason(e.target.value)}
                className="w-full px-3 py-2.5 bg-slate-950 border border-slate-700 rounded-xl text-slate-100 text-xs font-semibold focus:outline-none focus:ring-2 focus:ring-emerald-500"
              >
                <option value="I bought a new phone and want to transfer my account">
                  I bought a new phone and want to transfer my account
                </option>
                <option value="My previous phone was lost or stolen">
                  My previous phone was lost or stolen
                </option>
                <option value="My old phone screen or hardware is broken/damaged">
                  My old phone screen or hardware is broken/damaged
                </option>
                <option value="I am using a family member or shared device now">
                  I am using a family member or shared device now
                </option>
                <option value="Other reason">
                  Other reason (explain below)
                </option>
              </select>
            </div>

            {/* Additional Note */}
            <div>
              <label className="block text-xs font-bold text-slate-300 uppercase tracking-wider mb-1.5">
                Additional Notes / Student Details (Optional)
              </label>
              <textarea
                rows={2}
                placeholder="Any extra details for the administrator (e.g. Student name, school)..."
                value={customNote}
                onChange={e => setCustomNote(e.target.value)}
                className="w-full px-3 py-2 bg-slate-950 border border-slate-700 rounded-xl text-slate-100 placeholder-slate-600 text-xs focus:outline-none focus:ring-2 focus:ring-emerald-500"
              />
            </div>

            {/* Device Fingerprint Info */}
            <div className="p-3 bg-slate-950 border border-slate-800 rounded-xl flex items-center justify-between text-[11px] text-slate-400">
              <span>This Device ID:</span>
              <span className="font-mono text-sky-400 font-semibold">{currentDeviceId.slice(0, 18)}...</span>
            </div>

            <div className="space-y-2 pt-2">
              <button
                type="submit"
                disabled={submitting}
                className="w-full py-3 bg-gradient-to-r from-red-600 via-amber-600 to-emerald-600 hover:opacity-90 text-white font-bold text-xs rounded-xl shadow-lg transition flex items-center justify-center gap-2 disabled:opacity-50"
              >
                {submitting ? (
                  <span>Submitting Appeal...</span>
                ) : (
                  <>
                    <Send className="w-4 h-4" />
                    <span>Submit Device Change Appeal</span>
                  </>
                )}
              </button>

              <div className="text-center">
                <a
                  href={`https://t.me/wiznfk4?text=${encodeURIComponent("I want to change my account to this phone")}`}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-1.5 text-xs text-sky-400 hover:text-sky-300 hover:underline font-semibold"
                >
                  <Send className="w-3.5 h-3.5" />
                  <span>Or contact Admin directly on Telegram (@wiznfk4)</span>
                </a>
              </div>
            </div>
          </form>
        )}
      </div>
    </div>
  );
};
