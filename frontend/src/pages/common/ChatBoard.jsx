import React from 'react';
import { ChatModule } from '../../components/chat/ChatModule';

export function ChatBoard() {
  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-3xl font-extrabold text-[#0a3d62] tracking-tight">Communication Panel</h2>
          <p className="text-slate-500 mt-1 font-medium">WhatsApp inspired real-time chat interface.</p>
        </div>
      </div>
      <ChatModule />
    </div>
  );
}
