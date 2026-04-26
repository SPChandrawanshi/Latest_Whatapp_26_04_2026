import React from 'react';
import { CreditCard, Download, ExternalLink, Calendar, CheckCircle2 } from 'lucide-react';

export default function Billing() {
  return (
    <div className="space-y-8">
      <div className="flex justify-between items-start">
        <div>
          <h2 className="text-3xl font-black text-[#0a3d62] tracking-tighter">BILLING & PLANS</h2>
          <p className="text-slate-400 text-sm font-bold uppercase tracking-widest mt-1">Manage Subscriptions and Financial Records</p>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Tier Card */}
        <div className="md:col-span-1 bg-[#0a3d62] p-10 rounded-[3rem] shadow-2xl relative overflow-hidden">
           <div className="relative z-10 text-white">
             <div className="w-12 h-12 bg-white/10 rounded-2xl flex items-center justify-center mb-6">
               <CreditCard className="w-6 h-6 text-white" />
             </div>
             <p className="text-[10px] font-black uppercase tracking-[0.2em] opacity-60">Your Current Plan</p>
             <h3 className="text-3xl font-black mt-2">Enterprise Pro</h3>
             <div className="flex items-baseline gap-1 mt-4">
               <span className="text-2xl font-black">$499</span>
               <span className="text-xs opacity-60">/month</span>
             </div>
             <hr className="my-8 border-white/10" />
             <div className="space-y-4">
               {['Unlimited Admins', '24/7 WhatsApp API', 'Advanced Analytics'].map(f => (
                 <div key={f} className="flex gap-2 items-center">
                   <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                   <span className="text-xs font-bold">{f}</span>
                 </div>
               ))}
             </div>
             <button className="w-full mt-10 py-4 bg-white text-[#0a3d62] rounded-2xl text-xs font-black uppercase tracking-widest hover:scale-[1.02] transition-transform">Upgrade Plan</button>
           </div>
           <div className="absolute bottom-[-20%] left-[-20%] w-64 h-64 bg-white/5 rounded-full blur-[60px]" />
        </div>

        {/* Invoice Area */}
        <div className="md:col-span-2 space-y-6">
           <div className="bg-white p-8 rounded-[2.5rem] shadow-premium border border-slate-50 hover:border-[#0a3d62] transition-all">
              <div className="flex justify-between items-center mb-8">
                 <h4 className="text-lg font-black text-[#0a3d62]">Invoice History</h4>
                 <button className="p-2 bg-slate-50 rounded-xl">
                    <Download className="w-4 h-4 text-slate-400" />
                 </button>
              </div>
              <div className="space-y-4">
                 {[
                   { id: 'INV-7821', date: 'April 20, 2026', amount: '$499.00', status: 'Paid' },
                   { id: 'INV-7104', date: 'March 20, 2026', amount: '$499.00', status: 'Paid' },
                   { id: 'INV-6541', date: 'Feb 20, 2026', amount: '$499.00', status: 'Paid' },
                 ].map((inv, i) => (
                   <div key={i} className="flex items-center justify-between p-4 bg-slate-50/50 rounded-2xl hover:bg-white border border-transparent hover:border-slate-100 transition-all group">
                      <div className="flex items-center gap-4">
                         <div className="w-10 h-10 bg-white rounded-xl shadow-sm flex items-center justify-center">
                            <Calendar className="w-4 h-4 text-slate-400" />
                         </div>
                         <div>
                            <p className="text-sm font-black text-slate-800">{inv.id}</p>
                            <p className="text-[10px] text-slate-400 font-bold uppercase">{inv.date}</p>
                         </div>
                      </div>
                      <div className="flex items-center gap-6">
                         <p className="text-sm font-black text-[#0a3d62]">{inv.amount}</p>
                         <div className="w-10 h-10 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                            <ExternalLink className="w-4 h-4 text-primary cursor-pointer" />
                         </div>
                      </div>
                   </div>
                 ))}
              </div>
           </div>

           <div className="bg-emerald-50 p-8 rounded-[2rem] border border-emerald-100 flex items-center justify-between">
              <div className="flex gap-4 items-center">
                 <div className="w-12 h-12 bg-emerald-500 rounded-2xl flex items-center justify-center text-white">
                    <CheckCircle2 className="w-6 h-6" />
                 </div>
                 <div>
                    <h5 className="font-black text-emerald-900 leading-none">Auto-pay Active</h5>
                    <p className="text-xs font-bold text-emerald-600 mt-1 uppercase tracking-tighter">Next payment on May 20, 2026</p>
                 </div>
              </div>
              <button className="text-xs font-black text-emerald-700 bg-white px-4 py-2 rounded-xl shadow-sm border border-emerald-100 uppercase tracking-widest hover:bg-emerald-500 hover:text-white transition-all">Manage Settings</button>
           </div>
        </div>
      </div>
    </div>
  );
}
