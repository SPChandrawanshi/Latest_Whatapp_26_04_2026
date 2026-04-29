import React from 'react';
import { ListTodo, ArrowRight, UserPlus, Zap, Clock, CheckCircle2, ShieldCheck } from 'lucide-react';
import { Button } from '../../components/common/Button';
import { clsx } from 'clsx';
import { useToast } from '../../context/ToastContext';
import { useCustomers } from '../../context/CustomerContext';

export default function AssignCustomers() {
  const [isAutoAssign, setIsAutoAssign] = React.useState(true);
  const { showToast } = useToast();
  const { activeCustomers, updateLeadStatus } = useCustomers();
  const pendingRequests = activeCustomers?.filter(c => c.status === 'New') || [];

  const handleToggleAuto = () => {
    setIsAutoAssign(!isAutoAssign);
    showToast(`Auto-Assignment ${!isAutoAssign ? 'Enabled' : 'Disabled'}`, 'info');
  };

  const handleApprove = async (id, name) => {
    try {
      await updateLeadStatus(id, 'Contacted');
      showToast(`Client Approved: ${name} is now Active!`, 'success');
    } catch (e) {
      showToast('Failed to approve client', 'error');
    }
  };

  return (
    <div className="space-y-8">
      <div className="flex justify-between items-start">
        <div>
          <h2 className="text-[12px] font-bold text-[#0a3d62] uppercase tracking-tight">Client Verification Portal</h2>
          <p className="text-slate-400 text-[11px] font-normal mt-0.5 tracking-wide">Review and Approve NEW Customer Registrations</p>
        </div>
        <button 
          onClick={() => window.location.reload()}
          className="px-4 py-2 bg-white border border-slate-100 rounded-lg text-[10px] font-bold text-slate-400 uppercase tracking-widest hover:bg-slate-50 transition-all shadow-premium"
        >
          Refresh Data
        </button>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
        {/* Unassigned Pool */}
        <div className="lg:col-span-12 xl:col-span-7 bg-white p-6 rounded-2xl shadow-premium border border-slate-50 hover:border-[#0a3d62] transition-all group">
           <div className="flex justify-between items-center mb-8">
              <h4 className="text-[12px] font-bold text-[#0a3d62] flex items-center gap-2 uppercase tracking-tight">
                 <ShieldCheck className={clsx("w-4 h-4", isAutoAssign ? "text-[#0a3d62]" : "text-slate-300")} />
                 Pending Registration Requests
              </h4>
              <span className="px-3 py-1 bg-amber-50 text-amber-600 rounded-lg text-[11px] font-bold tracking-wide border border-amber-100 uppercase">{pendingRequests.length} New Requests</span>
           </div>

           <div className="space-y-4">
              {pendingRequests.length === 0 ? (
                <div className="p-8 text-center bg-slate-50 rounded-xl border border-dashed border-slate-200">
                  <p className="text-[12px] text-slate-400 uppercase tracking-widest">No New Registrations Today</p>
                </div>
              ) : pendingRequests.map((customer) => (
                <div 
                  key={customer.id} 
                  className="w-full flex items-center justify-between p-4 bg-slate-50/50 rounded-xl border border-transparent hover:border-slate-200 hover:bg-white transition-all group/item shadow-premium"
                >
                   <div className="flex items-center gap-3">
                      <div className="w-10 h-10 bg-white rounded-xl shadow-premium flex items-center justify-center text-[#0a3d62] font-bold border border-slate-100 group-hover/item:bg-[#0a3d62] group-hover/item:text-white transition-all text-sm">
                         {customer.name[0]}
                      </div>
                       <div className="text-left">
                          <p className="text-[12px] font-bold text-slate-800 tracking-tight leading-none mb-1">{customer.name}</p>
                          <p className="text-[11px] text-slate-400 font-normal tracking-wide uppercase">{customer.source} • <span className="text-amber-500 font-bold">{customer.time}</span></p>
                       </div>
                   </div>
                   <button 
                     onClick={() => handleApprove(customer.id, customer.name)}
                     className="px-4 py-2 bg-[#0a3d62] text-white rounded-lg flex items-center gap-2 hover:opacity-90 active:scale-95 transition-all shadow-premium text-[11px] font-bold uppercase tracking-widest"
                   >
                      <CheckCircle2 className="w-3.5 h-3.5" />
                      Allow Access
                   </button>
                </div>
              ))}
           </div>
        </div>

        {/* Quick Assign Panel XL */}
        <div className="lg:col-span-12 xl:col-span-5 space-y-8">
           <div className={clsx(
             "p-8 rounded-[2rem] shadow-premium text-white relative overflow-hidden transition-all duration-700",
             isAutoAssign ? "bg-[#0a3d62]" : "bg-slate-800"
           )}>
              <div className="relative z-10">
                 <div className="flex justify-between items-start mb-6">
                    <h4 className="text-[12px] font-bold uppercase tracking-widest">Auto-Allow Engine</h4>
                    <button 
                      onClick={handleToggleAuto}
                      className={clsx(
                        "w-14 h-7 rounded-full p-1 transition-colors duration-300 relative",
                        isAutoAssign ? "bg-emerald-500" : "bg-slate-600"
                      )}
                    >
                      <div className={clsx(
                        "w-5 h-5 bg-white rounded-full transition-transform duration-500 shadow-premium",
                        isAutoAssign ? "translate-x-7" : "translate-x-0"
                      )} />
                    </button>
                 </div>
                  <p className="text-[11px] font-normal text-white/60 leading-relaxed mb-8 uppercase tracking-wider">Fast-track verified mobile numbers.</p>
                  <div className="flex items-center gap-4 p-4 bg-white/5 rounded-2xl border border-white/10 mb-8 backdrop-blur-md">
                     <Zap className={clsx("w-5 h-5", isAutoAssign ? "text-emerald-400" : "text-slate-400")} />
                     <div className="text-left">
                        <p className="text-[10px] font-bold uppercase opacity-40 tracking-widest mb-0.5">System Status</p>
                        <p className="text-[12px] font-bold tracking-tight">{isAutoAssign ? "ACTIVE • High Speed" : "PAUSED"}</p>
                     </div>
                  </div>
                  <Button 
                    className="w-full bg-white text-[#0a3d62] hover:bg-emerald-500 hover:text-white border-transparent py-3 font-bold uppercase text-[10px] tracking-widest rounded-xl shadow-premium active:scale-95 transition-all"
                    onClick={() => showToast('AI Logic Settings Opened', 'info')}
                  >
                    Configure Logic
                  </Button>
              </div>
           </div>

           <div className="bg-white p-8 rounded-[2rem] shadow-premium border border-slate-50 flex items-center justify-between group hover:border-[#0a3d62] transition-all text-left">
              <div className="flex gap-4 items-center">
                 <div className="w-10 h-10 bg-slate-50 text-[#0a3d62] rounded-xl flex items-center justify-center shadow-inner">
                    <UserPlus className="w-5 h-5" />
                 </div>
                  <div>
                     <h5 className="text-[12px] font-bold text-[#0a3d62] uppercase tracking-tight">Manual Batch</h5>
                     <p className="text-[11px] font-normal text-slate-400 mt-1 tracking-wide">Allow Multiple Clients</p>
                  </div>
              </div>
              <ArrowRight className="w-5 h-5 text-slate-300 group-hover:text-[#0a3d62] transition-colors" />
           </div>
        </div>
      </div>
    </div>
  );
}
