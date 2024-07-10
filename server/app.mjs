import express from "express";
import servicesRouter from "./routes/services.mjs";
import cors from "cors";
import authRouter from "./controllers/authController.mjs";
import {
  authenticateToken,
  authorizeAdmin,
} from "./middlewares/authVerify.mjs";

const app = express();
const port = 4000;

app.use(
  cors({
    origin: "http://localhost:5173",
    origin: "*",
  })
);

app.use(express.json());

app.use("/auth", authRouter);

app.use("/auth/welcome", authenticateToken, (req, res) => {
  res.json({
    message: `ยินดีต้อนรับเข้าสู่ระบบ, ${req.user.firstname} ${req.user.lastname}`,
  });
});

app.use("/admin", authenticateToken, authorizeAdmin, (req, res) => {
  res.json({ message: "ยินดีต้อนรับสู่เข้าสู่ระบบแอดมิน" });
});

app.use("/", servicesRouter);

app.get("/test", (req, res) => {
  return res.json("Server API is working 🚀");
});

app.listen(port, () => {
  console.log(`Server is running at ${port}`);
});
