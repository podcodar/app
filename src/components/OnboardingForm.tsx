import { genders, educationLevels } from "@/shared/onboardingUtils";

export default function OnboardingForm() {
  return (
    <div className="absolute h-screen w-screen z-10 top-0 left-0 bg-slate-800 overflow-auto">
      <form className="formContainer">
        <div className=" border-gray-900/10">
          <h2 className="formTitle">Formulário de Inscrição</h2>

          <div className="mt-10 grid grid-cols-2 gap-x-6 gap-y-8 sm:grid-cols-6">
            <div className="sm:col-span-2">
              <label className="label" htmlFor="nome-social">
                Nome Social
              </label>
              <div className="mt-2">
                <input
                  className="input"
                  id="nome-social"
                  name="nome-social"
                  type="text"
                />
              </div>
            </div>

            <div className="sm:col-span-2">
              <label className="label" htmlFor="gender">
                Gênero
              </label>
              <div className="mt-2">
                <select
                  className="select"
                  defaultValue={"selected"}
                  id="gender"
                  name="gender"
                >
                  {genders.map((gender) => (
                    <option key={gender} value={gender}>
                      {gender}
                    </option>
                  ))}
                </select>
              </div>
            </div>

            <div className="sm:col-span-2">
              <label className="label" htmlFor="idade">
                Idade
              </label>
              <div className="mt-2">
                <input
                  className="input"
                  id="idade"
                  name="idade"
                  type="text" //As text
                />
              </div>
            </div>

            <div className="sm:col-span-22">
              <label className="label" htmlFor="telefone">
                Telefone
              </label>
              <div className="mt-2">
                <input
                  className="input placeholder-gray-400"
                  id="telefone"
                  name="telefone"
                  placeholder="(00) 00000-0000"
                  type="text" //As text
                />
              </div>
            </div>

            <div className="sm:col-span-22">
              <label className="label" htmlFor="pais">
                País
              </label>
              <div className="mt-2">
                <input
                  className="input"
                  id="pais"
                  name="pais"
                  type="text"
                />
              </div>
            </div>

            <div className="sm:col-span-2">
              <label className="label" htmlFor="cidade-estado">
                Cidade/Estado
              </label>
              <div className="mt-2">
                <input
                  className="input"
                  id="cidade-estado"
                  name="cidade-estado"
                  type="text"
                />
              </div>
            </div>

            <div className="sm:col-span-2">
              <label className="label" htmlFor="email">
                Email
              </label>
              <div className="mt-2">
                <input
                  className="input"
                  id="email"
                  name="email"
                  type="email"
                />
              </div>
            </div>

            <div className="sm:col-span-2">
              <label className="label" htmlFor="education-level">
                Formação
              </label>
              <div className="mt-2">
                <select
                  className="select"
                  defaultValue={"selected"}
                  id="education-level"
                  name="education-level"
                >
                  {educationLevels.map((level) => (
                    <option key={level} value={level}>
                      {level}
                    </option>
                  ))}
                </select>
              </div>
            </div>

            <div className="sm:col-span-2">
              <label className="label" htmlFor="profissao">
                Profissão
              </label>
              <div className="mt-2">
                <input
                  className="input"
                  id="profissao"
                  name="profissao"
                  type="text"
                />
              </div>
            </div>

            <div className="sm:col-span-2">
              <label className="label" htmlFor="empresa-organizacao">
                Empresa/Organização
              </label>
              <div className="mt-2">
                <input
                  className="input"
                  id="empresa-organizacao"
                  name="empresa-organizacao"
                  type="text"
                />
              </div>
            </div>

            <div className="sm:col-span-2">
              <label className="label" htmlFor="github-portifolio">
                GitHub/Portifólio
              </label>
              <div className="mt-2">
                <input
                  className="input"
                  id="github-portifolio"
                  name="github-portifolio"
                  type="text"
                />
              </div>
            </div>

            <div className="sm:col-span-2">
              <label className="label" htmlFor="linkedin">
                LinkedIn
              </label>
              <div className="mt-2">
                <input
                  className="input"
                  id="linkedin"
                  name="linkedin"
                  type="text"
                />
              </div>
            </div>
          </div>
        </div>
      </form>

      <form className="formContainer">
        <div className=" border-gray-900/10">
          <h2 className="formTitle">Experiência e Interesses</h2>
        </div>

        <div className="sm:col-span-2 my-5">
          <label className="label" htmlFor="questionOne">
            Qual sua experiência com tecnologia?
          </label>
          <div className="mt-2">
            <input
              className="input"
              id="questionOne"
              name="questionOne"
              type="text"
            />
          </div>
        </div>

        <div className="sm:col-span-2 my-5">
          <label className="label" htmlFor="questionTwo">
            Quais contato com alguma linguagem de programação? Se sim, qual?
          </label>
          <div className="mt-2">
            <input
              className="input"
              id="questionTwo"
              name="questionTwo"
              type="text"
            />
          </div>
        </div>

        <div className="sm:col-span-2 my-5">
          <label className="label" htmlFor="questionThree">
            Quais são os frameworks, bibliotecas ou tecnologias que você já teve
            contato?
          </label>
          <div className="mt-2">
            <input
              className="input"
              id="questionThree"
              name="questionThree"
              type="text"
            />
          </div>
        </div>

        <div className="sm:col-span-2 my-5">
          <label className="label" htmlFor="questionFour">
            Você já trabalhou em projetos de programação? Se sim, descreva-os
            brevemente.
          </label>
          <div className="mt-2">
            <input
              className="input"
              id="questionFour"
              name="questionFour"
              type="text"
            />
          </div>
        </div>
        <div className="sm:col-span-2 my-5">
          <label className="label" htmlFor="questionFour">
            Quais são as suas principais áreas de interesse em tecnologia? (Web
            Development, Mobile Development, Design, Data Science, etc.)
          </label>
          <div className="mt-2">
            <input
              className="input"
              id="questionFour"
              name="questionFour"
              type="text"
            />
          </div>
        </div>

        <div className="sm:col-span-2 my-5">
          <label className="label" htmlFor="hobbie">
            Quais são seus hobbies e interesses fora da tecnologia?
          </label>
          <div className="mt-2">
            <input
              className="input"
              id="hobbie"
              name="hobbie"
              type="text"
            />
          </div>
        </div>
      </form>

      <form className="formContainer">
        <div className=" border-gray-900/10">
          <h2 className="formTitle">Expectativa e Objetivos</h2>
        </div>
        <div className="sm:col-span-2 my-5">
          <label className="label" htmlFor="questionFive">
            Por que você deseja ingressar na PodCodar?
          </label>
          <div className="mt-2">
            <input
              className="input"
              id="questionFive"
              name="questionFive"
              type="text"
            />
          </div>
        </div>

        <div className="sm:col-span-2 my-5">
          <label className="label" htmlFor="questionSix">
            Quais são seus objetivos pessoais/profissionais relacionados à
            programação?
          </label>
          <div className="mt-2">
            <input
              className="input"
              id="questionSix"
              name="questionSix"
              type="text"
            />
          </div>
        </div>

        <div className="sm:col-span-2 my-5">
          <label className="label" htmlFor="questionSeven">
            O que você espera aprender ou alcançar participando da comunidade?
          </label>
          <div className="mt-2">
            <input
              className="input"
              id="questionSeven"
              name="questionSeven"
              type="text"
            />
          </div>
        </div>

        <div className="sm:col-span- my-5">
          <label className="label" htmlFor="questionEight">
            Você está disposto a contribuir para a comunidade interagindo e
            compartilhando seu conhecimento ou experiência?
          </label>
          <div className="mt-2">
            <input
              className="input"
              id="questionEight"
              name="questionEight"
              type="text"
            />
          </div>
        </div>

        <div className="sm:col-span-2 my-5">
          <label className="label" htmlFor="questionNine">
            Quais são os tipos de recursos, atividades ou eventos que você
            gostaria de ver na comunidade?
          </label>
          <div className="mt-2">
            <input
              className="input"
              id="questionNine"
              name="questionNine"
              type="text"
            />
          </div>
        </div>
        <div className="sm:col-span-2 my-5">
          <label className="label" htmlFor="questionTen">
            Qual forma você acha mais interessante para se envolver com a
            comunidade? (Participação nos Meetups, interação online,
            contribuição em projetos colaborativos, participação nas Trilhas de
            Mentorias, etc.)
          </label>
          <div className="mt-2">
            <input
              className="input"
              id="questionTen"
              name="questionTen"
              type="text"
            />
          </div>
        </div>
        <div className="sm:col-span-2 my-5">
          <label className="label" htmlFor="questionEleven">
            Quais são seus canais de comunicação preferidos? (Whatsapp, Slack,
            Discord, redes sociais…)
          </label>
          <div className="mt-2">
            <input
              className="input"
              id="questionEleven"
              name="questionEleven"
              type="text"
            />
          </div>
        </div>

        <div className="sm:col-span-2 my-5">
          <label className="label" htmlFor="questionTwelve">
            Você está interessado em participar dos grupos de estudo, projetos
            ou mentorias dentro da comunidade?
          </label>
          <div className="mt-2">
            <input
              className="input"
              id="questionTwelve"
              name="questionTwelve"
              type="text"
            />
          </div>
        </div>
        <div className="sm:col-span-2 my-5">
          <label className="label" htmlFor="questionThirteen">
            Como você costuma aprender novos conceitos ou tecnologias
            relacionadas à programação? (Livros, cursos online, tutoriais, etc.)
          </label>
          <div className="mt-2">
            <input
              className="input"
              id="questionThirteen"
              name="questionThirteen"
              type="text"
            />
          </div>
        </div>
        <div className="sm:col-span-2 my-5">
          <label className="label" htmlFor="questionFourteen">
            Existe algo específico que você gostaria de aprender ou explorar na
            comunidade?
          </label>
          <div className="mt-2">
            <input
              className="input"
              id="questionFourteen"
              name="questionFourteen"
              type="text"
            />
          </div>
        </div>
      </form>
    </div>
  );
}
