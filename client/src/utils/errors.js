import { validateRegister, validateLogin } from "./validators";

// ฟังก์ชันตรวจสอบข้อผิดพลาดในการลงทะเบียน
export const checkRegisterErrors = (formData) => {
  const errors = validateRegister(formData);
  return errors;
};

// ฟังก์ชันตรวจสอบข้อผิดพลาดในการเข้าสู่ระบบ
export const checkLoginErrors = (formData) => {
  const errors = validateLogin(formData);
  return errors;
};

// ฟังก์ชันอัพเดท state ของข้อผิดพลาด
export const updateErrors = (field, value, errors) => {
  let newErrors = { ...errors };

  switch (field) {
    case "firstname":
      if (!value) {
        newErrors.firstname = "กรุณากรอกชื่อ";
      } else {
        delete newErrors.firstname;
      }
      break;
    case "lastname":
      if (!value) {
        newErrors.lastname = "กรุณากรอกนามสกุล";
      } else {
        delete newErrors.lastname;
      }
      break;
    case "tel":
      if (!value) {
        newErrors.tel_num = "กรุณากรอกหมายเลขโทรศัพท์";
      } else if (!/^[0-9]{10}$/.test(value)) {
        newErrors.tel_num = "กรุณากรอกหมายเลขโทรศัพท์ (10 หลัก)";
      } else {
        delete newErrors.tel_num;
      }
      break;
    case "email":
      if (!value) {
        newErrors.email = "กรุณากรอกอีเมล";
      } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value)) {
        newErrors.email = "กรุณากรอกอีเมลให้ถูกต้อง";
      } else {
        delete newErrors.email;
      }
      break;
    case "password":
      if (!value) {
        newErrors.password = "กรุณากรอกรหัสผ่าน";
      } else if (value.length < 6) {
        newErrors.password = "รหัสผ่านต้องมีอย่างน้อย 6 ตัวอักษร";
      } else {
        delete newErrors.password;
      }
      break;
    case "isChecked":
      if (!value) {
        newErrors.isChecked = "กรุณายอมรับข้อตกลงและเงื่อนไข";
      } else {
        delete newErrors.isChecked;
      }
      break;
    default:
      break;
  }

  return newErrors;
};
