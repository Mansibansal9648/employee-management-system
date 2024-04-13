import * as Yup from "yup";

export const employeeSchema = Yup.object({
  name: Yup.string()
    .matches(/^[a-zA-Z\s]+$/, "Name can only contain alphabets and spaces")
    .min(2, "Name must be at least 2 characters")
    .max(25, "Name can't exceed 25 characters")
    .required("Please enter your name"),
  contact_no: Yup.string()
    .matches(/^[0-9]{10}$/, "Contact number must have exactly 10 digits")
    .required("Contact number is required"),
  email: Yup.string()
    .matches(/^[^\s@]+@[^\s@]+\.[^\s@]+$/, "Please enter a valid email address")
    // .email("Please enter a valid email address")
    .required("Please enter your email"),
  qualification: Yup.string()
    .matches(
      /^[a-zA-Z\s]+$/,
      "Qualification can only contain alphabets and spaces"
    )
    .min(3, "Qualification must be at least 3 characters")
    .max(35, "Qualification can't exceed 35 characters")
    .required("Please enter your qualification"),
  project: Yup.string()
    .matches(/^[a-zA-Z\s]+$/, "Project can only contain alphabets and spaces")
    .min(3, "Project must be at least 3 characters")
    .max(35, "Project can't exceed 35 characters")
    .required("Please enter your project"),
  designation: Yup.string()
    .matches(
      /^[a-zA-Z\s]+$/,
      "Designation can only contain alphabets and spaces"
    )
    .min(2, "Designation must be at least 2 characters")
    .max(35, "Designation can't exceed 35 characters")
    .required("Please enter your designation"),
  department: Yup.string()
    .matches(/^[a-zA-Z]+$/, "Department can only contain alphabets")
    .min(2, "Department must be at least 2 characters")
    .max(25, "Department can't exceed 25 characters")
    .required("Please enter your department"),
  salary: Yup.string()
    .matches(
      /^[0-9]+$/,
      "Salary should be number and greater than or equal to zero"
    )
    .min(4, "Salary must be at least 4 digit")
    .max(15, "Salary can't exceed 15 digits")
    .required("Please enter your salary"),
  experience: Yup.string()
    .matches(
      /^[0-9]+$/,
      "Experience should be in months only and should not be negative"
    )
    .min(1, "Experience must contain atleast 1 digit")
    .max(3, "Experience can't exceed 3 digits")
    .required("Please enter your experience (0 if not applicable)"),
  previous_company: Yup.string()
    .matches(
      /^[a-zA-Z\s]+$/,
      "Previous Company can only contain alphabets and spaces"
    )
    .min(2, "Previous Company must be at least 2 characters")
    .max(35, "Previous Company can't exceed 35 characters")
    .required("Please enter your previous company (NA if not applicable) "),
  joining_date: Yup.date()
    .max(new Date(), "Joining date can't be greater than today's date")
    .required("Please enter your date of joining"),
});
