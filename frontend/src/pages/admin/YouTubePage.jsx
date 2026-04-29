import React from 'react';
import { 
  Play as YT, 
  Users, 
  PlaySquare, 
  Clock, 
  TrendingUp, 
  BarChart3, 
  MessageSquare,
  DollarSign,
  Plus,
  Video,
  Monitor,
  MoreVertical,
  ArrowUpRight
} from 'lucide-react';
import { clsx } from 'clsx';

export default function YouTubePage() {
  const stats = [
    { label: 'Subscribers', value: '124.5K', grow: '+4,280', icon: Users, color: 'bg-rose-50 text-rose-600' },
    { label: 'Total Views', value: '8.2M', grow: '+12%', icon: PlaySquare, color: 'bg-rose-100 text-rose-700' },
    { label: 'Watch Time', value: '450K h', grow: '+25%', icon: Clock, color: 'bg-slate-50 text-slate-800' },
    { label: 'Estimated Rev.', value: '$12,450', grow: '+8%', icon: DollarSign, color: 'bg-emerald-50 text-emerald-500' },
  ];

  return (
    <div className="space-y-10 pb-12">
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
        <div>
          <h2 className="text-[12px] font-bold text-[#0a3d62] uppercase tracking-tight">YouTube Channel Analytics</h2>
          <div className="text-slate-400 text-[12px] font-normal mt-0.5 tracking-wide flex items-center gap-2">
            <div className="w-2 h-2 rounded-full bg-rose-600 animate-pulse" />
            Connected: Kiaan Tech Reviews (Official)
          </div>
        </div>
        <div className="flex items-center gap-4">
           <button className="flex items-center gap-3 px-6 py-3 bg-white border border-slate-100 text-[10px] font-bold uppercase tracking-widest text-[#0a3d62] rounded-xl shadow-premium hover:bg-slate-50 transition-all active:scale-95">
              <Monitor className="w-4 h-4" />
              Live Studio
           </button>
           <button className="flex items-center gap-3 px-8 py-3 bg-rose-600 text-white rounded-xl text-[10px] font-bold uppercase tracking-widest shadow-premium hover:opacity-90 active:scale-95 transition-all">
              <Video className="w-4 h-4" />
              Upload Video
           </button>
        </div>
      </div>

      {/* Metrics Row */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {stats.map((stat, i) => (
          <div key={i} className="bg-white p-6 rounded-[2rem] shadow-premium border border-slate-50 hover:border-rose-600 transition-all group">
             <div className={clsx("w-12 h-12 rounded-2xl flex items-center justify-center mb-6 shadow-premium group-hover:scale-110 transition-transform", stat.color)}>
                <stat.icon className="w-6 h-6" />
             </div>
             <p className="text-[11px] font-bold text-slate-400 uppercase tracking-widest mb-1">{stat.label}</p>
             <div className="flex items-baseline gap-3">
                <h3 className="text-[20px] font-bold text-[#0a3d62] tracking-tighter">{stat.value}</h3>
                <span className="text-[9px] font-bold text-rose-600 px-2 py-0.5 rounded-lg bg-rose-50">{stat.grow}</span>
             </div>
          </div>
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
        {/* Left: Video List */}
        <div className="lg:col-span-8 flex flex-col gap-10">
           <div className="bg-white p-8 rounded-[3rem] shadow-premium border border-slate-50 relative overflow-hidden group">
              <div className="flex items-center justify-between mb-10">
                 <h4 className="text-[14px] font-bold text-[#0a3d62] uppercase tracking-tight">Recent Content Performance</h4>
                 <button className="text-[10px] font-bold text-slate-300 hover:text-rose-600 uppercase tracking-widest transition-colors">Advanced Analytics</button>
              </div>
              <div className="space-y-6">
                 {[
                   { title: 'The Future of Agentic AI Coding', views: '450K', reach: '+12%', time: '12:45' },
                   { title: 'Enterprise CRM Architecture Deep Dive', views: '120K', reach: '+5%', time: '08:20' },
                   { title: 'Designing High-Density SaaS UI', views: '89K', reach: '+24%', time: '15:10' },
                   { title: 'Next.js 15: What You Need to Know', views: '1.2M', reach: '+45%', time: '22:30' },
                 ].map((video, i) => (
                   <div key={i} className="flex flex-col md:flex-row md:items-center justify-between p-5 bg-slate-50/50 rounded-2xl hover:bg-white hover:shadow-premium border border-transparent hover:border-rose-100 transition-all group/item">
                      <div className="flex items-center gap-6">
                         <div className="w-24 h-14 bg-[#0a3d62] rounded-xl flex items-center justify-center text-white relative overflow-hidden shadow-premium">
                            <YT className="w-6 h-6 opacity-40 group-hover/item:opacity-100 group-hover/item:scale-110 transition-all" />
                            <div className="absolute bottom-1 right-1 bg-black/80 px-1 rounded text-[8px] font-black">{video.time}</div>
                         </div>
                         <div>
                            <p className="text-[12px] font-bold text-slate-800 tracking-tight leading-tight max-w-xs">{video.title}</p>
                            <p className="text-[10px] text-slate-400 font-bold uppercase tracking-widest mt-1">{video.views} Views • {video.reach} Growth</p>
                         </div>
                      </div>
                      <div className="flex items-center gap-6 mt-4 md:mt-0">
                         <div className="w-12 h-12 bg-white rounded-xl shadow-premium flex items-center justify-center text-slate-200 group-hover/item:text-[#0a3d62] transition-all">
                            <BarChart3 className="w-5 h-5" />
                         </div>
                         <button className="p-3 bg-white rounded-xl shadow-premium text-slate-300 hover:text-rose-600 transition-all active:scale-95">
                            <ArrowUpRight className="w-4 h-4" />
                         </button>
                      </div>
                   </div>
                 ))}
              </div>
           </div>
        </div>

        {/* Right: Revenue & Monetization */}
        <div className="lg:col-span-4 flex flex-col gap-10">
           <div className="bg-rose-600 p-8 rounded-[3rem] shadow-premium text-white relative overflow-hidden group">
              <h4 className="text-[14px] font-bold uppercase tracking-tight mb-8">Monetized Streams</h4>
              <div className="space-y-6">
                 {[
                   { label: 'Ad Revenue', val: '$8,450', pct: '72' },
                   { label: 'Sponsorships', val: '$3,200', pct: '28' },
                   { label: 'Merchandise', val: '$800', pct: '12' }
                 ].map((stream, i) => (
                   <div key={i} className="space-y-3">
                      <div className="flex justify-between items-baseline">
                         <span className="text-[10px] font-bold uppercase tracking-widest opacity-70">{stream.label}</span>
                         <span className="text-[12px] font-black">{stream.val}</span>
                      </div>
                      <div className="h-1.5 bg-white/20 rounded-full overflow-hidden">
                         <div className="h-full bg-white transition-all duration-1000 shadow-[0_0_15px_rgba(255,255,255,0.5)]" style={{ width: `${stream.pct}%` }} />
                      </div>
                   </div>
                 ))}
              </div>
              <div className="absolute top-[-20%] left-[-10%] w-32 h-32 bg-white/10 rounded-full blur-[40px]" />
           </div>

           <div className="bg-white p-8 rounded-[3rem] shadow-premium border border-slate-50 h-full">
              <div className="flex items-center justify-between mb-8">
                 <h4 className="text-[14px] font-bold text-[#0a3d62] uppercase tracking-tight">Recent Comments</h4>
                 <MessageSquare className="w-4 h-4 text-slate-200" />
              </div>
              <div className="space-y-6">
                 {[1,2,3].map(n => (
                   <div key={n} className="flex gap-4 items-start group cursor-pointer">
                      <div className="w-10 h-10 rounded-full bg-slate-50 flex items-center justify-center text-slate-300 font-bold text-[10px] group-hover:bg-rose-50 group-hover:text-rose-500 transition-all flex-shrink-0 shadow-premium">
                         {n}
                      </div>
                      <div>
                         <p className="text-[11px] font-bold text-slate-800">User_{n}25</p>
                         <p className="text-[11px] text-slate-400 font-normal leading-tight mt-0.5 line-clamp-2">"Great breakdown of the SaaS architecture! Really helped me understand the density requirements."</p>
                      </div>
                   </div>
                 ))}
              </div>
              <button className="w-full py-4 bg-slate-50 text-slate-400 hover:bg-[#0a3d62] hover:text-white rounded-2xl text-[10px] font-bold uppercase tracking-widest transition-all mt-8 active:scale-95 shadow-premium">
                 Manage 142 Comments
              </button>
           </div>
        </div>
      </div>
    </div>
  );
}
