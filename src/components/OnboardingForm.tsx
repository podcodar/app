import { Input, Label, Select, Form, Title } from "@/shared/components";
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
                  defaultValue={"selected"}
                  id="gender"
                  name="gender"
                >
                  {genders.map((gender) => (
                    <option key={gender} value={gender}>
                      {gender}
                    </option>
                  ))}
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
                  defaultValue={"selected"}
                  id="education-level"
                  name="education-level"
                >
                  {educationLevels.map((level) => (
                    <option key={level} value={level}>
                      {level}
                    </option>
                  ))}
                </Select>
              </div>
            </div>

            <div className="sm:col-span-2">
              <Label htmlFor="profissao">Profissão</Label>
              <div className="mt-2">
                <Input
                  id="profissao"
                  name="profissao"
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
                  type="text"
                />
              </div>
            </div>
          </div>
        </div>
      </Form>

      <Form>
        <div className=" border-gray-900/10">
          <Title>Experiência e Interesses</Title>
        </div>

        <div className="sm:col-span-2 my-5">
          <Label htmlFor="questionOne">
            Qual sua experiência com tecnologia?
          </Label>
          <div className="mt-2">
            <Input
              id="questionOne"
              name="questionOne"
              type="text"
            />
          </div>
        </div>

        <div className="sm:col-span-2 my-5">
          <Label htmlFor="questionTwo">
            Quais contato com alguma linguagem de programação? Se sim, qual?
          </Label>
          <div className="mt-2">
            <Input
              id="questionTwo"
              name="questionTwo"
              type="text"
            />
          </div>
        </div>

        <div className="sm:col-span-2 my-5">
          <Label htmlFor="questionThree">
            Quais são os frameworks, bibliotecas ou tecnologias que você já teve
            contato?
          </Label>
          <div className="mt-2">
            <Input
              id="questionThree"
              name="questionThree"
              type="text"
            />
          </div>
        </div>

        <div className="sm:col-span-2 my-5">
          <Label htmlFor="questionFour">
            Você já trabalhou em projetos de programação? Se sim, descreva-os
            brevemente.
          </Label>
          <div className="mt-2">
            <Input
              id="questionFour"
              name="questionFour"
              type="text"
            />
          </div>
        </div>
        <div className="sm:col-span-2 my-5">
          <Label htmlFor="questionFour">
            Quais são as suas principais áreas de interesse em tecnologia? (Web
            Development, Mobile Development, Design, Data Science, etc.)
          </Label>
          <div className="mt-2">
            <Input
              id="questionFour"
              name="questionFour"
              type="text"
            />
          </div>
        </div>

        <div className="sm:col-span-2 my-5">
          <Label htmlFor="hobbie">
            Quais são seus hobbies e interesses fora da tecnologia?
          </Label>
          <div className="mt-2">
            <Input
              id="hobbie"
              name="hobbie"
              type="text"
            />
          </div>
        </div>
      </Form>

      <Form>
        <div className=" border-gray-900/10">
          <Title>Expectativa e Objetivos</Title>
        </div>
        <div className="sm:col-span-2 my-5">
          <Label htmlFor="questionFive">
            Por que você deseja ingressar na PodCodar?
          </Label>
          <div className="mt-2">
            <Input
              id="questionFive"
              name="questionFive"
              type="text"
            />
          </div>
        </div>

        <div className="sm:col-span-2 my-5">
          <Label htmlFor="questionSix">
            Quais são seus objetivos pessoais/profissionais relacionados à
            programação?
          </Label>
          <div className="mt-2">
            <Input
              id="questionSix"
              name="questionSix"
              type="text"
            />
          </div>
        </div>

        <div className="sm:col-span-2 my-5">
          <Label htmlFor="questionSeven">
            O que você espera aprender ou alcançar participando da comunidade?
          </Label>
          <div className="mt-2">
            <Input
              id="questionSeven"
              name="questionSeven"
              type="text"
            />
          </div>
        </div>

        <div className="sm:col-span- my-5">
          <Label htmlFor="questionEight">
            Você está disposto a contribuir para a comunidade interagindo e
            compartilhando seu conhecimento ou experiência?
          </Label>
          <div className="mt-2">
            <Input
              id="questionEight"
              name="questionEight"
              type="text"
            />
          </div>
        </div>

        <div className="sm:col-span-2 my-5">
          <Label htmlFor="questionNine">
            Quais são os tipos de recursos, atividades ou eventos que você
            gostaria de ver na comunidade?
          </Label>
          <div className="mt-2">
            <Input
              id="questionNine"
              name="questionNine"
              type="text"
            />
          </div>
        </div>
        <div className="sm:col-span-2 my-5">
          <Label htmlFor="questionTen">
            Qual forma você acha mais interessante para se envolver com a
            comunidade? (Participação nos Meetups, interação online,
            contribuição em projetos colaborativos, participação nas Trilhas de
            Mentorias, etc.)
          </Label>
          <div className="mt-2">
            <Input
              id="questionTen"
              name="questionTen"
              type="text"
            />
          </div>
        </div>
        <div className="sm:col-span-2 my-5">
          <Label htmlFor="questionEleven">
            Quais são seus canais de comunicação preferidos? (Whatsapp, Slack,
            Discord, redes sociais…)
          </Label>
          <div className="mt-2">
            <Input
              id="questionEleven"
              name="questionEleven"
              type="text"
            />
          </div>
        </div>

        <div className="sm:col-span-2 my-5">
          <Label htmlFor="questionTwelve">
            Você está interessado em participar dos grupos de estudo, projetos
            ou mentorias dentro da comunidade?
          </Label>
          <div className="mt-2">
            <Input
              id="questionTwelve"
              name="questionTwelve"
              type="text"
            />
          </div>
        </div>
        <div className="sm:col-span-2 my-5">
          <Label htmlFor="questionThirteen">
            Como você costuma aprender novos conceitos ou tecnologias
            relacionadas à programação? (Livros, cursos online, tutoriais, etc.)
          </Label>
          <div className="mt-2">
            <Input
              id="questionThirteen"
              name="questionThirteen"
              type="text"
            />
          </div>
        </div>
        <div className="sm:col-span-2 my-5">
          <Label htmlFor="questionFourteen">
            Existe algo específico que você gostaria de aprender ou explorar na
            comunidade?
          </Label>
          <div className="mt-2">
            <Input
              id="questionFourteen"
              name="questionFourteen"
              type="text"
            />
          </div>
        </div>
      </Form>
    </div>
  );
}
