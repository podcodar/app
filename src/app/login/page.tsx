import SignInForm from "@/components/SignInForm";
import { authOptions } from "@/shared/auth";
import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";

type PageProps = {
  searchParams: ErrorSearchParams | SuccessSeachParams;
};

export default async function SignInPage({ searchParams }: PageProps) {
  const session = await getServerSession(authOptions);
  const error = parseErrorParams(searchParams);

  if (session) {
    // TODO: get user role to see where to redirect (/app or /admin)
    return redirect("/app");
  }

  return (
    <section className="flex flex-col gap-8 items-center justify-center bg-gray-800">
      <SignInForm error={error} />
    </section>
  );
}

type ErrorSearchParams = {
  error_description: string;
  error_uri: string;
  error: string;
  state: string;
};

type SuccessSeachParams = undefined;

function parseErrorParams(searchParams: PageProps["searchParams"]) {
  const description = searchParams?.error_description ?? "";
  const url = searchParams?.error_uri ?? "";
  return `${description}\n${url}`;
}
