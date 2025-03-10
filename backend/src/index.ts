import { config } from "dotenv";
config();

import express from "express";
import router from "./routes";
import OpenAI from "openai";
import { PrismaClient } from '@prisma/client';


const port = process.env.LISTEN_PORT || 3000;
const app = express();

export const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

export const prisma = new PrismaClient();

app.use(express.json());
app.use(router);

app.listen(port, () => {
  prisma.$connect().then(() => {
    console.log("Connected to database");
  });
  console.log(
    `Server is running on port ${port}`
  );
});
