// prisma.config.ts
import "dotenv/config"; // <- Garanta que essa linha seja a PRIMEIRA do arquivo
import { defineConfig } from "@prisma/config";

export default defineConfig({
  schema: "prisma/schema.prisma",
  migrations: {
    path: "prisma/migrations",
  },
  datasource: {
    // Usar o process.env direto garante que o valor injetado pelo dotenv seja lido
    url: process.env.DATABASE_URL, 
  },
});