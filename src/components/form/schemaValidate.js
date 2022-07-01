import * as Yup from "yup";

const schema = Yup.object({
  title: Yup.string()
    .required("Required")
    .min(2, "Must be 2 characters ro more")
    .max(20, "Must be 20 characters ro lest"),
  creator: Yup.string()
    .required("Required")
    .min(2, "Must be 2 characters ro more")
    .max(20, "Must be 20 characters ro lest"),
  time: Yup.string()
    .required("Required")
    .min(2, "Must be 2 characters ro more")
    .max(20, "Must be 20 characters ro lest"),
  desscription: Yup.string()
    .required("Required")
    .min(2, "Must be 2 characters ro more")
    .max(100, "Must be 100 characters ro lest"),
  // status: Yup.string().required().oneOf(["new", "doing", "done"]),
});

export default schema;
