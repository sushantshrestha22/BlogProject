import * as yup from "yup";

// schema for login form
export const LoginSchema = yup.object({
  email: yup.string().email().required("Please enter your email"),
  password: yup.string().min(6).max(25).required("Please enter your password"),
});
