import { PrismaClient } from "@/prisma/generated/client";

let prisma: PrismaClient;

    prisma = new PrismaClient();


export const db = prisma;