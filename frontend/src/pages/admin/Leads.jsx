import React from "react";
import { DataTable } from "../../components/tables/DataTable";
import { Search, Plus, Filter, Download } from 'lucide-react';

export default function Leads() {
  const handleAddLead = () => alert('Opening "Add New Lead" form...');
  const handleExport = () => alert('Exporting leads database to CSV...');
  const handleFilter = () => alert('Opening advanced filter criteria...');

  return (
    <div className="space-y-8">
      {/* Header with improved Actions */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <h2 className="text-3xl font-black text-[#0a3d62] tracking-tighter uppercase italic">LEADS DATABASE</h2>
          <p className="text-slate-400 text-sm font-bold uppercase tracking-widest mt-1">Manage and Track All Incoming System Leads</p>
        </div>
        <div className="flex items-center gap-3">
          <button 
            onClick={handleAddLead}
            className="flex items-center gap-3 px-8 py-4 bg-[#0a3d62] rounded-2xl text-[10px] font-black uppercase tracking-widest text-white hover:translate-y-[-2px] hover:shadow-2xl hover:shadow-[#0a3d62]/20 active:scale-95 transition-all outline-none"
          >
            <Plus className="w-5 h-5" />
            Add New Lead
          </button>
        </div>
      </div>

      {/* Filter / Search Bar */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        <div className="md:col-span-2 relative group">
          <Search className="absolute left-5 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-300 group-focus-within:text-[#0a3d62] transition-colors" />
          <input 
            type="text" 
            placeholder="Search by name, email or phone..." 
            className="w-full pl-14 pr-6 py-4 bg-white border border-slate-100 rounded-[2rem] text-xs font-bold focus:ring-4 focus:ring-[#0a3d62]/5 focus:border-[#0a3d62] transition-all outline-none shadow-premium"
          />
        </div>
        <div className="flex items-center gap-4 md:col-span-2 md:justify-end">
           <button 
            onClick={handleFilter}
            className="flex items-center gap-3 px-6 py-4 bg-white border border-slate-100 rounded-2xl text-[10px] font-black uppercase tracking-widest text-slate-400 hover:bg-slate-50 hover:text-[#0a3d62] hover:border-[#0a3d62]/10 active:scale-95 transition-all shadow-sm"
           >
             <Filter className="w-4 h-4" />
             Advance Filter
           </button>
           <button 
            onClick={handleExport}
            className="flex items-center gap-3 px-6 py-4 bg-white border border-slate-100 rounded-2xl text-[10px] font-black uppercase tracking-widest text-slate-400 hover:bg-slate-50 hover:text-[#0a3d62] hover:border-[#0a3d62]/10 active:scale-95 transition-all shadow-sm"
           >
             <Download className="w-4 h-4" />
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
