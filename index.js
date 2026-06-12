import express from "express";
import { prisma } from "./db.js";

const app = express();

app.use(express.json());

app.get("/", async (req, res) => {
  const users = await prisma.user.findMany();
  res.json(users);
});

app.post("/users", async (req, res) => {
  const { name, email } = req.body;
  const user = await prisma.user.create({
    data: {
      name,
      email,
    },
  });

  res.json(user);
});

const PORT = 8000;

app.listen(PORT, () => {
  console.log("Server is running on port : ", PORT);
});
