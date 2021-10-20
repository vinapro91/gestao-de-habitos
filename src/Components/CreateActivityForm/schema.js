import * as yup from "yup";

const schema = yup.object().shape({
  title: yup.string().required("Titulo é obrigatório"),
});

export default schema;
