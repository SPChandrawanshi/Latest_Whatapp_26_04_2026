import React from 'react';
import { CreditCard, Download, ExternalLink, Calendar, CheckCircle2 } from 'lucide-react';
import { useToast } from '../../context/ToastContext';

export default function Billing() {
  const { showToast } = useToast();
  return (
    <div className="space-y-8">
      <div className="flex justify-between items-start">
        <div>
          <h2 className="text-[20px] font-semibold text-[#0a3d62] uppercase tracking-tight">Billing & Plans</h2>
          <p className="text-slate-400 text-[13px] font-normal mt-0.5 tracking-wide">Subscriptions & Records</p>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Tier Card */}
        <div className="md:col-span-1 bg-[#0a3d62] p-6 rounded-2xl shadow-premium relative overflow-hidden">
           <div className="relative z-10 text-white">
             <div className="w-10 h-10 bg-white/10 rounded-xl flex items-center justify-center mb-4">
               <CreditCard className="w-5 h-5 text-white" />
             </div>
              <p className="text-[12px] font-normal uppercase tracking-wider opacity-60">Current Plan</p>
              <h3 className="text-[16px] font-semibold mt-1">Enterprise Pro</h3>
              <div className="flex items-baseline gap-1 mt-3">
                <span className="text-[16px] font-semibold">$499</span>
                <span className="text-[12px] opacity-60">/month</span>
              </div>
             <hr className="my-6 border-white/10" />
             <div className="space-y-3">
                {['Unlimited Admins', 'WhatsApp API', 'Analytics'].map(f => (
                  <div key={f} className="flex gap-2 items-center">
                    <CheckCircle2 className="w-3 h-3 text-emerald-400" />
                    <span className="text-[13px] font-normal">{f}</span>
                  </div>
                ))}
              </div>
              <button onClick={() => showToast('Redirecting to Upgrade Center', 'info')} className="w-full mt-8 py-2 bg-white text-[#0a3d62] rounded-lg text-[13px] font-semibold uppercase tracking-wide hover:opacity-90 transition-opacity">Upgrade Plan</button>
           </div>
           <div className="absolute bottom-[-20%] left-[-20%] w-64 h-64 bg-white/5 rounded-full blur-[60px]" />
        </div>

        {/* Invoice Area */}
        <div className="md:col-span-2 space-y-6">
           <div className="bg-white p-6 rounded-2xl shadow-premium border border-slate-50 hover:border-[#0a3d62] transition-all">
              <div className="flex justify-between items-center mb-6">
                 <h4 className="text-[16px] font-semibold text-[#0a3d62]">Invoice History</h4>
                 <button className="p-2 bg-slate-50 rounded-lg hover:bg-[#0a3d62] hover:text-white transition-all" onClick={() => showToast('Exporting Records...', 'info')}>
                    <Download className="w-3.5 h-3.5" />
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
                         <div className="w-10 h-10 bg-white rounded-xl shadow-premium flex items-center justify-center">
                            <Calendar className="w-4 h-4 text-slate-400" />
                         </div>
                          <div>
                             <p className="text-[14px] font-semibold text-slate-800">{inv.id}</p>
                             <p className="text-[13px] text-slate-400 font-normal">{inv.date}</p>
                          </div>
                      </div>
                       <div className="flex items-center gap-6">
                          <p className="text-[14px] font-semibold text-[#0a3d62]">{inv.amount}</p>
                         <div className="w-10 h-10 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                            <ExternalLink className="w-4 h-4 text-primary cursor-pointer" />
                         </div>
                      </div>
                   </div>
                 ))}
              </div>
           </div>

           <div className="bg-emerald-50 p-6 rounded-2xl border border-emerald-100 flex items-center justify-between">
              <div className="flex gap-4 items-center">
                 <div className="w-10 h-10 bg-emerald-500 rounded-xl flex items-center justify-center text-white shadow-premium">
                    <CheckCircle2 className="w-5 h-5" />
                 </div>
                  <div>
                     <h5 className="font-semibold text-emerald-900 text-[14px] Customering-none">Auto-pay Active</h5>
                     <p className="text-[13px] font-normal text-emerald-600 mt-1 tracking-tight">Next: May 20, 2026</p>
                  </div>
              </div>
              <button onClick={() => showToast('Payment Controls Active', 'info')} className="text-[10px] font-bold text-emerald-700 bg-white px-4 py-1.5 rounded-lg shadow-premium border border-emerald-100 uppercase tracking-wider hover:bg-emerald-500 hover:text-white transition-all">Manage</button>
           </div>
        </div>
      </div>
    </div>
  );
}
