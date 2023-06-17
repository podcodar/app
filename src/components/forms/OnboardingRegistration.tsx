"use client";
import { genders } from "@/shared/onboarding";
import { registrationSchema } from "@/shared/onboarding";
import { RegistrationSchema } from "@/shared/onboarding";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Input, Label, Select, Form, Title } from "@/shared/components";

export default function OnboardingRegistration() {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<RegistrationSchema>({
    resolver: zodResolver(registrationSchema),
  });
  const values = watch([
    "nomeSocial",
    "gender",
    "idade"
  ]);

  function onSubmit(data: RegistrationSchema) {
    console.log(data);
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
                <Input type="text" {...register("nomeSocial")} />
                {errors.nomeSocial && <span>{errors.nomeSocial.message}</span>}
              </div>
            </div>

            <div className="">
              <Label htmlFor="gender">Gênero</Label>
              <div className="mt-2">
                <Select defaultValue={""} {...register("gender")}>
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
                <Input type="number" {...register("idade")} />
                {errors.idade && <span>{errors.idade.message}</span>}
              </div>
            </div>
          </div>
        </div>
      </Form>

      <pre>
        <code>{JSON.stringify(values, null, 2)}</code>
      </pre>
    </div>
  );
}
