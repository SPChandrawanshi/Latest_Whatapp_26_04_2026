import React from 'react';
import { ShieldCheck, UserPlus, Filter, ShieldAlert } from 'lucide-react';
import { useToast } from '../../context/ToastContext';
import { DataTable } from '../../components/tables/DataTable';

export default function Admins() {
  const { showToast } = useToast();
  return (
    <div className="space-y-8">
      {/* Header with Stats */}
      <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6">
        <div>
          <h2 className="text-[12px] font-bold text-[#0a3d62] uppercase tracking-tight">Administrators</h2>
          <p className="text-slate-400 text-[11px] font-normal mt-0.5 tracking-wide">System Access Control</p>
        </div>
        <div className="flex gap-3">
           <div className="px-4 py-2 bg-white rounded-xl shadow-premium border border-slate-50 hover:border-[#0a3d62] transition-all flex items-center gap-3">
              <ShieldCheck className="w-4 h-4 text-emerald-500" />
              <div>
                <p className="text-[12px] font-normal text-slate-400 tracking-wide">Active Admins</p>
                <p className="text-[12px] font-bold text-[#0a3d62] mt-0.5">14</p>
              </div>
           </div>
           <button onClick={() => showToast('Admin Creation Portal Launched', 'success')} className="flex items-center gap-2 px-4 py-2 bg-[#0a3d62] text-white rounded-lg shadow-premium font-semibold uppercase text-[12px] tracking-wide hover:opacity-90 active:scale-95 transition-all">
             <UserPlus className="w-3.5 h-3.5" />
             Create Admin
           </button>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
         <div className="bg-white p-5 rounded-2xl shadow-premium border border-slate-50 hover:border-[#0a3d62] transition-all group text-left">
            <h4 className="text-[12px] font-bold text-slate-400 uppercase tracking-tight mb-2">Security Level</h4>
            <div className="flex items-end justify-between">
              <h3 className="text-[12px] font-bold text-[#0a3d62]">Level 5</h3>
              <ShieldAlert className="w-6 h-6 text-rose-500 opacity-20 group-hover:opacity-100 transition-opacity" />
            </div>
            <p className="text-[12px] text-slate-500 font-normal mt-1 italic">Protocols Online</p>
         </div>
         {/* More small info cards here if needed */}
      </div>

      <DataTable 
        title="Administrative Controls" 
        columns={[
          { header: "Admin Name", key: "name", render: (row) => (
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-[#0a3d62]/5 border border-slate-100 flex items-center justify-center font-bold text-[#0a3d62]">
                {row.name[0]}
              </div>
              <div className="flex flex-col text-left">
                <span className="text-[12px] font-bold text-slate-800 tracking-tight">{row.name}</span>
                <span className="text-[11px] text-slate-400 font-normal">{row.email}</span>
              </div>
            </div>
          )},
          { header: "Permissions", key: "perms", render: (row) => (
            <div className="flex gap-1 flex-wrap">
              {row.perms.map((p, i) => (
                <span key={i} className="px-2 py-0.5 bg-slate-100 text-slate-500 rounded text-[12px] font-normal">{p}</span>
              ))}
            </div>
          )},
          { header: "Status", key: "status", render: (row) => (
            <span className={`px-3 py-1 rounded-full text-[9px] font-bold uppercase tracking-widest ${
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
