"use client";

import { aboutSchema } from "@/shared/onboarding";
import { AboutSchema } from "@/shared/onboarding";
import { Label, Form, Textarea } from "@/shared/components";
import { useOnboardingContext } from "@/contexts/OnboardingFormProvider";
import { useOnboardingFormSchema } from "@/hooks/onboarding-form-schema";

export default function OnboardingAbout() {
  const { onboarding } = useOnboardingContext();
  const { errors, formState, onSubmit, register } =
    useOnboardingFormSchema<AboutSchema>({
      schema: aboutSchema,
      selector: ({ about }) => about,
      onSubmitValidData(data) {
        onboarding.actions.setAbout(data);
      },
    });

  return (
    <div className="bg-slate-800 grid">
      <Form onSubmit={onSubmit}>
        <div className="sm:col-span-2">
          <Label className="text-lg mb-8" htmlFor="q-one">
            Estamos ansiosos para conhecê-lo melhor! Por favor, compartilhe um
            pouco da sua experiência e nos conte quais são as áreas da
            tecnologia que mais despertam o seu interesse.
          </Label>
          <div className="mt-2">
            <Textarea
              defaultValue={formState?.qOne}
              rows={5}
              {...register("qOne")}
            />
            {errors.qOne && <span>{errors.qOne.message}</span>}
          </div>
        </div>

        <div className="sm:col-span-2">
          <Label className="text-lg mb-8" htmlFor="q-two">
            Por favor, compartilhe conosco o motivo pelo qual você deseja
            ingressar na PodCodar, o que espera aprender ou vivenciar
            participando da comunidade?
          </Label>
          <div className="mt-2">
            <Textarea
              defaultValue={formState?.qTwo}
              rows={5}
              {...register("qTwo")}
            />
            {errors.qTwo && <span>{errors.qTwo.message}</span>}
          </div>
        </div>
        <button type="submit">TESTE ENVIAR</button>
      </Form>
      <pre>
        <code>{JSON.stringify(onboarding.formState, null, 2)}</code>
      </pre>
    </div>
  );
}
