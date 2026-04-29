const { PrismaClient } = require('@prisma/client');
const bcrypt = require('bcryptjs');

const prisma = new PrismaClient();

async function main() {
  const password = await bcrypt.hash('Password@123', 10);

  // 1. Create Users
  const users = [
    { fullName: 'Super Admin', email: 'superadmin@crm.com', password, role: 'SUPER_ADMIN', phone: '1111111111' },
    { fullName: 'Admin User', email: 'admin@crm.com', password, role: 'ADMIN', phone: '2222222222' },
    { fullName: 'Manager User', email: 'manager@crm.com', password, role: 'MANAGER', phone: '3333333333' },
    { fullName: 'Counselor User', email: 'counselor@crm.com', password, role: 'COUNSELOR', phone: '4444444444' },
  ];

  for (const u of users) {
    await prisma.user.upsert({
      where: { email: u.email },
      update: {},
      create: u,
    });
  }

  // Get Counselor
  const counselor = await prisma.user.findUnique({ where: { email: 'counselor@crm.com' } });

  // 2. Create Leads
  const leads = [
    { name: 'Ramesh Kumar', phone: '9876543210', email: 'ramesh@example.com', status: 'New', source: 'WhatsApp', assignedTo: counselor.id },
    { name: 'Suresh Singh', phone: '8765432109', email: 'suresh@example.com', status: 'Contacted', source: 'Facebook', assignedTo: counselor.id },
    { name: 'Anita Sharma', phone: '7654321098', email: 'anita@example.com', status: 'Interested', source: 'Instagram', assignedTo: counselor.id },
  ];

  for (const l of leads) {
    const existing = await prisma.lead.findFirst({ where: { phone: l.phone } });
    if (!existing) {
      await prisma.lead.create({ data: l });
    }
  }

  // 3. Create Chats and Messages
  const ramesh = await prisma.lead.findFirst({ where: { phone: '9876543210' } });
  if (ramesh) {
    const existingChat = await prisma.chat.findFirst({ where: { leadId: ramesh.id } });
    if (!existingChat) {
      const chat = await prisma.chat.create({
        data: {
          leadId: ramesh.id,
          platform: 'WhatsApp',
          messages: {
            create: [
              { sender: 'customer', content: 'Hi, I need details about your product.', isRead: true },
              { sender: 'agent', content: 'Hello Ramesh, sure I will share the details.', isRead: true },
            ]
          }
        }
      });
    }
  }

  console.log('Database seeded successfully with Users, Leads, and Chats.');
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
