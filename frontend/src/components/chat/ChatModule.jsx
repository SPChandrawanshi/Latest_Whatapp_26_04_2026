import React from 'react';
import { Search, Phone, Video, MoreVertical, Send, Smile, Paperclip, CheckCheck } from 'lucide-react';
import { clsx } from 'clsx';

export function ChatModule() {
  const [selectedChat, setSelectedChat] = React.useState(0);

  const chats = [
    { id: 0, name: "Arjun Sharma", lastMsg: "Ji, details bhej dijiye.", time: "10:30 AM", unread: 2, status: "online" },
    { id: 1, name: "Priya Varma", lastMsg: "Thank you for the call.", time: "Yesterday", unread: 0, status: "offline" },
    { id: 2, name: "Vikram Singh", lastMsg: "I am interested in the plan.", time: "Monday", unread: 0, status: "online" },
  ];

  return (
    <div className="bg-white rounded-3xl shadow-premium border border-slate-100 h-[calc(100vh-180px)] flex overflow-hidden">
      {/* Sidebar - Chat List */}
      <div className="w-full md:w-80 lg:w-96 border-r border-slate-100 flex flex-col">
        <div className="p-4 bg-slate-50/50">
          <h2 className="text-xl font-bold text-[#0a3d62] mb-4">Messages</h2>
          <div className="relative">
            <Search className="w-4 h-4 absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" />
            <input 
              type="text" 
              placeholder="Search chat..." 
              className="w-full pl-10 pr-4 py-2.5 bg-white border border-slate-200 rounded-2xl focus:outline-none focus:border-primary text-sm shadow-sm"
            />
          </div>
        </div>
        
        <div className="flex-1 overflow-y-auto">
          {chats.map((chat) => (
            <div 
              key={chat.id}
              onClick={() => setSelectedChat(chat.id)}
              className={clsx(
                "p-4 flex gap-3 cursor-pointer transition-all border-b border-slate-50",
                selectedChat === chat.id ? "bg-primary/5 border-l-4 border-l-primary" : "hover:bg-slate-50"
              )}
            >
              <div className="relative">
                <div className="w-12 h-12 rounded-2xl bg-primary/10 flex items-center justify-center font-bold text-primary">
                  {chat.name.split(' ').map(n => n[0]).join('')}
                </div>
                {chat.status === "online" && (
                  <div className="absolute -bottom-1 -right-1 w-3.5 h-3.5 bg-emerald-500 rounded-full border-[3px] border-white" />
                )}
              </div>
              <div className="flex-1 min-w-0">
                <div className="flex justify-between items-center mb-1">
                  <h4 className="font-bold text-slate-800 truncate">{chat.name}</h4>
                  <span className="text-[10px] font-bold text-slate-400 uppercase">{chat.time}</span>
                </div>
                <div className="flex justify-between items-center">
                  <p className="text-sm text-slate-500 truncate">{chat.lastMsg}</p>
                  {chat.unread > 0 && (
                    <span className="bg-primary text-white text-[10px] font-bold px-1.5 py-0.5 rounded-full">
                      {chat.unread}
                    </span>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Main Chat Area */}
      <div className="hidden md:flex flex-1 flex-col bg-[#f0f2f5]/30">
        <div className="p-4 bg-white border-b border-slate-100 flex items-center justify-between shadow-sm z-10">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center font-bold text-primary">
              {chats[selectedChat]?.name.split(' ').map(n => n[0]).join('')}
            </div>
            <div>
              <h4 className="font-bold text-slate-800 leading-tight">{chats[selectedChat]?.name}</h4>
              <p className="text-xs text-emerald-500 font-bold">Online</p>
            </div>
          </div>
          <div className="flex items-center gap-2">
            <button className="p-2.5 text-slate-400 hover:text-primary hover:bg-slate-50 rounded-xl transition-all">
              <Phone className="w-5 h-5" />
            </button>
            <button className="p-2.5 text-slate-400 hover:text-primary hover:bg-slate-50 rounded-xl transition-all">
              <Video className="w-5 h-5" />
            </button>
            <button className="p-2.5 text-slate-400 hover:text-primary hover:bg-slate-50 rounded-xl transition-all">
              <MoreVertical className="w-5 h-5" />
            </button>
          </div>
        </div>

        <div className="flex-1 overflow-y-auto p-6 space-y-4">
          <div className="flex justify-center my-4">
            <span className="bg-white/80 backdrop-blur px-3 py-1 rounded-lg text-[10px] font-bold text-slate-400 uppercase tracking-widest shadow-sm">Today</span>
          </div>
          
          <div className="flex justify-end">
            <div className="bg-[#0a3d62] text-white p-3 rounded-2xl rounded-tr-none max-w-md shadow-md">
              <p className="text-sm">Hello Arjun, aapne leads check kiye?</p>
              <div className="flex justify-end mt-1 items-center gap-1">
                <span className="text-[10px] opacity-70 font-bold">10:25 AM</span>
                <CheckCheck className="w-3 h-3 opacity-70" />
              </div>
            </div>
          </div>

          <div className="flex justify-start">
            <div className="bg-white p-3 rounded-2xl rounded-tl-none max-w-md shadow-sm border border-slate-100">
              <p className="text-sm text-slate-700">Ji, details bhej dijiye.</p>
              <div className="flex justify-end mt-1">
                <span className="text-[10px] text-slate-400 font-bold">10:30 AM</span>
              </div>
            </div>
          </div>
        </div>

        {/* Input Area */}
        <div className="p-4 bg-white border-t border-slate-100 flex items-center gap-3 shadow-[0_-2px_10px_rgba(0,0,0,0.02)]">
          <button className="p-2.5 text-slate-400 hover:text-primary transition-all">
            <Smile className="w-6 h-6" />
          </button>
          <button className="p-2.5 text-slate-400 hover:text-primary transition-all">
            <Paperclip className="w-6 h-6" />
          </button>
          <div className="flex-1">
            <input 
              type="text" 
              placeholder="Type your message..." 
              className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-2xl focus:outline-none focus:border-primary focus:bg-white transition-all text-sm"
            />
          </div>
          <button className="p-3 bg-[#0a3d62] text-white rounded-2xl hover:opacity-90 shadow-lg active:scale-95 transition-all">
            <Send className="w-5 h-5" />
          </button>
        </div>
      </div>
    </div>
  );
}
