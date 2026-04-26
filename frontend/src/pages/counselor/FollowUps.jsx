import { ListTodo, Clock, Phone, MessageCircle, Calendar, ArrowRight } from 'lucide-react';
import { Button } from '../../components/common/Button';

export default function FollowUps() {
  return (
    <div className="space-y-8">
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
        <div>
          <h2 className="text-3xl font-black text-[#0a3d62] tracking-tighter uppercase italic">DAILY FOLLOW-UPS</h2>
          <p className="text-slate-400 text-sm font-bold uppercase tracking-widest mt-1">Don't let a lead go cold. Stay Connected.</p>
        </div>
        <div className="flex bg-white p-1.5 rounded-2xl border border-slate-100 shadow-sm font-black text-[10px] uppercase tracking-widest overflow-hidden">
           <button className="px-6 py-2 bg-[#0a3d62] text-white rounded-xl shadow-lg">Today</button>
           <button className="px-6 py-2 text-slate-400 hover:text-slate-600 transition-colors">Overdue</button>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
        <div className="lg:col-span-8 space-y-4">
           {[
             { name: "Aman Gupta", status: "Hot Lead", time: "10:30 AM", type: "Call" },
             { name: "Riya Sen", status: "Warm Lead", time: "11:00 AM", type: "WhatsApp" },
             { name: "Sahil Khan", status: "Documents Pend.", time: "12:15 PM", type: "Call" },
             { name: "Zoya Malik", status: "Follow-up #3", time: "01:45 PM", type: "WhatsApp" },
           ].map((item, i) => (
             <div key={i} className="bg-white p-6 rounded-[2.5rem] shadow-premium border border-transparent hover:border-[#0a3d62] transition-all flex items-center justify-between group">
                <div className="flex items-center gap-6">
                   <div className={`w-14 h-14 rounded-3xl ${item.type === 'Call' ? 'bg-emerald-50 text-emerald-500' : 'bg-indigo-50 text-indigo-500'} flex items-center justify-center group-hover:scale-110 transition-transform`}>
                      {item.type === 'Call' ? <Phone className="w-6 h-6" /> : <MessageCircle className="w-6 h-6" />}
                   </div>
                   <div>
                      <h4 className="text-lg font-black text-[#0a3d62] leading-none mb-1">{item.name}</h4>
                      <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest">Type: {item.type} • <span className="text-primary">{item.status}</span></p>
                   </div>
                </div>
                <div className="flex items-center gap-8">
                   <div className="text-right">
                      <p className="text-xs font-black text-[#0a3d62]">{item.time}</p>
                      <p className="text-[10px] font-bold text-slate-300 uppercase">Scheduled</p>
                   </div>
                   <button className="w-12 h-12 bg-slate-50 rounded-2xl flex items-center justify-center hover:bg-[#0a3d62] hover:text-white transition-all">
                      <ArrowRight className="w-5 h-5" />
                   </button>
                </div>
             </div>
           ))}
        </div>

        <div className="lg:col-span-4 space-y-6">
           <div className="bg-white p-8 rounded-[3rem] shadow-premium border border-slate-50 flex flex-col items-center text-center">
              <div className="w-20 h-20 bg-slate-50 rounded-[2rem] flex items-center justify-center mb-6">
                 <Calendar className="w-10 h-10 text-slate-200" />
              </div>
              <h4 className="font-black text-[#0a3d62]">Schedule View</h4>
              <p className="text-xs font-bold text-slate-400 uppercase tracking-widest mt-2 mb-8">Quickly view upcoming dates</p>
              
              <div className="w-full grid grid-cols-7 gap-2 mb-6">
                 {[...Array(7)].map((_, i) => (
                   <div key={i} className={`h-8 rounded-lg flex items-center justify-center text-[10px] font-black ${i === 3 ? 'bg-[#0a3d62] text-white shadow-lg' : 'bg-slate-50 text-slate-400'}`}>
                      {20 + i}
                   </div>
                 ))}
              </div>
              <Button className="w-full py-4 text-[10px] font-black uppercase tracking-widest rounded-2xl shadow-lg">New Schedule</Button>
           </div>
        </div>
      </div>
    </div>
  );
}
