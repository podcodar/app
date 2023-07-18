"use client";
import { educationLevels } from "@/shared/onboarding";
import { professionalSchema } from "@/shared/onboarding";
import { ProfessionalSchema } from "@/shared/onboarding";
import {
  Input,
  Label,
  Select,
  Form,
  ErrorMessage,
  Button,
  ButtonWrapper,
} from "@/shared/components";
import { useOnboardingContext } from "@/contexts/OnboardingFormProvider";
import { useOnboardingFormSchema } from "@/hooks/onboarding-form-schema";

export default function OnboardingProfessional() {
  const { onboarding, canMovePrevious, movePrevStep } = useOnboardingContext();
  const { errors, formState, onSubmit, register } =
    useOnboardingFormSchema<ProfessionalSchema>({
      schema: professionalSchema,
      selector: ({ professional }) => professional,
      onSubmitValidData(data) {
        onboarding.actions.setProfessional(data);
      },
    });

  return (
    <Form onSubmit={onSubmit}>
      <div>
        <Label htmlFor="education-level">Formação</Label>
        <div>
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
            <ErrorMessage>{errors.educationLevel.message}</ErrorMessage>
          )}
        </div>
      </div>

      <div>
        <Label htmlFor="profissao">Profissão</Label>
        <div>
          <Input
            defaultValue={formState?.profissao}
            placeholder="Opcional"
            type="text"
            {...register("profissao")}
          />
        </div>
      </div>

      <div>
        <Label htmlFor="empresa-organizacao">Empresa/Organização</Label>
        <div>
          <Input
            defaultValue={formState?.empresaOrganizacao}
            placeholder="Opcional"
            type="text"
            {...register("empresaOrganizacao")}
          />
        </div>
      </div>

      <div>
        <Label htmlFor="github-portifolio">GitHub/Portifólio</Label>
        <div>
          <Input
            defaultValue={formState?.githubPortifolio}
            placeholder="Opcional"
            type="text"
            {...register("githubPortifolio")}
          />
        </div>
      </div>

      <div>
        <Label htmlFor="linkedin">LinkedIn</Label>
        <div>
          <Input
            defaultValue={formState?.linkedin}
            placeholder="Opcional"
            type="text"
            {...register("linkedin")}
          />
        </div>
      </div>

      <ButtonWrapper>
        <Button disabled={!canMovePrevious} onClick={movePrevStep}>
          Voltar
        </Button>

        <Button type="submit">Próximo</Button>
      </ButtonWrapper>
    </Form>
  );
}
