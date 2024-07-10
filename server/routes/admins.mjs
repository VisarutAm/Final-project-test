import { Router } from "express";

const adminRouter = Router();

adminRouter.get("/", (req, res) => {
  res.json({ message: "ยินดีต้อนรับสู่เข้าสู่ระบบแอดมิน" });
});

adminRouter.get("/getdata", (req, res) => {
  // ใส่โค้ดที่ใช้ดึงข้อมูลที่ต้องการ
  res.json({ message: "นี่คือข้อมูลสำหรับแอดมิน" });
});

export default adminRouter;
