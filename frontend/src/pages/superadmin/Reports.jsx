import React from 'react';
import { 
  BarChart3, 
  TrendingUp, 
  ShieldCheck, 
  Zap, 
  Download, 
  Filter, 
  Calendar,
  PieChart,
  ArrowUpRight
} from 'lucide-react';
import { useToast } from '../../context/ToastContext';
import { clsx } from 'clsx';

export default function Reports() {
  const { showToast } = useToast();

  const globalStats = [
    { label: "Total Platform Rev", value: "₹4.2M", trend: "+14%", icon: Zap, color: "text-[#0a3d62]" },
    { label: "Active Nodes", value: "128", trend: "Stable", icon: ShieldCheck, color: "text-emerald-500" },
    { label: "User Retention", value: "92.4%", trend: "+2.1%", icon: TrendingUp, color: "text-indigo-500" },
    { label: "System Uptime", value: "99.9%", trend: "Optimal", icon: PieChart, color: "text-amber-500" },
  ];

  return (
    <div className="space-y-10 pb-12">
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
        <div>
          <h2 className="text-[12px] font-bold text-[#0a3d62] uppercase tracking-tight">Enterprise Intelligence</h2>
          <p className="text-slate-400 mt-0.5 font-normal text-[12px] tracking-wide flex items-center gap-2">
            <div className="w-1.5 h-1.5 rounded-full bg-[#0a3d62]/40" />
            Platform-wide Metrics • Financial Audit • Node Health
          </p>
        </div>
        <div className="flex items-center gap-4">
           <button onClick={() => showToast('Audit Filter Canvas Active', 'info')} className="flex items-center gap-2 px-5 py-2.5 bg-white border border-slate-100 rounded-xl text-[11px] font-bold uppercase tracking-wider text-slate-400 hover:text-[#0a3d62] transition-all shadow-premium active:scale-95">
              <Filter className="w-4 h-4" />
              Configure Audit
           </button>
           <button onClick={() => showToast('Enterprise Data Export Started...', 'success')} className="flex items-center gap-2 px-6 py-2.5 bg-[#0a3d62] text-white rounded-xl shadow-premium font-bold uppercase text-[11px] tracking-widest hover:opacity-95 active:scale-95 transition-all">
              <Download className="w-4 h-4" />
              Export Full Dataset
           </button>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
         {globalStats.map((stat, i) => (
           <div key={i} className="bg-white p-6 rounded-[2rem] shadow-premium border border-transparent hover:border-[#0a3d62] transition-all group relative overflow-hidden group">
              <div className={clsx("w-12 h-12 rounded-2xl bg-slate-50 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform shadow-premium", stat.color)}>
                 <stat.icon className="w-6 h-6" />
              </div>
              <p className="text-[11px] font-bold text-slate-400 uppercase tracking-widest mb-1">{stat.label}</p>
              <div className="flex items-baseline gap-3">
                 <h3 className="text-[22px] font-bold text-[#0a3d62] tracking-tighter">{stat.value}</h3>
                 <span className={clsx("text-[9px] font-bold px-2 py-0.5 rounded-lg bg-slate-50", stat.color)}>{stat.trend}</span>
              </div>
              <div className="absolute top-0 right-0 w-24 h-24 bg-slate-50/50 rounded-full blur-[40px] translate-x-12 translate-y-[-12px] group-hover:bg-[#0a3d62]/5 transition-all" />
           </div>
         ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
         <div className="lg:col-span-8 space-y-10">
            <div className="bg-white p-10 rounded-[3rem] shadow-premium border border-slate-50 group hover:border-[#0a3d62] transition-all relative overflow-hidden">
               <div className="flex justify-between items-start mb-12">
                  <div>
                    <h4 className="text-[14px] font-bold text-[#0a3d62] uppercase tracking-tight">Financial Trajectory</h4>
                    <p className="text-[11px] text-slate-400 mt-1 uppercase tracking-widest font-bold">12-Period Revenue Cycle</p>
                  </div>
                  <div className="p-3 bg-slate-50 rounded-2xl group-hover:bg-[#0a3d62] group-hover:text-white transition-all">
                    <TrendingUp className="w-5 h-5" />
                  </div>
               </div>
               
               <div className="h-64 flex items-end gap-3 px-2">
                  {[40, 60, 45, 90, 65, 80, 50, 100, 30, 85, 60, 75].map((h, i) => (
                    <div key={i} className="flex-1 flex flex-col items-center gap-4 group/bar">
                       <div 
                        className={clsx(
                          "w-full rounded-t-xl transition-all relative overflow-hidden",
                          i === 7 ? 'bg-[#0a3d62] animate-pulse' : 'bg-slate-50 group-hover/bar:bg-[#0a3d62]/10'
                        )} 
                        style={{ height: `${h}%` }}
                       />
                       <span className="text-[9px] font-bold text-slate-300 uppercase italic">M{i+1}</span>
                    </div>
                  ))}
               </div>
               <div className="absolute top-[-30%] right-[-10%] w-[50%] h-[100%] bg-[#0a3d62]/5 rounded-full blur-[100px] pointer-events-none group-hover:bg-[#0a3d62]/10 transition-all duration-700" />
            </div>
         </div>

         <div className="lg:col-span-4 flex flex-col gap-8">
            <div className="bg-[#0a3d62] p-10 rounded-[3rem] shadow-premium text-white relative overflow-hidden flex-1 group">
               <h4 className="text-[14px] font-bold uppercase tracking-tight mb-8">Node Distribution</h4>
               <div className="space-y-8">
                  {[
                    { l: 'Super Admin Access', v: 4, c: 'bg-indigo-300' },
                    { l: 'Platform Admins', v: 14, c: 'bg-emerald-300' },
                    { l: 'Team Managers', v: 32, c: 'bg-amber-300' },
                    { l: 'Counselors Pool', v: 78, c: 'bg-white' },
                  ].map(node => (
                    <div key={node.l} className="space-y-3">
                       <div className="flex justify-between items-baseline">
                          <span className="text-[10px] font-bold uppercase tracking-tight text-white/60">{node.l}</span>
                          <span className="text-[14px] font-black text-white">{node.v}</span>
                       </div>
                       <div className="h-1.5 w-full bg-white/10 rounded-full overflow-hidden">
                          <div className={clsx("h-full transition-all duration-1000 shadow-premium", node.c)} style={{ width: `${(node.v/128)*100}%` }} />
                       </div>
                    </div>
                  ))}
               </div>
               <div className="absolute bottom-[-10%] right-[-10%] w-32 h-32 bg-white/5 rounded-full blur-[40px] group-hover:scale-150 transition-transform duration-700" />
            </div>
         </div>
      </div>
    </div>
  );
}
