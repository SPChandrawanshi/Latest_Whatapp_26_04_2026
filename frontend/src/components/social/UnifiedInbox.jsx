import React, { useEffect, useState } from 'react';
import { FaWhatsapp, FaFacebook, FaInstagram, FaYoutube } from 'react-icons/fa';
import { 
  Search, 
  Phone, 
  MoreVertical, 
  Send,
  Image as ImageIcon,
  Paperclip,
  CheckCheck,
  User,
  Filter,
  Settings,
  MessageSquare
} from 'lucide-react';
import { clsx } from 'clsx';
import { chatApi } from '../../api/chatApi';

export function UnifiedInbox() {
  const [chats, setChats] = useState([]);
  const [selectedChat, setSelectedChat] = useState(null);
  const [messages, setMessages] = useState([]);
  const [activePlatform, setActivePlatform] = useState('whatsapp');
  const [messageText, setMessageText] = useState('');

  const platforms = [
    { id: 'whatsapp', icon: FaWhatsapp, color: 'text-emerald-500', name: 'WhatsApp' },
    { id: 'facebook', icon: FaFacebook, color: 'text-blue-600', name: 'Facebook' },
    { id: 'instagram', icon: FaInstagram, color: 'text-rose-500', name: 'Instagram' },
    { id: 'youtube', icon: FaYoutube, color: 'text-rose-600', name: 'YouTube' },
  ];

  const fetchChats = async () => {
    try {
      const res = await chatApi.getChats();
      if (res.success) {
        // Filter chats based on platform if needed, for now show all matching platform
        const platformChats = res.data.filter(c => c.platform.toLowerCase() === activePlatform);
        setChats(platformChats);
        if (platformChats.length > 0 && !selectedChat) {
          setSelectedChat(platformChats[0]);
        } else if (platformChats.length === 0) {
          setSelectedChat(null);
          setMessages([]);
        }
      }
    } catch (e) {
      console.error("Failed to fetch chats", e);
    }
  };

  useEffect(() => {
    fetchChats();
  }, [activePlatform]);

  useEffect(() => {
    if (selectedChat) {
      fetchMessages(selectedChat.id);
    }
  }, [selectedChat]);

  const fetchMessages = async (chatId) => {
    try {
      const res = await chatApi.getMessages(chatId);
      if (res.success) {
        setMessages(res.data);
      }
    } catch (e) {
      console.error("Failed to fetch messages", e);
    }
  };

  const handleSend = async (e) => {
    e.preventDefault();
    if (!messageText.trim() || !selectedChat) return;
    
    try {
      const res = await chatApi.sendMessage(selectedChat.id, messageText, 'agent');
      if (res.success) {
        setMessages([...messages, res.data]);
        setMessageText('');
        fetchChats(); // refresh sidebar last message
      }
    } catch (e) {
      console.error("Failed to send message", e);
    }
  };

  const formatTime = (isoString) => {
    if (!isoString) return '';
    const date = new Date(isoString);
    return date.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
  };

  return (
    <div className="flex h-[calc(100vh-140px)] bg-white rounded-[2rem] shadow-premium overflow-hidden border border-slate-50">
      {/* Platform Multi-Switcher (Master Sidebar) */}
      <div className="w-[70px] bg-[#0a3d62] flex flex-col items-center py-8 gap-6 border-r border-[#0a3d62]/10">
        {platforms.map((p) => (
          <button 
            key={p.id}
            onClick={() => { setActivePlatform(p.id); setSelectedChat(null); }}
            className={clsx(
                "w-12 h-12 rounded-2xl flex items-center justify-center transition-all active:scale-90 relative group shadow-premium",
                activePlatform === p.id ? "bg-white text-[#0a3d62]" : "text-white/40 hover:text-white"
            )}
          >
            <p.icon className="w-6 h-6" />
            <div className="absolute left-full ml-4 px-3 py-1.5 bg-[#0a3d62] text-white text-[10px] font-bold rounded-lg opacity-0 group-hover:opacity-100 pointer-events-none transition-all uppercase tracking-widest z-50 whitespace-nowrap">
                {p.name}
            </div>
            {activePlatform === p.id && <div className="absolute left-0 w-1 h-6 bg-white rounded-r-full" />}
          </button>
        ))}
        <div className="mt-auto pb-4">
            <button className="w-12 h-12 rounded-2xl flex items-center justify-center text-white/20 hover:text-white transition-all">
                <Settings className="w-6 h-6" />
            </button>
        </div>
      </div>

      {/* Chat List Sidebar */}
      <div className="w-[320px] border-r border-slate-50 flex flex-col bg-slate-50/30">
        <div className="p-6">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-[14px] font-bold text-[#0a3d62] uppercase tracking-tighter">
                {activePlatform.toUpperCase()} INBOX
            </h2>
            <button className="p-2 bg-white rounded-xl shadow-premium hover:bg-[#0a3d62] hover:text-white transition-all active:scale-90">
                <Filter className="w-4 h-4" />
            </button>
          </div>
          <div className="relative">
            <Search className="w-3.5 h-3.5 absolute left-4 top-1/2 -translate-y-1/2 text-slate-300" />
            <input 
              type="text" 
              placeholder={`Search ${activePlatform}...`} 
              className="w-full pl-10 pr-4 py-3 bg-white border border-slate-100 rounded-xl text-[12px] font-normal focus:outline-none focus:border-[#0a3d62] shadow-premium"
            />
          </div>
        </div>

        <div className="flex-1 overflow-y-auto px-3 space-y-1 pb-6">
          {chats.map((chat) => (
            <button 
              key={chat.id}
              onClick={() => setSelectedChat(chat)}
              className={clsx(
                "w-full p-4 rounded-2xl flex items-start gap-4 transition-all text-left group active:scale-[0.98]",
                selectedChat?.id === chat.id ? "bg-white shadow-premium border border-slate-100" : "hover:bg-white/50"
              )}
            >
              <div className="relative flex-shrink-0">
                <div className="w-12 h-12 rounded-2xl bg-slate-100 flex items-center justify-center text-[#0a3d62] font-bold group-hover:bg-[#0a3d62] group-hover:text-white transition-all">
                  {chat.lead?.name?.[0] || 'U'}
                </div>
              </div>
              <div className="flex-1 min-w-0">
                <div className="flex justify-between items-start mb-0.5">
                    <p className="text-[12px] font-bold text-[#0a3d62] truncate">{chat.lead?.name}</p>
                    <span className="text-[9px] font-bold text-slate-300 uppercase italic">
                      {chat.messages?.[0] ? formatTime(chat.messages[0].createdAt) : ''}
                    </span>
                </div>
                <p className="text-[11px] text-slate-400 truncate font-normal leading-tight">
                    {chat.messages?.[0]?.content || "No messages yet"}
                </p>
              </div>
            </button>
          ))}
          {chats.length === 0 && (
            <p className="text-center text-slate-400 text-xs mt-10">No chats found for {activePlatform}</p>
          )}
        </div>
      </div>

      {/* Main Chat Window */}
      <div className="flex-1 flex flex-col bg-white">
        {selectedChat ? (
          <>
            {/* Chat Header */}
            <div className="p-6 border-b border-slate-50 flex items-center justify-between">
              <div className="flex items-center gap-5">
                <div className="w-12 h-12 rounded-2xl bg-slate-50 flex items-center justify-center text-[#0a3d62] shadow-premium">
                    <User className="w-6 h-6" />
                </div>
                <div>
                    <h3 className="text-[14px] font-bold text-[#0a3d62] tracking-tight">{selectedChat.lead?.name}</h3>
                    <div className="flex items-center gap-2 mt-0.5">
                      <div className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
                      <span className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">{activePlatform.toUpperCase()} ACTIVE</span>
                    </div>
                </div>
              </div>
              <div className="flex items-center gap-2">
                <button className="p-3 bg-slate-50 text-slate-400 rounded-xl hover:bg-[#0a3d62] hover:text-white transition-all active:scale-90 shadow-premium">
                    <Phone className="w-4 h-4" />
                </button>
                <button className="p-3 bg-slate-50 text-slate-400 rounded-xl hover:bg-[#0a3d62] hover:text-white transition-all active:scale-90 shadow-premium">
                    <MoreVertical className="w-4 h-4" />
                </button>
              </div>
            </div>

            {/* Messages */}
            <div className="flex-1 overflow-y-auto p-10 space-y-6 bg-slate-50/20">
              {messages.map((msg) => (
                <div key={msg.id} className={clsx("flex", msg.sender === 'agent' ? "justify-end" : "justify-start")}>
                    <div className={clsx(
                        "p-4 rounded-2xl max-w-sm shadow-premium border",
                        msg.sender === 'agent' 
                            ? "bg-[#0a3d62] text-white border-[#0a3d62]/10 rounded-tr-none" 
                            : "bg-white text-slate-700 border-slate-100 rounded-tl-none"
                    )}>
                      <p className="text-[12px] font-normal leading-relaxed">{msg.content}</p>
                      <div className={clsx("flex items-center gap-1.5 mt-2", msg.sender === 'agent' ? "justify-end" : "justify-start")}>
                          <span className="text-[9px] font-bold uppercase opacity-50">{formatTime(msg.createdAt)}</span>
                          {msg.sender === 'agent' && <CheckCheck className="w-3 h-3 text-emerald-400" />}
                      </div>
                    </div>
                </div>
              ))}
            </div>

            {/* Input */}
            <div className="p-8 bg-white border-t border-slate-50">
              <form onSubmit={handleSend} className="flex items-center gap-4 bg-slate-50 p-2 rounded-2xl border border-slate-100 shadow-premium">
                  <button type="button" className="p-3 text-slate-300 hover:text-[#0a3d62] transition-colors rounded-xl hover:bg-white shadow-premium">
                    <Paperclip className="w-5 h-5" />
                  </button>
                  <input 
                    type="text" 
                    placeholder={`Type a message...`}
                    value={messageText}
                    onChange={(e) => setMessageText(e.target.value)}
                    className="flex-1 bg-transparent border-none focus:ring-0 text-[12px] font-normal outline-none"
                  />
                  <button type="button" className="p-3 text-slate-300 hover:text-[#0a3d62] transition-colors rounded-xl hover:bg-white shadow-premium">
                    <ImageIcon className="w-5 h-5" />
                  </button>
                  <button 
                    type="submit"
                    className="px-8 py-3 bg-[#0a3d62] text-white rounded-xl text-[10px] font-bold uppercase tracking-widest hover:opacity-90 active:scale-95 transition-all shadow-premium flex items-center gap-3"
                  >
                    <Send className="w-4 h-4" />
                    Send
                  </button>
              </form>
            </div>
          </>
        ) : (
          <div className="flex-1 flex flex-col items-center justify-center text-slate-400">
             <MessageSquare className="w-16 h-16 mb-4 text-slate-200" />
             <p>Select a chat to start messaging</p>
          </div>
        )}
      </div>
    </div>
  );
}
