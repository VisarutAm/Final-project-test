// import { useEffect, useState } from "react";
import express from "express";
import questionsRouter from "./routes/test.mjs";
import cors from "cors";
import authRouter from "./routes/auth.mjs";

const app = express();
const port = 4000;

app.use(
  cors({
    origin: "http://localhost:5173", // Or use '*' to allow all origins
  })
);

app.use(express.json());
app.use("/auth", authRouter);

app.use("/questions", questionsRouter);

app.get("/test", (req, res) => {
  return res.json("Server API is working 🚀");
});

app.listen(port, () => {
  console.log(`Server is running at ${port}`);
});
