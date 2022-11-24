import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

await prisma.post.create({
  data: {
    title: "Hello World",
  },
});

console.log(await prisma.post.findMany());
