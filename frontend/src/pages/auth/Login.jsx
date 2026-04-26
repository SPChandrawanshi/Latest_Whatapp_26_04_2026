import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../../context/AuthContext';
import { Button } from '../../components/common/Button';
import { Input } from '../../components/common/Input';
import { Card } from '../../components/common/Card';
import { MessageSquare, ShieldCheck, UserCircle, Briefcase, UserSquare2 } from 'lucide-react';
import { motion } from 'framer-motion';

export function Login() {
  const [email, setEmail] = useState('counselor@crm.com');
  const [password, setPassword] = useState('password123');
  const [role, setRole] = useState('counselor');
  const { login } = useAuth();
  const navigate = useNavigate();

  const handleRoleChange = (newRole) => {
    setRole(newRole);
    setEmail(`${newRole}@crm.com`);
    setPassword('password123');
  };

  const handleLogin = (e) => {
    e.preventDefault();
    // Dummy login
    const userData = {
      name: email.split('@')[0] || 'User',
      email,
      role,
    };
    login(userData);
    navigate(`/${role}/dashboard`);
  };

  const roleOptions = [
    { id: 'superadmin', label: 'Super Admin', icon: ShieldCheck, color: 'text-indigo-600 bg-indigo-100' },
    { id: 'admin', label: 'Admin', icon: UserCircle, color: 'text-emerald-600 bg-emerald-100' },
    { id: 'manager', label: 'Manager', icon: Briefcase, color: 'text-amber-600 bg-amber-100' },
    { id: 'counselor', label: 'Counselor', icon: UserSquare2, color: 'text-[#0a3d62] bg-[#0a3d62]/10' },
  ];

  return (
    <div className="min-h-screen bg-slate-50 flex items-center justify-center p-4 relative overflow-hidden">
      {/* Background Orbs */}
      <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-primary/10 rounded-full blur-[120px]" />
      <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-indigo-500/10 rounded-full blur-[120px]" />

      <motion.div 
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        className="w-full max-w-md z-10"
      >
        <Card className="p-8 shadow-premium border border-slate-100" hover={false}>
          <div className="text-center mb-6">
            <div className="w-12 h-12 bg-[#0a3d62] rounded-xl flex items-center justify-center mx-auto mb-4 shadow-lg rotate-3">
              <MessageSquare className="w-6 h-6 text-white" />
            </div>
            <h1 className="text-2xl font-black text-[#0a3d62] tracking-tight">Welcome Back</h1>
            <p className="text-slate-400 text-[10px] font-black uppercase tracking-[0.2em] mt-1 italic">WhatsApp CRM Platform</p>
          </div>

          <form onSubmit={handleLogin} className="space-y-5">
            <div className="grid grid-cols-2 gap-2.5">
              {roleOptions.map((opt) => (
                <button
                  key={opt.id}
                  type="button"
                  onClick={() => handleRoleChange(opt.id)}
                  className={`flex items-center gap-2 p-2.5 rounded-xl border-2 transition-all duration-200 text-left group ${
                    role === opt.id 
                      ? 'border-[#0a3d62] bg-[#0a3d62]/5' 
                      : 'border-slate-50 hover:border-[#0a3d62] bg-white shadow-sm'
                  }`}
                >
                  <div className={`p-1.5 rounded-lg ${opt.color} group-hover:scale-90 transition-transform`}>
                    <opt.icon className="w-4 h-4" />
                  </div>
                  <span className={`text-[10px] font-black uppercase tracking-tighter ${role === opt.id ? 'text-[#0a3d62]' : 'text-slate-400'}`}>
                    {opt.label}
                  </span>
                </button>
              ))}
            </div>

            <div className="space-y-4">
              <Input 
                id="email"
                name="email"
                label="Email Address" 
                type="email" 
                placeholder="name@company.com" 
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                autoComplete="username"
                className="h-11 text-sm rounded-xl"
                required
              />
              
              <Input 
                id="password"
                name="password"
                label="Password" 
                type="password" 
                placeholder="••••••••" 
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                autoComplete="current-password"
                className="h-11 text-sm rounded-xl"
                required
              />
            </div>

            <div className="flex items-center justify-between text-[11px] font-bold">
              <label className="flex items-center gap-2 cursor-pointer group">
                <input type="checkbox" className="w-3.5 h-3.5 rounded border-slate-300 text-[#0a3d62] focus:ring-[#0a3d62]" />
                <span className="text-slate-400 group-hover:text-[#0a3d62] transition-colors">Remember me</span>
              </label>
              <a href="#" className="text-[#0a3d62] hover:underline">Forgot?</a>
            </div>

            <Button type="submit" className="w-full h-11 text-sm font-black uppercase tracking-widest shadow-[#0a3d62]/20 shadow-lg rounded-xl transition-all hover:translate-y-[-2px]">
              Sign In
            </Button>
          </form>

          <p className="text-center mt-8 text-[10px] font-bold text-slate-400 uppercase tracking-widest">
            Support: <a href="#" className="text-[#0a3d62] hover:underline">Contact Admin</a>
          </p>
        </Card>
      </motion.div>
    </div>
  );
}
