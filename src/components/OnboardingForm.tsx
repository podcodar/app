import {
  Input,
  Label,
  Select,
  Form,
  Title,
  Textarea,
} from "@/shared/components";
import { genders, educationLevels } from "@/shared/onboarding";

export default function OnboardingForm() {
  return (
    <div className="absolute h-screen w-screen z-10 top-0 left-0 bg-slate-800 overflow-auto">
      <Form>
        <div className=" border-gray-900/10">
          <Title> Formulário de Inscrição</Title>

          <div className="mt-10 grid grid-cols-2 gap-x-6 gap-y-8 sm:grid-cols-6">
            <div className="sm:col-span-2">
              <Label htmlFor="nome-social">Nome Social</Label>
              <div className="mt-2">
                <Input
                  id="nome-social"
                  name="nome-social"
                  type="text"
                />
              </div>
            </div>

            <div className="sm:col-span-2">
              <Label htmlFor="gender">Gênero</Label>
              <div className="mt-2">
                <Select
                  defaultValue={""}
                  id="gender"
                  name="gender"
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
                  name="idade"
                  type="text" //As text
                />
              </div>
            </div>

            <div className="sm:col-span-22">
              <Label htmlFor="telefone">Telefone</Label>
              <div className="mt-2">
                <Input
                  className="placeholder-gray-400"
                  id="telefone"
                  name="telefone"
                  placeholder="(00) 00000-0000"
                  type="text" //As text
                />
              </div>
            </div>

            <div className="sm:col-span-22">
              <Label htmlFor="pais">País</Label>
              <div className="mt-2">
                <Input
                  id="pais"
                  name="pais"
                  type="text"
                />
              </div>
            </div>

            <div className="sm:col-span-2">
              <Label htmlFor="cidade-estado">Cidade/Estado</Label>
              <div className="mt-2">
                <Input
                  id="cidade-estado"
                  name="cidade-estado"
                  type="text"
                />
              </div>
            </div>

            <div className="sm:col-span-2">
              <Label htmlFor="email">Email</Label>
              <div className="mt-2">
                <Input
                  id="email"
                  name="email"
                  type="email"
                />
              </div>
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
                  name="profissao"
                  placeholder="Opcional"
                  type="text"
                />
              </div>
            </div>

            <div className="sm:col-span-2">
              <Label htmlFor="empresa-organizacao">Empresa/Organização</Label>
              <div className="mt-2">
                <Input
                  id="empresa-organizacao"
                  name="empresa-organizacao"
                  placeholder="Opcional"
                  type="text"
                />
              </div>
            </div>

            <div className="sm:col-span-2">
              <Label htmlFor="github-portifolio">GitHub/Portifólio</Label>
              <div className="mt-2">
                <Input
                  id="github-portifolio"
                  name="github-portifolio"
                  placeholder="Opcional"
                  type="text"
                />
              </div>
            </div>

            <div className="sm:col-span-2">
              <Label htmlFor="linkedin">LinkedIn</Label>
              <div className="mt-2">
                <Input
                  id="linkedin"
                  name="linkedin"
                  placeholder="Opcional"
                  type="text"
                />
              </div>
            </div>
          </div>
        </div>
      </Form>

      <Form>
        <div className="sm:col-span-2">
          <Label className="text-lg mb-8" htmlFor="q-one">
            Estamos ansiosos para conhecê-lo melhor! Por favor, compartilhe um
            pouco da sua experiência e nos conte quais são as áreas da
            tecnologia que mais despertam o seu interesse.
          </Label>
          <div className="mt-2">
            <Textarea id="q-one" rows={5} />
          </div>
        </div>
      </Form>

      <Form>
        <div className="sm:col-span-2">
          <Label className="text-lg mb-8" htmlFor="q-two">
            Por favor, compartilhe conosco o motivo pelo qual você deseja
            ingressar na PodCodar, o que espera aprender ou vivenciar
            participando da comunidade?
          </Label>
          <div className="mt-2">
            <Textarea id="q-two" rows={5} />
          </div>
        </div>
      </Form>
    </div>
  );
}
