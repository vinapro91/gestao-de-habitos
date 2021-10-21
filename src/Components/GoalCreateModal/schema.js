import * as yup from "yup";

const schema = yup.object().shape({
  title: yup.string().trim().required("Meta é obrigatória"),
  difficulty: yup.string().trim().required("Dificuldade é obrigatória"),
});

export default schema;
