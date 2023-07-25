import { formSchema } from "@/shared/onboarding";
import { NextResponse } from "next/server";

export async function POST(request: Request) {
  try {
    const data = await request.json();
    const formValues = formSchema.safeParse(data);

    if (!formValues.success)
      return new NextResponse(JSON.stringify(formValues), { status: 403 });
    return new NextResponse(JSON.stringify(formValues.data));
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
