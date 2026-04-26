import React from 'react';
import { Briefcase, Search, MoreVertical, Star } from 'lucide-react';

export default function Managers() {
  return (
    <div className="space-y-8">
      <div className="flex justify-between items-end">
        <div>
          <h2 className="text-3xl font-black text-[#0a3d62] tracking-tighter">MANAGEMENT HIERARCHY</h2>
          <p className="text-slate-400 text-sm font-bold uppercase tracking-widest mt-1">Regional & Team Managers Control</p>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {[
          { name: "Vikram Singh", region: "North India", team: 12, rating: 4.8 },
          { name: "Ananya Mehta", region: "West India", team: 8, rating: 4.9 },
          { name: "Rahul Deshmukh", region: "South India", team: 15, rating: 4.5 },
        ].map((manager, i) => (
          <div key={i} className="bg-white p-8 rounded-[2.5rem] shadow-premium border border-transparent hover:border-[#0a3d62] transition-all group relative overflow-hidden">
             <div className="flex justify-between items-start mb-6">
                <div className="w-16 h-16 bg-[#0a3d62] rounded-3xl flex items-center justify-center text-white text-xl font-black shadow-lg">
                  {manager.name[0]}
                </div>
                <button className="p-2 bg-slate-50 rounded-xl hover:bg-slate-100 transition-colors">
                  <MoreVertical className="w-5 h-5 text-slate-400" />
                </button>
             </div>
             <h3 className="text-xl font-black text-[#0a3d62] leading-tight">{manager.name}</h3>
             <p className="text-[10px] font-black text-slate-400 uppercase tracking-[0.2em] mt-1">{manager.region}</p>
             
             <div className="grid grid-cols-2 gap-4 mt-8 pt-8 border-t border-slate-50">
                <div>
                   <p className="text-[10px] font-black text-slate-400 uppercase tracking-tighter">Team Size</p>
                   <p className="text-lg font-black text-[#0a3d62]">{manager.team} Counselors</p>
                </div>
                <div>
                   <p className="text-[10px] font-black text-slate-400 uppercase tracking-tighter">Performance</p>
                   <div className="flex items-center gap-1">
                      <Star className="w-4 h-4 text-amber-500 fill-amber-500" />
                      <p className="text-lg font-black text-[#0a3d62]">{manager.rating}</p>
                   </div>
                </div>
             </div>

             <div className="absolute top-0 right-0 w-32 h-32 bg-primary/5 rounded-full blur-[40px] translate-x-12 translate-y-[-12px]" />
          </div>
        ))}

        <button className="bg-slate-50 p-8 rounded-[2.5rem] border-4 border-dashed border-slate-200 flex flex-col items-center justify-center gap-4 hover:border-[#0a3d62] hover:bg-white transition-all group">
          <div className="w-16 h-16 rounded-3xl border-2 border-slate-200 flex items-center justify-center text-slate-500 group-hover:bg-[#0a3d62] group-hover:text-white transition-all">
            <Briefcase className="w-8 h-8" />
          </div>
          <p className="text-xs font-black text-slate-400 uppercase tracking-widest">Assign New Manager</p>
        </button>
      </div>
    </div>
  );
}
