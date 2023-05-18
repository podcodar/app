import Image from "next/image";
import SignInButton from "./SignInButton";

type Props = {
  error?: string;
};

export default function SignInForm(props: Props) {
  return (
    <>
      <div className="flex min-h-screen flex-1 flex-col justify-center px-6 py-12 lg:px-8">
        <div className="sm:mx-auto sm:w-full sm:max-w-sm">
          <Image
            alt="PodCodar Llama"
            className="mx-auto"
            height={128}
            priority
            src="/images/logo.svg"
            width={128}
          />
          <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-white">
            Sign in to your account
          </h2>
        </div>

        <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
          <div className="mt-5 flex gap-4 flex-col">
            <SignInButton provider="google">Continue with Google</SignInButton>
            <SignInButton provider="github">Continue with Github</SignInButton>
          </div>
          {props.error && (
            <p className="text-red-300 text-center py-4 text-sm">
              {props.error}
            </p>
          )}
        </div>
      </div>
    </>
  );
}
