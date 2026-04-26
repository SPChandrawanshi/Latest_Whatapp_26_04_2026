import React from 'react';
import { PieChart, TrendingUp, Target, Zap, Clock, Star } from 'lucide-react';

export default function Performance() {
  return (
    <div className="space-y-8 pb-10">
      <div className="flex justify-between items-start">
        <div>
          <h2 className="text-3xl font-black text-[#0a3d62] tracking-tighter uppercase italic">TEAM PERFORMANCE</h2>
          <p className="text-slate-400 text-sm font-bold uppercase tracking-widest mt-1">Deep Analytics & Conversion Benchmarking</p>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
         {/* Main Chart Placeholder */}
         <div className="lg:col-span-2 bg-white p-10 rounded-[3rem] shadow-premium border border-slate-50 hover:border-[#0a3d62] transition-all relative overflow-hidden group">
            <div className="flex items-center justify-between mb-10 z-10 relative">
               <div>
                  <h4 className="text-xl font-black text-[#0a3d62]">Weekly Conversion Rate</h4>
                  <p className="text-xs font-bold text-slate-300 uppercase mt-1 tracking-widest">Average Across All Teams</p>
               </div>
               <div className="flex items-center gap-2 px-4 py-2 bg-emerald-50 text-emerald-600 rounded-xl border border-emerald-100">
                  <TrendingUp className="w-4 h-4" />
                  <span className="text-xs font-black">+14.2%</span>
               </div>
            </div>

            <div className="flex-1 flex items-end gap-6 h-64 px-4 pb-4">
              {[40, 60, 45, 80, 55, 90, 70].map((h, i) => (
                <div key={i} className="flex-1 flex flex-col items-center gap-4 group/bar">
                   <div 
                    className="w-full bg-slate-50 rounded-t-[1.5rem] group-hover/bar:bg-[#0a3d62]/10 transition-all relative overflow-hidden flex items-end justify-center" 
                    style={{ height: `${h}%` }}
                   >
                      <motion.div 
                        initial={{ height: 0 }}
                        animate={{ height: `${h}%` }}
                        className={`w-full ${i === 5 ? 'bg-[#0a3d62]' : 'bg-primary/20'} rounded-t-[1.5rem] transition-all`}
                      />
                   </div>
                   <span className="text-[10px] font-black text-slate-300 uppercase">Day {i+1}</span>
                </div>
              ))}
            </div>
            <div className="absolute top-[-50%] right-[-10%] w-[60%] h-[100%] bg-primary/5 rounded-full blur-[100px] pointer-events-none" />
         </div>

         <div className="lg:col-span-1 space-y-6">
            <div className="bg-[#0a3d62] p-8 rounded-[2.5rem] shadow-xl text-white relative overflow-hidden group">
               <div className="relative z-10">
                  <div className="w-12 h-12 bg-white/10 rounded-2xl flex items-center justify-center mb-6">
                     <Target className="w-6 h-6" />
                  </div>
                  <h4 className="text-2xl font-black mb-2 italic">Goal Status</h4>
                  <p className="text-xs font-bold opacity-60 leading-relaxed mb-6">Your team is 120 leads away from the monthly gold medal.</p>
                  <p className="text-4xl font-black">74%</p>
                  <div className="mt-4 h-2 w-full bg-white/20 rounded-full overflow-hidden">
                     <div className="h-full bg-white w-[74%]" />
                  </div>
               </div>
            </div>

            <div className="bg-white p-8 rounded-[2.5rem] shadow-premium border border-slate-50 hover:border-[#0a3d62] transition-all group">
               <h4 className="text-xs font-black text-slate-400 uppercase tracking-widest mb-6">Agent Ranking</h4>
               <div className="space-y-4">
                  {[
                    { name: 'Siddharth', rate: '94%', color: 'text-emerald-500' },
                    { name: 'Pooja', rate: '88%', color: 'text-indigo-500' },
                    { name: 'Rohan', rate: '82%', color: 'text-amber-500' },
                  ].map((agent, i) => (
                    <div key={i} className="flex items-center justify-between">
                       <span className="text-sm font-black text-slate-700">{agent.name}</span>
                       <span className={`text-[10px] font-black uppercase tracking-widest ${agent.color}`}>{agent.rate} Efficiency</span>
                    </div>
                  ))}
               </div>
            </div>
         </div>
      </div>
    </div>
  );
}

// Minimal Framer for bar anim
import { motion } from 'framer-motion';
