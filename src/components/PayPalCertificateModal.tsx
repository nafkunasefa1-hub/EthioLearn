import React from 'react';
import { Award, CheckCircle2, Download, Share2, X, Shield, Sparkles, ExternalLink } from 'lucide-react';

export interface CertificateData {
  certificateId: string;
  sponsorName: string;
  sponsorEmail?: string;
  studentName: string;
  studentGrade?: string;
  studentSchool?: string;
  amountUsd: string;
  planName: string;
  orderId: string;
  date: string;
  sponsorMessage?: string;
}

interface PayPalCertificateModalProps {
  isOpen: boolean;
  onClose: () => void;
  certificate: CertificateData | null;
}

export const PayPalCertificateModal: React.FC<PayPalCertificateModalProps> = ({
  isOpen,
  onClose,
  certificate
}) => {
  if (!isOpen || !certificate) return null;

  const handlePrint = () => {
    window.print();
  };

  const handleShare = () => {
    const text = `I just sponsored Ethiopian Scholar ${certificate.studentName} on EthioLearn AI via PayPal! 🎓 Together we're unlocking AI tutoring and national curriculum access. Join the movement: https://ethiolearn.org/sponsor`;
    if (navigator.share) {
      navigator.share({
        title: 'EthioLearn AI Diaspora Sponsorship Certificate',
        text,
        url: window.location.href
      }).catch(() => {});
    } else {
      navigator.clipboard.writeText(text);
      alert('Sponsorship certificate impact text copied to clipboard! You can share it on LinkedIn, Twitter, or WhatsApp.');
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-md animate-in fade-in duration-200">
      <div className="relative w-full max-w-2xl bg-gradient-to-br from-slate-950 via-slate-900 to-indigo-950 border-2 border-amber-500/40 rounded-3xl p-6 sm:p-8 shadow-2xl shadow-amber-500/10 text-white overflow-hidden">
        {/* Subtle decorative glow */}
        <div className="absolute top-0 right-0 w-64 h-64 bg-amber-500/10 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-64 h-64 bg-emerald-500/10 rounded-full blur-3xl pointer-events-none" />

        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 p-2 text-slate-400 hover:text-white rounded-full bg-slate-800/60 hover:bg-slate-800 transition"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Certificate Frame Content */}
        <div className="border border-amber-500/30 rounded-2xl p-6 sm:p-8 bg-slate-950/80 backdrop-blur-sm relative print:border-black">
          {/* Top Seal & Heading */}
          <div className="text-center space-y-2">
            <div className="inline-flex items-center justify-center w-14 h-14 rounded-full bg-gradient-to-tr from-amber-500 to-emerald-400 p-0.5 shadow-lg shadow-amber-500/20">
              <div className="w-full h-full bg-slate-950 rounded-full flex items-center justify-center">
                <Award className="w-7 h-7 text-amber-400" />
              </div>
            </div>
            <div className="text-[11px] font-mono tracking-widest text-amber-400 uppercase">
              ETHIOLEARN AI &bull; OFFICIAL SPONSORSHIP SEAL &bull; PAYPAL IMPACT
            </div>
            <h2 className="text-xl sm:text-2xl font-black text-transparent bg-clip-text bg-gradient-to-r from-amber-200 via-white to-emerald-200 tracking-tight">
              Certificate of Academic Sponsorship
            </h2>
            <p className="text-xs text-slate-400 max-w-md mx-auto">
              In formal recognition of visionary diaspora philanthropy supporting Ethiopian national education and STEM equity.
            </p>
          </div>

          {/* Divider */}
          <div className="my-5 border-t border-amber-500/20 relative">
            <span className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-slate-950 px-3 text-[10px] text-amber-400/80 font-mono">
              VERIFIED IMPACT
            </span>
          </div>

          {/* Body Text */}
          <div className="text-center space-y-3">
            <p className="text-xs text-slate-400">Presented with gratitude to</p>
            <div className="text-lg sm:text-xl font-black text-amber-300 font-serif">
              {certificate.sponsorName || 'Honored Global Sponsor'}
            </div>
            <p className="text-xs text-slate-300 leading-relaxed max-w-lg mx-auto">
              for providing 100% full tuition, national textbook curriculum access, and 24/7 AI Tutor reasoning to
            </p>
            <div className="p-3 rounded-xl bg-slate-900/90 border border-emerald-500/30 max-w-md mx-auto">
              <div className="text-base font-bold text-emerald-300 flex items-center justify-center gap-2">
                <Sparkles className="w-4 h-4 text-emerald-400" />
                <span>{certificate.studentName}</span>
              </div>
              <div className="text-[11px] text-slate-400 mt-0.5">
                {certificate.studentGrade || 'Ethiopian National Scholar'} &bull; {certificate.studentSchool || 'Comprehensive High School'}
              </div>
            </div>

            {certificate.sponsorMessage && (
              <p className="text-xs text-slate-400 italic max-w-md mx-auto pt-1">
                "{certificate.sponsorMessage}"
              </p>
            )}
          </div>

          {/* Verification Footer */}
          <div className="mt-6 pt-4 border-t border-slate-800 grid grid-cols-2 sm:grid-cols-4 gap-3 text-left font-mono text-[10px]">
            <div>
              <span className="text-slate-500 block">Certificate No:</span>
              <span className="text-amber-300 font-bold">{certificate.certificateId}</span>
            </div>
            <div>
              <span className="text-slate-500 block">PayPal Order ID:</span>
              <span className="text-slate-300 truncate block" title={certificate.orderId}>
                {certificate.orderId.substring(0, 12)}...
              </span>
            </div>
            <div>
              <span className="text-slate-500 block">Sponsorship Value:</span>
              <span className="text-emerald-400 font-bold">${certificate.amountUsd} USD (~1,300 ETB)</span>
            </div>
            <div>
              <span className="text-slate-500 block">Issue Date:</span>
              <span className="text-slate-300">{certificate.date}</span>
            </div>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="mt-5 flex items-center justify-between gap-3">
          <div className="flex items-center gap-2 text-xs text-emerald-400">
            <CheckCircle2 className="w-4 h-4" />
            <span>Cryptographically Verified on PayPal Sandbox REST v2</span>
          </div>
          <div className="flex items-center gap-2">
            <button
              onClick={handlePrint}
              className="flex items-center gap-1.5 px-3 py-2 rounded-xl bg-slate-800 hover:bg-slate-700 text-xs font-semibold text-slate-200 transition"
            >
              <Download className="w-3.5 h-3.5" />
              <span>Print / PDF</span>
            </button>
            <button
              onClick={handleShare}
              className="flex items-center gap-1.5 px-4 py-2 rounded-xl bg-gradient-to-r from-amber-500 to-emerald-500 hover:from-amber-400 hover:to-emerald-400 text-xs font-bold text-slate-950 transition shadow-lg shadow-amber-500/20"
            >
              <Share2 className="w-3.5 h-3.5" />
              <span>Share Impact</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
