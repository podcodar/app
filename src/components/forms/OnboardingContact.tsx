"use client";

import { contactSchema } from "@/shared/onboarding";
import { ContactSchema } from "@/shared/onboarding";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Input, Label, Form } from "@/shared/components";
import { FormProps } from "@/hooks/useOnboardingForm";

export default function OnboardingContact(props: FormProps) {
  // TODO: Recebe onSubmit, que vai ser uma função.
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<ContactSchema>({
    resolver: zodResolver(contactSchema),
  });
  const values = watch([
    "telefone",
    "cidadeEstado",
    "pais",
    "email"
  ]);

  // function onSubmit(data: ContactSchema) {
  //   // props.onSubmit();
  //   // console.log(data);
  //   const isValid = contactSchema.safeParse(data);
  //   if (isValid.success) {
  //     props.moveNextStep();
  //     console.log(data);
  //     return;
  //   }
  //   console.log("Dados inválidos:", isValid.error);
  //   return;
  // }

  // function onSubmit(data: contactSchema) {
  //   // props.onSubmit();
  //   // console.log(data);
  //   const isValid = contactSchema.safeParse(data);
  //   if (isValid.success) {
  //     props.moveNextStep();
  //     console.log(data);
  //   } else {
  //     console.log("Dados inválidos:", isValid.error);
  //   }

  // }

  function onSubmit(data: ContactSchema) {
    const isValid = contactSchema.safeParse(data);
    isValid.success
      ? props.moveNextStep()
      : console.log("Dados inválidos:", isValid.error);
    console.log(data);
    // TODO: enviar o dado para o store global.(proxima pr)  "props.onSubmit();"
    // TODO: Após o envio, seguir para a proxima etapa, chamar o next
  }

  return (
    <div className="bg-slate-800 grid">
      <Form onSubmit={handleSubmit(onSubmit)}>
        <div className="sm:col-span-22">
          <Label htmlFor="pais">País</Label>
          <div className="mt-2">
            <Input type="text" {...register("pais")} />
          </div>
          {errors.pais && <span>{errors.pais.message}</span>}
        </div>

        <div className="sm:col-span-2">
          <Label htmlFor="cidade-estado">Cidade/Estado</Label>
          <div className="mt-2">
            <Input type="text" {...register("cidadeEstado")} />
          </div>
          {errors.cidadeEstado && <span>{errors.cidadeEstado.message}</span>}
        </div>

        <div className="sm:col-span-22">
          <Label htmlFor="telefone">Telefone</Label>
          <div className="mt-2">
            <Input
              className="placeholder-gray-400"
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
            <Input type="email" {...register("email")} />
          </div>
          {errors.email && <span>{errors.email.message}</span>}
        </div>
        <button type="submit">TESTE ENVIAR</button>
      </Form>

      <pre>
        <code>{JSON.stringify(values, null, 2)}</code>
      </pre>
    </div>
  );
}
