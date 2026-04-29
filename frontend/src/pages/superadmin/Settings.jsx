import React, { useState } from 'react';
import { Settings, Bell, Shield, Globe, User, Save, Key } from 'lucide-react';
import { clsx } from 'clsx';
import { Button } from '../../components/common/Button';
import { Input } from '../../components/common/Input';
import { useToast } from '../../context/ToastContext';

export default function SettingsPage() {
  const [activeTab, setActiveTab] = useState('General');
  const [isSaving, setIsSaving] = useState(false);
  const [notifications, setNotifications] = useState({
    'Browser Notifications': true,
    'Email Alerts': true,
    'Weekly Reports': false,
    'Real-time Chat Sounds': true
  });

  const { showToast } = useToast();

  const handleSave = () => {
    setIsSaving(true);
    setTimeout(() => {
      setIsSaving(false);
      showToast('System Configuration Synchronized', 'success');
    }, 1200);
  };

  const handleToggle = (item) => {
    setNotifications(prev => ({ ...prev, [item]: !prev[item] }));
  };

  const tabs = [
    { name: 'General', icon: Settings },
    { name: 'Profile', icon: User },
    { name: 'API & Keys', icon: Key },
    { name: 'Security', icon: Shield },
    { name: 'Notifications', icon: Bell },
  ];

  return (
    <div className="space-y-10 pb-12">
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 mb-10">
        <div>
          <h2 className="text-[20px] font-semibold text-[#0a3d62] uppercase tracking-tight">System Configuration</h2>
          <p className="text-slate-400 mt-0.5 font-normal text-[13px] tracking-wide flex items-center gap-2">
            <div className="w-1.5 h-1.5 rounded-full bg-[#0a3d62]/40" />
            Platform Logic • Global Variables • Admin Authority
          </p>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-4 gap-10">
        {/* Sidebar Tabs - XL POWER BUTTONS */}
        <div className="lg:col-span-1 space-y-4">
           {tabs.map(tab => (
             <button
                key={tab.name}
                onClick={() => setActiveTab(tab.name)}
                className={clsx(
                  "w-full flex items-center justify-between px-4 py-2.5 rounded-lg text-[14px] font-medium tracking-tight transition-all active:scale-95 shadow-premium border",
                  activeTab === tab.name 
                    ? 'bg-[#0a3d62] text-white border-[#0a3d62] shadow-premium shadow-[#0a3d62]/20 translate-x-4' 
                    : 'bg-white text-slate-400 border-transparent hover:border-slate-100 hover:text-[#0a3d62]'
                )}
             >
                <div className="flex items-center gap-4">
                  <tab.icon className={clsx("w-6 h-6", activeTab === tab.name ? 'text-white/40' : 'text-slate-400')} />
                  {tab.name}
                </div>
                {activeTab === tab.name && <div className="w-2 h-2 rounded-full bg-emerald-400" />}
             </button>
           ))}
        </div>

        {/* Content Area */}
        <div className="lg:col-span-3 bg-white p-6 rounded-2xl shadow-premium border border-slate-50 relative overflow-hidden group hover:border-[#0a3d62] transition-all">
           <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 mb-12">
              <h4 className="text-[16px] font-semibold text-[#0a3d62] uppercase flex items-center gap-3 tracking-tight">
                 {activeTab} Management
                 <div className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
              </h4>
              <button 
                onClick={handleSave} 
                className="px-4 py-1.5 bg-[#0a3d62] text-white rounded-lg shadow-premium font-bold uppercase text-[10px] tracking-wider flex items-center gap-2 transition-all"
              >
                 <Save className="w-4 h-4" />
                 {isSaving ? 'Syncing...' : 'Updates'}
              </button>
           </div>

            <div className="space-y-8 max-w-3xl animate-in fade-in slide-in-from-right-4 duration-500" key={activeTab}>
               {activeTab === 'General' && (
                 <>
                   <Input label="App Identifier" placeholder="WhatsApp CRM" defaultValue="WhatsApp CRM" />
                   <Input label="System Support Node" placeholder="support@whatsapp.com" defaultValue="support@whatsapp.com" />
                   <div className="space-y-2 text-left">
                     <label className="text-[13px] font-medium text-slate-700 ml-1">Temporal Sync (Timezone)</label>
                     <select className="w-full px-6 py-4 rounded-2xl border border-slate-100 bg-slate-50/50 text-sm font-bold text-[#0a3d62] focus:outline-none focus:border-[#0a3d62] focus:bg-white transition-all appearance-none cursor-pointer">
                       <option>UTC +5:30 (India Standard Time)</option>
                       <option>UTC +0:00 (Greenwich Mean Time)</option>
                       <option>UTC -5:00 (Eastern Standard Time)</option>
                     </select>
                   </div>
                 </>
               )}

               {activeTab === 'Profile' && (
                 <>
                   <div className="flex items-center gap-6 mb-6 p-6 bg-slate-50 rounded-2xl border border-slate-100 group/prof">
                     <div className="w-24 h-24 bg-white rounded-[2rem] border-2 border-[#0a3d62] flex items-center justify-center text-4xl shadow-premium group-hover/prof:scale-110 transition-transform">👑</div>
                     <div>
                       <h5 className="font-bold text-[#0a3d62] text-lg">System Artifact</h5>
                       <p className="text-[10px] font-bold text-slate-400 uppercase mt-1">Super Admin Authority Matrix</p>
                       <button onClick={() => showToast('Accessing Filesystem...', 'info')} className="px-6 py-3 bg-[#0a3d62] text-white rounded-xl text-[10px] font-bold uppercase tracking-widest mt-4 hover:opacity-90 active:scale-95 transition-all">Change Identity</button>
                     </div>
                   </div>
                   <Input label="Full Authority Name" defaultValue="Admin User" />
                   <Input label="Strategic Designation" defaultValue="Chief Information Officer" />
                 </>
               )}

               {activeTab === 'API & Keys' && (
                 <div className="space-y-6">
                   <div className="p-8 bg-[#0a3d62]/5 border border-[#0a3d62]/10 rounded-[2.5rem]">
                     <p className="text-sm font-bold text-[#0a3d62] Customering-relaxed italic">"API keys grant direct binary access to core system infrastructure. Handle with absolute confidentiality."</p>
                   </div>
                   <Input label="Master WhatsApp API Token" type="password" defaultValue="sk_wa_8273948723948" />
                   <Input label="Event Webhook Gateway" defaultValue="https://api.crm.com/webhooks/whatsapp" />
                 </div>
               )}

               {activeTab === 'Security' && (
                 <>
                   <Input label="Current Vault Key" type="password" placeholder="••••••••" />
                   <Input label="New Vault Key" type="password" placeholder="••••••••" />
                   <div className="p-8 bg-black text-white rounded-[2.5rem] flex items-center justify-between shadow-premium relative overflow-hidden group/sec">
                     <div className="relative z-10">
                       <p className="text-lg font-bold tracking-tighter uppercase italic">Dual-Factor Verification</p>
                       <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest mt-1">Enhanced Cryptographic Protection</p>
                     </div>
                     <button onClick={() => showToast('2FA Configurator Launched', 'info')} className="px-6 py-3 bg-white text-black rounded-xl text-xs font-bold uppercase tracking-wider relative z-10 hover:bg-emerald-400 transition-colors">Activate</button>
                     <div className="absolute top-0 right-0 w-32 h-32 bg-emerald-400/20 rounded-full blur-3xl group-hover/sec:scale-150 transition-transform duration-700" />
                   </div>
                 </>
               )}

               {activeTab === 'Notifications' && (
                 <div className="space-y-4">
                   {Object.keys(notifications).map((item, i) => (
                     <button 
                       key={i} 
                       onClick={() => handleToggle(item)}
                       className="w-full flex items-center justify-between p-6 bg-slate-50/50 hover:bg-white hover:shadow-premium rounded-[2rem] transition-all group/toggle border border-transparent hover:border-slate-100"
                     >
                       <span className={clsx("text-xs font-bold uppercase tracking-wider transition-colors", notifications[item] ? "text-[#0a3d62]" : "text-slate-400")}>{item}</span>
                       <div className={clsx(
                         "w-12 h-6 rounded-full relative p-1 shadow-inner transition-colors duration-300",
                         notifications[item] ? "bg-emerald-500" : "bg-slate-300"
                       )}>
                         <div className={clsx(
                           "w-4 h-4 bg-white rounded-full transition-all duration-300 shadow-premium",
                           notifications[item] ? "ml-6" : "ml-0"
                         )} />
                       </div>
                     </button>
                   ))}
                 </div>
               )}

               <div className="pt-10 border-t border-slate-100">
                  <h5 className="text-[9px] font-bold text-rose-500 uppercase tracking-wider mb-4">Protocol Failure Zone</h5>
                  <button 
                   onClick={() => { if(confirm('CRITICAL: Proceed?')) showToast('System Locked', 'error'); }}
                   className="px-6 py-3.5 bg-rose-50 text-rose-600 rounded-xl text-xs font-bold uppercase tracking-wider border border-rose-100 hover:bg-rose-600 hover:text-white transition-all active:scale-95 shadow-premium"
                  >
                    Protocol Failure
                  </button>
               </div>
            </div>
            <div className="absolute top-[-20%] right-[-10%] w-64 h-64 bg-primary/5 rounded-full blur-[80px] group-hover:bg-primary/10 transition-colors pointer-events-none" />
        </div>
      </div>
    </div>
  );
}
