import React, { useState } from 'react';
import { Settings, Bell, Shield, Globe, User, Save, Key } from 'lucide-react';
import { Button } from '../../components/common/Button';
import { Input } from '../../components/common/Input';

export default function SettingsPage() {
  const [activeTab, setActiveTab] = useState('General');
  const [isSaving, setIsSaving] = useState(false);

  const handleSave = () => {
    setIsSaving(true);
    setTimeout(() => {
      setIsSaving(false);
      alert('Settings saved successfully!');
    }, 1500);
  };

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
              <Button onClick={handleSave} className="h-10 px-6 text-[10px] font-black uppercase tracking-widest rounded-xl">
                 <Save className="w-4 h-4 mr-2" />
                 {isSaving ? 'Saving...' : 'Save Changes'}
              </Button>
           </div>

            <div className="space-y-6 max-w-2xl animate-in fade-in slide-in-from-right-4 duration-300" key={activeTab}>
               {activeTab === 'General' && (
                 <>
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
                 </>
               )}

               {activeTab === 'Profile' && (
                 <>
                   <div className="flex items-center gap-6 mb-8 p-6 bg-slate-50 rounded-[2rem] border border-slate-100">
                     <div className="w-20 h-20 bg-white rounded-3xl border-2 border-[#0a3d62] flex items-center justify-center text-3xl shadow-lg">👑</div>
                     <div>
                       <h5 className="font-black text-[#0a3d62]">Profile Picture</h5>
                       <p className="text-[10px] font-bold text-slate-400 uppercase mt-1">PNG or JPG, max 2MB</p>
                       <button className="text-[10px] font-black text-primary uppercase mt-2 hover:underline">Change Photo</button>
                     </div>
                   </div>
                   <Input label="Full Name" defaultValue="Admin User" />
                   <Input label="Job Title" defaultValue="System Administrator" />
                 </>
               )}

               {activeTab === 'API & Keys' && (
                 <div className="space-y-4">
                   <div className="p-6 bg-amber-50 border border-amber-100 rounded-3xl">
                     <p className="text-xs font-bold text-amber-700 leading-relaxed">Keep your API keys secret. Do not share them in public repositories or client-side code.</p>
                   </div>
                   <Input label="WhatsApp API Token" type="password" defaultValue="sk_wa_8273948723948" />
                   <Input label="Webhook URL" defaultValue="https://api.crm.com/webhooks/whatsapp" />
                 </div>
               )}

               {activeTab === 'Security' && (
                 <>
                   <Input label="Current Password" type="password" placeholder="••••••••" />
                   <Input label="New Password" type="password" placeholder="••••••••" />
                   <div className="p-6 bg-blue-50 border border-blue-100 rounded-3xl flex items-center justify-between">
                     <div>
                       <p className="text-sm font-black text-blue-700">Two-Factor Authentication</p>
                       <p className="text-[10px] font-bold text-blue-500 uppercase mt-1">Recommended for high security</p>
                     </div>
                     <button className="px-4 py-2 bg-blue-600 text-white rounded-xl text-[10px] font-black uppercase">Enable</button>
                   </div>
                 </>
               )}

               {activeTab === 'Notifications' && (
                 <div className="space-y-4">
                   {['Browser Notifications', 'Email Alerts', 'Weekly Reports', 'Real-time Chat Sounds'].map((item, i) => (
                     <div key={i} className="flex items-center justify-between p-4 hover:bg-slate-50 rounded-2xl transition-colors">
                       <span className="text-sm font-bold text-slate-700">{item}</span>
                       <button className="w-10 h-5 bg-emerald-500 rounded-full relative p-1 shadow-inner">
                         <div className="w-3 h-3 bg-white rounded-full absolute right-1" />
                       </button>
                     </div>
                   ))}
                 </div>
               )}

               <div className="pt-6 border-t border-slate-50">
                 <h5 className="text-[10px] font-black text-rose-500 uppercase tracking-widest mb-4">Danger Zone</h5>
                 <button 
                  onClick={() => confirm('Warning: Entering maintenance mode will disconnect all active users. Proceed?') && alert('System enters maintenance mode...')}
                  className="px-6 py-3 bg-rose-50 text-rose-600 rounded-2xl text-[10px] font-black uppercase tracking-widest border border-rose-100 hover:bg-rose-600 hover:text-white transition-all active:scale-95"
                 >
                   Maintenance Mode
                 </button>
               </div>
            </div>

           <div className="absolute top-[-20%] right-[-10%] w-64 h-64 bg-primary/5 rounded-full blur-[80px] group-hover:bg-primary/10 transition-colors pointer-events-none" />
        </div>
      </div>
    </div>
  );
}
