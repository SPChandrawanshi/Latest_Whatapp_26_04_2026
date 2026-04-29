import React, { useState } from 'react';
import { Settings, Bell, Shield, User, Save, Key, Mail, Phone, Globe } from 'lucide-react';
import { clsx } from 'clsx';
import { Button } from '../../components/common/Button';
import { Input } from '../../components/common/Input';
import { useToast } from '../../context/ToastContext';
import { useAuth } from '../../context/AuthContext';
import { userApi } from '../../api/userApi';

export default function SettingsPage() {
  const [activeTab, setActiveTab] = useState('Profile');
  const [isSaving, setIsSaving] = useState(false);
  const { showToast } = useToast();
  const { user, login } = useAuth(); // use login to update local storage user if needed

  const handleSave = async (e) => {
    e.preventDefault();
    setIsSaving(true);
    try {
      const formData = new FormData(e.target);
      const data = Object.fromEntries(formData.entries());
      
      const res = await userApi.updateProfile(data);
      if (res.success) {
        showToast('Profile & Preferences Synchronized', 'success');
        // Optionally update auth context user object
      }
    } catch (err) {
      showToast('Failed to update profile', 'error');
    } finally {
      setIsSaving(false);
    }
  };

  const tabs = [
    { name: 'Profile', icon: User },
    { name: 'Security', icon: Shield },
    { name: 'Notifications', icon: Bell },
    { name: 'Social Keys', icon: Key },
  ];

  return (
    <div className="space-y-10 pb-12">
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
        <div>
          <h2 className="text-[12px] font-bold text-[#0a3d62] uppercase tracking-tight">Authority & Preferences</h2>
          <div className="text-slate-400 mt-0.5 font-normal text-[12px] tracking-wide flex items-center gap-2">
            <div className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
            Manage your administrative identity and system alerts
          </div>
        </div>
        <button 
          onClick={() => {
             const profileBtn = document.getElementById('submit-profile-btn');
             const securityBtn = document.getElementById('submit-security-btn');
             if(profileBtn) profileBtn.click();
             else if(securityBtn) securityBtn.click();
             else showToast('Settings saved locally', 'info');
          }} 
          className="px-8 py-3 bg-[#0a3d62] text-white rounded-xl shadow-premium font-bold uppercase text-[11px] tracking-widest flex items-center gap-3 transition-all hover:translate-y-[-2px] active:scale-95"
        >
           <Save className="w-4 h-4" />
           {isSaving ? 'Syncing...' : 'Save All Changes'}
        </button>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-4 gap-10">
        {/* Navigation Sidebar */}
        <div className="lg:col-span-1 space-y-3">
           {tabs.map(tab => (
             <button
                key={tab.name}
                onClick={() => setActiveTab(tab.name)}
                className={clsx(
                  "w-full flex items-center gap-4 px-5 py-3.5 rounded-2xl text-[12px] font-bold tracking-tight transition-all active:scale-95 border",
                  activeTab === tab.name 
                    ? 'bg-[#0a3d62] text-white border-[#0a3d62] shadow-premium grow-active' 
                    : 'bg-white text-slate-400 border-transparent hover:border-slate-100 hover:text-[#0a3d62]'
                )}
             >
                <tab.icon className={clsx("w-5 h-5", activeTab === tab.name ? 'text-white' : 'text-slate-200')} />
                {tab.name}
             </button>
           ))}
        </div>

        {/* Form Content Area */}
        <div className="lg:col-span-3 bg-white p-8 rounded-[2.5rem] shadow-premium border border-slate-50 relative overflow-hidden">
            <div className="animate-in fade-in slide-in-from-right-4 duration-500" key={activeTab}>
               {activeTab === 'Profile' && (
                 <form onSubmit={handleSave} className="space-y-8 max-w-2xl">
                    <div className="flex items-center gap-8 mb-10 p-6 bg-slate-50 rounded-3xl border border-slate-100">
                      <div className="w-20 h-20 bg-white rounded-2xl border-2 border-[#0a3d62] flex items-center justify-center text-3xl shadow-premium">👤</div>
                      <div>
                        <h4 className="font-bold text-[#0a3d62] text-[16px]">Admin Identity</h4>
                        <p className="text-[11px] font-bold text-slate-400 uppercase mt-1">Platform Administrator Access</p>
                      </div>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <Input label="Display Name" name="fullName" defaultValue={user?.fullName || "Admin User"} icon={User} />
                      <Input label="Contact Email" name="email" defaultValue={user?.email || "admin@crm.com"} icon={Mail} />
                      <Input label="Mobile Node" name="phone" defaultValue={user?.phone || "+91 99999 88888"} icon={Phone} />
                      <Input label="Company Node" defaultValue="Enterprise CRM" icon={Globe} />
                    </div>
                    <button type="submit" className="hidden" id="submit-profile-btn"></button>
                 </form>
               )}

               {activeTab === 'Security' && (
                 <form onSubmit={handleSave} className="space-y-8 max-w-2xl">
                    <Input label="Vault Key (Current)" name="currentPassword" type="password" placeholder="••••••••" icon={Shield} required />
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <Input label="New Key" name="newPassword" type="password" placeholder="••••••••" required />
                      <Input label="Verify New Key" type="password" placeholder="••••••••" required />
                    </div>
                    <div className="p-8 bg-[#0a3d62] text-white rounded-3xl flex items-center justify-between shadow-premium relative overflow-hidden">
                       <div className="z-10">
                          <p className="text-[14px] font-bold uppercase tracking-tight">Two-Step Verification</p>
                          <p className="text-[11px] opacity-60 mt-1">Add an extra layer of system security</p>
                       </div>
                       <button type="button" onClick={() => showToast('2FA Setup Initialized', 'info')} className="px-6 py-2.5 bg-white text-[#0a3d62] rounded-xl text-[10px] font-bold uppercase tracking-widest z-10 hover:bg-emerald-500 hover:text-white transition-all shadow-premium">Setup Now</button>
                       <div className="absolute top-0 right-0 w-32 h-32 bg-white/5 rounded-full blur-3xl translate-x-12 translate-y-[-12px]" />
                    </div>
                    <button type="submit" className="hidden" id="submit-security-btn"></button>
                 </form>
               )}

               {activeTab === 'Notifications' && (
                 <div className="space-y-4 max-w-2xl">
                    {[
                      { l: 'Instant Push Alerts', s: 'Immediate notifications on client updates' },
                      { l: 'Audit Log Emails', s: 'Daily summary of platform transactions' },
                      { l: 'Critical Error Sounds', s: 'Audio cues for system malfunctions' },
                      { l: 'Weekly Performance Report', s: 'Consolidated KPI breakdown' }
                    ].map((item, i) => (
                      <div key={item.l} className="flex items-center justify-between p-6 bg-slate-50/50 hover:bg-white rounded-2xl transition-all border border-transparent hover:border-slate-100 group shadow-premium">
                         <div>
                            <p className="text-[12px] font-bold text-[#0a3d62] uppercase tracking-tight">{item.l}</p>
                            <p className="text-[11px] text-slate-400 mt-1">{item.s}</p>
                         </div>
                         <div className="w-12 h-6 bg-emerald-500 rounded-full p-1 shadow-inner cursor-pointer" onClick={() => showToast(`${item.l} Toggled`, 'info')}>
                            <div className="w-4 h-4 bg-white rounded-full ml-6 transition-all" />
                         </div>
                      </div>
                    ))}
                 </div>
               )}

               {activeTab === 'Social Keys' && (
                 <div className="space-y-8 max-w-2xl">
                    <div className="p-6 bg-amber-50 rounded-2xl border border-amber-100 flex gap-4">
                       <Shield className="w-10 h-10 text-amber-500 opacity-40 shrink-0" />
                       <p className="text-[12px] text-amber-900 font-medium Customering-relaxed">Access keys are for binary integration only. Do not share your platform Master Token with unauthorized personnel.</p>
                    </div>
                    <Input label="WhatsApp Master Node Key" type="password" defaultValue="wa_master_8273498b7324" icon={Key} />
                    <Input label="Webhook Endpoint Gateway" defaultValue="https://api.crm.com/v1/meta/webhook" icon={Globe} />
                 </div>
               )}
            </div>
            
            <div className="absolute top-[-20%] right-[-10%] w-64 h-64 bg-[#0a3d62]/5 rounded-full blur-[80px]" />
        </div>
      </div>
    </div>
  );
}
