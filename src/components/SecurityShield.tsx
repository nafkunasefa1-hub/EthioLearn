import React, { useEffect } from 'react';
import { useAuth } from '../context/AuthContext';

interface SecurityShieldProps {
  children: React.ReactNode;
  enabled?: boolean;
}

export const SecurityShield: React.FC<SecurityShieldProps> = ({ children, enabled = true }) => {
  const { user } = useAuth();

  useEffect(() => {
    if (!enabled) return;

    // Prevent PrintScreen or Ctrl+P
    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.ctrlKey || e.metaKey) && (e.key === 'p' || e.key === 'P' || e.key === 's' || e.key === 'S')) {
        e.preventDefault();
        e.stopPropagation();
        return false;
      }
      if (e.key === 'PrintScreen') {
        e.preventDefault();
        return false;
      }
    };

    // Prevent Right-Click Context Menu on study materials
    const handleContextMenu = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (target.closest('.protected-content') || target.closest('canvas') || target.closest('.exam-container')) {
        e.preventDefault();
        return false;
      }
    };

    // Prevent text drag / copy on protected content
    const handleCopy = (e: ClipboardEvent) => {
      const target = e.target as HTMLElement;
      if (target.closest('.protected-content') || target.closest('.exam-container')) {
        e.preventDefault();
        return false;
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    window.addEventListener('contextmenu', handleContextMenu);
    window.addEventListener('copy', handleCopy);

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      window.removeEventListener('contextmenu', handleContextMenu);
      window.removeEventListener('copy', handleCopy);
    };
  }, [enabled]);

  // Subtle watermark showing student's phone number
  const watermarkText = user?.phone_number
    ? `${user.phone_number} • ${user.full_name || 'Student'}`
    : user?.email || 'EthioLearn Protected';

  return (
    <div className="relative w-full h-full select-none">
      {children}

      {/* Dynamic Security Watermark Overlay (identifies screenshot leakers) */}
      {user?.role === 'student' && (
        <div
          aria-hidden="true"
          className="pointer-events-none fixed inset-0 z-50 overflow-hidden flex flex-wrap gap-24 items-center justify-around opacity-[0.035] select-none"
        >
          {Array.from({ length: 24 }).map((_, i) => (
            <div
              key={i}
              className="text-xs font-mono font-bold text-slate-300 transform -rotate-25 whitespace-nowrap"
            >
              {watermarkText}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};
