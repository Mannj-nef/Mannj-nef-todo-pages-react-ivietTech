import * as Yup from "yup";
const SCHEMA = {
  STRING_MI_2_MX_20: Yup.string()
    .required("Required")
    .min(2, "Must be 2 characters ro more")
    .max(20, "Must be 20 characters ro lest"),
  STRING_MI_2_MX_100: Yup.string()
    .required("Required")
    .min(2, "Must be 2 characters ro more")
    .max(20, "Must be 20 characters ro lest"),
  STRING_REQUIRED: Yup.string().required().oneOf(["new", "doing", "done"]),
};

export default SCHEMA;
