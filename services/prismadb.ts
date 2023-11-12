import { PrismaClient } from '@prisma/client'

let db: PrismaClient | undefined

if (process.env.NODE_ENV === "production") {
  db = new PrismaClient();
} else if (process.env.NODE_ENV === "development") {
  let globalWithPrisma = global as typeof globalThis & {
    db: PrismaClient;
  };
  if (!globalWithPrisma.db) {
    globalWithPrisma.db = new PrismaClient();
  }
  db = globalWithPrisma.db;
}

export { db };