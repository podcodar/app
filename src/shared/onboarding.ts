import { z } from "zod";

export const educationLevels = [
  "Ensino Fundamental Incompleto",
  "Ensino Fundamental Completo",
  "Ensino Médio Incompleto",
  "Ensino Médio Completo",
  "Ensino Técnico Incompleto",
  "Ensino Técnico Completo",
  "Graduação Incompleta",
  "Graduação Completa",
  "Pós-graduação Incompleta",
  "Pós-graduação Completa",
  "Mestrado Incompleto",
  "Mestrado Completo",
  "Doutorado Incompleto",
  "Doutorado Completo",
  "Outro (especifique)",
];

export const genders = [
  "Agênero",
  "Feminino",
  "Gênero fluido",
  "Masculino",
  "Não-binário",
  "Transgênero",
  "Outros",
  "Prefiro não responder",
];

export type FormSchema = z.infer<typeof formSchema>;

export const formSchema = z.object({
  nomeSocial: z
    .string()
    .nonempty("Nome Social é obrigatório")
    .min(3, "Mínimo 2 caracteres"),
  idade: z
    .string()
    .nonempty("Idade é obrigatório")
    .max(2, "Insira idade válida"),
  telefone: z.string().nonempty("Telefone é obrigatório"),
  pais: z.string().nonempty("País é obrigatório"),
  cidadeEstado: z.string().nonempty("Cidade é obrigatório"),
  email: z
    .string()
    .nonempty("Email é obrigatório")
    .email("Insira um email válido"),
  profissao: z.string(),
  empresaOrganizacao: z.string(),
  githubPortifolio: z.string(),
  linkedin: z.string(),
  gender: z.string().nonempty("Gênero é obrigatório"),
  qOne: z.string().nonempty("Resposta é obrigatório"),
  qTwo: z.string().nonempty("Resposta é obrigatório"),
});
