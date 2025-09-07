import { env } from "@/env/env";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient({
  datasources: {
    db: {
      url: env.DATABASE_URL, // use validated URL
    },
  },
});

export default prisma;
