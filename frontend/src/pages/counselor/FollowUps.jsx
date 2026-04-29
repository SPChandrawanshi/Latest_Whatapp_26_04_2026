import React, { useEffect, useState } from 'react';
import { useCustomers } from '../../context/CustomerContext';
import { useToast } from '../../context/ToastContext';
import { followupApi } from '../../api/followupApi';
import { 
  Phone, 
  MessageCircle, 
  ArrowRight, 
  Calendar,
  Clock,
  CheckCircle2
} from 'lucide-react';
import { clsx } from 'clsx';
import { Button } from '../../components/common/Button';

export default function FollowUps() {
  const { showToast } = useToast();
  const [activeTab, setActiveTab] = useState('Today');
  const [followups, setFollowups] = useState([]);

  const fetchFollowups = async () => {
    try {
      const res = await followupApi.getFollowups();
      if (res.success) setFollowups(res.data);
    } catch (e) {
      console.error(e);
    }
  };

  useEffect(() => {
    fetchFollowups();
  }, []);

  const handleComplete = async (id, name) => {
    try {
      await followupApi.updateStatus(id, 'Completed');
      showToast(`Follow-up completed for ${name}`, 'success');
      fetchFollowups();
    } catch (e) {
      showToast('Failed to complete followup', 'error');
    }
  };

  // Process followups based on tab
  const now = new Date();
  let displayedFollowups = followups.filter(f => f.status === 'Pending');
  
  if (activeTab === 'Today') {
    displayedFollowups = displayedFollowups.filter(f => new Date(f.scheduledAt).toDateString() === now.toDateString() || new Date(f.scheduledAt) > now);
  } else if (activeTab === 'Overdue') {
    displayedFollowups = displayedFollowups.filter(f => new Date(f.scheduledAt) < now);
  }

  return (
    <div className="space-y-8">
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
        <div>
          <h2 className="text-[12px] font-bold text-[#0a3d62] uppercase tracking-tight">Daily Follow-Ups</h2>
          <p className="text-slate-400 text-[12px] font-normal mt-0.5 tracking-wide">Don't let a Customer go cold. Stay Connected.</p>
        </div>
        <div className="flex bg-white p-1.5 rounded-2xl border border-slate-100 shadow-premium font-semibold text-[12px] uppercase tracking-wide overflow-hidden">
            <button 
              onClick={() => setActiveTab('Today')}
              className={clsx(
                "px-8 py-2.5 rounded-xl transition-all duration-300 active:scale-95 font-semibold",
                activeTab === 'Today' ? "bg-[#0a3d62] text-white shadow-premium" : "text-slate-400 hover:text-[#0a3d62] hover:bg-slate-50"
              )}
             >
               Today
             </button>
            <button 
              onClick={() => setActiveTab('Overdue')}
              className={clsx(
                "px-8 py-2.5 rounded-xl transition-all duration-300 active:scale-95 font-semibold",
                activeTab === 'Overdue' ? "bg-rose-500 text-white shadow-premium" : "text-slate-400 hover:text-rose-500 hover:bg-rose-50"
              )}
             >
               Overdue
             </button>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
        <div className="lg:col-span-8 space-y-6">
           {displayedFollowups.map((item, i) => {
             const isOverdue = new Date(item.scheduledAt) < new Date();
             const type = item.note?.toLowerCase().includes('call') ? 'Call' : 'WhatsApp';
             return (
               <div key={item.id} className="bg-white p-8 rounded-[3rem] shadow-premium border border-transparent hover:border-[#0a3d62] hover:translate-x-3 transition-all flex items-center justify-between group cursor-pointer active:scale-[0.98]">
                  <div className="flex items-center gap-8" onClick={() => showToast(`Opening Full Record for ${item.lead.name}`, 'info')}>
                     <div className={clsx(
                       "w-16 h-16 rounded-[1.75rem] flex items-center justify-center group-hover:scale-110 transition-transform shadow-premium ring-4 ring-transparent group-hover:ring-slate-50",
                       type === 'Call' ? 'bg-emerald-50 text-emerald-500' : 'bg-indigo-50 text-indigo-500'
                     )}>
                        {type === 'Call' ? <Phone className="w-8 h-8" /> : <MessageCircle className="w-8 h-8" />}
                     </div>
                     <div>
                        <h4 className="text-[12px] font-bold text-[#0a3d62] mb-1.5 tracking-tight">{item.lead.name}</h4>
                        <p className="text-[12px] font-medium text-slate-400 uppercase tracking-wide flex items-center gap-2">
                          {type} • 
                          <span className={clsx("font-semibold px-2 py-0.5 rounded-lg", isOverdue ? "bg-rose-50 text-rose-500" : "bg-emerald-50 text-emerald-500")}>
                            {item.lead.status}
                          </span>
                        </p>
                     </div>
                  </div>
                  <div className="flex items-center gap-6">
                     <div className="text-right hidden sm:block">
                        <p className={clsx("text-[12px] font-bold tracking-tighter", isOverdue ? "text-rose-500" : "text-[#0a3d62]")}>{new Date(item.scheduledAt).toLocaleTimeString([], {hour: '2-digit', minute:'2-digit'})}</p>
                        <p className="text-[11px] font-bold text-slate-300 uppercase tracking-widest">{isOverdue ? "Missed" : "Scheduled"}</p>
                     </div>
                     <button 
                       onClick={(e) => { e.stopPropagation(); handleComplete(item.id, item.lead.name); }}
                       className="w-14 h-14 bg-slate-50 rounded-[1.5rem] flex items-center justify-center hover:bg-emerald-500 hover:text-white transition-all active:scale-90 shadow-premium text-slate-400"
                       title="Mark as Completed"
                     >
                        <CheckCircle2 className="w-6 h-6" />
                     </button>
                  </div>
               </div>
             );
           })}
           {displayedFollowups.length === 0 && (
             <div className="p-10 text-center bg-slate-50 rounded-[3rem] border border-dashed border-slate-200">
                <CheckCircle2 className="w-12 h-12 text-slate-300 mx-auto mb-4" />
                <h4 className="text-[#0a3d62] font-bold uppercase tracking-widest text-[12px]">All Caught Up!</h4>
                <p className="text-slate-400 text-[11px] mt-2 uppercase tracking-widest">No pending follow-ups for {activeTab.toLowerCase()}</p>
             </div>
           )}
        </div>

        <div className="lg:col-span-4 space-y-6">
           <div className="bg-white p-8 rounded-[3rem] shadow-premium border border-slate-50 flex flex-col items-center text-center sticky top-24">
              <div className="w-20 h-20 bg-slate-50 rounded-[2.5rem] flex items-center justify-center mb-6 shadow-inner">
                 <Calendar className="w-10 h-10 text-slate-200" />
              </div>
              <h4 className="font-black text-[#0a3d62] uppercase tracking-tighter">Schedule View</h4>
              <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest mt-2 mb-8 italic">Quickly view upcoming dates</p>
              
              <div className="w-full grid grid-cols-7 gap-2 mb-8">
                 {[...Array(7)].map((_, i) => (
                   <button key={i} className={clsx(
                     "h-10 rounded-xl flex items-center justify-center text-[10px] font-black transition-all active:scale-90",
                     i === 3 ? 'bg-[#0a3d62] text-white shadow-premium shadow-[#0a3d62]/20' : 'bg-slate-50 text-slate-400 hover:bg-slate-100 hover:text-slate-600'
                   )}>
                      {20 + i}
                   </button>
                 ))}
              </div>
              <Button className="w-full py-4 text-[10px] font-black uppercase tracking-widest rounded-2xl shadow-premium hover:translate-y-[-2px] transition-all" onClick={() => showToast('New Schedule modal opening...', 'info')}>
                New Schedule
              </Button>
           </div>
        </div>
      </div>
    </div>
  );
}
