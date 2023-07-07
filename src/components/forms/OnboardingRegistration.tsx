"use client";
import { genders } from "@/shared/onboarding";
import { registrationSchema } from "@/shared/onboarding";
import { RegistrationSchema } from "@/shared/onboarding";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Input, Label, Select, Form, Title } from "@/shared/components";
import { useOnboardingContext } from "@/contexts/OnboardingFormProvider";

export default function OnboardingRegistration() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<RegistrationSchema>({
    resolver: zodResolver(registrationSchema),
  });
  const { moveNextStep, onboarding } = useOnboardingContext();
  const { registration } = onboarding.formState;

  function onSubmit(data: RegistrationSchema) {
    const isValid = registrationSchema.safeParse(data);
    if (!isValid.success) {
      return alert("Invalid form data");
    }

    onboarding.actions.setRegistration(isValid.data);
    moveNextStep();
  }

  return (
    <div className="bg-slate-800 grid">
      <Form onSubmit={handleSubmit(onSubmit)}>
        <div className="grid gap-4 border-gray-900/10">
          <Title> Formulário de Inscrição</Title>

          <div className="grid gap-6">
            <div className="">
              <Label htmlFor="nome-social">Nome Social</Label>
              <div className="mt-2">
                <Input
                  defaultValue={registration?.nomeSocial}
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
                  defaultValue={registration?.gender}
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
                  defaultValue={registration?.idade}
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
