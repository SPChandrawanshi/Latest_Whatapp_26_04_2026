import React from 'react';
import { Search, Filter, MoreHorizontal, Eye, Edit, Trash2, ArrowUpDown } from 'lucide-react';
import { Button } from '../common/Button';

export function DataTable({ title, data = [], columns = [] }) {
  return (
    <div className="bg-white rounded-2xl shadow-premium border border-slate-100 overflow-hidden hover:border-primary transition-all">
      <div className="p-6 border-b border-slate-100 flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <h3 className="text-xl font-bold text-slate-800">{title}</h3>
          <p className="text-sm text-slate-500 mt-1">Manage and track your leads efficiently.</p>
        </div>
        <div className="flex items-center gap-3">
          <div className="relative">
            <Search className="w-4 h-4 absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" />
            <input 
              type="text" 
              placeholder="Search..." 
              className="pl-9 pr-4 py-2 bg-slate-50 border border-slate-200 rounded-xl focus:outline-none focus:border-primary text-sm w-full md:w-64"
            />
          </div>
          <Button variant="outline" className="h-10 px-3">
            <Filter className="w-4 h-4" />
          </Button>
        </div>
      </div>

      <div className="overflow-x-auto">
        <table className="w-full text-left">
          <thead className="bg-slate-50/50 border-b border-slate-100">
            <tr>
              {columns.map((col, i) => (
                <th key={i} className="px-6 py-4 text-xs font-bold text-slate-500 uppercase tracking-wider">
                  <div className="flex items-center gap-2 cursor-pointer hover:text-primary transition-colors">
                    {col.header}
                    {col.sortable && <ArrowUpDown className="w-3 h-3" />}
                  </div>
                </th>
              ))}
              <th className="px-6 py-4 text-xs font-bold text-slate-500 uppercase tracking-wider text-right">Actions</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-50">
            {data.map((row, i) => (
              <tr key={i} className="hover:bg-slate-50/80 transition-colors group">
                {columns.map((col, j) => (
                  <td key={j} className="px-6 py-4 whitespace-nowrap">
                    {col.render ? col.render(row) : (
                      <span className="text-sm font-medium text-slate-700">{row[col.key]}</span>
                    )}
                  </td>
                ))}
                <td className="px-6 py-4 whitespace-nowrap text-right">
                  <div className="flex items-center justify-end gap-2">
                    <button className="p-1.5 text-slate-400 hover:text-primary hover:bg-primary/10 rounded-lg transition-all">
                      <Eye className="w-4 h-4" />
                    </button>
                    <button className="p-1.5 text-slate-400 hover:text-emerald-500 hover:bg-emerald-50 rounded-lg transition-all">
                      <Edit className="w-4 h-4" />
                    </button>
                    <button className="p-1.5 text-slate-400 hover:text-red-500 hover:bg-red-50 rounded-lg transition-all">
                      <Trash2 className="w-4 h-4" />
                    </button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div className="p-4 bg-slate-50/30 border-t border-slate-100 flex items-center justify-between">
        <span className="text-sm text-slate-500 font-medium">Showing 1 to 10 of 50 entries</span>
        <div className="flex gap-2">
          <Button variant="outline" className="h-8 px-3 text-xs" disabled>Previous</Button>
          <Button variant="outline" className="h-8 px-3 text-xs bg-primary text-white border-primary">1</Button>
          <Button variant="outline" className="h-8 px-3 text-xs">2</Button>
          <Button variant="outline" className="h-8 px-3 text-xs">Next</Button>
        </div>
      </div>
    </div>
  );
}
