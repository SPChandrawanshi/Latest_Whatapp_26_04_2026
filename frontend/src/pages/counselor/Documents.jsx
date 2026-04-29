import React from 'react';
import { FileText, Download, Upload, Clock, CheckCircle2, ShieldAlert } from 'lucide-react';
import { clsx } from 'clsx';

import { useToast } from '../../context/ToastContext';

export default function Documents() {
  const { showToast } = useToast();
  const [files, setFiles] = React.useState([
    { id: 1, name: "Aadhar_Card_SID.pdf", type: "ID PROOF", status: "Verified", date: "Today" },
    { id: 2, name: "PAN_Card_SID.jpg", type: "ID PROOF", status: "Pending", date: "Just Now" },
    { id: 3, name: "Passport_Scan_R.pdf", type: "ADDRESS", status: "Verified", date: "1h ago" },
    { id: 4, name: "Sign_Auth_SID.png", type: "SIGNATURE", status: "Rejected", date: "3h ago" },
    { id: 5, name: "Salary_Slip_M.pdf", type: "INCOME", status: "Verified", date: "Yesterday" },
  ]);

  const toggleStatus = (id) => {
    setFiles(prev => prev.map(f => {
      if (f.id === id) {
        const nextStatus = f.status === 'Verified' ? 'Rejected' : f.status === 'Rejected' ? 'Pending' : 'Verified';
        showToast(`Document status changed to ${nextStatus}`, 'info');
        return { ...f, status: nextStatus };
      }
      return f;
    }));
  };

  const handleUpload = () => showToast('Secure File Selector Initialized...', 'info');
  const handleDownload = (fileName) => showToast(`Secure Download Started: ${fileName}`, 'success');

  return (
    <div className="space-y-8">
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 mb-10">
        <div>
          <h2 className="text-[12px] font-bold text-[#0a3d62] uppercase tracking-tight">Document Vault</h2>
          <div className="text-slate-400 text-[12px] font-normal mt-0.5 tracking-wide flex items-center gap-2">
            <div className="w-1 h-1 rounded-full bg-[#0a3d62]/40" />
            Secure Repository for Client KYC & Verification
          </div>
        </div>
        <button 
          onClick={handleUpload}
          className="px-8 py-3 bg-[#0a3d62] text-white rounded-xl shadow-premium font-semibold uppercase text-[12px] tracking-wide flex items-center gap-3 hover:opacity-95 active:scale-95 transition-all"
        >
           <Upload className="w-4 h-4" />
           New Upload
        </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {files.map((file, i) => (
          <div key={i} className="bg-white p-6 rounded-[2rem] shadow-premium border border-transparent hover:border-[#0a3d62] transition-all group relative overflow-hidden">
             <div className="flex justify-between items-start mb-6">
                <div className="w-12 h-12 bg-slate-50 rounded-2xl border border-slate-100 flex items-center justify-center text-[#0a3d62] group-hover:bg-[#0a3d62] group-hover:text-white transition-all">
                  <FileText className="w-6 h-6" />
                </div>
                <div className="group-hover:scale-110 transition-transform">
                  {file.status === 'Verified' ? <CheckCircle2 className="w-5 h-5 text-emerald-500" /> : <ShieldAlert className={`w-5 h-5 ${file.status === 'Rejected' ? 'text-rose-500' : 'text-amber-500'}`} />}
                </div>
             </div>
             
             <h4 className="text-[12px] font-bold text-slate-800 truncate mb-1">{file.name}</h4>
             <p className="text-[12px] font-medium text-slate-400 uppercase tracking-wide">{file.type}</p>
             
             <div className="flex items-center justify-between mt-6 pt-6 border-t border-slate-50">
                <span className="text-[9px] font-bold text-slate-300 uppercase">{file.date}</span>
                <div className="flex gap-2">
                    <button 
                      onClick={() => toggleStatus(file.id)}
                      className={clsx(
                        "p-2 rounded-xl transition-all active:scale-90 shadow-premium",
                        file.status === 'Verified' ? "bg-emerald-500 text-white" : "bg-slate-50 text-slate-400"
                      )}
                      title="Toggle Status"
                    >
                       <CheckCircle2 className="w-4 h-4" />
                    </button>
                    <button 
                      onClick={() => handleDownload(file.name)}
                      className="p-2 bg-slate-50 text-slate-400 rounded-xl hover:bg-[#0a3d62] hover:text-white transition-all active:scale-90 shadow-premium"
                    >
                       <Download className="w-4 h-4" />
                    </button>
                 </div>
              </div>

              <div className="absolute top-0 right-0 w-24 h-24 bg-[#0a3d62]/5 rounded-full blur-[30px] translate-x-8 translate-y-[-8px]" />
           </div>
        ))}
      </div>

      <button 
        onClick={handleUpload}
        className="w-full bg-white p-8 rounded-[2.5rem] shadow-premium border border-dashed border-slate-200 flex flex-col items-center justify-center text-center hover:border-[#0a3d62] hover:bg-slate-50/50 transition-all active:scale-[0.99] group"
      >
         <div className="w-16 h-16 bg-slate-50 rounded-full flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
            <Upload className="w-8 h-8 text-slate-300 group-hover:text-[#0a3d62]" />
         </div>
         <h4 className="font-black text-[#0a3d62]">Drop files to upload</h4>
         <p className="text-xs font-bold text-slate-400 uppercase tracking-widest mt-2">Maximum file size: 10MB (PDF, PNG, JPG)</p>
      </button>
    </div>
  );
}
