import * as yup from "yup";

const schema = yup.object().shape({
  name: yup.string().required("Nome é obrigatório"),
  description: yup.string().required("Descrição é obrigatória"),
  category: yup.string().required("Categoria é obrigatória"),
});

export default schema;
