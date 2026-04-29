import React, { useState } from 'react';
import { Send, CheckCheck, User, MessageCircle } from 'lucide-react';
import { useCustomers } from '../../context/CustomerContext';
import { clsx } from 'clsx';

export function CustomerChat() {
  const { globalMessages, sendMessage, activeCustomers } = useCustomers();
  const [currentUser, setCurrentUser] = useState(null); // No default user
  const [msg, setMsg] = useState('');
  
  // Find index of current user in activeCustomers to use as chatId
  const chatId = activeCustomers.findIndex(c => c.id === currentUser?.id);
  const messages = chatId !== -1 ? (globalMessages[chatId] || []) : [];

  if (!currentUser && activeCustomers.length > 0) {
    return (
      <div className="fixed inset-0 bg-slate-100 flex items-center justify-center p-4">
        <div className="bg-white p-8 rounded-[2rem] shadow-premium max-w-sm w-full text-center">
          <MessageCircle className="w-12 h-12 text-[#0a3d62] mx-auto mb-6" />
          <h2 className="text-[18px] font-bold text-[#0a3d62] uppercase tracking-tight mb-2">WhatsApp Portal</h2>
          <p className="text-[12px] text-slate-400 mb-8 font-normal">Select your identity to start chatting with Shivam</p>
          <div className="space-y-3">
            {activeCustomers.map(user => (
              <button 
                key={user.id}
                onClick={() => setCurrentUser(user)}
                className="w-full p-4 bg-slate-50 hover:bg-[#0a3d62] hover:text-white rounded-xl border border-slate-100 transition-all text-left group"
              >
                <p className="text-[12px] font-bold uppercase tracking-wide group-hover:text-white">{user.name}</p>
                <p className="text-[10px] opacity-40 uppercase tracking-widest">{user.phone}</p>
              </button>
            ))}
          </div>
          <p className="mt-8 text-[10px] text-slate-300 uppercase font-bold tracking-widest">No active clients found? Register first.</p>
        </div>
      </div>
    );
  }

  if (activeCustomers.length === 0) {
    return (
      <div className="fixed inset-0 bg-slate-100 flex items-center justify-center">
         <div className="text-center">
            <h2 className="text-[14px] font-bold text-[#0a3d62] uppercase">No Active Clients</h2>
            <p className="text-[12px] text-slate-400 mt-2">Please go to Signup page first.</p>
         </div>
      </div>
    );
  }

  const handleSend = (e) => {
    e.preventDefault();
    if (!msg.trim()) return;
    sendMessage(chatId, msg, 'Customer');
    setMsg('');
  };

  return (
    <div className="fixed inset-0 bg-[#e5ddd5] flex flex-col font-sans">
      {/* Header */}
      <div className="bg-[#075e54] text-white p-4 flex items-center gap-4 shadow-lg z-10">
        <div className="w-10 h-10 bg-slate-200 rounded-full flex items-center justify-center text-[#075e54]">
          <User className="w-6 h-6" />
        </div>
        <div>
          <h2 className="text-[14px] font-bold tracking-tight">Counsellor: Shivam</h2>
          <p className="text-[10px] opacity-70 uppercase font-bold tracking-widest">WhatsApp Online</p>
        </div>
      </div>

      {/* Messages Area */}
      <div className="flex-1 overflow-y-auto p-4 space-y-4" style={{ backgroundImage: 'url("https://user-images.githubusercontent.com/15075759/28719144-86dc0f70-73b1-11e7-911d-60d70fcded21.png")' }}>
        <div className="flex justify-center">
            <span className="bg-[#dcf8c6] text-[#075e54] px-4 py-1 rounded-lg text-[10px] font-bold uppercase shadow-sm border border-[#075e54]/10">End-to-End Encrypted</span>
        </div>

        {messages.map((m, i) => (
          <div key={i} className={clsx("flex", m.sender === 'Customer' ? "justify-end" : "justify-start")}>
            <div className={clsx(
              "p-3 rounded-xl max-w-[80%] shadow-sm text-[12px] relative",
              m.sender === 'Customer' ? "bg-[#dcf8c6] rounded-tr-none" : "bg-white rounded-tl-none"
            )}>
              <p className="text-slate-800 leading-relaxed font-normal">{m.text}</p>
              <div className="flex items-center justify-end gap-1 mt-1">
                <span className="text-[9px] text-slate-400 font-bold">{m.time}</span>
                {m.sender === 'Customer' && <CheckCheck className="w-3 h-3 text-blue-400" />}
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Input */}
      <form onSubmit={handleSend} className="p-3 bg-[#f0f0f0] flex items-center gap-2 border-t border-slate-200 shadow-premium">
        <input 
          type="text" 
          placeholder="Type a message" 
          value={msg}
          onChange={(e) => setMsg(e.target.value)}
          className="flex-1 px-4 py-3 bg-white rounded-full border-none focus:ring-0 text-[13px] font-normal shadow-sm"
        />
        <button 
          type="submit"
          className="w-12 h-12 bg-[#128c7e] text-white rounded-full flex items-center justify-center shadow-lg active:scale-90 transition-all"
        >
          <Send className="w-5 h-5" />
        </button>
      </form>

      {/* Label for Demo */}
      <div className="absolute top-20 right-4 bg-rose-500 text-white px-4 py-2 rounded-xl text-[10px] font-bold uppercase shadow-premium z-20 animate-pulse">
        Customer Simulation View (Sanju)
      </div>
    </div>
  );
}
