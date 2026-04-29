import React from 'react';
import { 
  Camera as IG, 
  Users, 
  Heart, 
  MessageCircle, 
  Image as ImageIcon, 
  Layout, 
  TrendingUp, 
  Plus, 
  Camera,
  PlaySquare,
  BarChart3,
  ExternalLink
} from 'lucide-react';
import { clsx } from 'clsx';

export default function InstagramPage() {
  const stats = [
    { label: 'Followers', value: '18.4K', grow: '+1,240', icon: Users, color: 'bg-rose-50 text-rose-500' },
    { label: 'Avg. Engagement', value: '4.8%', grow: '+0.5%', icon: Heart, color: 'bg-pink-50 text-pink-500' },
    { label: 'New DMs', value: '124', grow: 'Live', icon: MessageCircle, color: 'bg-indigo-50 text-indigo-500' },
    { label: 'Reels Reach', value: '250K', grow: '+18%', icon: PlaySquare, color: 'bg-amber-50 text-amber-500' },
  ];

  return (
    <div className="space-y-10 pb-12">
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
        <div>
          <h2 className="text-[12px] font-bold text-[#0a3d62] uppercase tracking-tight">Instagram Growth Engine</h2>
          <div className="text-slate-400 text-[12px] font-normal mt-0.5 tracking-wide flex items-center gap-2">
            <div className="w-2 h-2 rounded-full bg-gradient-to-tr from-yellow-400 via-red-500 to-purple-600 animate-pulse" />
            Active Account: @kiaan_official_crm
          </div>
        </div>
        <div className="flex items-center gap-4">
           <button className="flex items-center gap-3 px-6 py-3 bg-white border border-slate-100 text-[10px] font-bold uppercase tracking-widest text-[#0a3d62] rounded-xl shadow-premium hover:bg-slate-50 transition-all active:scale-95">
              <Camera className="w-4 h-4" />
              Story Studio
           </button>
           <button className="flex items-center gap-3 px-8 py-3 bg-gradient-to-tr from-yellow-400 via-red-500 to-purple-600 text-white rounded-xl text-[10px] font-bold uppercase tracking-widest shadow-premium hover:opacity-90 active:scale-95 transition-all">
              <Plus className="w-4 h-4" />
              Post / Reel
           </button>
        </div>
      </div>

      {/* Metrics Row */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {stats.map((stat, i) => (
          <div key={i} className="bg-white p-6 rounded-[2rem] shadow-premium border border-slate-50 hover:border-pink-500 transition-all group">
             <div className={clsx("w-12 h-12 rounded-2xl flex items-center justify-center mb-6 shadow-premium group-hover:scale-110 transition-transform", stat.color)}>
                <stat.icon className="w-6 h-6" />
             </div>
             <p className="text-[11px] font-bold text-slate-400 uppercase tracking-widest mb-1">{stat.label}</p>
             <div className="flex items-baseline gap-3">
                <h3 className="text-[20px] font-bold text-[#0a3d62] tracking-tighter">{stat.value}</h3>
                <span className="text-[9px] font-bold text-pink-500 px-2 py-0.5 rounded-lg bg-pink-50">{stat.grow}</span>
             </div>
          </div>
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
        {/* Left: Gallery Grid */}
        <div className="lg:col-span-8 flex flex-col gap-10">
           <div className="bg-white p-8 rounded-[3rem] shadow-premium border border-slate-50">
              <div className="flex items-center justify-between mb-10">
                 <h4 className="text-[14px] font-bold text-[#0a3d62] uppercase tracking-tight">Media Performance Grid</h4>
                 <div className="flex gap-3">
                    <button className="p-2 bg-slate-50 rounded-lg text-pink-500 shadow-premium">
                       <Layout className="w-4 h-4" />
                    </button>
                    <button className="p-2 bg-white text-slate-300">
                       <ImageIcon className="w-4 h-4" />
                    </button>
                 </div>
              </div>
              
              <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
                 {[1,2,3,4,5,6].map(n => (
                    <div key={n} className="aspect-square bg-slate-50 rounded-[2.5rem] relative overflow-hidden group cursor-pointer border border-slate-100/50 shadow-premium">
                       <div className="absolute inset-0 bg-gradient-to-tr from-[#0a3d62]/80 to-transparent flex flex-col justify-end p-6 opacity-0 group-hover:opacity-100 transition-all duration-500">
                          <div className="flex items-center gap-4 text-white">
                             <div className="flex items-center gap-1.5">
                                <Heart className="w-4 h-4 fill-white" />
                                <span className="text-[10px] font-black">{Math.floor(Math.random() * 500)}</span>
                             </div>
                             <div className="flex items-center gap-1.5">
                                <MessageCircle className="w-4 h-4 fill-white" />
                                <span className="text-[10px] font-black">{Math.floor(Math.random() * 50)}</span>
                             </div>
                          </div>
                       </div>
                       <div className="w-full h-full flex flex-col items-center justify-center p-8 text-center bg-white group-hover:opacity-0 transition-opacity">
                          <ImageIcon className="w-10 h-10 text-slate-100 mb-4" />
                          <span className="text-[9px] font-bold text-slate-300 uppercase tracking-widest">Media #{n} Preview</span>
                       </div>
                    </div>
                 ))}
              </div>
           </div>
        </div>

        {/* Right: Followers & Top Insights */}
        <div className="lg:col-span-4 flex flex-col gap-10">
           <div className="bg-gradient-to-tr from-yellow-400 via-red-500 to-purple-600 p-8 rounded-[3rem] shadow-premium text-white relative overflow-hidden group">
              <h4 className="text-[14px] font-bold uppercase tracking-tight mb-8">Audience Velocity</h4>
              <div className="space-y-8">
                 {[
                   { label: 'Profile Visits', val: '12K', pct: '85' },
                   { label: 'Bio Clicks', val: '456', pct: '42' },
                   { label: 'Saved Posts', val: '890', pct: '68' }
                 ].map((metric, i) => (
                   <div key={i} className="space-y-3">
                      <div className="flex justify-between items-baseline">
                         <span className="text-[10px] font-bold uppercase tracking-widest opacity-70">{metric.label}</span>
                         <span className="text-[12px] font-black">{metric.val}</span>
                      </div>
                      <div className="h-1.5 bg-white/20 rounded-full overflow-hidden">
                         <div className="h-full bg-white transition-all duration-1000 shadow-[0_0_15px_rgba(255,255,255,0.5)]" style={{ width: `${metric.pct}%` }} />
                      </div>
                   </div>
                 ))}
              </div>
              <div className="absolute top-[-20%] left-[-10%] w-32 h-32 bg-white/10 rounded-full blur-[40px]" />
           </div>

           <div className="bg-white p-8 rounded-[3rem] shadow-premium border border-slate-50">
              <h4 className="text-[14px] font-bold text-[#0a3d62] uppercase tracking-tight mb-8">Best Posting Times</h4>
              <div className="grid grid-cols-7 gap-2">
                 {['M', 'T', 'W', 'T', 'F', 'S', 'S'].map((day, i) => (
                    <div key={i} className="flex flex-col items-center gap-3">
                       <div className={clsx("w-full h-24 rounded-xl flex items-end justify-center py-2 transition-all group/bar", i === 3 ? 'bg-pink-50' : 'bg-slate-50')}>
                          <div 
                             className={clsx("w-2 rounded-full transition-all duration-700", i === 3 ? 'bg-pink-500 h-[80%]' : 'bg-slate-200 h-[40%]')} 
                          />
                       </div>
                       <span className="text-[10px] font-bold text-slate-300 uppercase">{day}</span>
                    </div>
                 ))}
              </div>
           </div>
        </div>
      </div>
    </div>
  );
}
