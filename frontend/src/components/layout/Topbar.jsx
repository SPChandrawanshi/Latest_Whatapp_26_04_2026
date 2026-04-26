import React from 'react';
import { Menu, Bell, Search, UserCircle } from 'lucide-react';
import { useAuth } from '../../context/AuthContext';

export function Topbar({ onMenuClick }) {
  const { user } = useAuth();

  return (
    <header className="h-20 bg-white border-b border-slate-200 px-6 flex items-center justify-between sticky top-0 z-30 shadow-sm">
      <div className="flex items-center gap-4 flex-1">
        <button 
          onClick={onMenuClick}
          className="p-2 lg:hidden hover:bg-slate-100 rounded-lg transition-colors border border-slate-200 shadow-sm"
        >
          <Menu className="w-6 h-6 text-slate-600" />
        </button>

        <div className="max-w-md w-full relative hidden md:block">
          <Search className="w-5 h-5 absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" />
          <input 
            type="text" 
            placeholder="Search leads, chats, or tasks..." 
            className="w-full pl-10 pr-4 py-2 bg-slate-50 border border-slate-200 rounded-xl focus:outline-none focus:border-primary focus:bg-white transition-all text-sm"
          />
        </div>
      </div>

      <div className="flex items-center gap-4">
        <button className="p-2 text-slate-500 hover:text-primary hover:bg-slate-50 rounded-xl transition-all relative">
          <Bell className="w-5 h-5" />
          <span className="absolute top-2 right-2 w-2 h-2 bg-red-500 rounded-full border-2 border-white"></span>
        </button>

        <div className="h-10 w-[1px] bg-slate-200 mx-1"></div>

        <div className="flex items-center gap-3 pl-2">
          <div className="text-right hidden sm:block">
            <p className="text-sm font-semibold text-slate-800 leading-none capitalize">{user?.name || "User"}</p>
            <p className="text-[11px] font-medium text-primary mt-1 px-2 py-0.5 bg-primary/10 rounded-full inline-block uppercase tracking-wider">
              {user?.role}
            </p>
          </div>
          <div className="w-10 h-10 rounded-xl bg-slate-100 flex items-center justify-center border border-slate-200 overflow-hidden shadow-sm hover:border-primary transition-all cursor-pointer">
            <UserCircle className="w-8 h-8 text-slate-400" />
          </div>
        </div>
      </div>
    </header>
  );
}
