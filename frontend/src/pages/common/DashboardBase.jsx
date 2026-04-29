import React, { useEffect, useState } from 'react';
import { useCustomers } from '../../context/CustomerContext';
import { useToast } from '../../context/ToastContext';
import { DataTable } from '../../components/tables/DataTable';
import { statsApi } from '../../api/statsApi';

export function DashboardBase({ role }) {
  const { activeCustomers } = useCustomers();
  const [stats, setStats] = useState({ totalLeads: 0, newLeads: 0, convertedLeads: 0, activeChats: 0, pendingFollowups: 0 });
  const { showToast } = useToast();

  useEffect(() => {
    statsApi.getDashboardStats().then(res => {
      if (res.success) setStats(res.data);
    }).catch(console.error);
  }, []);
  
  const handleStatClick = (label) => {
    showToast(`Opening detailed analytics for: ${label}`, 'info');
  };

  return (
    <div className="flex flex-col gap-10">
      <div className="flex justify-between items-end">
        <div>
          <h2 className="text-[12px] font-bold text-[#0a3d62] uppercase tracking-tight">
            {role} Dashboard
          </h2>
          <div className="text-slate-400 mt-0.5 font-normal text-[12px] tracking-wide flex items-center gap-2">
            <div className="w-1 h-1 rounded-full bg-emerald-500" />
            Live Monitoring Active
          </div>
        </div>
      </div>

      {/* High Density XL Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {[
          { label: 'Active Clients', value: stats.totalLeads, grow: '+Live', color: 'bg-[#0a3d62]' },
          { label: 'Total Chats', value: stats.activeChats, grow: 'Sync', color: 'bg-emerald-500' },
          { label: 'Pending', value: stats.newLeads, grow: 'Tasks', color: 'bg-amber-500' },
          { label: 'Efficiency', value: stats.totalLeads ? `${(stats.convertedLeads * 100 / stats.totalLeads).toFixed(0)}%` : '0%', grow: 'Goal', color: 'bg-rose-500' },
        ].map((stat, i) => (
          <button 
            key={i} 
            onClick={() => handleStatClick(stat.label)}
            className="bg-white p-4 rounded-xl shadow-premium border border-slate-50 hover:border-[#0a3d62] transition-all flex flex-col items-start gap-3 group active:scale-[0.98] text-left relative overflow-hidden"
          >
              <div className={`w-8 h-8 rounded-lg ${stat.color} flex items-center justify-center text-white shadow-premium`}>
                <span className="text-[12px] font-bold uppercase tracking-tight">{stat.label[0]}</span>
              </div>
              <div>
                <p className="text-[12px] font-semibold text-slate-400 tracking-wide mb-0.5">{stat.label}</p>
                <div className="flex items-center gap-2">
                  <h3 className="text-[14px] font-bold text-[#0a3d62] tracking-tight">{stat.value}</h3>
                  <span className="text-[10px] font-bold text-white px-1.5 py-0.5 rounded-md bg-[#0a3d62] shadow-premium">{stat.grow}</span>
                </div>
              </div>
          </button>
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
        <div className="lg:col-span-8 flex flex-col gap-10">
           <button 
            onClick={() => showToast('Opening Full Power Analytics Canvas...', 'info')}
            className="bg-white p-8 rounded-2xl shadow-premium h-80 flex flex-col items-center justify-center border border-slate-50 hover:border-[#0a3d62] transition-all relative overflow-hidden group active:scale-[0.98]"
           >
              <div className="text-center z-10">
                <p className="text-slate-200 font-bold text-xl uppercase tracking-[0.4em] group-hover:tracking-[0.6em] group-hover:text-[#0a3d62] transition-all duration-700">Analytics Canvas</p>
                <div className="w-16 h-1 bg-[#0a3d62]/10 mx-auto mt-4 rounded-full group-hover:w-32 group-hover:bg-[#0a3d62] transition-all duration-500" />
              </div>
              <div className="absolute top-[-20%] right-[-10%] w-[60%] h-[100%] bg-[#0a3d62]/5 rounded-full blur-[100px] group-hover:bg-[#0a3d62]/10 transition-all duration-700" />
           </button>

           <DataTable 
             title="Recent Interactions" 
             columns={[
               { header: 'Client Name', key: 'name', render: (row) => <span className="font-bold text-[#0a3d62] text-[12px]">{row.name}</span> },
               { header: 'System Status', key: 'status', render: (row) => (
                 <span className="px-2 py-0.5 rounded-lg text-[9px] font-bold uppercase tracking-widest bg-emerald-100 text-emerald-600 border border-emerald-200">
                   Active User
                 </span>
               )},
             ]}
             data={activeCustomers.slice(0, 5)}
           />
        </div>

        <div className="lg:col-span-4 space-y-6">
           <div className="bg-white p-6 rounded-[2rem] shadow-premium border border-slate-50 hover:border-[#0a3d62] transition-all h-full">
              <h4 className="text-[12px] font-bold text-[#0a3d62] mb-6 uppercase tracking-tight">System Events</h4>
              <div className="space-y-6">
                {[1,2,3,4,5,6].map(n => (
                  <div key={n} className="flex gap-4 items-center">
                    <div className="w-1.5 h-8 bg-slate-100 rounded-full group-hover:bg-primary" />
                    <div>
                      <p className="text-[12px] font-bold text-slate-800">Event #{n}</p>
                      <p className="text-[11px] text-slate-400 font-normal">Updated a few seconds ago</p>
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
