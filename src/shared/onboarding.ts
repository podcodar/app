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
  "Pós-graduação",
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
    .nonempty("Nome Social é necessário")
    .min(3, "Mínimo 2 caracteres"),
  idade: z
    .string()
    .nonempty("Idade é obrigatório")
    .max(2, "Insira idade válida"),
  gender: z.string().nonempty("Gênero é necessário"),
});

export const aboutSchema = z.object({
  qOne: z.string().nonempty("Resposta é necessário"),
  qTwo: z.string().nonempty("Resposta é necessário"),
});

export const contactSchema = z.object({
  pais: z.string().nonempty("País é necessário"),
  cidadeEstado: z.string().nonempty("Cidade é necessário"),
  telefone: z.string().nonempty("Telefone é necessário"),
  email: z
    .string()
    .nonempty("Email é necessário")
    .email("Insira um email válido"),
});

export const professionalSchema = z.object({
  profissao: z.string(),
  educationLevel: z.string().nonempty("Nível de escolaridade é necessário"),
  empresaOrganizacao: z.string(),
  githubPortifolio: z.string(),
  linkedin: z.string(),
});
