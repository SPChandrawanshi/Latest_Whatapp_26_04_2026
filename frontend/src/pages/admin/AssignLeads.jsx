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
        <div className="lg:col-span-12 xl:col-span-7 bg-white p-10 rounded-[3rem] shadow-premium border border-slate-50 hover:border-[#0a3d62] transition-all group">
           <div className="flex justify-between items-center mb-10">
              <h4 className="text-xl font-black text-[#0a3d62] flex items-center gap-4">
                 <Zap className={clsx("w-6 h-6", isAutoAssign ? "text-amber-500 fill-amber-500 animate-pulse" : "text-slate-300")} />
                 Incoming Unassigned Pool
              </h4>
              <span className="px-4 py-1.5 bg-amber-50 text-amber-600 rounded-xl text-[10px] font-black uppercase tracking-widest border border-amber-100 shadow-sm">12 Leads Pending</span>
           </div>

           <div className="space-y-4">
              {[
                { name: "Facebook Inquiry #782", source: "Facebook Ads", time: "2m ago" },
                { name: "John Doe (WhatsApp)", source: "WhatsApp Direct", time: "15m ago" },
                { name: "Sarah Malik (Search)", source: "Google Search", time: "1h ago" },
              ].map((lead, i) => (
                <button 
                  key={i} 
                  onClick={() => handleLeadClick(lead.name)}
                  className="w-full flex items-center justify-between p-8 bg-slate-50/50 rounded-[2.5rem] border border-transparent hover:border-slate-200 hover:bg-white hover:translate-x-4 transition-all active:scale-[0.98] group/item shadow-sm"
                >
                   <div className="flex items-center gap-6">
                      <div className="w-16 h-16 bg-white rounded-3xl shadow-sm flex items-center justify-center text-[#0a3d62] font-black border border-slate-100 group-hover/item:bg-[#0a3d62] group-hover/item:text-white transition-all text-xl">
                         #
                      </div>
                      <div className="text-left">
                         <p className="text-lg font-black text-slate-800 tracking-tighter leading-none mb-1">{lead.name}</p>
                         <p className="text-[10px] text-slate-400 font-bold uppercase tracking-widest">{lead.source} • <span className="text-amber-500 font-black">{lead.time}</span></p>
                      </div>
                   </div>
                   <div className="w-14 h-14 bg-[#0a3d62] text-white rounded-2xl flex items-center justify-center group-hover/item:translate-x-2 transition-transform shadow-xl shadow-[#0a3d62]/20">
                      <ArrowRight className="w-6 h-6" />
                   </div>
                </button>
              ))}
           </div>
        </div>

        {/* Quick Assign Panel XL */}
        <div className="lg:col-span-12 xl:col-span-5 space-y-8">
           <div className={clsx(
             "p-10 rounded-[3.5rem] shadow-2xl text-white relative overflow-hidden transition-all duration-700",
             isAutoAssign ? "bg-[#0a3d62]" : "bg-slate-800"
           )}>
              <div className="relative z-10">
                 <div className="flex justify-between items-start mb-6">
                    <h4 className="text-2xl font-black uppercase tracking-tighter italic">Auto-Assignment</h4>
                    <button 
                      onClick={handleToggleAuto}
                      className={clsx(
                        "w-16 h-8 rounded-full p-1.5 transition-colors duration-300 relative ring-4 ring-transparent hover:ring-white/10",
                        isAutoAssign ? "bg-emerald-500" : "bg-slate-600"
                      )}
                    >
                      <div className={clsx(
                        "w-5 h-5 bg-white rounded-full transition-transform duration-500 shadow-md",
                        isAutoAssign ? "translate-x-8" : "translate-x-0"
                      )} />
                    </button>
                 </div>
                 <p className="text-xs font-bold text-white/50 leading-relaxed mb-8 italic">Optimize your workflow with AI lead distribution.</p>
                 <div className="flex items-center gap-4 p-6 bg-white/5 rounded-[2rem] border border-white/10 mb-10 backdrop-blur-md">
                    <Clock className={clsx("w-6 h-6", isAutoAssign ? "text-emerald-400" : "text-slate-400")} />
                    <div className="text-left">
                       <p className="text-[10px] font-black uppercase opacity-40 tracking-widest">Engine Status</p>
                       <p className="text-sm font-black">{isAutoAssign ? "Running • Optimal Performance" : "Standby • Ready to activate"}</p>
                    </div>
                 </div>
                 <Button 
                   className="w-full bg-white text-[#0a3d62] hover:bg-emerald-500 hover:text-white border-transparent py-6 font-black uppercase text-[11px] tracking-[0.3em] rounded-3xl shadow-2xl active:scale-95 transition-all duration-300"
                   onClick={() => alert('Opening AI Logic Configuration...')}
                 >
                    Configure Logic
                 </Button>
              </div>
              <div className="absolute top-[-20%] right-[-10%] w-64 h-64 bg-white/5 rounded-full blur-[60px]" />
           </div>

           <button 
             onClick={() => alert('Launching Manual Batch Distribution Model...')}
             className="w-full bg-white p-10 rounded-[3rem] shadow-premium border border-slate-50 flex items-center justify-between group hover:border-[#0a3d62] transition-all active:scale-[0.98] text-left relative overflow-hidden"
           >
              <div className="flex gap-6 items-center relative z-10">
                 <div className="w-16 h-16 bg-indigo-50 text-indigo-500 rounded-[1.5rem] flex items-center justify-center group-hover:scale-110 transition-transform shadow-inner">
                    <CheckCircle2 className="w-8 h-8" />
                 </div>
                 <div>
                    <h5 className="text-xl font-black text-[#0a3d62] leading-none uppercase tracking-tighter italic">Manual Batch</h5>
                    <p className="text-[10px] font-black text-slate-400 mt-2 uppercase tracking-widest">Bulk distribution (Max 50)</p>
                 </div>
              </div>
              <div className="w-14 h-14 flex items-center justify-center bg-slate-50 text-slate-400 rounded-2xl group-hover:bg-[#0a3d62] group-hover:text-white transition-all shadow-sm relative z-10">
                 <UserPlus className="w-6 h-6" />
              </div>
           </button>
        </div>
      </div>
    </div>
  );
}
