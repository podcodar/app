"use client";

import { formSchema } from "@/shared/onboarding";
import { FormSchema } from "@/shared/onboarding";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Input, Label, Form } from "@/shared/components";

export default function OnboardingContactForm() {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<FormSchema>({
    resolver: zodResolver(formSchema),
  });
  const values = watch([
    "telefone",
    "cidadeEstado",
    "pais",
    "email"
  ]);

  function onSubmit(data: FormSchema) {
    console.log(data);
  }
  return (
    <div className="bg-slate-800 grid">
      <Form onSubmit={handleSubmit(onSubmit)}>
        <div className="sm:col-span-22">
          <Label htmlFor="pais">País</Label>
          <div className="mt-2">
            <Input
              id="pais"
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
              id="cidade-estado"
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
              id="telefone"
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
              id="email"
              type="email"
              {...register("email")}
            />
          </div>
          {errors.email && <span>{errors.email.message}</span>}
        </div>
      </Form>

      <pre>
        <code>{JSON.stringify(values, null, 2)}</code>
      </pre>
    </div>
  );
}
