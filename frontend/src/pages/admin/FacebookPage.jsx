import React from 'react';
import { FaFacebook } from 'react-icons/fa';
import { 
  Users,
  MessageSquare, 
  Calendar, 
  TrendingUp, 
  BarChart3,
  ExternalLink,
  Plus,
  MoreHorizontal,
  ThumbsUp,
  Share2
} from 'lucide-react';
import { clsx } from 'clsx';

export default function FacebookPage() {
  const stats = [
    { label: 'Page Followers', value: '45,284', grow: '+4.2%', icon: Users, color: 'bg-blue-50 text-blue-600' },
    { label: 'Post Reach', value: '128.5K', grow: '+12.5%', icon: TrendingUp, color: 'bg-indigo-50 text-indigo-500' },
    { label: 'Msg. Response', value: '98%', grow: 'High', icon: MessageSquare, color: 'bg-emerald-50 text-emerald-500' },
    { label: 'Ad Performance', value: '3.4x', grow: 'ROI', icon: BarChart3, color: 'bg-rose-50 text-rose-500' },
  ];

  return (
    <div className="space-y-10 pb-12">
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
        <div>
          <h2 className="text-[12px] font-bold text-[#0a3d62] uppercase tracking-tight">Facebook Pages Manager</h2>
          <div className="text-slate-400 text-[12px] font-normal mt-0.5 tracking-wide flex items-center gap-2">
            <div className="w-2 h-2 rounded-full bg-blue-500 animate-pulse" />
            Connected to 12 Corporate Pages
          </div>
        </div>
        <div className="flex items-center gap-4">
           <button className="flex items-center gap-3 px-6 py-3 bg-white border border-slate-100 text-[10px] font-bold uppercase tracking-widest text-[#0a3d62] rounded-xl shadow-premium hover:bg-[#0a3d62] hover:text-white transition-all active:scale-95">
              <Plus className="w-4 h-4" />
              Link New Page
           </button>
           <button className="flex items-center gap-3 px-8 py-3 bg-[#0a3d62] text-white rounded-xl text-[10px] font-bold uppercase tracking-widest shadow-premium hover:opacity-90 active:scale-95 transition-all">
              <Calendar className="w-4 h-4" />
              Pulse Scheduler
           </button>
        </div>
      </div>

      {/* Metrics Row */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {stats.map((stat, i) => (
          <div key={i} className="bg-white p-6 rounded-[2rem] shadow-premium border border-slate-50 hover:border-blue-600 transition-all group">
             <div className={clsx("w-12 h-12 rounded-2xl flex items-center justify-center mb-6 shadow-premium group-hover:scale-110 transition-transform", stat.color)}>
                <stat.icon className="w-6 h-6" />
             </div>
             <p className="text-[11px] font-bold text-slate-400 uppercase tracking-widest mb-1">{stat.label}</p>
             <div className="flex items-baseline gap-3">
                <h3 className="text-[20px] font-bold text-[#0a3d62] tracking-tighter">{stat.value}</h3>
                <span className="text-[9px] font-bold text-blue-600 px-2 py-0.5 rounded-lg bg-blue-50">{stat.grow}</span>
             </div>
          </div>
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
        {/* Left: Feed Preview */}
        <div className="lg:col-span-8 flex flex-col gap-10">
           <div className="bg-white p-8 rounded-[3rem] shadow-premium border border-slate-50">
              <div className="flex items-center justify-between mb-10">
                 <h4 className="text-[14px] font-bold text-[#0a3d62] uppercase tracking-tight">Recent Page Activity</h4>
                 <button className="text-[10px] font-bold text-slate-300 hover:text-blue-600 uppercase tracking-widest transition-colors">See Post Insights</button>
              </div>
              <div className="space-y-8">
                 {[1, 2, 3].map((_, i) => (
                   <div key={i} className="flex flex-col gap-6 p-6 bg-slate-50/50 rounded-[2.5rem] border border-transparent hover:border-blue-100 hover:bg-white transition-all group">
                      <div className="flex items-center justify-between">
                         <div className="flex items-center gap-4">
                            <div className="w-10 h-10 rounded-xl bg-blue-600 flex items-center justify-center text-white font-bold text-[10px]">
                               FB
                            </div>
                            <div>
                               <p className="text-[12px] font-bold text-[#0a3d62]">Corporate Campaign #{i+1}</p>
                               <p className="text-[10px] text-slate-400 uppercase font-black tracking-widest italic">{i*2} hours ago</p>
                            </div>
                         </div>
                         <button className="p-2 text-slate-300 hover:text-blue-600 transition-colors">
                            <MoreHorizontal className="w-5 h-5" />
                         </button>
                      </div>
                      <p className="text-[12px] text-slate-600 leading-relaxed font-normal">
                         Discover the new era of high-density CRM solutions. Our Facebook integration allows you to sync your corporate page engagement metrics in real-time. #SaaS #Growth
                      </p>
                      <div className="flex items-center gap-8 pt-4 border-t border-slate-100/50">
                         <div className="flex items-center gap-2 text-blue-600">
                            <ThumbsUp className="w-4 h-4" />
                            <span className="text-[10px] font-black uppercase tracking-widest">1.2K Likes</span>
                         </div>
                         <div className="flex items-center gap-2 text-indigo-500">
                            <MessageSquare className="w-4 h-4" />
                            <span className="text-[10px] font-black uppercase tracking-widest">456 Comments</span>
                         </div>
                         <div className="flex items-center gap-2 text-slate-400">
                            <Share2 className="w-4 h-4" />
                            <span className="text-[10px] font-black uppercase tracking-widest">89 Shares</span>
                         </div>
                      </div>
                   </div>
                 ))}
              </div>
           </div>
        </div>

        {/* Right: Page List & Insights */}
        <div className="lg:col-span-4 flex flex-col gap-10">
           <div className="bg-[#0a3d62] p-8 rounded-[3rem] shadow-premium text-white relative overflow-hidden group">
              <h4 className="text-[14px] font-bold uppercase tracking-tight mb-8">Active Corporate Pages</h4>
              <div className="space-y-6">
                 {[
                   { name: 'Global Finance Corp', fans: '1.2M' },
                   { name: 'Kiaan Builders', fans: '450K' },
                   { name: 'Tech Solutions Ltd', fans: '89K' }
                 ].map((page, i) => (
                   <div key={i} className="flex items-center justify-between group/item cursor-pointer">
                      <div className="flex items-center gap-4">
                         <div className="w-10 h-10 bg-white/10 rounded-xl flex items-center justify-center group-hover/item:bg-white group-hover/item:text-[#0a3d62] transition-all">
                            <FaFacebook className="w-5 h-5" />
                         </div>
                         <span className="text-[12px] font-bold opacity-80">{page.name}</span>
                      </div>
                      <div className="flex items-center gap-2">
                         <span className="text-[10px] font-black">{page.fans}</span>
                         <ExternalLink className="w-3.5 h-3.5 opacity-30 group-hover/item:opacity-100" />
                      </div>
                   </div>
                 ))}
              </div>
              <div className="absolute bottom-[-10%] right-[-10%] w-32 h-32 bg-white/5 rounded-full blur-[40px] group-hover:bg-white/10 transition-all duration-700" />
           </div>

           <div className="bg-white p-8 rounded-[3rem] shadow-premium border border-slate-50">
              <h4 className="text-[14px] font-bold text-[#0a3d62] uppercase tracking-tight mb-8">Engagement Pulse</h4>
              <div className="space-y-5">
                 {[
                   { label: 'Organic Reach', val: '84%', trend: 'up' },
                   { label: 'Avg. CTR', val: '3.2%', trend: 'up' },
                   { label: 'Unfollows', val: '12', trend: 'down' }
                 ].map((metric, i) => (
                   <div key={i} className="flex items-baseline justify-between">
                      <span className="text-[11px] font-bold text-slate-400 uppercase tracking-widest">{metric.label}</span>
                      <div className="flex items-baseline gap-2">
                         <span className="text-[14px] font-black text-[#0a3d62] tracking-tighter">{metric.val}</span>
                         <TrendingUp className={clsx("w-3 h-3 md:w-4 md:h-4", metric.trend === 'up' ? 'text-emerald-500' : 'text-rose-500')} />
                      </div>
                   </div>
                 ))}
              </div>
           </div>
        </div>
      </div>
    </div>
  );
}
