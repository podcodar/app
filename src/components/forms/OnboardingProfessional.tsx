"use client";
import { educationLevels } from "@/shared/onboarding";
import { professionalSchema } from "@/shared/onboarding";
import { ProfessionalSchema } from "@/shared/onboarding";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Input, Label, Select, Form } from "@/shared/components";

export default function OnboardingProfessional() {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<ProfessionalSchema>({
    resolver: zodResolver(professionalSchema),
  });
  const values = watch([
    "educationLevel",
    "profissao",
    "empresaOrganizacao",
    "githubPortifolio",
    "linkedin",
  ]);

  function onSubmit(data: ProfessionalSchema) {
    console.log(data);
  }

  return (
    <div className="bg-slate-800 grid">
      <Form onSubmit={handleSubmit(onSubmit)}>
        <div className="grid gap-4 border-gray-900/10">
          <div className="sm:col-span-2">
            <Label htmlFor="education-level">Formação</Label>
            <div className="mt-2">
              <Select defaultValue="" {...register("educationLevel")}>
                {educationLevels.map((level) => (
                  <option key={level} value={level}>
                    {level}
                  </option>
                ))}
                <option value="">Selecione</option>
              </Select>
              {errors.educationLevel && (
                <span>{errors.educationLevel.message}</span>
              )}
            </div>
          </div>

          <div className="sm:col-span-2">
            <Label htmlFor="profissao">Profissão</Label>
            <div className="mt-2">
              <Input
                placeholder="Opcional"
                type="text"
                {...register("profissao")}
              />
            </div>
          </div>

          <div className="sm:col-span-2">
            <Label htmlFor="empresa-organizacao">Empresa/Organização</Label>
            <div className="mt-2">
              <Input
                placeholder="Opcional"
                type="text"
                {...register("empresaOrganizacao")}
              />
            </div>
          </div>

          <div className="sm:col-span-2">
            <Label htmlFor="github-portifolio">GitHub/Portifólio</Label>
            <div className="mt-2">
              <Input
                placeholder="Opcional"
                type="text"
                {...register("githubPortifolio")}
              />
            </div>
          </div>

          <div className="sm:col-span-2">
            <Label htmlFor="linkedin">LinkedIn</Label>
            <div className="mt-2">
              <Input
                placeholder="Opcional"
                type="text"
                {...register("linkedin")}
              />
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