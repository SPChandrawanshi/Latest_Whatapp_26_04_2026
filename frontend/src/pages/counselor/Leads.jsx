import React from "react";
import { DataTable } from "../../components/tables/DataTable";

export default function Leads() {
  return (
    <DataTable 
      title="My Leads" 
      columns={[
        { header: "Name", key: "name" },
        { header: "Phone", key: "phone" },
        { header: "Status", key: "status" },
        { header: "Last Action", key: "lastAction" },
      ]} 
      data={[
        { name: "Rahul Sharma", phone: "+91 9876543210", status: "Negotiation", lastAction: "Call (2h ago)" },
        { name: "Ananya Iyer", phone: "+91 8765432109", status: "Follow up", lastAction: "WhatsApp (5h ago)" },
        { name: "Vikram Singh", phone: "+91 7654321098", status: "Closed", lastAction: "Email (1d ago)" },
        { name: "Priya Patel", phone: "+91 6543210987", status: "New", lastAction: "N/A" },
        { name: "Kunal Gupta", phone: "+91 9123456789", status: "Warm", lastAction: "WhatsApp (10m ago)" },
      ]} 
    />
  );
}
