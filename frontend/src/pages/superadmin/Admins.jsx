import React from 'react';
import { DataTable } from '../../components/tables/DataTable';
import { ShieldCheck, UserPlus, Filter, ShieldAlert } from 'lucide-react';

export default function Admins() {
  return (
    <div className="space-y-8">
      {/* Header with Stats */}
      <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6">
        <div>
          <h2 className="text-3xl font-black text-[#0a3d62] tracking-tighter">ADMINISTRATORS</h2>
          <p className="text-slate-400 text-sm font-bold uppercase tracking-widest mt-1 italic">Master System Access Control</p>
        </div>
        <div className="flex gap-4">
           <div className="px-6 py-3 bg-white rounded-2xl shadow-premium border border-slate-50 hover:border-[#0a3d62] transition-all flex items-center gap-3">
              <ShieldCheck className="w-5 h-5 text-emerald-500" />
              <div>
                <p className="text-[10px] font-black text-slate-400 uppercase tracking-tighter">Active Admins</p>
                <p className="text-lg font-black text-[#0a3d62]">14</p>
              </div>
           </div>
           <button className="flex items-center gap-2 px-6 py-3 bg-[#0a3d62] text-white rounded-2xl shadow-lg shadow-[#0a3d62]/20 font-black uppercase text-xs tracking-widest hover:scale-105 transition-transform active:scale-95">
             <UserPlus className="w-4 h-4" />
             Create Admin
           </button>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
         <div className="bg-white p-6 rounded-[2rem] shadow-premium border border-transparent hover:border-[#0a3d62] transition-all group">
            <h4 className="text-xs font-black text-slate-400 uppercase tracking-widest mb-4">Security Level</h4>
            <div className="flex items-end justify-between">
              <h3 className="text-3xl font-black text-[#0a3d62]">Level 5</h3>
              <ShieldAlert className="w-8 h-8 text-rose-500 opacity-20 group-hover:opacity-100 transition-opacity" />
            </div>
            <p className="text-[10px] text-slate-500 font-bold mt-2">All protocols online and secure.</p>
         </div>
         {/* More small info cards here if needed */}
      </div>

      <DataTable 
        title="Administrative Controls" 
        columns={[
          { header: "Admin Name", key: "name", render: (row) => (
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-[#0a3d62]/5 border border-slate-100 flex items-center justify-center font-black text-[#0a3d62]">
                {row.name[0]}
              </div>
              <div className="flex flex-col">
                <span className="font-black text-slate-800 tracking-tight">{row.name}</span>
                <span className="text-[10px] text-slate-400 font-bold">{row.email}</span>
              </div>
            </div>
          )},
          { header: "Permissions", key: "perms", render: (row) => (
            <div className="flex gap-1 flex-wrap">
              {row.perms.map((p, i) => (
                <span key={i} className="px-2 py-0.5 bg-slate-100 text-slate-500 rounded text-[9px] font-black uppercase">{p}</span>
              ))}
            </div>
          )},
          { header: "Status", key: "status", render: (row) => (
            <span className={`px-3 py-1 rounded-full text-[9px] font-black uppercase tracking-widest ${
              row.status === 'Active' ? 'bg-emerald-100 text-emerald-600' : 'bg-slate-100 text-slate-400'
            }`}>
              {row.status}
            </span>
          )}
        ]}
        data={[
          { name: "Super User", email: "root@crm.com", perms: ["All", "Billing", "Users"], status: "Active" },
          { name: "Sub Admin", email: "tech@crm.com", perms: ["Users", "Support"], status: "Active" },
          { name: "Support Admin", email: "help@crm.com", perms: ["Chats"], status: "Inactive" },
        ]}
      />
    </div>
  );
}
