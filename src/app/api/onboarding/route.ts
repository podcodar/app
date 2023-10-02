import { authOptions } from "@/shared/auth";
import { formSchema } from "@/shared/onboarding";
import { user } from "@/dao/user.dao";
import { getServerSession } from "next-auth";
import { NextRequest, NextResponse } from "next/server";
import { raise } from "@/shared/exceptions";
import { task } from "@/dao/tasks.dao";

export async function POST(request: NextRequest) {
  try {
    const data = await request.json();
    const formValues = formSchema.safeParse(data);

    if (!formValues.success)
      return new NextResponse(JSON.stringify(formValues), { status: 403 });

    const session = await getServerSession(authOptions);
    const email = session?.user?.email ?? raise("E-mail not available");
    const userData =
      (await user.fetchUserBy({ email })) ?? raise("User not found");

    await user.updateUserOnboardingBy({ email }, formValues.data);

    const tasksWithNoDependencies = await task.listNoDependenciesTasks();
    await user.assignTasksToUser(userData.id, tasksWithNoDependencies);

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
