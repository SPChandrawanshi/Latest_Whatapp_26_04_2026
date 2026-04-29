import React from 'react';
import { FaWhatsapp, FaFacebook, FaInstagram, FaYoutube } from 'react-icons/fa';
import { 
  Check, 
  Zap, 
  Shield, 
  Crown, 
  Award,
  ArrowRight,
  Sparkles,
  CheckCircle2
} from 'lucide-react';
import { clsx } from 'clsx';
import { useToast } from '../../context/ToastContext';

export default function Pricing() {
  const { showToast } = useToast();
  const [billingCycle, setBillingCycle] = React.useState('Monthly');

  const plans = [
    {
      name: 'Free Starter',
      price: '0',
      desc: 'Perfect for exploring the platform features.',
      icon: Award,
      color: 'text-slate-400',
      bg: 'bg-slate-50',
      features: ['WhatsApp Integration', 'Basic Analytics', '500 Contacts', 'Email Support'],
      platforms: [FaWhatsapp]
    },
    {
      name: 'Business Pro',
      price: billingCycle === 'Monthly' ? '49' : '39',
      desc: 'Ideal for growing teams and active social scaling.',
      icon: Crown,
      color: 'text-indigo-500',
      bg: 'bg-indigo-50',
      featured: true,
      features: ['Full Social Suite', 'Unlimited Broadcasts', 'AI Auto-Replies', 'Premium Support', 'Media Vault Access'],
      platforms: [FaWhatsapp, FaFacebook, FaInstagram]
    },
    {
      name: 'Mega Enterprise',
      price: billingCycle === 'Monthly' ? '199' : '149',
      desc: 'Complete control for large scale multi-channel operations.',
      icon: Crown,
      color: 'text-rose-500',
      bg: 'bg-rose-50',
      features: ['YouTube Analytics', 'Team Management', 'Custom API Integration', 'Dedicated Manager', 'Priority Sync'],
      platforms: [FaWhatsapp, FaFacebook, FaInstagram, FaYoutube]
    }
  ];

  return (
    <div className="space-y-12 pb-24 max-w-7xl mx-auto">
      {/* Header */}
      <div className="text-center space-y-6 pt-12">
        <div className="inline-flex items-center gap-3 px-4 py-1.5 bg-indigo-50 rounded-full text-[10px] font-bold text-indigo-500 uppercase tracking-widest shadow-premium border border-indigo-100">
           <Sparkles className="w-3.5 h-3.5" />
           New Year Transformation Plan
        </div>
        <h2 className="text-[32px] font-black text-[#0a3d62] tracking-tighter leading-tight max-w-2xl mx-auto">
          Choose the Perfect Plan for your Social Intelligence.
        </h2>
        <p className="text-[14px] text-slate-400 max-w-xl mx-auto font-normal">
          Scale your business across WhatsApp, Facebook, Instagram and YouTube with our enterprise-grade SaaS subscription model.
        </p>

        {/* Toggle */}
        <div className="flex items-center justify-center gap-4 pt-6">
           <span className={clsx("text-[11px] font-bold uppercase tracking-widest transition-all", billingCycle === 'Monthly' ? "text-[#0a3d62]" : "text-slate-300")}>Monthly</span>
           <button 
             onClick={() => setBillingCycle(prev => prev === 'Monthly' ? 'Yearly' : 'Monthly')}
             className="w-14 h-8 bg-[#0a3d62] rounded-full p-1 relative flex items-center transition-all group active:scale-95 shadow-premium"
           >
              <div className={clsx(
                "w-6 h-6 bg-white rounded-full shadow-premium transition-all duration-300 transform",
                billingCycle === 'Yearly' ? "translate-x-6" : "translate-x-0"
              )} />
           </button>
           <div className="flex items-center gap-3">
              <span className={clsx("text-[11px] font-bold uppercase tracking-widest transition-all", billingCycle === 'Yearly' ? "text-[#0a3d62]" : "text-slate-300")}>Yearly</span>
              <span className="bg-emerald-50 text-emerald-500 px-2 py-0.5 rounded-lg text-[9px] font-black uppercase tracking-widest border border-emerald-100 shadow-premium animate-bounce">Save 25%</span>
           </div>
        </div>
      </div>

      {/* Plans Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-10 pt-10">
        {plans.map((plan, i) => (
          <div 
            key={i} 
            className={clsx(
                "relative bg-white p-10 rounded-[3rem] shadow-premium border transition-all flex flex-col group",
                plan.featured ? "border-[#0a3d62] scale-105 z-10" : "border-slate-50 hover:border-[#0a3d62]"
            )}
          >
             {plan.featured && (
                <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 px-6 py-2 bg-[#0a3d62] text-white rounded-full text-[10px] font-black uppercase tracking-widest shadow-premium">
                   Best Value Selection
                </div>
             )}

             <div className={clsx("w-14 h-14 rounded-2xl flex items-center justify-center mb-8 shadow-premium group-hover:scale-110 transition-transform", plan.bg, plan.color)}>
                <plan.icon className="w-8 h-8" />
             </div>

             <h3 className="text-[18px] font-bold text-[#0a3d62] uppercase tracking-tighter mb-2">{plan.name}</h3>
             <p className="text-[12px] text-slate-400 font-normal leading-relaxed mb-8">{plan.desc}</p>

             <div className="flex items-baseline gap-2 mb-10">
                <span className="text-[14px] font-bold text-slate-300">$</span>
                <h4 className="text-[42px] font-black text-[#0a3d62] tracking-tighter">{plan.price}</h4>
                <span className="text-[12px] font-bold text-slate-400 uppercase tracking-widest">/ {billingCycle === 'Monthly' ? 'mo' : 'yr'}</span>
             </div>

             <div className="space-y-5 mb-12 flex-1">
                {plan.features.map((feat, j) => (
                   <div key={j} className="flex items-center gap-4">
                      <CheckCircle2 className={clsx("w-5 h-5", plan.featured ? "text-emerald-500" : "text-slate-200")} />
                      <span className="text-[12px] font-medium text-slate-600">{feat}</span>
                   </div>
                ))}
             </div>

             <div className="flex items-center gap-3 mb-8 pt-8 border-t border-slate-50">
                {plan.platforms.map((Icon, k) => (
                   <div key={k} className="p-2 bg-slate-50 rounded-lg text-slate-300">
                      <Icon className="w-4 h-4" />
                   </div>
                ))}
             </div>

             <button 
               onClick={() => showToast(`Initiating Payment for ${plan.name}`, 'success')}
               className={clsx(
                "w-full py-4 rounded-[1.5rem] text-[11px] font-black uppercase tracking-widest transition-all shadow-premium active:scale-95 flex items-center justify-center gap-3",
                plan.featured ? "bg-[#0a3d62] text-white hover:opacity-90" : "bg-slate-50 text-slate-400 hover:bg-[#0a3d62] hover:text-white"
             )}>
                Upgrade Now
                <ArrowRight className="w-4 h-4" />
             </button>
          </div>
        ))}
      </div>

      {/* Trust Quote */}
      <div className="pt-24 text-center">
         <p className="text-[12px] font-bold text-slate-300 uppercase tracking-widest mb-4">Trusted by 5,000+ Global Enterprises</p>
         <div className="flex flex-wrap items-center justify-center gap-12 opacity-30 grayscale contrast-200">
            {[FaWhatsapp, FaFacebook, FaInstagram, FaYoutube].map((I, i) => (
                <I key={i} className="w-10 h-10" />
            ))}
         </div>
      </div>
    </div>
  );
}
