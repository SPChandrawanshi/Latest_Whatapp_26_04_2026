# PROJECT RULES FILE

## Multi Role WhatsApp Inspired CRM
Version: 1.0

---

# 1. Core Project Rules

## Rule 1: Frontend First Development
Is phase me sirf UI / Frontend banega. Backend integration baad me hoga.

## Rule 2: Technology Stack Fixed
* React.js
* Tailwind CSS
* React Router DOM
* Reusable Components

## Rule 3: Clean Code Only
* Readable code
* Proper naming
* Organized folders
* No messy structure

## Rule 4: Fully Responsive Required
Har page mobile, tablet aur desktop me proper kaam kare.

## Rule 5: Professional UI Only
Design premium aur modern hona chahiye. Basic ya outdated look allowed nahi hai.

---

# 2. Role Based Rules

## Fixed Roles
1. Super Admin
2. Admin
3. Manager
4. Counselor

## Rule: Role Separation
Har role ka:
* Different sidebar
* Different dashboard
* Different pages
* Different permissions
* Different data visibility

## Rule: No Cross Access
Lower role higher role ka panel access nahi karega.

---

# 3. Sidebar Rules

* **Rule 1:** Sidebar role based dynamic hoga.
* **Rule 2:** Har role ka menu alag hoga.
* **Rule 3:** Desktop me fixed sidebar.
* **Rule 4:** Tablet me collapsible sidebar.
* **Rule 5:** Mobile me drawer sidebar.

---

# 4. Dashboard Rules

* **Rule 1:** Har role ka custom dashboard.
* **Rule 2:** Dashboard me cards, charts, quick actions honge.
* **Rule 3:** Stats cards responsive honge.
* **Rule 4:** Widgets reusable honge.

---

# 5. UI Component Rules

### Buttons
Har button me:
* Hover state
* Active state
* Disabled state
* Loading state

### Forms
* Proper labels
* Validation ready structure
* Error message area
* Clean spacing

### Cards
* Rounded corners
* Shadow
* Padding consistent

### Tables
Desktop me table, mobile me cards.

---

# 6. Responsive Rules

## Mobile First Approach
Design mobile ko dhyan me rakh kar banana hai.

## Breakpoints
* Mobile: < 768px
* Tablet: 768px to 1024px
* Desktop: > 1024px

## Mobile Rules
* Single column layout
* Drawer menu
* Full width buttons
* Compact topbar

---

# 7. File Structure Rules

## Folder Discipline
Files random jagah nahi banenge.

## Fixed Structure
```text
src/
├── assets/
├── components/
├── layouts/
├── pages/
├── routes/
├── hooks/
├── context/
├── utils/
├── data/
```

## Naming Rules
* PascalCase for components
* camelCase for functions
* Clear file names only

---

# 8. Reusability Rules

### Must Reuse Components
* Button
* Input
* Modal
* Table
* Card
* Sidebar
* Topbar

## No Duplicate UI
Same design ko baar baar copy code se mat banao.

---

# 9. Page Rules

## Every Page Must Have
* Title
* Action buttons
* Main content area
* Empty state if no data
* Loading state ready structure

## Navigation Rule
Page switching smooth aur clear hona chahiye.

---

# 10. Chat Module Rules

## Chat UI Must Include
* Chat list
* Search
* Conversation area
* Message input
* Send button
* User details panel

## Mobile Rule
Chat list aur chat screen alag views me open honge.

---

# 11. Lead Module Rules

## Features
* Search
* Filter
* Status update
* Assign
* View details

## Statuses Fixed
* New
* Contacted
* Interested
* Follow-up
* Documents Pending
* Converted
* Closed

---

# 12. Design Rules

## Visual Standard
* Modern SaaS style
* Soft colors
* Premium spacing
* Icons required
* Smooth transitions

## Avoid
* Cluttered UI
* Tiny buttons
* Uneven spacing
* Hard colors
* Old style tables

---

# 13. Performance Rules
* Fast rendering
* Optimized components
* No unnecessary rerenders
* Lightweight UI structure

---

# 14. Security Ready Rules (Frontend)
* Protected routes structure
* Role based route guards
* Logout flow ready
* Token integration ready structure

---

# 15. Future Backend Rules
Frontend structure backend ready hona chahiye:
* API folder ready
* Services ready
* State management ready
* Dynamic data mapping ready

---

# 16. Testing Rules
Before final page complete mark:
* Desktop checked
* Tablet checked
* Mobile checked
* Buttons checked
* Navigation checked
* Layout checked

---

# 17. Build Order Rules
1. Phase 1: Setup
2. Phase 2: Auth
3. Phase 3: Layouts
4. Phase 4: Dashboards
5. Phase 5: Leads
6. Phase 6: Chat
7. Phase 7: Reports
8. Phase 8: Settings
9. Phase 9: Responsive Polish

---

# 18. Final Quality Rules
Project tabhi complete mana jayega jab:
* All 4 roles separate working UI
* Fully responsive
* Clean folder structure
* Premium design
* Reusable components
* Smooth UX
* Backend ready architecture
