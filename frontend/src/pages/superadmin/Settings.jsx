import React, { useState } from 'react';
import { Settings, Bell, Shield, Globe, User, Save, Key } from 'lucide-react';
import { Button } from '../../components/common/Button';
import { Input } from '../../components/common/Input';

export default function SettingsPage() {
  const [activeTab, setActiveTab] = useState('General');

  const tabs = [
    { name: 'General', icon: Settings },
    { name: 'Profile', icon: User },
    { name: 'API & Keys', icon: Key },
    { name: 'Security', icon: Shield },
    { name: 'Notifications', icon: Bell },
  ];

  return (
    <div className="space-y-8">
      <div className="flex justify-between items-start">
        <div>
          <h2 className="text-3xl font-black text-[#0a3d62] tracking-tighter">SYSTEM CONFIG</h2>
          <p className="text-slate-400 text-sm font-bold uppercase tracking-widest mt-1">Configure Global Variables & Platform Logic</p>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
        {/* Sidebar Tabs */}
        <div className="lg:col-span-1 space-y-2">
           {tabs.map(tab => (
             <button
                key={tab.name}
                onClick={() => setActiveTab(tab.name)}
                className={`w-full flex items-center gap-3 px-6 py-4 rounded-2xl font-black text-xs uppercase tracking-widest transition-all ${
                  activeTab === tab.name 
                    ? 'bg-[#0a3d62] text-white shadow-xl translate-x-2' 
                    : 'bg-white text-slate-400 hover:bg-slate-50 border border-transparent hover:border-slate-100'
                }`}
             >
                <tab.icon className={`w-4 h-4 ${activeTab === tab.name ? 'text-white' : 'text-slate-300'}`} />
                {tab.name}
             </button>
           ))}
        </div>

        {/* Content Area */}
        <div className="lg:col-span-3 bg-white p-10 rounded-[3rem] shadow-premium border border-slate-50 relative overflow-hidden group hover:border-[#0a3d62] transition-all">
           <div className="flex justify-between items-center mb-10">
              <h4 className="text-xl font-black text-[#0a3d62] flex items-center gap-3">
                 {activeTab} Settings
                 <div className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
              </h4>
              <Button className="h-10 px-6 text-[10px] font-black uppercase tracking-widest rounded-xl">
                 <Save className="w-4 h-4 mr-2" />
                 Save Changes
              </Button>
           </div>

           <div className="space-y-6 max-w-2xl">
              <Input label="App Name" placeholder="WhatsApp CRM" defaultValue="WhatsApp CRM" />
              <Input label="Support Email" placeholder="support@whatsapp.com" defaultValue="support@whatsapp.com" />
              <div className="space-y-2 text-left">
                <label className="text-[10px] font-black text-slate-400 uppercase tracking-widest ml-1">Timezone</label>
                <select className="w-full px-4 py-3 rounded-xl border border-slate-200 bg-slate-50/50 text-sm font-bold text-slate-700 focus:outline-none focus:border-[#0a3d62] transition-colors appearance-none">
                  <option>UTC +5:30 (India Standard Time)</option>
                  <option>UTC +0:00 (Greenwich Mean Time)</option>
                  <option>UTC -5:00 (Eastern Standard Time)</option>
                </select>
              </div>

              <div className="pt-6 border-t border-slate-50">
                <h5 className="text-[10px] font-black text-rose-500 uppercase tracking-widest mb-4">Danger Zone</h5>
                <button className="px-6 py-3 bg-rose-50 text-rose-600 rounded-xl text-[10px] font-black uppercase tracking-widest border border-rose-100 hover:bg-rose-600 hover:text-white transition-all">Maintenance Mode</button>
              </div>
           </div>

           <div className="absolute top-[-20%] right-[-10%] w-64 h-64 bg-primary/5 rounded-full blur-[80px] group-hover:bg-primary/10 transition-colors pointer-events-none" />
        </div>
      </div>
    </div>
  );
}
