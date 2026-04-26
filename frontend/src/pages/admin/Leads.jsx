import React from "react";
import { DataTable } from "../../components/tables/DataTable";
import { Search, Plus, Filter, Download } from 'lucide-react';

export default function Leads() {
  const handleAddLead = () => alert('Opening "Add New Lead" form...');
  const handleExport = () => alert('Exporting leads database to CSV...');
  const handleFilter = () => alert('Opening advanced filter criteria...');

  return (
    <div className="space-y-10">
      {/* Header with improved Actions */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
        <div>
          <h2 className="text-4xl font-black text-[#0a3d62] tracking-tighter uppercase italic">LEADS DATABASE</h2>
          <p className="text-slate-400 text-sm font-bold uppercase tracking-widest mt-2 flex items-center gap-2">
            <div className="w-1.5 h-1.5 rounded-full bg-primary animate-ping" />
            Central Repository for Systemic Lead Tracking
          </p>
        </div>
        <div className="flex items-center gap-4">
          <button 
            onClick={handleAddLead}
            className="flex items-center gap-4 px-10 py-5 bg-[#0a3d62] rounded-[1.5rem] text-[11px] font-black uppercase tracking-[0.2em] text-white hover:translate-y-[-3px] hover:shadow-2xl hover:shadow-[#0a3d62]/30 active:scale-95 transition-all outline-none group"
          >
            <Plus className="w-6 h-6 group-hover:rotate-90 transition-transform duration-300" />
            Add New Lead
          </button>
        </div>
      </div>

      {/* Filter / Search Bar XL */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
        <div className="md:col-span-2 relative group mt-2">
          <Search className="absolute left-6 top-1/2 -translate-y-1/2 w-6 h-6 text-slate-300 group-focus-within:text-[#0a3d62] transition-colors" />
          <input 
            type="text" 
            placeholder="Search leads by name, email or mobile..." 
            className="w-full pl-16 pr-8 py-5 bg-white border border-slate-100 rounded-[2.5rem] text-sm font-bold focus:ring-8 focus:ring-[#0a3d62]/5 focus:border-[#0a3d62] transition-all outline-none shadow-premium placeholder:text-slate-300"
          />
        </div>
        <div className="flex items-center gap-4 md:col-span-2 md:justify-end">
           <button 
            onClick={handleFilter}
            className="flex items-center gap-4 px-8 py-5 bg-white border border-slate-100 rounded-3xl text-[10px] font-black uppercase tracking-[0.2em] text-slate-400 hover:bg-slate-50 hover:text-[#0a3d62] hover:border-[#0a3d62]/20 active:scale-95 transition-all shadow-sm"
           >
             <Filter className="w-5 h-5" />
             Advance Filter
           </button>
           <button 
            onClick={handleExport}
            className="flex items-center gap-4 px-8 py-5 bg-white border border-slate-100 rounded-3xl text-[10px] font-black uppercase tracking-[0.2em] text-slate-400 hover:bg-slate-50 hover:text-[#0a3d62] hover:border-[#0a3d62]/20 active:scale-95 transition-all shadow-sm"
           >
             <Download className="w-5 h-5" />
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
