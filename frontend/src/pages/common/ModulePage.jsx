import React from 'react';
import { motion } from 'framer-motion';

export function ModulePage({ title, description, icon: Icon }) {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      className="space-y-8"
    >
      <div className="flex justify-between items-start">
        <div>
          <h2 className="text-3xl font-extrabold text-[#0a3d62] tracking-tight">{title}</h2>
          <p className="text-slate-500 mt-1 font-medium italic">{description}</p>
        </div>
        {Icon && (
          <div className="p-4 bg-white rounded-2xl shadow-premium border border-slate-50 text-[#0a3d62]">
            <Icon className="w-8 h-8" />
          </div>
        )}
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
         <div className="lg:col-span-2 bg-white p-10 rounded-[2.5rem] shadow-premium border border-slate-50 flex flex-col items-center justify-center min-h-[400px] relative overflow-hidden group hover:border-[#0a3d62] transition-all">
            <div className="text-center z-10">
              <div className="w-20 h-20 bg-[#0a3d62]/5 rounded-3xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform">
                {Icon ? <Icon className="w-10 h-10 text-[#0a3d62]" /> : <span className="text-4xl">🚀</span>}
              </div>
              <h3 className="text-2xl font-black text-[#0a3d62]">Module Under Implementation</h3>
              <p className="text-slate-400 mt-4 max-w-sm mx-auto font-medium">This module is currently being finalized for production with full data-sync capabilities.</p>
            </div>
            <div className="absolute top-[-20%] right-[-10%] w-[50%] h-[100%] bg-primary/5 rounded-full blur-[80px]" />
         </div>

         <div className="space-y-6">
            <div className="bg-white p-8 rounded-[2rem] shadow-premium border border-slate-50 hover:border-[#0a3d62] transition-all">
              <h4 className="font-bold text-[#0a3d62] mb-4 uppercase tracking-widest text-xs">Quick Info</h4>
              <div className="space-y-4">
                <div className="h-2 w-full bg-slate-50 rounded-full overflow-hidden">
                  <div className="h-full bg-[#0a3d62] w-[70%]" />
                </div>
                <p className="text-xs text-slate-500 font-bold">Preparation Progress: 70%</p>
              </div>
            </div>

            <div className="bg-[#0a3d62] p-8 rounded-[2rem] shadow-lg text-white">
              <h4 className="font-bold mb-2 uppercase tracking-widest text-[10px] opacity-70">Support Action</h4>
              <p className="text-sm font-bold">Need manual report for this module?</p>
              <button className="mt-4 px-6 py-2 bg-white text-[#0a3d62] rounded-xl text-xs font-black uppercase tracking-widest hover:scale-105 transition-transform">Contact Admin</button>
            </div>
         </div>
      </div>
    </motion.div>
  );
}
