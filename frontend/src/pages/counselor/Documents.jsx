import React from 'react';
import { FileText, Download, Upload, Clock, CheckCircle2, ShieldAlert } from 'lucide-react';

export default function Documents() {
  const [files, setFiles] = React.useState([
    { name: "Aadhar_Card_SID.pdf", type: "ID PROOF", status: "Verified", date: "24 Apr" },
    { name: "PAN_Card_SID.jpg", type: "ID PROOF", status: "Pending", date: "24 Apr" },
    { name: "Passport_Scan_R.pdf", type: "ADDRESS", status: "Verified", date: "23 Apr" },
    { name: "Sign_Auth_SID.png", type: "SIGNATURE", status: "Rejected", date: "22 Apr" },
    { name: "Salary_Slip_M.pdf", type: "INCOME", status: "Verified", date: "21 Apr" },
  ]);

  const handleUpload = () => {
    alert('Opening file selector...');
  };

  const handleDownload = (fileName) => {
    alert(`Downloading ${fileName}...`);
  };

  return (
    <div className="space-y-8">
      <div className="flex justify-between items-start">
        <div>
          <h2 className="text-3xl font-black text-[#0a3d62] tracking-tighter uppercase italic">DOCUMENT VAULT</h2>
          <p className="text-slate-400 text-sm font-bold uppercase tracking-widest mt-1">Verify and Manage Client KYC Documents</p>
        </div>
        <button 
          onClick={handleUpload}
          className="px-6 py-3 bg-[#0a3d62] text-white rounded-2xl shadow-xl font-black uppercase text-xs tracking-widest flex items-center gap-2 hover:translate-y-[-2px] hover:shadow-[#0a3d62]/20 active:scale-95 transition-all"
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
             
             <h4 className="text-sm font-black text-slate-800 truncate mb-1">{file.name}</h4>
             <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest">{file.type}</p>
             
             <div className="flex items-center justify-between mt-6 pt-6 border-t border-slate-50">
                <span className="text-[9px] font-bold text-slate-300 uppercase">{file.date}</span>
                <div className="flex gap-2">
                   <button 
                     onClick={() => alert('Viewing document...')}
                     className="p-2 bg-slate-50 text-slate-400 rounded-xl hover:bg-[#0a3d62] hover:text-white transition-all active:scale-90"
                   >
                      <CheckCircle2 className="w-4 h-4" />
                   </button>
                   <button 
                     onClick={() => handleDownload(file.name)}
                     className="p-2 bg-slate-50 text-slate-400 rounded-xl hover:bg-[#0a3d62] hover:text-white transition-all active:scale-90"
                   >
                      <Download className="w-4 h-4" />
                   </button>
                </div>
             </div>

             <div className="absolute top-0 right-0 w-24 h-24 bg-primary/5 rounded-full blur-[30px] translate-x-8 translate-y-[-8px]" />
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
