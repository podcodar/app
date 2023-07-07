"use client";

import { contactSchema } from "@/shared/onboarding";
import { ContactSchema } from "@/shared/onboarding";
import { Input, Label, Form } from "@/shared/components";
import { useOnboardingContext } from "@/contexts/OnboardingFormProvider";
import { useOnboardingFormSchema } from "@/hooks/onboarding-form-schema";

export default function OnboardingContact() {
  const { onboarding } = useOnboardingContext();
  const { errors, formState, onSubmit, register } =
    useOnboardingFormSchema<ContactSchema>({
      schema: contactSchema,
      selector: ({ contact }) => contact,
      onSubmitValidData(data) {
        onboarding.actions.setContact(data);
      },
    });

  return (
    <div className="bg-slate-800 grid">
      <Form onSubmit={onSubmit}>
        <div className="sm:col-span-22">
          <Label htmlFor="pais">País</Label>
          <div className="mt-2">
            <Input
              defaultValue={formState?.pais}
              type="text"
              {...register("pais")}
            />
          </div>
          {errors.pais && <span>{errors.pais.message}</span>}
        </div>

        <div className="sm:col-span-2">
          <Label htmlFor="cidade-estado">Cidade/Estado</Label>
          <div className="mt-2">
            <Input
              defaultValue={formState?.cidadeEstado}
              type="text"
              {...register("cidadeEstado")}
            />
          </div>
          {errors.cidadeEstado && <span>{errors.cidadeEstado.message}</span>}
        </div>

        <div className="sm:col-span-22">
          <Label htmlFor="telefone">Telefone</Label>
          <div className="mt-2">
            <Input
              className="placeholder-gray-400"
              defaultValue={formState?.telefone}
              placeholder="00 00000 0000"
              type="number"
              {...register("telefone")}
            />
          </div>
          {errors.telefone && <span>{errors.telefone.message}</span>}
        </div>

        <div className="sm:col-span-2">
          <Label htmlFor="email">Email</Label>
          <div className="mt-2">
            <Input
              defaultValue={formState?.email}
              type="email"
              {...register("email")}
            />
          </div>
          {errors.email && <span>{errors.email.message}</span>}
        </div>
        <button type="submit">TESTE ENVIAR</button>
      </Form>

      <pre>
        <code>{JSON.stringify(onboarding.formState, null, 2)}</code>
      </pre>
    </div>
  );
}
