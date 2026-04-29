import React, { useState } from 'react';
import { Settings, User, Bell, Save, Mail, Phone, Clock, Shield } from 'lucide-react';
import { useToast } from '../../context/ToastContext';
import { clsx } from 'clsx';
import { Input } from '../../components/common/Input';

export default function SettingsPage() {
  const { showToast } = useToast();
  const [activeTab, setActiveTab] = useState('Profile');

  const handleSave = () => {
    showToast('Counselor Profile Updated Successfully', 'success');
  };

  const tabs = [
    { n: 'Profile', i: User },
    { n: 'Preferences', i: Settings },
    { n: 'Alerts', i: Bell },
  ];

  return (
    <div className="space-y-10 pb-12">
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 mb-10">
        <div>
          <h2 className="text-[12px] font-bold text-[#0a3d62] uppercase tracking-tight">Counselor Settings</h2>
          <p className="text-slate-400 mt-0.5 font-normal text-[12px] tracking-wide flex items-center gap-2">
            <div className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
            Manage your personal profile and daily notification alerts
          </p>
        </div>
        <button 
          onClick={handleSave}
          className="px-8 py-3 bg-[#0a3d62] text-white rounded-xl shadow-premium font-bold uppercase text-[11px] tracking-widest flex items-center gap-2 hover:translate-y-[-2px] transition-all active:scale-95"
        >
           <Save className="w-4 h-4" />
           Sync Preferences
        </button>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-4 gap-10">
         <div className="lg:col-span-1 space-y-3">
            {tabs.map(t => (
              <button 
                key={t.n}
                onClick={() => setActiveTab(t.n)}
                className={clsx(
                  "w-full flex items-center gap-4 px-5 py-3 rounded-2xl text-[12px] font-bold tracking-tight transition-all border",
                  activeTab === t.n ? 'bg-[#0a3d62] text-white border-[#0a3d62] shadow-premium' : 'bg-white text-slate-400 border-transparent hover:border-slate-100'
                )}
              >
                <t.i className="w-5 h-5" />
                {t.n}
              </button>
            ))}
         </div>

         <div className="lg:col-span-3 bg-white p-8 rounded-[2.5rem] shadow-premium border border-slate-50 relative overflow-hidden group">
             <div className="animate-in fade-in slide-in-from-right-4 duration-500" key={activeTab}>
                {activeTab === 'Profile' && (
                  <div className="space-y-8 max-w-2xl">
                     <div className="flex items-center gap-6 p-6 bg-slate-50/50 rounded-3xl border border-slate-100">
                        <div className="w-16 h-16 bg-white rounded-2xl flex items-center justify-center text-2xl shadow-premium border border-slate-50">👩‍💼</div>
                        <div>
                           <h4 className="font-bold text-[#0a3d62] text-[15px]">Personal Identity</h4>
                           <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">Counselor Node Active</p>
                        </div>
                     </div>
                     <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <Input label="First Name" defaultValue="Ananya" icon={User} />
                        <Input label="Last Name" defaultValue="Sharma" icon={User} />
                        <Input label="Email" defaultValue="counselor@crm.com" icon={Mail} />
                        <Input label="Phone" defaultValue="+91 88888 77777" icon={Phone} />
                     </div>
                  </div>
                )}

                {activeTab === 'Preferences' && (
                  <div className="space-y-6 max-w-2xl">
                     <Input label="Daily Lead Cap" defaultValue="50 Leads" icon={Settings} />
                     <div className="p-6 bg-[#0a3d62]/5 rounded-2xl border border-[#0a3d62]/10">
                        <p className="text-[12px] font-bold text-[#0a3d62] uppercase tracking-tight mb-2">Workspace Theme</p>
                        <div className="flex gap-4">
                           <button className="px-6 py-2 bg-[#0a3d62] text-white rounded-lg text-[10px] font-bold uppercase tracking-widest shadow-premium">Enterprise</button>
                           <button className="px-6 py-2 bg-white text-slate-400 border border-slate-100 rounded-lg text-[10px] font-bold uppercase tracking-widest hover:border-[#0a3d62] hover:text-[#0a3d62]">Zen Mode</button>
                        </div>
                     </div>
                  </div>
                )}

                {activeTab === 'Alerts' && (
                  <div className="space-y-4 max-w-2xl">
                     {[
                       'Lead Assignment Notifications',
                       'Client Message Alerts',
                       'Follow-up Reminders',
                       'System Status Updates'
                     ].map(item => (
                       <label key={item} className="flex justify-between items-center p-5 bg-slate-50/50 hover:bg-white border border-transparent hover:border-slate-100 rounded-2xl transition-all cursor-pointer group shadow-premium" onClick={() => showToast(`${item} Updated`, 'info')}>
                          <span className="text-[12px] font-bold text-slate-600 group-hover:text-[#0a3d62] uppercase tracking-tight">{item}</span>
                          <div className="w-10 h-6 bg-emerald-500 rounded-full p-1 relative">
                             <div className="w-4 h-4 bg-white rounded-full ml-4 transition-all" />
                          </div>
                       </label>
                     ))}
                  </div>
                )}
             </div>
             <div className="absolute top-[-20%] right-[-10%] w-64 h-64 bg-[#0a3d62]/5 rounded-full blur-[80px]" />
         </div>
      </div>
    </div>
  );
}
