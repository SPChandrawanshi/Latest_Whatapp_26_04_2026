import React from "react";
import { DataTable } from "../../components/tables/DataTable";
import { MessageSquare } from 'lucide-react';
import { useCustomers } from "../../context/CustomerContext";
import { useToast } from "../../context/ToastContext";
import { useNavigate } from "react-router-dom";

export default function Customers() {
  const { activeCustomers } = useCustomers();
  const { showToast } = useToast();
  const navigate = useNavigate();

  const handleChat = (name) => {
    showToast(`Opening WhatsApp Chat with ${name}...`, 'success');
    setTimeout(() => navigate('/counselor/chats'), 1000);
  };

  return (
    <DataTable 
      title="My Dedicated Customers" 
      columns={[
        { header: "Name", key: "name", render: (row) => <span className="font-bold text-[#0a3d62] text-[12px]">{row.name}</span> },
        { header: "WhatsApp", key: "phone", render: (row) => <span className="text-slate-500 font-medium text-[12px]">{row.phone || 'N/A'}</span> },
        { header: "Status", key: "status", render: (row) => (
          <span className="px-3 py-1 bg-[#0a3d62]/5 text-[#0a3d62] rounded-full text-[10px] font-bold uppercase tracking-widest">{row.status}</span>
        )},
        { header: "Action", key: "chat", render: (row) => (
          <button 
            onClick={() => handleChat(row.name)}
            className="flex items-center gap-2 px-4 py-2 bg-[#0a3d62] text-white rounded-lg hover:opacity-90 active:scale-95 transition-all shadow-premium text-[11px] font-bold uppercase tracking-widest"
          >
            <MessageSquare className="w-3.5 h-3.5" />
            Start Chat
          </button>
        )},
      ]} 
      data={activeCustomers} 
    />
  );
}
