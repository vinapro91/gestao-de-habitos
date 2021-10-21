import * as yup from "yup";

const schema = yup.object().shape({
  title: yup.string().required("Nome é obrigatório"),
  difficulty: yup.string().required("Dificuldade é obrigatória"),
  category: yup.string().required("Categoria é obrigatória"),
  frequency: yup.string().required("Frequencia obrigatoria"),
});

export default schema;
