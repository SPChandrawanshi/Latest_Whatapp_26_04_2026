import React from 'react';
import { Search, Filter, MoreHorizontal, Eye, Edit, Trash2, ArrowUpDown } from 'lucide-react';
import { Button } from '../common/Button';

export function DataTable({ title, data = [], columns = [] }) {
  return (
    <div className="bg-white rounded-3xl shadow-premium border border-slate-100 overflow-hidden hover:border-[#0a3d62] transition-all">
      <div className="p-8 border-b border-slate-100 flex flex-col md:flex-row md:items-center justify-between gap-6 bg-slate-50/30">
        <div>
          <h3 className="text-2xl font-black text-[#0a3d62] tracking-tighter uppercase italic">{title}</h3>
          <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest mt-1">Manage and track your operational records efficiently.</p>
        </div>
        <div className="flex items-center gap-4">
          <div className="relative group">
            <Search className="w-4 h-4 absolute left-4 top-1/2 -translate-y-1/2 text-slate-300 group-focus-within:text-primary transition-colors" />
            <input 
              type="text" 
              placeholder="Quick search..." 
              className="pl-12 pr-4 py-3 bg-white border border-slate-200 rounded-2xl focus:outline-none focus:border-primary focus:ring-4 focus:ring-primary/5 text-xs font-bold w-full md:w-64 transition-all"
            />
          </div>
          <Button variant="outline" className="h-[46px] w-[46px] p-0 flex items-center justify-center rounded-2xl border-slate-200 hover:bg-primary/5" onClick={() => alert('Filter applied!')}>
            <Filter className="w-4 h-4" />
          </Button>
        </div>
      </div>

      <div className="overflow-x-auto">
        <table className="w-full text-left">
          <thead className="bg-[#0a3d62]/5 border-y border-[#0a3d62]/10">
            <tr>
              {columns.map((col, i) => (
                <th key={i} className="px-8 py-6 text-[10px] font-black text-[#0a3d62] uppercase tracking-widest">
                  <div className="flex items-center gap-2 cursor-pointer hover:text-primary transition-colors group">
                    {col.header}
                    {col.sortable && <ArrowUpDown className="w-3 h-3 opacity-30 group-hover:opacity-100" />}
                  </div>
                </th>
              ))}
              <th className="px-8 py-6 text-[10px] font-black text-[#0a3d62] uppercase tracking-widest text-right">Actions</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-50">
            {data.length > 0 ? data.map((row, i) => (
              <tr key={i} className="hover:bg-slate-50/80 transition-all group cursor-default">
                {columns.map((col, j) => (
                  <td key={j} className="px-8 py-6 whitespace-nowrap">
                    {col.render ? col.render(row) : (
                      <span className="text-sm font-bold text-slate-600">{row[col.key]}</span>
                    )}
                  </td>
                ))}
                <td className="px-8 py-6 whitespace-nowrap text-right">
                  <div className="flex items-center justify-end gap-3 opacity-0 group-hover:opacity-100 transition-opacity">
                    <button 
                      onClick={() => alert(`Viewing details for: ${row.name || 'Record'}`)}
                      className="w-11 h-11 flex items-center justify-center text-slate-400 hover:text-[#0a3d62] hover:bg-[#0a3d62]/5 rounded-xl transition-all active:scale-90 shadow-sm border border-transparent hover:border-[#0a3d62]/10"
                      title="View Details"
                    >
                      <Eye className="w-5 h-5" />
                    </button>
                    <button 
                      onClick={() => alert(`Editing: ${row.name || 'Record'}`)}
                      className="w-11 h-11 flex items-center justify-center text-slate-400 hover:text-emerald-500 hover:bg-emerald-50 rounded-xl transition-all active:scale-90 shadow-sm border border-transparent hover:border-emerald-100"
                      title="Edit Record"
                    >
                      <Edit className="w-5 h-5" />
                    </button>
                    <button 
                      onClick={() => confirm('Are you sure you want to delete this record?') && alert('Record deleted!')}
                      className="w-11 h-11 flex items-center justify-center text-slate-400 hover:text-rose-500 hover:bg-rose-50 rounded-xl transition-all active:scale-90 shadow-sm border border-transparent hover:border-rose-100"
                      title="Delete Record"
                    >
                      <Trash2 className="w-5 h-5" />
                    </button>
                  </div>
                </td>
              </tr>
            )) : (
              <tr>
                <td colSpan={columns.length + 1} className="px-8 py-20 text-center">
                  <div className="max-w-xs mx-auto text-slate-300">
                    <MoreHorizontal className="w-12 h-12 mx-auto mb-4 opacity-20" />
                    <p className="text-sm font-black uppercase tracking-widest">No matching records found</p>
                  </div>
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>

      <div className="p-6 bg-slate-50/50 border-t border-slate-100 flex flex-col sm:flex-row items-center justify-between gap-4">
        <span className="text-[10px] font-black text-slate-400 uppercase tracking-widest italic">Showing 1 to {data.length} of {data.length} entries</span>
        <div className="flex gap-2.5">
          <Button variant="outline" className="h-10 px-4 text-[10px] font-black uppercase tracking-widest rounded-xl border-slate-200" disabled>Prev</Button>
          <Button variant="outline" className="h-10 w-10 p-0 text-[10px] font-black uppercase tracking-widest rounded-xl bg-primary text-white border-primary shadow-lg shadow-primary/20">1</Button>
          <Button variant="outline" className="h-10 px-4 text-[10px] font-black uppercase tracking-widest rounded-xl border-slate-200" onClick={() => alert('Pagination coming soon!')}>Next</Button>
        </div>
      </div>
    </div>
  );
}
