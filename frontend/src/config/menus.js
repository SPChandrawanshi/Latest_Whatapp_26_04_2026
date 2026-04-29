import { 
  LayoutDashboard, 
  Users, 
  MessageSquare, 
  Zap, 
  Settings, 
  BarChart3, 
  FileText, 
  UserSquare2,
  Calendar,
  ShieldCheck,
  Globe,
  Camera,
  Play,
  Smartphone,
  CreditCard,
  Inbox,
  Share2,
  Image as ImageIcon
} from "lucide-react";
import { FaWhatsapp, FaFacebook, FaInstagram, FaYoutube } from "react-icons/fa";

export const menus = {
  superadmin: [
    { title: "Global Dashboard", icon: LayoutDashboard, path: "/superadmin/dashboard" },
    { title: "Manage Admins", icon: ShieldCheck, path: "/superadmin/admins" },
    { title: "Manage Managers", icon: Users, path: "/superadmin/managers" },
    { title: "Manage Counselors", icon: UserSquare2, path: "/superadmin/counselors" },
    { title: "Social Subscriptions", icon: CreditCard, path: "/superadmin/billing" },
    { title: "Enterprise Reports", icon: BarChart3, path: "/superadmin/reports" },
    { title: "Settings", icon: Settings, path: "/superadmin/settings" },
  ],
  admin: [
    { title: "Command Center", icon: LayoutDashboard, path: "/admin/dashboard" },
    { title: "Verified Clients", icon: Users, path: "/admin/customers" },
    { title: "Verify Requests", icon: ShieldCheck, path: "/admin/assign" },
    { title: "Global Inbox", icon: Inbox, path: "/admin/chats" },
    { 
        title: "Social Platforms", 
        icon: Share2, 
        path: "/admin/platforms",
        children: [
            { title: "WhatsApp Business", icon: FaWhatsapp, path: "/admin/whatsapp" },
            { title: "Facebook Pages", icon: FaFacebook, path: "/admin/facebook" },
            { title: "Instagram Growth", icon: FaInstagram, path: "/admin/instagram" },
            { title: "YouTube Analytics", icon: FaYoutube, path: "/admin/youtube" },
        ]
    },
    { title: "Subscription Plans", icon: CreditCard, path: "/admin/pricing" },
    { title: "Performance Reports", icon: BarChart3, path: "/admin/reports" },
  ],
  manager: [
    { title: "Team Dashboard", icon: LayoutDashboard, path: "/manager/dashboard" },
    { title: "Staff Clients", icon: Users, path: "/manager/customers" },
    { title: "Unified Inbox", icon: Inbox, path: "/manager/chats" },
    { title: "Team Reports", icon: BarChart3, path: "/manager/reports" },
    { title: "Preferences", icon: Settings, path: "/manager/settings" },
  ],
  counselor: [
    { title: "My Workspace", icon: LayoutDashboard, path: "/counselor/dashboard" },
    { title: "My Clients", icon: UserSquare2, path: "/counselor/customers" },
    { title: "Unified Inbox", icon: MessageSquare, path: "/counselor/chats" },
    { title: "Content Scheduler", icon: Calendar, path: "/counselor/followups" },
    { title: "Media Vault", icon: ImageIcon, path: "/counselor/documents" },
    { title: "Social Connect", icon: Share2, path: "/counselor/settings" },
  ],
};
