"use client";

import { aboutSchema } from "@/shared/onboarding";
import { AboutSchema } from "@/shared/onboarding";
import {
  Label,
  Form,
  Textarea,
  ButtonWrapper,
  Button,
  ErrorMessage,
} from "@/shared/components";
import { useOnboardingContext } from "@/contexts/OnboardingFormProvider";
import { useOnboardingFormSchema } from "@/hooks/onboarding-form-schema";

export default function OnboardingAbout() {
  const { onboarding, canMovePrevious, movePrevStep } = useOnboardingContext();
  const { errors, formState, onSubmit, register } =
    useOnboardingFormSchema<AboutSchema>({
      schema: aboutSchema,
      selector: ({ about }) => about,
      onSubmitValidData(data) {
        onboarding.actions.setAbout(data);
      },
    });

  return (
    <Form onSubmit={onSubmit}>
      <div>
        <Label htmlFor="q-one">
          Estamos ansiosos para conhecê-lo melhor! Por favor, compartilhe um
          pouco da sua experiência e nos conte quais são as áreas da tecnologia
          que mais despertam o seu interesse.
        </Label>
        <div>
          <Textarea
            defaultValue={formState?.qOne}
            rows={5}
            {...register("qOne")}
          />
          {errors.qOne && <ErrorMessage>{errors.qOne.message}</ErrorMessage>}
        </div>
      </div>

      <div>
        <Label htmlFor="q-two">
          Por favor, compartilhe conosco o motivo pelo qual você deseja
          ingressar na PodCodar, o que espera aprender ou vivenciar participando
          da comunidade?
        </Label>
        <div>
          <Textarea
            defaultValue={formState?.qTwo}
            rows={5}
            {...register("qTwo")}
          />
          {errors.qTwo && <ErrorMessage>{errors.qTwo.message}</ErrorMessage>}
        </div>
      </div>
      <ButtonWrapper>
        <Button disabled={!canMovePrevious} onClick={movePrevStep}>
          Voltar
        </Button>

        <Button type="submit">Finalizar</Button>
      </ButtonWrapper>
    </Form>
  );
}
