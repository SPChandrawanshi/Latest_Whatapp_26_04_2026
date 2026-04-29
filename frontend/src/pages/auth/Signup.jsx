import React, { useState } from 'react';
import { User, Phone, Mail, MapPin, Send } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { useToast } from '../../context/ToastContext';
import { useCustomers } from '../../context/CustomerContext';

export function Signup() {
  const [formData, setFormData] = useState({ name: '', phone: '', email: '', region: '' });
  const { showToast } = useToast();
  const { addRegistration, approveCustomer } = useCustomers();
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    addRegistration({ ...formData, source: 'Website Signup', status: 'Pending', assigned: 'Shivam' });
    showToast('Registration Sent! Waiting for Admin Verification.', 'info');
    setTimeout(() => navigate('/login'), 2000);
  };

  return (
    <div className="min-h-screen bg-slate-50 flex items-center justify-center p-6">
      <div className="max-w-md w-full bg-white rounded-3xl shadow-premium border border-slate-100 overflow-hidden">
        <div className="p-8 bg-[#0a3d62] text-center">
            <div className="w-16 h-16 bg-white rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-lg">
                <span className="text-[#0a3d62] font-bold text-2xl">W</span>
            </div>
            <h1 className="text-[18px] font-bold text-white uppercase tracking-tight">Customer Registration</h1>
            <p className="text-white/60 text-[12px] mt-1 font-normal uppercase tracking-widest">Join our premium CRM platform</p>
        </div>

        <form onSubmit={handleSubmit} className="p-8 space-y-6">
          <div className="space-y-4">
            <div className="relative">
              <User className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
              <input 
                type="text" 
                placeholder="Full Name" 
                required
                value={formData.name}
                onChange={(e) => setFormData({...formData, name: e.target.value})}
                className="w-full pl-12 pr-4 py-3 bg-slate-50 border border-slate-100 rounded-xl focus:outline-none focus:border-[#0a3d62] text-[12px] font-normal tracking-wide transition-all"
              />
            </div>
            <div className="relative">
              <Phone className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
              <input 
                type="tel" 
                placeholder="WhatsApp Number" 
                required
                value={formData.phone}
                onChange={(e) => setFormData({...formData, phone: e.target.value})}
                className="w-full pl-12 pr-4 py-3 bg-slate-50 border border-slate-100 rounded-xl focus:outline-none focus:border-[#0a3d62] text-[12px] font-normal tracking-wide transition-all"
              />
            </div>
            <div className="relative">
              <Mail className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
              <input 
                type="email" 
                placeholder="Email Address" 
                required
                value={formData.email}
                onChange={(e) => setFormData({...formData, email: e.target.value})}
                className="w-full pl-12 pr-4 py-3 bg-slate-50 border border-slate-100 rounded-xl focus:outline-none focus:border-[#0a3d62] text-[12px] font-normal tracking-wide transition-all"
              />
            </div>
            <div className="relative">
              <MapPin className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
              <input 
                type="text" 
                placeholder="Region / City" 
                required
                value={formData.region}
                onChange={(e) => setFormData({...formData, region: e.target.value})}
                className="w-full pl-12 pr-4 py-3 bg-slate-50 border border-slate-100 rounded-xl focus:outline-none focus:border-[#0a3d62] text-[12px] font-normal tracking-wide transition-all"
              />
            </div>
          </div>

          <button 
            type="submit" 
            className="w-full py-4 bg-[#0a3d62] text-white rounded-xl font-bold text-[12px] uppercase tracking-widest shadow-premium hover:opacity-90 active:scale-95 transition-all flex items-center justify-center gap-2"
          >
            <Send className="w-4 h-4" />
            Request Registration
          </button>

          <p className="text-center text-[11px] text-slate-400 uppercase tracking-widest font-normal">
            Already registered? <button type="button" onClick={() => navigate('/login')} className="text-[#0a3d62] font-bold">Login Here</button>
          </p>
        </form>
      </div>
    </div>
  );
}
