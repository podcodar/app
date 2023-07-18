"use client";

import { contactSchema } from "@/shared/onboarding";
import { ContactSchema } from "@/shared/onboarding";
import {
  Input,
  Label,
  Form,
  ButtonWrapper,
  Button,
  ErrorMessage,
} from "@/shared/components";
import { useOnboardingContext } from "@/contexts/OnboardingFormProvider";
import { useOnboardingFormSchema } from "@/hooks/onboarding-form-schema";

export default function OnboardingContact() {
  const { onboarding, canMovePrevious, movePrevStep } = useOnboardingContext();
  const { errors, formState, onSubmit, register } =
    useOnboardingFormSchema<ContactSchema>({
      schema: contactSchema,
      selector: ({ contact }) => contact,
      onSubmitValidData(data) {
        onboarding.actions.setContact(data);
      },
    });

  return (
    <Form onSubmit={onSubmit}>
      <div>
        <Label htmlFor="pais">País</Label>
        <div>
          <Input
            defaultValue={formState?.pais}
            type="text"
            {...register("pais")}
          />
        </div>
        {errors.pais && <ErrorMessage>{errors.pais.message}</ErrorMessage>}
      </div>

      <div>
        <Label htmlFor="cidade-estado">Cidade/Estado</Label>
        <div>
          <Input
            defaultValue={formState?.cidadeEstado}
            type="text"
            {...register("cidadeEstado")}
          />
        </div>
        {errors.cidadeEstado && (
          <ErrorMessage>{errors.cidadeEstado.message}</ErrorMessage>
        )}
      </div>

      <div>
        <Label htmlFor="telefone">Telefone</Label>
        <div>
          <Input
            defaultValue={formState?.telefone}
            placeholder="00 00000 0000"
            type="number"
            {...register("telefone")}
          />
        </div>
        {errors.telefone && (
          <ErrorMessage>{errors.telefone.message}</ErrorMessage>
        )}
      </div>

      <div>
        <Label htmlFor="email">Email</Label>
        <div>
          <Input
            defaultValue={formState?.email}
            type="email"
            {...register("email")}
          />
        </div>
        {errors.email && <ErrorMessage>{errors.email.message}</ErrorMessage>}
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
