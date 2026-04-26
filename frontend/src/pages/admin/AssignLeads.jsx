import React from 'react';
import { ListTodo, ArrowRight, UserPlus, Zap, Clock, CheckCircle2 } from 'lucide-react';
import { Button } from '../../components/common/Button';
import { clsx } from 'clsx';

export default function AssignLeads() {
  const [isAutoAssign, setIsAutoAssign] = React.useState(true);
  const [selectedLeads, setSelectedLeads] = React.useState([]);

  const handleToggleAuto = () => {
    setIsAutoAssign(!isAutoAssign);
    alert(`Auto-Assignment ${!isAutoAssign ? 'Enabled' : 'Disabled'}`);
  };

  const handleLeadClick = (name) => {
    alert(`Selecting lead: ${name}. Assign to agent?`);
  };

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
                 <Zap className={clsx("w-5 h-5", isAutoAssign ? "text-amber-500 fill-amber-500 animate-pulse" : "text-slate-300")} />
                 Incoming Unassigned Pool
              </h4>
              <span className="px-3 py-1 bg-amber-50 text-amber-600 rounded-lg text-[10px] font-black uppercase tracking-widest border border-amber-100">12 Leads Pending</span>
           </div>

           <div className="space-y-4">
              {[
                { name: "Unknown Lead #782", source: "Facebook Ads", time: "2m ago" },
                { name: "John Doe (Inquiry)", source: "WhatsApp Direct", time: "15m ago" },
                { name: "S. Malik", source: "Google Search", time: "1h ago" },
              ].map((lead, i) => (
                <button 
                  key={i} 
                  onClick={() => handleLeadClick(lead.name)}
                  className="w-full flex items-center justify-between p-5 bg-slate-50/50 rounded-2xl border border-transparent hover:border-slate-200 hover:bg-white hover:translate-x-1 transition-all active:scale-[0.98] group/item shadow-sm"
                >
                   <div className="flex items-center gap-4">
                      <div className="w-12 h-12 bg-white rounded-2xl shadow-sm flex items-center justify-center text-[#0a3d62] font-black border border-slate-100 group-hover/item:bg-[#0a3d62] group-hover/item:text-white transition-all">
                         #
                      </div>
                      <div className="text-left">
                         <p className="text-sm font-black text-slate-800">{lead.name}</p>
                         <p className="text-[10px] text-slate-400 font-bold uppercase tracking-tighter">{lead.source} • <span className="text-amber-500 tracking-widest">{lead.time}</span></p>
                      </div>
                   </div>
                   <div className="p-3 bg-[#0a3d62] text-white rounded-xl group-hover/item:translate-x-1 transition-transform shadow-lg shadow-[#0a3d62]/10">
                      <ArrowRight className="w-4 h-4" />
                   </div>
                </button>
              ))}
           </div>
        </div>

        {/* Quick Assign Panel */}
        <div className="lg:col-span-5 space-y-6">
           <div className={clsx(
             "p-8 rounded-[2.5rem] shadow-xl text-white relative overflow-hidden transition-all duration-500",
             isAutoAssign ? "bg-[#0a3d62]" : "bg-slate-800"
           )}>
              <div className="relative z-10">
                 <div className="flex justify-between items-start mb-4">
                    <h4 className="text-lg font-black uppercase tracking-tighter">Auto-Assignment</h4>
                    <button 
                      onClick={handleToggleAuto}
                      className={clsx(
                        "w-12 h-6 rounded-full p-1 transition-colors duration-300 relative",
                        isAutoAssign ? "bg-emerald-500" : "bg-slate-600"
                      )}
                    >
                      <div className={clsx(
                        "w-4 h-4 bg-white rounded-full transition-transform duration-300",
                        isAutoAssign ? "translate-x-6" : "translate-x-0"
                      )} />
                    </button>
                 </div>
                 <p className="text-xs font-bold text-white/60 leading-relaxed mb-6 italic">Enable AI-based lead distribution to ensure no lead stays in the pool for more than 5 minutes.</p>
                 <div className="flex items-center gap-3 p-4 bg-white/5 rounded-2xl border border-white/10 mb-8 backdrop-blur-sm">
                    <Clock className={clsx("w-5 h-5", isAutoAssign ? "text-emerald-400" : "text-slate-400")} />
                    <div className="text-left">
                       <p className="text-[10px] font-black uppercase opacity-60 tracking-widest">Status</p>
                       <p className="text-xs font-black">{isAutoAssign ? "Active • Optimizing for Team A" : "Inactive • Waiting for activation"}</p>
                    </div>
                 </div>
                 <Button 
                   className="w-full bg-white text-[#0a3d62] hover:bg-emerald-500 hover:text-white border-transparent py-5 font-black uppercase text-[10px] tracking-[0.2em] rounded-2xl shadow-2xl active:scale-95 transition-all"
                   onClick={() => alert('Opening Auto-Assign configuration...')}
                 >
                    Configure AI Logic
                 </Button>
              </div>
              <div className="absolute top-[-20%] right-[-10%] w-48 h-48 bg-white/5 rounded-full blur-[40px]" />
           </div>

           <button 
             onClick={() => alert('Starting manual batch assignment...')}
             className="w-full bg-white p-8 rounded-[2.5rem] shadow-premium border border-slate-50 flex items-center justify-between group hover:border-[#0a3d62] transition-all active:scale-[0.98] text-left"
           >
              <div className="flex gap-4 items-center">
                 <div className="w-12 h-12 bg-indigo-50 text-indigo-500 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform shadow-inner">
                    <CheckCircle2 className="w-6 h-6" />
                 </div>
                 <div>
                    <h5 className="font-black text-[#0a3d62] leading-none uppercase tracking-tighter">Manual Batch</h5>
                    <p className="text-[10px] font-bold text-slate-400 mt-1 uppercase tracking-widest">Bulk assign up to 50 leads</p>
                 </div>
              </div>
              <div className="w-10 h-10 flex items-center justify-center bg-slate-50 rounded-xl group-hover:bg-[#0a3d62] group-hover:text-white transition-all shadow-sm">
                 <UserPlus className="w-5 h-5" />
              </div>
           </button>
        </div>
      </div>
    </div>
  );
}
