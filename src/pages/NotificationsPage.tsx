import React, { useState, useEffect } from 'react';
import { useAuth } from '../context/AuthContext';
import {
  Bell,
  CheckCircle2,
  AlertCircle,
  Award,
  CreditCard,
  Trash2,
  Check
} from 'lucide-react';
import { NotificationItem } from '../types';

interface NotificationsPageProps {
  onNavigate: (route: string, params?: Record<string, any>) => void;
}

export const NotificationsPage: React.FC<NotificationsPageProps> = ({ onNavigate }) => {
  const { user } = useAuth();
  const [notifications, setNotifications] = useState<NotificationItem[]>([]);
  const [loading, setLoading] = useState(true);

  const fetchNotifs = async () => {
    if (!user) return;
    try {
      const res = await fetch('/api/notifications', {
        headers: { 'x-user-id': user.id }
      });
      if (res.ok) {
        setNotifications(await res.json());
      }
    } catch (err) {
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchNotifs();
  }, [user]);

  const markRead = async (id: string) => {
    if (!user) return;
    try {
      await fetch(`/api/notifications/${id}/read`, {
        method: 'PUT',
        headers: { 'x-user-id': user.id }
      });
      setNotifications(prev => prev.map(n => (n.id === id ? { ...n, read: true } : n)));
    } catch (err) {
      console.warn('Failed to mark notification as read:', err);
    }
  };

  return (
    <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-6">
      <div className="flex items-center justify-between pb-4 border-b border-slate-800">
        <div>
          <h1 className="text-xl font-bold text-white flex items-center gap-2">
            <Bell className="w-5 h-5 text-emerald-400" />
            <span>{user?.role === 'admin' ? 'Admin Alert & Student Appeals Center' : 'Student Notifications'}</span>
          </h1>
          <p className="text-xs text-slate-400 mt-0.5">
            {user?.role === 'admin'
              ? 'All student device transfer appeals, payment receipts, and question reports.'
              : 'System updates, payment verifications, and study milestones.'}
          </p>
        </div>
      </div>

      <div className="space-y-3">
        {notifications.length === 0 ? (
          <div className="bg-slate-900 border border-slate-800 rounded-2xl p-12 text-center text-slate-400 text-xs">
            No notifications in your inbox.
          </div>
        ) : (
          notifications.map(n => (
            <div
              key={n.id}
              className={`p-4 rounded-2xl border transition flex items-start justify-between gap-4 ${
                n.read
                  ? 'bg-slate-900/60 border-slate-800 opacity-80'
                  : 'bg-slate-800 border-slate-700 shadow-sm border-l-4 border-l-emerald-500'
              }`}
            >
              <div className="space-y-2 flex-1">
                <div className="flex items-center gap-2">
                  <span className="font-bold text-sm text-white">{n.title}</span>
                  <span className="text-[10px] text-slate-400">
                    {new Date(n.created_at).toLocaleDateString()} {new Date(n.created_at).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                  </span>
                </div>
                <p className="text-xs text-slate-300 leading-relaxed">
                  {n.message}
                </p>
                {user?.role === 'admin' && (
                  <div className="pt-1 flex flex-wrap gap-2">
                    {(n.type === 'device_transfer' || n.title.toLowerCase().includes('device transfer')) && (
                      <button
                        onClick={() => {
                          markRead(n.id);
                          onNavigate('admin-transfers');
                        }}
                        className="px-3 py-1 bg-sky-600 hover:bg-sky-500 text-white rounded-lg text-xs font-bold transition"
                      >
                        Review Device Transfer Appeal →
                      </button>
                    )}
                    {(n.type === 'payment' || n.title.toLowerCase().includes('payment')) && (
                      <button
                        onClick={() => {
                          markRead(n.id);
                          onNavigate('admin-payments');
                        }}
                        className="px-3 py-1 bg-emerald-600 hover:bg-emerald-500 text-white rounded-lg text-xs font-bold transition"
                      >
                        Verify Payment Receipt →
                      </button>
                    )}
                    {n.title.toLowerCase().includes('question') && (
                      <button
                        onClick={() => {
                          markRead(n.id);
                          onNavigate('admin-feedback');
                        }}
                        className="px-3 py-1 bg-indigo-600 hover:bg-indigo-500 text-white rounded-lg text-xs font-bold transition"
                      >
                        Review Question Appeal →
                      </button>
                    )}
                  </div>
                )}
              </div>

              {!n.read && (
                <button
                  onClick={() => markRead(n.id)}
                  className="p-1.5 bg-slate-700 hover:bg-slate-600 rounded-lg text-slate-300 text-xs flex items-center gap-1 shrink-0"
                  title="Mark as Read"
                >
                  <Check className="w-3.5 h-3.5 text-emerald-400" />
                  <span>Mark Read</span>
                </button>
              )}
            </div>
          ))
        )}
      </div>
    </div>
  );
};
