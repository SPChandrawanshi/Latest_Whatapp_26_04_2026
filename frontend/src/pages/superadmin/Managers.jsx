import React from 'react';
import { Briefcase, Search, MoreVertical, Star } from 'lucide-react';
import { useToast } from '../../context/ToastContext';

export default function Managers() {
  const { showToast } = useToast();
  return (
    <div className="space-y-8">
      <div className="flex justify-between items-end">
        <div>
          <h2 className="text-[20px] font-semibold text-[#0a3d62] uppercase tracking-tight">Management Hierarchy</h2>
          <p className="text-slate-400 text-[13px] font-normal mt-0.5 tracking-wide">Team Managers Control</p>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {[
          { name: "Vikram Singh", region: "North India", team: 12, rating: 4.8 },
          { name: "Ananya Mehta", region: "West India", team: 8, rating: 4.9 },
          { name: "Rahul Deshmukh", region: "South India", team: 15, rating: 4.5 },
        ].map((manager, i) => (
          <div key={i} className="bg-white p-6 rounded-2xl shadow-premium border border-slate-50 hover:border-[#0a3d62] transition-all group relative overflow-hidden">
             <div className="flex justify-between items-start mb-6">
                <div className="w-12 h-12 bg-[#0a3d62] rounded-xl flex items-center justify-center text-white text-lg font-bold shadow-premium">
                  {manager.name[0]}
                </div>
                <button className="p-2 bg-slate-50 rounded-lg hover:bg-slate-100 transition-colors" onClick={() => showToast('Options Loaded', 'info')}>
                  <MoreVertical className="w-5 h-5 text-slate-400" />
                </button>
             </div>
             <h3 className="text-[16px] font-semibold text-[#0a3d62] tracking-tight">{manager.name}</h3>
             <p className="text-[13px] font-normal text-slate-400 mt-0.5">{manager.region}</p>
             
             <div className="grid grid-cols-2 gap-4 mt-6 pt-6 border-t border-slate-50">
                 <div>
                    <p className="text-[12px] font-normal text-slate-400 tracking-wide uppercase tracking-tighter">Team</p>
                    <p className="text-[14px] font-semibold text-[#0a3d62]">{manager.team} Pers</p>
                 </div>
                 <div>
                    <p className="text-[12px] font-normal text-slate-400 tracking-wide uppercase tracking-tighter">Rating</p>
                    <div className="flex items-center gap-1">
                       <Star className="w-3 h-3 text-amber-500 fill-amber-500" />
                       <p className="text-[14px] font-semibold text-[#0a3d62]">{manager.rating}</p>
                    </div>
                 </div>
             </div>

             <div className="absolute top-0 right-0 w-32 h-32 bg-primary/5 rounded-full blur-[40px] translate-x-12 translate-y-[-12px]" />
          </div>
        ))}

        <button onClick={() => showToast('Manager Assignment Initialized', 'info')} className="bg-slate-50/50 p-6 rounded-2xl border-2 border-dashed border-slate-200 flex flex-col items-center justify-center gap-3 hover:border-[#0a3d62] hover:bg-white transition-all group shadow-inner">
          <div className="w-12 h-12 rounded-xl border-2 border-slate-200 flex items-center justify-center text-slate-400 group-hover:bg-[#0a3d62] group-hover:text-white transition-all">
            <Briefcase className="w-6 h-6" />
          </div>
          <p className="text-[12px] font-semibold text-slate-400 uppercase tracking-widest">Add Manager</p>
        </button>
      </div>
    </div>
  );
}
