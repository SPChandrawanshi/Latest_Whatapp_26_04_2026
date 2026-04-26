import React from 'react';
import { DataTable } from '../../components/tables/DataTable';
import { Users, UserPlus, Filter, ShieldCheck, Mail, MapPin } from 'lucide-react';

export default function Team() {
  const handleAddAgent = () => {
    alert('Opening "Add New Agent" modal...');
  };

  const handleStatClick = (label) => {
    alert(`Showing detailed report for: ${label}`);
  };

  return (
    <div className="space-y-8">
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
        <div>
          <h2 className="text-3xl font-black text-[#0a3d62] tracking-tighter uppercase italic">My Active Team</h2>
          <p className="text-slate-400 text-sm font-bold uppercase tracking-widest mt-1">Manage and Track Your Agent Performance</p>
        </div>
        <button 
          onClick={handleAddAgent}
          className="px-6 py-4 bg-[#0a3d62] text-white rounded-2xl shadow-xl font-black uppercase text-[10px] tracking-widest flex items-center gap-3 hover:translate-y-[-2px] hover:shadow-[#0a3d62]/20 active:scale-95 transition-all"
        >
          <UserPlus className="w-5 h-5" />
          Add Agent
        </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {[
          { label: 'Total Agents', value: '24', icon: Users, color: 'text-indigo-500 bg-indigo-50' },
          { label: 'Online Now', value: '18', icon: ShieldCheck, color: 'text-emerald-500 bg-emerald-50' },
          { label: 'Top Performers', value: '6', icon: Filter, color: 'text-amber-500 bg-amber-50' },
          { label: 'On Leave', value: '2', icon: Mail, color: 'text-rose-500 bg-rose-50' },
        ].map((stat, i) => (
          <button 
            key={i} 
            onClick={() => handleStatClick(stat.label)}
            className="bg-white p-7 rounded-[2.5rem] shadow-premium border border-transparent hover:border-[#0a3d62] transition-all group flex flex-col items-start relative overflow-hidden active:scale-[0.98] text-left"
          >
            <div className={`w-14 h-14 rounded-3xl ${stat.color} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform shadow-sm`}>
              <stat.icon className="w-7 h-7" />
            </div>
            <p className="text-[10px] font-black text-slate-400 uppercase tracking-[0.2em]">{stat.label}</p>
            <h3 className="text-3xl font-black text-[#0a3d62] mt-1 tracking-tighter">{stat.value}</h3>
            <div className="absolute top-0 right-0 w-24 h-24 bg-slate-50/50 rounded-full blur-3xl -translate-y-8 translate-x-8" />
          </button>
        ))}
      </div>

      <DataTable 
        title="Agent Directory"
        columns={[
          { header: "Agent Profile", key: "name", render: (row) => (
             <div className="flex items-center gap-3">
               <div className="w-10 h-10 rounded-xl bg-slate-100 flex items-center justify-center font-black text-slate-400 text-xs">
                 {row.name[0]}
               </div>
               <div>
                  <p className="text-sm font-black text-slate-800">{row.name}</p>
                  <div className="flex items-center gap-1 text-[9px] text-slate-400 font-bold uppercase">
                    <MapPin className="w-2 h-2" />
                    {row.location}
                  </div>
               </div>
             </div>
          )},
          { header: "Current Load", key: "load", render: (row) => (
            <div className="w-32">
              <div className="flex justify-between text-[9px] font-black uppercase text-slate-400 mb-1">
                <span>{row.load}% Load</span>
                <span>{row.leads} Leads</span>
              </div>
              <div className="h-1.5 w-full bg-slate-100 rounded-full overflow-hidden">
                <div className={`h-full ${row.load > 80 ? 'bg-rose-500' : 'bg-[#0a3d62]'} rounded-full`} style={{ width: `${row.load}%` }} />
              </div>
            </div>
          )},
          { header: "Performance", key: "perf", render: (row) => (
            <span className={`px-2 py-0.5 rounded text-[10px] font-black uppercase ${
              row.perf === 'High' ? 'text-emerald-600 bg-emerald-50' : 'text-amber-600 bg-amber-50'
            }`}>
              {row.perf} Performance
            </span>
          )},
        ]}
        data={[
          { name: "Siddharth J.", location: "Mumbai, IN", load: 85, leads: 42, perf: "High" },
          { name: "Pooja Sharma", location: "Delhi, IN", load: 45, leads: 21, perf: "High" },
          { name: "Rohan K.", location: "Pune, IN", load: 92, leads: 54, perf: "Average" },
        ]}
      />
    </div>
  );
}
