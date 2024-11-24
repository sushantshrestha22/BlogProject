import * as yup from "yup";

// schema for login form
export const UpdateUserSchema = yup.object({
  firstName: yup
    .string()
    .min(2)
    .max(25)
    .required("Please enter your firstName"),
  lastName: yup.string().min(2).max(25).required("Please enter your lastName"),
  email: yup.string().email().required("Please enter your email"),
  //   password: yup.string().min(6).max(25).required("Please enter your password"),
  //   confirmPassword: yup
  //     .string()
  //     .oneOf([yup.ref("password"), null], "Passwords must match"),
  role: yup.string().required("Please select your role"),
  address: yup.string().min(6).max(25).required("Please enter your address"),
  mobileNumber: yup
    .string()
    .min(10)
    .max(10)
    .required("Please enter your mobile number"),
});
