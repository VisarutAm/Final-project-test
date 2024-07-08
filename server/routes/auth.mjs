import { Router } from "express";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import supabase from "../utils/db.mjs";

const authRouter = Router();

const getRandomBackgroundColor = () => {
  const colors = [
    "007bff", // Blue
    "28a745", // Green
    "dc3545", // Red
    "ffc107", // Yellow
    "17a2b8", // Teal
    "6610f2", // Purple
    "fd7e14", // Orange
    "20c997", // Cyan
    "e83e8c", // Pink
    "6f42c1", // Indigo
  ];
  return colors[Math.floor(Math.random() * colors.length)];
};

const generateAvatarUrl = (firstname, lastname) => {
  const initials = `${firstname[0]}${lastname[0]}`;
  const backgroundColor = getRandomBackgroundColor();
  return `https://ui-avatars.com/api/?name=${encodeURIComponent(
    initials
  )}&background=${backgroundColor}&color=ffffff`;
};

const validateFields = (firstname, lastname, tel_num, email, password) => {
  let errors = {};

  if (!firstname) errors.firstname = "กรุณากรอกชื่อ";
  if (!lastname) errors.lastname = "กรุณากรอกนามสกุล";

  const telPattern = /^[0-9]{10}$/;
  if (!tel_num || !telPattern.test(tel_num))
    errors.tel_num = "กรุณากรอกเบอร์โทรศัพท์ให้ถูกต้อง (10 หลัก)";

  const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
  if (!email || !emailPattern.test(email))
    errors.email = "กรุณากรอกอีเมลให้ถูกต้อง";

  if (!password) errors.password = "กรุณากรอกรหัสผ่าน";

  return errors;
};

authRouter.post("/register", async (req, res) => {
  const { firstname, lastname, tel_num, email, password } = req.body;

  const errors = validateFields(firstname, lastname, tel_num, email, password);
  if (Object.keys(errors).length > 0) {
    return res.status(400).json({ errors });
  }

  try {
    const hashedPassword = await bcrypt.hash(password, 10);
    const profileImage = generateAvatarUrl(firstname, lastname);

    const { error } = await supabase.from("users").insert([
      {
        firstname,
        lastname,
        tel_num,
        email,
        password: hashedPassword,
        profile_image: profileImage,
      },
    ]);

    if (error) {
      return res.status(400).json({ message: error.message });
    }

    return res.json({
      message: "User has been created successfully",
    });
  } catch (err) {
    return res.status(500).json({ message: "Internal server error" });
  }
});

authRouter.post("/login", async (req, res) => {
  const { email, password } = req.body;

  try {
    const { data: user } = await supabase
      .from("users")
      .select("*")
      .eq("email", email)
      .single();

    if (!user) {
      return res.status(404).json({
        message: "User not found",
      });
    }

    const isValidPassword = await bcrypt.compare(password, user.password);

    if (!isValidPassword) {
      return res.status(400).json({
        message: "Invalid password",
      });
    }

    const token = jwt.sign(
      {
        id: user.id,
        firstname: user.firstname,
        lastname: user.lastname,
        email: user.email,
      },
      process.env.SECRET_KEY,
      {
        expiresIn: "1h",
      }
    );

    return res.json({
      message: "Login successful",
      token,
    });
  } catch (err) {
    return res.status(500).json({ message: "Internal server error" });
  }
});

export default authRouter;
