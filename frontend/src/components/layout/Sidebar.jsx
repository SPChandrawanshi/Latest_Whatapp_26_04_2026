import React from 'react';
import { NavLink } from 'react-router-dom';
import { menus } from '../../config/menus';
import { LogOut, X } from 'lucide-react';
import { useAuth } from '../../context/AuthContext';
import { clsx } from 'clsx';

export function Sidebar({ role, isOpen, onClose }) {
  const { logout } = useAuth();
  const currentMenu = menus[role] || [];

  return (
    <>
      {/* Mobile Backdrop */}
      {isOpen && (
        <div 
          className="fixed inset-0 bg-black/50 z-40 lg:hidden transition-opacity"
          onClick={onClose}
        />
      )}

      <aside className={clsx(
        "fixed lg:static inset-y-0 left-0 w-72 bg-[#0a3d62] text-white z-50 transform transition-transform duration-200 ease-in-out lg:translate-x-0",
        isOpen ? "translate-x-0" : "-translate-x-full"
      )}>
        <div className="h-full flex flex-col">
          {/* Logo & Close Button */}
          <div className="p-6 flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-white rounded-xl flex items-center justify-center">
                <span className="text-[#0a3d62] font-bold text-xl uppercase">W</span>
              </div>
              <h1 className="text-xl font-black tracking-tighter uppercase italic">WhatsApp</h1>
            </div>
            <button onClick={onClose} className="lg:hidden p-2 hover:bg-white/10 rounded-lg">
              <X className="w-6 h-6" />
            </button>
          </div>

          {/* Navigation Items */}
          <nav className="flex-1 px-4 py-4 space-y-1 overflow-y-auto">
            {currentMenu.map((item) => {
              return (
                <NavLink
                  key={item.path}
                  to={item.path}
                  onClick={onClose}
                  className={({ isActive }) => clsx(
                    "flex items-center gap-3 px-4 py-3 rounded-xl transition-all duration-200 group",
                    isActive 
                      ? "bg-white text-[#0a3d62] shadow-lg font-medium" 
                      : "text-white/70 hover:bg-white/10 hover:text-white"
                  )}
                >
                  <item.icon className="w-5 h-5" />
                  <span>{item.title}</span>
                </NavLink>
              );
            })}
          </nav>

          {/* User Section & Logout */}
          <div className="p-4 border-t border-white/10">
            <button 
              onClick={logout}
              className="w-full flex items-center gap-3 px-4 py-3 rounded-xl text-white/70 hover:bg-red-500 hover:text-white transition-all duration-200"
            >
              <LogOut className="w-5 h-5" />
              <span>Logout</span>
            </button>
          </div>
        </div>
      </aside>
    </>
  );
}
