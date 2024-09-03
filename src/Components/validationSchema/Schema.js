import * as Yup from "yup";
import { emailRegex, phoneRegex } from "../../lib/regex";

export const contactSchema = Yup.object().shape({
  username: Yup.string().required("Name is required"),
  useremail: Yup.string()
    .email("Invalid email")
    .required("Email is required")
    .test("is-email", "Please enter a valid email", (value) => {
      if (!value) return false;
      return emailRegex.test(value);
    }),
  userphone: Yup.string()
    .required("Phone number is required")
    .test("is-phone", "Please enter a valid phone number", (value) => {
      if (!value) return false;
      return phoneRegex.test(value);
    }),
  usermessage: Yup.string().required("Message is required"),
});
