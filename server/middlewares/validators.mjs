import supabase from "../utils/db.mjs";
import bcrypt from "bcrypt";

// ฟังก์ชันตรวจสอบรูปแบบอีเมล
const isValidEmail = (email) => {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
};

// ฟังก์ชันตรวจสอบรูปแบบหมายเลขโทรศัพท์ (ประเทศไทย)
const isValidPhoneNumber = (tel_num) => {
  const phoneRegex = /^[0-9]{10}$/;
  return phoneRegex.test(tel_num);
};

// ฟังก์ชันตรวจสอบความยาวรหัสผ่าน
const isValidPassword = (password) => {
  return password.length >= 6;
};

// ตรวจสอบความถูกต้องของข้อมูลในการลงทะเบียน
export const validateRegister = async (req, res, next) => {
  const { firstname, lastname, email, password, tel_num } = req.body;
  const errors = [];

  if (!firstname) {
    errors.push({ message: "กรุณากรอกชื่อ" });
  }
  if (!lastname) {
    errors.push({ message: "กรุณากรอกนามสกุล" });
  }
  if (!tel_num || !isValidPhoneNumber(tel_num)) {
    errors.push({ message: "กรุณากรอกหมายเลขโทรศัพท์ (10 หลัก)" });
  }
  if (!email) {
    errors.push({ message: "กรุณากรอกกรอกอีเมล" });
  }
  if (!isValidEmail(email)) {
    errors.push({ message: "กรุณากรอกกรอกอีเมลให้ถูกต้อง" });
  }
  if (!password) {
    errors.push({ message: "กรุณากรอกรหัสผ่าน" });
  }
  if (password && !isValidPassword(password)) {
    errors.push({ message: "รหัสผ่านต้องมีอย่างน้อย 6 ตัวอักษร" });
  }

  if (errors.length > 0) {
    return res.status(400).json({ errors });
  }

  // ตรวจสอบว่าอีเมลมีอยู่ในระบบหรือไม่
  const { data: existingUser, error } = await supabase
    .from("users")
    .select("*")
    .eq("email", email)
    .single();

  if (existingUser) {
    return res.status(400).json({ error: "อีเมลนี้มีผู้ใช้งานอยู่แล้ว" });
  }

  next();
};

// ตรวจสอบความถูกต้องของข้อมูลในการเข้าสู่ระบบ
export const validateLogin = async (req, res, next) => {
  const { email, password } = req.body;
  const errors = [];

  if (!email) {
    errors.push({ message: "กรุณากรอกกรอกอีเมล" });
  }
  if (email && !isValidEmail(email)) {
    errors.push({ message: "กรุณากรอกกรอกอีเมลให้ถูกต้อง" });
  }
  if (!password) {
    errors.push({ message: "กรุณากรอกรหัสผ่าน" });
  }

  if (errors.length > 0) {
    return res.status(400).json({ errors });
  }

  // ตรวจสอบว่าอีเมลมีอยู่ในระบบหรือไม่
  const { data: user, error } = await supabase
    .from("users")
    .select("*")
    .eq("email", email)
    .single();
  if (error || !user) {
    return res.status(404).json({ error: "ไม่พบผู้ใช้งานในระบบ" });
  }

  // ตรวจสอบว่ารหัสผ่านถูกต้องหรือไม่
  const isPasswordValid = await bcrypt.compare(password, user.password);

  if (!isPasswordValid) {
    return res.status(400).json({ error: "รหัสผ่านผิด" });
  }

  req.user = user; // ส่งข้อมูลผู้ใช้ไปยัง middleware ถัดไป
  next();
};
