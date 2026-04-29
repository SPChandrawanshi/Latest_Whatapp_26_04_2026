import React, { useState } from "react";
import { DataTable } from "../../components/tables/DataTable";
import { Search, Plus, Filter, Download, User, Mail, Phone, Globe, Save } from 'lucide-react';
import { Modal } from "../../components/common/Modal";
import { Input } from "../../components/common/Input";
import { useCustomers } from "../../context/CustomerContext";
import { useToast } from "../../context/ToastContext";

export default function Customers() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const { activeCustomers, addRegistration } = useCustomers();
  const { showToast } = useToast();
  
  const handleAddCustomer = () => setIsModalOpen(true);
  const handleExport = () => showToast('Exporting Customers database to CSV...', 'info');
  const handleFilter = () => showToast('Opening advanced filter criteria...', 'info');

  const handleSaveCustomer = async (e) => {
    e.preventDefault();
    try {
      const formData = new FormData(e.target);
      await addRegistration({
        name: formData.get('name'),
        email: formData.get('email'),
        phone: formData.get('phone'),
        source: formData.get('source')
      });
      showToast('Customer saved successfully to system pool!', 'success');
      setIsModalOpen(false);
    } catch (error) {
      showToast('Failed to save customer', 'error');
    }
  };

  return (
    <>
    <div className="space-y-10">
      {/* Header with improved Actions */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
        <div>
          <h2 className="text-[18px] font-semibold text-[#0a3d62] uppercase tracking-tight">Customers Database</h2>
          <div className="text-slate-400 text-[12px] font-normal mt-0.5 tracking-wide flex items-center gap-2">
            <div className="w-1.5 h-1.5 rounded-full bg-[#0a3d62]/40" />
            Central Repository for Systemic Customer Tracking
          </div>
        </div>
        <div className="flex items-center gap-4">
          <button 
            onClick={handleAddCustomer}
            className="flex items-center gap-2 px-6 py-2.5 bg-[#0a3d62] text-white rounded-xl text-[12px] font-semibold uppercase tracking-wide hover:opacity-95 active:scale-95 transition-all shadow-premium"
          >
            <Plus className="w-4 h-4" />
            Add New Customer
          </button>
        </div>
      </div>

      {/* Filter / Search Bar XL */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
        <div className="md:col-span-2 relative group mt-2">
          <Search className="absolute left-5 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-300" />
          <input 
            type="text" 
            placeholder="Search Customers by name, email or mobile..." 
            className="w-full pl-12 pr-6 py-3 bg-white border border-slate-100 rounded-xl text-sm font-semibold focus:ring-4 focus:ring-[#0a3d62]/5 focus:border-[#0a3d62] transition-all outline-none shadow-premium placeholder:text-slate-300"
          />
        </div>
        <div className="flex items-center gap-4 md:col-span-2 md:justify-end">
           <button 
            onClick={handleFilter}
            className="flex items-center gap-2 px-5 py-2.5 bg-white border border-slate-100 rounded-xl text-xs font-bold uppercase tracking-wider text-slate-400 hover:bg-slate-50 hover:text-[#0a3d62] active:scale-95 transition-all shadow-premium"
           >
             <Filter className="w-4 h-4" />
             Filter
           </button>
           <button 
            onClick={handleExport}
            className="flex items-center gap-2 px-5 py-2.5 bg-white border border-slate-100 rounded-xl text-xs font-bold uppercase tracking-wider text-slate-400 hover:bg-slate-50 hover:text-[#0a3d62] active:scale-95 transition-all shadow-premium"
           >
             <Download className="w-4 h-4" />
             Export
           </button>
        </div>
      </div>

      <DataTable 
        title="Active Customers" 
        columns={[
          { header: "Name", key: "name", render: (row) => (
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 rounded-full bg-[#0a3d62]/5 flex items-center justify-center text-[10px] font-semibold text-[#0a3d62]">
                {row.name.split(' ').map(n => n[0]).join('')}
              </div>
              <span className="font-semibold text-slate-700 text-[13px]">{row.name}</span>
            </div>
          )},
          { header: "Contact Details", key: "email", render: (row) => (
            <div className="flex flex-col">
              <span className="text-sm font-medium text-slate-600">{row.email}</span>
              <span className="text-[10px] text-slate-400 font-bold tracking-tighter">SOURCE: {row.source}</span>
            </div>
          )},
          { header: "Assigned Agent", key: "assigned", render: (row) => (
            <span className="px-3 py-1 bg-slate-50 border border-slate-100 rounded-lg text-xs font-bold text-slate-600">
              {row.assigned}
            </span>
          )},
          { header: "Status", key: "status", render: (row) => (
            <span className={`px-3 py-1 rounded-full text-[10px] font-semibold uppercase tracking-wider ${
              row.status === 'New' ? 'bg-[#0a3d62] text-white' : 'bg-emerald-100 text-emerald-600'
            }`}>
              {row.status}
            </span>
          )}
        ]} 
        data={activeCustomers} 
      />
    </div>
    
    <Modal 
      isOpen={isModalOpen} 
      onClose={() => setIsModalOpen(false)} 
      title="Register New Customer"
    >
      <form onSubmit={handleSaveCustomer} className="space-y-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <Input label="Full Name" name="name" placeholder="e.g. John Doe" icon={User} required />
          <Input label="Email Address" name="email" type="email" placeholder="john@example.com" icon={Mail} required />
          <Input label="Phone Number" name="phone" placeholder="+91 98765 43210" icon={Phone} required />
          <Input label="Customer Source" name="source" placeholder="e.g. Facebook Ads" icon={Globe} required />
        </div>
        <div className="pt-6 border-t border-slate-50 flex justify-end">
           <button 
             type="submit"
             className="px-8 py-3 bg-[#0a3d62] text-white rounded-xl shadow-premium font-bold uppercase text-xs tracking-wider flex items-center gap-2 hover:opacity-95 active:scale-95 transition-all"
           >
             <Save className="w-4 h-4" />
             Register Customer
           </button>
        </div>
      </form>
    </Modal>
  </>
  );
}
