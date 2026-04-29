import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../../context/AuthContext';
import { authApi } from '../../api/authApi';
import { Button } from '../../components/common/Button';
import { Input } from '../../components/common/Input';
import { Card } from '../../components/common/Card';
import { MessageSquare, ShieldCheck, UserCircle, Briefcase, UserSquare2, Eye, EyeOff } from 'lucide-react';
import { motion } from 'framer-motion';
import { clsx } from 'clsx';

export function Login() {
  const [email, setEmail] = useState('counselor@crm.com');
  const [password, setPassword] = useState('Password@123');
  const [role, setRole] = useState('counselor');
  const { login } = useAuth();
  const navigate = useNavigate();
  const [error, setError] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [showPassword, setShowPassword] = useState(false);

  const handleRoleChange = (newRole) => {
    setRole(newRole);
    setEmail(`${newRole}@crm.com`);
    setPassword('Password@123');
    setError('');
  };

  const handleLogin = async (e) => {
    e.preventDefault();
    setError('');
    setIsLoading(true);
    try {
      const response = await authApi.login(email, password);
      if (response.success) {
        login(response.data.user, response.data.token);
        navigate(response.data.redirectPath);
      } else {
        setError(response.message || 'Login failed');
      }
    } catch (err) {
      setError(err.response?.data?.message || 'Server connection failed. Is backend running?');
    } finally {
      setIsLoading(false);
    }
  };

  const roleOptions = [
    { id: 'superadmin', label: 'Super Admin', icon: ShieldCheck, color: 'text-indigo-600 bg-indigo-100' },
    { id: 'admin', label: 'Admin', icon: UserCircle, color: 'text-emerald-600 bg-emerald-100' },
    { id: 'manager', label: 'Manager', icon: Briefcase, color: 'text-amber-600 bg-amber-100' },
    { id: 'counselor', label: 'Counselor', icon: UserSquare2, color: 'text-[#0a3d62] bg-[#0a3d62]/10' },
  ];

  return (
    <div className="min-h-screen bg-slate-50 flex items-center justify-center p-4 font-inter">
      <motion.div 
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        className="w-full max-w-[320px] z-10"
      >
        <Card className="bg-white border-2 border-slate-100 hover:border-[#0a3d62] shadow-2xl rounded-[1.5rem] p-5 transition-all duration-300" hover={true}>
          <div className="text-center mb-5">
            <div className="w-12 h-12 bg-[#0a3d62] rounded-2xl flex items-center justify-center mx-auto mb-3 shadow-lg ring-4 ring-[#0a3d62]/10">
              <MessageSquare className="w-6 h-6 text-white" />
            </div>
            <h1 className="text-xl font-black text-[#0a3d62] tracking-tight uppercase">WhatsApp</h1>
            <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest mt-1">Authorized Enterprise Portal</p>
          </div>

          <form onSubmit={handleLogin} className="space-y-4">
            {error && (
              <div className="p-2.5 bg-rose-50 border border-rose-100 text-rose-600 rounded-lg text-xs font-bold uppercase flex items-center gap-2">
                <ShieldCheck className="w-4 h-4" />
                {error}
              </div>
            )}
            
            <div className="grid grid-cols-4 gap-1.5">
              {roleOptions.map((opt) => (
                <button
                  key={opt.id}
                  type="button"
                  onClick={() => handleRoleChange(opt.id)}
                  className={`flex flex-col items-center gap-1 p-1.5 rounded-lg border-2 transition-all duration-200 relative ${
                    role === opt.id 
                      ? 'border-[#0a3d62] bg-[#0a3d62]/5' 
                      : 'border-slate-50 bg-white hover:border-slate-200'
                  }`}
                >
                  <div className={clsx(
                    "w-7 h-7 rounded-md flex items-center justify-center transition-all",
                    role === opt.id ? "bg-[#0a3d62] text-white" : "bg-slate-50 text-slate-300"
                  )}>
                    <opt.icon className="w-3.5 h-3.5" />
                  </div>
                  <span className={clsx(
                    "text-[8px] font-black uppercase tracking-tighter",
                    role === opt.id ? "text-[#0a3d62]" : "text-slate-400"
                  )}>
                    {opt.id}
                  </span>
                </button>
              ))}
            </div>

            <div className="space-y-3">
              <div className="space-y-1">
                <label className="text-[11px] font-black text-slate-600 uppercase tracking-widest ml-1">Terminal ID</label>
                <Input 
                  id="email"
                  name="email"
                  type="email" 
                  placeholder="admin@corp.com" 
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="h-10 text-sm rounded-xl border-2 border-slate-50 bg-slate-50/30 focus:bg-white focus:border-[#0a3d62]"
                  required
                />
              </div>
              
              <div className="space-y-1">
                <label className="text-[11px] font-black text-slate-600 uppercase tracking-widest ml-1">Access Key</label>
                <div className="relative">
                  <Input 
                    id="password"
                    name="password"
                    type={showPassword ? 'text' : 'password'} 
                    placeholder="••••••••" 
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    className="h-10 text-sm rounded-xl border-2 border-slate-50 bg-slate-50/30 focus:bg-white focus:border-[#0a3d62] pr-10"
                    required
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-300 hover:text-[#0a3d62]"
                  >
                    {showPassword ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                  </button>
                </div>
              </div>
            </div>

            <div className="flex items-center justify-between text-[11px] font-bold uppercase">
              <label className="flex items-center gap-2 cursor-pointer">
                <input type="checkbox" className="w-3.5 h-3.5 rounded border-2 border-slate-300 text-[#0a3d62]" />
                <span className="text-slate-500">Stay Active</span>
              </label>
              <button type="button" className="text-[#0a3d62] hover:underline decoration-2 underline-offset-4">Lost Key?</button>
            </div>

            <Button type="submit" disabled={isLoading} className="w-full h-11 text-xs font-black uppercase tracking-[0.2em] bg-[#0a3d62] text-white rounded-xl shadow-lg active:scale-95 transition-all">
              {isLoading ? 'Wait...' : 'Secure Sign In'}
            </Button>
          </form>

          <div className="mt-5 pt-4 border-t-2 border-slate-50 text-center">
             <p className="text-[10px] text-slate-500 uppercase tracking-widest font-black">
              New User? <button type="button" onClick={() => navigate('/signup')} className="text-[#0a3d62] hover:underline font-black">Register</button>
            </p>
          </div>
        </Card>
      </motion.div>
    </div>
  );
}
