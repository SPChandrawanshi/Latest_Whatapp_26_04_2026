import React from 'react';
import { 
  Smartphone, 
  QrCode, 
  Radio, 
  Users, 
  Zap, 
  BarChart3, 
  MessageSquare,
  RefreshCw,
  Power,
  ShieldCheck,
  CheckCircle2,
  ChevronRight,
  Plus
} from 'lucide-react';
import { clsx } from 'clsx';
import { useToast } from '../../context/ToastContext';

export default function WhatsAppPage() {
  const { showToast } = useToast();
  const [isConnected, setIsConnected] = React.useState(true);

  const stats = [
    { label: 'Broadcasts Sent', value: '4,284', grow: '+12%', icon: Radio, color: 'bg-[#55efc4]/10 text-emerald-500' },
    { label: 'Total Contacts', value: '12,056', grow: '+8%', icon: Users, color: 'bg-indigo-50 text-indigo-500' },
    { label: 'Auto-Replies', value: '856', grow: '+24%', icon: Zap, color: 'bg-amber-50 text-amber-500' },
    { label: 'Chat Efficiency', value: '98.2%', grow: '+2%', icon: BarChart3, color: 'bg-rose-50 text-rose-500' },
  ];

  return (
    <div className="space-y-10 pb-12">
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
        <div>
          <h2 className="text-[12px] font-bold text-[#0a3d62] uppercase tracking-tight">WhatsApp Business API</h2>
          <div className="text-slate-400 text-[12px] font-normal mt-0.5 tracking-wide flex items-center gap-2">
            <div className={`w-2 h-2 rounded-full ${isConnected ? 'bg-emerald-500 animate-pulse' : 'bg-rose-500'}`} />
            {isConnected ? 'API Connected & Operational' : 'API Connection Required'}
          </div>
        </div>
        <div className="flex items-center gap-4">
           <button 
             onClick={() => setIsConnected(!isConnected)}
             className={clsx(
                "flex items-center gap-3 px-6 py-3 rounded-xl text-[10px] font-bold uppercase tracking-widest transition-all active:scale-95 shadow-premium",
                isConnected ? "bg-rose-50 text-rose-600 hover:bg-rose-100" : "bg-emerald-50 text-emerald-600 hover:bg-emerald-100"
             )}
           >
              <Power className="w-4 h-4" />
              {isConnected ? 'Disconnect API' : 'Connect API'}
           </button>
           <button className="flex items-center gap-3 px-8 py-3 bg-[#0a3d62] text-white rounded-xl text-[10px] font-bold uppercase tracking-widest shadow-premium hover:opacity-90 active:scale-95 transition-all">
              <Plus className="w-4 h-4" />
              New Broadcast
           </button>
        </div>
      </div>

      {/* Metrics Row */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {stats.map((stat, i) => (
          <div key={i} className="bg-white p-6 rounded-[2rem] shadow-premium border border-slate-50 hover:border-[#0a3d62] transition-all group">
             <div className={clsx("w-12 h-12 rounded-2xl flex items-center justify-center mb-6 shadow-premium group-hover:scale-110 transition-transform", stat.color)}>
                <stat.icon className="w-6 h-6" />
             </div>
             <p className="text-[11px] font-bold text-slate-400 uppercase tracking-widest mb-1">{stat.label}</p>
             <div className="flex items-baseline gap-3">
                <h3 className="text-[20px] font-bold text-[#0a3d62] tracking-tighter">{stat.value}</h3>
                <span className="text-[9px] font-bold text-emerald-500 px-2 py-0.5 rounded-lg bg-emerald-50">{stat.grow}</span>
             </div>
          </div>
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
        {/* Left: QR & Connection Status */}
        <div className="lg:col-span-4 flex flex-col gap-10">
           <div className="bg-white p-8 rounded-[2.5rem] shadow-premium border border-slate-50 text-center relative overflow-hidden group">
              <div className="w-48 h-48 bg-slate-50 rounded-3xl mx-auto mb-8 border border-slate-100 flex items-center justify-center relative overflow-hidden group-hover:border-[#0a3d62] transition-all">
                 <QrCode className="w-32 h-32 text-slate-200 group-hover:text-[#0a3d62] group-hover:scale-110 transition-all duration-500" />
                 {isConnected && (
                    <div className="absolute inset-0 bg-white/90 flex flex-col items-center justify-center animate-in fade-in zoom-in duration-500">
                       <ShieldCheck className="w-16 h-16 text-emerald-500 mb-4" />
                       <span className="text-[10px] font-bold uppercase tracking-widest text-[#0a3d62]">Instance Active</span>
                    </div>
                 )}
              </div>
              <h4 className="text-[14px] font-bold text-[#0a3d62] uppercase tracking-tight">WhatsApp Web Scanner</h4>
              <p className="text-[12px] text-slate-400 mt-2 mb-8 px-6">Scan this code to link your business phone with the CRM system.</p>
              <button 
                onClick={() => showToast('Regenerating QR Code...', 'info')}
                className="w-full py-4 bg-slate-50 text-slate-400 hover:bg-[#0a3d62] hover:text-white rounded-2xl text-[10px] font-bold uppercase tracking-widest transition-all flex items-center justify-center gap-3 active:scale-95 shadow-premium"
              >
                 <RefreshCw className="w-4 h-4" />
                 Refresh QR Registry
              </button>
              <div className="absolute top-[-20%] right-[-10%] w-32 h-32 bg-[#0a3d62]/5 rounded-full blur-[40px]" />
           </div>

           <div className="bg-[#0a3d62] p-8 rounded-[2.5rem] shadow-premium text-white relative overflow-hidden">
              <h4 className="text-[14px] font-bold uppercase tracking-tight mb-4">Official Business Status</h4>
              <div className="space-y-6">
                 {[
                   { label: 'Verification', val: 'Verified', icon: CheckCircle2 },
                   { label: 'Quality Score', val: 'High', icon: BarChart3 },
                   { label: 'Region', val: 'Global', icon: Smartphone }
                 ].map((row, i) => (
                   <div key={i} className="flex items-center justify-between">
                      <div className="flex items-center gap-3">
                         <row.icon className="w-4 h-4 opacity-50" />
                         <span className="text-[11px] font-bold opacity-60 uppercase">{row.label}</span>
                      </div>
                      <span className="text-[11px] font-black uppercase tracking-widest">{row.val}</span>
                   </div>
                 ))}
              </div>
              <div className="absolute bottom-[-10%] left-[-10%] w-32 h-32 bg-white/5 rounded-full blur-[40px]" />
           </div>
        </div>

        {/* Right: Campaigns & Activity */}
        <div className="lg:col-span-8 flex flex-col gap-6">
           <div className="bg-white p-8 rounded-[3rem] shadow-premium border border-slate-50 flex flex-col h-full">
              <div className="flex items-center justify-between mb-10">
                 <h4 className="text-[14px] font-bold text-[#0a3d62] uppercase tracking-tight">Active Broadcast Campaigns</h4>
                 <button className="text-[10px] font-bold text-slate-300 hover:text-[#0a3d62] uppercase tracking-widest transition-colors">View All Logs</button>
              </div>
              <div className="space-y-6">
                 {[
                   { name: 'Festival Season Promo', target: '4,000 Contacts', status: 'Sent', cost: '$420.00' },
                   { name: 'Weekly Newsletter #42', target: '12,500 Contacts', status: 'Processing', cost: '$840.50' },
                   { name: 'KYC Reminder Batch 3', target: '800 Contacts', status: 'Scheduled', cost: '$45.00' },
                   { name: 'New Product Launch', target: '25,000 Contacts', status: 'Draft', cost: '$1,200.00' },
                 ].map((camp, i) => (
                   <div key={i} className="flex items-center justify-between p-5 bg-slate-50/50 rounded-2xl hover:bg-white hover:shadow-premium border border-transparent hover:border-slate-100 transition-all group">
                      <div className="flex items-center gap-6">
                         <div className="w-12 h-12 bg-white rounded-xl shadow-premium flex items-center justify-center group-hover:bg-[#0a3d62] group-hover:text-white transition-all">
                            <MessageSquare className="w-5 h-5" />
                         </div>
                         <div>
                            <p className="text-[12px] font-bold text-slate-800 tracking-tight">{camp.name}</p>
                            <p className="text-[10px] text-slate-400 font-bold uppercase tracking-widest">Audience: {camp.target}</p>
                         </div>
                      </div>
                      <div className="flex items-center gap-10">
                         <div className="text-right hidden sm:block">
                            <p className={clsx(
                                "text-[12px] font-bold tracking-widest uppercase",
                                camp.status === 'Sent' ? "text-emerald-500" : camp.status === 'Processing' ? "text-indigo-500 animate-pulse" : "text-slate-400"
                            )}>{camp.status}</p>
                            <p className="text-[10px] text-slate-300 font-bold uppercase tracking-widest">{camp.cost}</p>
                         </div>
                         <button className="p-3 bg-white rounded-xl shadow-premium text-slate-300 hover:text-[#0a3d62] transition-all active:scale-90 opacity-0 group-hover:opacity-100">
                            <ChevronRight className="w-4 h-4" />
                         </button>
                      </div>
                   </div>
                 ))}
              </div>
           </div>
        </div>
      </div>
    </div>
  );
}
