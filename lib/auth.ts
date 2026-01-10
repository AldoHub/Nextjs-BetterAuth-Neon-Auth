import { betterAuth } from "better-auth";
import { prismaAdapter } from "better-auth/adapters/prisma";
import { nextCookies } from "better-auth/next-js";

import { PrismaClient } from "./generated/prisma/client";
const prisma = new PrismaClient();

export const auth = betterAuth({
 database: prismaAdapter(prisma, {provider: "postgresql"}),
 emailAndPassword: {
  enabled: true,
  //emailVerificationRequired: true,
 },
 socialProviders: {
    /*
  google: {
    enabled: true,
    clientId: process.env.GOOGLE_CLIENT_ID,
    clientSecret: process.env.GOOGLE_CLIENT_SECRET,
  },
  github: {
    enabled: true,
    clientId: process.env.GITHUB_CLIENT_ID,
    clientSecret: process.env.GITHUB_CLIENT_SECRET,
  },
 */
 },
 plugins: [nextCookies()]
});