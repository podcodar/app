"use client";
import { genders, educationLevels } from "@/shared/onboarding";
import { formSchema } from "@/shared/onboarding";
import { FormSchema } from "@/shared/onboarding";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  Input,
  Label,
  Select,
  Form,
  Title,
  Textarea,
} from "@/shared/components";

export default function OnboardingForm() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormSchema>({
    resolver: zodResolver(formSchema),
  });

  function onSubmit(data: FormSchema) {
    console.log(data);
  }

  return (
    <div className="absolute h-screen w-screen z-10 top-0 left-0 bg-slate-800 overflow-auto">
      <Form onSubmit={handleSubmit(onSubmit)}>
        <div className=" border-gray-900/10">
          <Title> Formulário de Inscrição</Title>

          <div className="mt-10 grid grid-cols-2 gap-x-6 gap-y-8 sm:grid-cols-6">
            <div className="sm:col-span-2">
              <Label htmlFor="nome-social">Nome Social</Label>
              <div className="mt-2">
                <Input
                  id="nome-social"
                  type="text"
                  {...register("nomeSocial")}
                />
                {errors.nomeSocial && <span>{errors.nomeSocial.message}</span>}
              </div>
            </div>

            <div className="sm:col-span-2">
              <Label htmlFor="gender">Gênero</Label>
              <div className="mt-2">
                <Select
                  defaultValue={""}
                  id="gender"
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

            <div className="sm:col-span-2">
              <Label htmlFor="idade">Idade</Label>
              <div className="mt-2">
                <Input
                  id="idade"
                  type="number"
                  {...register("idade")}
                />
                {errors.idade && <span>{errors.idade.message}</span>}
              </div>
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
              {errors.cidadeEstado && (
                <span>{errors.cidadeEstado.message}</span>
              )}
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

            <div className="sm:col-span-2">
              <Label htmlFor="education-level">Formação</Label>
              <div className="mt-2">
                <Select
                  defaultValue=""
                  id="education-level"
                  name="education-level"
                >
                  {educationLevels.map((level) => (
                    <option key={level} value={level}>
                      {level}
                    </option>
                  ))}
                  <option value="">Selecione</option>
                </Select>
              </div>
            </div>

            <div className="sm:col-span-2">
              <Label htmlFor="profissao">Profissão</Label>
              <div className="mt-2">
                <Input
                  id="profissao"
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
                  id="empresa-organizacao"
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
                  id="github-portifolio"
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
                  id="linkedin"
                  placeholder="Opcional"
                  type="text"
                  {...register("linkedin")}
                />
              </div>
            </div>
          </div>
        </div>
        <button type="submit"> Enviar </button>
      </Form>

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
          </div>
        </div>
        <button type="submit"> Enviar </button>
      </Form>
    </div>
  );
}
