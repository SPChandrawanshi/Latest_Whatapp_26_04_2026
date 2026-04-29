import { Search, Filter, MoreHorizontal, Eye, Edit, Trash2, ArrowUpDown } from 'lucide-react';
import { Button } from '../common/Button';
import { useToast } from '../../context/ToastContext';

export function DataTable({ title, data = [], columns = [] }) {
  const { showToast } = useToast();
  return (
    <div className="bg-white rounded-2xl shadow-premium border border-slate-100 overflow-hidden hover:border-[#0a3d62] transition-all">
      <div className="p-6 border-b border-slate-100 flex flex-col md:flex-row md:items-center justify-between gap-6 bg-slate-50/20">
        <div>
          <h3 className="text-[12px] font-bold text-[#0a3d62] uppercase tracking-tight">{title}</h3>
          <p className="text-[11px] font-normal text-slate-400 mt-0.5 tracking-wide">Manage operational records</p>
        </div>
        <div className="flex items-center gap-4">
          <div className="relative group">
            <Search className="w-4 h-4 absolute left-4 top-1/2 -translate-y-1/2 text-slate-300 group-focus-within:text-primary transition-colors" />
            <input 
              type="text" 
              placeholder="Quick search..." 
              className="pl-12 pr-4 py-3 bg-white border border-slate-200 rounded-xl focus:outline-none focus:border-[#0a3d62] focus:ring-4 focus:ring-[#0a3d62]/5 text-[14px] font-normal w-full md:w-64 transition-all"
            />
          </div>
          <Button variant="outline" className="h-10 w-10 p-0 flex items-center justify-center rounded-xl border-slate-200 hover:bg-primary/5" onClick={() => showToast('Filters Initialized', 'info')}>
            <Filter className="w-3.5 h-3.5 text-slate-400" />
          </Button>
        </div>
      </div>

      <div className="overflow-x-auto">
        <table className="w-full text-left">
          <thead className="bg-[#0a3d62]/5 border-y border-[#0a3d62]/10 capitalize">
            <tr>
              {columns.map((col, i) => (
                <th key={i} className="px-6 py-4 text-[12px] font-bold text-[#0a3d62] uppercase tracking-wider">
                  <div className="flex items-center gap-2 cursor-pointer hover:text-[#0a3d62] transition-colors group">
                    {col.header}
                    {col.sortable && <ArrowUpDown className="w-3 h-3 opacity-30 group-hover:opacity-100" />}
                  </div>
                </th>
              ))}
              <th className="px-6 py-4 text-[12px] font-bold text-[#0a3d62] uppercase tracking-wider text-right">Actions</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-50">
            {data.length > 0 ? data.map((row, i) => (
              <tr key={i} className="hover:bg-slate-50/80 transition-all group cursor-default">
                {columns.map((col, j) => (
                  <td key={j} className="px-6 py-4 whitespace-nowrap">
                    {col.render ? col.render(row) : (
                      <span className="text-[13px] font-normal text-slate-600">{row[col.key]}</span>
                    )}
                  </td>
                ))}
                <td className="px-6 py-4 whitespace-nowrap text-right">
                  <div className="flex items-center justify-end gap-3 opacity-0 group-hover:opacity-100 transition-opacity">
                    <button 
                      onClick={() => showToast(`Accessing record profile...`, 'info')}
                      className="w-9 h-9 flex items-center justify-center text-slate-400 hover:text-[#0a3d62] hover:bg-[#0a3d62]/5 rounded-lg transition-all active:scale-90"
                      title="View Details"
                    >
                      <Eye className="w-4 h-4" />
                    </button>
                    <button 
                      onClick={() => showToast(`Loading edit node...`, 'info')}
                      className="w-9 h-9 flex items-center justify-center text-slate-400 hover:text-emerald-500 hover:bg-emerald-50 rounded-lg transition-all active:scale-90"
                      title="Edit Record"
                    >
                      <Edit className="w-4 h-4" />
                    </button>
                    <button 
                      onClick={() => confirm('Are you sure?') && showToast('Record Suspended', 'error')}
                      className="w-9 h-9 flex items-center justify-center text-slate-400 hover:text-rose-500 hover:bg-rose-50 rounded-lg transition-all active:scale-90"
                      title="Delete Record"
                    >
                      <Trash2 className="w-4 h-4" />
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

      <div className="p-4 bg-slate-50/50 border-t border-slate-100 flex flex-col sm:flex-row items-center justify-between gap-4">
        <span className="text-[12px] font-normal text-slate-400 tracking-wide">Showing {data.length} records</span>
        <div className="flex gap-2">
          <Button variant="outline" className="h-8 px-3 text-[13px] font-semibold rounded-lg border-slate-200" disabled>Prev</Button>
          <Button variant="outline" className="h-8 w-8 p-0 text-[13px] font-semibold rounded-lg bg-[#0a3d62] text-white border-[#0a3d62] shadow-premium">1</Button>
          <Button variant="outline" className="h-8 px-3 text-[13px] font-semibold rounded-lg border-slate-200" onClick={() => showToast('Pagination Mock Active', 'info')}>Next</Button>
        </div>
      </div>
    </div>
  );
}
