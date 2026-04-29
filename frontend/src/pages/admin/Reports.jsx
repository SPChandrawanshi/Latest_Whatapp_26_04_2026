import React from 'react';
import { 
  FilePieChart, 
  Download, 
  Calendar, 
  TrendingUp, 
  Users, 
  CheckCircle2, 
  Clock,
  Filter,
  ArrowUpRight,
  ChevronRight
} from 'lucide-react';
import { useCustomers } from '../../context/CustomerContext';
import { useToast } from '../../context/ToastContext';
import { statsApi } from '../../api/statsApi';
import { clsx } from 'clsx';

export default function Reports() {
  const { activeCustomers } = useCustomers();
  const [stats, setStats] = React.useState({ totalLeads: 0, newLeads: 0, convertedLeads: 0, activeChats: 0, pendingFollowups: 0 });
  const { showToast } = useToast();

  React.useEffect(() => {
    statsApi.getDashboardStats().then(res => {
      if (res.success) setStats(res.data);
    }).catch(console.error);
  }, []);
  
  const totalApproved = stats.totalLeads - stats.newLeads;
  const totalPending = stats.newLeads;
  const totalConversations = stats.activeChats;

  const handleExport = (type) => {
    showToast(`Generating ${type} Report for ${totalApproved} clients...`, 'success');
  };

  return (
    <div className="space-y-10 pb-12">
      {/* Premium Header */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-8 mb-12">
        <div>
          <h2 className="text-[12px] font-bold text-[#0a3d62] uppercase tracking-tight">Intelligence & Analytics</h2>
          <div className="text-slate-400 text-[12px] font-normal mt-0.5 tracking-wide flex items-center gap-2">
            <div className="w-1 h-1 rounded-full bg-[#0a3d62]/40" />
            Performance Audit • Lifecycle Monitoring • Efficiency Tracking
          </div>
        </div>
        <div className="flex items-center gap-4">
           <button className="flex items-center gap-2 px-6 py-3 bg-white border border-slate-100 rounded-xl text-[12px] font-semibold uppercase tracking-wider text-slate-400 hover:text-[#0a3d62] transition-all shadow-premium active:scale-95">
              <Filter className="w-4 h-4" />
              Custom Filter
           </button>
           <button 
             onClick={() => handleExport('PDF')}
             className="flex items-center gap-2 px-6 py-3 bg-[#0a3d62] rounded-xl text-[12px] font-semibold uppercase tracking-wider text-white shadow-premium hover:opacity-90 active:scale-95 transition-all"
           >
              <Download className="w-4 h-4" />
              Export Full PDF
           </button>
        </div>
      </div>

      {/* Analytics Summary Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        <ReportMetric 
          label="Conversion Velocity" 
          value={`${totalApproved} / ${totalApproved + totalPending}`} 
          sub="Total Lifecycle Conversion" 
          icon={TrendingUp} 
          trend="+12% MoM"
          color="text-[#0a3d62]"
        />
        <ReportMetric 
          label="Total Database" 
          value={totalApproved} 
          sub="Active Verified Clients" 
          icon={Users} 
          trend="Live"
          color="text-emerald-500"
        />
        <ReportMetric 
          label="Engagement Hub" 
          value={totalConversations} 
          sub="Individual Chat Threads" 
          icon={CheckCircle2} 
          trend="Direct"
          color="text-indigo-500"
        />
        <ReportMetric 
          label="Response Efficiency" 
          value="4.2m" 
          sub="Avg Service TAT" 
          icon={Clock} 
          trend="-30s"
          color="text-amber-500"
        />
      </div>

      {/* Main Reporting Canvas */}
      <div className="grid grid-cols-1 xl:grid-cols-12 gap-10">
        {/* Left Column: Data Trends */}
        <div className="xl:col-span-8 space-y-10">
          <div className="bg-white p-8 rounded-[2.5rem] shadow-premium border border-slate-50 relative overflow-hidden group hover:border-[#0a3d62] transition-all duration-500">
             <div className="flex justify-between items-start mb-12">
                <div>
                   <h4 className="text-[14px] font-bold text-[#0a3d62] uppercase tracking-tight">Acquisition Analysis</h4>
                   <p className="text-[12px] text-slate-400 mt-1">Growth trends over the last 12 periods</p>
                </div>
                <div className="p-3 bg-slate-50 rounded-2xl group-hover:bg-[#0a3d62] group-hover:text-white transition-all">
                   <Calendar className="w-5 h-5" />
                </div>
             </div>

             <div className="h-64 flex items-end gap-3 px-2">
                {[60, 45, 80, 55, 95, 70, 40, 100, 85, 65, 50, 75].map((h, i) => (
                  <div key={i} className="flex-1 flex flex-col items-center gap-4 group/bar">
                     <div 
                       className="w-full bg-slate-50 rounded-t-xl group-hover/bar:bg-[#0a3d62]/10 transition-all relative overflow-hidden" 
                       style={{ height: `${h}%` }}
                     >
                        {i === 7 && <div className="absolute inset-0 bg-[#0a3d62] animate-pulse opacity-80" />}
                     </div>
                     <span className="text-[9px] font-bold text-slate-300 uppercase tracking-widest group-hover/bar:text-[#0a3d62]">P{i+1}</span>
                  </div>
                ))}
             </div>
             
             <div className="absolute top-[-30%] right-[-10%] w-[50%] h-[100%] bg-[#0a3d62]/5 rounded-full blur-[100px] pointer-events-none group-hover:bg-[#0a3d62]/10 transition-all duration-700" />
          </div>

          {/* Detailed Audit Table Placeholder */}
          <div className="bg-white p-8 rounded-[2.5rem] shadow-premium border border-slate-50">
             <h4 className="text-[14px] font-bold text-[#0a3d62] uppercase tracking-tight mb-8">Performance Ledger</h4>
             <div className="space-y-4">
                {activeCustomers.length > 0 ? activeCustomers.slice(0, 5).map((user, i) => (
                  <div key={i} className="flex items-center justify-between p-5 bg-slate-50/50 rounded-2xl hover:bg-white hover:shadow-premium border border-transparent hover:border-slate-100 transition-all group">
                     <div className="flex items-center gap-5">
                        <div className="w-10 h-10 bg-white rounded-xl shadow-premium flex items-center justify-center font-bold text-[#0a3d62] text-[12px] group-hover:bg-[#0a3d62] group-hover:text-white transition-all">
                           {user.name[0]}
                        </div>
                        <div>
                           <p className="text-[12px] font-bold text-slate-800">{user.name}</p>
                           <p className="text-[10px] text-slate-400 font-bold uppercase tracking-widest">{user.phone}</p>
                        </div>
                     </div>
                     <div className="flex items-center gap-8">
                        <div className="text-right hidden sm:block">
                           <p className="text-[12px] font-bold text-[#0a3d62]">Verified</p>
                           <p className="text-[10px] text-slate-300 uppercase font-bold tracking-widest">Status</p>
                        </div>
                        <ChevronRight className="w-5 h-5 text-slate-200 group-hover:text-[#0a3d62] transition-colors" />
                     </div>
                  </div>
                )) : (
                  <div className="py-20 text-center">
                     <FilePieChart className="w-12 h-12 text-slate-100 mx-auto mb-4" />
                     <p className="text-[12px] text-slate-400 font-bold uppercase tracking-widest">No audit data available</p>
                  </div>
                )}
             </div>
          </div>
        </div>

        {/* Right Column: Summaries & Quick Exports */}
        <div className="xl:col-span-4 space-y-10">
          <div className="bg-[#0a3d62] p-8 rounded-[3rem] shadow-premium text-white relative overflow-hidden">
             <h4 className="text-[14px] font-bold uppercase tracking-tight mb-2">Quarterly Review</h4>
             <p className="text-[12px] opacity-70 font-normal leading-relaxed mb-10">Consolidated system performance metrics for the current fiscal quarter.</p>
             
             <div className="space-y-8">
                <ProgressRow label="Conversion Rate" pct={Math.min(100, (totalApproved/totalPending || 0) * 10).toFixed(0)} />
                <ProgressRow label="Client Satisfaction" pct="94" />
                <ProgressRow label="Team Efficiency" pct="88" />
             </div>

             <button 
               onClick={() => handleExport('EXCEL')}
               className="w-full py-4 bg-white/10 hover:bg-white text-white hover:text-[#0a3d62] rounded-2xl mt-12 text-[10px] font-bold uppercase tracking-widest transition-all shadow-premium"
             >
                Download CSV Dataset
             </button>

             <div className="absolute bottom-[-10%] left-[-10%] w-32 h-32 bg-white/5 rounded-full blur-[40px]" />
          </div>

          <div className="bg-white p-8 rounded-[3rem] shadow-premium border border-slate-50">
             <h4 className="text-[14px] font-bold text-[#0a3d62] uppercase tracking-tight mb-8 text-center">Recent Exports</h4>
             <div className="space-y-6">
                {[
                  { name: 'System_Audit_Apr.pdf', size: '2.4 MB', date: '2h ago' },
                  { name: 'Billing_Summary.csv', size: '156 KB', date: 'Yesterday' },
                  { name: 'User_Growth_Q1.xlsx', size: '8.2 MB', date: '3 d' },
                ].map((doc, i) => (
                  <div key={i} className="flex items-center justify-between group cursor-pointer active:scale-95">
                     <div className="flex items-center gap-4">
                        <div className="p-2.5 bg-slate-50 rounded-xl text-slate-300 group-hover:bg-[#0a3d62] group-hover:text-white transition-all">
                           <Download className="w-4 h-4" />
                        </div>
                        <div>
                           <p className="text-[11px] font-bold text-slate-800 break-all">{doc.name}</p>
                           <p className="text-[9px] text-slate-400 font-bold uppercase tracking-widest">{doc.size}</p>
                        </div>
                     </div>
                     <span className="text-[10px] text-slate-300 font-bold uppercase italic">{doc.date}</span>
                  </div>
                ))}
             </div>
          </div>
        </div>
      </div>
    </div>
  );
}

const ReportMetric = ({ label, value, sub, icon: Icon, trend, color }) => (
  <div className="bg-white p-6 rounded-[2rem] shadow-premium border border-slate-50 hover:border-[#0a3d62] transition-all group relative overflow-hidden cursor-pointer active:scale-[0.98]">
     <div className={clsx("w-12 h-12 rounded-2xl bg-slate-50 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform shadow-premium", color)}>
        <Icon className="w-6 h-6" />
     </div>
     <p className="text-[11px] font-bold text-slate-400 uppercase tracking-widest mb-1">{label}</p>
     <div className="flex items-baseline gap-3">
        <h3 className="text-[20px] font-bold text-[#0a3d62] tracking-tighter">{value}</h3>
        <span className={clsx("text-[9px] font-bold px-2 py-0.5 rounded-lg bg-slate-50", color)}>{trend}</span>
     </div>
     <p className="text-[11px] text-slate-400 font-normal mt-3 opacity-70 italic">{sub}</p>
     <div className="absolute top-0 right-0 w-24 h-24 bg-slate-50/50 rounded-full blur-[40px] translate-x-12 translate-y-[-12px] group-hover:bg-[#0a3d62]/5 transition-all" />
  </div>
);

const ProgressRow = ({ label, pct }) => (
  <div className="space-y-3">
     <div className="flex justify-between items-baseline">
        <span className="text-[10px] font-bold uppercase tracking-widest text-white/60">{label}</span>
        <span className="text-[14px] font-black text-white">{pct}%</span>
     </div>
     <div className="h-1.5 w-full bg-white/10 rounded-full overflow-hidden">
        <div className="h-full bg-white transition-all duration-1000 shadow-[0_0_15px_rgba(255,255,255,0.5)]" style={{ width: `${pct}%` }} />
     </div>
  </div>
);
