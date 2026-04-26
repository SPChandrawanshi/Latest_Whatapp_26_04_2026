import React from 'react';
import { Search, Phone, Video, MoreVertical, Send, Smile, Paperclip, CheckCheck, Plus } from 'lucide-react';
import { clsx } from 'clsx';

export function ChatModule() {
  const [selectedChat, setSelectedChat] = React.useState(0);
  const [message, setMessage] = React.useState('');
  const [chatHistory, setChatHistory] = React.useState({
    0: [{ text: "Hello Arjun, aapne leads check kiye?", time: "10:25 AM", sent: true }],
    1: [{ text: "Hi Priya, update regarding the docs?", time: "09:00 AM", sent: true }],
    2: [{ text: "Vikram here, ready to start?", time: "08:15 AM", sent: false }],
  });

  const chats = [
    { id: 0, name: "Arjun Sharma", lastMsg: "Ji, details bhej dijiye.", time: "10:30 AM", unread: 2, status: "online" },
    { id: 1, name: "Priya Varma", lastMsg: "Thank you for the call.", time: "Yesterday", unread: 0, status: "offline" },
    { id: 2, name: "Vikram Singh", lastMsg: "I am interested in the plan.", time: "Monday", unread: 0, status: "online" },
  ];

  const handleSendMessage = (e) => {
    e.preventDefault();
    if (!message.trim()) return;
    
    const newMsg = { text: message, time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }), sent: true };
    setChatHistory(prev => ({
      ...prev,
      [selectedChat]: [...(prev[selectedChat] || []), newMsg]
    }));
    setMessage('');
    
    // Simulate auto-reply
    setTimeout(() => {
      const reply = { text: "Got it! I will check and get back to you.", time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }), sent: false };
      setChatHistory(prev => ({
        ...prev,
        [selectedChat]: [...(prev[selectedChat] || []), reply]
      }));
    }, 1500);
  };

  return (
    <div className="bg-white rounded-3xl shadow-premium border border-slate-100 h-[calc(100vh-200px)] flex overflow-hidden group/chat animate-in fade-in zoom-in-95 duration-500">
      {/* Sidebar - Chat List */}
      <div className="w-full md:w-80 lg:w-96 border-r border-slate-100 flex flex-col bg-slate-50/10">
        <div className="p-6 bg-white border-b border-slate-50">
          <div className="flex items-center justify-between mb-4">
             <h2 className="text-xl font-black text-[#0a3d62] uppercase tracking-tighter">Messages</h2>
             <button className="p-2 bg-slate-50 rounded-xl hover:bg-primary hover:text-white transition-all active:scale-90 shadow-sm" onClick={() => alert('New chat...')}>
                <Plus className="w-4 h-4" />
             </button>
          </div>
          <div className="relative group">
            <Search className="w-4 h-4 absolute left-4 top-1/2 -translate-y-1/2 text-slate-300 group-focus-within:text-primary transition-colors" />
            <input 
              type="text" 
              placeholder="Search conversations..." 
              className="w-full pl-11 pr-4 py-3 bg-slate-50 border border-slate-100 rounded-2xl focus:outline-none focus:border-primary focus:bg-white text-xs font-bold transition-all shadow-inner"
            />
          </div>
        </div>
        
        <div className="flex-1 overflow-y-auto p-2 space-y-1">
          {chats.map((chat) => (
            <button 
              key={chat.id}
              onClick={() => setSelectedChat(chat.id)}
              className={clsx(
                "w-full p-4 flex gap-4 transition-all rounded-2xl text-left active:scale-[0.98]",
                selectedChat === chat.id ? "bg-white shadow-xl shadow-primary/5 ring-1 ring-primary/10" : "hover:bg-slate-50 opacity-70 hover:opacity-100"
              )}
            >
              <div className="relative">
                <div className={clsx(
                  "w-12 h-12 rounded-2xl flex items-center justify-center font-black text-sm shadow-sm transition-transform",
                  selectedChat === chat.id ? "bg-primary text-white scale-110" : "bg-slate-100 text-slate-400 group-hover:bg-primary/10"
                )}>
                  {chat.name.split(' ').map(n => n[0]).join('')}
                </div>
                {chat.status === "online" && (
                  <div className="absolute -bottom-1 -right-1 w-3.5 h-3.5 bg-emerald-500 rounded-full border-[3px] border-white shadow-sm" />
                )}
              </div>
              <div className="flex-1 min-w-0">
                <div className="flex justify-between items-center mb-0.5">
                  <h4 className={clsx("font-black truncate tracking-tight text-sm", selectedChat === chat.id ? "text-primary" : "text-slate-700")}>{chat.name}</h4>
                  <span className="text-[9px] font-black text-slate-300 uppercase tracking-widest">{chat.time}</span>
                </div>
                <div className="flex justify-between items-center">
                  <p className="text-[11px] text-slate-400 font-bold truncate tracking-tight">{chat.lastMsg}</p>
                  {chat.unread > 0 && selectedChat !== chat.id && (
                    <span className="bg-primary text-white text-[8px] font-black px-1.5 py-0.5 rounded-lg shadow-lg shadow-primary/30">
                      {chat.unread}
                    </span>
                  )}
                </div>
              </div>
            </button>
          ))}
        </div>
      </div>

      {/* Main Chat Area */}
      <div className="hidden md:flex flex-1 flex-col bg-[#f8fafc]">
        <div className="p-5 bg-white/80 backdrop-blur-md border-b border-slate-100 flex items-center justify-between shadow-sm z-10 sticky top-0">
          <div className="flex items-center gap-4">
            <div className="w-11 h-11 rounded-2xl bg-primary shadow-lg shadow-primary/20 flex items-center justify-center font-black text-white">
              {chats[selectedChat]?.name.split(' ').map(n => n[0]).join('')}
            </div>
            <div>
              <h4 className="font-black text-slate-800 tracking-tight">{chats[selectedChat]?.name}</h4>
              <div className="flex items-center gap-1.5">
                <div className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
                <p className="text-[10px] text-emerald-500 font-black uppercase tracking-widest">Active Now</p>
              </div>
            </div>
          </div>
          <div className="flex items-center gap-3">
            <button className="w-10 h-10 flex items-center justify-center text-slate-400 hover:text-primary hover:bg-primary/5 rounded-xl transition-all active:scale-90" onClick={() => alert('Starting audio call...')}>
              <Phone className="w-5 h-5" />
            </button>
            <button className="w-10 h-10 flex items-center justify-center text-slate-400 hover:text-primary hover:bg-primary/5 rounded-xl transition-all active:scale-90" onClick={() => alert('Starting video call...')}>
              <Video className="w-5 h-5" />
            </button>
            <div className="w-px h-6 bg-slate-100 mx-1"></div>
            <button className="w-10 h-10 flex items-center justify-center text-slate-400 hover:text-primary hover:bg-primary/5 rounded-xl transition-all active:scale-90" onClick={() => alert('More options...')}>
              <MoreVertical className="w-5 h-5" />
            </button>
          </div>
        </div>

        <div className="flex-1 overflow-y-auto p-8 space-y-6 bg-white/30">
          <div className="flex justify-center my-6">
            <span className="bg-slate-100/50 border border-slate-100 px-4 py-1.5 rounded-full text-[9px] font-black text-slate-400 uppercase tracking-[0.2em] shadow-sm">Conversation Started</span>
          </div>
          
          {(chatHistory[selectedChat] || []).map((msg, idx) => (
            <div key={idx} className={clsx("flex animate-in fade-in slide-in-from-bottom-2 duration-300", msg.sent ? "justify-end" : "justify-start")}>
              <div className={clsx(
                "p-4 rounded-3xl max-w-md shadow-premium relative group/msg",
                msg.sent 
                  ? "bg-[#0a3d62] text-white rounded-tr-none border border-[#0a3d62]/10" 
                  : "bg-white text-slate-700 rounded-tl-none border border-slate-100"
              )}>
                <p className="text-sm font-medium leading-relaxed">{msg.text}</p>
                <div className={clsx("flex items-center gap-1.5 mt-2", msg.sent ? "justify-end" : "justify-start")}>
                  <span className={clsx("text-[9px] font-bold uppercase", msg.sent ? "opacity-60" : "text-slate-300")}>{msg.time}</span>
                  {msg.sent && <CheckCheck className="w-3 h-3 text-emerald-400" />}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Input Area */}
        <form onSubmit={handleSendMessage} className="p-5 bg-white border-t border-slate-100 flex items-center gap-4 shadow-[0_-10px_25px_rgba(0,0,0,0.02)] z-10">
          <button type="button" className="p-3 text-slate-400 hover:text-primary hover:bg-slate-50 rounded-2xl transition-all active:scale-90" onClick={() => alert('Emoji picker...')}>
            <Smile className="w-6 h-6" />
          </button>
          <button type="button" className="p-3 text-slate-400 hover:text-primary hover:bg-slate-50 rounded-2xl transition-all active:scale-90" onClick={() => alert('Attachment selector...')}>
            <Paperclip className="w-6 h-6" />
          </button>
          <div className="flex-1 relative group">
            <input 
              type="text" 
              placeholder="Type your message..." 
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              className="w-full px-6 py-4 bg-slate-50 border border-slate-100 rounded-[2rem] focus:outline-none focus:border-primary focus:bg-white focus:ring-4 focus:ring-primary/5 transition-all text-sm font-bold shadow-inner"
            />
          </div>
          <button 
            type="submit"
            disabled={!message.trim()}
            className="p-4 bg-[#0a3d62] text-white rounded-[1.5rem] hover:opacity-90 shadow-xl shadow-[#0a3d62]/20 active:scale-95 transition-all disabled:opacity-20 disabled:grayscale disabled:scale-95"
          >
            <Send className="w-6 h-6" />
          </button>
        </form>
      </div>
    </div>
  );
}
