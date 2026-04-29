import React, { useState } from 'react';
import { Menu, Bell, Search, UserCircle, LogOut, Settings, User, ChevronDown } from 'lucide-react';
import { useAuth } from '../../context/AuthContext';
import { clsx } from 'clsx';
import { useNavigate } from 'react-router-dom';
import { useToast } from '../../context/ToastContext';

export function Topbar({ onMenuClick }) {
  const { user, logout } = useAuth();
  const { showToast } = useToast();
  const [isProfileOpen, setIsProfileOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate('/login');
  };

  return (
    <header className="h-16 bg-white border-b border-slate-200 px-6 flex items-center justify-between sticky top-0 z-30 shadow-premium">
      <div className="flex items-center gap-6 flex-1">
        <button 
          onClick={onMenuClick}
          className="p-3 lg:hidden hover:bg-[#0a3d62]/5 rounded-2xl transition-all border border-slate-100 shadow-premium active:scale-90"
          title="Open Menu"
        >
          <Menu className="w-7 h-7 text-[#0a3d62]" />
        </button>

        <div className="max-w-md w-full relative hidden md:block group">
          <Search className={clsx(
            "w-4 h-4 absolute left-4 top-1/2 -translate-y-1/2 transition-colors",
            searchQuery ? "text-[#0a3d62]" : "text-slate-300 group-hover:text-slate-500"
          )} />
          <input 
            type="text" 
            placeholder="Search platform..." 
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full pl-10 pr-4 py-2.5 bg-slate-50/50 border border-slate-100 rounded-xl focus:outline-none focus:border-[#0a3d62] focus:bg-white focus:ring-4 focus:ring-[#0a3d62]/5 transition-all text-[14px] font-normal shadow-inner"
          />
        </div>
      </div>

      <div className="flex items-center gap-6">
        <button 
          className="p-2 text-slate-400 hover:text-[#0a3d62] hover:bg-[#0a3d62]/5 rounded-xl transition-all relative group active:scale-90 shadow-premium"
          onClick={() => showToast('Connecting to Notification Engine...', 'info')}
          title="Notifications"
        >
          <Bell className="w-5 h-5 group-hover:rotate-[15deg] transition-transform" />
          <span className="absolute top-2 right-2 w-2.5 h-2.5 bg-rose-500 rounded-full border-[2px] border-white animate-pulse shadow-premium"></span>
        </button>

        <div className="h-10 w-[2px] bg-slate-100 mx-2 rounded-full"></div>

        <div className="relative">
          <button 
            onClick={() => setIsProfileOpen(!isProfileOpen)}
            className="flex items-center gap-4 pl-2 group active:scale-95 transition-transform"
          >
            <div className="text-right hidden sm:block">
               <p className="text-[12px] font-bold text-[#0a3d62] tracking-tight capitalize">{user?.fullName || "User"}</p>
               <p className="text-[10px] font-bold text-white mt-0.5 px-2 py-0.5 bg-[#0a3d62] rounded-full inline-block uppercase tracking-wider">
                 {user?.role}
               </p>
            </div>
            <div className={clsx(
              "w-10 h-10 rounded-xl bg-slate-50 flex items-center justify-center border transition-all overflow-hidden shadow-premium",
              isProfileOpen ? "border-primary ring-4 ring-primary/5 shadow-inner" : "border-slate-200 group-hover:border-primary group-hover:shadow-premium"
            )}>
              <UserCircle className="w-8 h-8 text-slate-400" />
            </div>
            <ChevronDown className={clsx("w-4 h-4 text-slate-400 transition-transform hidden sm:block", isProfileOpen && "rotate-180")} />
          </button>

          {/* Profile Dropdown */}
          {isProfileOpen && (
            <>
              <div 
                className="fixed inset-0 z-40" 
                onClick={() => setIsProfileOpen(false)}
              />
              <div className="absolute right-0 mt-3 w-56 bg-white rounded-2xl shadow-premium border border-slate-100 py-2 z-50 animate-in fade-in slide-in-from-top-2 duration-200">
                <div className="px-4 py-3 border-b border-slate-50 mb-1">
                  <p className="text-[12px] font-normal text-slate-400 uppercase tracking-widest">Account Info</p>
                  <p className="text-[14px] font-normal text-slate-800 mt-1">{user?.email}</p>
                </div>
                
                <button 
                  className="w-full flex items-center gap-3 px-4 py-2.5 text-[14px] font-normal text-slate-600 hover:bg-slate-50 hover:text-[#0a3d62] transition-all text-left"
                  onClick={() => { navigate(`/${user?.role}/settings`); setIsProfileOpen(false); }}
                >
                  <User className="w-4 h-4" />
                  My Profile
                </button>
                <button 
                  className="w-full flex items-center gap-3 px-4 py-2.5 text-[14px] font-normal text-slate-600 hover:bg-slate-50 hover:text-[#0a3d62] transition-all text-left"
                  onClick={() => { navigate(`/${user?.role}/settings`); setIsProfileOpen(false); }}
                >
                  <Settings className="w-4 h-4" />
                  Settings
                </button>
                
                <div className="h-px bg-slate-50 my-1 mx-2"></div>
                
                <button 
                  onClick={handleLogout}
                  className="w-full flex items-center gap-3 px-4 py-2.5 text-sm font-bold text-rose-500 hover:bg-rose-50 transition-all text-left"
                >
                  <LogOut className="w-4 h-4" />
                  Logout
                </button>
              </div>
            </>
          )}
        </div>
      </div>
    </header>
  );
}
