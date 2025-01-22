import express, { Request, Response } from "express";
import { ApolloServer } from "@apollo/server";

const app = express();
const PORT = 3000;

// Middleware for parsing JSON
app.use(express.json());

// Sample route
app.get("/", (req: Request, res: Response) => {
  res.send("Hello, TypeScript with Node.js!");
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running http://localhost:${PORT}`);
});
