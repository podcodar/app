"use client";

import { formSchema } from "@/shared/onboarding";
import { FormSchema } from "@/shared/onboarding";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Label, Form, Textarea } from "@/shared/components";

export default function OnboardingAboutForm() {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<FormSchema>({
    resolver: zodResolver(formSchema),
  });
  const values = watch(["qOne", "qTwo"]);

  function onSubmit(data: FormSchema) {
    console.log(data);
  }
  return (
    <div className="bg-slate-800 grid">
      <Form onSubmit={handleSubmit(onSubmit)}>
        <div className="sm:col-span-2">
          <Label className="text-lg mb-8" htmlFor="q-one">
            Estamos ansiosos para conhecê-lo melhor! Por favor, compartilhe um
            pouco da sua experiência e nos conte quais são as áreas da
            tecnologia que mais despertam o seu interesse.
          </Label>
          <div className="mt-2">
            <Textarea
              id="q-one"
              rows={5}
              {...register("qOne")}
            />
            {errors.qOne && <span>{errors.qOne.message}</span>}
          </div>
        </div>
        <button type="submit"> Enviar </button>
      </Form>

      <Form onSubmit={handleSubmit(onSubmit)}>
        <div className="sm:col-span-2">
          <Label className="text-lg mb-8" htmlFor="q-two">
            Por favor, compartilhe conosco o motivo pelo qual você deseja
            ingressar na PodCodar, o que espera aprender ou vivenciar
            participando da comunidade?
          </Label>
          <div className="mt-2">
            <Textarea
              id="q-two"
              rows={5}
              {...register("qTwo")}
            />
            {errors.qTwo && <span>{errors.qTwo.message}</span>}
          </div>
        </div>
        <button type="submit"> Enviar </button>
      </Form>
      <pre>
        <code>{JSON.stringify(values, null, 2)}</code>
      </pre>
    </div>
  );
}
