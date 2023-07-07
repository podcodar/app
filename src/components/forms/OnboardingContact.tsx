"use client";

import { contactSchema } from "@/shared/onboarding";
import { ContactSchema } from "@/shared/onboarding";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Input, Label, Form } from "@/shared/components";
import { useOnboardingContext } from "@/contexts/OnboardingFormProvider";

export default function OnboardingContact() {
  const {
    register,
    handleSubmit,

    formState: { errors },
  } = useForm<ContactSchema>({
    resolver: zodResolver(contactSchema),
  });
  const { moveNextStep, onboarding } = useOnboardingContext();
  const { contact } = onboarding.formState;

  function onSubmit(data: ContactSchema) {
    const isValid = contactSchema.safeParse(data);
    if (!isValid.success) {
      return alert("Invalid form data");
    }
    onboarding.actions.setContact(isValid.data);
    moveNextStep();
  }

  return (
    <div className="bg-slate-800 grid">
      <Form onSubmit={handleSubmit(onSubmit)}>
        <div className="sm:col-span-22">
          <Label htmlFor="pais">País</Label>
          <div className="mt-2">
            <Input
              defaultValue={contact?.pais}
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
              defaultValue={contact?.cidadeEstado}
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
              defaultValue={contact?.telefone}
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
              defaultValue={contact?.email}
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
