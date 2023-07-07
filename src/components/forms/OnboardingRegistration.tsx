"use client";
import {
  RegistrationSchema,
  genders,
  registrationSchema,
} from "@/shared/onboarding";
import { Input, Label, Select, Form, Title } from "@/shared/components";
import { useOnboardingContext } from "@/contexts/OnboardingFormProvider";
import { useOnboardingFormSchema } from "@/hooks/onboarding-form-schema";

export default function OnboardingRegistration() {
  const { onboarding } = useOnboardingContext();
  const { errors, formState, onSubmit, register } =
    useOnboardingFormSchema<RegistrationSchema>({
      schema: registrationSchema,
      selector: ({ registration }) => registration,
      onSubmitValidData(data) {
        onboarding.actions.setRegistration(data);
      },
    });

  return (
    <div className="bg-slate-800 grid">
      <Form onSubmit={onSubmit}>
        <div className="grid gap-4 border-gray-900/10">
          <Title> Formulário de Inscrição</Title>

          <div className="grid gap-6">
            <div className="">
              <Label htmlFor="nome-social">Nome Social</Label>
              <div className="mt-2">
                <Input
                  defaultValue={formState?.nomeSocial}
                  type="text"
                  {...register("nomeSocial")}
                />
                {errors.nomeSocial && <span>{errors.nomeSocial.message}</span>}
              </div>
            </div>

            <div className="">
              <Label htmlFor="gender">Gênero</Label>
              <div className="mt-2">
                <Select
                  defaultValue={formState?.gender}
                  {...register("gender")}
                >
                  {genders.map((gender) => (
                    <option key={gender} value={gender}>
                      {gender}
                    </option>
                  ))}
                  <option value="">Selecione</option>
                </Select>
              </div>
            </div>

            <div className="">
              <Label htmlFor="idade">Idade</Label>
              <div className="mt-2">
                <Input
                  defaultValue={formState?.idade}
                  type="number"
                  {...register("idade")}
                />
                {errors.idade && <span>{errors.idade.message}</span>}
              </div>
            </div>
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
