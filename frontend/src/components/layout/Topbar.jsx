import React, { useState } from 'react';
import { Menu, Bell, Search, UserCircle, LogOut, Settings, User, ChevronDown } from 'lucide-react';
import { useAuth } from '../../context/AuthContext';
import { clsx } from 'clsx';
import { useNavigate } from 'react-router-dom';

export function Topbar({ onMenuClick }) {
  const { user, logout } = useAuth();
  const [isProfileOpen, setIsProfileOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate('/login');
  };

  return (
    <header className="h-20 bg-white border-b border-slate-200 px-6 flex items-center justify-between sticky top-0 z-30 shadow-sm">
      <div className="flex items-center gap-4 flex-1">
        <button 
          onClick={onMenuClick}
          className="p-2 lg:hidden hover:bg-slate-100 rounded-lg transition-all border border-slate-200 shadow-sm active:scale-95"
          title="Open Menu"
        >
          <Menu className="w-6 h-6 text-slate-600" />
        </button>

        <div className="max-w-md w-full relative hidden md:block group">
          <Search className={clsx(
            "w-5 h-5 absolute left-3 top-1/2 -translate-y-1/2 transition-colors",
            searchQuery ? "text-primary" : "text-slate-400 group-hover:text-slate-600"
          )} />
          <input 
            type="text" 
            placeholder="Search leads, chats, or tasks..." 
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full pl-10 pr-4 py-2.5 bg-slate-50 border border-slate-200 rounded-xl focus:outline-none focus:border-primary focus:bg-white transition-all text-sm shadow-inner"
          />
        </div>
      </div>

      <div className="flex items-center gap-4">
        <button 
          className="p-2.5 text-slate-500 hover:text-primary hover:bg-primary/5 rounded-xl transition-all relative group active:scale-90"
          onClick={() => alert('Notifications coming soon!')}
          title="Notifications"
        >
          <Bell className="w-5 h-5 group-hover:rotate-12 transition-transform" />
          <span className="absolute top-2.5 right-2.5 w-2 h-2 bg-rose-500 rounded-full border-2 border-white animate-pulse"></span>
        </button>

        <div className="h-8 w-[1px] bg-slate-100 mx-2"></div>

        <div className="relative">
          <button 
            onClick={() => setIsProfileOpen(!isProfileOpen)}
            className="flex items-center gap-3 pl-2 group active:scale-95 transition-transform"
          >
            <div className="text-right hidden sm:block">
              <p className="text-sm font-black text-slate-800 leading-none capitalize">{user?.name || "User"}</p>
              <p className="text-[10px] font-black text-primary mt-1 px-2 py-0.5 bg-primary/10 rounded-lg inline-block uppercase tracking-widest">
                {user?.role}
              </p>
            </div>
            <div className={clsx(
              "w-10 h-10 rounded-xl bg-slate-50 flex items-center justify-center border transition-all overflow-hidden shadow-sm",
              isProfileOpen ? "border-primary ring-4 ring-primary/5 shadow-inner" : "border-slate-200 group-hover:border-primary group-hover:shadow-md"
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
              <div className="absolute right-0 mt-3 w-56 bg-white rounded-2xl shadow-2xl border border-slate-100 py-2 z-50 animate-in fade-in slide-in-from-top-2 duration-200">
                <div className="px-4 py-3 border-b border-slate-50 mb-1">
                  <p className="text-xs font-black text-slate-400 uppercase tracking-widest">Account Info</p>
                  <p className="text-sm font-bold text-slate-800 mt-1">{user?.email}</p>
                </div>
                
                <button 
                  className="w-full flex items-center gap-3 px-4 py-2.5 text-sm font-bold text-slate-600 hover:bg-slate-50 hover:text-primary transition-all text-left"
                  onClick={() => { navigate(`/${user?.role}/settings`); setIsProfileOpen(false); }}
                >
                  <User className="w-4 h-4" />
                  My Profile
                </button>
                <button 
                  className="w-full flex items-center gap-3 px-4 py-2.5 text-sm font-bold text-slate-600 hover:bg-slate-50 hover:text-primary transition-all text-left"
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
