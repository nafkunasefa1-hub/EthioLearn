import React, { useState, useEffect } from 'react';
import {
  Share2,
  Download,
  Upload,
  X,
  CheckCircle2,
  AlertCircle,
  HardDrive,
  Users,
  Smartphone,
  RefreshCw,
  FileCheck,
  Send
} from 'lucide-react';
import { exportOfflinePackage, importOfflinePackage, buildOfflinePackage, EthioOfflinePackage } from '../utils/p2pSharing';

interface P2POfflineSharingModalProps {
  isOpen: boolean;
  onClose: () => void;
  onRefresh?: () => void;
}

export const P2POfflineSharingModal: React.FC<P2POfflineSharingModalProps> = ({
  isOpen,
  onClose,
  onRefresh
}) => {
  const [packagePreview, setPackagePreview] = useState<EthioOfflinePackage | null>(null);
  const [exporting, setExporting] = useState(false);
  const [exportSuccess, setExportSuccess] = useState<string | null>(null);
  const [importing, setImporting] = useState(false);
  const [importResult, setImportResult] = useState<{ success: boolean; message: string } | null>(null);

  useEffect(() => {
    if (isOpen) {
      buildOfflinePackage().then(setPackagePreview);
      setExportSuccess(null);
      setImportResult(null);
    }
  }, [isOpen]);

  if (!isOpen) return null;

  const handleExport = async () => {
    setExporting(true);
    setExportSuccess(null);
    try {
      const res = await exportOfflinePackage();
      if (res.success) {
        setExportSuccess(`Package created: ${res.filename}. You can now send this file to classmates via SHAREit, Xender, or Bluetooth!`);
      }
    } catch (e: any) {
      console.error(e);
    } finally {
      setExporting(false);
    }
  };

  const handleFileChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    setImporting(true);
    setImportResult(null);
    try {
      const result = await importOfflinePackage(file);
      setImportResult(result);
      if (result.success && onRefresh) {
        onRefresh();
      }
    } catch (e: any) {
      setImportResult({ success: false, message: e.message || 'Error importing package' });
    } finally {
      setImporting(false);
      e.target.value = '';
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-slate-950/80 backdrop-blur-md animate-fadeIn">
      <div className="bg-slate-900 border border-slate-700/80 rounded-3xl w-full max-w-xl shadow-2xl overflow-hidden flex flex-col">
        {/* Header */}
        <div className="p-5 sm:p-6 border-b border-slate-800 bg-gradient-to-r from-slate-900 via-slate-850 to-indigo-950 flex items-start justify-between gap-4">
          <div>
            <div className="flex items-center gap-2 text-indigo-400 text-xs font-bold uppercase tracking-wider mb-1">
              <Share2 className="w-4 h-4" />
              <span>Offline P2P Student Sharing</span>
            </div>
            <h2 className="text-xl sm:text-2xl font-bold text-white flex items-center gap-2">
              Share Offline Materials
              <span className="text-xs bg-indigo-500/20 text-indigo-300 border border-indigo-500/30 px-2 py-0.5 rounded-full font-mono">
                .ethio
              </span>
            </h2>
            <p className="text-xs sm:text-sm text-slate-400 mt-1">
              Transfer saved worksheets, entrance exams, and notes to classmates using SHAREit, Xender, or Bluetooth with zero internet.
            </p>
          </div>
          <button
            onClick={onClose}
            className="p-2 text-slate-400 hover:text-white hover:bg-slate-800 rounded-xl transition"
            title="Close Modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Content */}
        <div className="p-5 sm:p-6 space-y-6">
          {/* Current Package Overview */}
          {packagePreview && (
            <div className="bg-slate-950/60 border border-slate-800 rounded-2xl p-4 space-y-3">
              <div className="text-xs font-bold text-slate-300 uppercase tracking-wider flex items-center gap-1.5">
                <HardDrive className="w-3.5 h-3.5 text-indigo-400" />
                <span>Ready to Share on this Device:</span>
              </div>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 text-center">
                <div className="bg-slate-900/80 border border-slate-800 rounded-xl p-2.5">
                  <div className="text-lg font-bold text-emerald-400">
                    {packagePreview.metadata.stats.offline_exams_count}
                  </div>
                  <div className="text-[10px] text-slate-400 uppercase font-semibold">Exams & Worksheets</div>
                </div>
                <div className="bg-slate-900/80 border border-slate-800 rounded-xl p-2.5">
                  <div className="text-lg font-bold text-indigo-400">
                    {packagePreview.metadata.stats.error_notebook_count}
                  </div>
                  <div className="text-[10px] text-slate-400 uppercase font-semibold">Error Cards</div>
                </div>
                <div className="bg-slate-900/80 border border-slate-800 rounded-xl p-2.5">
                  <div className="text-lg font-bold text-amber-400">
                    {packagePreview.metadata.stats.short_notes_count}
                  </div>
                  <div className="text-[10px] text-slate-400 uppercase font-semibold">Short Notes</div>
                </div>
                <div className="bg-slate-900/80 border border-slate-800 rounded-xl p-2.5">
                  <div className="text-lg font-bold text-purple-400">
                    {packagePreview.metadata.stats.attempts_count}
                  </div>
                  <div className="text-[10px] text-slate-400 uppercase font-semibold">Exam Scores</div>
                </div>
              </div>
            </div>
          )}

          {/* Action 1: Export Package */}
          <div className="space-y-2">
            <h3 className="text-sm font-bold text-white flex items-center gap-1.5">
              <Download className="w-4 h-4 text-emerald-400" />
              <span>Step 1: Export & Share Package</span>
            </h3>
            <p className="text-xs text-slate-400">
              Generates a single lightweight <code>.ethio</code> file that packages your downloaded materials for wireless peer transfer.
            </p>
            <button
              onClick={handleExport}
              disabled={exporting}
              className="w-full py-3 px-4 bg-gradient-to-r from-emerald-600 to-teal-600 hover:from-emerald-500 hover:to-teal-500 disabled:opacity-50 text-white rounded-2xl text-xs sm:text-sm font-bold transition shadow-md flex items-center justify-center gap-2"
            >
              <Send className="w-4 h-4" />
              <span>{exporting ? 'Packaging Materials...' : 'Export Offline Package (.ethio)'}</span>
            </button>
            {exportSuccess && (
              <div className="p-3 bg-emerald-950/40 border border-emerald-800/80 rounded-xl text-xs text-emerald-300 flex items-start gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                <span>{exportSuccess}</span>
              </div>
            )}
          </div>

          <div className="border-t border-slate-800" />

          {/* Action 2: Import Package */}
          <div className="space-y-2">
            <h3 className="text-sm font-bold text-white flex items-center gap-1.5">
              <Upload className="w-4 h-4 text-indigo-400" />
              <span>Step 2: Receive & Import from Classmate</span>
            </h3>
            <p className="text-xs text-slate-400">
              Select the <code>.ethio</code> file received via SHAREit, Xender, or Bluetooth to instantly load it into your device.
            </p>
            <label className="w-full py-3 px-4 bg-slate-800 hover:bg-slate-750 border border-slate-700/80 hover:border-indigo-500 text-slate-200 rounded-2xl text-xs sm:text-sm font-bold transition shadow-sm flex items-center justify-center gap-2 cursor-pointer">
              <Upload className="w-4 h-4 text-indigo-400" />
              <span>{importing ? 'Importing & Verifying...' : 'Select Received .ethio File to Import'}</span>
              <input
                type="file"
                accept=".ethio,application/octet-stream,application/json"
                onChange={handleFileChange}
                disabled={importing}
                className="hidden"
              />
            </label>
            {importResult && (
              <div
                className={`p-3 rounded-xl text-xs flex items-start gap-2 ${
                  importResult.success
                    ? 'bg-emerald-950/40 border border-emerald-800/80 text-emerald-300'
                    : 'bg-red-950/40 border border-red-800/80 text-red-300'
                }`}
              >
                {importResult.success ? (
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                ) : (
                  <AlertCircle className="w-4 h-4 text-red-400 shrink-0 mt-0.5" />
                )}
                <span>{importResult.message}</span>
              </div>
            )}
          </div>
        </div>

        {/* Footer */}
        <div className="p-4 border-t border-slate-800 bg-slate-950/60 flex items-center justify-between text-xs text-slate-400">
          <span>Zero mobile data required for Bluetooth & local transfer</span>
          <button
            onClick={onClose}
            className="px-4 py-1.5 bg-slate-800 hover:bg-slate-700 text-white rounded-xl transition font-semibold"
          >
            Done
          </button>
        </div>
      </div>
    </div>
  );
};
