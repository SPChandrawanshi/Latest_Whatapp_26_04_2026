# Project Wireframe: WhatsApp Inspired Multi-Role CRM

## 🎯 Project Type
WhatsApp Inspired Multi-Role CRM
**Roles:**
- Super Admin
- Admin
- Manager
- Counselor

**Goal:**
✅ Responsive
✅ Professional UI
✅ Different dashboards
✅ Different menus
✅ Working buttons
✅ Mobile ready
✅ Clean React + Tailwind structure

---

## 🧱 MASTER APP STRUCTURE (Responsive)

### Desktop Layout
┌──────────────┬───────────────────────┬───────────────┐
│ Sidebar      │ Main Content          │ Right Panel   │
│ (Role Based) │ Dashboard / Chat      │ Details       │
└──────────────┴───────────────────────┴───────────────┘

### Tablet Layout
┌──────────────┬───────────────────────┐
│ Collapsible  │ Main Content          │
│ Sidebar      │                       │
└──────────────┴───────────────────────┘

### Mobile Layout
┌────────────────────────────┐
│ Topbar + Menu Button       │
├────────────────────────────┤
│ Full Screen Current Page   │
└────────────────────────────┘
*Bottom Nav (optional)*

---

## 🎨 DESIGN SYSTEM (Professional)

### Colors
- **Primary:** Emerald
- **Secondary:** Indigo
- **Background:** Slate / White
- **Success:** Green
- **Warning:** Amber
- **Danger:** Red

### UI Style
- Rounded-2xl cards
- Soft shadow
- Spacious padding
- Hover effects
- Smooth transitions
- Icon based menus

---

## 📁 FILE STRUCTURE (React + Tailwind)
```text
src/
├── assets/
├── components/
│   ├── common/
│   ├── layout/
│   ├── cards/
│   ├── chat/
│   ├── forms/
│   └── tables/
├── layouts/
├── pages/
│   ├── auth/
│   ├── superadmin/
│   ├── admin/
│   ├── manager/
│   └── counselor/
├── routes/
├── hooks/
├── context/
├── utils/
├── data/
├── App.jsx
└── main.jsx
```

---

## 🔐 AUTH WIREFRAME

### Login Page
┌─────────────────────────────┐
│ Logo                        │
│ Welcome Back                │
│ Email Input                 │
│ Password Input              │
│ Role Select Dropdown        │
│ Login Button                │
│ Forgot Password             │
└─────────────────────────────┘

**Buttons:**
- Login
- Show Password
- Forgot Password

**Mobile:**
- Single centered card full width

---

## 👑 SUPER ADMIN WIREFRAME

### Sidebar
- Dashboard
- All Admins
- All Managers
- All Counselors
- Global Chats
- Reports
- Billing
- Settings

### Dashboard
- Topbar: Search | Notifications | Profile
- Stats Row: [Total Users] [Active Chats] [Revenue] [Pending Tasks]
- Charts Row: [Lead Chart] [Conversion Chart]
- Tables: [Recent Users], [Recent Activities]

### Pages
- Dashboard
- User Management
- Reports
- Billing
- Settings

---

## 🧑💼 ADMIN WIREFRAME

### Sidebar
- Dashboard
- Team
- Leads
- Assign Leads
- Chats
- Reports
- Settings

### Dashboard
- [New Leads] [Assigned Leads] [Team Count] [Today Followups]
- [Lead Source Chart]
- [Team Performance]
- [Recent Leads Table]

### Pages
- Dashboard
- Team List
- Leads
- Assign Page
- Reports

---

## 👨💼 MANAGER WIREFRAME

### Sidebar
- Dashboard
- My Team
- Tasks
- Pending Leads
- Chat Monitor
- Performance

### Dashboard
- [My Team] [Pending Leads] [Open Chats] [Completed]
- [Task Board]
- [Counselor Performance Table]

### Pages
- Dashboard
- Team View
- Task Board
- Pending Leads
- Reports

---

## 💬 COUNSELOR WIREFRAME

### Sidebar
- Dashboard
- My Leads
- My Chats
- Followups
- Documents
- Profile
- Settings

### Dashboard
- [Assigned Leads] [Today Followups] [Interested] [Closed]
- [My Tasks]
- [Recent Messages]

### Pages
- Dashboard
- My Leads
- Chat
- Followups
- Profile

---

## 💬 CHAT MODULE WIREFRAME

### Desktop
┌────────────┬──────────────────────┬─────────────┐
│ Chat List  │ Conversation         │ User Info   │
│ Search     │ Header               │ Profile     │
│ Users      │ Messages             │ Files       │
│            │ Input + Send         │ Notes       │
└────────────┴──────────────────────┴─────────────┘

**Buttons:**
- Send
- Emoji
- Attach File
- Voice
- Search Chat
- Mark Resolved

### Mobile
- Chat list screen → Tap → Full chat screen

---

## 📋 LEADS PAGE WIREFRAME

### Top Filters:
Search | Status | Date | Source

### Table:
Name | Phone | Status | Assigned To | Action

### Action Buttons:
View | Edit | Assign | Delete

### Mobile:
- Cards instead of table

---

## 📊 REPORT PAGE WIREFRAME

### Filters:
Date Range | Team | Status

### Cards:
Total Leads | Converted | Pending | Revenue

### Charts:
Bar Chart | Pie Chart

---

## ⚙️ SETTINGS PAGE

### Tabs:
1. Profile
2. Password
3. Notifications
4. Theme
5. Company Settings

---

## 📱 RESPONSIVE RULES

### Breakpoints
- Mobile: < 768px
- Tablet: 768 - 1024
- Desktop: > 1024

### Mobile Changes
✅ Sidebar drawer
✅ Cards stack vertically
✅ Tables become cards
✅ Buttons full width
✅ Topbar compact

---

## 🧩 REUSABLE COMPONENTS

### Layout
- Sidebar.jsx
- Topbar.jsx
- MobileDrawer.jsx

### Common
- StatCard.jsx
- SearchBar.jsx
- FilterBar.jsx
- EmptyState.jsx
- ConfirmModal.jsx

### Chat
- ChatList.jsx
- ChatWindow.jsx
- MessageBubble.jsx
- MessageInput.jsx

### Tables
- DataTable.jsx
- Pagination.jsx

---

## 🔘 BUTTON STATES
Every button should have:
- Hover state
- Loading state
- Disabled state
- Success feedback

**Example:**
- Save
- Cancel
- Delete
- Assign
- Export
- Send

---

## 🚀 STEP BY STEP BUILD ORDER

1. **Phase 1:** Setup React + Tailwind, Folder structure, Theme config
2. **Phase 2:** Auth pages, Route protection
3. **Phase 3:** Role layouts, Dynamic sidebar
4. **Phase 4:** 4 Dashboards
5. **Phase 5:** Leads + Tables
6. **Phase 6:** Chat Module
7. **Phase 7:** Reports + Settings
8. **Phase 8:** Full responsive polish
