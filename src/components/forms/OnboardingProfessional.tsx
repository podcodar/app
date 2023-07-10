"use client";
import { educationLevels } from "@/shared/onboarding";
import { professionalSchema } from "@/shared/onboarding";
import { ProfessionalSchema } from "@/shared/onboarding";
import { Input, Label, Select, Form } from "@/shared/components";
import { useOnboardingContext } from "@/contexts/OnboardingFormProvider";
import { useOnboardingFormSchema } from "@/hooks/onboarding-form-schema";

export default function OnboardingProfessional() {
  const { onboarding } = useOnboardingContext();
  const { errors, formState, onSubmit, register } =
    useOnboardingFormSchema<ProfessionalSchema>({
      schema: professionalSchema,
      selector: ({ professional }) => professional,
      onSubmitValidData(data) {
        onboarding.actions.setProfessional(data);
      },
    });

  return (
    <div className="bg-slate-800 grid">
      <Form onSubmit={onSubmit}>
        <div className="grid gap-4 border-gray-900/10">
          <div className="sm:col-span-2">
            <Label htmlFor="education-level">Formação</Label>
            <div className="mt-2">
              <Select
                defaultValue={formState?.educationLevel}
                {...register("educationLevel")}
              >
                {educationLevels.map((level) => (
                  <option key={level} value={level}>
                    {level}
                  </option>
                ))}
                <option value="">Selecione</option>
              </Select>
              {errors.educationLevel && (
                <span>{errors.educationLevel.message}</span>
              )}
            </div>
          </div>

          <div className="sm:col-span-2">
            <Label htmlFor="profissao">Profissão</Label>
            <div className="mt-2">
              <Input
                defaultValue={formState?.profissao}
                placeholder="Opcional"
                type="text"
                {...register("profissao")}
              />
            </div>
          </div>

          <div className="sm:col-span-2">
            <Label htmlFor="empresa-organizacao">Empresa/Organização</Label>
            <div className="mt-2">
              <Input
                defaultValue={formState?.empresaOrganizacao}
                placeholder="Opcional"
                type="text"
                {...register("empresaOrganizacao")}
              />
            </div>
          </div>

          <div className="sm:col-span-2">
            <Label htmlFor="github-portifolio">GitHub/Portifólio</Label>
            <div className="mt-2">
              <Input
                defaultValue={formState?.githubPortifolio}
                placeholder="Opcional"
                type="text"
                {...register("githubPortifolio")}
              />
            </div>
          </div>

          <div className="sm:col-span-2">
            <Label htmlFor="linkedin">LinkedIn</Label>
            <div className="mt-2">
              <Input
                defaultValue={formState?.linkedin}
                placeholder="Opcional"
                type="text"
                {...register("linkedin")}
              />
            </div>
          </div>
        </div>
        <button type="submit"> TESTE ENVIAR </button>
      </Form>
      <pre>
        <code>{JSON.stringify(onboarding.formState, null, 2)}</code>
      </pre>
    </div>
  );
}
