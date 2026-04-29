import React from 'react';
import { 
  UserSquare2, 
  Search, 
  Plus, 
  Filter, 
  MoreVertical, 
  Star, 
  Clock, 
  CheckCircle2, 
  MessageSquare 
} from 'lucide-react';
import { useToast } from '../../context/ToastContext';
import { Button } from '../../components/common/Button';
import { clsx } from 'clsx';

export default function Counselors() {
  const { showToast } = useToast();

  const counselorTeam = [
    { name: "Priya Verma", role: "Sr. Counselor", load: 45, status: "Active", rating: 4.8 },
    { name: "Rahul Kumar", role: "Junior Counselor", load: 22, status: "In-Call", rating: 4.2 },
    { name: "Anita Singh", role: "Tech Counselor", load: 38, status: "Online", rating: 4.9 },
    { name: "Siddharth J.", role: "Sr. Analytics", load: 15, status: "Offline", rating: 4.5 },
  ];

  return (
    <div className="space-y-10 pb-12">
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
        <div>
          <h2 className="text-[12px] font-bold text-[#0a3d62] uppercase tracking-tight">Workforce Oversight</h2>
          <p className="text-slate-400 mt-0.5 font-normal text-[12px] tracking-wide flex items-center gap-2">
            <div className="w-1.5 h-1.5 rounded-full bg-[#0a3d62]/40" />
            Global Counselor Registry • Performance Monitoring
          </p>
        </div>
        <div className="flex items-center gap-4">
           <button onClick={() => showToast('Advanced Workforce Filter Opening...', 'info')} className="flex items-center gap-2 px-5 py-2.5 bg-white border border-slate-100 rounded-xl text-[11px] font-bold uppercase tracking-wider text-slate-400 hover:text-[#0a3d62] transition-all shadow-premium active:scale-95">
              <Filter className="w-4 h-4" />
              Filter Team
           </button>
           <button onClick={() => showToast('Onboarding Secure Portal...', 'success')} className="flex items-center gap-2 px-6 py-2.5 bg-[#0a3d62] text-white rounded-xl shadow-premium font-bold uppercase text-[11px] tracking-widest hover:opacity-95 active:scale-95 transition-all">
              <Plus className="w-4 h-4" />
              Onboard Counselor
           </button>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {counselorTeam.map((member, i) => (
          <div key={i} className="bg-white p-6 rounded-[2.5rem] shadow-premium border border-transparent hover:border-[#0a3d62] transition-all group relative overflow-hidden flex flex-col items-center text-center">
             <div className="relative mb-6">
                <div className="w-20 h-20 bg-slate-50 rounded-[2rem] border border-slate-100 flex items-center justify-center text-3xl shadow-inner group-hover:scale-110 transition-transform">
                   {member.name[0]}
                </div>
                <div className={clsx(
                  "absolute bottom-[-4px] right-[-4px] w-6 h-6 rounded-lg border-4 border-white flex items-center justify-center shadow-premium",
                  member.status === 'Active' ? 'bg-emerald-500' : member.status === 'Offline' ? 'bg-slate-300' : 'bg-amber-500'
                )}>
                   <div className="w-1.5 h-1.5 rounded-full bg-white animate-pulse" />
                </div>
             </div>

             <h4 className="text-[14px] font-bold text-[#0a3d62] uppercase tracking-tight mb-1">{member.name}</h4>
             <p className="text-[11px] font-bold text-slate-400 uppercase tracking-widest mb-6">{member.role}</p>

             <div className="flex items-center gap-4 mb-8">
                <div className="flex items-center gap-1.5 px-3 py-1 bg-amber-50 text-amber-600 rounded-lg border border-amber-100">
                   <Star className="w-3 h-3 fill-amber-500" />
                   <span className="text-[11px] font-black">{member.rating}</span>
                </div>
                <div className="flex items-center gap-1.5 px-3 py-1 bg-[#0a3d62]/5 text-[#0a3d62] rounded-lg border border-[#0a3d62]/10">
                   <MessageSquare className="w-3 h-3" />
                   <span className="text-[11px] font-black">{member.load}</span>
                </div>
             </div>

             <div className="w-full space-y-3 mb-8">
                <div className="flex justify-between items-baseline">
                   <span className="text-[9px] font-bold text-slate-300 uppercase tracking-widest">Active Client Load</span>
                   <span className="text-[11px] font-bold text-[#0a3d62]">{member.load}%</span>
                </div>
                <div className="w-full h-1 bg-slate-50 rounded-full overflow-hidden">
                   <div className="h-full bg-[#0a3d62]/20 transition-all duration-1000" style={{ width: `${member.load}%` }} />
                </div>
             </div>

             <div className="w-full flex gap-2">
                <button onClick={() => showToast(`Opening logs for ${member.name}`, 'info')} className="flex-1 py-2.5 bg-slate-50 text-slate-400 rounded-xl text-[10px] font-bold uppercase tracking-widest hover:bg-[#0a3d62] hover:text-white transition-all active:scale-95 shadow-premium">Logs</button>
                <button onClick={() => showToast(`Setting limits for ${member.name}`, 'info')} className="flex-1 py-2.5 bg-slate-50 text-slate-400 rounded-xl text-[10px] font-bold uppercase tracking-widest hover:bg-[#0a3d62] hover:text-white transition-all active:scale-95 shadow-premium">Limit</button>
             </div>

             <div className="absolute top-[-20%] right-[-10%] w-32 h-32 bg-[#0a3d62]/5 rounded-full blur-[40px] pointer-events-none group-hover:bg-[#0a3d62]/10 transition-all" />
          </div>
        ))}

        <button onClick={() => showToast('Secure Onboarding Initialized...', 'success')} className="bg-slate-50 p-6 rounded-[2.5rem] border-2 border-dashed border-slate-200 flex flex-col items-center justify-center text-center group hover:border-[#0a3d62] hover:bg-white transition-all active:scale-98 shadow-inner min-h-[300px]">
           <div className="w-16 h-16 rounded-[2rem] border-2 border-slate-200 flex items-center justify-center text-slate-200 group-hover:bg-[#0a3d62] group-hover:text-white group-hover:border-transparent transition-all mb-4">
              <Plus className="w-8 h-8" />
           </div>
           <h4 className="text-[12px] font-bold text-slate-300 uppercase tracking-widest group-hover:text-[#0a3d62]">Invite New Counselor</h4>
        </button>
      </div>
    </div>
  );
}
