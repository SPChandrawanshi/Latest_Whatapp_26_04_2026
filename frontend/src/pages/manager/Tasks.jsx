import React from 'react';
import { ListTodo, CheckCircle2, Clock, AlertCircle, PlayCircle } from 'lucide-react';

export default function Tasks() {
  return (
    <div className="space-y-8">
      <div className="flex justify-between items-start">
        <div>
          <h2 className="text-3xl font-black text-[#0a3d62] tracking-tighter uppercase italic">TASK MONITORING</h2>
          <p className="text-slate-400 text-sm font-bold uppercase tracking-widest mt-1">Reviewing Automated Workflows and Counselor Actions</p>
        </div>
      </div>

      <div className="grid grid-cols-1 xl:grid-cols-3 gap-8">
        {/* Task Summary */}
        <div className="xl:col-span-1 space-y-6">
           <div className="bg-white p-8 rounded-[2.5rem] shadow-premium border border-slate-50">
              <h4 className="text-xs font-black text-[#0a3d62] uppercase tracking-[0.2em] mb-6">Today's Agenda</h4>
              <div className="space-y-6">
                 <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                       <CheckCircle2 className="w-5 h-5 text-emerald-500" />
                       <span className="text-sm font-bold text-slate-600">Completed Tasks</span>
                    </div>
                    <span className="font-black text-[#0a3d62]">42</span>
                 </div>
                 <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                       <Clock className="w-5 h-5 text-amber-500" />
                       <span className="text-sm font-bold text-slate-600">Pending Actions</span>
                    </div>
                    <span className="font-black text-[#0a3d62]">18</span>
                 </div>
                 <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                       <AlertCircle className="w-5 h-5 text-rose-500" />
                       <span className="text-sm font-bold text-slate-600">Overdue</span>
                    </div>
                    <span className="font-black text-rose-500">3</span>
                 </div>
              </div>
              <button className="w-full mt-10 py-4 bg-slate-50 text-slate-400 rounded-2xl text-[10px] font-black uppercase tracking-widest border border-slate-100 hover:bg-[#0a3d62] hover:text-white transition-all">Review Full Queue</button>
           </div>

           <div className="bg-indigo-600 p-8 rounded-[2.5rem] shadow-xl text-white">
              <h4 className="text-lg font-black mb-2 italic">Daily Sprint</h4>
              <p className="text-xs font-bold opacity-60 leading-relaxed mb-6">Your team is at 84% capacity. Consider redistributing 12 tasks to Counselor Team B.</p>
              <div className="h-2 w-full bg-white/20 rounded-full overflow-hidden">
                 <div className="h-full bg-white w-[84%]" />
              </div>
           </div>
        </div>

        {/* Task Board */}
        <div className="xl:col-span-2 bg-white p-8 rounded-[3rem] shadow-premium border border-slate-50 hover:border-[#0a3d62] transition-all relative overflow-hidden">
           <h4 className="text-lg font-black text-[#0a3d62] mb-8">Live Task Feed</h4>
           <div className="space-y-4">
              {[
                { title: "KYC Verification", agent: "Amit S.", priority: "High", time: "10:30 AM" },
                { title: "Follow-up Callback", agent: "Priya K.", priority: "Medium", time: "11:15 AM" },
                { title: "Document Review", agent: "Rahul D.", priority: "Low", time: "12:00 PM" },
                { title: "Initial Lead Intro", agent: "Sita G.", priority: "High", time: "01:30 PM" },
              ].map((task, i) => (
                <div key={i} className="flex items-center justify-between p-5 bg-slate-50/50 rounded-2xl border border-transparent hover:border-[#0a3d62]/20 hover:bg-white transition-all group">
                   <div className="flex items-center gap-4">
                      <div className="w-12 h-12 bg-white rounded-2xl shadow-sm flex items-center justify-center text-primary">
                         <PlayCircle className="w-6 h-6 opacity-40 group-hover:opacity-100 group-hover:scale-110 transition-all cursor-pointer" />
                      </div>
                      <div>
                         <p className="text-sm font-black text-slate-800 tracking-tight">{task.title}</p>
                         <p className="text-[10px] text-slate-400 font-bold uppercase tracking-tighter">Assigned to: <span className="text-[#0a3d62]">{task.agent}</span></p>
                      </div>
                   </div>
                   <div className="text-right">
                      <span className={`px-2 py-0.5 rounded text-[8px] font-black uppercase tracking-widest ${
                        task.priority === 'High' ? 'bg-rose-100 text-rose-600' : 'bg-indigo-100 text-indigo-600'
                      }`}>{task.priority}</span>
                      <p className="text-[10px] font-bold text-slate-300 mt-1 uppercase">{task.time}</p>
                   </div>
                </div>
              ))}
           </div>
           <div className="absolute top-[-10%] right-[-10%] w-64 h-64 bg-primary/5 rounded-full blur-[80px] pointer-events-none" />
        </div>
      </div>
    </div>
  );
}
