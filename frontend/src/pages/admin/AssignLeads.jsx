import React from 'react';
import { ListTodo, ArrowRight, UserPlus, Zap, Clock, CheckCircle2 } from 'lucide-react';
import { Button } from '../../components/common/Button';

export default function AssignLeads() {
  return (
    <div className="space-y-8">
      <div className="flex justify-between items-start">
        <div>
          <h2 className="text-3xl font-black text-[#0a3d62] tracking-tighter uppercase italic">LEAD ASSIGNMENT</h2>
          <p className="text-slate-400 text-sm font-bold uppercase tracking-widest mt-1">Allocate Incoming Traffic to Highest Performing Agents</p>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
        {/* Unassigned Pool */}
        <div className="lg:col-span-7 bg-white p-8 rounded-[2.5rem] shadow-premium border border-slate-50 hover:border-[#0a3d62] transition-all group">
           <div className="flex justify-between items-center mb-8">
              <h4 className="text-lg font-black text-[#0a3d62] flex items-center gap-2">
                 <Zap className="w-5 h-5 text-amber-500 fill-amber-500" />
                 Incoming Unassigned Pool
              </h4>
              <span className="px-3 py-1 bg-amber-50 text-amber-600 rounded-lg text-[10px] font-black uppercase tracking-widest">12 Leads Pending</span>
           </div>

           <div className="space-y-4">
              {[
                { name: "Unknown Lead #782", source: "Facebook Ads", time: "2m ago" },
                { name: "John Doe (Inquiry)", source: "WhatsApp Direct", time: "15m ago" },
                { name: "S. Malik", source: "Google Search", time: "1h ago" },
              ].map((lead, i) => (
                <div key={i} className="flex items-center justify-between p-5 bg-slate-50/50 rounded-2xl border border-transparent hover:border-slate-200 hover:bg-white transition-all">
                   <div className="flex items-center gap-4">
                      <div className="w-12 h-12 bg-white rounded-2xl shadow-sm flex items-center justify-center text-[#0a3d62] font-black">
                         #
                      </div>
                      <div>
                         <p className="text-sm font-black text-slate-800">{lead.name}</p>
                         <p className="text-[10px] text-slate-400 font-bold uppercase tracking-tighter">{lead.source} • <span className="text-amber-500">{lead.time}</span></p>
                      </div>
                   </div>
                   <button className="p-3 bg-[#0a3d62] text-white rounded-xl hover:scale-105 transition-transform">
                      <ArrowRight className="w-4 h-4" />
                   </button>
                </div>
              ))}
           </div>
        </div>

        {/* Quick Assign Panel */}
        <div className="lg:col-span-5 space-y-6">
           <div className="bg-[#0a3d62] p-8 rounded-[2.5rem] shadow-xl text-white relative overflow-hidden">
              <div className="relative z-10">
                 <h4 className="text-lg font-black mb-4">Auto-Assignment</h4>
                 <p className="text-xs font-bold text-white/60 leading-relaxed mb-6">Enable AI-based lead distribution to ensure no lead stays in the pool for more than 5 minutes.</p>
                 <div className="flex items-center gap-3 p-4 bg-white/5 rounded-2xl border border-white/10 mb-8">
                    <Clock className="w-5 h-5 text-emerald-400" />
                    <div>
                       <p className="text-[10px] font-black uppercase opacity-60">Status</p>
                       <p className="text-xs font-black">Active • Optimizing for Team A</p>
                    </div>
                 </div>
                 <Button className="w-full bg-white text-[#0a3d62] hover:bg-emerald-500 hover:text-white border-transparent py-6 font-black uppercase text-xs tracking-[0.2em] rounded-2xl">
                    Configure Auto-Assign
                 </Button>
              </div>
              <div className="absolute top-[-20%] right-[-10%] w-48 h-48 bg-white/5 rounded-full blur-[40px]" />
           </div>

           <div className="bg-white p-8 rounded-[2.5rem] shadow-premium border border-slate-50 flex items-center justify-between group hover:border-[#0a3d62] transition-all">
              <div className="flex gap-4 items-center">
                 <div className="w-12 h-12 bg-indigo-50 text-indigo-500 rounded-2xl flex items-center justify-center">
                    <CheckCircle2 className="w-6 h-6" />
                 </div>
                 <div>
                    <h5 className="font-black text-[#0a3d62] leading-none">Manual Batch</h5>
                    <p className="text-[10px] font-bold text-slate-400 mt-1 uppercase tracking-tighter">Bulk assign up to 50 leads</p>
                 </div>
              </div>
              <button className="w-10 h-10 flex items-center justify-center bg-slate-50 rounded-xl group-hover:bg-[#0a3d62] group-hover:text-white transition-all">
                 <UserPlus className="w-5 h-5" />
              </button>
           </div>
        </div>
      </div>
    </div>
  );
}
