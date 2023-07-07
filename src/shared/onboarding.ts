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

export type RegistrationSchema = z.infer<typeof registrationSchema>;
export type AboutSchema = z.infer<typeof aboutSchema>;
export type ContactSchema = z.infer<typeof contactSchema>;
export type ProfessionalSchema = z.infer<typeof professionalSchema>;

export type OnboardingSchemas =
  | typeof registrationSchema
  | typeof aboutSchema
  | typeof contactSchema
  | typeof professionalSchema;

export const registrationSchema = z.object({
  nomeSocial: z
    .string()
    .nonempty("Nome Social é obrigatório")
    .min(3, "Mínimo 2 caracteres"),
  idade: z
    .string()
    .nonempty("Idade é obrigatório")
    .max(2, "Insira idade válida"),
  gender: z.string().nonempty("Gênero é obrigatório"),
});

export const aboutSchema = z.object({
  qOne: z.string().nonempty("Resposta é obrigatório"),
  qTwo: z.string().nonempty("Resposta é obrigatório"),
});

export const contactSchema = z.object({
  pais: z.string().nonempty("País é obrigatório"),
  cidadeEstado: z.string().nonempty("Cidade é obrigatório"),
  telefone: z.string().nonempty("Telefone é obrigatório"),
  email: z
    .string()
    .nonempty("Email é obrigatório")
    .email("Insira um email válido"),
});

export const professionalSchema = z.object({
  profissao: z.string(),
  educationLevel: z.string().nonempty("Nível de escolaridade é obrigatório"),
  empresaOrganizacao: z.string(),
  githubPortifolio: z.string(),
  linkedin: z.string(),
});
