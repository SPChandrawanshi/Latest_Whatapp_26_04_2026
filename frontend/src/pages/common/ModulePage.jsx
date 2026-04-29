import React from 'react';
import { motion } from 'framer-motion';
import { useToast } from '../../context/ToastContext';

export function ModulePage({ title, description, icon: Icon }) {
  const { showToast } = useToast();
  return (
    <motion.div 
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      className="space-y-8"
    >
      <div className="flex justify-between items-start">
        <div>
          <h2 className="text-[18px] font-semibold text-[#0a3d62] uppercase tracking-tight">{title}</h2>
          <p className="text-slate-500 mt-0.5 font-normal text-[12px] tracking-wide">{description}</p>
        </div>
        {Icon && (
          <div className="p-4 bg-white rounded-2xl shadow-premium border border-slate-50 text-[#0a3d62]">
            <Icon className="w-8 h-8" />
          </div>
        )}
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
         <div className="lg:col-span-2 bg-white p-6 rounded-2xl shadow-premium border border-slate-50 flex flex-col items-center justify-center min-h-[300px] relative overflow-hidden group hover:border-[#0a3d62] transition-all">
            <div className="text-center z-10">
              <div className="w-16 h-16 bg-[#0a3d62]/5 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                {Icon ? <Icon className="w-8 h-8 text-[#0a3d62]" /> : <span className="text-2xl">🚀</span>}
              </div>
               <h3 className="text-[14px] font-semibold text-[#0a3d62] uppercase tracking-tight">Under Implementation</h3>
               <p className="text-slate-400 mt-2 max-w-sm mx-auto text-[12px] font-normal Customering-relaxed">This module is currently being finalized for production with full data-sync capabilities.</p>
            </div>
            <div className="absolute top-[-20%] right-[-10%] w-[50%] h-[100%] bg-primary/5 rounded-full blur-[80px]" />
         </div>

         <div className="space-y-4">
            <div className="bg-white p-5 rounded-xl shadow-premium border border-slate-50 hover:border-[#0a3d62] transition-all">
               <h4 className="font-semibold text-[#0a3d62] mb-3 uppercase tracking-tight text-[13px]">Quick Info</h4>
              <div className="space-y-3">
                <div className="h-1.5 w-full bg-slate-50 rounded-full overflow-hidden">
                  <div className="h-full bg-[#0a3d62] w-[70%]" />
                </div>
                 <p className="text-[12px] text-slate-500 font-normal">Progress: 70%</p>
              </div>
            </div>

            <div className="bg-[#0a3d62] p-5 rounded-xl shadow-premium text-white">
               <h4 className="font-normal mb-1 uppercase tracking-widest text-[12px] opacity-70">Support Action</h4>
               <p className="text-[14px] font-semibold">Need manual report?</p>
               <button onClick={() => showToast('Connecting to System Admin...', 'info')} className="mt-3 px-4 py-1.5 bg-white text-[#0a3d62] rounded-lg text-[13px] font-semibold uppercase tracking-wide hover:opacity-90 active:scale-95 transition-all">Contact Admin</button>
            </div>
         </div>
      </div>
    </motion.div>
  );
}
