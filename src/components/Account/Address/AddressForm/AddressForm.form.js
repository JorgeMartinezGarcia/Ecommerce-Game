import * as Yup from "yup";

export function initialValues() {
  return {
    title: "",
    name: "",
    address: "",
    city: "",
    state: "",
    postal_code: "",
    phone: "",
  };
}

export function validationSchema() {
  return Yup.object({
    title: Yup.string().required(true),
    name: Yup.string().required(true),
    address: Yup.string().required(true),
    city: Yup.string().required(true),
    state: Yup.string().required(true),
    postal_code: Yup.string().required(true),
    phone: Yup.number().required(true),
  });
}
