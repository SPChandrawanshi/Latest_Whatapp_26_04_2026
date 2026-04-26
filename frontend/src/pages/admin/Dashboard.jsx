import React from 'react';
import { DashboardBase } from '../common/DashboardBase';
import { 
  Users, 
  TrendingUp, 
  Clock, 
  Target, 
  CheckCircle2, 
  ArrowUpRight, 
  Filter,
  Download,
  Calendar
} from 'lucide-react';
import { motion } from 'framer-motion';

export default function AdminDashboard() {
  return (
    <div className="flex flex-col gap-8 pb-10">
      {/* Header with quick actions */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <h2 className="text-3xl font-extrabold text-[#0a3d62] tracking-tight">Admin Dashboard</h2>
          <p className="text-slate-500 mt-1 font-medium italic">Comprehensive system overview & team tracking.</p>
        </div>
        <div className="flex items-center gap-3">
          <button className="flex items-center gap-2 px-4 py-2 bg-white border border-slate-200 rounded-xl text-sm font-bold text-slate-600 hover:border-primary transition-all shadow-sm">
            <Filter className="w-4 h-4" />
            Filter
          </button>
          <button className="flex items-center gap-2 px-4 py-2 bg-[#0a3d62] border border-[#0a3d62] rounded-xl text-sm font-bold text-white hover:bg-white hover:text-primary transition-all shadow-lg hover:shadow-[#0a3d62]/20">
            <Download className="w-4 h-4" />
            Report
          </button>
        </div>
      </div>

      {/* Main Grid: Vertical Stats and Charts */}
      <div className="grid grid-cols-1 xl:grid-cols-4 gap-8">
        
        {/* Left Vertical Section: Key Metrics */}
        <div className="xl:col-span-1 flex flex-col gap-6">
          <h3 className="text-xs font-bold text-slate-400 uppercase tracking-widest px-1">Performance Benchmarks</h3>
          
          <MetricCard 
            icon={TrendingUp} 
            label="Daily Goal" 
            value="84%" 
            sub="24 / 30 Leads converted" 
            color="bg-[#0a3d62]" 
          />
          <MetricCard 
            icon={Users} 
            label="Active Agents" 
            value="12 / 15" 
            sub="3 agents currently offline" 
            color="bg-emerald-500" 
          />
          <MetricCard 
            icon={Clock} 
            label="Avg. Response" 
            value="4.2m" 
            sub="30s faster than yesterday" 
            color="bg-amber-500" 
          />
          <MetricCard 
            icon={Target} 
            label="Success Rate" 
            value="12.8%" 
            sub="+1.2% point increase" 
            color="bg-rose-500" 
          />
        </div>

        {/* Right Section: Big Data Views */}
        <div className="xl:col-span-3 flex flex-col gap-8">
          
          {/* Main Analytics Canvas */}
          <div className="bg-white p-8 rounded-[2.5rem] shadow-premium border border-slate-50 hover:border-primary min-h-[400px] flex flex-col relative overflow-hidden group transition-all duration-300">
            <div className="flex items-center justify-between mb-8 z-10">
              <div>
                <h3 className="text-xl font-extrabold text-[#0a3d62]">Conversion Trends</h3>
                <p className="text-sm text-slate-400 font-medium">Monthly performance across all channels</p>
              </div>
              <div className="flex bg-slate-50 p-1.5 rounded-xl border border-slate-100">
                <button className="px-4 py-1.5 rounded-lg text-xs font-bold bg-white shadow-sm text-[#0a3d62]">Weekly</button>
                <button className="px-4 py-1.5 rounded-lg text-xs font-bold text-slate-400 hover:text-slate-600 transition-colors">Monthly</button>
              </div>
            </div>

            {/* Simulated Chart Placeholder */}
            <div className="flex-1 flex items-end gap-3 px-4 pb-4">
              {[40, 70, 45, 90, 65, 80, 50, 100, 30, 85, 60, 75].map((h, i) => (
                <div key={i} className="flex-1 flex flex-col items-center gap-3 group/bar">
                   <div 
                    className="w-full bg-slate-100 rounded-t-xl group-hover/bar:bg-primary/20 transition-all relative overflow-hidden" 
                    style={{ height: `${h}%` }}
                   >
                     {i === 7 && <div className="absolute inset-0 bg-[#0a3d62] opacity-80" />}
                   </div>
                   <span className="text-[10px] font-bold text-slate-300">M{i+1}</span>
                </div>
              ))}
            </div>

            {/* Backglow decoration */}
            <div className="absolute top-[-50%] right-[-10%] w-[60%] h-[100%] bg-primary/5 rounded-full blur-[100px] pointer-events-none" />
          </div>

          {/* Secondary Stats Row */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
             <ActivityFeed />
             <div className="flex flex-col gap-8">
                {/* Small Admin Cards Section */}
                <div className="bg-white p-6 rounded-[2rem] shadow-premium border border-slate-50">
                  <h4 className="font-extrabold text-[#0a3d62] mb-4 text-sm uppercase tracking-widest">Direct Admins</h4>
                  <div className="grid grid-cols-2 gap-3">
                    {[
                      { name: 'Admin One', role: 'Technical', status: 'Online' },
                      { name: 'Admin Two', role: 'Support', status: 'In-Call' },
                      { name: 'Admin Three', role: 'Sales', status: 'Offline' },
                      { name: 'Admin Four', role: 'Manager', status: 'Online' },
                    ].map((adm, i) => (
                      <div key={i} className="p-3 rounded-2xl border-2 border-slate-50 hover:border-[#0a3d62] transition-all cursor-pointer group bg-slate-50/30">
                        <p className="text-[10px] font-black text-slate-800 group-hover:text-[#0a3d62]">{adm.name}</p>
                        <p className="text-[8px] font-bold text-slate-400 mt-0.5">{adm.role}</p>
                        <div className="flex items-center gap-1.5 mt-2">
                           <span className={`w-1.5 h-1.5 rounded-full ${adm.status === 'Online' ? 'bg-emerald-500' : 'bg-slate-300'}`} />
                           <span className="text-[8px] font-black text-slate-500 uppercase">{adm.status}</span>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="bg-white p-6 rounded-[2rem] shadow-premium border border-slate-50">
                  <h4 className="font-extrabold text-[#0a3d62] mb-4 text-sm uppercase tracking-widest">Live Integration</h4>
                  <div className="space-y-4">
                    <StatRow label="WhatsApp API" status="Online" color="text-emerald-500" />
                    <StatRow label="Lead Sync" status="Healthy" color="text-emerald-500" />
                  </div>
                </div>
             </div>
          </div>
        </div>

      </div>
    </div>
  );
}

const MetricCard = ({ icon: Icon, label, value, sub, color }) => (
  <motion.div 
    whileHover={{ y: -5 }}
    className="bg-white p-6 rounded-3xl shadow-premium border border-transparent hover:border-primary transition-all cursor-default group"
  >
    <div className={`w-12 h-12 ${color} rounded-2xl flex items-center justify-center text-white shadow-lg mb-4 group-hover:scale-110 transition-transform`}>
      <Icon className="w-6 h-6" />
    </div>
    <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">{label}</p>
    <h3 className="text-2xl font-black text-[#0a3d62] mt-1">{value}</h3>
    <p className="text-xs text-slate-500 mt-2 font-medium">{sub}</p>
  </motion.div>
);

const ActivityFeed = () => (
  <div className="bg-white p-8 rounded-[2rem] shadow-premium border border-slate-50 hover:border-primary transition-all">
    <div className="flex items-center justify-between mb-8">
      <h4 className="text-lg font-extrabold text-[#0a3d62]">System Activity</h4>
      <button className="p-2 bg-slate-50 rounded-lg hover:bg-slate-100 transition-colors">
        <Calendar className="w-4 h-4 text-slate-400" />
      </button>
    </div>
    <div className="space-y-6">
      {[
        { user: "Jatin", action: "new lead assigned", time: "2m", color: "bg-indigo-50" },
        { user: "Rahul", action: "closed inquiry", time: "15m", color: "bg-emerald-50" },
        { user: "System", action: "WhatsApp sync failed", time: "1h", color: "bg-rose-50" },
        { user: "Priya", action: "updated status", time: "3h", color: "bg-amber-50" },
      ].map((item, i) => (
        <div key={i} className="flex gap-4 items-start relative group">
          {i !== 3 && <div className="absolute left-5 top-10 bottom-0 w-[1px] bg-slate-100" />}
          <div className={`w-10 h-10 rounded-xl ${item.color} border border-slate-100 flex items-center justify-center text-xs font-black text-[#0a3d62]/70 relative z-10 group-hover:bg-[#0a3d62] group-hover:text-white transition-all`}>
            {item.user[0]}
          </div>
          <div className="flex-1 pb-6">
            <div className="flex justify-between items-start">
              <p className="text-sm font-black text-slate-800 tracking-tight">{item.user}</p>
              <span className="text-[10px] font-bold text-slate-300 uppercase">{item.time} ago</span>
            </div>
            <p className="text-xs text-slate-500 mt-1 font-medium">{item.action}</p>
          </div>
        </div>
      ))}
    </div>
  </div>
);

const StatRow = ({ label, status, color }) => (
  <div className="flex items-center justify-between">
    <span className="text-sm font-bold text-slate-500">{label}</span>
    <span className={`text-[10px] font-black uppercase tracking-widest ${color}`}>{status}</span>
  </div>
);
