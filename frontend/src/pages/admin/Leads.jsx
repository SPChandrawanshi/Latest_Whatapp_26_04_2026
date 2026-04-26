import React from "react";
import { DataTable } from "../../components/tables/DataTable";
import { Search, Plus, Filter, Download } from 'lucide-react';

export default function Leads() {
  return (
    <div className="space-y-8">
      {/* Header with improved Actions */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <h2 className="text-3xl font-extrabold text-[#0a3d62] tracking-tight">Leads Database</h2>
          <p className="text-slate-500 mt-1 font-medium italic">Manage and track all incoming system leads.</p>
        </div>
        <div className="flex items-center gap-3">
          <button className="flex items-center gap-2 px-6 py-2.5 bg-[#0a3d62] rounded-2xl text-sm font-bold text-white hover:opacity-90 transition-all shadow-lg hover:shadow-[#0a3d62]/20">
            <Plus className="w-4 h-4" />
            Add New Lead
          </button>
        </div>
      </div>

      {/* Filter / Search Bar */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <div className="md:col-span-2 relative">
          <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
          <input 
            type="text" 
            placeholder="Search by name, email or phone..." 
            className="w-full pl-12 pr-4 py-3 bg-white border border-slate-100 rounded-2xl text-sm focus:ring-2 focus:ring-[#0a3d62]/10 focus:border-[#0a3d62] transition-all outline-none shadow-sm"
          />
        </div>
        <div className="flex items-center gap-3 md:col-span-2 md:justify-end">
           <button className="flex items-center gap-2 px-4 py-3 bg-white border border-slate-100 rounded-2xl text-xs font-bold text-slate-500 hover:bg-slate-50 transition-all">
             <Filter className="w-3.5 h-3.5" />
             Advance Filter
           </button>
           <button className="flex items-center gap-2 px-4 py-3 bg-white border border-slate-100 rounded-2xl text-xs font-bold text-slate-500 hover:bg-slate-50 transition-all">
             <Download className="w-3.5 h-3.5" />
             Export
           </button>
        </div>
      </div>

      <DataTable 
        title="Active Leads" 
        columns={[
          { header: "Name", key: "name", render: (row) => (
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 rounded-full bg-[#0a3d62]/5 flex items-center justify-center text-[10px] font-black text-[#0a3d62]">
                {row.name.split(' ').map(n => n[0]).join('')}
              </div>
              <span className="font-bold text-slate-700">{row.name}</span>
            </div>
          )},
          { header: "Contact Details", key: "email", render: (row) => (
            <div className="flex flex-col">
              <span className="text-sm font-medium text-slate-600">{row.email}</span>
              <span className="text-[10px] text-slate-400 font-bold tracking-tighter">SOURCE: {row.source}</span>
            </div>
          )},
          { header: "Assigned Agent", key: "assigned", render: (row) => (
            <span className="px-3 py-1 bg-slate-50 border border-slate-100 rounded-lg text-xs font-bold text-slate-600">
              {row.assigned}
            </span>
          )},
          { header: "Status", key: "status", render: (row) => (
            <span className={`px-3 py-1 rounded-full text-[9px] font-black uppercase tracking-widest ${
              row.status === 'New' ? 'bg-[#0a3d62] text-white' : 'bg-emerald-100 text-emerald-600'
            }`}>
              {row.status}
            </span>
          )}
        ]} 
        data={[
          { name: "Amit Sharma", email: "amit@example.com", source: "Facebook", assigned: "Rahul Kumar", status: "New" },
          { name: "Priya Singh", email: "priya@example.com", source: "Google Ads", assigned: "Jatin", status: "Contacted" },
          { name: "Suresh Gupta", email: "suresh@example.com", source: "Website", assigned: "Rahul Kumar", status: "New" },
        ]} 
      />
    </div>
  );
}
