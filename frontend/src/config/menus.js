import { 
  LayoutDashboard, 
  Users, 
  UserSquare2, 
  MessageSquare, 
  PieChart, 
  Settings, 
  ShieldAlert,
  Briefcase,
  ListTodo,
  FileText,
  CreditCard
} from "lucide-react";

export const menus = {
  superadmin: [
    { title: "Dashboard", icon: LayoutDashboard, path: "/superadmin/dashboard" },
    { title: "Admins", icon: ShieldAlert, path: "/superadmin/admins" },
    { title: "Managers", icon: Briefcase, path: "/superadmin/managers" },
    { title: "Counselors", icon: UserSquare2, path: "/superadmin/counselors" },
    { title: "Global Chats", icon: MessageSquare, path: "/superadmin/chats" },
    { title: "Reports", icon: PieChart, path: "/superadmin/reports" },
    { title: "Billing", icon: CreditCard, path: "/superadmin/billing" },
    { title: "Settings", icon: Settings, path: "/superadmin/settings" },
  ],
  admin: [
    { title: "Dashboard", icon: LayoutDashboard, path: "/admin/dashboard" },
    { title: "Team", icon: Users, path: "/admin/team" },
    { title: "Leads", icon: UserSquare2, path: "/admin/leads" },
    { title: "Assign Leads", icon: ListTodo, path: "/admin/assign" },
    { title: "Chats", icon: MessageSquare, path: "/admin/chats" },
    { title: "Reports", icon: PieChart, path: "/admin/reports" },
    { title: "Settings", icon: Settings, path: "/admin/settings" },
  ],
  manager: [
    { title: "Dashboard", icon: LayoutDashboard, path: "/manager/dashboard" },
    { title: "My Team", icon: Users, path: "/manager/team" },
    { title: "Tasks", icon: ListTodo, path: "/manager/tasks" },
    { title: "Pending Leads", icon: UserSquare2, path: "/manager/pending" },
    { title: "Chat Monitor", icon: MessageSquare, path: "/manager/chats" },
    { title: "Performance", icon: PieChart, path: "/manager/performance" },
  ],
  counselor: [
    { title: "Dashboard", icon: LayoutDashboard, path: "/counselor/dashboard" },
    { title: "My Leads", icon: UserSquare2, path: "/counselor/leads" },
    { title: "My Chats", icon: MessageSquare, path: "/counselor/chats" },
    { title: "Follow-ups", icon: ListTodo, path: "/counselor/followups" },
    { title: "Documents", icon: FileText, path: "/counselor/documents" },
    { title: "Settings", icon: Settings, path: "/counselor/settings" },
  ],
};
