import GithubSignInButton from "@/components/GithubSignInButton";
import SignOutButton from "@/components/SignOutButton";

const SignInPage = () => {
  return (
    <section className='flex flex-col gap-8 items-center justify-center'>
      <GithubSignInButton />
      <SignOutButton />
    </section>
  );
};

export default SignInPage;
