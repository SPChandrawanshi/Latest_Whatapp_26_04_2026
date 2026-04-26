import React from 'react';
import { ListTodo, Clock, Phone, MessageCircle, Calendar, ArrowRight } from 'lucide-react';
import { Button } from '../../components/common/Button';
import { clsx } from 'clsx';

export default function FollowUps() {
  const [activeTab, setActiveTab] = React.useState('Today');

  const leads = [
    { name: "Aman Gupta", status: "Hot Lead", time: activeTab === 'Today' ? "10:30 AM" : "Yesterday", type: "Call", overdue: activeTab === 'Overdue' },
    { name: "Riya Sen", status: "Warm Lead", time: activeTab === 'Today' ? "11:00 AM" : "2 Days ago", type: "WhatsApp", overdue: activeTab === 'Overdue' },
    { name: "Sahil Khan", status: "Documents Pend.", time: activeTab === 'Today' ? "12:15 PM" : "Yesterday", type: "Call", overdue: activeTab === 'Overdue' },
    { name: "Zoya Malik", status: "Follow-up #3", time: activeTab === 'Today' ? "01:45 PM" : "3 Days ago", type: "WhatsApp", overdue: activeTab === 'Overdue' },
  ];

  return (
    <div className="space-y-8">
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
        <div>
          <h2 className="text-3xl font-black text-[#0a3d62] tracking-tighter uppercase italic">DAILY FOLLOW-UPS</h2>
          <p className="text-slate-400 text-sm font-bold uppercase tracking-widest mt-1">Don't let a lead go cold. Stay Connected.</p>
        </div>
        <div className="flex bg-white p-1.5 rounded-2xl border border-slate-100 shadow-sm font-black text-[10px] uppercase tracking-widest overflow-hidden">
            <button 
              onClick={() => setActiveTab('Today')}
              className={clsx(
                "px-8 py-3 rounded-2xl transition-all duration-300 active:scale-90 font-black",
                activeTab === 'Today' ? "bg-[#0a3d62] text-white shadow-xl translate-y-[-1px]" : "text-slate-400 hover:text-[#0a3d62] hover:bg-slate-50"
              )}
             >
               Today
             </button>
            <button 
              onClick={() => setActiveTab('Overdue')}
              className={clsx(
                "px-8 py-3 rounded-2xl transition-all duration-300 active:scale-90 font-black",
                activeTab === 'Overdue' ? "bg-rose-500 text-white shadow-xl translate-y-[-1px]" : "text-slate-400 hover:text-rose-500 hover:bg-rose-50"
              )}
             >
               Overdue
             </button>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
        <div className="lg:col-span-8 space-y-6">
           {leads.map((item, i) => (
             <div key={i} className="bg-white p-8 rounded-[3rem] shadow-premium border border-transparent hover:border-[#0a3d62] hover:translate-x-3 transition-all flex items-center justify-between group cursor-pointer active:scale-[0.98]" onClick={() => alert(`Opening Full Record for ${item.name}`)}>
                <div className="flex items-center gap-8">
                   <div className={clsx(
                     "w-16 h-16 rounded-[1.75rem] flex items-center justify-center group-hover:scale-110 transition-transform shadow-sm ring-4 ring-transparent group-hover:ring-slate-50",
                     item.type === 'Call' ? 'bg-emerald-50 text-emerald-500' : 'bg-indigo-50 text-indigo-500'
                   )}>
                      {item.type === 'Call' ? <Phone className="w-8 h-8" /> : <MessageCircle className="w-8 h-8" />}
                   </div>
                   <div>
                      <h4 className="text-xl font-black text-[#0a3d62] leading-none mb-2 tracking-tighter">{item.name}</h4>
                      <p className="text-[11px] font-black text-slate-400 uppercase tracking-[0.2em] flex items-center gap-2">
                        {item.type} • 
                        <span className={clsx("font-black px-2 py-0.5 rounded-lg", item.overdue ? "bg-rose-50 text-rose-500" : "bg-emerald-50 text-emerald-500")}>
                          {item.status}
                        </span>
                      </p>
                   </div>
                </div>
                <div className="flex items-center gap-10">
                   <div className="text-right hidden sm:block">
                      <p className={clsx("text-sm font-black tracking-tighter", item.overdue ? "text-rose-500" : "text-[#0a3d62]")}>{item.time}</p>
                      <p className="text-[10px] font-bold text-slate-300 uppercase tracking-widest">{item.overdue ? "Missed" : "Scheduled"}</p>
                   </div>
                   <button className="w-14 h-14 bg-slate-50 rounded-[1.5rem] flex items-center justify-center hover:bg-[#0a3d62] hover:text-white transition-all active:scale-90 shadow-sm group-hover:shadow-lg">
                      <ArrowRight className="w-6 h-6" />
                   </button>
                </div>
             </div>
           ))}
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
                     i === 3 ? 'bg-[#0a3d62] text-white shadow-lg shadow-[#0a3d62]/20' : 'bg-slate-50 text-slate-400 hover:bg-slate-100 hover:text-slate-600'
                   )}>
                      {20 + i}
                   </button>
                 ))}
              </div>
              <Button className="w-full py-4 text-[10px] font-black uppercase tracking-widest rounded-2xl shadow-xl hover:translate-y-[-2px] transition-all" onClick={() => alert('New Schedule modal opening...')}>
                New Schedule
              </Button>
           </div>
        </div>
      </div>
    </div>
  );
}
