import * as yup from "yup";

export const signupSchema = yup.object().shape({
  email: yup.string().email("invalid email").required("email is required!"),
  password: yup
    .string()
    .min(8, "password must be at least 8 long!")
    .required("password is required!"),
  passwordConfirm: yup
    .string()
    .oneOf([yup.ref("password"), null], "passwords must match"),
});
