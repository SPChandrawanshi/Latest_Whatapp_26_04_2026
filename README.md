# Multi-Role WhatsApp Inspired CRM

A professional, full-stack CRM system built with React, Node.js, Express, and MySQL (Prisma ORM).

## Features
- **Multi-Role Support**: Super Admin, Admin, Manager, Counselor.
- **Unified Inbox**: Real-time WhatsApp/Social media style chat interface.
- **Lead Management**: Complete CRUD, assignment, and status tracking.
- **Automated Follow-ups**: Scheduler for upcoming client interactions.
- **Dashboards**: Role-specific live data visualizations and KPIs.
- **Reports**: Conversion analytics and performance tracking.

## Tech Stack
- **Frontend**: React 19, Vite, Tailwind CSS, Lucide Icons, Framer Motion.
- **Backend**: Node.js, Express, Prisma ORM, JWT Auth, Bcrypt.
- **Database**: MySQL.

## Getting Started

### 1. Prerequisites
- Node.js (v18+)
- MySQL Server

### 2. Backend Setup
```bash
cd backend
npm install
# Configure .env file (use .env.example as template)
npx prisma migrate dev
npm run dev
```

### 3. Frontend Setup
```bash
cd frontend
npm install
# Configure .env file
npm run dev
```

## Admin Credentials (Initial Seed)
- **Super Admin**: `superadmin@crm.com` / `admin123`
- **Admin**: `admin@crm.com` / `admin123`

## Deployment
- **Backend**: Deploy to Render, Railway, or VPS. Ensure `DATABASE_URL` and `JWT_SECRET` are set.
- **Frontend**: Build using `npm run build` and deploy to Vercel or Netlify.

---
Created by Antigravity AI.
