# PROJECT ARCHITECTURE: Multi Role WhatsApp Inspired CRM
## Professional Architecture & Developer Guide (Bilingual: English & Hindi)

---

# 1. Architecture Overview | आर्किटेक्चर का विवरण

**English:**
This project is built on a **Modular Multi-Role Architecture**. It ensures that each user role (Super Admin, Admin, Manager, Counselor) has a dedicated UI flow, secure routing, and personalized data views while sharing a core set of reusable components.

**Hindi:**
यह प्रोजेक्ट एक **मॉड्यूलर मल्टी-रोल आर्किटेक्चर** पर आधारित है। इसका मतलब है कि हर यूजर (Super Admin, Admin, Manager, Counselor) के लिए अलग UI, सुरक्षित रूटिंग और अलग डेटा व्यू होगा, जबकि सभी के लिए कॉमन कॉम्पोनेंट्स का इस्तेमाल किया जाएगा।

---

# 2. High-Level Flow | सिस्टम का बहाव

**English:**
User Login → Role Detection → Layout Mapping → Sidebar Loading → Page Navigation → Module Actions → Data Management.

**Hindi:**
यूजर लॉगिन → रोल पहचानना → लेआउट सेट करना → साइडबार लोड होना → पेज नेविगेशन → मॉड्यूल एक्शन्स → डेटा मैनेजमेंट।

---

# 3. Technical Stack | टेक्नोलॉजी स्टैक

*   **Frontend:** React.js (Vite)
*   **Styling:** Tailwind CSS (Modern & Responsive)
*   **Routing:** React Router DOM (v6+)
*   **Icons:** Lucide React / React Icons
*   **State Management:** Context API / Zustand (Phase-wise)
*   **Animations:** Framer Motion (For premium feel)

---

# 4. Folder Structure | फोल्डर का ढांचा

```text
src/
├── assets/         # Images, Logos, Global CSS (इमेज और लोगो)
├── components/     # Reusable UI Blocks (कॉमन कॉम्पोनेंट्स)
│   ├── common/     # Buttons, Inputs, Modals
│   ├── layout/     # Sidebar, Topbar
│   ├── chat/       # Chat bubbles, Input area
│   ├── cards/      # Dashboard widgets
│   ├── forms/      # User/Lead forms
│   └── tables/     # Data display
├── layouts/        # Role-based wrappers (रोल लेआउट्स)
│   ├── SuperAdminLayout.jsx
│   ├── AdminLayout.jsx
│   ├── ManagerLayout.jsx
│   └── CounselorLayout.jsx
├── pages/          # Screens for each role (एक्चुअल पेजेस)
│   ├── auth/       # Login, Forgot Password
│   ├── superadmin/
│   ├── admin/
│   ├── manager/
│   └── counselor/
├── routes/         # Routing logic & Protection (रूटिंग और सुरक्षा)
├── config/         # Constant menus & Roles (कॉन्फ़िगरेशन)
├── context/        # Global States (ग्लोबल स्टेट)
├── hooks/          # Custom logical hooks (कस्टम हुक्स)
├── utils/          # Helper functions (हेल्पर फंक्शन्स)
├── services/       # Future API calls (भविष्य के API कॉल्स)
├── data/           # Mock JSON for UI phase (डमी डेटा)
├── App.jsx         # Main App logic
└── main.jsx        # Entry point
```

---

# 5. Component Responsibilities | कॉम्पोनेंट की जिम्मेदारियां

### 5.1 Common Components | सामान्य कॉम्पोनेंट
*   **Button.jsx:** Reusable states (Hover, Loading, Disabled).
*   **Input.jsx/Select.jsx:** Standardized form elements with labels/errors.
*   **Modal.jsx:** Global pop-up system for confirmations/forms.

### 5.2 Layout Components | लेआउट कॉम्पोनेंट
*   **Sidebar.jsx:** Dynamic list based on user role from `config/`.
*   **Topbar.jsx:** Shows search, notifications, and profile menus.

### 5.3 Chat Module | चैट मॉड्यूल
*   **ChatList.jsx:** WhatsApp-style list on the left.
*   **ChatWindow.jsx:** Middle area for active conversation messages.
*   **UserDetailsPanel.jsx:** Right sidebar for lead info and notes.

---

# 6. Routing & Protection | रूटिंग और सुरक्षा

**English:**
*   **ProtectedRoute.jsx:** Checks if the user is authenticated.
*   **RoleRoute.jsx:** Checks if the authenticated user has permission for a specific route. (Prevents a Counselor from accessing Super Admin pages).

**Hindi:**
*   **ProtectedRoute.jsx:** यह चेक करता है कि यूजर लॉगिन है या नहीं।
*   **RoleRoute.jsx:** यह चेक करता है कि लॉगिन यूजर के पास उस पेज को देखने की परमिशन है या नहीं। (जैसे Counselor को Admin पेज देखने से रोकता है)।

---

# 7. Configuration Strategy | कॉन्फ़िगरेशन स्ट्रेटेजी

**English:**
We store menus and role constants in `src/config/`. This makes it very easy to add a new role or update the sidebar icons without touching the logic.

**Hindi:**
हम मेनू और रोल के कांस्टेंट्स को `src/config/` में सेव करते हैं। इससे नया रोल जोड़ना या आइकन बदलना बहुत आसान हो जाता है, बिना कोड को ज्यादा छेड़े।

---

# 8. Responsive Architecture | रिस्पॉन्सिव आर्किटेक्चर

| Device | Sidebar Behavior | Content Layout |
| :--- | :--- | :--- |
| **Desktop (>1024px)** | Fixed Sidebar | 3-Column Chat / Grid Dashboard |
| **Tablet (768px-1024px)** | Collapsible Sidebar | Full Width Content |
| **Mobile (<768px)** | Drawer (Hamburger Menu) | Stacked Cards / Separate Chat Views |

---

# 9. Build Order | बनाने का क्रम (Step-by-Step)

1.  **Project Init:** setup React, Tailwind, and Folder structure.
2.  **Auth UI:** Create Login page & Route Guard logic.
3.  **Role Layouts:** Design Sidebars and Topbars for all 4 roles.
4.  **Dashboards:** Build widget-based screens for each role.
5.  **Leads & Tables:** Implement data tables and forms for management.
6.  **Chat Module:** Build the core WhatsApp-style communication screen.
7.  **Polish:** Smooth transitions, mobile drawer, and final UI checks.

---

# 10. Developer Best Practices | डेवलपर के लिए नियम

*   **DRY (Don't Repeat Yourself):** Reuse common buttons and cards.
*   **Clean Naming:** `UserForm.jsx` is better than `Form1.jsx`.
*   **Mobile-First:** Always check the UI on smaller screens first.
*   **Future Ready:** Write code that expects an API but works with Dummy Data for now.

---

**Architecture Status:** ✅ Approved & Ready for Implementation.
**अगला कदम:** प्रोजेक्ट सेटअप और फोल्डर स्ट्रक्चर शुरू करना।
