# PRD – Multi Role WhatsApp Inspired CRM

**Product Requirements Document**
Version: 1.0
Frontend Stack: React.js + Tailwind CSS
Current Phase: UI / Frontend First
Roles: Super Admin, Admin, Manager, Counselor

---

# 1. Product Overview

## Product Name
Multi Role WhatsApp Inspired CRM

## Product Goal
Ek professional CRM platform banana jahan WhatsApp style chat system ke through leads, customers, students ya clients ko manage kiya ja sake. System role-based hoga jisme har user ko alag dashboard, alag permissions aur alag workflow milega.

## Main Objectives
* Multi-role access system
* WhatsApp style communication panel
* Lead management
* Team management
* Reports and analytics
* Fully responsive UI
* Scalable frontend architecture
* Backend ready structure

---

# 2. Target Users

## Primary Users
* Business Owners
* Sales Teams
* Admission Teams
* Consultants
* Support Teams

## User Roles
1. Super Admin
2. Admin
3. Manager
4. Counselor

---

# 3. Role Based Requirements

## 3.1 Super Admin
### Purpose
System ka highest authority user.

### Access
* View all users
* Create Admin accounts
* Global reports
* Billing management
* Settings control
* Monitor all chats
* View full analytics

### Sidebar Modules
* Dashboard
* Admin Management
* Managers
* Counselors
* Global Chats
* Reports
* Billing
* Settings

---

## 3.2 Admin
### Purpose
Branch ya department head.

### Access
* Team management
* Lead distribution
* Chat monitoring
* Reports
* Performance tracking

### Sidebar Modules
* Dashboard
* Team
* Leads
* Assign Leads
* Chats
* Reports
* Settings

---

## 3.3 Manager
### Purpose
Daily operations controller.

### Access
* Assigned team management
* Task management
* Pending lead monitoring
* Counselor performance

### Sidebar Modules
* Dashboard
* My Team
* Tasks
* Pending Leads
* Chat Monitor
* Performance

---

## 3.4 Counselor
### Purpose
End user who talks to customer/client/student.

### Access
* Assigned leads only
* My chats
* Follow-ups
* Status updates
* Notes
* Documents
* Profile settings

### Sidebar Modules
* Dashboard
* My Leads
* My Chats
* Follow-ups
* Documents
* Profile
* Settings

---

# 4. Core Modules

## 4.1 Authentication Module
**Features:**
* Login page
* Role based login redirect
* Forgot password UI
* Remember me
* Logout

---

## 4.2 Dashboard Module
Each role gets custom dashboard.

### Common Dashboard Widgets
* Stats cards
* Charts
* Activity feed
* Quick actions
* Recent tasks

---

## 4.3 Chat Module
WhatsApp inspired chat experience.

### Features
* Chat list
* Search chat
* Real-time message area (UI phase static)
* Send message box
* Emoji button
* File attach button
* Notes panel
* User info panel

---

## 4.4 Leads Module
### Features
* Lead list
* Lead details
* Search & filter
* Assign lead
* Update status
* Add notes
* Delete / archive

### Lead Statuses
* New
* Contacted
* Interested
* Follow-up
* Documents Pending
* Converted
* Closed

---

## 4.5 Team Management Module
### Features
* Add user
* Edit user
* Activate / deactivate
* Role assignment
* Team list
* Performance summary

---

## 4.6 Reports Module
### Features
* Date filters
* Conversion reports
* Lead reports
* Team performance
* Chat activity
* Export buttons

---

## 4.7 Settings Module
### Features
* Profile settings
* Password change
* Notification preferences
* Theme settings
* Company details

---

# 5. Functional Workflow

## Lead Flow
1. **Step 1:** Lead enters system
2. **Step 2:** Admin reviews lead
3. **Step 3:** Manager receives assignment
4. **Step 4:** Counselor gets lead
5. **Step 5:** Counselor chats with lead
6. **Step 6:** Status updated
7. **Step 7:** Reports generated

---

# 6. UI / UX Requirements

## Design Style
* Modern SaaS dashboard
* Clean spacing
* Rounded cards
* Soft shadows
* Premium icons
* Smooth transitions

## Responsive Requirements
* Desktop full layout
* Tablet collapsible sidebar
* Mobile drawer sidebar
* Mobile card tables
* Touch friendly buttons

---

# 7. Technical Requirements

## Frontend
* React.js
* Tailwind CSS
* React Router
* Reusable components

## Code Rules
* Clean folder structure
* Reusable UI blocks
* No duplicate components
* Role based configs
* Maintainable naming

---

# 8. Suggested File Structure
```text
src/
├── assets/
├── components/
│   ├── common/
│   ├── layout/
│   ├── chat/
│   ├── forms/
│   └── tables/
├── layouts/
│   ├── SuperAdminLayout.jsx
│   ├── AdminLayout.jsx
│   ├── ManagerLayout.jsx
│   └── CounselorLayout.jsx
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

# 9. Pages List

### Common
* Login
* Forgot Password
* Profile
* Settings

### Super Admin
* Dashboard
* Users
* Reports
* Billing

### Admin
* Dashboard
* Team
* Leads
* Reports

### Manager
* Dashboard
* Tasks
* Team
* Performance

### Counselor
* Dashboard
* My Leads
* My Chats
* Follow-ups

---

# 10. Non Functional Requirements
* Fast loading UI
* Responsive on all devices
* Easy navigation
* Professional visuals
* Scalable codebase
* Future backend integration ready

---

# 11. Future Scope
* Real-time chat integration
* WhatsApp API connection
* Notifications
* Voice / Video calls
* AI auto replies
* CRM automation
* Payment module
* Multi language support

---

# 12. Success Criteria
* All roles working separately
* Responsive layouts complete
* Professional UI quality
* Clean code architecture
* Easy backend integration
* Smooth user experience

---

# 13. Final Build Roadmap

1. **Phase 1 – Setup & Theme**
2. **Phase 2 – Authentication**
3. **Phase 3 – Role Layouts**
4. **Phase 4 – Dashboards**
5. **Phase 6 – Chat Module**
6. **Phase 7 – Reports**
7. **Phase 8 – Settings**
8. **Phase 9 – Responsive Polish**
9. **Phase 10 – Backend Integration**
