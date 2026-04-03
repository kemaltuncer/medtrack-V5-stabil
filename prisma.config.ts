import { defineConfig } from '@prisma/config'

export default defineConfig({
  earlyAccess: true,
  // Obje değil, direkt yolun kendisini string olarak veriyoruz:
  schema: 'prisma/schema.prisma',
  url: process.env.DATABASE_URL,
})
