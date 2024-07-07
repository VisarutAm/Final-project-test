import { Router } from "express";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import supabase from "../utils/db.mjs";

const authRouter = Router();

authRouter.post("/register", async (req, res) => {
  const { full_name, tel_num, email, password } = req.body;

  const hashedPassword = await bcrypt.hash(password, 10);

  const { data, error } = await supabase
    .from("users")
    .insert([{ full_name, tel_num, email, password: hashedPassword }]);

  if (error) {
    return res.status(400).json({ message: error.message });
  }

  return res.json({
    message: "User has been created successfully",
    data,
  });
});

authRouter.post("/login", async (req, res) => {
  const { email, password } = req.body;

  const { data: user, error } = await supabase
    .from("users")
    .select("*")
    .eq("email", email)
    .single();

  if (error || !user) {
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
    { id: user.id, fullname: user.fullname, tel: user.tel, email: user.email },
    process.env.SECRET_KEY,
    {
      expiresIn: "1h",
    }
  );

  return res.json({
    message: "Login successful",
    token,
  });
});

export default authRouter;
