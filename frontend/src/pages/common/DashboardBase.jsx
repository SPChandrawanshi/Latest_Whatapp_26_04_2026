import React from 'react';
import { DataTable } from '../../components/tables/DataTable';

export function DashboardBase({ role }) {
  const handleStatClick = (label) => {
    alert(`Opening detailed analytics for: ${label}`);
  };

  return (
    <div className="flex flex-col gap-8">
      <div className="flex justify-between items-end">
        <div>
          <h2 className="text-3xl font-black text-[#0a3d62] tracking-tighter uppercase italic">{role} Overview</h2>
          <p className="text-slate-400 mt-1 font-bold uppercase tracking-widest text-[10px]">Monitor real-time performance & metrics</p>
        </div>
      </div>

      {/* High Density Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {[
          { label: 'Leads', value: '1.2k', grow: '+12%', color: 'bg-[#0a3d62]' },
          { label: 'Chats', value: '42', grow: 'Live', color: 'bg-emerald-500' },
          { label: 'FollowUp', value: '18', grow: '-2', color: 'bg-amber-500' },
          { label: 'Deals', value: '156', grow: '+5%', color: 'bg-rose-500' },
        ].map((stat, i) => (
          <button 
            key={i} 
            onClick={() => handleStatClick(stat.label)}
            className="bg-white p-6 rounded-[2.5rem] shadow-premium border border-transparent hover:border-primary transition-all flex items-center gap-4 group active:scale-95 text-left"
          >
            <div className={`w-14 h-14 rounded-2xl ${stat.color} flex items-center justify-center text-white shadow-lg group-hover:rotate-12 transition-transform`}>
              <span className="text-lg font-black uppercase tracking-tighter">{stat.label[0]}</span>
            </div>
            <div>
              <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest leading-none">{stat.label}</p>
              <div className="flex items-center gap-2 mt-1">
                <h3 className="text-xl font-black text-[#0a3d62]">{stat.value}</h3>
                <span className="text-[9px] font-bold text-slate-300">{stat.grow}</span>
              </div>
            </div>
          </button>
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
        <div className="lg:col-span-8 flex flex-col gap-8">
           <button 
            onClick={() => alert('Opening Full Analytics Dashboard...')}
            className="bg-white p-8 rounded-[2.5rem] shadow-premium h-80 flex flex-col items-center justify-center border border-slate-50 hover:border-primary hover:shadow-2xl transition-all relative overflow-hidden group active:scale-[0.99]"
           >
              <div className="text-center z-10">
                <p className="text-slate-300 font-black text-xl uppercase tracking-[0.3em] group-hover:tracking-[0.5em] group-hover:text-[#0a3d62] transition-all">Analytics Canvas</p>
                <div className="w-24 h-1 bg-primary/20 mx-auto mt-4 rounded-full group-hover:w-48 group-hover:bg-primary transition-all" />
              </div>
              <div className="absolute top-[-20%] right-[-10%] w-[50%] h-[100%] bg-primary/5 rounded-full blur-[80px] group-hover:bg-primary/10 transition-all" />
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
