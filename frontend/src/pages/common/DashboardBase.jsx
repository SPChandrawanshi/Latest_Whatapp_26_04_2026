import React from 'react';
import { DataTable } from '../../components/tables/DataTable';

export function DashboardBase({ role }) {
  const handleStatClick = (label) => {
    alert(`Opening detailed analytics for: ${label}`);
  };

  return (
    <div className="flex flex-col gap-10">
      <div className="flex justify-between items-end">
        <div>
          <h2 className="text-4xl font-black text-[#0a3d62] tracking-tighter uppercase italic">
            {role} Dashboard
            <div className="h-1.5 w-24 bg-primary mt-2 rounded-full" />
          </h2>
          <p className="text-slate-400 mt-4 font-black uppercase tracking-widest text-[11px] flex items-center gap-2">
            <div className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
            Live System Monitoring Active
          </p>
        </div>
      </div>

      {/* High Density XL Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {[
          { label: 'Leads', value: '1,284', grow: '+12.5%', color: 'bg-[#0a3d62]' },
          { label: 'Chats', value: '42', grow: 'Active', color: 'bg-emerald-500' },
          { label: 'FollowUp', value: '18', grow: '-2h', color: 'bg-amber-500' },
          { label: 'Deals', value: '156', grow: '+5%', color: 'bg-rose-500' },
        ].map((stat, i) => (
          <button 
            key={i} 
            onClick={() => handleStatClick(stat.label)}
            className="bg-white p-8 rounded-[3rem] shadow-premium border border-transparent hover:border-[#0a3d62] hover:shadow-2xl transition-all flex flex-col items-start gap-4 group active:scale-90 text-left relative overflow-hidden"
          >
            <div className={`w-16 h-16 rounded-[1.5rem] ${stat.color} flex items-center justify-center text-white shadow-xl group-hover:rotate-12 transition-transform duration-300`}>
              <span className="text-2xl font-black uppercase tracking-tighter">{stat.label[0]}</span>
            </div>
            <div>
              <p className="text-[11px] font-black text-slate-400 uppercase tracking-[0.2em] leading-none mb-2">{stat.label}</p>
              <div className="flex items-center gap-3">
                <h3 className="text-3xl font-black text-[#0a3d62] tracking-tighter">{stat.value}</h3>
                <span className="text-[10px] font-black text-white px-2 py-0.5 rounded-full bg-slate-800 shadow-sm">{stat.grow}</span>
              </div>
            </div>
            {/* Subtle deco icon */}
            <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-slate-50 rounded-full blur-3xl opacity-0 group-hover:opacity-100 transition-opacity" />
          </button>
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
        <div className="lg:col-span-8 flex flex-col gap-10">
           <button 
            onClick={() => alert('Opening Full Power Analytics Canvas...')}
            className="bg-white p-12 rounded-[3.5rem] shadow-premium h-96 flex flex-col items-center justify-center border border-slate-50 hover:border-[#0a3d62] hover:shadow-2xl transition-all relative overflow-hidden group active:scale-[0.98]"
           >
              <div className="text-center z-10">
                <p className="text-slate-200 font-black text-3xl uppercase tracking-[0.4em] group-hover:tracking-[0.6em] group-hover:text-[#0a3d62] transition-all duration-700">Analytics Canvas</p>
                <div className="w-32 h-2 bg-[#0a3d62]/10 mx-auto mt-6 rounded-full group-hover:w-64 group-hover:bg-[#0a3d62] transition-all duration-500" />
              </div>
              <div className="absolute top-[-20%] right-[-10%] w-[60%] h-[100%] bg-[#0a3d62]/5 rounded-full blur-[100px] group-hover:bg-[#0a3d62]/10 transition-all duration-700" />
           </button>

           <DataTable 
             title="Recent Interactions" 
             columns={[
               { header: 'Agent', key: 'name' },
               { header: 'Activity', key: 'source' },
               { header: 'Status', key: 'status', render: (row) => (
                 <span className={`px-2 py-0.5 rounded-lg text-[9px] font-black uppercase tracking-widest ${
                   row.status === 'New' ? 'bg-[#0a3d62] text-white' : 'bg-slate-100 text-slate-500'
                 }`}>{row.status}</span>
               )},
             ]}
             data={[
               { name: 'John', source: 'Lead Update', status: 'New' },
               { name: 'Sarah', source: 'Chat Ended', status: 'Pending' },
             ]}
           />
        </div>

        <div className="lg:col-span-4 space-y-6">
           <div className="bg-white p-6 rounded-[2rem] shadow-premium border border-slate-50 hover:border-primary transition-all h-full">
              <h4 className="text-base font-black text-[#0a3d62] mb-6">Vertical Activity</h4>
              <div className="space-y-6">
                {[1,2,3,4,5,6].map(n => (
                  <div key={n} className="flex gap-4 items-center">
                    <div className="w-1.5 h-8 bg-slate-100 rounded-full group-hover:bg-primary" />
                    <div>
                      <p className="text-xs font-black text-slate-800">Event #{n}</p>
                      <p className="text-[10px] text-slate-400 font-medium">Updated a few seconds ago</p>
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
