import React, { useEffect, useState } from 'react';
import { DashboardBase } from '../common/DashboardBase';
import { statsApi } from '../../api/statsApi';
import { 
  Users, 
  TrendingUp, 
  Clock, 
  Target, 
  CheckCircle2, 
  ArrowUpRight, 
  Filter,
  Download,
  Calendar,
  Zap,
  ShieldCheck
} from 'lucide-react';
import { motion } from 'framer-motion';
import { clsx } from 'clsx';
import { useCustomers } from '../../context/CustomerContext';
import { useToast } from '../../context/ToastContext';

export default function AdminDashboard() {
  const [trendTab, setTrendTab] = useState('Weekly');
  const [stats, setStats] = useState({ totalLeads: 0, newLeads: 0, convertedLeads: 0, activeChats: 0, pendingFollowups: 0 });
  const { showToast } = useToast();

  useEffect(() => {
    statsApi.getDashboardStats().then(res => {
      if (res.success) setStats(res.data);
    }).catch(console.error);
  }, []);
  
  const handleReport = () => showToast('System Report Generated (PDF)', 'success');
  const handleFilter = () => showToast('Global Filters Applied', 'info');

  return (
    <div className="flex flex-col gap-10 pb-12">
      {/* Header with improved XL actions */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
        <div>
          <h2 className="text-[12px] font-bold text-[#0a3d62] uppercase tracking-tight">Enterprise Infrastructure</h2>
          <div className="text-slate-400 mt-0.5 font-normal text-[12px] tracking-wide flex items-center gap-2">
            <div className="w-1 h-1 rounded-full bg-[#0a3d62]/40" />
            Central Authority Dashboard • Real-time Monitoring
          </div>
        </div>
        <div className="flex items-center gap-4">
          <button 
            onClick={handleFilter}
            className="flex items-center gap-2 px-6 py-3 bg-white border border-slate-100 rounded-xl text-[12px] font-semibold uppercase tracking-wider text-slate-400 hover:text-[#0a3d62] hover:bg-slate-50 transition-all active:scale-95 shadow-premium"
          >
            <Filter className="w-4 h-4" />
            Audit Filter
          </button>
          <button 
            onClick={handleReport}
            className="flex items-center gap-2 px-6 py-3 bg-[#0a3d62] rounded-xl text-[12px] font-semibold uppercase tracking-wider text-white hover:opacity-90 active:scale-95 transition-all shadow-premium"
          >
            <Download className="w-4 h-4" />
            System Report
          </button>
        </div>
      </div>

      <div className="grid grid-cols-1 xl:grid-cols-4 gap-10">
        <div className="xl:col-span-1 flex flex-col gap-8">
          <h3 className="text-[12px] font-semibold text-slate-300 uppercase tracking-widest px-2 italic">Live Performance KPIs</h3>
          
          <MetricCard 
            icon={Users} 
            label="Total Active Clients" 
            value={stats.totalLeads} 
            sub="Clients in live CRM pool" 
            color="bg-[#0a3d62]" 
            onClick={() => showToast('Opening Customer Database', 'info')}
          />
          <MetricCard 
            icon={ShieldCheck} 
            label="Pending Approvals" 
            value={stats.newLeads} 
            sub="Awaiting Verification" 
            color="bg-emerald-500" 
            onClick={() => showToast('Opening Verification Portal', 'info')}
          />
          <MetricCard 
            icon={Clock} 
            label="Active Chats" 
            value={stats.activeChats} 
            sub="Live conversations" 
            color="bg-amber-500" 
            onClick={() => showToast('Response Monitor Active', 'info')}
          />
          <MetricCard 
            icon={Target} 
            label="Efficiency" 
            value={stats.totalLeads ? `${(stats.convertedLeads * 100 / stats.totalLeads).toFixed(1)}%` : '0%'} 
            sub="Approval success rate" 
            color="bg-rose-500" 
            onClick={() => showToast('Efficiency Drilldown Loaded', 'info')}
          />
        </div>

        <div className="xl:col-span-3 flex flex-col gap-6">
          <div className="bg-white p-6 rounded-2xl shadow-premium border border-slate-50 hover:border-[#0a3d62] min-h-[350px] flex flex-col relative overflow-hidden group transition-all duration-500">
            <div className="flex items-center justify-between mb-8 z-10">
              <div>
                <h3 className="text-[12px] font-bold text-[#0a3d62] uppercase tracking-tight">Conversion Analytics</h3>
                <p className="text-[12px] text-slate-400 font-normal mt-0.5">Engagement performance</p>
              </div>
              <div className="flex bg-slate-50/50 p-1.5 rounded-xl border border-slate-100">
                <button 
                  onClick={() => setTrendTab('Weekly')}
                  className={clsx(
                    "px-4 py-1.5 rounded-lg text-[9px] font-bold uppercase tracking-wider transition-all",
                    trendTab === 'Weekly' ? "bg-white shadow-premium text-[#0a3d62]" : "text-slate-400 hover:text-slate-600"
                  )}
                >
                  Weekly
                </button>
                <button 
                  onClick={() => setTrendTab('Monthly')}
                  className={clsx(
                    "px-4 py-1.5 rounded-lg text-[9px] font-bold uppercase tracking-wider transition-all",
                    trendTab === 'Monthly' ? "bg-white shadow-premium text-[#0a3d62]" : "text-slate-400 hover:text-slate-600"
                  )}
                >
                  Monthly
                </button>
              </div>
            </div>

            <div className="flex-1 flex items-end gap-4 px-6 pb-6">
              {[40, 70, 45, 90, 65, 80, 50, 100, 30, 85, 60, 75].map((h, i) => (
                <button key={i} className="flex-1 flex flex-col items-center gap-4 group/bar active:scale-95 transition-all" onClick={() => showToast(`Data for Period P${i+1} Loaded`, 'info')}>
                   <div 
                    className="w-full bg-slate-50 rounded-t-2xl group-hover/bar:bg-[#0a3d62]/10 transition-all relative overflow-hidden" 
                    style={{ height: `${h}%`, minHeight: '10%' }}
                   >
                     {i === 7 && <div className="absolute inset-0 bg-[#0a3d62] opacity-80 animate-pulse" />}
                   </div>
                   <span className="text-[10px] font-bold text-slate-300 group-hover/bar:text-[#0a3d62] uppercase italic">P{i+1}</span>
                </button>
              ))}
            </div>
            <div className="absolute top-[-50%] right-[-10%] w-[60%] h-[100%] bg-[#0a3d62]/5 rounded-full blur-[120px] pointer-events-none group-hover:bg-[#0a3d62]/10 transition-all duration-700" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
             <ActivityFeed showToast={showToast} />
             <div className="flex flex-col gap-6">
                <div className="bg-white p-6 rounded-2xl shadow-premium border border-slate-50 hover:border-[#0a3d62] transition-all">
                <h4 className="font-bold text-[#0a3d62] mb-4 text-[12px] uppercase tracking-tight">Authority Hierarchy</h4>
                  <div className="grid grid-cols-2 gap-4">
                    {[
                      { name: 'Siddharth J.', role: 'Head Admin', status: 'Online' },
                      { name: 'Rahul Kumar', role: 'Operations', status: 'In-Call' },
                      { name: 'Priya Verma', role: 'Support Mgr', status: 'Offline' },
                      { name: 'Anita Singh', role: 'Tech Customer', status: 'Online' },
                    ].map((adm, i) => (
                      <button 
                        key={i} 
                        onClick={() => showToast(`Opening Profile: ${adm.name}`, 'info')}
                        className="p-4 rounded-xl border border-slate-50 hover:border-[#0a3d62] transition-all cursor-pointer group bg-slate-50/30 text-left active:scale-95 shadow-premium"
                      >
                        <p className="text-[11px] font-bold text-slate-800 group-hover:text-[#0a3d62] tracking-tighter Customering-none mb-1">{adm.name}</p>
                        <p className="text-[9px] font-bold text-slate-300 uppercase tracking-widest">{adm.role}</p>
                        <div className="flex items-center gap-2 mt-4">
                           <div className={`w-2 h-2 rounded-full ${adm.status === 'Online' ? 'bg-emerald-500 animate-pulse' : 'bg-slate-300'}`} />
                           <span className="text-[9px] font-bold text-slate-400 uppercase tracking-widest Customering-none">{adm.status}</span>
                        </div>
                      </button>
                    ))}
                  </div>
                </div>

                <div className="bg-white p-6 rounded-2xl shadow-premium border border-slate-50 hover:border-[#0a3d62] transition-all">
                  <h4 className="font-bold text-[#0a3d62] mb-6 text-[12px] uppercase tracking-tight">Infrastructure Integration</h4>
                  <div className="space-y-6">
                    <StatRow label="WhatsApp Master API" status="ACTIVE" color="text-emerald-500" icon={Zap} />
                    <StatRow label="Elastic Customer Engine" status="SYNCED" color="text-indigo-500" icon={ShieldCheck} />
                    <StatRow label="Real-Time Data Sync" status="HEALTHY" color="text-emerald-500" icon={CheckCircle2} />
                  </div>
                </div>
             </div>
          </div>
        </div>
      </div>
    </div>
  );
}

const MetricCard = ({ icon: Icon, label, value, sub, color, onClick }) => (
  <button 
    onClick={onClick}
    className="bg-white p-5 rounded-xl shadow-premium border border-transparent hover:border-[#0a3d62] transition-all cursor-pointer group active:scale-[0.98] text-left relative overflow-hidden"
  >
    <div className={`w-10 h-10 ${color} rounded-xl flex items-center justify-center text-white shadow-premium mb-4 group-hover:scale-110 transition-transform`}>
      <Icon className="w-5 h-5" />
    </div>
    <p className="text-[12px] font-medium text-slate-400 uppercase tracking-wide mb-1">{label}</p>
    <h3 className="text-[18px] font-semibold text-[#0a3d62] tracking-tight">{value}</h3>
    <p className="text-[11px] text-slate-500 mt-3 font-normal opacity-70">{sub}</p>
    <div className="absolute top-0 right-0 w-24 h-24 bg-slate-50 rounded-full blur-3xl translate-x-8 translate-y-[-8px] opacity-0 group-hover:opacity-100 transition-opacity" />
  </button>
);

const ActivityFeed = ({ showToast }) => (
  <div className="bg-white p-6 rounded-2xl shadow-premium border border-slate-50 hover:border-[#0a3d62] transition-all">
    <div className="flex items-center justify-between mb-8">
      <h4 className="text-[14px] font-semibold text-[#0a3d62] tracking-tight uppercase">System Context</h4>
      <button className="p-2.5 bg-slate-50 rounded-xl hover:bg-[#0a3d62] hover:text-white transition-all active:scale-90" onClick={() => showToast('Full Activity Log Opened', 'info')}>
        <Calendar className="w-5 h-5" />
      </button>
    </div>
    <div className="space-y-8">
      {[
        { user: "Jatin", action: "new Customer assigned", time: "2m", color: "bg-indigo-50" },
        { user: "Rahul", action: "closed inquiry", time: "15m", color: "bg-emerald-50" },
        { user: "System", action: "WhatsApp sync failed", time: "1h", color: "bg-rose-50" },
        { user: "Priya", action: "updated status", time: "3h", color: "bg-amber-50" },
      ].map((item, i) => (
        <div key={i} className="flex gap-6 items-start relative group">
          {i !== 3 && <div className="absolute left-6 top-12 bottom-[-20px] w-[2px] bg-slate-50" />}
          <button className={`w-12 h-12 rounded-2xl ${item.color} border border-slate-100 flex items-center justify-center text-[14px] font-semibold text-[#0a3d62] relative z-10 hover:bg-[#0a3d62] hover:text-white transition-all active:scale-90 shadow-premium`}>
            {item.user[0]}
          </button>
          <div className="flex-1 pb-2">
            <div className="flex justify-between items-start">
              <p className="text-[14px] font-semibold text-slate-800 tracking-tight">{item.user}</p>
              <span className="text-[12px] font-normal text-slate-300 uppercase tracking-wider">{item.time} ago</span>
            </div>
            <p className="text-[13px] text-slate-400 mt-1 font-normal italic">{item.action}</p>
          </div>
        </div>
      ))}
    </div>
  </div>
);

const StatRow = ({ label, status, color, icon: Icon }) => (
  <div className="flex items-center justify-between p-4 bg-slate-50/50 rounded-[1.5rem] border border-transparent hover:border-slate-100 transition-all group">
     <div className="flex items-center gap-4">
        <div className={clsx("p-2 rounded-xl bg-white shadow-premium transition-transform group-hover:scale-110", color)}>
           <Icon className="w-4 h-4" />
        </div>
        <span className="text-[13px] font-normal text-slate-500 uppercase tracking-wider">{label}</span>
     </div>
     <span className={`text-[12px] font-semibold uppercase tracking-wide ${color}`}>{status}</span>
  </div>
);
