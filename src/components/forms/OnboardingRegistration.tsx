"use client";
import {
  RegistrationSchema,
  genders,
  registrationSchema,
} from "@/shared/onboarding";
import {
  Input,
  Label,
  Select,
  Form,
  Button,
  ErrorMessage,
  ButtonWrapper,
} from "@/shared/components";
import { useOnboardingContext } from "@/contexts/OnboardingFormProvider";
import { useOnboardingFormSchema } from "@/hooks/onboarding-form-schema";

export default function OnboardingRegistration() {
  const { onboarding, canMovePrevious, movePrevStep } = useOnboardingContext();
  const { errors, formState, onSubmit, register } =
    useOnboardingFormSchema<RegistrationSchema>({
      schema: registrationSchema,
      selector: ({ registration }) => registration,
      onSubmitValidData(data) {
        onboarding.actions.setRegistration(data);
      },
    });

  return (
    <Form onSubmit={onSubmit}>
      <div>
        <Label htmlFor="nome-social">Nome Social</Label>
        <div>
          <Input
            defaultValue={formState?.nomeSocial}
            type="text"
            {...register("nomeSocial")}
          />
          {errors.nomeSocial && (
            <ErrorMessage>{errors.nomeSocial.message}</ErrorMessage>
          )}
        </div>
      </div>

      <div>
        <Label htmlFor="gender">Gênero</Label>
        <div>
          <Select defaultValue={formState?.gender} {...register("gender")}>
            {genders.map((gender) => (
              <option key={gender} value={gender}>
                {gender}
              </option>
            ))}
            <option value="">Selecione</option>
          </Select>
        </div>
      </div>

      <div>
        <Label htmlFor="idade">Idade</Label>
        <div>
          <Input
            defaultValue={formState?.idade}
            type="number"
            {...register("idade")}
          />
          {errors.idade && <ErrorMessage>{errors.idade.message}</ErrorMessage>}
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
