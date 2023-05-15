import SignInForm from "@/components/SignInForm";
import { authOptions } from "@/shared/auth";
import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";

const SignInPage = async () => {
  const session = await getServerSession(authOptions);

  if (session) {
    // TODO: get user role to see where to redirect (/app or /admin)
    return redirect("/app");
  }

  return (
    <section className='flex flex-col gap-8 items-center justify-center bg-gray-800'>
      <SignInForm />
    </section>
  );
};

export default SignInPage;
