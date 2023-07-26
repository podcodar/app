import { formSchema } from "@/shared/onboarding";
import { NextResponse } from "next/server";
import { prisma } from "@/shared/db";

export async function POST(request: Request) {
  try {
    const dataWithId = await request.json();
    const { data } = dataWithId;
    const { id } = dataWithId;
    const formValues = formSchema.safeParse(data);

    if (!formValues.success)
      return new NextResponse(JSON.stringify(formValues), { status: 403 });

    try {
      await prisma.user.update({
        where: { id: id },
        data: {
          socialName: data.registration.nomeSocial,
          gender: data.registration.gender,
          age: parseInt(data.registration.idade),
          country: data.contact.pais,
          city: data.contact.cidadeEstado,
          phoneNumber: data.contact.telefone,
          educationLevel: data.professional.educationLevel,
          profession: data.professional.profissao,
          company: data.professional.empresaOrganizacao,
          github: data.professional.githubPortifolio,
          linkedin: data.professional.linkedin,
          qOne: data.about.qOne,
          qTwo: data.about.qTwo,
        },
      });
    } catch (error) {
      console.log("DB could not update user:", error);
    }

    return new NextResponse(JSON.stringify(data));
  } catch (error) {
    console.error("Erro na API:", error);

    return new NextResponse(
      JSON.stringify({ error: "Ocorreu um erro na API." }),
      {
        status: 500,
        headers: { "Content-Type": "application/json" },
      }
    );
  }
}

//TODO: Direct to route after submit
