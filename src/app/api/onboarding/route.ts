import { authOptions } from "@/shared/auth";
import { formSchema } from "@/shared/onboarding";
import { user } from "@/shared/db";
import { getServerSession } from "next-auth";
import { NextRequest, NextResponse } from "next/server";
import { raise } from "@/shared/exceptions";

export async function POST(request: NextRequest) {
  try {
    const data = await request.json();
    const formValues = formSchema.safeParse(data);

    if (!formValues.success)
      return new NextResponse(JSON.stringify(formValues), { status: 403 });

    const session = await getServerSession(authOptions);

    const email = session?.user?.email ?? raise("E-mail not available");

    await user.updateUserOnboardingBy({ email }, data);

    return new NextResponse(null, { status: 201 });
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
