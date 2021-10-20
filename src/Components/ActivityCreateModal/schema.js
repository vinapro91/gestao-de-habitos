import * as yup from "yup";

const schema = yup.object().shape({
  title: yup.string().trim().required("Meta é obrigatória"),
});

export default schema;
